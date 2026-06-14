import { test, expect } from '@playwright/test';
import { expectNoAppError, waitSmall, gotoApp } from './helpers.js';

test.setTimeout(180000);

test('Genera 20 mercanti, cambia bioma e prestigio — nessun errore', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await gotoApp(page);

  // Vai su Mercanti
  const mercantiBtn = page.getByRole('button', { name: /Mercanti/i });
  await expect(mercantiBtn).toBeAttached({ timeout: 3000 });
  await mercantiBtn.click();
  await page.waitForTimeout(500);
  await expectNoAppError(page);

  // Cambia area geografica se lo select esiste
  const regionSelect = page.getByLabel(/Area geografica/i);
  if (await regionSelect.count() > 0) {
    await regionSelect.selectOption('desert', { timeout: 3000 });
    await waitSmall(page);
  }

  // Cambia prestigio se lo select esiste
  const prestigeSelect = page.getByLabel(/Prestigio/i);
  if (await prestigeSelect.count() > 0) {
    await prestigeSelect.selectOption('buona', { timeout: 3000 });
    await waitSmall(page);
  }

  // Genera 20 mercanti
  for (let i = 0; i < 20; i++) {
    const genBtn = page.getByRole('button', { name: /Genera mercante/i });
    if (await genBtn.count() > 0) {
      await genBtn.first().click({ timeout: 5000 });
      await page.waitForTimeout(400);
    }
    await expectNoAppError(page);
  }

  // Controlla che ci siano mercanti nella sidebar
  const merchantButtons = page.locator('.merchant-button');
  const count = await merchantButtons.count();
  expect(count).toBeGreaterThanOrEqual(15);

  // Cambia di nuovo bioma
  if (await regionSelect.count() > 0) {
    await regionSelect.selectOption('forest', { timeout: 3000 });
    await waitSmall(page);
  }

  await expectNoAppError(page);
});
