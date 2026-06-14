import { expect } from '@playwright/test';

export const WAIT = { timeout: 5000 };

/**
 * Click a button/menu by text, with resilience.
 * Tries getByRole first, then getByText.
 */
export async function safeClick(page, text) {
  const byRole = page.getByRole('button', { name: text });
  if (await byRole.count() > 0) {
    await byRole.first().click({ timeout: WAIT.timeout });
    return;
  }
  const byText = page.getByText(text, { exact: false }).first();
  if (await byText.count() > 0) {
    await byText.click({ timeout: WAIT.timeout });
    return;
  }
  // Final fallback: locator contains text
  const fallback = page.locator(`text="${text}"`).first();
  if (await fallback.count() > 0) {
    await fallback.click({ timeout: WAIT.timeout });
  }
}

/**
 * Fill a form field by label text or placeholder.
 */
export async function safeFill(page, labelOrPlaceholder, value) {
  // Try by label
  const byLabel = page.getByLabel(labelOrPlaceholder, { exact: false });
  if (await byLabel.count() > 0) {
    await byLabel.first().fill(value, { timeout: WAIT.timeout });
    return;
  }
  // Try by placeholder
  const byPlaceholder = page.getByPlaceholder(labelOrPlaceholder, { exact: false });
  if (await byPlaceholder.count() > 0) {
    await byPlaceholder.first().fill(value, { timeout: WAIT.timeout });
    return;
  }
  // Try locator with text
  const byText = page.locator(`input[value="${labelOrPlaceholder}"]`).first();
  if (await byText.count() > 0) {
    await byText.fill(value, { timeout: WAIT.timeout });
  }
}

/**
 * Click safely if element exists - no error if missing.
 */
export async function maybeClick(page, text) {
  try {
    const el = page.getByText(text, { exact: false }).first();
    if (await el.count() > 0) {
      await el.click({ timeout: 2000 });
    }
  } catch {
    // silently ignore
  }
}

/**
 * Assert no error messages visible on page.
 */
export async function expectNoAppError(page) {
  const errorPatterns = [
    /Errore dell'app/i,
    /Cannot read propert/i,
    /undefined/i,
    /Failed to load/i,
    /is not defined/i,
    /Cannot find/i,
    /null is not/i,
  ];
  for (const pattern of errorPatterns) {
    const count = await page.getByText(pattern).count();
    expect(count, `Found error pattern: ${pattern}`).toBe(0);
  }
  // Check no visible error boundary
  const errorBoundary = page.locator('.app-error-boundary');
  if (await errorBoundary.count() > 0) {
    expect(await errorBoundary.isVisible()).toBe(false);
  }
}

/**
 * Short wait for rendering.
 */
export function waitSmall(page) {
  return page.waitForTimeout(200);
}

/**
 * Select a <select> by its label text.
 */
export async function safeSelect(page, labelText, optionText) {
  const byLabel = page.getByLabel(labelText, { exact: false });
  if (await byLabel.count() > 0) {
    await byLabel.first().selectOption(optionText, { timeout: WAIT.timeout });
    return;
  }
  // Fallback: find label and then select
  const label = page.locator(`label:has-text("${labelText}")`).first();
  if (await label.count() > 0) {
    const select = label.locator('select');
    if (await select.count() > 0) {
      await select.selectOption(optionText, { timeout: WAIT.timeout });
    }
  }
}

/**
 * Safe goto + wait for app to load.
 */
export async function gotoApp(page) {
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1000);
  await expectNoAppError(page);
}