import { test, expect } from '@playwright/test';
import { expectNoAppError, waitSmall, gotoApp } from './helpers.js';

test.setTimeout(180000);

test('Imposta party, aggiungi mostri, avvia combattimento, danni e turni — nessun errore', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await gotoApp(page);

  // Vai su Combattimento
  const combatBtn = page.getByRole('button', { name: /Combattimento/i });
  await expect(combatBtn).toBeAttached({ timeout: 3000 });
  await combatBtn.click();
  await page.waitForTimeout(800);
  await expectNoAppError(page);

  // --- AGGIUNGI 3 PERSONAGGI al party ---
  const characters = [
    { name: 'Ardan', level: '5', ac: '16', hp: '42' },
    { name: 'Mira', level: '5', ac: '14', hp: '35' },
    { name: 'Tharok', level: '5', ac: '18', hp: '50' },
  ];

  for (const char of characters) {
    // Nome
    const nameInput = page.getByPlaceholder(/Lorian/i);
    if (await nameInput.count() > 0) {
      await nameInput.first().fill(char.name, { timeout: 3000 });
    }
    // Livello
    const levelInput = page.locator('label').filter({ hasText: /Livello/i }).locator('input[type="number"]').first();
    if (await levelInput.count() > 0) {
      await levelInput.fill(char.level, { timeout: 2000 });
    }
    // CA
    const acInput = page.locator('label').filter({ hasText: /^CA$/i }).locator('input').first();
    if (await acInput.count() > 0) {
      await acInput.fill(char.ac, { timeout: 2000 });
    }
    // PF Max
    const maxHpInput = page.locator('label').filter({ hasText: /PF Max/i }).locator('input').first();
    if (await maxHpInput.count() > 0) {
      await maxHpInput.fill(char.hp, { timeout: 2000 });
    }
    // PF Attuali
    const currentHpInput = page.locator('label').filter({ hasText: /PF Attuali/i }).locator('input').first();
    if (await currentHpInput.count() > 0) {
      await currentHpInput.fill(char.hp, { timeout: 2000 });
    }
    // Iniziativa
    const initInput = page.locator('label').filter({ hasText: /^Iniziativa$/i }).locator('input').first();
    if (await initInput.count() > 0) {
      await initInput.fill('15', { timeout: 2000 });
    }
    // Destrezza
    const dexInput = page.locator('label').filter({ hasText: /Destrezza/i }).locator('input').first();
    if (await dexInput.count() > 0) {
      await dexInput.fill('14', { timeout: 2000 });
    }

    // Aggiungi personaggio
    const addCharBtn = page.getByRole('button', { name: /Aggiungi personaggio/i });
    if (await addCharBtn.count() > 0) {
      await addCharBtn.click({ timeout: 3000 });
      await page.waitForTimeout(300);
    }
    await expectNoAppError(page);
  }

  // Verifica che i personaggi siano stati aggiunti (controllo visivo nella combat-list)
  const partyRows = page.locator('.combat-row');
  expect(await partyRows.count()).toBeGreaterThanOrEqual(2);

  // --- AGGIUNGI MOSTRO ---
  // Cerca un mostro dal dropdown
  const monsterSelect = page.locator('.combat-add-monster select').first();
  if (await monsterSelect.count() > 0) {
    // Seleziona il primo mostro disponibile
    const options = await monsterSelect.locator('option').all();
    if (options.length > 1) {
      await monsterSelect.selectOption({ index: 1 }, { timeout: 3000 });
      await waitSmall(page);
    }
  }

  // Aggiungi mostro
  const addMonsterBtn = page.getByRole('button', { name: /Aggiungi$/i }).first();
  if (await addMonsterBtn.count() > 0) {
    await addMonsterBtn.click({ timeout: 3000 });
    await waitSmall(page);
  }
  await expectNoAppError(page);

  // --- AVVIA COMBATTIMENTO ---
  const startCombatBtn = page.getByRole('button', { name: /Avvia combattimento/i });
  if (await startCombatBtn.count() > 0) {
    await startCombatBtn.click({ timeout: 3000 });
    await page.waitForTimeout(500);
  }
  await expectNoAppError(page);

  // --- APPLICA DANNI ---
  // Cerca un input numerico nel combat
  const combatNumberInput = page.locator('.combat-manual-value-field input[type="number"]').first();
  if (await combatNumberInput.count() > 0) {
    await combatNumberInput.fill('8', { timeout: 2000 });
    await waitSmall(page);
  }

  // Clicca "Danno" se presente
  const damageBtn = page.getByRole('button', { name: /^Danno$/i }).first();
  if (await damageBtn.count() > 0) {
    await damageBtn.click({ timeout: 3000 });
    await page.waitForTimeout(300);
  }
  await expectNoAppError(page);

  // --- PASSA TURNO ---
  const nextTurnBtn = page.getByRole('button', { name: /Prossimo turno/i });
  if (await nextTurnBtn.count() > 0) {
    await nextTurnBtn.click({ timeout: 3000 });
    await page.waitForTimeout(300);
  }
  await expectNoAppError(page);

  // --- CLICCA SU UN ATTORE NELL'INIZIATIVA (se esiste) ---
  const initRow = page.locator('.initiative-row').first();
  if (await initRow.count() > 0) {
    await initRow.click({ timeout: 2000 });
    await waitSmall(page);
  }
  await expectNoAppError(page);
});
