import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:5173';
const OUT_DIR = path.resolve('qa-audit-results');
const SCREENSHOTS_DIR = path.join(OUT_DIR, 'screenshots-after');
const NAVBAR_DIR = path.join(OUT_DIR, 'navbar-after');

if (!fs.existsSync(SCREENSHOTS_DIR)) fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
if (!fs.existsSync(NAVBAR_DIR)) fs.mkdirSync(NAVBAR_DIR, { recursive: true });

const VIEWPORTS = [
  { width: 1920, height: 1080, name: '1920x1080' },
  { width: 1600, height: 900, name: '1600x900' },
  { width: 1440, height: 900, name: '1440x900' },
  { width: 1366, height: 768, name: '1366x768' },
  { width: 1280, height: 800, name: '1280x800' },
  { width: 1200, height: 800, name: '1200x800' },
  { width: 1140, height: 800, name: '1140x800' },
  { width: 1100, height: 800, name: '1100x800' },
  { width: 1024, height: 768, name: '1024x768' },
  { width: 820, height: 1180, name: '820x1180' },
  { width: 768, height: 1024, name: '768x1024' },
  { width: 430, height: 932, name: '430x932' },
  { width: 390, height: 844, name: '390x844' },
  { width: 375, height: 812, name: '375x812' },
  { width: 360, height: 800, name: '360x800' },
  { width: 320, height: 720, name: '320x720' },
];

const postCorrectionData = {
  timestamp: new Date().toISOString(),
  navbarMetrics: {},
  responsiveAudits: [],
  functionalTests: {}
};

async function runPostCorrectionValidation() {
  console.log('--- POST-CORRECTION AUTOMATED PLAYWRIGHT AUDIT ---');
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage();

  // 1. NAVBAR MEASUREMENTS ACROSS ALL VIEWPORTS
  console.log('\nMeasuring 3-Group Navbar across viewports...');
  await page.goto(`${BASE_URL}/`, { waitUntil: 'domcontentloaded' });

  for (const vp of VIEWPORTS) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.waitForTimeout(250);

    const metrics = await page.evaluate(() => {
      const brandGroup = document.querySelector('[class*="brandGroup"]');
      const navLinksGroup = document.querySelector('[class*="navLinksGroup"]');
      const actionsGroup = document.querySelector('[class*="actionsGroup"]');
      const logoImg = document.querySelector('[class*="logoImg"]');
      const companyName = document.querySelector('[class*="companyName"]');
      const navLinks = Array.from(document.querySelectorAll('[class*="navLinksGroup"] a[class*="navLink"]'));
      const bookBtn = document.querySelector('[class*="bookBtn"]');
      const mobileToggle = document.querySelector('[class*="mobileToggle"]');

      const getRect = el => {
        if (!el) return null;
        const r = el.getBoundingClientRect();
        const style = window.getComputedStyle(el);
        return {
          top: Math.round(r.top),
          left: Math.round(r.left),
          right: Math.round(r.right),
          bottom: Math.round(r.bottom),
          width: Math.round(r.width),
          height: Math.round(r.height),
          display: style.display
        };
      };

      const brandRect = getRect(brandGroup);
      const navGroupRect = getRect(navLinksGroup);
      const actionsRect = getRect(actionsGroup);
      const ctaRect = getRect(bookBtn);
      const toggleRect = getRect(mobileToggle);

      const linkRects = navLinks.map(l => ({
        text: l.textContent.trim(),
        rect: getRect(l)
      }));

      // Calculate gaps
      let brandToNavGap = null;
      let navToCtaGap = null;
      let brandToFirstLinkGap = null;

      const visibleLinks = linkRects.filter(l => l.rect && l.rect.width > 0);
      if (brandRect && visibleLinks.length > 0) {
        brandToFirstLinkGap = visibleLinks[0].rect.left - brandRect.right;
        brandToNavGap = navGroupRect ? navGroupRect.left - brandRect.right : null;
      }
      if (ctaRect && ctaRect.width > 0 && visibleLinks.length > 0) {
        navToCtaGap = ctaRect.left - visibleLinks[visibleLinks.length - 1].rect.right;
      }

      const isCtaClipped = ctaRect && ctaRect.width > 0 ? (ctaRect.right > window.innerWidth) : false;

      return {
        windowWidth: window.innerWidth,
        brandRect,
        logoImgRect: getRect(logoImg),
        companyNameRect: getRect(companyName),
        navGroupRect,
        actionsRect,
        ctaRect,
        isCtaClipped,
        isCtaVisible: ctaRect ? ctaRect.width > 0 && ctaRect.display !== 'none' : false,
        toggleRect,
        isToggleVisible: toggleRect ? toggleRect.display !== 'none' : false,
        visibleLinkCount: visibleLinks.length,
        brandToFirstLinkGap,
        brandToNavGap,
        navToCtaGap,
        scrollWidth: document.documentElement.scrollWidth,
        hasOverflow: document.documentElement.scrollWidth > window.innerWidth
      };
    });

    const nbSs = path.join(NAVBAR_DIR, `navbar-${vp.width}px.png`);
    await page.screenshot({ path: nbSs, clip: { x: 0, y: 0, width: vp.width, height: 110 } });
    metrics.screenshot = nbSs;

    postCorrectionData.navbarMetrics[vp.width] = metrics;
    console.log(`[${vp.name}] Links: ${metrics.visibleLinkCount}, Toggle: ${metrics.isToggleVisible}, Brand-to-Home Gap: ${metrics.brandToFirstLinkGap}px, CTA Clipped: ${metrics.isCtaClipped}, Overflow: ${metrics.hasOverflow}`);
  }

  // 2. CAPTURE KEY PAGE FULL SCREENSHOTS
  console.log('\nCapturing key page full-page screenshots at 1440x900...');
  await page.setViewportSize({ width: 1440, height: 900 });

  const pagesToShot = [
    { name: 'home', path: '/' },
    { name: 'solutions', path: '/solutions' },
    { name: 'portfolio', path: '/portfolio' },
    { name: 'resources', path: '/resources' },
    { name: 'contact', path: '/contact' }
  ];

  for (const p of pagesToShot) {
    await page.goto(`${BASE_URL}${p.path}`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(400);
    const ss = path.join(SCREENSHOTS_DIR, `page-${p.name}-1440-after.png`);
    await page.screenshot({ path: ss, fullPage: true });
    console.log(`Saved screenshot: ${ss}`);
  }

  // Mobile screenshot at 390x844
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${BASE_URL}/`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(300);
  const mobSs = path.join(SCREENSHOTS_DIR, `page-home-390-mobile-after.png`);
  await page.screenshot({ path: mobSs, fullPage: true });

  // 3. RETEST MODULE DRAWER ESCAPE KEY DISMISSAL
  console.log('\nTesting Module Drawer keyboard dismissal (ESC key)...');
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${BASE_URL}/modules`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(500);

  const firstModuleCard = page.locator('h3:has-text("Accounting"), h3:has-text("Sales"), h3:has-text("Inventory")').first();
  await firstModuleCard.click({ force: true });
  await page.waitForTimeout(600);

  const drawerOverlay = page.locator('div[class*="drawerOverlay"]').first();
  const opened = await drawerOverlay.isVisible();
  await page.keyboard.press('Escape');
  // Allow Framer Motion exit animation to complete (spring animation)
  await page.waitForTimeout(800);
  const closedAfterEsc = !(await page.locator('div[class*="drawerOverlay"]').isVisible().catch(() => false));

  postCorrectionData.functionalTests.moduleDrawerEsc = {
    opened,
    closedAfterEsc,
    verdict: opened && closedAfterEsc ? 'PASS' : 'FAIL'
  };
  console.log(`Module Drawer ESC Test: Opened=${opened}, ClosedAfterEsc=${closedAfterEsc} -> ${postCorrectionData.functionalTests.moduleDrawerEsc.verdict}`);

  // 4. RETEST CONTACT FORM REQUIRED LABELS & VALIDATION
  console.log('\nTesting Contact Form Validation & Required Asterisks...');
  await page.goto(`${BASE_URL}/contact`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);

  const empStrengthLabel = await page.locator('label[for="employeeStrength"]').textContent();
  const stateLabel = await page.locator('label[for="state"]').textContent();

  const submitBtn = page.locator('button[type="submit"]').first();
  await submitBtn.click();
  await page.waitForTimeout(400);

  const errorMessages = await page.locator('[role="alert"]').allTextContents();
  const hasEmpStrengthError = errorMessages.some(m => m.toLowerCase().includes('employee strength'));
  const hasStateError = errorMessages.some(m => m.toLowerCase().includes('state'));

  postCorrectionData.functionalTests.contactFormValidation = {
    empStrengthLabel,
    stateLabel,
    totalErrors: errorMessages.length,
    hasEmpStrengthError,
    hasStateError,
    verdict: empStrengthLabel.includes('*') && stateLabel.includes('*') && hasEmpStrengthError && hasStateError ? 'PASS' : 'FAIL'
  };
  console.log(`Contact Form: EmpLabel="${empStrengthLabel}", StateLabel="${stateLabel}", TotalErrors=${errorMessages.length} -> ${postCorrectionData.functionalTests.contactFormValidation.verdict}`);

  // Save report
  fs.writeFileSync(path.join(OUT_DIR, 'post-correction-data.json'), JSON.stringify(postCorrectionData, null, 2));
  console.log(`\nPost-correction verification complete. Results saved in ${OUT_DIR}`);

  await browser.close();
}

runPostCorrectionValidation().catch(err => {
  console.error('Validation failed:', err);
  process.exit(1);
});
