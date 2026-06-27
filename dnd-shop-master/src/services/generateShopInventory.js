import { getPrestigeById, normalizePrestige } from "../data/prestige";
import { loadWeaponCatalog } from "../data/weapons/index.js";
import { biomeShields } from "../data/items/biomeShields.js";
import { biomePotions } from "../data/items/biomePotions.js";

const RARITIES = ["Comune", "Non Comune", "Rara", "Molto rara", "Leggendaria"];
const REGIONS = [
  "generic",
  "city",
  "coastal",
  "mountain",
  "forest",
  "desert",
  "rural",
  "frontier",
  "swamp",
  "arctic",
  "underdark",
  "ruins",
];

const regionAliases = {
  urban: "city",
  "grande città": "city",
  "grande cittÃ ": "city",
  porto: "coastal",
  "città di mare": "coastal",
  "cittÃ  di mare": "coastal",
  montagna: "mountain",
  foresta: "forest",
  deserto: "desert",
  rurale: "rural",
  frontiera: "frontier",
  palude: "swamp",
  artico: "arctic",
  sottosuolo: "underdark",
  rovine: "ruins",
};

const LEVEL_PROFILES = {
  low: {
    minItems: 8,
    maxItems: 12,
    rarityWeights: { Comune: 75, "Non Comune": 20, Rara: 5, "Molto rara": 0, Leggendaria: 0 },
    categoryRanges: { Armi: [1, 3], Armature: [1, 2], Pozioni: [1, 3], Oggetti: [2, 3], Varie: [2, 3] },
    priceMultiplier: 1,
  },
  mid: {
    minItems: 12,
    maxItems: 16,
    rarityWeights: { Comune: 45, "Non Comune": 35, Rara: 15, "Molto rara": 5, Leggendaria: 0 },
    categoryRanges: { Armi: [2, 4], Armature: [1, 3], Pozioni: [2, 4], Oggetti: [3, 4], Varie: [2, 4] },
    priceMultiplier: 1.15,
  },
  high: {
    minItems: 16,
    maxItems: 22,
    rarityWeights: { Comune: 20, "Non Comune": 35, Rara: 30, "Molto rara": 12, Leggendaria: 3 },
    categoryRanges: { Armi: [3, 5], Armature: [2, 4], Pozioni: [3, 5], Oggetti: [3, 5], Varie: [3, 5] },
    priceMultiplier: 1.35,
  },
  legendary: {
    minItems: 22,
    maxItems: 32,
    rarityWeights: { Comune: 8, "Non Comune": 22, Rara: 35, "Molto rara": 25, Leggendaria: 10 },
    categoryRanges: { Armi: [4, 7], Armature: [3, 5], Pozioni: [4, 7], Oggetti: [5, 8], Varie: [6, 10] },
    priceMultiplier: 1.75,
  },
};

const RARITY_PRICE_RANGES = {
  Comune: [1, 50],
  "Non Comune": [50, 500],
  Rara: [500, 5000],
  "Molto rara": [5000, 50000],
  Leggendaria: [50000, 120000],
};

const regionThemes = {
  generic: ["da viaggio", "del crocevia", "di gilda", "del mercato", "del viandante"],
  city: ["da vicolo", "del duellante", "di corte", "della gilda", "del notaio"],
  coastal: ["della risacca", "da molo", "del capitano", "salmastro", "delle profondità"],
  mountain: ["del valico", "della cima", "di roccia", "antivalanga", "della vetta"],
  forest: ["del sottobosco", "del cacciatore", "di radice", "mimetico", "delle fronde"],
  desert: ["della duna", "dell'oasi", "antisabbia", "della carovana", "del sole freddo"],
  rural: ["del villaggio", "del raccolto", "del granaio", "da campo", "del maniscalco"],
  frontier: ["della frontiera", "del pioniere", "da campo", "del guado", "della palizzata"],
  swamp: ["di palude", "del miasma", "di torba", "del canneto", "antiveleno"],
  arctic: ["della brina", "del nord", "del vento polare", "del ghiaccio", "del respiro bianco"],
  underdark: ["del sottosuolo", "di basalto", "luminescente", "da cunicolo", "della grotta"],
  ruins: ["delle rovine", "frammentario", "da scavo", "della colonna", "del sigillo antico"],
};

const categoryNouns = {
  Armi: {
    Comune: ["Pugnale", "Lancia", "Mazza", "Ascia corta", "Arco corto", "Balestra leggera", "Martello", "Sciabola", "Falcetto", "Randello ferrato", "Coltello pesante", "Giavellotto", "Spada corta", "Piccozza", "Arpione"],
    "Non Comune": ["Lama temprata", "Stocco bilanciato", "Martello runico minore", "Arco del guardavia", "Pugnale d'ombra tenue", "Scimitarra incisa", "Lancia da scorta", "Ascia del battipista", "Balestra a cremagliera", "Mazza benedetta", "Tridente rinforzato", "Falce lunata", "Spada da capitano", "Piccozza ferrata", "Coltello da duello"],
    Rara: ["Lama della Brina", "Tridente della Risacca", "Scimitarra della Duna", "Martello della Cima", "Pugnale del Rospo Nero", "Stocco del Duellante Mascherato", "Lancia del Vento Polare", "Arpione delle Profondità", "Arco delle Fronde Nere", "Ascia del Tuono Lontano", "Spada del Sigillo Rotto", "Balestra del Cacciatore Cremisi", "Mazza del Pellegrino Ferreo", "Piccozza del Valico", "Lama da Canneto"],
    "Molto rara": ["Sciabola del Vento Rosso", "Martello della Vetta Spezzata", "Arco della Luna Selvatica", "Tridente Abissale", "Lancia della Carovana Perduta", "Pugnale del Patto Silenzioso", "Ascia del Cuore di Pietra", "Spada del Fuoco Pallido", "Arpione del Faro Nero", "Lama del Gelo Mordente"],
    Leggendaria: ["Reliquia della Prima Lama", "Tridente del Re Naufrago", "Martello del Picco Eterno", "Scimitarra dell'Oasi Infinita", "Pugnale della Corona Ombrosa", "Arco del Bosco Antico", "Lancia dell'Aurora Gelata", "Spada del Portale Sepolto"],
  },
  Armature: {
    Comune: ["Pelle rinforzata", "Scudo di quercia", "Giaco imbottito", "Cotta semplice", "Elmo da guardia", "Bracciali di cuoio", "Corazza leggera", "Scudo tondo", "Gambeson", "Mantello spesso", "Stivali ferrati", "Pettorale grezzo"],
    "Non Comune": ["Cuoio borchiato fine", "Scudo temprato", "Giubba Cerata del Marinaio", "Maschera del Miasma", "Abito Corazzato", "Mantello della Vetta", "Cotta del sentiero", "Elmo del guardavia", "Bracciali del duellante", "Cuoio Cerato da Palude", "Mantello delle Sabbie Alte", "Pelliccia Runica del Nord"],
    Rara: ["Corazza del Capitano", "Corazza del Passo", "Giacca del Cortigiano Armato", "Maglia di Scaglie Salmastre", "Corazza del Sole Spezzato", "Pettorale delle Rovine", "Cotta del Bosco Cavo", "Scudo del Valico", "Armatura da caverna", "Corazza del Ghiaccio Antico", "Cuoio del Cacciatore Cremisi", "Scudo del Faro"],
    "Molto rara": ["Piastre del Patto Dorato", "Corazza della Tempesta Salmastra", "Armatura del Picco Nero", "Cuoio del Miasma Quieto", "Veste Corazzata dell'Arcicorte", "Scudo del Sole Spezzato", "Maglia della Grotta Stellata", "Corazza della Brina Profonda"],
    Leggendaria: ["Armatura del Sovrano Sepolto", "Corazza del Capitano Immortale", "Piastre della Montagna Viva", "Veste del Primo Duellante", "Scudo dell'Oasi Perduta", "Pelliccia del Nord Eterno"],
  },
  Pozioni: {
    Comune: ["Pozione di Guarigione", "Tonico Anti-Nausea", "Antitossina di Torba", "Elisir dell'Oasi", "Tonico del Respiro Alto", "Infuso Amaro di Palude", "Pozione del Sangue Caldo", "Repellente del Cacciatore di Zanzare", "Fiala di Erbe Dolci", "Decotto da Viaggio", "Tonico del Sangue Freddo", "Olio della Pelle di Foca", "Filtro d'Acqua Limpida", "Balsamo del Guado", "Fiala del Riposo Breve", "Sciroppo di Radici", "Gocce contro Vertigini", "Tisana del Cacciatore", "Unguento per Vesciche", "Fiala di Sale Vivo"],
    "Non Comune": ["Fiala di Respiro Marino", "Fiala del Sole Freddo", "Fiala della Roccia Salda", "Elisir della Lingua Sciolta", "Fiala del Miasma Verde", "Elisir del Respiro Bianco", "Pozione di Scalare", "Tonico della Mano Ferma", "Fiala dell'Occhio Notturno", "Essenza di Muschio Vivo", "Pozione del Passo Lungo", "Olio Antiruggine Alchemico", "Balsamo Spezzafebbre", "Fiala della Voce Chiara", "Decotto delle Vene Forti", "Pozione di Pelle Dura", "Elisir del Fiuto", "Acqua di Luna Opaca", "Fiala Ferma Sangue", "Tonico della Veglia"],
    Rara: ["Rum del Capitano Annegato", "Fiala dell'Invisibilità Breve", "Elisir contro Valanghe", "Fiala del Gelo Mordente", "Pozione del Cuore Ardente", "Elisir della Mente Lucida", "Pozione di Guarigione Suprema", "Essenza del Passo Fantasma", "Fiala dell'Ombra Liquida", "Pozione del Respiro Lungo", "Elisir del Ferro Vivo", "Tonico del Duello Perfetto", "Fiala dell'Anguilla", "Pozione della Vista Arcana", "Elisir del Canto Ipnotico", "Pozione della Pelle di Pietra", "Fiala del Sangue Rapido", "Distillato di Funghi Stellati", "Elisir del Nodo Spezzato", "Pozione della Mano Invisibile"],
    "Molto rara": ["Profumo Ipnotico", "Pozione di Invisibilità", "Pozione di Velocità", "Elisir dell'Aurora Gelata", "Fiala del Mare Profondo", "Distillato del Sole Nero", "Pozione di Guarigione Massima", "Elisir del Corpo Etereo", "Tonico del Titano Stanco", "Fiala dell'Ultimo Respiro", "Elisir della Memoria Rubata", "Pozione del Passo tra Ombre"],
    Leggendaria: ["Elisir della Fenice Pallida", "Sangue di Stella in Ampolla", "Distillato del Primo Drago", "Fiala del Tempo Sospeso", "Ambrosia della Corona Perduta", "Lacrima dell'Oceano Sepolto", "Elisir del Patto Immortale", "Pozione della Porta Senza Chiave"],
  },
  Oggetti: {
    Comune: ["Corda cerata", "Rete pieghevole", "Lanterna da molo", "Mappa incompleta", "Otre rinforzato", "Tenda leggera", "Gesso da dungeon", "Specchietto d'acciaio", "Campanelli d'allarme", "Kit da scavo", "Torcia resinosa", "Sacca impermeabile", "Fischietto d'osso", "Cera per sigilli", "Rampino pieghevole", "Sacchetto di sale"],
    "Non Comune": ["Rete Incantata", "Gesso luminoso", "Mantello mimetico", "Maschera contro miasmi", "Sigillo contraffatto", "Mappa nautica incompleta", "Bussola minerale", "Telo antisabbia", "Filtro per polveri", "Pergamena impermeabile", "Kit disinnesco rudimentale", "Fiala fosforescente", "Lente da perito", "Barca pieghevole semplice", "Zanzariera alchemica", "Borsa antitaglio"],
    Rara: ["Lanterna di Alga Luminosa", "Compasso delle Rovine", "Mantello Reversibile da Vicolo", "Guanti da Reperto", "Borsa del Contrabbandiere", "Amuleto contro le Valanghe", "Cristallo dell'Oasi", "Occhiali da Neve Incantati", "Pietra del Sole", "Corda Scura da Cunicolo", "Anello con comparto segreto", "Totem di Radice Viva", "Kit da Riparazione Vele", "Chiave antica incompleta", "Mappa dei valichi", "Barile impermeabile runico"],
    "Molto rara": ["Atlante del Faro Nero", "Bussola delle Gallerie Perdute", "Mantello delle Sabbie Alte", "Reliquiario della Colonna", "Specchio della Corte Segreta", "Braciere della Brina", "Sacca Termica Infinita", "Telo della Frontiera Eterna", "Occhio della Miniera Cava", "Lanterna del Sottosuolo Vivo", "Amuleto della Palude Quietata", "Scrigno del Capitano Muto"],
    Leggendaria: ["Mappa del Mondo Sotto il Mondo", "Ancora del Porto Fantasma", "Corona dei Mercanti Esiliati", "Compasso del Primo Viaggio", "Sigillo della Città Invisibile", "Reliquia del Pozzo Senza Fondo", "Tenda dell'Oasi Immortale", "Lanterna dell'Alba Sepolta"],
  },
  Varie: {
    Comune: ["Pane da viaggio", "Formaggio stagionato", "Pesce del Mare Tempestoso", "Erbe repellenti", "Razioni speziate", "Datteri conservati", "Funghi essiccati", "Sale minerale", "Miele selvatico", "Coperta pesante", "Ago e filo robusto", "Profumo economico", "Documenti vuoti", "Amo e filo cerato", "Pietra focaia", "Borraccia ampia"],
    "Non Comune": ["Erbe curative", "Spezie da carovana", "Unguento contro spine", "Kit da Falsario Minore", "Fiala anti-nausea", "Funghi luminescenti", "Pane salato del molo", "Radici amare di palude", "Coperta termica", "Contratto in bianco", "Polvere tracciante", "Inchiostro simpatico", "Datteri dell'oasi blu", "Sale della grotta", "Fiasca di rum speziato", "Amuleto druidico minore"],
    Rara: ["Libro degli Appunti del Mercante", "Razioni del Passo Impossibile", "Seta del Vicolo Nobile", "Tè della Brina", "Sale Nero di Porto", "Polvere di Basalto Vivo", "Funghi Stellati", "Incenso delle Rovine", "Vino della Corte Bassa", "Miele di Radice Antica", "Pelle di Foca Runica", "Pane del Viaggio Lungo", "Semi della Duna Fredda", "Tonico di Torba Secca", "Mandorle Lunari", "Carta della Gilda Segreta"],
    "Molto rara": ["Pergamena del Patto Nascosto", "Spezie del Sultano Senza Volto", "Vino del Capitano Perduto", "Radice del Bosco Primo", "Cristalli di Sale Eterno", "Funghi della Grotta Stellare", "Cera del Sigillo Reale", "Frammento di Meteorite Freddo", "Stoffa del Mantello Infinito", "Argilla della Tomba Viva", "Lacrime di Resina Antica", "Olio del Faro Spento"],
    Leggendaria: ["Contratto Firmato dal Destino", "Sale del Mare Primordiale", "Radice dell'Albero Antico", "Moneta della Prima Gilda", "Pane che Non Finisce", "Pergamena dell'Ultima Porta", "Incenso della Città Perduta", "Vino della Notte Eterna"],
  },
};

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function normalizeRegion(region = "generic") {
  const key = String(region || "generic").trim().toLowerCase();
  return REGIONS.includes(key) ? key : regionAliases[key] || "generic";
}

function getLevelBand(level) {
  const numericLevel = Number(level) || 1;
  if (numericLevel <= 4) return "low";
  if (numericLevel <= 10) return "mid";
  if (numericLevel <= 16) return "high";
  return "legendary";
}

function getRarityRank(rarity) {
  return RARITIES.indexOf(rarity);
}

function getDamageFor(category, rarity, name) {
  if (category !== "Armi") return "N/A";
  const rank = getRarityRank(rarity);
  const base = rank >= 3 ? "1d8" : rank >= 2 ? "1d6" : "1d4";
  const lower = name.toLowerCase();
  const damageType = lower.includes("martello") || lower.includes("mazza") ? "contundente" : lower.includes("lancia") || lower.includes("arpione") || lower.includes("pugnale") ? "perforante" : "tagliente";
  const bonus = rank >= 4 ? " + 2d6 forza" : rank >= 3 ? " + 1d6 energia" : rank >= 2 ? " + 1d4 energia" : "";
  return `${base} ${damageType}${bonus}`;
}

function getDamageType(category, name) {
  if (category !== "Armi") return null;
  const lower = name.toLowerCase();
  if (lower.includes("brina") || lower.includes("gelo") || lower.includes("polare")) return "freddo";
  if (lower.includes("fuoco") || lower.includes("sole")) return "fuoco";
  if (lower.includes("miasma") || lower.includes("veleno")) return "veleno";
  if (lower.includes("martello") || lower.includes("mazza")) return "contundente";
  if (lower.includes("lancia") || lower.includes("arpione") || lower.includes("pugnale")) return "perforante";
  return "tagliente";
}

/**
 * Calcola CA per armature in base a rarità e nome.
 */
function getArmorStats(rarity, name) {
  const rank = RARITIES.indexOf(rarity);
  const lower = (name || "").toLowerCase();
  let armorClass;
  if (rank >= 4) armorClass = 20;               // Leggendaria
  else if (rank >= 3) armorClass = 19;           // Molto rara
  else if (rank >= 2) armorClass = rank === 2 && (lower.includes("piastre") || lower.includes("scudo")) ? 18 : 17; // Rara
  else if (rank >= 1) armorClass = 16;           // Non comune
  else armorClass = 14;                           // Comune

  let armorType = "Media";
  if (rank >= 2 || lower.includes("pesante") || lower.includes("piastre") || lower.includes("maglia") || lower.includes("strisce") || lower.includes("anelli")) armorType = "Pesante";
  if (rank <= 0 && (lower.includes("leggera") || lower.includes("cuoio") || lower.includes("pelle"))) armorType = "Leggera";

  let penalty = null;
  if (armorType === "Pesante") penalty = "Svantaggio Furtività";
  else if (lower.includes("scuro") || lower.includes("pesante")) penalty = "Svantaggio Furtività";

  let specialEffect = null;
  if (lower.includes("scudo")) specialEffect = null; // gestito separatamente
  else if (rank >= 4) specialEffect = "Resistenza a danno non magico; vantaggio contro paura";
  else if (rank >= 3) specialEffect = "Resistenza a tagliente non magico";
  else if (rank >= 2) specialEffect = "Leggera protezione magica";
  else if (lower.includes("rinforzata") || lower.includes("temprato")) specialEffect = "Resistenza a contundente non magico";

  return { armorClass, armorType, penalty, specialEffect };
}

/**
 * Calcola bonus CA per scudi in base a rarità.
 */
function getShieldStats(rarity) {
  const rank = RARITIES.indexOf(rarity);
  const shieldBonus = rank >= 4 ? 6 : rank >= 3 ? 5 : rank >= 2 ? 4 : rank >= 1 ? 3 : 2;
  return { shieldBonus, armorClassBonus: shieldBonus };
}

/**
 * Genera bonus/penalità/resistenze per pozioni in base a rarità, nome e regione.
 */
function getPotionStats(rarity, name, region) {
  const lower = (name || "").toLowerCase();
  const rank = RARITIES.indexOf(rarity);
  const result = {
    effectType: rank >= 3 ? "potente" : rank >= 1 ? "moderato" : "minore",
    bonuses: [],
    penalties: [],
    duration: rank >= 3 ? "1 ora" : rank >= 1 ? "10 minuti" : "1 minuto",
    resistances: [],
    mechanicalEffect: "",
  };

  // Guarigione
  if (lower.includes("guarigione")) {
    result.effectType = "cura";
    result.mechanicalEffect = lower.includes("massima") ? "Recupera 10d4+20 PF" : lower.includes("suprema") ? "Recupera 8d4+8 PF" : lower.includes("superiore") ? "Recupera 4d4+4 PF" : "Recupera 2d4+2 PF";
    return result;
  }

  // Pozioni tematiche per regione
  if (region === "swamp" || lower.includes("palude") || lower.includes("miasma") || lower.includes("torba")) {
    result.resistances = ["necrotico", "veleno"];
    result.penalties = ["-1 DES"];
    result.duration = "1 ora";
    result.mechanicalEffect = "Resistenza a veleno e necrotico per 1 ora";
    return result;
  }
  if (region === "arctic" || lower.includes("brina") || lower.includes("gelo") || lower.includes("nord") || lower.includes("polare") || lower.includes("ghiaccio")) {
    result.resistances = ["freddo"];
    result.duration = "1 ora";
    result.mechanicalEffect = "Resistenza al freddo per 1 ora";
    return result;
  }
  if (region === "coastal" || lower.includes("mare") || lower.includes("marino") || lower.includes("capitano") || lower.includes("profondità")) {
    result.bonuses = ["Respirare sott'acqua"];
    result.duration = "1 ora";
    result.mechanicalEffect = "Respirazione subacquea per 1 ora";
    return result;
  }
  if (region === "desert" || lower.includes("desert") || lower.includes("duna") || lower.includes("oasi") || lower.includes("sabbia") || lower.includes("sole")) {
    result.resistances = ["fuoco"];
    result.duration = "1 ora";
    result.mechanicalEffect = "Resistenza al fuoco per 1 ora";
    return result;
  }
  if (region === "forest" || lower.includes("foresta") || lower.includes("bosco") || lower.includes("sottobosco") || lower.includes("fronde")) {
    result.bonuses = ["Vantaggio a Furtività"];
    result.duration = "10 minuti";
    result.mechanicalEffect = "Vantaggio a Furtività per 10 minuti";
    return result;
  }
  if (region === "underdark" || lower.includes("sottosuolo") || lower.includes("grotta") || lower.includes("basalto") || lower.includes("cunicolo")) {
    result.resistances = ["veleno", "acido"];
    result.bonuses = ["Scurovisione 18 m"];
    result.duration = "1 ora";
    result.mechanicalEffect = "Scurovisione 18 m e resistenza a veleno per 1 ora";
    return result;
  }
  if (region === "ruins" || lower.includes("rovine") || lower.includes("scavo") || lower.includes("sigillo") || lower.includes("colonna")) {
    result.bonuses = ["+2 ai tiri salvezza contro magia"];
    result.duration = "10 minuti";
    result.mechanicalEffect = "+2 ai tiri salvezza contro effetti magici per 10 minuti";
    return result;
  }
  if (region === "frontier" || lower.includes("frontiera") || lower.includes("pioniere") || lower.includes("guado") || lower.includes("campo")) {
    result.bonuses = ["+1 ai tiri salvezza"];
    result.penalties = ["-1 SAG"];
    result.duration = "1 ora";
    result.mechanicalEffect = "+1 ai tiri salvezza, -1 Saggezza per 1 ora";
    return result;
  }

  if (lower.includes("scalare") || lower.includes("ragno")) {
    result.bonuses = ["Velocità di scalata 9 m"];
    result.duration = "1 ora";
    result.mechanicalEffect = "Velocità di scalata 9 m per 1 ora";
    return result;
  }
  if (lower.includes("invisibilità") || lower.includes("invisibile") || lower.includes("ombra")) {
    result.duration = "1 minuto";
    result.mechanicalEffect = "Invisibilità per 1 minuto o fino a attacco/lancio incantesimo";
    return result;
  }
  if (lower.includes("velocità") || lower.includes("veloce")) {
    result.bonuses = ["+2 CA", "+2 azione", "Velocità raddoppiata"];
    result.penalties = ["Stanchezza dopo la durata"];
    result.duration = "1 minuto";
    result.mechanicalEffect = "+2 CA, azione extra, velocità ×2 per 1 minuto";
    return result;
  }
  if (lower.includes("forza") || lower.includes("gigante") || lower.includes("titano")) {
    const strBonus = rank >= 3 ? "FOR 25" : rank >= 2 ? "FOR 23" : "FOR 21";
    result.bonuses = [`Forza ${strBonus}`];
    result.duration = "1 ora";
    result.mechanicalEffect = `Forza ${strBonus} per 1 ora`;
    return result;
  }
  if (lower.includes("volare") || lower.includes("volo")) {
    result.duration = "10 minuti";
    result.mechanicalEffect = "Volo per 10 minuti";
    return result;
  }
  if (lower.includes("resistenza") || lower.includes("resistente")) {
    result.resistances = ["fuoco"]; // default
    result.duration = "1 ora";
    result.mechanicalEffect = "Resistenza a un tipo di danno per 1 ora";
    return result;
  }
  if (lower.includes("fuoco") || lower.includes("fiamma") || lower.includes("ardente") || lower.includes("brace")) {
    result.resistances = ["fuoco"];
    result.bonuses = ["+1 danni da fuoco in mischia"];
    result.duration = "1 ora";
    result.mechanicalEffect = "Resistenza al fuoco, +1 danni da fuoco in mischia per 1 ora";
    return result;
  }
  if (lower.includes("ira") || lower.includes("rabbia") || lower.includes("furia")) {
    result.bonuses = ["+5 a colpire", "+2 danni"];
    result.penalties = ["-3 INT"];
    result.duration = "10 minuti";
    result.mechanicalEffect = "+5 a colpire, +2 danni, -3 INT per 10 minuti";
    return result;
  }
  if (lower.includes("pelle") || lower.includes("pietra") || lower.includes("scaglia")) {
    result.bonuses = ["+2 CA"];
    result.resistances = ["contundente"];
    result.penalties = ["Velocità -3 m"];
    result.duration = "10 minuti";
    result.mechanicalEffect = "+2 CA, resistenza contundente, velocità -3 m per 10 minuti";
    return result;
  }
  if (lower.includes("nebbia") || lower.includes("fumo") || lower.includes("vapore")) {
    result.bonuses = ["Vantaggio a Furtività"];
    result.penalties = ["-2 Percezione"];
    result.duration = "1 ora";
    result.mechanicalEffect = "Vantaggio a Furtività, -2 Percezione per 1 ora";
    return result;
  }

  // Fallback basato su rarità
  if (rank >= 4) {
    result.bonuses = ["+2 a tutti i tiri salvezza"];
    result.duration = "1 ora";
    result.mechanicalEffect = "+2 a tutti i tiri salvezza per 1 ora";
  } else if (rank >= 3) {
    result.bonuses = ["+1 a tutti i tiri salvezza"];
    result.duration = "1 ora";
    result.mechanicalEffect = "+1 a tutti i tiri salvezza per 1 ora";
  } else if (rank >= 2) {
    result.bonuses = ["+1 ai tiri salvezza contro magia"];
    result.duration = "10 minuti";
    result.mechanicalEffect = "+1 ai tiri salvezza contro effetti magici per 10 minuti";
  } else if (rank >= 1) {
    result.bonuses = ["Recupera 1 PF extra"];
    result.duration = "Istante";
    result.mechanicalEffect = "Concede un piccolo beneficio alchemico";
  } else {
    result.bonuses = [];
    result.duration = "Istante";
    result.mechanicalEffect = "Non produce effetti meccanici significativi";
  }

  return result;
}

function makeEffect(category, rarity, region, name) {
  const regionText = regionThemes[region]?.[0] || "da viaggio";
  if (category === "Pozioni") {
    const stats = getPotionStats(rarity, name, region);
    if (stats.mechanicalEffect) return stats.mechanicalEffect;
    if (name.toLowerCase().includes("guarigione")) return "Ripristina PF in base alla potenza della pozione.";
    if (region === "arctic") return "Resistenza al freddo o mobilità su ghiaccio per una scena.";
    if (region === "coastal") return "Aiuta contro mare, nausea, apnea o fatica da navigazione.";
    if (region === "swamp") return "Aiuta contro veleno, malattia, insetti o miasmi.";
    return `Concede un beneficio alchemico ${regionText} per una scena.`;
  }
  if (category === "Armature") {
    const stats = getArmorStats(rarity, name);
    return `CA ${stats.armorClass} · ${stats.armorType}${stats.penalty ? " · " + stats.penalty : ""}${stats.specialEffect ? " · " + stats.specialEffect : ""}`;
  }
  if (category === "Armi") return `Arma ${regionText}; le versioni rare aggiungono pressione tattica o danno extra.`;
  if (category === "Oggetti") return `Strumento ${regionText} utile in esplorazione, negoziazione o sopravvivenza.`;
  return `Risorsa ${regionText} utile durante viaggi, riposi o scene sociali.`;
}

function makeCatalogItem(category, rarity, name, region, index) {
  const cleanRegion = normalizeRegion(region);
  const id = `${category}-${rarity}-${cleanRegion}-${index}-${name}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  const damage = getDamageFor(category, rarity, name);

  // Campi meccanici per armature, scudi e pozioni
  const armorStats = category === "Armature" ? getArmorStats(rarity, name) : {};
  const shieldStats = category === "Armature" && (name.toLowerCase().includes("scudo")) ? getShieldStats(rarity) : {};
  const potionStats = category === "Pozioni" ? getPotionStats(rarity, name, cleanRegion) : {};

  // Se è uno scudo, separa dai campi armatura generici
  const isShield = category === "Armature" && (name.toLowerCase().includes("scudo"));

  return {
    id,
    name,
    category,
    rarity,
    priceBase: randomNumber(...RARITY_PRICE_RANGES[rarity]),
    description: `${name} è un articolo ${rarity.toLowerCase()} pensato per avventure ${regionThemes[cleanRegion]?.[0] || "da viaggio"}.`,
    effect: makeEffect(category, rarity, cleanRegion, name),
    damage,
    damageType: getDamageType(category, name),
    tags: [category.toLowerCase(), rarity.toLowerCase(), cleanRegion],
    regions: cleanRegion === "generic" ? ["generic"] : [cleanRegion, "generic"],
    // Campi meccanici armature
    armorClass: isShield ? undefined : armorStats.armorClass || undefined,
    armorType: isShield ? undefined : armorStats.armorType || undefined,
    penalty: isShield ? undefined : armorStats.penalty || undefined,
    specialEffect: isShield ? undefined : armorStats.specialEffect || undefined,
    // Campi meccanici scudi
    shieldBonus: isShield ? shieldStats.shieldBonus || undefined : undefined,
    armorClassBonus: isShield ? shieldStats.armorClassBonus || undefined : undefined,
    // Campi meccanici pozioni
    effectType: potionStats.effectType || undefined,
    bonuses: potionStats.bonuses && potionStats.bonuses.length ? potionStats.bonuses : undefined,
    penalties: potionStats.penalties && potionStats.penalties.length ? potionStats.penalties : undefined,
    duration: potionStats.duration || undefined,
    resistances: potionStats.resistances && potionStats.resistances.length ? potionStats.resistances : undefined,
    mechanicalEffect: potionStats.mechanicalEffect || undefined,
  };
}


function parsePriceBase(price) {
  const match = String(price || "").match(/(\d+)/);
  return match ? Number(match[1]) : undefined;
}

function normalizeExternalCatalogItem(item) {
  const region = normalizeRegion(item.biome || item.region || "generic");
  const regions = Array.isArray(item.regions) && item.regions.length
    ? item.regions.map(normalizeRegion)
    : region === "generic"
      ? ["generic"]
      : [region, "generic"];

  return {
    ...item,
    rarity: item.rarity === "Molto Rara" ? "Molto rara" : item.rarity,
    priceBase: item.priceBase || parsePriceBase(item.price),
    effect: item.effect || item.mechanicalEffect || item.specialEffect || "Nessun effetto speciale.",
    details: item.details || item.mechanicalEffect,
    tags: item.tags || [item.category?.toLowerCase(), item.type?.toLowerCase(), region].filter(Boolean),
    regions: [...new Set(regions)],
  };
}

function buildCatalog() {
  const catalog = [];

  Object.entries(categoryNouns).forEach(([category, rarityGroups]) => {
    Object.entries(rarityGroups).forEach(([rarity, names]) => {
      names.forEach((name, index) => {
        catalog.push(makeCatalogItem(category, rarity, name, "generic", index));
      });
    });
  });

  REGIONS.filter((region) => region !== "generic").forEach((region) => {
    const themes = regionThemes[region] || [];
    ["Armi", "Armature", "Pozioni", "Oggetti", "Varie"].forEach((category) => {
      RARITIES.forEach((rarity, rarityIndex) => {
        const count = rarityIndex >= 3 ? 2 : 3;
        for (let index = 0; index < count; index += 1) {
          const baseName = categoryNouns[category][rarity][(index + rarityIndex) % categoryNouns[category][rarity].length];
          const theme = themes[(index + rarityIndex) % themes.length];
          catalog.push(makeCatalogItem(category, rarity, `${baseName} ${theme}`, region, index));
        }
      });
    });
  });

  return catalog;
}

const BASE_ITEM_CATALOG = [
  ...buildCatalog(),
  ...[...biomeShields, ...biomePotions].map(normalizeExternalCatalogItem),
];

function cloneProfile(profile) {
  return {
    minItems: profile.minItems,
    maxItems: profile.maxItems,
    rarityWeights: { ...profile.rarityWeights },
    categoryRanges: Object.fromEntries(
      Object.entries(profile.categoryRanges).map(([category, range]) => [category, [...range]])
    ),
    priceMultiplier: profile.priceMultiplier,
  };
}

function getMerchantTone(reputation = "", wealth = "") {
  const text = `${reputation || ""} ${wealth || ""}`.toLowerCase();
  if (text.includes("leggend")) return "legendary";
  if (text.includes("ricco") || text.includes("ben forn")) return "rich";
  if (text.includes("affid") || text.includes("buon")) return "good";
  if (text.includes("povero") || text.includes("scars")) return "poor";
  return "normal";
}

function applyInventoryPrestige(profile, prestige) {
  const normalized = normalizePrestige(prestige);
  const rule = getPrestigeById(normalized);
  profile.prestige = normalized;

  profile.minItems = Math.max(5, Math.round(profile.minItems * rule.itemCountMultiplier));
  profile.maxItems = Math.max(profile.minItems, Math.round(profile.maxItems * rule.itemCountMultiplier));
  profile.priceMultiplier *= rule.priceMultiplier;

  if (normalized === "mediocre") {
    profile.rarityWeights.Comune += 22;
    profile.rarityWeights["Non Comune"] += 6;
    profile.rarityWeights.Rara = Math.max(0, profile.rarityWeights.Rara - 10);
    profile.rarityWeights["Molto rara"] = Math.max(0, profile.rarityWeights["Molto rara"] - 8);
    profile.rarityWeights.Leggendaria = Math.max(0, profile.rarityWeights.Leggendaria - 8);
  }

  if (normalized === "lussuosa") {
    profile.rarityWeights.Comune = Math.max(4, profile.rarityWeights.Comune - 20);
    profile.rarityWeights.Rara += 12;
    profile.rarityWeights["Molto rara"] += 8;
    profile.rarityWeights.Leggendaria += 4;
    Object.keys(profile.categoryRanges).forEach((category) => {
      profile.categoryRanges[category] = [
        profile.categoryRanges[category][0] + 1,
        profile.categoryRanges[category][1] + 1,
      ];
    });
  }

  return profile;
}

function getInventoryProfile(level, reputation, wealth, prestige = "buona") {
  const profile = cloneProfile(LEVEL_PROFILES[getLevelBand(level)]);
  const tone = getMerchantTone(reputation, wealth);

  if (tone === "poor") {
    profile.maxItems = Math.max(profile.minItems, profile.maxItems - 3);
    profile.priceMultiplier *= 0.82;
    profile.rarityWeights.Comune += 18;
    profile.rarityWeights.Rara = Math.max(0, profile.rarityWeights.Rara - 8);
    profile.rarityWeights["Molto rara"] = Math.max(0, profile.rarityWeights["Molto rara"] - 8);
    profile.rarityWeights.Leggendaria = 0;
  }

  if (tone === "good" || tone === "rich" || tone === "legendary") {
    const boost = tone === "legendary" ? 8 : tone === "rich" ? 4 : 2;
    profile.minItems += tone === "legendary" ? 4 : 1;
    profile.maxItems += tone === "legendary" ? 6 : 2;
    profile.priceMultiplier *= tone === "legendary" ? 1.55 : tone === "rich" ? 1.25 : 1.1;
    profile.rarityWeights.Comune = Math.max(4, profile.rarityWeights.Comune - boost * 2);
    profile.rarityWeights.Rara += boost;
    profile.rarityWeights["Molto rara"] += Math.round(boost * 0.75);
    profile.rarityWeights.Leggendaria += tone === "legendary" ? 10 : 1;
  }

  return applyInventoryPrestige(profile, prestige);
}

function weightedPick(candidates, profile, usedIds) {
  const weighted = candidates.flatMap((item) => {
    if (usedIds.has(item.id)) return [];
    const weight = profile.rarityWeights[item.rarity] || 1;
    return Array.from({ length: Math.max(1, Math.round(weight / 5)) }, () => item);
  });

  if (!weighted.length) return null;
  return weighted[randomNumber(0, weighted.length - 1)];
}

function splitSources(catalog, region, category) {
  const activeRegion = normalizeRegion(region);
  const categoryItems = catalog.filter((item) => item.category === category);
  return {
    regional: categoryItems.filter((item) => item.regions.includes(activeRegion)),
    generic: categoryItems.filter((item) => item.regions.includes("generic")),
    exotic: categoryItems.filter((item) => !item.regions.includes(activeRegion) && !item.regions.includes("generic")),
  };
}

function pickFromSources(catalog, region, category, count, profile, usedIds) {
  const sources = splitSources(catalog, region, category);
  const sourcePlan = [
    ["regional", Math.round(count * 0.65)],
    ["generic", Math.round(count * 0.25)],
    ["exotic", Math.max(0, count - Math.round(count * 0.65) - Math.round(count * 0.25))],
  ];
  const picked = [];

  sourcePlan.forEach(([sourceName, amount]) => {
    for (let index = 0; index < amount; index += 1) {
      const item = weightedPick(sources[sourceName], profile, usedIds);
      if (!item) break;
      usedIds.add(item.id);
      picked.push(item);
    }
  });

  while (picked.length < count) {
    const item = weightedPick([...sources.regional, ...sources.generic, ...sources.exotic], profile, usedIds);
    if (!item) break;
    usedIds.add(item.id);
    picked.push(item);
  }

  return picked;
}

function buildCategoryTargets(profile) {
  const targets = Object.fromEntries(
    Object.entries(profile.categoryRanges).map(([category, [min, max]]) => [
      category,
      randomNumber(min, max),
    ])
  );
  let total = Object.values(targets).reduce((sum, count) => sum + count, 0);

  while (total < profile.minItems) {
    const category = ["Oggetti", "Varie", "Pozioni", "Armi"][total % 4];
    targets[category] += 1;
    total += 1;
  }

  while (total > profile.maxItems) {
    const reducible = ["Varie", "Oggetti", "Pozioni", "Armi", "Armature"].find((category) => {
      const [min] = profile.categoryRanges[category];
      return targets[category] > min;
    });
    if (!reducible) break;
    targets[reducible] -= 1;
    total -= 1;
  }

  return targets;
}


function ensureCoreCategoryMinimums(items, catalog, region, profile, usedIds) {
  const activeRegion = normalizeRegion(region);
  const minimums = { Armature: 10, Pozioni: 10 };

  Object.entries(minimums).forEach(([category, minimum]) => {
    while (items.filter((item) => item.category === category).length < minimum) {
      const sources = splitSources(catalog, activeRegion, category);
      const picked =
        weightedPick(sources.regional, profile, usedIds) ||
        weightedPick(sources.generic, profile, usedIds) ||
        weightedPick(sources.exotic, profile, usedIds) ||
        weightedPick(catalog.filter((item) => item.category === category), profile, usedIds);

      if (!picked) break;

      usedIds.add(picked.id);
      items.push(picked);
    }
  });

  return items;
}

function createPrice(item, profile) {
  const [min, max] = RARITY_PRICE_RANGES[item.rarity];
  const base = item.source === "weapon-database" || item.sourceId
    ? Math.max(min, Number(item.priceBase) || min)
    : Math.max(item.priceBase || min, randomNumber(min, max));
  const value = Math.round(base * profile.priceMultiplier);

  if (item.rarity === "Leggendaria") {
    const suffixes = ["trattativa", "favore", "patto", "reliquia non venduta"];
    return `${Math.max(50000, Math.round(value / 500) * 500)} mo o ${suffixes[randomNumber(0, suffixes.length - 1)]}`;
  }

  return `${Math.max(1, Math.round(value))} mo`;
}

function getQuantity(item, levelBand) {
  if (item.rarity === "Leggendaria" || item.rarity === "Molto rara") return 1;
  if (item.category === "Pozioni") return levelBand === "legendary" ? randomNumber(1, 4) : randomNumber(1, 3);
  if (["Oggetti", "Varie"].includes(item.category) && item.rarity === "Comune") return randomNumber(2, 8);
  return item.rarity === "Comune" ? randomNumber(1, 4) : 1;
}

function toInventoryItem(item, index, profile, levelBand) {
  const quantity = getQuantity(item, levelBand);
  const prestigeNote =
    profile.prestige === "mediocre"
      ? " Presenta segni d'uso, ma resta funzionale o interessante per chi cerca occasioni."
      : profile.prestige === "lussuosa"
        ? " Finiture curate, custodia migliore e provenienza controllata ne giustificano il prezzo."
        : "";
  return {
    id: `${Date.now()}-${index}-${Math.random().toString(16).slice(2)}`,
    sourceId: item.id,
    name: item.name,
    category: item.category,
    rarity: item.rarity,
    price: createPrice(item, profile),
    priceBase: item.priceBase,
    qty: quantity,
    quantity,
    description: `${item.description}${prestigeNote}`,
    effect: item.effect || "Nessun effetto speciale.",
    damage: item.damage || "N/A",
    damageType: item.damageType,
    details: item.details,
    properties: item.properties || [],
    minLevel: item.minLevel || 1,
    maxLevel: item.maxLevel || 20,
    biome: item.biome,
    notes: "",
    tags: item.tags || [],
    regions: item.regions || ["generic"],
    // Campi meccanici (pass-through sicuro)
    armorClass: item.armorClass,
    armorType: item.armorType,
    penalty: item.penalty,
    specialEffect: item.specialEffect,
    shieldBonus: item.shieldBonus,
    armorClassBonus: item.armorClassBonus,
    effectType: item.effectType,
    bonuses: item.bonuses,
    penalties: item.penalties,
    duration: item.duration,
    resistances: item.resistances,
    mechanicalEffect: item.mechanicalEffect,
  };
}

function replaceWeakItem(items, replacement, category = null) {
  const index = items.findIndex((item) => {
    const matchesCategory = category ? item.category === category : true;
    return matchesCategory && getRarityRank(item.rarity) <= 1;
  });

  if (index >= 0) {
    items[index] = replacement;
    return;
  }

  items.push(replacement);
}

function ensureLegendaryInventory(items, catalog, context, profile, usedIds) {
  const region = normalizeRegion(context.region);
  const level = Number(context.level) || 1;
  const tone = getMerchantTone(context.reputation, context.wealth);
  if (level < 17 || tone !== "legendary") return items;

  const requirements = [
    { category: "Armi", minRank: 3, count: 1 },
    { category: "Armature", minRank: 2, count: 1 },
    { category: "Pozioni", minRank: 2, count: 3 },
  ];

  requirements.forEach(({ category, minRank, count }) => {
    const current = items.filter((item) => item.category === category && getRarityRank(item.rarity) >= minRank).length;
    for (let index = current; index < count; index += 1) {
      const candidates = catalog.filter((item) => item.category === category && getRarityRank(item.rarity) >= minRank);
      const picked = weightedPick(candidates.filter((item) => item.regions.includes(region)), profile, usedIds) || weightedPick(candidates, profile, usedIds);
      if (!picked) continue;
      usedIds.add(picked.id);
      replaceWeakItem(items, picked, category);
    }
  });

  const minimums = { Armi: 4, Armature: 3, Pozioni: 4, Oggetti: 5, Varie: 6 };
  Object.entries(minimums).forEach(([category, count]) => {
    while (items.filter((item) => item.category === category).length < count) {
      const picked = weightedPick(catalog.filter((item) => item.category === category), profile, usedIds);
      if (!picked) break;
      usedIds.add(picked.id);
      items.push(picked);
    }
  });

  return items;
}

export async function generateMerchantInventory({
  level = 1,
  region = "generic",
  reputation = "Sconosciuto",
  wealth = "Comune",
  merchantType = "generic",
  prestige = "buona",
} = {}) {
  const weaponCatalog = await loadWeaponCatalog();
  const itemCatalog = [...BASE_ITEM_CATALOG, ...weaponCatalog];
  const normalizedRegion = normalizeRegion(region);
  const levelBand = getLevelBand(level);
  const profile = getInventoryProfile(level, reputation, wealth, prestige);
  const targets = buildCategoryTargets(profile);
  const usedIds = new Set();
  let pickedItems = [];

  Object.entries(targets).forEach(([category, count]) => {
    pickedItems.push(
      ...pickFromSources(itemCatalog, normalizedRegion, category, count, profile, usedIds)
    );
  });

  pickedItems = ensureLegendaryInventory(
    pickedItems,
    itemCatalog,
    { level, region: normalizedRegion, reputation, wealth, merchantType },
    profile,
    usedIds
  );

  pickedItems = ensureCoreCategoryMinimums(
    pickedItems,
    itemCatalog,
    normalizedRegion,
    profile,
    usedIds
  );

  const minTotal = levelBand === "legendary" ? 22 : profile.minItems;
  while (pickedItems.length < minTotal) {
    const item = weightedPick(itemCatalog, profile, usedIds);
    if (!item) break;
    usedIds.add(item.id);
    pickedItems.push(item);
  }

  return shuffle(pickedItems).map((item, index) =>
    toInventoryItem(item, index, profile, levelBand)
  );
}

export async function generateShopInventory(level = 1, region = "generic", merchantContext = {}) {
  return generateMerchantInventory({
    level,
    region,
    reputation: merchantContext.reputation,
    wealth: merchantContext.wealth || merchantContext.shopTier,
    merchantType: merchantContext.merchantType || "shop",
    prestige: merchantContext.prestige,
  });
}

export function getInventoryCatalogSummary() {
  return BASE_ITEM_CATALOG.reduce((summary, item) => {
    summary[item.category] ||= {};
    summary[item.category][item.rarity] = (summary[item.category][item.rarity] || 0) + 1;
    return summary;
  }, {});
}
