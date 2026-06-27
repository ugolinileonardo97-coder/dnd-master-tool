import { test, expect } from '@playwright/test';
import { safeClick, expectNoAppError, waitSmall, gotoApp } from './helpers.js';

test.setTimeout(180000);

test('Apri catalogo armi, cerca, filtra, aggiungi armi — nessun errore', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await gotoApp(page);

  // Vai su Mercanti
  await safeClick(page, 'Mercanti');
  await page.waitForTimeout(500);
  await expectNoAppError(page);

  // Genera un mercante per avere un inventario
  const genBtn = page.getByRole('button', { name: /Genera mercante/i });
  await expect(genBtn).toBeAttached({ timeout: 3000 });
  await genBtn.first().click({ timeout: 5000 });
  await page.waitForTimeout(600);
  await expectNoAppError(page);

  // Trova tab "Armi" nell'inventario e cliccalo se esiste
  const armiTab = page.getByRole('button', { name: /Armi/i }).first();
  if (await armiTab.count() > 0) {
    await armiTab.click({ timeout: 3000 });
    await waitSmall(page);
  }

  // Apri "Sfoglia catalogo armi"
  const catalogBtn = page.getByRole('button', { name: /Sfoglia catalogo armi/i });
  await expect(catalogBtn).toBeAttached({ timeout: 3000 });
  await catalogBtn.click();
  await page.waitForTimeout(800);
  await expectNoAppError(page);

  // Cerca "lama"
  const searchInput = page.getByPlaceholder(/Nome, effetto, proprieta/i);
  if (await searchInput.count() > 0) {
    await searchInput.first().fill('lama', { timeout: 3000 });
    await page.waitForTimeout(500);
  }

  // Cambia rarità se lo select esiste
  const raritySelect = page.getByLabel(/Rarit/i);
  if (await raritySelect.count() > 0) {
    await raritySelect.first().selectOption('Rara', { timeout: 3000 });
    await waitSmall(page);
  }

  // Cambia bioma se lo select esiste
  const biomeSelect = page.getByLabel(/Bioma/i);
  if (await biomeSelect.count() > 0) {
    await biomeSelect.first().selectOption('Tutti', { timeout: 3000 });
    await waitSmall(page);
  }

  // Clicca "Mostra altri" se presente
  const showMore = page.getByRole('button', { name: /Mostra altri/i });
  if (await showMore.count() > 0) {
    await showMore.first().click({ timeout: 3000 });
    await page.waitForTimeout(300);
  }

  // Aggiungi fino a 5 armi
  for (let i = 0; i < 5; i++) {
    const addBtn = page.locator('.weapon-catalog-card .primary-button').first();
    if (await addBtn.count() > 0) {
      await addBtn.click({ timeout: 3000 });
      await page.waitForTimeout(200);
    }
    await expectNoAppError(page);
  }

  // Chiudi catalogo
  const closeBtn = page.getByRole('button', { name: /Chiudi catalogo armi/i });
  if (await closeBtn.count() > 0) {
    await closeBtn.click({ timeout: 3000 });
    await page.waitForTimeout(300);
  }

  await expectNoAppError(page);
});
