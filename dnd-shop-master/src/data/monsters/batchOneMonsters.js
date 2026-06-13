const BIOMES = [
  "forest",
  "swamp",
  "mountain",
  "desert",
  "arctic",
  "coastal",
  "aquatic",
  "grassland",
  "hill",
  "underdark",
  "urban",
  "ruins",
  "planar",
];

const CR_POOL = [
  ...Array(8).fill("0"),
  ...Array(10).fill("1/8"),
  ...Array(15).fill("1/4"),
  ...Array(15).fill("1/2"),
  ...Array(18).fill("1"),
  ...Array(16).fill("2"),
  ...Array(14).fill("3"),
  ...Array(10).fill("4"),
  ...Array(8).fill("5"),
  ...Array(2).fill("6"),
  ...Array(2).fill("7"),
  ...Array(2).fill("8"),
];

const TYPE_DETAILS = {
  Bestia: {
    icon: "🐾",
    roles: ["Predatore", "Bruto", "Assalitore", "Guardiano"],
    resistances: "Istinto di branco",
    vulnerabilities: "Fuoco, rumori forti, trappole ben piazzate",
    abilities: { str: 12, dex: 14, con: 12, int: 3, wis: 12, cha: 6 },
    damageType: "perforanti o taglienti",
  },
  Sciame: {
    icon: "🕸️",
    roles: ["Sciame", "Controllo", "Logoramento"],
    resistances: "Contundente, perforante, tagliente non magico",
    vulnerabilities: "Fuoco, vento forte, danni ad area",
    abilities: { str: 4, dex: 15, con: 11, int: 2, wis: 10, cha: 4 },
    damageType: "perforanti",
  },
  Umanoide: {
    icon: "⚔️",
    roles: ["Assalitore", "Artigliere", "Supporto", "Bruto", "Controllo"],
    resistances: "Nessuna",
    vulnerabilities: "Paura, disordine, catena di comando spezzata",
    abilities: { str: 11, dex: 12, con: 11, int: 10, wis: 10, cha: 9 },
    damageType: "taglienti o perforanti",
  },
  "Non morto": {
    icon: "💀",
    roles: ["Guardiano", "Assalitore", "Controllo", "Bruto"],
    resistances: "Necrotico, veleno",
    vulnerabilities: "Radiante, simboli sacri, fuoco consacrato",
    abilities: { str: 12, dex: 10, con: 14, int: 7, wis: 10, cha: 8 },
    damageType: "necrotici o taglienti",
  },
  "Mostruosità": {
    icon: "🦂",
    roles: ["Predatore", "Bruto", "Assalitore", "Controllo"],
    resistances: "Paura, terreno difficile naturale",
    vulnerabilities: "Fuoco, esche, spazi stretti",
    abilities: { str: 15, dex: 12, con: 14, int: 5, wis: 11, cha: 7 },
    damageType: "taglienti o perforanti",
  },
  Melma: {
    icon: "🫧",
    roles: ["Controllo", "Corrosione", "Guardiano"],
    resistances: "Acido, veleno, affaticamento",
    vulnerabilities: "Freddo, fuoco intenso, contenitori sigillati",
    abilities: { str: 12, dex: 6, con: 15, int: 1, wis: 8, cha: 2 },
    damageType: "acido",
  },
  Pianta: {
    icon: "🌿",
    roles: ["Controllo", "Guardiano", "Bruto"],
    resistances: "Veleno, paura, affaticamento",
    vulnerabilities: "Fuoco, gelo improvviso, lame da potatura",
    abilities: { str: 13, dex: 8, con: 14, int: 3, wis: 11, cha: 6 },
    damageType: "contundenti o perforanti",
  },
  Costrutto: {
    icon: "🛡️",
    roles: ["Guardiano", "Bruto", "Controllo"],
    resistances: "Veleno, psichico, armi non magiche leggere",
    vulnerabilities: "Tuono, fulmine, comandi di arresto incisi",
    abilities: { str: 15, dex: 8, con: 15, int: 3, wis: 10, cha: 3 },
    damageType: "contundenti",
  },
};

const NAMES_BY_TYPE = {
  Bestia: [
    "Volpe delle Radici Vuote",
    "Corvo Beccolama",
    "Talpa delle Cripte Umide",
    "Lepre del Gelo Sporco",
    "Cane Nero da Carovana",
    "Serpente delle Erbe Secche",
    "Gatto di Vicolo Spettrale",
    "Pesce Ago delle Pozze",
    "Rana Velenosa del Pantano",
    "Lucertola delle Pietre Calde",
    "Lupo di Rugiada Scura",
    "Capra del Crepaccio",
    "Foca dai Denti Rossi",
    "Avvoltoio del Sale",
    "Cinghiale del Fango Nero",
    "Pipistrello Lanoso Gigante",
    "Trota Corazzata Gigante",
    "Iena del Vento Basso",
    "Aquila delle Guglie Rotte",
    "Orso delle Felci Grigie",
    "Squalo di Scogliera Cieco",
    "Pantera del Sottobosco Muto",
    "Rinoceronte delle Steppe Brune",
    "Alce della Neve Ferrosa",
    "Varano delle Rovine Calde",
  ],
  Sciame: [
    "Sciame di Mosche Sepolcrali",
    "Sciame di Formiche di Cenere",
    "Sciame di Ragni della Corda",
    "Sciame di Anguille Sottopelle",
    "Sciame di Api del Vetro",
    "Sciame di Granchi da Relitto",
    "Sciame di Scarabei del Sale",
    "Sciame di Topi delle Mura",
    "Sciame di Falene delle Lanterne",
    "Sciame di Sanguisughe Bianche",
    "Sciame di Serpi d'Erba",
    "Sciame di Millepiedi della Fossa",
    "Sciame di Larve dei Sigilli",
    "Sciame di Corvi da Forca",
    "Sciame di Pesci Spillo",
  ],
  Umanoide: [
    "Bracconiere dei Sentieri Morti",
    "Lanciere della Baracca Rossa",
    "Pescatore Predone della Risacca",
    "Tagliaborse del Ponte Basso",
    "Cavatore Impazzito",
    "Nomade del Pozzo Rubato",
    "Arciere delle Erbe Alte",
    "Guardia del Cancello Marcio",
    "Sciamano delle Ossa Minute",
    "Cultista della Lanterna Spenta",
    "Predone delle Colline Grigie",
    "Duellante della Taverna Chiusa",
    "Sergente dei Disertori",
    "Cacciatore di Taglie Senza Sigillo",
    "Fabbro Spezzacatene",
    "Banditore di Maledizioni",
    "Capobanda del Vicolo Freddo",
    "Predone delle Miniere Basse",
    "Alfiere della Bandiera Bruciata",
    "Incantatore del Sale Nero",
  ],
  "Non morto": [
    "Ombra del Fienile Vuoto",
    "Cadavere del Guado",
    "Scheletro del Fosso Vecchio",
    "Mano Strisciante del Notaio",
    "Spettro della Campana Bassa",
    "Marinaio Annegato senza Porto",
    "Guardia Funebre di Rame",
    "Sposa della Cripta Fredda",
    "Fante dei Tumuli Spaccati",
    "Cacciatore Morto di Fame",
    "Mummia del Pozzo Secco",
    "Cantore Senza Lingua",
    "Cavaliere della Lapide Storta",
    "Ghoul del Mercato Chiuso",
    "Sentinella dei Nomi Cancellati",
    "Veggente della Tomba Umida",
    "Boia della Porta Minore",
    "Barone delle Ossa Tiepide",
    "Naufrago della Marea Morta",
    "Custode del Cimitero Inverso",
  ],
  "Mostruosità": [
    "Mantide delle Canne Spezzate",
    "Serpecornuta delle Cave",
    "Istrice delle Spine di Ferro",
    "Mastino a Due Ombre",
    "Falena Mangialuce",
    "Ragno Campanaro",
    "Scorpione delle Tegole",
    "Bestia dei Tre Ginocchi",
    "Cervo con Bocca di Lupo",
    "Granchio delle Porte Sommerse",
    "Lucertola Urlante del Deserto",
    "Arpia del Faro Nero",
    "Toro delle Rune Spezzate",
    "Viverna di Brughiera",
    "Cinghiale della Luna Cava",
  ],
  Melma: [
    "Gelatina di Cantina",
    "Melma del Pozzo Stanco",
    "Colata di Ruggine Dolce",
    "Fango Mangiasuole",
    "Bolla Acida del Canale",
    "Muffa Fluida dei Sarcofagi",
    "Pozza Nera Senzocchio",
    "Slavina Gelatinosa",
    "Melma del Sale Vivo",
    "Nucleo Acido delle Fogne",
  ],
  Pianta: [
    "Rovo Sussurrante",
    "Fungo delle Caviglie",
    "Radice Predatrice",
    "Ortica della Luna Spenta",
    "Vite Strozzapassi",
    "Albero Bambino Marcio",
    "Giunco dei Morti Bassi",
    "Fiore Lanciaodore",
    "Quercia del Morso Lento",
    "Fioritura della Fossa Nera",
  ],
  Costrutto: [
    "Bambola di Guardia Crepata",
    "Sentinella di Secchi e Chiodi",
    "Idolo di Creta Rossa",
    "Carrello Minatore Animato",
    "Statua Spazzina del Tempio",
  ],
};

const BIOME_TEXT = {
  forest: "tra alberi fitti e radici umide",
  swamp: "dentro acqua ferma e fango nero",
  mountain: "su passi alti e pietra instabile",
  desert: "fra dune, sale e rovine roventi",
  arctic: "nel vento bianco e nella neve dura",
  coastal: "tra scogliere, moli e grotte marine",
  aquatic: "in acque profonde o correnti ostili",
  grassland: "nelle erbe alte e sulle piste aperte",
  hill: "tra colline, tane e strade rialzate",
  underdark: "in caverne fredde senza sole",
  urban: "fra vicoli, cantine e tetti stretti",
  ruins: "tra pietre cadute e porte dimenticate",
  planar: "dove la realta cede e le leggi cambiano",
};

const KEYWORD_BIOMES = [
  [["pesce", "trota", "squalo", "anguilla", "anguille"], ["aquatic", "coastal"]],
  [["foca", "cormorano", "airone", "risacca", "relitto", "marea", "scogliera", "porto", "marinaio", "naufrago"], ["coastal", "aquatic"]],
  [["rana", "pantano", "giunco", "sanguisuga", "zanzare", "fango", "guado", "pozzo", "canne"], ["swamp", "aquatic"]],
  [["gelo", "neve", "ghiaccio", "ferrosa"], ["arctic", "mountain"]],
  [["duna", "sale", "sabbia", "secco", "secca", "cenere", "avvoltoio", "scorpione"], ["desert", "grassland"]],
  [["crepaccio", "capra", "aquila", "guglie", "cave", "miniere", "miniera", "marmo", "carrello"], ["mountain", "hill"]],
  [["vicolo", "taverna", "mercato", "notaio", "gilda", "fogne", "cantina", "cancello", "tegol", "tetti"], ["urban", "ruins"]],
  [["cripta", "sarcofagi", "lapide", "cimitero", "tomba", "sepolcr", "ossa", "mummia", "scheletro"], ["ruins", "underdark"]],
  [["fossa", "caverne", "senzocchio", "pipistrello", "talpa", "millepiedi"], ["underdark", "ruins"]],
  [["rovo", "radici", "felci", "quercia", "fungo", "ortica", "vite", "fiore", "albero", "sottobosco", "volpe", "orso", "lupo", "pantera", "cinghiale"], ["forest", "hill"]],
  [["erbe", "brughiera", "steppe", "iena", "rinoceronte", "cervo"], ["grassland", "hill"]],
  [["forgia", "catene", "idolo", "bambola", "statua"], ["ruins", "urban"]],
  [["lanterna", "sigilli", "ombra", "spettro", "maledizioni"], ["ruins", "planar"]],
];

const TYPE_BIOME_FALLBACKS = {
  Bestia: ["forest", "grassland"],
  Sciame: ["swamp", "urban"],
  Umanoide: ["urban", "hill"],
  "Non morto": ["ruins", "underdark"],
  "MostruositÃ ": ["forest", "mountain"],
  Melma: ["swamp", "ruins"],
  Pianta: ["forest", "swamp"],
  Costrutto: ["ruins", "urban"],
};

const DESCRIPTION_TEMPLATES = [
  ({ name, place }) => `${name} lascia tracce riconoscibili ${place}: segni bassi, odori acri e improvvisi vuoti di silenzio.`,
  ({ name, place }) => `${name} si incontra spesso ${place}, dove sfrutta ripari naturali e percorsi che gli estranei notano troppo tardi.`,
  ({ name, place }) => `${name} sembra una minaccia minore finche non sceglie il terreno: ${place} diventa allora parte del suo attacco.`,
  ({ name, place }) => `${name} e piccolo abbastanza da passare inosservato, ma ${place} trasforma ogni suo movimento in un pericolo concreto.`,
  ({ name, place }) => `${name} viene segnalato da tracce fresche, ripari disturbati e piccoli resti ${place}, quasi sempre prima che qualcuno lo veda.`,
  ({ name, place }) => `${name} non domina un territorio vasto: presidia punti precisi ${place} e punisce chi li attraversa senza cautela.`,
];

const STORY_TEMPLATES = [
  ({ name }) => `Il nome ${name} compare nei racconti delle guide per incidenti ripetuti, mai abbastanza grandi da diventare leggenda ma troppo frequenti per essere ignorati.`,
  ({ name }) => `I villaggi vicini parlano di ${name} quando una ronda torna con torce spente, provviste sparse e nessuna spiegazione utile.`,
  ({ name }) => `Chi commercia lungo quelle strade conosce ${name} come un cattivo presagio: non rovina un viaggio, lo consuma passo dopo passo.`,
  ({ name }) => `Gli anziani descrivono ${name} con dettagli pratici, non poetici: dove si nasconde, cosa teme e quali errori non ripetere.`,
  ({ name }) => `La fama di ${name} nasce da piccole perdite accumulate: animali spariti, porte forzate, ossa pulite e mappe abbandonate.`,
  ({ name }) => `Nessuno dedica ballate a ${name}, ma ogni pattuglia esperta abbassa la voce quando trova i suoi segni freschi.`,
];

const ACTION_TEMPLATES = [
  ({ name, role, damageType }) => `${name} usa un ${role.toLowerCase()} ravvicinato: colpisce con danni ${damageType} e cerca subito un varco per sottrarsi alla risposta.`,
  ({ name, role, damageType }) => `${name} combatte da ${role.toLowerCase()} opportunista. Attacco principale da ${damageType}; se il bersaglio e isolato, prova a bloccarlo o spingerlo fuori posizione.`,
  ({ name, role, damageType }) => `${name} apre con un ${role.toLowerCase()} rapido. Infligge danni ${damageType} e puo trasformare copertura, buio o confusione in vantaggio tattico.`,
  ({ name, role, damageType }) => `${name} mantiene pressione da ${role.toLowerCase()}. Ferisce con danni ${damageType}, poi costringe il gruppo a muoversi o a proteggere il membro piu fragile.`,
];

const TACTIC_TEMPLATES = [
  ({ name, place }) => `${name} evita lo scontro pulito: sfrutta ${place}, sceglie chi resta indietro e interrompe l'inseguimento appena perde il vantaggio.`,
  ({ name, place }) => `${name} apre con un'aggressione breve, si riposiziona ${place} e torna quando il gruppo spreca attenzione o risorse.`,
  ({ name, place }) => `${name} non cerca gloria. Usa ${place} per creare distanza, spezzare la formazione e colpire chi guarda nella direzione sbagliata.`,
  ({ name, place }) => `${name} rende l'ambiente parte dell'incontro: ${place} offre copertura, vie di fuga e piccoli ostacoli da usare contro gli avventurieri.`,
];

function crValue(cr) {
  if (String(cr).includes("/")) {
    const [a, b] = String(cr).split("/").map(Number);
    return a / b;
  }

  return Number(cr);
}

function difficultyForCr(cr) {
  const value = crValue(cr);

  if (value <= 0.25) return "Semplice";
  if (value <= 2) return "Facile";
  if (value <= 4) return "Medio";
  if (value <= 6) return "Difficile";

  return "Estremo";
}

function statsForCr(cr) {
  const value = crValue(cr);

  if (value === 0) return { ac: 10, hp: 5, attack: "+2", damage: "1", average: 1 };
  if (value <= 0.125) return { ac: 11, hp: 8, attack: "+3", damage: "1d4 + 1", average: 3 };
  if (value <= 0.25) return { ac: 12, hp: 13, attack: "+4", damage: "1d6 + 2", average: 5 };
  if (value <= 0.5) return { ac: 13, hp: 22, attack: "+4", damage: "1d8 + 2", average: 6 };
  if (value <= 1) return { ac: 13, hp: 34, attack: "+5", damage: "1d8 + 3", average: 7 };
  if (value <= 2) return { ac: 14, hp: 52, attack: "+5", damage: "2d6 + 3", average: 10 };
  if (value <= 3) return { ac: 15, hp: 76, attack: "+6", damage: "2d8 + 4", average: 13 };
  if (value <= 4) return { ac: 15, hp: 96, attack: "+6", damage: "3d6 + 4", average: 14 };
  if (value <= 5) return { ac: 16, hp: 118, attack: "+7", damage: "3d8 + 4", average: 18 };
  if (value <= 6) return { ac: 16, hp: 138, attack: "+8", damage: "4d8 + 4", average: 22 };
  if (value <= 7) return { ac: 17, hp: 158, attack: "+8", damage: "4d10 + 5", average: 27 };

  return { ac: 17, hp: 178, attack: "+9", damage: "5d10 + 5", average: 32 };
}

function abilityScoresFor(type, cr, role) {
  const detail = TYPE_DETAILS[type];
  const value = Math.floor(crValue(cr));
  const roleText = role.toLowerCase();
  const scores = { ...detail.abilities };

  scores.str += Math.min(5, value);
  scores.con += Math.min(5, value);
  if (roleText.includes("assalitore") || roleText.includes("predatore") || roleText.includes("artigliere")) {
    scores.dex += 2;
  }
  if (roleText.includes("controllo") || roleText.includes("supporto")) {
    scores.wis += 2;
    scores.int += 1;
  }
  if (roleText.includes("bruto") || roleText.includes("guardiano")) {
    scores.str += 2;
    scores.con += 1;
  }

  return Object.fromEntries(
    Object.entries(scores).map(([key, score]) => [key, Math.max(1, Math.min(30, score))])
  );
}

function speedFor(type, primaryBiome, cr) {
  if (type === "Melma") return "20 ft., scalata 20 ft.";
  if (type === "Pianta") return crValue(cr) <= 0.25 ? "10 ft." : "20 ft.";
  if (type === "Costrutto") return "25 ft.";
  if (primaryBiome === "aquatic") return "10 ft., nuoto 40 ft.";
  if (primaryBiome === "coastal" || primaryBiome === "swamp") return "30 ft., nuoto 20 ft.";
  if (primaryBiome === "mountain" || primaryBiome === "underdark") return "30 ft., scalata 20 ft.";
  if (type === "Sciame") return "20 ft., volo 20 ft.";

  return "30 ft.";
}

function normalizeName(name) {
  return String(name || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function buildBiomes(name, type) {
  const normalizedName = normalizeName(name);
  const matchedRule = KEYWORD_BIOMES.find(([keywords]) =>
    keywords.some((keyword) => normalizedName.includes(keyword))
  );
  const [primary, secondary] =
    matchedRule?.[1] || TYPE_BIOME_FALLBACKS[type] || ["ruins", "urban"];

  return primary === secondary ? [primary] : [primary, secondary];
}

function buildMonster(name, type, index) {
  const cr = CR_POOL[(index * 37) % CR_POOL.length];
  const detail = TYPE_DETAILS[type];
  const role = detail.roles[index % detail.roles.length];
  const biomes = buildBiomes(name, type);
  const primaryBiome = biomes[0];
  const stats = statsForCr(cr);
  const biomeText = BIOME_TEXT[primaryBiome];
  const tagBiome = primaryBiome[0].toUpperCase() + primaryBiome.slice(1);
  const templateContext = {
    name,
    place: biomeText,
    role,
    damageType: detail.damageType,
  };

  return {
    id: `batch1-${String(index + 1).padStart(3, "0")}`,
    name,
    biomes,
    difficulty: difficultyForCr(cr),
    cr,
    type,
    role,
    icon: detail.icon,
    armorClass: stats.ac,
    hitPoints: stats.hp,
    speed: speedFor(type, primaryBiome, cr),
    tags: [type, role, tagBiome],
    description: DESCRIPTION_TEMPLATES[index % DESCRIPTION_TEMPLATES.length](templateContext),
    story: STORY_TEMPLATES[index % STORY_TEMPLATES.length](templateContext),
    actions: ACTION_TEMPLATES[index % ACTION_TEMPLATES.length](templateContext),
    tactics: TACTIC_TEMPLATES[index % TACTIC_TEMPLATES.length](templateContext),
    resistances: detail.resistances,
    vulnerabilities: detail.vulnerabilities,
    combat: {
      attackBonus: stats.attack,
      damage: stats.damage,
      averageDamage: stats.average,
      damageType: detail.damageType,
      damageNote: `${name}: profilo da ${role.toLowerCase()} per incontri frequenti di CR ${cr}, pensato per essere regolato al tavolo senza copiare stat block ufficiali.`,
    },
    abilityScores: abilityScoresFor(type, cr, role),
  };
}

const seeds = Object.entries(NAMES_BY_TYPE).flatMap(([type, names]) =>
  names.map((name) => ({ name, type }))
);

export const batchOneMonsters = seeds.map((seed, index) =>
  buildMonster(seed.name, seed.type, index)
);
