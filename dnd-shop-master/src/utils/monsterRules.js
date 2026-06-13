import { getMonsterCombatProfile } from "../data/monsterCombatProfiles";

const ALIGNMENTS = {
  lawfulGood: "Legale Buono",
  neutralGood: "Neutrale Buono",
  chaoticGood: "Caotico Buono",
  lawfulNeutral: "Legale Neutrale",
  neutral: "Neutrale",
  chaoticNeutral: "Caotico Neutrale",
  lawfulEvil: "Legale Malvagio",
  neutralEvil: "Neutrale Malvagio",
  chaoticEvil: "Caotico Malvagio",
  unaligned: "Non allineato",
};

function normalize(value) {
  return String(value || "").toLowerCase();
}

function includesAny(text, words) {
  return words.some((word) => text.includes(word));
}

export function inferMonsterAlignment(monster) {
  const source = [
    monster?.name,
    monster?.type,
    monster?.role,
    monster?.difficulty,
    ...(monster?.tags || []),
    monster?.description,
    monster?.story,
  ]
    .map(normalize)
    .join(" ");

  if (
    includesAny(source, [
      "diavolo",
      "infernale",
      "patto",
      "contratto",
      "esattore",
      "avvocato infernale",
    ])
  ) {
    return ALIGNMENTS.lawfulEvil;
  }

  if (
    includesAny(source, [
      "demone",
      "abissale",
      "caos",
      "divoratore",
      "massacro",
      "distruzione",
    ])
  ) {
    return ALIGNMENTS.chaoticEvil;
  }

  if (
    includesAny(source, [
      "lich",
      "non morto",
      "necrotico",
      "spettro",
      "vampiro",
      "maledizione",
      "tiranno",
    ])
  ) {
    return ALIGNMENTS.neutralEvil;
  }

  if (
    includesAny(source, [
      "guardiano",
      "custode",
      "sentinella",
      "paladino",
      "ordine",
      "giuramento",
    ])
  ) {
    return ALIGNMENTS.lawfulNeutral;
  }

  if (
    includesAny(source, [
      "drago",
      "sovrano",
      "antico",
      "regina",
      "signore",
      "oracolo",
    ])
  ) {
    return ALIGNMENTS.neutral;
  }

  if (
    includesAny(source, [
      "fata",
      "fatato",
      "folletto",
      "spiritello",
      "inganno",
      "scherzo",
      "nebbia",
    ])
  ) {
    return ALIGNMENTS.chaoticNeutral;
  }

  if (
    includesAny(source, [
      "bestia",
      "sciame",
      "animale",
      "lupo",
      "orso",
      "serpente",
      "ragno",
      "melma",
      "pianta",
    ])
  ) {
    return ALIGNMENTS.unaligned;
  }

  if (
    includesAny(source, [
      "celestiale",
      "sacro",
      "radiante",
      "angelo",
      "protettore",
    ])
  ) {
    return ALIGNMENTS.neutralGood;
  }

  return ALIGNMENTS.neutral;
}

function parseAttackBonus(value, fallback = 3) {
  const match = String(value || "").match(/[-+]?\d+/);
  return match ? Number(match[0]) : fallback;
}

function parseDamageParts(combat) {
  const damage = String(combat?.damage || "1d6").trim();
  const damageType = String(combat?.damageType || "").trim();

  return damage
    .split("/")
    .map((part) => part.trim())
    .filter(Boolean)
    .map((formula) => ({
      formula,
      type: damageType,
    }));
}

function getMainAttackName(monster) {
  const source = normalize([
    monster?.name,
    monster?.type,
    monster?.role,
    ...(monster?.tags || []),
    monster?.actions,
    monster?.combat?.damageNote,
  ].join(" "));

  if (source.includes("arco") || source.includes("artigliere")) return "Tiro mirato";
  if (source.includes("lancia") || source.includes("tridente")) return "Affondo";
  if (source.includes("morso") || source.includes("bestia")) return "Morso";
  if (source.includes("artigli") || source.includes("predatore")) return "Artigliata";
  if (source.includes("ascia")) return "Ascia pesante";
  if (source.includes("spada") || source.includes("lama")) return "Colpo di lama";
  if (source.includes("bastone") || source.includes("ramo")) return "Schianto";
  if (source.includes("incantatore") || source.includes("mago") || source.includes("strega")) return "Dardo arcano";
  if (source.includes("gelo") || source.includes("ghiaccio")) return "Tocco gelido";
  if (source.includes("fuoco") || source.includes("cenere")) return "Lingua di fuoco";
  if (source.includes("psich")) return "Lama mentale";

  return "Attacco naturale";
}

function inferAttackKind(monster) {
  const source = normalize([
    monster?.type,
    monster?.role,
    ...(monster?.tags || []),
    monster?.actions,
    monster?.combat?.damageNote,
  ].join(" "));

  if (
    includesAny(source, [
      "incantatore",
      "mago",
      "strega",
      "lich",
      "oracolo",
      "fatato",
      "fata",
      "psich",
    ])
  ) {
    return "Attacco magico a distanza";
  }

  if (includesAny(source, ["arco", "dardo", "artigliere"])) {
    return "Attacco con arma a distanza";
  }

  return "Attacco con arma in mischia";
}

function inferReach(monster) {
  const cr = Number(String(monster?.cr || "0").replace(",", ".")) || 0;
  const source = normalize([monster?.name, monster?.type, ...(monster?.tags || [])].join(" "));

  if (cr >= 10 || includesAny(source, ["gigante", "drago", "titano", "enorme"])) {
    return "10 ft.";
  }

  return "5 ft.";
}

function inferRange(monster) {
  const source = normalize([monster?.role, monster?.type, ...(monster?.tags || [])].join(" "));

  if (includesAny(source, ["incantatore", "artigliere", "mago", "strega", "psich"])) {
    return "60 ft.";
  }

  return null;
}

function getCrNumber(cr) {
  const value = String(cr || "0").trim();
  if (value.includes("/")) {
    const [a, b] = value.split("/").map(Number);
    return b ? a / b : 0;
  }
  return Number(value) || 0;
}

function getSaveDc(monster, combat) {
  const cr = getCrNumber(monster?.cr);
  const attack = parseAttackBonus(combat?.attackBonus, 3);
  return Math.max(10, Math.min(24, 8 + Math.ceil(cr / 3) + Math.max(2, Math.floor(attack / 2))));
}

function inferSavingAbility(monster) {
  const source = normalize([
    monster?.name,
    monster?.type,
    monster?.role,
    ...(monster?.tags || []),
    monster?.actions,
    monster?.combat?.damageType,
  ].join(" "));

  if (includesAny(source, ["veleno", "necrot", "malattia", "maledizione", "gelo", "freddo"])) {
    return "cos";
  }

  if (includesAny(source, ["psich", "charme", "paura", "comando", "fatato", "illusione"])) {
    return "sag";
  }

  if (includesAny(source, ["fuoco", "fulmine", "acido", "soffio", "esplos", "barriera", "raggio"])) {
    return "des";
  }

  return "des";
}

function inferComponents(monster) {
  const source = normalize([monster?.type, monster?.role, ...(monster?.tags || []), monster?.actions].join(" "));

  if (includesAny(source, ["incantatore", "mago", "strega", "lich", "fata", "fatato", "oracolo"])) {
    return "V, S";
  }

  return null;
}

function inferSpecialActionName(monster) {
  const source = normalize([monster?.name, monster?.type, monster?.role, ...(monster?.tags || []), monster?.actions].join(" "));

  if (source.includes("ghiaccio") || source.includes("gelo") || source.includes("freddo")) return "Barriera di ghiaccio";
  if (source.includes("fuoco") || source.includes("cenere")) return "Fiammata";
  if (source.includes("veleno")) return "Soffio velenoso";
  if (source.includes("psich")) return "Comando mentale";
  if (source.includes("fatato") || source.includes("fata")) return "Comando fatato";
  if (source.includes("necrot") || source.includes("lich") || source.includes("non morto")) return "Ondata necrotica";
  if (source.includes("acido")) return "Getto acido";
  if (source.includes("ombra")) return "Velo d'ombra";
  if (source.includes("radice") || source.includes("pianta")) return "Radici vincolanti";
  if (source.includes("drago")) return "Soffio elementale";
  if (source.includes("diavolo") || source.includes("patto")) return "Clausola infernale";
  if (source.includes("demone")) return "Ruggito abissale";

  return null;
}

function inferSpecialDamage(monster, combat) {
  const parts = parseDamageParts(combat);
  const primary = parts[0]?.formula || "2d6";
  const source = normalize([monster?.type, monster?.role, ...(monster?.tags || []), monster?.actions, combat?.damageType].join(" "));

  let damageType = combat?.damageType || "forza";

  if (source.includes("freddo") || source.includes("gelo") || source.includes("ghiaccio")) damageType = "freddo";
  if (source.includes("fuoco") || source.includes("cenere")) damageType = "fuoco";
  if (source.includes("psich")) damageType = "psichici";
  if (source.includes("veleno")) damageType = "veleno";
  if (source.includes("necrot")) damageType = "necrotici";
  if (source.includes("acido")) damageType = "acido";

  return { formula: primary, type: damageType };
}

function buildBaseAttack(monster, combat) {
  const damageParts = parseDamageParts(combat);
  const damagePart = damageParts[0] || { formula: "1d6", type: combat?.damageType || "" };
  const attackType = inferAttackKind(monster);
  const isRanged = attackType.includes("distanza");

  return {
    name: getMainAttackName(monster),
    type: attackType,
    actionCost: "Azione",
    attackBonus: parseAttackBonus(combat?.attackBonus),
    reach: isRanged ? null : inferReach(monster),
    range: isRanged ? inferRange(monster) || "60 ft." : null,
    target: "Una creatura",
    hit: `${damagePart.formula}${damagePart.type ? ` danni ${damagePart.type}` : ""}`,
    damage: damagePart.formula,
    damageType: damagePart.type,
    savingThrow: null,
    components: null,
    concentration: false,
    duration: "Istantanea",
    recharge: null,
    uses: null,
    description:
      "Il mostro tira un d20 e aggiunge il bonus al colpire. Se il risultato raggiunge la CA del bersaglio, applica il danno indicato.",
  };
}

function buildExtraDamageAttack(monster, combat, index) {
  const damageParts = parseDamageParts(combat);
  const damagePart = damageParts[index];

  if (!damagePart) return null;

  return {
    name: index === 1 ? "Attacco secondario" : `Attacco ${index + 1}`,
    type: inferAttackKind(monster),
    actionCost: "Azione",
    attackBonus: parseAttackBonus(combat?.attackBonus),
    reach: inferAttackKind(monster).includes("distanza") ? null : inferReach(monster),
    range: inferAttackKind(monster).includes("distanza") ? inferRange(monster) || "60 ft." : null,
    target: "Una creatura",
    hit: `${damagePart.formula}${damagePart.type ? ` danni ${damagePart.type}` : ""}`,
    damage: damagePart.formula,
    damageType: damagePart.type,
    savingThrow: null,
    components: null,
    concentration: false,
    duration: "Istantanea",
    recharge: null,
    uses: null,
    description:
      "Opzione alternativa dell’attacco principale. Usa questa riga quando il Master sceglie la variante più adatta alla scena.",
  };
}

function buildSpecialAction(monster, combat) {
  const specialName = inferSpecialActionName(monster);

  if (!specialName) return null;

  const source = normalize([monster?.role, monster?.type, ...(monster?.tags || []), monster?.actions, specialName].join(" "));
  const specialDamage = inferSpecialDamage(monster, combat);
  const dc = getSaveDc(monster, combat);
  const ability = inferSavingAbility(monster);

  const isSpell = includesAny(source, [
    "incantatore",
    "mago",
    "strega",
    "lich",
    "fatato",
    "fata",
    "comando",
    "barriera",
    "oracolo",
    "patto",
  ]);

  return {
    name: specialName,
    type: isSpell ? "Incantesimo / capacità magica" : "Capacità speciale",
    actionCost: "Azione",
    attackBonus: null,
    reach: null,
    range: includesAny(source, ["soffio", "fiammata", "barriera"]) ? "Cono/area 15 ft." : "60 ft.",
    target: includesAny(source, ["soffio", "fiammata", "barriera", "ondata"]) ? "Creature nell’area" : "Una creatura",
    hit: null,
    damage: specialDamage.formula,
    damageType: specialDamage.type,
    savingThrow: {
      ability,
      dc,
      success: specialDamage.formula ? "Metà danni o nessun effetto secondario" : "Nessun effetto",
      failure: specialDamage.formula
        ? `Danni pieni (${specialDamage.formula} ${specialDamage.type}) ed effetto indicato`
        : "Subisce l’effetto indicato",
    },
    components: isSpell ? inferComponents(monster) || "V, S" : null,
    concentration:
      specialName.toLowerCase().includes("barriera") ||
      specialName.toLowerCase().includes("radici") ||
      specialName.toLowerCase().includes("velo"),
    duration:
      specialName.toLowerCase().includes("barriera") ||
      specialName.toLowerCase().includes("radici") ||
      specialName.toLowerCase().includes("velo")
        ? "1 minuto"
        : "1 round",
    recharge: includesAny(source, ["soffio", "fiammata", "ondata"]) ? "Ricarica 5-6" : null,
    uses: null,
    description:
      "Il bersaglio non viene colpito con tiro per colpire: i giocatori tirano il TS indicato. Applica il risultato in base a successo o fallimento.",
  };
}

function buildControlAction(monster, combat) {
  const source = normalize([monster?.role, monster?.type, ...(monster?.tags || []), monster?.actions].join(" "));

  if (!includesAny(source, ["controllo", "supporto", "boss", "incantatore", "fatato", "diavolo", "demone"])) {
    return null;
  }

  const dc = getSaveDc(monster, combat);
  const ability = source.includes("diavolo") || source.includes("patto") ? "car" : inferSavingAbility(monster);

  return {
    name: source.includes("diavolo") || source.includes("patto") ? "Patto vincolante" : "Presenza opprimente",
    type: source.includes("diavolo") || source.includes("patto") ? "Capacità sociale / magica" : "Capacità speciale",
    actionCost: "Azione o interazione narrativa",
    attackBonus: null,
    reach: null,
    range: "30 ft.",
    target: "Una creatura che può percepirlo",
    hit: null,
    damage: null,
    damageType: null,
    savingThrow: {
      ability,
      dc,
      success: "Il bersaglio resiste all’effetto",
      failure:
        "Il bersaglio subisce la pressione del mostro: svantaggio alla prossima prova sociale o condizione leggera a scelta del Master",
    },
    components: null,
    concentration: false,
    duration: "1 round o finché ha senso narrativo",
    recharge: null,
    uses: "1/turno se usata in combattimento",
    description:
      "Azione pensata per rendere giocabili mostri sociali, fatati, demoniaci o infernali anche fuori dal semplice danno.",
  };
}

export function buildPlayableMonsterActions(monster) {
  const combat = getMonsterCombatProfile(monster);
  const existing = Array.isArray(monster?.technicalActions)
    ? monster.technicalActions
    : null;

  if (existing && existing.length > 0) {
    return existing;
  }

  const actions = [
    buildBaseAttack(monster, combat),
    buildExtraDamageAttack(monster, combat, 1),
    buildSpecialAction(monster, combat),
    buildControlAction(monster, combat),
  ].filter(Boolean);

  return actions.slice(0, 4);
}

export function getMonsterPrimaryTechnicalAction(monster) {
  return buildPlayableMonsterActions(monster)[0] || null;
}

export function formatSavingThrow(action) {
  if (!action?.savingThrow) return "";

  const ability = String(action.savingThrow.ability || "").toUpperCase();
  return `TS ${ability} CD ${action.savingThrow.dc}`;
}

export function formatActionMeta(action) {
  const parts = [];

  if (action?.type) parts.push(action.type);
  if (action?.actionCost) parts.push(action.actionCost);
  if (action?.attackBonus !== null && action?.attackBonus !== undefined) {
    parts.push(`+${action.attackBonus} a colpire`);
  }
  if (action?.savingThrow) parts.push(formatSavingThrow(action));
  if (action?.range) parts.push(`Gittata ${action.range}`);
  if (action?.reach) parts.push(`Portata ${action.reach}`);
  if (action?.components) parts.push(`Componenti ${action.components}`);
  if (action?.concentration) parts.push("Concentrazione");
  if (action?.duration) parts.push(`Durata ${action.duration}`);
  if (action?.recharge) parts.push(action.recharge);

  return parts.filter(Boolean).join(" · ");
}
