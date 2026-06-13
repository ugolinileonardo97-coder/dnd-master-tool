export function splitDamageOptions(damageFormula) {
  if (!damageFormula) return [];

  return String(damageFormula)
    .split("/")
    .map((part) => part.trim())
    .filter(Boolean);
}

function rollDie(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

export function rollDamageExpression(expression) {
  const rawExpression = String(expression || "").trim();

  if (!rawExpression) {
    return {
      total: 0,
      detail: "Nessun dado",
      rolls: [],
      modifier: 0,
      formula: "",
    };
  }

  const diceRegex = /(\d*)d(\d+)/gi;
  const rolls = [];

  let total = 0;
  let match;

  while ((match = diceRegex.exec(rawExpression)) !== null) {
    const diceCount = Number(match[1] || 1);
    const diceSides = Number(match[2]);

    const singleRolls = Array.from({ length: diceCount }, () =>
      rollDie(diceSides)
    );

    const subtotal = singleRolls.reduce((sum, value) => sum + value, 0);

    rolls.push({
      dice: `${diceCount}d${diceSides}`,
      values: singleRolls,
      subtotal,
    });

    total += subtotal;
  }

  const expressionWithoutDice = rawExpression.replace(diceRegex, "");
  const modifierMatches = expressionWithoutDice.match(/[+-]\s*\d+/g) || [];

  const modifier = modifierMatches.reduce((sum, value) => {
    return sum + Number(value.replace(/\s/g, ""));
  }, 0);

  total += modifier;

  const rollDetail = rolls
    .map((roll) => `${roll.dice} [${roll.values.join(", ")}]`)
    .join(" + ");

  const modifierText =
    modifier > 0
      ? ` + ${modifier}`
      : modifier < 0
        ? ` - ${Math.abs(modifier)}`
        : "";

  return {
    total,
    detail: `${rollDetail}${modifierText}`,
    rolls,
    modifier,
    formula: rawExpression,
  };
}
