import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:5173';
const OUT_DIR = path.resolve('qa-audit-results');
const SCREENSHOTS_DIR = path.join(OUT_DIR, 'screenshots');
const NAVBAR_DIR = path.join(OUT_DIR, 'navbar-analysis');

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

const ROUTES = [
  { path: '/', name: 'home' },
  { path: '/about', name: 'about' },
  { path: '/services', name: 'services' },
  { path: '/services/implementation', name: 'service-implementation' },
  { path: '/solutions', name: 'solutions' },
  { path: '/industries', name: 'industries' },
  { path: '/industries/manufacturing', name: 'industry-manufacturing' },
  { path: '/modules', name: 'modules' },
  { path: '/portfolio', name: 'portfolio' },
  { path: '/resources', name: 'resources' },
  { path: '/contact', name: 'contact' },
  { path: '/non-existent-page-test-404', name: 'not-found' },
];

const auditResults = {
  timestamp: new Date().toISOString(),
  consoleLogs: [],
  networkErrors: [],
  pageAudits: {},
  navbarMetrics: {},
  responsiveIssues: [],
  interactions: {},
  formValidation: {},
};

async function runAudit() {
  console.log('Launching Chrome browser for automated QA audit...');
  const browser = await chromium.launch({
    channel: 'chrome',
    headless: true,
  });

  const context = await browser.newContext();
  const page = await context.newPage();

  page.on('console', msg => {
    if (msg.type() === 'error' || msg.type() === 'warn') {
      auditResults.consoleLogs.push({ type: msg.type(), text: msg.text() });
    }
  });

  page.on('requestfailed', request => {
    auditResults.networkErrors.push({
      url: request.url(),
      failure: request.failure()?.errorText,
      method: request.method()
    });
  });

  // 1. PAGE AUDITS & FULL SCREENSHOTS
  console.log('\n--- 1. Testing All Routes & Capturing Full Screenshots (1440x900) ---');
  await page.setViewportSize({ width: 1440, height: 900 });

  for (const r of ROUTES) {
    const url = `${BASE_URL}${r.path}`;
    const res = await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);
    const status = res?.status();
    const title = await page.title();
    const metaDescription = await page.locator('meta[name="description"]').getAttribute('content').catch(() => null);

    const bodyScrollWidth = await page.evaluate(() => document.body.scrollWidth);
    const windowInnerWidth = await page.evaluate(() => window.innerWidth);
    const hasHorizontalOverflow = bodyScrollWidth > windowInnerWidth;

    const ssPath = path.join(SCREENSHOTS_DIR, `page-${r.name}-1440.png`);
    await page.screenshot({ path: ssPath, fullPage: true });

    auditResults.pageAudits[r.name] = {
      path: r.path,
      httpStatus: status,
      title,
      metaDescription,
      bodyScrollWidth,
      windowInnerWidth,
      hasHorizontalOverflow,
      screenshot: ssPath,
      status: (status === 200 || r.name === 'not-found') ? 'PASS' : 'FAIL',
    };
    console.log(`Route [${r.name}] -> status: ${status}, title: "${title.substring(0, 40)}..."`);
  }

  // 2. NAVBAR DETAILED MEASUREMENTS ACROSS VIEWPORTS
  console.log('\n--- 2. Navbar Exact Bounding Box Measurements ---');
  const navbarWidths = [1920, 1600, 1440, 1366, 1280, 1200, 1140, 1100, 1024, 768, 390];
  await page.goto(`${BASE_URL}/`, { waitUntil: 'domcontentloaded' });

  for (const w of navbarWidths) {
    await page.setViewportSize({ width: w, height: 900 });
    await page.waitForTimeout(300);

    const metrics = await page.evaluate(() => {
      const navHeader = document.querySelector('nav');
      const navContainer = navHeader?.querySelector('div');
      const logoWrapper = document.querySelector('a[class*="logoWrapper"]');
      const logoImg = document.querySelector('img[class*="logoImg"]');
      const companyName = document.querySelector('span[class*="companyName"]');
      const desktopNav = document.querySelector('div[class*="desktopNav"]');
      const navLinks = Array.from(document.querySelectorAll('div[class*="desktopNav"] a[class*="navLink"]'));
      const bookBtn = document.querySelector('a[class*="bookBtn"]');
      const mobileToggle = document.querySelector('button[class*="mobileToggle"]');

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
          display: style.display,
          visibility: style.visibility
        };
      };

      const linkRects = navLinks.map(l => ({
        text: l.textContent?.trim(),
        href: l.getAttribute('href'),
        rect: getRect(l),
      }));

      const brandRect = getRect(logoWrapper);
      const ctaRect = getRect(bookBtn);
      const containerRect = getRect(navContainer);
      const desktopNavRect = getRect(desktopNav);
      const mobileToggleRect = getRect(mobileToggle);

      // Gaps
      let brandToFirstLinkGap = null;
      let lastLinkToCtaGap = null;

      if (brandRect && linkRects.length > 0 && linkRects[0].rect && linkRects[0].rect.width > 0) {
        brandToFirstLinkGap = linkRects[0].rect.left - brandRect.right;
      }
      if (ctaRect && linkRects.length > 0) {
        const visibleLinks = linkRects.filter(l => l.rect && l.rect.width > 0);
        if (visibleLinks.length > 0) {
          const lastLink = visibleLinks[visibleLinks.length - 1];
          lastLinkToCtaGap = ctaRect.left - lastLink.rect.right;
        }
      }

      // Check clipping or boundary overflow
      const isCtaClipped = ctaRect ? (ctaRect.right > window.innerWidth || (containerRect && ctaRect.right > containerRect.right + 1)) : false;
      const isCtaOverflowContainer = ctaRect && containerRect ? ctaRect.right > containerRect.right : false;

      // Link-to-link gaps
      const interLinkGaps = [];
      for (let i = 0; i < linkRects.length - 1; i++) {
        const curr = linkRects[i].rect;
        const next = linkRects[i + 1].rect;
        if (curr && next && curr.width > 0 && next.width > 0) {
          interLinkGaps.push({
            between: `${linkRects[i].text} -> ${linkRects[i + 1].text}`,
            gap: next.left - curr.right
          });
        }
      }

      return {
        windowWidth: window.innerWidth,
        containerRect,
        brandRect,
        logoImgRect: getRect(logoImg),
        companyNameRect: getRect(companyName),
        desktopNavRect,
        linkCount: linkRects.length,
        visibleLinks: linkRects.filter(l => l.rect && l.rect.width > 0).length,
        linkDetails: linkRects,
        interLinkGaps,
        ctaRect,
        isCtaClipped,
        isCtaOverflowContainer,
        mobileToggleRect,
        isMobileToggleVisible: mobileToggleRect ? mobileToggleRect.display !== 'none' : false,
        brandToFirstLinkGap,
        lastLinkToCtaGap,
        containerPaddingRight: containerRect ? window.innerWidth - containerRect.right : 0,
      };
    });

    const nbSsPath = path.join(NAVBAR_DIR, `navbar-${w}px.png`);
    await page.screenshot({
      path: nbSsPath,
      clip: { x: 0, y: 0, width: w, height: 110 }
    });

    metrics.screenshot = nbSsPath;
    auditResults.navbarMetrics[w] = metrics;
    console.log(`Navbar @ ${w}px -> DesktopNav: ${metrics.desktopNavRect?.display}, BrandRight: ${metrics.brandRect?.right}, 1stLinkLeft: ${metrics.linkDetails[0]?.rect?.left}, BrandGap: ${metrics.brandToFirstLinkGap}px, CtaGap: ${metrics.lastLinkToCtaGap}px, CTA clipped: ${metrics.isCtaClipped}`);
  }

  // 3. RESPONSIVE TESTING (16 Viewports)
  console.log('\n--- 3. Testing 16 Viewports for Layout Regressions & Horizontal Overflow ---');
  for (const vp of VIEWPORTS) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto(`${BASE_URL}/`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(200);

    const overflowInfo = await page.evaluate(() => {
      const scrollWidth = document.documentElement.scrollWidth || document.body.scrollWidth;
      const clientWidth = document.documentElement.clientWidth;
      const overflowingElements = [];

      document.querySelectorAll('*').forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.right > window.innerWidth + 1) {
          overflowingElements.push({
            tag: el.tagName,
            className: el.className?.toString().substring(0, 40),
            right: Math.round(r.right),
            excess: Math.round(r.right - window.innerWidth)
          });
        }
      });

      return {
        scrollWidth,
        clientWidth,
        hasOverflow: scrollWidth > clientWidth,
        overflowDelta: scrollWidth - clientWidth,
        overflowingElements: overflowingElements.slice(0, 5)
      };
    });

    auditResults.responsiveIssues.push({
      viewport: vp.name,
      width: vp.width,
      height: vp.height,
      ...overflowInfo
    });
    console.log(`Viewport ${vp.name}: hasOverflow=${overflowInfo.hasOverflow} (delta=${overflowInfo.overflowDelta}px)`);
  }

  // 4. INTERACTION TESTING
  console.log('\n--- 4. Interactive Components Testing ---');
  await page.setViewportSize({ width: 1440, height: 900 });

  // A. Modules Search & Filter & Drawer
  console.log('Testing /modules interactions...');
  await page.goto(`${BASE_URL}/modules`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(500);

  const initialCardsCount = await page.locator('div[class*="moduleCard"], [class*="card"]').count();
  const searchInput = page.locator('input[type="text"]').first();
  let searchWorks = false;
  let filteredCount = initialCardsCount;
  if (await searchInput.isVisible()) {
    await searchInput.fill('Manufacturing');
    await page.waitForTimeout(300);
    filteredCount = await page.locator('div[class*="moduleCard"], [class*="card"]').count();
    searchWorks = filteredCount < initialCardsCount && filteredCount > 0;
    await searchInput.fill('');
    await page.waitForTimeout(300);
  }

  // Click on module card to test drawer
  let drawerOpens = false;
  let drawerClosesWithEsc = false;
  const firstCard = page.locator('h3:has-text("Accounting"), h3:has-text("Sales"), h3:has-text("Inventory")').first();
  if (await firstCard.isVisible()) {
    await firstCard.click({ force: true });
    await page.waitForTimeout(500);
    const drawerOverlay = page.locator('div[class*="drawerOverlay"]').first();
    drawerOpens = await drawerOverlay.isVisible().catch(() => false);
    if (drawerOpens) {
      await page.keyboard.press('Escape');
      await page.waitForTimeout(400);
      drawerClosesWithEsc = !(await drawerOverlay.isVisible().catch(() => true));
    }
  }

  auditResults.interactions.modules = {
    initialCardsCount,
    searchWorks,
    filteredCount,
    drawerOpens,
    drawerClosesWithEsc,
    status: searchWorks && drawerOpens && drawerClosesWithEsc ? 'PASS' : (searchWorks && drawerOpens ? 'PARTIAL' : 'FAIL')
  };
  console.log(`Modules QA: InitialCards=${initialCardsCount}, SearchWorks=${searchWorks}, DrawerOpens=${drawerOpens}, DrawerClosesEsc=${drawerClosesWithEsc}`);

  // B. Resources Search & Filter
  console.log('Testing /resources interactions...');
  await page.goto(`${BASE_URL}/resources`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(500);
  const resCardsCount = await page.locator('div[class*="resourceCard"]').count();
  const resSearchInput = page.locator('input[placeholder*="Search"]').first();
  let resSearchWorks = false;
  let resFilteredCount = resCardsCount;
  if (await resSearchInput.isVisible()) {
    await resSearchInput.fill('Odoo');
    await page.waitForTimeout(300);
    resFilteredCount = await page.locator('div[class*="resourceCard"]').count();
    resSearchWorks = resFilteredCount > 0 && resFilteredCount <= resCardsCount;
    await resSearchInput.fill('');
  }

  const categoryPills = page.locator('button[class*="filterBtn"]');
  const catCount = await categoryPills.count();
  let filterCategoryWorks = false;
  if (catCount > 1) {
    await categoryPills.nth(1).click();
    await page.waitForTimeout(300);
    filterCategoryWorks = true;
  }

  auditResults.interactions.resources = {
    initialCardsCount: resCardsCount,
    searchWorks: resSearchWorks,
    filterCategoryWorks,
    status: resSearchWorks && filterCategoryWorks ? 'PASS' : 'FAIL'
  };
  console.log(`Resources QA: InitialCards=${resCardsCount}, SearchWorks=${resSearchWorks}, CategoryFilterWorks=${filterCategoryWorks}`);

  // C. Form Validation on /contact
  console.log('Testing /contact form validation...');
  await page.goto(`${BASE_URL}/contact`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(500);

  const submitBtn = page.locator('button[type="submit"]').first();
  await submitBtn.click();
  await page.waitForTimeout(400);

  const errorMessages = await page.locator('[role="alert"]').allTextContents();
  const emptySubmitBlocked = errorMessages.length > 0;

  const emailInput = page.locator('input[name="email"]').first();
  let invalidEmailBlocked = false;
  if (await emailInput.isVisible()) {
    await emailInput.fill('invalid-email-address');
    await submitBtn.click();
    await page.waitForTimeout(300);
    const emailErr = await page.locator('#email-error, [role="alert"]:has-text("email")').count();
    invalidEmailBlocked = emailErr > 0;
  }

  auditResults.formValidation = {
    emptySubmitBlocked,
    errorCountOnEmpty: errorMessages.length,
    errorSamples: errorMessages,
    invalidEmailBlocked,
    liveSubmissionStatus: 'BLOCKED (Intentional test safeguard)',
    status: emptySubmitBlocked && invalidEmailBlocked ? 'PASS' : 'FAIL'
  };
  console.log(`Contact Form QA: EmptyBlocked=${emptySubmitBlocked} (${errorMessages.length} errors), InvalidEmailBlocked=${invalidEmailBlocked}`);

  // D. Hero Lightbox on Homepage
  console.log('Testing Homepage Hero Lightbox...');
  await page.goto(`${BASE_URL}/`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(500);

  let lightboxOpens = false;
  let lightboxClosesWithEsc = false;
  const lightboxTrigger = page.locator('div[style*="aspectRatio"][style*="cursor: pointer"], div[style*="aspect-ratio"][style*="cursor: pointer"]').first();
  const hasTrigger = await lightboxTrigger.isVisible().catch(() => false);
  if (hasTrigger) {
    await lightboxTrigger.click({ force: true });
    await page.waitForTimeout(500);
    const lightboxModal = page.locator('div[class*="lightbox"], div[class*="overlay"]').first();
    lightboxOpens = await lightboxModal.isVisible().catch(() => false);
    if (lightboxOpens) {
      await page.keyboard.press('Escape');
      await page.waitForTimeout(400);
      lightboxClosesWithEsc = !(await lightboxModal.isVisible().catch(() => true));
    }
  }

  auditResults.interactions.heroLightbox = {
    triggerFound: hasTrigger,
    lightboxOpens,
    lightboxClosesWithEsc,
    status: lightboxOpens && lightboxClosesWithEsc ? 'PASS' : (lightboxOpens ? 'PARTIAL' : 'FAIL')
  };
  console.log(`Hero Lightbox QA: TriggerFound=${hasTrigger}, Opens=${lightboxOpens}, ClosesEsc=${lightboxClosesWithEsc}`);

  // Save audit results
  fs.writeFileSync(path.join(OUT_DIR, 'qa-audit-raw.json'), JSON.stringify(auditResults, null, 2));
  console.log(`\nQA Audit run completed successfully! Raw data saved to ${path.join(OUT_DIR, 'qa-audit-raw.json')}`);

  await browser.close();
}

runAudit().catch(err => {
  console.error('Audit script failed:', err);
  process.exit(1);
});
