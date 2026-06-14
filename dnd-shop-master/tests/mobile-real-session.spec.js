import { test, expect } from '@playwright/test';
import { expectNoAppError, gotoApp } from './helpers.js';

test.setTimeout(180000);

test('Simula 20 cicli completi su mobile 390x844 — nessun errore', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await gotoApp(page);

  // Attendi caricamento: potrebbe caricare mobile-native-shell o desktop fallback
  await page.waitForTimeout(2500);
  await expectNoAppError(page);

  // Funzioni helper resilienti per mobile
  async function findAndClick(text) {
    const byRole = page.getByRole('button', { name: text });
    if (await byRole.count() > 0) {
      await byRole.first().click({ timeout: 3000 });
      return true;
    }
    const byText = page.getByText(text, { exact: false }).first();
    if (await byText.count() > 0) {
      await byText.click({ timeout: 3000 });
      return true;
    }
    return false;
  }

  // Il ciclo principale
  for (let i = 0; i < 20; i++) {
    // --- HOME / MERCHANTI (shop) ---
    await findAndClick('Mercanti');
    await page.waitForTimeout(400);
    await expectNoAppError(page);

    // Genera mercante se pulsante visibile (cerca varianti testo)
    let generated = await findAndClick('Genera mercante');
    if (!generated) {
      // Mobile: potrebbe essere "Nuovo commerciante" o un bottone nella mobile-home
      generated = await findAndClick('Nuovo commerciante');
    }
    if (!generated) {
      // Anche più generico
      await findAndClick('Mercante');
    }
    await page.waitForTimeout(400);
    await expectNoAppError(page);

    // --- LOCANDE (tavern) ---
    await findAndClick('Locande');
    await page.waitForTimeout(400);
    await expectNoAppError(page);

    // Genera locanda
    let tavernGen = await findAndClick('Genera locanda');
    if (!tavernGen) {
      await findAndClick('Locanda');
    }
    await page.waitForTimeout(400);
    await expectNoAppError(page);

    // --- BESTIARIO ---
    await findAndClick('Bestiario');
    await page.waitForTimeout(600);
    await expectNoAppError(page);

    // Cerca di cliccare un bioma se visibile
    const biomeTile = page.locator('.biome-tile').first();
    if (await biomeTile.count() > 0) {
      await biomeTile.click({ timeout: 2000 });
      await page.waitForTimeout(300);
    }
    await expectNoAppError(page);

    // Torna su Mercanti
    await findAndClick('Mercanti');
    await page.waitForTimeout(400);
    await expectNoAppError(page);

    // --- INVENTARIO / CATALOGO ARMI ---
    // Se c'è un mercante, apri il catalogo armi
    const openCatalog = page.getByRole('button', { name: /Sfoglia catalogo armi/i });
    if (await openCatalog.count() > 0) {
      await openCatalog.first().click({ timeout: 3000 });
      await page.waitForTimeout(800);
      await expectNoAppError(page);

      // Aggiungi un'arma se disponibile
      const addWeapon = page.locator('.weapon-catalog-card .primary-button').first();
      if (await addWeapon.count() > 0) {
        await addWeapon.click({ timeout: 3000 });
        await page.waitForTimeout(200);
      }
      await expectNoAppError(page);

      // Chiudi catalogo
      await findAndClick('Chiudi catalogo armi');
      await page.waitForTimeout(300);
    }
    await expectNoAppError(page);

    // --- COMBATTIMENTO ---
    await findAndClick('Combattimento');
    await page.waitForTimeout(600);
    await expectNoAppError(page);

    // Se siamo in mobile-native-shell, prova a interagire
    const mobileNative = page.locator('.mobile-native-shell');
    const isMobileNative = await mobileNative.count() > 0;

    if (!isMobileNative) {
      // Desktop fallback: prova ad aggiungere personaggio
      const nameInput = page.getByPlaceholder(/Lorian/i);
      if (await nameInput.count() > 0) {
        await nameInput.first().fill(`Hero-${i}`, { timeout: 2000 });
        const addBtn = page.getByRole('button', { name: /Aggiungi personaggio/i });
        if (await addBtn.count() > 0) {
          await addBtn.click({ timeout: 2000 });
          await page.waitForTimeout(200);
        }
      }
    }
    await expectNoAppError(page);

    // --- MAPPA ---
    await findAndClick('Mappa');
    await page.waitForTimeout(500);
    await expectNoAppError(page);

    // Clicca un marker/filtro mappa se esiste
    const mapFilter = page.locator('.campaign-map-filters button').first();
    if (await mapFilter.count() > 0) {
      await mapFilter.click({ timeout: 2000 });
      await page.waitForTimeout(200);
    }
    await expectNoAppError(page);

    // Torna su Mercanti per il prossimo ciclo
    await findAndClick('Mercanti');
    await page.waitForTimeout(300);
    await expectNoAppError(page);

    // Ogni 5 cicli, prendi screenshot per debug
    if (i % 5 === 4) {
      await page.screenshot({ path: `mobile-session-cycle-${i + 1}.png`, fullPage: false });
    }
  }

  // Verifica finale: nessun errore visibile
  await expectNoAppError(page);

  // Verifica che la pagina risponda ancora
  const body = page.locator('body');
  await expect(body).toBeVisible({ timeout: 3000 });
});
