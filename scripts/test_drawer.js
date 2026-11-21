import { chromium } from 'playwright';

async function testDrawer() {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage();
  await page.goto('http://localhost:5173/modules', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(500);

  const card = page.locator('h3:has-text("Accounting")').first();
  await card.click();
  await page.waitForTimeout(500);

  const count1 = await page.locator('div[class*="drawerOverlay"]').count();
  console.log('Opened overlays:', count1);

  // Press ESC
  await page.keyboard.press('Escape');
  await page.waitForTimeout(500);
  const count2 = await page.locator('div[class*="drawerOverlay"]').count();
  console.log('Overlays after ESC:', count2);

  // If still open, try close button
  if (count2 > 0) {
    const closeBtn = page.locator('button[aria-label="Close drawer"]').first();
    console.log('Close button visible:', await closeBtn.isVisible());
    await closeBtn.click();
    await page.waitForTimeout(500);
    const count3 = await page.locator('div[class*="drawerOverlay"]').count();
    console.log('Overlays after close button click:', count3);
  }

  await browser.close();
}

testDrawer().catch(console.error);
