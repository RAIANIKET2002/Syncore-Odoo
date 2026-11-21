import { chromium } from 'playwright';

const browser = await chromium.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  headless: true
});
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('http://localhost:5173/solutions', { waitUntil: 'networkidle' });

const cardStyles = await page.evaluate(() => {
  const cards = [...document.querySelectorAll('div[class*="solutionCard"]')];
  return cards.map((c, i) => {
    const wm = c.querySelector('[class*="cardWatermark"]');
    const computedWm = wm ? window.getComputedStyle(wm) : null;
    const overlay = c.querySelector('[class*="cardOverlay"]');
    const computedOverlay = overlay ? window.getComputedStyle(overlay) : null;
    const content = c.querySelector('[class*="cardContent"]');
    const computedContent = content ? window.getComputedStyle(content) : null;
    return {
      index: i,
      wmBg: computedWm ? computedWm.backgroundImage : null,
      wmOpacity: computedWm ? computedWm.opacity : null,
      overlayBg: computedOverlay ? computedOverlay.backgroundImage : null,
      contentPadding: computedContent ? computedContent.padding : null
    };
  });
});

console.log('Cards Styles:', JSON.stringify(cardStyles, null, 2));
await browser.close();
