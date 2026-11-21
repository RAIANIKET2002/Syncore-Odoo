import { chromium } from 'playwright';

const browser = await chromium.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  headless: true
});
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('http://localhost:5173/solutions', { waitUntil: 'networkidle' });
await page.waitForTimeout(1000);

const matched = await page.evaluate(() => {
  const hero = document.querySelector('section');
  const computed = window.getComputedStyle(hero);
  return {
    className: hero.className,
    padding: computed.padding,
    paddingTop: computed.paddingTop,
    paddingBottom: computed.paddingBottom,
    paddingLeft: computed.paddingLeft,
    paddingRight: computed.paddingRight,
  };
});

console.log('Hero computed style:', matched);
await browser.close();
