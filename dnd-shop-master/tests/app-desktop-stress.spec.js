import { test, expect } from '@playwright/test';

test.setTimeout(180000);

test('100 sessioni desktop senza crash', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });

  await page.goto('http://localhost:5173', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1500);

  for (let i = 0; i < 100; i++) {
    for (const label of ['Mercanti', 'Locande', 'Bestiario', 'Combattimento', 'Mappa']) {
      const target = page.getByText(label, { exact: false }).first();

      if (await target.count()) {
        await target.click({ force: true });
        await page.waitForTimeout(100);
      }
    }

    await expect(
      page.getByText(/Errore dell'app|Failed|Cannot read|undefined/i)
    ).toHaveCount(0);
  }
});