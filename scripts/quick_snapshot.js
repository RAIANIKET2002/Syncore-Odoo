import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE_URL = 'http://localhost:5173';
const OUT_DIR = path.join(__dirname, '..', 'solutions-qa-results', 'screenshots-final');
fs.mkdirSync(OUT_DIR, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto(BASE_URL + '/solutions', { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(1800);

await page.screenshot({ path: path.join(OUT_DIR, '00_before_full_1440.png'), fullPage: true });
console.log('1440 full-page saved');

// Industry section 
const industrySec = page.locator('#industry-solutions');
if (await industrySec.count()) {
  await industrySec.screenshot({ path: path.join(OUT_DIR, '00_before_industry_section.png') });
  console.log('Industry section saved');
}

// Mobile
await page.setViewportSize({ width: 390, height: 844 });
await page.goto(BASE_URL + '/solutions', { waitUntil: 'networkidle', timeout: 20000 });
await page.waitForTimeout(1200);
await page.screenshot({ path: path.join(OUT_DIR, '00_before_full_390.png'), fullPage: true });
console.log('390 mobile saved');

await browser.close();
console.log('Done. Output dir:', OUT_DIR);
