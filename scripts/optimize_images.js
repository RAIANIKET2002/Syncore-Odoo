import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';

async function optimizeImages() {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage();

  async function convertToWebP(srcPath, destPath, quality = 0.85) {
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

  await convertToWebP('src/assets/portfolio_1.jpg', 'src/assets/portfolio_1.webp', 0.85);
  await convertToWebP('src/assets/portfolio_3.jpg', 'src/assets/portfolio_3.webp', 0.85);
  await convertToWebP('src/assets/Syncore_Infotech_Solutions.png', 'src/assets/Syncore_Infotech_Solutions.webp', 0.95);

  await browser.close();
}

optimizeImages().catch(err => {
  console.error('Image optimization failed:', err);
  process.exit(1);
});
