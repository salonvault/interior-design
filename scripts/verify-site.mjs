import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";
import assert from "node:assert/strict";

await mkdir(".artifacts", { recursive: true });
const browser = await chromium.launch({ channel: "chrome", headless: true });
const errors = [];
const baseUrl = process.argv[2] ?? process.env.SITE_URL ?? "http://localhost:3100";
try {
  for (const [width, height] of [
    [1440, 1000],
    [1024, 768],
    [768, 1024],
    [390, 844],
    [320, 720],
  ]) {
    const page = await browser.newPage({ viewport: { width, height } });
    page.on("pageerror", (error) => errors.push(width + ": " + error.message));
    page.on("console", (message) => {
      if (message.type() === "error")
        errors.push(width + ": " + message.text());
    });
    await page.goto(baseUrl, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(1800);
    assert.equal(
      await page
        .locator(".site-header")
        .evaluate((el) => el.classList.contains("is-visible")),
      false,
      "Header stays hidden during Hero1 at " + width,
    );
    if (width === 1440 || width === 390) {
      await page.screenshot({
        path: ".artifacts/hero1-start-" + width + ".png",
      });
    }
    const hero1Distance = await page
      .locator(".hero1")
      .evaluate((el) => el.getBoundingClientRect().height - window.innerHeight);
    await page.evaluate(
      (distance) => window.scrollTo(0, distance * 0.52),
      hero1Distance,
    );
    await page.waitForTimeout(1000);
    if (width === 1440 || width === 390) {
      await page.screenshot({
        path: ".artifacts/hero1-middle-" + width + ".png",
      });
    }
    await page.evaluate(
      (distance) => window.scrollTo(0, distance + 8),
      hero1Distance,
    );
    await page.waitForTimeout(1000);
    assert.equal(
      await page
        .locator(".site-header")
        .evaluate((el) => el.classList.contains("is-visible")),
      true,
      "Header appears after Hero1 at " + width,
    );
    if (width === 1440 || width === 390) {
      await page.screenshot({ path: ".artifacts/hero1-end-" + width + ".png" });
    }
    assert.equal(await page.locator("h1").count(), 1);
    const topOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth + 1,
    );
    assert.equal(topOverflow, false, "Hero overflow at " + width);

    await page.getByRole("button", { name: "Open navigation menu" }).click();
    assert.equal(await page.getByRole("dialog").isVisible(), true);
    await page.keyboard.press("Escape");
    assert.equal(await page.getByRole("dialog").isVisible(), false);
    assert.equal(
      await page
        .getByRole("button", { name: "Open navigation menu" })
        .evaluate((el) => document.activeElement === el),
      true,
    );
    await page.getByRole("button", { name: "Open navigation menu" }).click();
    await page
      .getByRole("navigation", { name: "Expanded navigation" })
      .getByRole("link", { name: "Our philosophy" })
      .click();
    await page.waitForTimeout(1200);
    assert.equal(await page.getByRole("dialog").isVisible(), false);
    await page.getByRole("button", { name: "Walnut", exact: true }).click();
    assert.equal(
      await page
        .getByRole("button", { name: "Walnut", exact: true })
        .getAttribute("aria-pressed"),
      "true",
    );
    assert.equal(
      await page.locator(".material-caption h3").innerText(),
      "Walnut",
    );
    await page.getByRole("button", { name: "Travertine", exact: true }).click();
    if (width === 1440 || width === 390) {
      await page.locator("#philosophy").scrollIntoViewIfNeeded();
      await page.waitForTimeout(1000);
      await page.screenshot({ path: ".artifacts/material-" + width + ".png" });
    }
    await page.getByRole("button", { name: "Open navigation menu" }).click();
    await page
      .getByRole("navigation", { name: "Expanded navigation" })
      .getByRole("link", { name: "The collection" })
      .click();
    await page.waitForTimeout(1200);
    await page.getByRole("button", { name: "Next project" }).click();
    await page.waitForTimeout(1500);
    const advanced = await page.evaluate(() => {
      const viewport = document.querySelector(".work-viewport");
      const track = document.querySelector(".work-track");
      return (
        viewport.scrollLeft > 0 ||
        new DOMMatrix(getComputedStyle(track).transform).m41 < -100
      );
    });
    assert.equal(
      advanced,
      true,
      "Next project should move collection at " + width,
    );
    const secondProject = await page
      .locator(".work-project")
      .nth(1)
      .boundingBox();
    assert.ok(
      secondProject.y < height && secondProject.y > -100,
      "Selected project stays in view at " + width,
    );
    assert.ok(
      secondProject.x > -100 && secondProject.x < width / 2,
      "Next reaches second project at " + width,
    );
    if (width === 1440)
      await page.screenshot({ path: ".artifacts/collection.png" });
    await page.getByRole("button", { name: "Previous project" }).click();
    await page.waitForTimeout(1000);
    await page.locator("#contact").scrollIntoViewIfNeeded();
    await page.waitForTimeout(1200);
    assert.equal(
      await page
        .locator("#contact a[href='mailto:hello@eloria.studio']")
        .count(),
      2,
    );
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth + 1,
      ),
      false,
      "Page overflow at " + width,
    );
    const broken = await page
      .locator("img")
      .evaluateAll((images) =>
        images
          .filter((img) => img.complete && img.naturalWidth === 0)
          .map((img) => img.src),
      );
    assert.deepEqual(broken, [], "Broken images at " + width);
    const missingTargets = await page
      .locator("a[href^='#']")
      .evaluateAll((links) =>
        links
          .map((link) => link.getAttribute("href"))
          .filter((href) => !document.querySelector(href)),
      );
    assert.deepEqual(missingTargets, []);
    if (width === 1440 || width === 390)
      await page.screenshot({ path: ".artifacts/contact-" + width + ".png" });
    console.log(
      "PASS " +
        width +
        "x" +
        height +
        ": layout, menu, materials, project navigation, links, images",
    );
    await page.close();
  }
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    reducedMotion: "reduce",
  });
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.locator("#hero").scrollIntoViewIfNeeded();
  assert.equal(
    await page.locator(".pin-spacer").count(),
    0,
    "Reduced motion must disable pinning",
  );
  assert.equal(
    await page
      .locator(".hero-title")
      .evaluate((el) => getComputedStyle(el).opacity),
    "1",
  );
  await page.getByRole("button", { name: "Next project" }).click();
  assert.ok(
    (await page.locator(".work-viewport").evaluate((el) => el.scrollLeft)) > 0,
  );
  console.log(
    "PASS reduced motion: no pinning, visible content, native project navigation",
  );
  assert.deepEqual(errors, [], "Browser errors");
  await page.close();
} finally {
  await browser.close();
}
