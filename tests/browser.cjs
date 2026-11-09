const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const output = fs.mkdtempSync(path.join(os.tmpdir(), 'github-atlas-'));
  const url = pathToFileURL(path.resolve(__dirname, '../index.html')).href;
  const errors = [];
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('requestfailed', (request) => errors.push(request.url()));
  try {
    await page.goto(url);
    await page.locator('.network-figure.is-visible').waitFor();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(output, 'desktop.png') });

    for (const group of await page.locator('[data-tabs]').all()) {
      const tabs = group.getByRole('tab');
      for (let index = 0; index < await tabs.count(); index += 1) {
        const tab = tabs.nth(index);
        await tab.click();
        assert.equal(await tab.getAttribute('aria-selected'), 'true');
        assert.equal(await group.locator('[role="tabpanel"]:visible').count(), 1);
        const panel = await tab.getAttribute('aria-controls');
        assert(await page.locator(`#${panel}`).isVisible());
      }
      await tabs.first().focus();
      await page.keyboard.press('End');
      assert.equal(await tabs.last().getAttribute('aria-selected'), 'true');
      assert(await tabs.last().evaluate((element) => element === document.activeElement));
      await page.keyboard.press('Home');
      assert.equal(await tabs.first().getAttribute('aria-selected'), 'true');
      await page.keyboard.press('ArrowLeft');
      assert.equal(await tabs.last().getAttribute('aria-selected'), 'true');
      await page.keyboard.press('ArrowRight');
      assert.equal(await tabs.first().getAttribute('aria-selected'), 'true');
    }

    for (const filter of ['collaboration', 'compute', 'ai', 'community', 'all']) {
      await page.locator(`[data-filter="${filter}"]`).click();
      assert.equal(await page.locator('.product-card:visible').count(), filter === 'all' ? 12 : 3);
      assert.equal(await page.locator('#product-count').innerText(), `${filter === 'all' ? 12 : 3} 项核心能力`);
    }
    const motionCheck = await page.evaluate(() => {
      document.querySelector('[data-filter="ai"]').click();
      const before = document.getAnimations().length;
      document.querySelector('#motion-toggle').click();
      return { before, after: document.getAnimations().length, scroll: getComputedStyle(document.documentElement).scrollBehavior };
    });
    assert(motionCheck.before > 0);
    assert.equal(motionCheck.after, 0);
    assert.equal(motionCheck.scroll, 'auto');
    assert.equal(await page.locator('html').getAttribute('data-motion'), 'off');
    assert.equal(await page.locator('#motion-toggle').getAttribute('aria-pressed'), 'true');
    await page.locator('#motion-toggle').click();
    assert.equal(await page.locator('html').getAttribute('data-motion'), 'on');
    await page.locator('[data-filter="all"]').click();
    await page.locator('[data-replay="delivery"]').click();
    assert(await page.locator('.delivery-board').evaluate((element) => element.getAnimations({ subtree: true }).some((animation) => animation.playState === 'running')));
    await page.locator('[data-replay="network"]').click();
    assert(await page.locator('.network').evaluate((element) => element.getAnimations({ subtree: true }).some((animation) => animation.playState === 'running')));

    const risk = page.locator('.risk-list details').nth(1);
    await risk.locator('summary').click();
    assert(await risk.evaluate((element) => element.open));
    await risk.locator('summary').focus();
    await page.keyboard.press('Enter');
    assert.equal(await risk.evaluate((element) => element.open), false);

    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.waitForFunction(() => document.documentElement.dataset.motion === 'off');
    assert.equal(await page.locator('html').getAttribute('data-motion'), 'off');
    assert(await page.locator('#motion-toggle').isDisabled());
    assert.equal(await page.evaluate(() => document.getAnimations().filter((animation) => animation.playState === 'running').length), 0);

    for (const width of [1440, 1024, 768, 390, 320]) {
      await page.setViewportSize({ width, height: 900 });
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Horizontal overflow at ${width}px`);
      for (const anchor of ['#products', '#financials', '#competition', '#sources']) {
        await page.locator(`.chapter-rail a[href="${anchor}"]`).click();
        await page.waitForTimeout(150);
        assert.equal(await page.locator('.chapter-rail [aria-current]').getAttribute('href'), anchor);
        const top = await page.locator(anchor).evaluate((element) => element.getBoundingClientRect().top);
        assert(top >= 64 && top < 250, `Anchor obscured at ${width}px: ${anchor} / ${top}`);
      }
      await page.locator('#price-copilot').click();
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Pricing overflow at ${width}px`);
      if (width < 720) {
        await page.locator('#panel-copilot .table-scroll').focus();
        await page.keyboard.press('ArrowRight');
        await page.waitForFunction(() => document.querySelector('#panel-copilot .table-scroll').scrollLeft > 0);
      }
      await page.locator('#price-platform').click();
    }
    for (const height of [500, 400]) {
      await page.setViewportSize({ width: 1440, height });
      const lastLink = page.locator('.chapter-rail a[href="#sources"]');
      await lastLink.click();
      assert(await lastLink.evaluate((element) => {
        const box = element.getBoundingClientRect();
        return box.top >= 0 && box.bottom <= innerHeight;
      }), `Last chapter link unreachable at 1440x${height}`);
    }
    await page.setViewportSize({ width: 390, height: 900 });
    await page.locator('.brand').click();
    await page.screenshot({ path: path.join(output, 'mobile.png') });
    await page.locator('#financials').scrollIntoViewIfNeeded();
    await page.locator('.finance-grid').screenshot({ path: path.join(output, 'financials-mobile.png') });

    const staticPage = await browser.newPage({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
    await staticPage.goto(url);
    assert.equal(await staticPage.locator('.chapter').count(), 10);
    assert.equal(await staticPage.locator('[role="tabpanel"]:visible').count(), 10);
    assert.equal(await staticPage.locator('.product-card:visible').count(), 12);
    assert.equal(await staticPage.locator('#motion-toggle').isVisible(), false);
    assert(await staticPage.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    assert.deepEqual(errors, []);
    console.log(`通过：离线加载、全部标签页、键盘操作、产品筛选、重播、暂停、风险折叠、减少动态、五种宽度、锚点、无 JS 阅读。\n截图：${output}`);
  } finally {
    await browser.close();
  }
})().catch((error) => { console.error(error); process.exitCode = 1; });
