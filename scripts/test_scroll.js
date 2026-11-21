import { chromium } from 'playwright';

const browser = await chromium.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  headless: true
});
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('http://localhost:5173/solutions', { waitUntil: 'networkidle' });

// Scroll down 200px
await page.evaluate(() => window.scrollTo(0, 200));
await page.waitForTimeout(500);

const scrolledInspect = await page.evaluate(() => {
  const h1 = document.querySelector('h1');
  const nav = document.querySelector('nav');
  const h1Rect = h1.getBoundingClientRect();
  const navRect = nav.getBoundingClientRect();
  return {
    scrollY: window.scrollY,
    navBottom: navRect.bottom,
    h1Top: h1Rect.top,
    h1Bottom: h1Rect.bottom,
    overlap: navRect.bottom > h1Rect.top
  };
});

console.log('At scrollY=200:', scrolledInspect);
await browser.close();
