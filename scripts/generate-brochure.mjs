import { chromium } from "playwright";
import { createServer } from "vite";
import { BASE_PATH } from "../src/site.js";

const outputPath = new URL(
  "../public/Sandeep_Satheesh_SMMC_Portfolio.pdf",
  import.meta.url,
);

const server = await createServer({
  logLevel: "error",
  server: {
    host: "127.0.0.1",
    port: 4174,
    strictPort: false,
  },
});

let browser;

try {
  await server.listen();
  const origin = server.resolvedUrls?.local?.[0];

  if (!origin) {
    throw new Error("Vite did not provide a local preview URL.");
  }

  browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1000 },
  });

  await page.goto(new URL(BASE_PATH, origin).href, {
    waitUntil: "networkidle",
  });

  const images = page.locator("img");
  for (let index = 0; index < (await images.count()); index += 1) {
    const image = images.nth(index);
    await image.scrollIntoViewIfNeeded();
    await image.evaluate((element) => {
      if (!element.complete || element.naturalWidth === 0) {
        return new Promise((resolve, reject) => {
          element.addEventListener("load", resolve, { once: true });
          element.addEventListener("error", reject, { once: true });
        });
      }
      return undefined;
    });
  }

  await page.emulateMedia({ media: "print" });
  await page.evaluate(() => document.fonts.ready);

  await page.pdf({
    path: outputPath.pathname,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: false,
  });
} finally {
  await browser?.close();
  await server.close();
}
