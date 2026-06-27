import { test, expect } from '@playwright/test';
import { expectNoAppError, waitSmall, gotoApp } from './helpers.js';

test.setTimeout(180000);

test('Genera 20 locande, cambia bioma — nessun errore', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await gotoApp(page);

  // Vai su Locande
  const locandeBtn = page.getByRole('button', { name: /Locande/i });
  await expect(locandeBtn).toBeAttached({ timeout: 3000 });
  await locandeBtn.click();
  await page.waitForTimeout(500);
  await expectNoAppError(page);

  // Cambia area geografica se lo select esiste
  const regionSelect = page.getByLabel(/Area geografica/i);
  if (await regionSelect.count() > 0) {
    await regionSelect.selectOption('mountain', { timeout: 3000 });
    await waitSmall(page);
  }

  // Genera 20 locande
  for (let i = 0; i < 20; i++) {
    const genBtn = page.getByRole('button', { name: /Genera locanda/i });
    if (await genBtn.count() > 0) {
      await genBtn.first().click({ timeout: 5000 });
      await page.waitForTimeout(400);
    }
    await expectNoAppError(page);
  }

  // Controlla che ci siano locande nella sidebar
  const tavernButtons = page.locator('.merchant-button');
  const count = await tavernButtons.count();
  expect(count).toBeGreaterThanOrEqual(15);

  // Apri dettagli prima locanda se esiste
  const firstTavern = page.locator('.merchant-button').first();
  if (await firstTavern.count() > 0) {
    await firstTavern.click({ timeout: 3000 });
    await page.waitForTimeout(300);
    await expectNoAppError(page);

    // Controlla che ci siano testi non vuoti nella scheda
    const texts = await page.locator('.merchant-header h1').allTextContents();
    for (const text of texts) {
      expect(text.length).toBeGreaterThan(0);
    }

    // Controlla descrizioni non vuote
    const descriptions = await page.locator('.large-reading-textarea').allTextContents();
    for (const desc of descriptions) {
      if (desc.trim().length > 0) {
        expect(desc.trim().length).toBeGreaterThan(2);
      }
    }
  }

  await expectNoAppError(page);
});