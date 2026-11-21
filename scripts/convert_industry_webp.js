import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';

async function optimizeIndustryAssets() {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage();

  async function convertToWebP(srcPath, destPath, quality = 0.82) {
    const ext = path.extname(srcPath).toLowerCase() === '.png' ? 'png' : 'jpeg';
    const base64Data = fs.readFileSync(srcPath).toString('base64');
    const dataUrl = `data:image/${ext};base64,${base64Data}`;

    await page.setContent(`<!DOCTYPE html><html><body><img id="target" src="${dataUrl}" /></body></html>`);
    await page.waitForSelector('#target');

    const webpBase64 = await page.evaluate((q) => {
      const img = document.getElementById('target');
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      return canvas.toDataURL('image/webp', q).split(',')[1];
    }, quality);

    fs.writeFileSync(destPath, Buffer.from(webpBase64, 'base64'));
    const origSize = fs.statSync(srcPath).size;
    const newSize = fs.statSync(destPath).size;
    console.log(`${path.basename(srcPath)}: ${(origSize/1024).toFixed(1)} KB -> ${(newSize/1024).toFixed(1)} KB (-${((1 - newSize/origSize)*100).toFixed(1)}%)`);
  }

  for (let i = 1; i <= 6; i++) {
    const src = `src/assets/industry_${i}.jpg`;
    const dest = `src/assets/industry_${i}.webp`;
    if (fs.existsSync(src)) {
      await convertToWebP(src, dest, 0.82);
    }
  }

  await browser.close();
}

optimizeIndustryAssets().catch(err => {
  console.error('Conversion failed:', err);
  process.exit(1);
});
