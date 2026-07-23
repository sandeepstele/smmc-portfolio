import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const responsiveSizes = [
  { label: "mobile", width: 360, height: 800 },
  { label: "tablet", width: 768, height: 1024 },
  { label: "desktop", width: 1440, height: 1000 },
];

for (const viewport of responsiveSizes) {
  test(`portfolio is usable at ${viewport.label} width`, async ({
    page,
  }, testInfo) => {
    await page.setViewportSize({
      width: viewport.width,
      height: viewport.height,
    });
    const response = await page.goto("./", { waitUntil: "networkidle" });

    expect(response?.ok()).toBeTruthy();
    await expect(
      page.getByRole("heading", {
        name: /Data Analyst & Educational Leader/i,
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: /download resume/i }),
    ).toHaveAttribute(
      "href",
      "/smmc-portfolio/Sandeep_Satheesh_Resume.pdf",
    );

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(1);

    if (viewport.label === "mobile") {
      await page.getByRole("button", { name: /open navigation menu/i }).click();
      await expect(
        page.getByRole("navigation", { name: /primary/i }),
      ).toBeVisible();
      await expect(page.getByRole("link", { name: "Experience" })).toBeVisible();
      await page.getByRole("button", { name: /close navigation menu/i }).click();
    }

    const images = page.locator("img");
    for (let index = 0; index < (await images.count()); index += 1) {
      const image = images.nth(index);
      await image.scrollIntoViewIfNeeded();
      await expect
        .poll(() =>
          image.evaluate(
            (element) => element.complete && element.naturalWidth > 0,
          ),
        )
        .toBe(true);
    }
    await page.evaluate(() => window.scrollTo(0, 0));

    await page.screenshot({
      path: testInfo.outputPath(`${viewport.label}.png`),
      fullPage: true,
    });
  });
}

test("page has no automatically detectable accessibility violations", async ({
  page,
}) => {
  await page.goto("./", { waitUntil: "networkidle" });
  const results = await new AxeBuilder({ page }).analyze();

  expect(results.violations).toEqual([]);
});
