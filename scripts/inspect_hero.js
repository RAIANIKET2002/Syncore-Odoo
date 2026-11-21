import { chromium } from 'playwright';

const browser = await chromium.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  headless: true
});
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('http://localhost:5173/solutions', { waitUntil: 'networkidle' });
await page.waitForTimeout(1000);

const inspect = await page.evaluate(() => {
  const nav = document.querySelector('nav');
  const main = document.querySelector('main');
  const heroSection = document.querySelector('section');
  const h1 = document.querySelector('h1');
  const breadcrumbs = document.querySelector('nav[aria-label="Breadcrumb"]') || document.querySelector('[class*="breadcrumb"]');
  const eyebrow = document.querySelector('[class*="heroEyebrow"]');
  
  const getBox = el => el ? el.getBoundingClientRect() : null;

  return {
    scrollY: window.scrollY,
    navBox: getBox(nav),
    mainBox: getBox(main),
    heroSectionBox: getBox(heroSection),
    h1Box: getBox(h1),
    breadcrumbsBox: getBox(breadcrumbs),
    eyebrowBox: getBox(eyebrow),
    mainComputed: main ? {
      paddingTop: window.getComputedStyle(main).paddingTop,
      marginTop: window.getComputedStyle(main).marginTop
    } : null,
    heroComputed: heroSection ? {
      paddingTop: window.getComputedStyle(heroSection).paddingTop,
      marginTop: window.getComputedStyle(heroSection).marginTop
    } : null
  };
});

console.log('Inspection Data:', JSON.stringify(inspect, null, 2));
await browser.close();
