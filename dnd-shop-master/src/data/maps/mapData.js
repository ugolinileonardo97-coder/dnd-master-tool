const biomeSeeds = {
  forest: {
    label: "Foresta",
    icon: "🌲",
    palette: { fill: "#23331f", stroke: "#7da35b", accent: "#b9d27c" },
    features: ["radici nere", "tronchi cavi", "funghi pallidi", "rovi intrecciati", "pietre muschiate", "nidi caduti", "ruscelli freddi", "idoli di corteccia"],
    entrances: ["arco di radici", "sentiero tra alberi", "portale coperto di muschio", "tronco cavo"],
    monsters: ["lupi corrotti", "briganti del sottobosco", "guardiani di radici", "sciami di spine", "bestia muschiata"],
    traps: ["radici che bloccano", "rami tesi", "fossa coperta di foglie", "spine velenose", "liane strangolanti"],
    treasures: ["semi d'argento", "mappa di corteccia", "amuleto di resina", "lama verde", "frecce piumate"],
    details: ["foglie che coprono il pavimento", "luce verde filtrata", "radici come muri bassi", "tronchi usati come copertura"],
  },
  swamp: {
    label: "Palude",
    icon: "🪷",
    palette: { fill: "#263027", stroke: "#8c9d57", accent: "#c7b66a" },
    features: ["acque torbide", "passerelle marce", "canne taglienti", "pozze sulfuree", "barche capovolte", "fango nero", "lanterne spente", "radici sommerse"],
    entrances: ["passerella marcia", "porta semi-sommersa", "tempio affondato", "varco tra canne"],
    monsters: ["melme torbide", "cultisti della palude", "insetti giganti", "spiriti annegati", "cacciatore del pantano"],
    traps: ["terreno che cede", "gas tossico", "acqua acida", "sanguisughe", "fango risucchiante"],
    treasures: ["erbe rare", "reliquia sommersa", "perla scura", "maschera di canne", "boccetta di veleno mite"],
    details: ["nebbia bassa", "bolle nel fango", "pontili inclinati", "acqua fino alle caviglie"],
  },
  mountain: {
    label: "Montagna",
    icon: "⛰️",
    palette: { fill: "#2f3234", stroke: "#a6a7a0", accent: "#d7c28a" },
    features: ["rocce franate", "corde gelate", "crepacci stretti", "altari di vento", "minerali scuri", "ponti sospesi", "cenge esposte", "torri di guardia"],
    entrances: ["ingresso di grotta", "portone scavato nella roccia", "ponte sospeso", "crepa tra pareti"],
    monsters: ["predatori rupestri", "arpie delle creste", "golem di pietra minore", "briganti del valico", "bestia delle nevi"],
    traps: ["frana improvvisa", "ponte sospeso instabile", "ghiaccio sottile", "raffica di vento", "massi in bilico"],
    treasures: ["gemme fredde", "rune di ferro", "piccone inciso", "corno da valico", "bracciale minerale"],
    details: ["eco forte", "vento laterale", "cenge senza parapetto", "nevischio in ombra"],
  },
  desert: {
    label: "Deserto",
    icon: "🏜️",
    palette: { fill: "#4a351c", stroke: "#d1a45a", accent: "#f0d184" },
    features: ["dune tagliate", "ossa sbiancate", "tende strappate", "pozzi asciutti", "lastre roventi", "vasi sepolti", "statue spezzate", "ombre di miraggio"],
    entrances: ["portale semi-sepolto", "ingresso di tomba", "arco di pietra consumata", "scala nella sabbia"],
    monsters: ["predoni sabbiosi", "scarabei giganti", "guardiani di sale", "serpi delle dune", "spettri assetati"],
    traps: ["sabbia mobile", "lama nascosta in tomba", "specchi accecanti", "sete magica", "lastra che sprofonda"],
    treasures: ["datteri d'oro", "anello di vetro", "sigillo solare", "otre pregiato", "mappa salina"],
    details: ["calore tremolante", "sabbia nei corridoi", "ombre dure", "pietra screpolata"],
  },
  underdark: {
    label: "Sottosuolo",
    icon: "🕳️",
    palette: { fill: "#1c2230", stroke: "#6b86a8", accent: "#9fd6df" },
    features: ["stalattiti nere", "funghi luminescenti", "ponti di pietra", "laghi ciechi", "vene cristalline", "gallerie strette", "colonie di spore", "porte basaltiche"],
    entrances: ["cunicolo", "crepaccio", "porta di pietra nera", "scala scavata"],
    monsters: ["creature cieche", "funghi predatori", "scavatori pallidi", "ragni di caverna", "sentinelle minerali"],
    traps: ["crepaccio nascosto", "spore stordenti", "crollo di volta", "cristalli esplosivi", "eco che attira predatori"],
    treasures: ["cristalli chiari", "inchiostro fungino", "lama basaltica", "chiave di pietra", "perla cieca"],
    details: ["luce fungina", "gocce regolari", "pareti umide", "ombra profonda"],
  },
  urban: {
    label: "Grande citta",
    icon: "🏰",
    palette: { fill: "#2f2525", stroke: "#b38b64", accent: "#f0c987" },
    features: ["vicoli coperti", "cisterne antiche", "botteghe chiuse", "tetti spioventi", "statue civiche", "archivi polverosi", "cancelli arrugginiti", "fogne basse"],
    entrances: ["porta di cantina", "accesso alle fogne", "portone di magazzino", "vicolo cieco con botola"],
    monsters: ["tagliagole di quartiere", "guardie corrotte", "ratti enormi", "ombre dei tetti", "costrutti civici difettosi"],
    traps: ["filo con campanelli", "botola di scarico", "serratura avvelenata", "muro falso", "olio acceso sul selciato"],
    treasures: ["registro cifrato", "sigillo nobiliare", "borsa di pegni", "chiave di bottega", "contratto rubato"],
    details: ["rumore di folla lontana", "finestre sbarrate", "lampade basse", "vicoli a gomito"],
  },
  coastal: {
    label: "Porto / Mare",
    icon: "⚓",
    palette: { fill: "#18323a", stroke: "#63a8b6", accent: "#d2c083" },
    features: ["moli bagnati", "reti salmastre", "magazzini chiusi", "campane da nebbia", "barili fradici", "scogli bassi", "fari spenti", "catene d'ormeggio"],
    entrances: ["grotta marina", "pontile rotto", "arco di scogli", "porta corrosa dal sale"],
    monsters: ["predoni del molo", "bestie salmastre", "spiriti di naufragio", "sciami di granchi", "guardiani di scogliera"],
    traps: ["marea improvvisa", "asse marcia", "rete che cade", "campana d'allarme", "pietre scivolose"],
    treasures: ["perle opache", "mappa salmastra", "bussola scheggiata", "monete di porto", "arpione inciso"],
    details: ["odore di sale", "acqua sotto le assi", "alghe sui muri", "nebbia da banchina"],
  },
  arctic: {
    label: "Artico",
    icon: "❄️",
    palette: { fill: "#263943", stroke: "#9fc9d9", accent: "#e5f5ff" },
    features: ["ghiaccio sottile", "slitte rotte", "pareti azzurre", "fuochi spenti", "tende congelate", "ossa sotto neve", "creste ventose", "cristalli gelidi"],
    entrances: ["crepa nel ghiaccio", "grotta gelata", "portone coperto di brina", "tunnel nella neve"],
    monsters: ["predatori bianchi", "spiriti del gelo", "briganti della tormenta", "costrutti di brina", "bestie dalle zanne scure"],
    traps: ["lastra gelata", "soffio di tormenta", "ponte di neve fragile", "ghiaccio che si chiude", "crepaccio bianco"],
    treasures: ["cristallo azzurro", "pelliccia rara", "runa di brina", "lanterna termica", "moneta antica congelata"],
    details: ["vento tagliente", "riflessi azzurri", "neve nei bordi", "silenzio ovattato"],
  },
  ruins: {
    label: "Rovine antiche",
    icon: "🏛️",
    palette: { fill: "#302a22", stroke: "#b6a178", accent: "#e0c46e" },
    features: ["colonne spezzate", "mosaici incrinati", "scale crollate", "cripte sigillate", "statue senza volto", "lastre incise", "archi sospesi", "pozzi rituali"],
    entrances: ["arco spezzato", "portale antico", "scala crollata", "colonnato"],
    monsters: ["custodi incrinati", "predoni di reliquie", "ombre di pietra", "sciami di polvere", "sentinelle votive"],
    traps: ["lastra votiva", "lancia murale", "crollo di colonna", "sigillo accecante", "gradino falso"],
    treasures: ["frammento antico", "sigillo inciso", "monete vecchie", "maschera cerimoniale", "tavoletta spezzata"],
    details: ["polvere sospesa", "mosaici incompleti", "ombre tra colonne", "iscrizioni consunte"],
  },
  infernal: {
    label: "Piano infernale",
    icon: "🔥",
    palette: { fill: "#3c1712", stroke: "#d7643f", accent: "#ffb15d" },
    features: ["brace nera", "catene calde", "sigilli rossi", "cenere viva", "porte dentate", "fiumi di scorie", "corni spezzati", "altari fumanti"],
    entrances: ["cancello di ferro", "portale di ossidiana", "ponte su lava", "arco con catene"],
    monsters: ["diavoli minori originali", "demoni di cenere", "armigeri incatenati", "mastini di brace", "guardiani d'ossidiana"],
    traps: ["catene animate", "pavimento rovente", "fiamme nere", "patto inciso", "lama di ossidiana"],
    treasures: ["contratto bruciato", "catena runica", "gemma calda", "scaglia d'ossidiana", "sigillo cremisi"],
    details: ["cenere che cade", "calore dal basso", "bagliori rossi", "metallo che geme"],
  },
};

const connectionSeeds = ["porta in legno", "porta di pietra", "cancello", "ponte sospeso", "corridoio", "tunnel", "passaggio segreto", "sentiero", "passerella", "ponte su lava", "crepaccio attraversabile"];
const bossRoomNames = ["Sala delle Radici Spezzate", "Ponte della Corona Gelata", "Altare delle Catene Nere", "Cripta del Sole Sepolto", "Grotta del Cuore Salmastro"];

function expandEntrances(seed) {
  return seed.entrances.flatMap((entrance) => [
    `${entrance} presso ${seed.features[0]}`,
    `${entrance} segnato da ${seed.features[1]}`,
    `${entrance} oltre ${seed.features[2]}`,
  ]).slice(0, 12);
}

function createRooms(seed) {
  return seed.features.flatMap((feature, index) => [
    `Sala di ${feature}`,
    index % 2 ? `Passaggio delle ${feature}` : `Camera dei ${feature}`,
  ]).slice(0, 12);
}

function createEncounters(seed) {
  return Array.from({ length: 10 }, (_, index) => {
    const monster = seed.monsters[index % seed.monsters.length];
    const feature = seed.features[index % seed.features.length];
    return {
      name: `${monster} presso ${feature}`,
      low: `1-3 ${monster} cauti, facili da aggirare con rumore o luce.`,
      mid: `Gruppo misto di ${monster} con copertura e un vantaggio del terreno.`,
      high: `${monster} elite supportati da minacce ambientali e posizione elevata.`,
      boss: `Capo dei ${monster} con 2 minion e obiettivo tattico nella stanza.`,
    };
  });
}

function createTraps(seed) {
  return Array.from({ length: 10 }, (_, index) => {
    const trap = seed.traps[index % seed.traps.length];
    const feature = seed.features[index % seed.features.length];
    return {
      name: trap,
      description: `${trap} nascosta vicino a ${feature}.`,
      difficulty: index < 3 ? "Facile" : index < 7 ? "Media" : "Difficile",
      effect: index < 3 ? "Rallenta e infligge danni leggeri." : index < 7 ? "Blocca movimento o separa il gruppo." : "Crea danno serio e cambia il campo di battaglia.",
      dmNote: "Mostra un indizio visivo prima dell'effetto, cosi i giocatori possono reagire.",
    };
  });
}

function createTreasures(seed) {
  return Array.from({ length: 10 }, (_, index) => {
    const treasure = seed.treasures[index % seed.treasures.length];
    const tiers = ["Basso", "Basso", "Medio", "Medio", "Medio", "Alto", "Alto", "Alto", "Boss", "Boss"];
    return {
      name: treasure,
      tier: tiers[index],
      description: `${treasure} custodito in un contenitore segnato dal bioma.`,
      reward: tiers[index] === "Boss" ? "Ricompensa unica o chiave narrativa." : "Ricompensa utile senza dominare la sessione.",
    };
  });
}

function createEvents(seed) {
  return Array.from({ length: 10 }, (_, index) => {
    const feature = seed.features[index % seed.features.length];
    return `Evento presso ${feature}: tracce, rumori o scelta morale cambiano il ritmo della scena.`;
  });
}

function createBossRooms(seed, biomeId) {
  return Array.from({ length: 5 }, (_, index) => {
    const name = bossRoomNames[(index + Object.keys(biomeSeeds).indexOf(biomeId)) % bossRoomNames.length];
    return {
      name,
      description: `${name} dominata da ${seed.features[index % seed.features.length]} e da un centro scenico evidente.`,
      boss: seed.monsters[(index + 2) % seed.monsters.length],
      minions: seed.monsters[index % seed.monsters.length],
      hazard: seed.traps[(index + 1) % seed.traps.length],
      treasure: seed.treasures[(index + 3) % seed.treasures.length],
      twist: "Una scelta del gruppo puo indebolire il boss o rendere instabile la stanza.",
    };
  });
}

function createBiomeData(seed, biomeId) {
  return {
    ...seed,
    entranceVisuals: expandEntrances(seed),
    roomNames: createRooms(seed),
    rooms: createRooms(seed),
    monsterEncounters: createEncounters(seed),
    traps: createTraps(seed),
    treasures: createTreasures(seed),
    events: createEvents(seed),
    bossRooms: createBossRooms(seed, biomeId),
    connectionTypes: connectionSeeds.slice(0, 8).map((type, index) => ({
      type,
      label: `${type} verso ${seed.features[index % seed.features.length]}`,
      dangerLevel: index % 3 === 0 ? "moderato" : "basso",
      secret: type.includes("segreto"),
    })),
    environmentalDetails: seed.details.flatMap((detail) => [
      detail,
      `${detail} vicino a ${seed.features[0]}`,
    ]).slice(0, 8),
  };
}

export const mapBiomes = Object.fromEntries(
  Object.entries(biomeSeeds).map(([id, seed]) => [id, createBiomeData(seed, id)])
);

export const mapBiomeOptions = Object.entries(mapBiomes).map(([id, biome]) => ({
  id,
  label: biome.label,
  icon: biome.icon,
}));

export const mapEnvironmentOptions = [
  { id: "dungeon", label: "Dungeon" },
  { id: "cave", label: "Grotta" },
  { id: "ruin", label: "Rovina" },
  { id: "camp", label: "Accampamento" },
  { id: "city", label: "Quartiere urbano" },
  { id: "wild", label: "Esterno selvaggio" },
];

export const mapLevelOptions = [
  { id: "low", label: "Basso livello", difficulty: "Facile" },
  { id: "mid", label: "Medio livello", difficulty: "Medio" },
  { id: "high", label: "Alto livello", difficulty: "Difficile" },
  { id: "boss", label: "Boss / finale", difficulty: "Boss" },
];

export const zoneTypeMeta = {
  entrance: { label: "Ingresso", icon: "🚪" },
  corridor: { label: "Passaggio", icon: "➤" },
  monster: { label: "Mostri", icon: "⚔️" },
  treasure: { label: "Tesoro", icon: "💰" },
  event: { label: "Evento", icon: "✦" },
  trap: { label: "Trappola", icon: "⚠️" },
  secret: { label: "Segreto", icon: "◈" },
  boss: { label: "Boss", icon: "👑" },
  hazard: { label: "Pericolo", icon: "☠️" },
  safe: { label: "Rifugio", icon: "🛡️" },
};
