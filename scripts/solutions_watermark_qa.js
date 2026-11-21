import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE_URL = 'http://localhost:5173';
const OUT_DIR = path.join(__dirname, '..', 'solutions-qa-results', 'watermark-verification');
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

async function runWatermarkAudit() {
  console.log('Launching Chrome for Watermark & Background Verification...');
  const browser = await chromium.launch({
    executablePath: CHROME_PATH,
    headless: true
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  const failedRequests = [];
  page.on('requestfailed', req => {
    failedRequests.push({ url: req.url(), failure: req.failure()?.errorText });
  });

  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${BASE_URL}/solutions`, { waitUntil: 'networkidle', timeout: 30000 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);

  // 1. All six industry cards in default state
  const industrySec = page.locator('#industry-solutions');
  await industrySec.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await industrySec.screenshot({ path: path.join(OUT_DIR, '01_all_six_industry_cards_default.png') });
  console.log('Saved: 01_all_six_industry_cards_default.png');

  // 2-7: Individual Industry Card Hover states
  const industryCards = industrySec.locator('div[class*="solutionCard"]');
  const cardNames = [
    '02_hover_manufacturing',
    '03_hover_retail_pos',
    '04_hover_trading_distribution',
    '05_hover_agriculture',
    '06_hover_healthcare',
    '07_hover_professional_services'
  ];

  for (let i = 0; i < 6; i++) {
    const card = industryCards.nth(i);
    await card.scrollIntoViewIfNeeded();
    await card.hover();
    await page.waitForTimeout(450);
    await card.screenshot({ path: path.join(OUT_DIR, `${cardNames[i]}.png`) });
    console.log(`Saved: ${cardNames[i]}.png`);
  }

  // 8. All eight implementation cards in default state
  const stepsSec = page.locator('section:has(h2:has-text("Structured Implementation"))');
  await stepsSec.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await stepsSec.screenshot({ path: path.join(OUT_DIR, '08_all_eight_implementation_cards_default.png') });
  console.log('Saved: 08_all_eight_implementation_cards_default.png');

  // 9. Two implementation card hover states (Step 1 Discovery & Step 4 Dev)
  const stepCards = stepsSec.locator('div[class*="stepCard"]');
  const step1 = stepCards.nth(0);
  await step1.scrollIntoViewIfNeeded();
  await step1.hover();
  await page.waitForTimeout(450);
  await step1.screenshot({ path: path.join(OUT_DIR, '09_hover_step_01_discovery.png') });
  console.log('Saved: 09_hover_step_01_discovery.png');

  const step4 = stepCards.nth(3);
  await step4.scrollIntoViewIfNeeded();
  await step4.hover();
  await page.waitForTimeout(450);
  await step4.screenshot({ path: path.join(OUT_DIR, '09_hover_step_04_configuration_dev.png') });
  console.log('Saved: 09_hover_step_04_configuration_dev.png');

  // 10. Full Solutions page desktop screenshot (1440px)
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${BASE_URL}/solutions`, { waitUntil: 'networkidle' });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(OUT_DIR, '10_full_solutions_desktop_1440.png'), fullPage: true });
  console.log('Saved: 10_full_solutions_desktop_1440.png');

  // 11. Full Solutions page mobile screenshot (390px)
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${BASE_URL}/solutions`, { waitUntil: 'networkidle' });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(OUT_DIR, '11_full_solutions_mobile_390.png'), fullPage: true });
  console.log('Saved: 11_full_solutions_mobile_390.png');

  // 16 Viewports Overflow Verification
  console.log('\n--- Checking 16 Viewports for Overflow ---');
  let allPass = true;
  for (const vp of VIEWPORTS) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto(`${BASE_URL}/solutions`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(300);

    const hasOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    if (hasOverflow) {
      console.log(`FAIL on ${vp.name}`);
      allPass = false;
    } else {
      console.log(`PASS on ${vp.name}`);
    }
  }

  await browser.close();
  console.log('\nAudit complete! Console errors:', consoleErrors.length, 'Failed requests:', failedRequests.length);
}

runWatermarkAudit().catch(e => {
  console.error('Audit failed:', e);
  process.exit(1);
});
