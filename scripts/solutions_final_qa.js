import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE_URL = 'http://localhost:5173';
const OUT_DIR = path.join(__dirname, '..', 'solutions-qa-results', 'screenshots-final');
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

async function runAudit() {
  console.log('Launching installed Google Chrome for Solutions QA...');
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

  // 1. Desktop Standard 1440x900 captures
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${BASE_URL}/solutions`, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1000);

  // 01: Hero section
  const heroSec = page.locator('section').first();
  await heroSec.screenshot({ path: path.join(OUT_DIR, '01_solutions_hero_after.png') });
  console.log('Captured: 01_solutions_hero_after.png');

  // 02: Industry Cards Default State
  const industrySec = page.locator('#industry-solutions');
  await industrySec.screenshot({ path: path.join(OUT_DIR, '02_industry_cards_default_after.png') });
  console.log('Captured: 02_industry_cards_default_after.png');

  // 03: Industry Card Hover State (Hover first card)
  const firstCard = industrySec.locator('div[class*="solutionCard"]').first();
  await firstCard.scrollIntoViewIfNeeded();
  await firstCard.hover();
  await page.waitForTimeout(500);
  await firstCard.screenshot({ path: path.join(OUT_DIR, '03_industry_card_hover_after.png') });
  console.log('Captured: 03_industry_card_hover_after.png');

  // 04: Recommended Modules chips close-up
  const moduleGroup = firstCard.locator('div[class*="moduleTagGroup"]').first();
  await moduleGroup.screenshot({ path: path.join(OUT_DIR, '04_recommended_modules_after.png') });
  console.log('Captured: 04_recommended_modules_after.png');

  // 05: Implementation Steps Default State
  const stepsSec = page.locator('section:has(h2:has-text("Structured Implementation"))');
  await stepsSec.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await stepsSec.screenshot({ path: path.join(OUT_DIR, '05_implementation_steps_default_after.png') });
  console.log('Captured: 05_implementation_steps_default_after.png');

  // 06: Implementation Step Card Hover State
  const firstStepCard = stepsSec.locator('div[class*="stepCard"]').first();
  await firstStepCard.hover();
  await page.waitForTimeout(500);
  await firstStepCard.screenshot({ path: path.join(OUT_DIR, '06_implementation_step_hover_after.png') });
  console.log('Captured: 06_implementation_step_hover_after.png');

  // 07: Unified Integration Section
  const integrationSec = page.locator('section[class*="integrationSection"]');
  await integrationSec.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await integrationSec.screenshot({ path: path.join(OUT_DIR, '07_unified_integration_after.png') });
  console.log('Captured: 07_unified_integration_after.png');

  // 08: Final Consultation CTA Section
  const ctaSec = page.locator('section[class*="ctaSection"]');
  await ctaSec.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await ctaSec.screenshot({ path: path.join(OUT_DIR, '08_final_consultation_cta_after.png') });
  console.log('Captured: 08_final_consultation_cta_after.png');

  // 09: Complete Solutions Desktop Full Page (1440px)
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${BASE_URL}/solutions`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(OUT_DIR, '09_complete_solutions_desktop_after.png'), fullPage: true });
  console.log('Captured: 09_complete_solutions_desktop_after.png');

  // 10: Complete Solutions Mobile Full Page (390px)
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${BASE_URL}/solutions`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(OUT_DIR, '10_complete_solutions_mobile_after.png'), fullPage: true });
  console.log('Captured: 10_complete_solutions_mobile_after.png');

  // Responsive viewports overflow check
  console.log('\n--- Running Responsive Viewport Overflow Audit ---');
  const responsiveResults = [];
  for (const vp of VIEWPORTS) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto(`${BASE_URL}/solutions`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(400);

    const overflowInfo = await page.evaluate(() => {
      const docWidth = document.documentElement.offsetWidth;
      const scrollWidth = document.documentElement.scrollWidth;
      const windowWidth = window.innerWidth;
      const hasOverflow = scrollWidth > windowWidth;
      return {
        docWidth,
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

  const auditSummary = {
    timestamp: new Date().toISOString(),
    browser: 'Google Chrome (System Executable)',
    consoleErrors,
    failedRequests,
    responsiveResults,
    screenshotsCaptured: [
      '01_solutions_hero_after.png',
      '02_industry_cards_default_after.png',
      '03_industry_card_hover_after.png',
      '04_recommended_modules_after.png',
      '05_implementation_steps_default_after.png',
      '06_implementation_step_hover_after.png',
      '07_unified_integration_after.png',
      '08_final_consultation_cta_after.png',
      '09_complete_solutions_desktop_after.png',
      '10_complete_solutions_mobile_after.png'
    ]
  };

  fs.writeFileSync(
    path.join(__dirname, '..', 'solutions-qa-results', 'solutions-audit-summary.json'),
    JSON.stringify(auditSummary, null, 2)
  );

  console.log('\nFull audit completed successfully!');
  console.log(`Console errors: ${consoleErrors.length}`);
  console.log(`Failed requests: ${failedRequests.length}`);
}

runAudit().catch(err => {
  console.error('Audit run failed:', err);
  process.exit(1);
});
