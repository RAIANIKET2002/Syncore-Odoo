import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:5173';
const OUT_DIR = path.resolve('solutions-qa-results');
const SCREENSHOTS_DIR = path.join(OUT_DIR, 'screenshots');

if (!fs.existsSync(SCREENSHOTS_DIR)) fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });

const VIEWPORTS = [
  { width: 1920, height: 1080, name: '1920x1080' },
  { width: 1600, height: 900, name: '1600x900' },
  { width: 1440, height: 900, name: '1440x900' },
  { width: 1366, height: 768, name: '1366x768' },
  { width: 1280, height: 800, name: '1280x800' },
  { width: 1200, height: 800, name: '1200x800' },
  { width: 1024, height: 768, name: '1024x768' },
  { width: 820, height: 1180, name: '820x1180' },
  { width: 768, height: 1024, name: '768x1024' },
  { width: 430, height: 932, name: '430x932' },
  { width: 390, height: 844, name: '390x844' },
  { width: 375, height: 812, name: '375x812' },
  { width: 360, height: 800, name: '360x800' },
  { width: 320, height: 720, name: '320x720' },
];

async function runSolutionsVisualQA() {
  console.log('--- SOLUTIONS PAGE TARGETED PLAYWRIGHT QA AUDIT ---');
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage();

  // 1. CAPTURE REQUIRED SECTION SCREENSHOTS AT 1440x900
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${BASE_URL}/solutions`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(600);

  // A. Hero Section
  const heroSection = page.locator('section[class*="heroSection"]');
  if (await heroSection.isVisible()) {
    await heroSection.screenshot({ path: path.join(SCREENSHOTS_DIR, '01_solutions_hero.png') });
    console.log('Captured 01_solutions_hero.png');
  }

  // B. Industry solution cards in default state
  const industrySection = page.locator('#industry-solutions');
  if (await industrySection.isVisible()) {
    await industrySection.screenshot({ path: path.join(SCREENSHOTS_DIR, '02_industry_cards_default.png') });
    console.log('Captured 02_industry_cards_default.png');
  }

  // C. Industry solution card in hover state
  const firstIndustryCard = page.locator('div[class*="solutionCard"]').first();
  if (await firstIndustryCard.isVisible()) {
    await firstIndustryCard.hover();
    await page.waitForTimeout(400);
    await firstIndustryCard.screenshot({ path: path.join(SCREENSHOTS_DIR, '03_industry_card_hover.png') });
    console.log('Captured 03_industry_card_hover.png');
    // Unhover
    await page.mouse.move(0, 0);
    await page.waitForTimeout(200);
  }

  // D. Recommended Odoo modules section (inside first card)
  const moduleGroup = page.locator('div[class*="moduleTagGroup"]').first();
  if (await moduleGroup.isVisible()) {
    await moduleGroup.screenshot({ path: path.join(SCREENSHOTS_DIR, '04_recommended_modules_chips.png') });
    console.log('Captured 04_recommended_modules_chips.png');
  }

  // E. Capabilities section
  const capSection = page.locator('section[class*="capabilitiesSection"]');
  if (await capSection.isVisible()) {
    await capSection.screenshot({ path: path.join(SCREENSHOTS_DIR, '05_capabilities_section.png') });
    console.log('Captured 05_capabilities_section.png');
  }

  // F. Structured Implementation Approach
  const stepsGrid = page.locator('div[class*="stepsGrid"]');
  if (await stepsGrid.isVisible()) {
    await stepsGrid.screenshot({ path: path.join(SCREENSHOTS_DIR, '06_implementation_steps_default.png') });
    console.log('Captured 06_implementation_steps_default.png');
  }

  // G. Implementation step card in hover state
  const firstStepCard = page.locator('div[class*="stepCard"]').first();
  if (await firstStepCard.isVisible()) {
    await firstStepCard.hover();
    await page.waitForTimeout(400);
    await firstStepCard.screenshot({ path: path.join(SCREENSHOTS_DIR, '07_implementation_step_hover.png') });
    console.log('Captured 07_implementation_step_hover.png');
    await page.mouse.move(0, 0);
  }

  // H. Unified Departmental Integration (pills & vertical spacing)
  const integrationSection = page.locator('section[class*="integrationSection"]');
  if (await integrationSection.isVisible()) {
    await integrationSection.screenshot({ path: path.join(SCREENSHOTS_DIR, '08_unified_integration_pills.png') });
    console.log('Captured 08_unified_integration_pills.png');
  }

  // I. Final Consultation CTA section
  const ctaSection = page.locator('section[class*="ctaSection"]');
  if (await ctaSection.isVisible()) {
    await ctaSection.screenshot({ path: path.join(SCREENSHOTS_DIR, '09_final_consultation_cta.png') });
    console.log('Captured 09_final_consultation_cta.png');
  }

  // J. Complete Solutions Full-Page Screenshot (1440x900)
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '10_complete_solutions_page_1440.png'), fullPage: true });
  console.log('Captured 10_complete_solutions_page_1440.png');

  // 2. RESPONSIVE TESTING ACROSS ALL 14 SPECIFIED VIEWPORTS
  console.log('\n--- RESPONSIVE AUDIT ACROSS ALL VIEWPORTS ---');
  const responsiveLog = [];

  for (const vp of VIEWPORTS) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto(`${BASE_URL}/solutions`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(300);

    const metrics = await page.evaluate(() => {
      const scrollWidth = document.documentElement.scrollWidth;
      const clientWidth = document.documentElement.clientWidth;
      const hasOverflow = scrollWidth > clientWidth;

      // Check card chips wrapping
      const chips = Array.from(document.querySelectorAll('[class*="moduleTag"]'));
      const chipTops = chips.map(c => Math.round(c.getBoundingClientRect().top));
      const isWrapping = new Set(chipTops).size > 1;

      // Check CTA button bounding box inside CTA section
      const ctaBtn = document.querySelector('[class*="ctaSection"] [class*="ctaButton"]');
      const ctaRect = ctaBtn ? ctaBtn.getBoundingClientRect() : null;
      const isCtaSafe = ctaRect ? (ctaRect.right <= window.innerWidth && ctaRect.left >= 0) : true;

      return {
        scrollWidth,
        clientWidth,
        hasOverflow,
        overflowDelta: scrollWidth - clientWidth,
        isWrapping,
        isCtaSafe,
        ctaRect
      };
    });

    responsiveLog.push({
      viewport: vp.name,
      width: vp.width,
      height: vp.height,
      ...metrics
    });

    console.log(`[${vp.name}] Overflow: ${metrics.hasOverflow ? `YES (+${metrics.overflowDelta}px)` : 'NO'}, CTA Safe: ${metrics.isCtaSafe}, Chips Wrap: ${metrics.isWrapping}`);
  }

  // Mobile full-page screenshot
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${BASE_URL}/solutions`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '11_solutions_page_mobile_390.png'), fullPage: true });
  console.log('Captured 11_solutions_page_mobile_390.png');

  fs.writeFileSync(path.join(OUT_DIR, 'solutions-qa-data.json'), JSON.stringify(responsiveLog, null, 2));
  console.log(`\nQA Test Suite successfully finished. Evidence stored in ${OUT_DIR}`);

  await browser.close();
}

runSolutionsVisualQA().catch(err => {
  console.error('Playwright audit failed:', err);
  process.exit(1);
});
