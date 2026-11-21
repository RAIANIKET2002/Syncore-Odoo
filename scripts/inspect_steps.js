import { chromium } from 'playwright';

const browser = await chromium.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  headless: true
});
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('http://localhost:5173/solutions', { waitUntil: 'networkidle' });

const stepStyles = await page.evaluate(() => {
  const steps = [...document.querySelectorAll('div[class*="stepCard"]')];
  return steps.map((s, i) => {
    const wm = s.querySelector('[class*="stepWatermark"]');
    const computedWm = wm ? window.getComputedStyle(wm) : null;
    return {
      index: i,
      wmBg: computedWm ? computedWm.backgroundImage : null,
      wmOpacity: computedWm ? computedWm.opacity : null
    };
  });
});

console.log('Step Cards:', JSON.stringify(stepStyles, null, 2));
await browser.close();
