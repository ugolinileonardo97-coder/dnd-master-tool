export function normalizeUniqueName(value) {
  return String(value || "")
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase();
}

export function pickUnique(candidates, usedValues, fallbackFactory) {
  const used = new Set((usedValues || []).map(normalizeUniqueName));
  const safeCandidates = (candidates || []).filter(Boolean);

  for (let attempt = 0; attempt < 50; attempt += 1) {
    const candidate =
      safeCandidates[Math.floor(Math.random() * safeCandidates.length)];

    if (candidate && !used.has(normalizeUniqueName(candidate))) {
      return candidate;
    }
  }

  const unusedCandidate = safeCandidates.find(
    (candidate) => !used.has(normalizeUniqueName(candidate))
  );

  if (unusedCandidate) {
    return unusedCandidate;
  }

  return fallbackFactory ? fallbackFactory(used) : safeCandidates[0] || "";
}
