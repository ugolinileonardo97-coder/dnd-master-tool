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
  ...Array(10).fill("0"),
  ...Array(16).fill("1/8"),
  ...Array(24).fill("1/4"),
  ...Array(24).fill("1/2"),
  ...Array(28).fill("1"),
  ...Array(22).fill("2"),
  ...Array(14).fill("3"),
  ...Array(6).fill("4"),
  ...Array(6).fill("5"),
];

const TYPE_DETAILS = {
  Bestia: {
    icon: "🐾",
    roles: ["Predatore", "Assalitore", "Guardiano", "Bruto"],
    resistances: "Istinto animale, freddo o caldo naturale del proprio bioma",
    vulnerabilities: "Fuoco, rumori forti, terreno innaturale",
    abilities: { str: 11, dex: 14, con: 12, int: 3, wis: 12, cha: 6 },
    damageType: "perforanti o taglienti",
  },
  Umanoide: {
    icon: "⚔️",
    roles: ["Assalitore", "Artigliere", "Supporto", "Bruto", "Controllo"],
    resistances: "Nessuna",
    vulnerabilities: "Paura, disorganizzazione, perdita del capo",
    abilities: { str: 11, dex: 12, con: 11, int: 10, wis: 10, cha: 9 },
    damageType: "taglienti o perforanti",
  },
  "Non morto": {
    icon: "💀",
    roles: ["Guardiano", "Assalitore", "Controllo", "Bruto"],
    resistances: "Necrotico, veleno, affaticamento",
    vulnerabilities: "Radiante, fuoco consacrato, parole di commiato",
    abilities: { str: 12, dex: 10, con: 14, int: 7, wis: 10, cha: 8 },
    damageType: "necrotici o taglienti",
  },
  Sciame: {
    icon: "🕸️",
    roles: ["Sciame", "Logoramento", "Controllo"],
    resistances: "Contundente, perforante, tagliente non magico",
    vulnerabilities: "Fuoco, vento forte, danni ad area",
    abilities: { str: 4, dex: 15, con: 11, int: 2, wis: 10, cha: 4 },
    damageType: "perforanti",
  },
  Melma: {
    icon: "🫧",
    roles: ["Corrosione", "Controllo", "Guardiano"],
    resistances: "Acido, veleno, affaticamento",
    vulnerabilities: "Freddo, fuoco intenso, contenimento alchemico",
    abilities: { str: 12, dex: 6, con: 15, int: 1, wis: 8, cha: 2 },
    damageType: "acido",
  },
  Pianta: {
    icon: "🌿",
    roles: ["Controllo", "Guardiano", "Bruto"],
    resistances: "Veleno, paura, affaticamento",
    vulnerabilities: "Fuoco, gelo improvviso, lame affilate",
    abilities: { str: 12, dex: 8, con: 14, int: 3, wis: 11, cha: 6 },
    damageType: "contundenti o perforanti",
  },
  "Mostruosità": {
    icon: "🦂",
    roles: ["Predatore", "Assalitore", "Bruto", "Controllo"],
    resistances: "Paura, terreno difficile naturale",
    vulnerabilities: "Fuoco, esche, spazi troppo stretti",
    abilities: { str: 15, dex: 12, con: 14, int: 5, wis: 11, cha: 7 },
    damageType: "taglienti o perforanti",
  },
};

const NAMES_BY_TYPE = {
  Bestia: [
    "Volpe del Rovo Cavo",
    "Tasso della Cenere Fredda",
    "Martora delle Travature",
    "Vipera del Sale Verde",
    "Cane delle Erbe Larghe",
    "Cormorano Beccoscuro",
    "Rana delle Campane Rotte",
    "Capriolo delle Nebbie Basse",
    "Geco delle Mura Calde",
    "Lince del Passo Muto",
    "Airone dalle Zampe Rosse",
    "Furetto del Magazzino Nero",
    "Trota Spinafina",
    "Gufo del Tetto Cavo",
    "Serpente del Ghiaccio Marcio",
    "Cinghiale delle Felci Blu",
    "Lontra delle Chiuse",
    "Avvoltoio della Sella Bruciata",
    "Cervo del Guado Opaco",
    "Squalo delle Secche Grigie",
    "Pipistrello delle Fessure",
    "Capra delle Nubi Basse",
    "Iena del Fossato Secco",
    "Orso del Miele Nero",
    "Lupo della Pioggia Ferma",
    "Ramarro Cornochiaro",
    "Foca delle Darsene Gelate",
    "Aquila del Campanile Spezzato",
    "Pantera dei Giunchi",
    "Talpa del Marmo Vuoto",
  ],
  Umanoide: [
    "Stradino Tagliagole",
    "Predone della Sacca Blu",
    "Arciere del Fienile Rosso",
    "Guardia del Pedaggio Marcio",
    "Pugile della Fossa Bassa",
    "Ladro delle Campane Spente",
    "Lanciere dei Fossi",
    "Razziatore della Neve Sporca",
    "Corsaro delle Scialuppe Mute",
    "Cacciatore del Sigillo Falso",
    "Sgherro del Banco Rotto",
    "Sentinella della Miniera Chiusa",
    "Cultista del Nodo di Ferro",
    "Mercenario del Mantello Secco",
    "Alchimista delle Fiale Torbide",
    "Nomade della Duna Lunga",
    "Pescatore di Contrabbando",
    "Scudiero Rinnegato",
    "Balestriere dei Tetti Bassi",
    "Fabbro del Patto Storto",
    "Mendicante con Lama Nascosta",
    "Sergente della Porta Sorda",
    "Brigante delle Tre Pietre",
    "Tamburino di Guerra Smarrito",
    "Erborista dei Veleni Dolci",
    "Esploratore delle Rovine Basse",
    "Marinaio della Taverna Affondata",
    "Addestratore di Cani Neri",
    "Notturno della Gilda Grigia",
    "Sciamano del Corno Vuoto",
  ],
  "Non morto": [
    "Ossaio della Strada Vecchia",
    "Spirito del Pozzo Chiuso",
    "Cadavere del Ponte Marcio",
    "Vedetta della Cripta Piccola",
    "Annegato delle Reti Strappate",
    "Soldato della Fossa Comune",
    "Mano del Ladro Sepolto",
    "Ombra della Stalla Fredda",
    "Sussurro del Camino Spento",
    "Morto del Mulino Nero",
    "Guardiano della Bara Stretta",
    "Pellegrino senza Ultima Tappa",
    "Scheletro del Cortile Vuoto",
    "Cacciatore Tornato Tardi",
    "Vecchia del Campo Bruciato",
    "Fante della Campagna Sepolta",
    "Marinaio della Chiglia Morta",
    "Mummia del Granaio Secco",
    "Spettro del Registro Bianco",
    "Portatore della Candela Fredda",
    "Cavaliere del Ferro Spento",
    "Ghoul del Vicolo Lungo",
    "Lamento della Galleria",
    "Custode del Sepolcro Breve",
    "Boia del Mercato Vuoto",
  ],
  Sciame: [
    "Sciame di Zanzare del Rame",
    "Sciame di Formiche delle Travi",
    "Sciame di Granchi delle Botti",
    "Sciame di Moscerini della Muffa",
    "Sciame di Ragni da Tenda",
    "Sciame di Scarabei delle Spezie",
    "Sciame di Pesci Ago Neri",
    "Sciame di Topi del Granaio",
    "Sciame di Falene della Cera",
    "Sciame di Serpi da Fosso",
    "Sciame di Larve della Lanterna",
    "Sciame di Corvi del Patibolo",
    "Sciame di Sanguisughe di Sale",
    "Sciame di Millepiedi dei Gradini",
    "Sciame di Vespe del Fumo",
    "Sciame di Pidocchi delle Pellicce",
    "Sciame di Anguille del Canale",
    "Sciame di Pipistrelli dei Coppi",
    "Sciame di Termiti delle Porte",
    "Sciame di Lucciole Malate",
  ],
  Melma: [
    "Fango del Secchio Rotto",
    "Gelatina del Vino Marcio",
    "Bava del Canale Freddo",
    "Melma delle Assi Marce",
    "Goccia Acida di Miniera",
    "Colata delle Candele Nere",
    "Pozza del Sale Sporco",
    "Muffa Liquida del Pozzo",
    "Scolo di Rame Vivo",
    "Pasta Corrosiva da Forgia",
    "Gelatina del Relitto Cavo",
    "Melma della Tomba Bassa",
    "Fango delle Radici Bianche",
    "Bolla delle Fogne Alte",
    "Bava del Ghiaccio Sporco",
  ],
  Pianta: [
    "Rovo delle Caviglie",
    "Fungo del Respiro Corto",
    "Vite delle Finestre Chiuse",
    "Giunco del Sangue Lento",
    "Radice della Soglia",
    "Fiore del Sonno Amaro",
    "Ortica del Fosso Blu",
    "Cespuglio degli Spilli",
    "Muschio Mangiasuole",
    "Alberello della Guardia Muta",
    "Felce del Coltello Verde",
    "Loto della Pozza Ferma",
    "Quercina del Rancore",
    "Fungo delle Monete False",
    "Erba dei Passi Rubati",
  ],
  "Mostruosità": [
    "Ragno del Telaio Rotto",
    "Scorpione delle Soglie",
    "Mastino con Tre Code",
    "Serpe delle Due Bocche",
    "Cervo dal Muso Spezzato",
    "Falena Spegnitorcia",
    "Istrice delle Lame Basse",
    "Granchio dal Guscio di Pietra",
    "Lucertola dal Grido Lungo",
    "Caprone degli Occhi Vuoti",
    "Bestia del Fossato Inverso",
    "Mantide della Campana",
    "Rospo con Denti di Vetro",
    "Squalo di Fiume Cieco",
    "Lupo della Seconda Ombra",
  ],
};

const BIOME_TEXT = {
  forest: "tra radici, muschio e sentieri coperti",
  swamp: "nel fango basso e tra canne marce",
  mountain: "su roccia instabile e passi freddi",
  desert: "tra sabbia, sale e pietre calde",
  arctic: "sotto vento duro e ghiaccio sporco",
  coastal: "fra scogli, barche rovesciate e grotte",
  aquatic: "in correnti, pozze profonde e fondali bui",
  grassland: "nelle erbe alte e sulle piste aperte",
  hill: "tra tane, muretti e strade in pendenza",
  underdark: "in gallerie umide senza luce",
  urban: "tra vicoli, cantine e tetti bassi",
  ruins: "fra pietre cadute e camere saccheggiate",
  planar: "dove il mondo vibra e le ombre mentono",
};

const KEYWORD_BIOMES = [
  [["trota", "squalo", "pesci", "anguilla"], ["aquatic", "coastal"]],
  [["foca", "cormorano", "airone", "corsaro", "scialuppe", "pescatore", "marinaio", "relitto", "chiglia", "darsene"], ["coastal", "aquatic"]],
  [["rana", "giunco", "loto", "sanguisughe", "zanzare", "canale", "chiuse", "guado", "pozzo"], ["swamp", "aquatic"]],
  [["gelo", "neve", "ghiaccio", "pellicce"], ["arctic", "mountain"]],
  [["duna", "sale", "secco", "cenere", "avvoltoio", "scorpione"], ["desert", "grassland"]],
  [["miniera", "passo", "marmo", "capra", "aquila", "galleria", "fossa bassa"], ["mountain", "underdark"]],
  [["vicolo", "taverna", "mercato", "gilda", "tetti", "magazzino", "banco", "pedaggio", "porta", "campanile", "mura"], ["urban", "ruins"]],
  [["cripta", "bara", "sepolcro", "scheletro", "spettro", "ghoul", "mummia", "ossaio", "lapide"], ["ruins", "underdark"]],
  [["ragni", "millepiedi", "pipistrelli", "talpa", "fessure"], ["underdark", "ruins"]],
  [["rovo", "felci", "fungo", "radice", "ortica", "quercina", "erba", "volpe", "orso", "lupo", "pantera", "cinghiale"], ["forest", "hill"]],
  [["erbe", "capriolo", "cervo", "iena", "brughiera", "sella"], ["grassland", "hill"]],
  [["fabbro", "forgia", "rame", "ferro", "nodo", "candela"], ["urban", "ruins"]],
  [["ombra", "spirito", "lamento", "sussurro", "registro"], ["ruins", "planar"]],
];

const TYPE_BIOME_FALLBACKS = {
  Bestia: ["forest", "grassland"],
  Umanoide: ["urban", "hill"],
  "Non morto": ["ruins", "underdark"],
  Sciame: ["swamp", "urban"],
  Melma: ["swamp", "ruins"],
  Pianta: ["forest", "swamp"],
  "MostruositÃ ": ["forest", "mountain"],
};

const DESCRIPTION_TEMPLATES = [
  ({ name, place }) => `${name} compare ${place} come una minaccia da viaggio: non annuncia la propria presenza, la lascia capire da tracce fresche e rumori spezzati.`,
  ({ name, place }) => `${name} occupa piccoli territori ${place}, scegliendo strettoie, tane o rovine minori dove un gruppo distratto perde subito ordine.`,
  ({ name, place }) => `${name} non e raro, ma resta pericoloso perche conosce bene ${place} e forza gli avversari a combattere nel punto peggiore.`,
  ({ name, place }) => `${name} viene incontrato spesso ${place}, soprattutto quando il gruppo procede di fretta o lascia indietro portatori e animali.`,
  ({ name, place }) => `${name} trasforma un incontro semplice in fastidio serio: ${place} gli offre copertura, fuga e bersagli isolati.`,
  ({ name, place }) => `${name} lascia dietro di se indizi pratici ${place}: graffi, fibre strappate, pozze torbide o pietre spostate da poco.`,
  ({ name, place }) => `${name} funziona bene per scene rapide ${place}, dove bastano pochi dettagli ambientali per renderlo memorabile.`,
  ({ name, place }) => `${name} si muove con cautela ${place}; chi lo sottovaluta scopre troppo tardi che sceglie sempre il luogo giusto.`,
];

const STORY_TEMPLATES = [
  ({ name }) => `Le guide nominano ${name} quando vogliono spaventare i novizi, ma i veterani sanno che l'avvertimento nasce da perdite reali.`,
  ({ name }) => `I mercanti parlano di ${name} come di un costo nascosto del viaggio: poche monete perse, una guardia ferita, una notte senza sonno.`,
  ({ name }) => `${name} non appartiene alle grandi leggende; appartiene ai registri delle pattuglie, pieni di note brevi e scritte in fretta.`,
  ({ name }) => `Attorno a ${name} circolano consigli pratici: non inseguire al buio, non separarsi, non toccare cio che sembra appena abbandonato.`,
  ({ name }) => `La reputazione di ${name} cresce per accumulo, una sparizione minore dopo l'altra, finche il sentiero cambia nome sulle mappe locali.`,
  ({ name }) => `Chi sopravvive a ${name} tende a descriverlo senza esagerare; proprio per questo i suoi racconti suonano credibili.`,
];

const ACTION_TEMPLATES = [
  ({ name, role, damageType }) => `${name} agisce da ${role.toLowerCase()} preciso. Attacco principale da ${damageType}; se trova un bersaglio scoperto, lo costringe a spendere movimento o protezione.`,
  ({ name, role, damageType }) => `${name} lavora come ${role.toLowerCase()} di disturbo. Colpisce con danni ${damageType} e prova a rompere concentrazione, linea o copertura.`,
  ({ name, role, damageType }) => `${name} preferisce un ${role.toLowerCase()} improvviso. Infligge danni ${damageType}, poi cerca riparo dietro terreno, folla, acqua o rovine.`,
  ({ name, role, damageType }) => `${name} insiste da ${role.toLowerCase()} ostinato. Usa danni ${damageType} e punta il bersaglio che sembra meno pronto a reagire.`,
  ({ name, role, damageType }) => `${name} apre come ${role.toLowerCase()} da imboscata. Infligge danni ${damageType} e sfrutta il primo turno per decidere se insistere o fuggire.`,
];

const TACTIC_TEMPLATES = [
  ({ name, place }) => `${name} attacca quando il gruppo e distratto, poi usa ${place} per impedire una risposta ordinata.`,
  ({ name, place }) => `${name} resta vicino a vie di fuga, colpisce il bersaglio piu esposto e trasforma ${place} in copertura.`,
  ({ name, place }) => `${name} cerca di separare chi avanza troppo, sfruttando suoni, ostacoli e visuale difficile ${place}.`,
  ({ name, place }) => `${name} non combatte fino alla morte se non costretto: arretra ${place} e torna quando il gruppo abbassa la guardia.`,
  ({ name }) => `${name} preferisce logorare: pochi danni, pessima posizione, poi un secondo assalto quando il terreno ha gia fatto il resto.`,
];

function crValue(cr) {
  if (String(cr).includes("/")) {
    const [top, bottom] = String(cr).split("/").map(Number);
    return top / bottom;
  }

  return Number(cr);
}

function difficultyForCr(cr) {
  const value = crValue(cr);

  if (value <= 0.25) return "Semplice";
  if (value <= 2) return "Facile";
  if (value <= 4) return "Medio";

  return "Difficile";
}

function statsForCr(cr) {
  const value = crValue(cr);

  if (value === 0) return { ac: 10, hp: 4, attack: "+2", damage: "1", average: 1 };
  if (value <= 0.125) return { ac: 11, hp: 7, attack: "+3", damage: "1d4 + 1", average: 3 };
  if (value <= 0.25) return { ac: 12, hp: 12, attack: "+4", damage: "1d6 + 2", average: 5 };
  if (value <= 0.5) return { ac: 12, hp: 20, attack: "+4", damage: "1d8 + 2", average: 6 };
  if (value <= 1) return { ac: 13, hp: 32, attack: "+5", damage: "1d8 + 3", average: 7 };
  if (value <= 2) return { ac: 14, hp: 50, attack: "+5", damage: "2d6 + 3", average: 10 };
  if (value <= 3) return { ac: 15, hp: 72, attack: "+6", damage: "2d8 + 4", average: 13 };
  if (value <= 4) return { ac: 15, hp: 92, attack: "+6", damage: "3d6 + 4", average: 14 };

  return { ac: 16, hp: 112, attack: "+7", damage: "3d8 + 4", average: 18 };
}

function abilityScoresFor(type, cr, role) {
  const scores = { ...TYPE_DETAILS[type].abilities };
  const bonus = Math.floor(crValue(cr));
  const roleText = role.toLowerCase();

  scores.str += Math.min(4, bonus);
  scores.con += Math.min(4, bonus);
  if (roleText.includes("predatore") || roleText.includes("assalitore") || roleText.includes("artigliere")) scores.dex += 2;
  if (roleText.includes("controllo") || roleText.includes("supporto")) {
    scores.int += 1;
    scores.wis += 2;
  }
  if (roleText.includes("bruto") || roleText.includes("guardiano")) {
    scores.str += 2;
    scores.con += 1;
  }

  return Object.fromEntries(
    Object.entries(scores).map(([key, score]) => [key, Math.max(1, Math.min(30, score))])
  );
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
  const [first, second] =
    matchedRule?.[1] || TYPE_BIOME_FALLBACKS[type] || ["ruins", "urban"];

  return first === second ? [first] : [first, second];
}

function speedFor(type, primaryBiome, cr) {
  if (type === "Melma") return "20 ft., scalata 10 ft.";
  if (type === "Pianta") return crValue(cr) <= 0.25 ? "10 ft." : "20 ft.";
  if (primaryBiome === "aquatic") return "10 ft., nuoto 40 ft.";
  if (primaryBiome === "swamp" || primaryBiome === "coastal") return "30 ft., nuoto 20 ft.";
  if (primaryBiome === "mountain" || primaryBiome === "underdark") return "30 ft., scalata 20 ft.";
  if (type === "Sciame") return "20 ft., volo 20 ft.";

  return "30 ft.";
}

function titleBiome(biome) {
  return biome[0].toUpperCase() + biome.slice(1);
}

function buildMonster(seed, index) {
  const detail = TYPE_DETAILS[seed.type];
  const cr = CR_POOL[index % CR_POOL.length];
  const role = detail.roles[index % detail.roles.length];
  const biomes = buildBiomes(seed.name, seed.type);
  const primaryBiome = biomes[0];
  const stats = statsForCr(cr);
  const place = BIOME_TEXT[primaryBiome];
  const templateContext = {
    name: seed.name,
    place,
    role,
    damageType: detail.damageType,
  };

  return {
    id: `batch2-${String(index + 1).padStart(3, "0")}`,
    name: seed.name,
    biomes,
    difficulty: difficultyForCr(cr),
    cr,
    type: seed.type,
    role,
    icon: detail.icon,
    armorClass: stats.ac,
    hitPoints: stats.hp,
    speed: speedFor(seed.type, primaryBiome, cr),
    tags: [seed.type, role, titleBiome(primaryBiome)],
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
      damageNote: `${seed.name}: ${role.toLowerCase()} da CR ${cr}. Profilo originale per incontri bassi e medi, pensato per uso rapido al tavolo.`,
    },
    abilityScores: abilityScoresFor(seed.type, cr, role),
  };
}

const seeds = Object.entries(NAMES_BY_TYPE).flatMap(([type, names]) =>
  names.map((name) => ({ type, name }))
);

export const batchTwoMonsters = seeds.map((seed, index) =>
  buildMonster(seed, index)
);
