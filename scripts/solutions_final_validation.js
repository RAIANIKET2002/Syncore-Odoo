import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE_URL = 'http://localhost:5173';
const OUT_DIR = path.join(__dirname, '..', 'solutions-qa-results', 'final-corrected');
fs.mkdirSync(OUT_DIR, { recursive: true });

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const VIEWPORTS = [
  { width: 1920, height: 1080, name: '1920x1080' },
  { width: 1600, height: 900,  name: '1600x900' },
  { width: 1440, height: 900,  name: '1440x900' },
  { width: 1366, height: 768,  name: '1366x768' },
  { width: 1280, height: 800,  name: '1280x800' },
  { width: 1200, height: 800,  name: '1200x800' },
  { width: 1140, height: 800,  name: '1140x800' },
  { width: 1100, height: 800,  name: '1100x800' },
  { width: 1024, height: 768,  name: '1024x768' },
  { width: 820,  height: 1180, name: '820x1180' },
  { width: 768,  height: 1024, name: '768x1024' },
  { width: 430,  height: 932,  name: '430x932' },
  { width: 390,  height: 844,  name: '390x844' },
  { width: 375,  height: 812,  name: '375x812' },
  { width: 360,  height: 800,  name: '360x800' },
  { width: 320,  height: 720,  name: '320x720' }
];

async function runValidation() {
  console.log('Launching Chrome for Solutions Page Final Corrective QA...');
  const browser = await chromium.launch({
    executablePath: CHROME_PATH,
    headless: true
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  const failedRequests = [];
  page.on('requestfailed', req => {
    failedRequests.push({ url: req.url(), failure: req.failure()?.errorText });
  });

  // Set 1440x900 desktop
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${BASE_URL}/solutions`, { waitUntil: 'networkidle', timeout: 30000 });
  
  // Explicitly ensure scrollY = 0
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(800);

  // 1. Inspect exact bounding rectangles at scrollY = 0
  const heroMetrics = await page.evaluate(() => {
    const nav = document.querySelector('nav');
    const hero = document.querySelector('section');
    const h1 = document.querySelector('h1');
    const breadcrumbs = document.querySelector('[class*="heroBreadcrumbsWrapper"]');
    const eyebrow = document.querySelector('[class*="heroEyebrow"]');
    const btns = document.querySelector('[class*="heroBtns"]');

    return {
      scrollY: window.scrollY,
      nav: nav ? nav.getBoundingClientRect() : null,
      hero: hero ? hero.getBoundingClientRect() : null,
      breadcrumbs: breadcrumbs ? breadcrumbs.getBoundingClientRect() : null,
      eyebrow: eyebrow ? eyebrow.getBoundingClientRect() : null,
      h1: h1 ? h1.getBoundingClientRect() : null,
      btns: btns ? btns.getBoundingClientRect() : null,
      overlapNavH1: nav && h1 ? nav.getBoundingClientRect().bottom > h1.getBoundingClientRect().top : false
    };
  });

  console.log('\n--- Hero Geometry at scrollY = 0 ---');
  console.log(`Navbar Bottom: ${heroMetrics.nav.bottom}px`);
  console.log(`Breadcrumbs Top: ${heroMetrics.breadcrumbs.top}px`);
  console.log(`Eyebrow Top: ${heroMetrics.eyebrow.top}px`);
  console.log(`H1 Top: ${heroMetrics.h1.top}px, Bottom: ${heroMetrics.h1.bottom}px`);
  console.log(`Overlap Nav & H1: ${heroMetrics.overlapNavH1 ? 'FAIL (OVERLAP)' : 'PASS (CLEAR)'}`);

  // Screenshot 01: Complete Hero Section
  const heroEl = page.locator('section').first();
  await heroEl.screenshot({ path: path.join(OUT_DIR, '01_solutions_hero_corrected.png') });
  console.log('Saved: 01_solutions_hero_corrected.png');

  // Screenshot 02: Industry Section Default
  const industrySec = page.locator('#industry-solutions');
  await industrySec.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await industrySec.screenshot({ path: path.join(OUT_DIR, '02_industry_cards_default_corrected.png') });
  console.log('Saved: 02_industry_cards_default_corrected.png');

  // Screenshot 03: Industry Card Hover
  const firstIndustryCard = industrySec.locator('div[class*="solutionCard"]').first();
  await firstIndustryCard.scrollIntoViewIfNeeded();
  await firstIndustryCard.hover();
  await page.waitForTimeout(400);
  await firstIndustryCard.screenshot({ path: path.join(OUT_DIR, '03_industry_card_hover_corrected.png') });
  console.log('Saved: 03_industry_card_hover_corrected.png');

  // Screenshot 04: Recommended Modules Close-up
  const moduleGroup = firstIndustryCard.locator('div[class*="moduleTagGroup"]').first();
  await moduleGroup.screenshot({ path: path.join(OUT_DIR, '04_recommended_modules_corrected.png') });
  console.log('Saved: 04_recommended_modules_corrected.png');

  // Screenshot 05: Implementation Steps Default
  const stepsSec = page.locator('section:has(h2:has-text("Structured Implementation"))');
  await stepsSec.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await stepsSec.screenshot({ path: path.join(OUT_DIR, '05_implementation_steps_default_corrected.png') });
  console.log('Saved: 05_implementation_steps_default_corrected.png');

  // Screenshot 06: Implementation Step Card Hover
  const firstStepCard = stepsSec.locator('div[class*="stepCard"]').first();
  await firstStepCard.hover();
  await page.waitForTimeout(400);
  await firstStepCard.screenshot({ path: path.join(OUT_DIR, '06_implementation_step_hover_corrected.png') });
  console.log('Saved: 06_implementation_step_hover_corrected.png');

  // Screenshot 07: Unified Integration Section
  const integrationSec = page.locator('section[class*="integrationSection"]');
  await integrationSec.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await integrationSec.screenshot({ path: path.join(OUT_DIR, '07_unified_integration_corrected.png') });
  console.log('Saved: 07_unified_integration_corrected.png');

  // Screenshot 08: Final Consultation CTA Section
  const ctaSec = page.locator('section[class*="ctaSection"]');
  await ctaSec.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await ctaSec.screenshot({ path: path.join(OUT_DIR, '08_final_consultation_cta_corrected.png') });
  console.log('Saved: 08_final_consultation_cta_corrected.png');

  // Screenshot 09: Complete Desktop Page (1440px)
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${BASE_URL}/solutions`, { waitUntil: 'networkidle' });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(OUT_DIR, '09_complete_solutions_desktop_corrected.png'), fullPage: true });
  console.log('Saved: 09_complete_solutions_desktop_corrected.png');

  // Screenshot 10: Complete Mobile Page (390px)
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${BASE_URL}/solutions`, { waitUntil: 'networkidle' });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(OUT_DIR, '10_complete_solutions_mobile_corrected.png'), fullPage: true });
  console.log('Saved: 10_complete_solutions_mobile_corrected.png');

  // 16-Viewport Responsive Validation
  console.log('\n--- 16-Viewport Responsive Audit ---');
  const responsiveResults = [];
  for (const vp of VIEWPORTS) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto(`${BASE_URL}/solutions`, { waitUntil: 'networkidle' });
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);

    const overflowInfo = await page.evaluate(() => {
      const scrollWidth = document.documentElement.scrollWidth;
      const windowWidth = window.innerWidth;
      const hasOverflow = scrollWidth > windowWidth;
      return {
        scrollWidth,
        windowWidth,
        hasOverflow,
        diff: scrollWidth - windowWidth
      };
    });

    const status = overflowInfo.hasOverflow ? 'FAIL' : 'PASS';
    console.log(`Viewport ${vp.name.padEnd(10)}: ${status} (scrollWidth: ${overflowInfo.scrollWidth}, innerWidth: ${overflowInfo.windowWidth})`);
    responsiveResults.push({
      viewport: vp.name,
      width: vp.width,
      height: vp.height,
      status,
      diff: overflowInfo.diff
    });
  }

  await browser.close();

  const summary = {
    timestamp: new Date().toISOString(),
    heroMetrics,
    responsiveResults,
    consoleErrors,
    failedRequests,
    screenshots: [
      '01_solutions_hero_corrected.png',
      '02_industry_cards_default_corrected.png',
      '03_industry_card_hover_corrected.png',
      '04_recommended_modules_corrected.png',
      '05_implementation_steps_default_corrected.png',
      '06_implementation_step_hover_corrected.png',
      '07_unified_integration_corrected.png',
      '08_final_consultation_cta_corrected.png',
      '09_complete_solutions_desktop_corrected.png',
      '10_complete_solutions_mobile_corrected.png'
    ]
  };

  fs.writeFileSync(
    path.join(__dirname, '..', 'solutions-qa-results', 'final-validation-summary.json'),
    JSON.stringify(summary, null, 2)
  );

  console.log('\nValidation script finished cleanly.');
  console.log(`Console errors: ${consoleErrors.length}`);
  console.log(`Failed requests: ${failedRequests.length}`);
}

runValidation().catch(e => {
  console.error('Validation failed:', e);
  process.exit(1);
});
