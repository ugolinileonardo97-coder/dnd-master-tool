import { mapBiomes, mapEnvironmentOptions, mapLevelOptions } from "../data/maps/mapData";
import { generateZoneContent, getZoneIcon } from "./mapGenerator";

const MAP_SIZE = 16;

const zoneSlots = [
  { x: 1, y: 1, width: 3, height: 2 },
  { x: 5, y: 1, width: 3, height: 2 },
  { x: 9, y: 1, width: 3, height: 2 },
  { x: 13, y: 1, width: 2, height: 3 },
  { x: 1, y: 5, width: 3, height: 2 },
  { x: 5, y: 5, width: 3, height: 3 },
  { x: 10, y: 5, width: 3, height: 2 },
  { x: 13, y: 6, width: 2, height: 3 },
  { x: 1, y: 10, width: 3, height: 2 },
  { x: 5, y: 10, width: 3, height: 2 },
  { x: 9, y: 10, width: 3, height: 2 },
  { x: 13, y: 10, width: 2, height: 3 },
];

const shortSlotOrders = {
  1: [5],
  2: [0, 11],
  3: [0, 5, 11],
  4: [0, 2, 5, 11],
  5: [0, 1, 5, 6, 11],
  6: [0, 1, 4, 5, 6, 11],
  7: [0, 1, 2, 4, 5, 6, 11],
  8: [0, 1, 2, 4, 5, 6, 10, 11],
  9: [0, 1, 2, 4, 5, 6, 8, 10, 11],
  10: [0, 1, 2, 4, 5, 6, 8, 9, 10, 11],
  11: [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11],
  12: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
};

const zoneTypePlans = {
  1: ["event"],
  2: ["entrance", "event"],
  3: ["entrance", "monster", "treasure"],
  4: ["entrance", "event", "trap", "treasure"],
  5: ["entrance", "event", "monster", "trap", "treasure"],
  6: ["entrance", "event", "monster", "trap", "treasure", "boss"],
  7: ["entrance", "event", "monster", "trap", "treasure", "hazard", "boss"],
  8: ["entrance", "event", "monster", "trap", "treasure", "hazard", "safe", "boss"],
  9: ["entrance", "event", "monster", "trap", "treasure", "hazard", "safe", "secret", "boss"],
  10: ["entrance", "event", "monster", "trap", "treasure", "hazard", "safe", "secret", "monster", "boss"],
  11: ["entrance", "event", "monster", "trap", "treasure", "hazard", "safe", "secret", "monster", "treasure", "boss"],
  12: ["entrance", "corridor", "event", "monster", "trap", "treasure", "hazard", "safe", "secret", "monster", "treasure", "boss"],
};

const coastalZoneNames = [
  "Molo delle Barche Capovolte",
  "Magazzino del Sale",
  "Passerella Marcia",
  "Faro Spento",
  "Grotta della Marea",
  "Relitto Incagliato",
  "Banchina delle Casse",
  "Pontile dei Contrabbandieri",
  "Stiva Allagata",
  "Capanno delle Reti",
  "Scalo delle Lanterne",
  "Diga dei Gabbiani Neri",
];

const markerLabels = {
  entrance: "Ingresso",
  event: "Evento",
  monster: "Incontro",
  boss: "Boss",
  treasure: "Tesoro",
  trap: "Trappola",
  secret: "Segreto",
  hazard: "Pericolo",
  safe: "Rifugio",
  corridor: "Passaggio",
};

const biomeEncounterProfiles = {
  forest: {
    monster: ["Predone del sottobosco", 13, 18, "+4 lama corta", "1d6+2 perforanti", "Usa copertura tra radici e prova a spingere i PG verso rovi o trappole."],
    boss: ["Custode delle Radici Marce", 15, 72, "+6 artiglio di legno vivo", "2d8+4 contundenti", "Non insegue: chiude passaggi con radici e costringe il gruppo ad avvicinarsi."],
  },
  coastal: {
    monster: ["Contrabbandiere del molo", 13, 22, "+4 arpione corto", "1d8+2 perforanti", "Combatte da passerelle strette e prova a buttare i bersagli in acqua."],
    boss: ["Capitano della Stiva Allagata", 16, 84, "+7 sciabola salmastra", "2d8+4 taglienti", "Ordina ai minion di tagliare corde e separare il gruppo sulle passerelle."],
  },
  swamp: {
    monster: ["Cacciatore del pantano", 12, 24, "+4 lancia uncinata", "1d8+2 perforanti", "Resta nel fango alto e trascina i feriti verso acqua torbida."],
    boss: ["Matriarca delle Acque Nere", 15, 78, "+6 artiglio fangoso", "2d8+3 contundenti", "Fa avanzare nubi tossiche lente e protegge le vie di fuga sommerse."],
  },
  mountain: {
    monster: ["Predone del valico", 14, 26, "+5 piccozza", "1d8+3 perforanti", "Tiene le alture e forza prove rischiose vicino a crepacci o ponti sospesi."],
    boss: ["Guardiano della Cengia Spezzata", 17, 92, "+7 martello di roccia", "2d10+4 contundenti", "Spinge i nemici verso bordi esposti e rompe coperture con colpi pesanti."],
  },
  desert: {
    monster: ["Predone delle dune", 13, 20, "+4 lama curva", "1d6+2 taglienti", "Si muove dietro colonne e usa sabbia sollevata per coprire la ritirata."],
    boss: ["Custode della Tomba Calda", 16, 86, "+7 falce cerimoniale", "2d8+4 taglienti", "Attiva sigilli sul pavimento e costringe i PG a cambiare posizione."],
  },
  infernal: {
    monster: ["Armigero di brace", 14, 28, "+5 catena rovente", "1d8+3 fuoco", "Blocca corridoi stretti e punisce chi resta fermo vicino alla lava."],
    boss: ["Giudice delle Catene Rosse", 17, 96, "+8 maglio infernale", "2d10+5 fuoco", "Marca un bersaglio e lo costringe a scegliere tra danno e movimento."],
  },
  underdark: {
    monster: ["Sentinella cieca", 13, 24, "+4 artiglio pallido", "1d8+2 taglienti", "Reagisce al rumore e tende imboscate dove la luce non arriva."],
    boss: ["Voce del Lago Cieco", 16, 88, "+7 tentacolo d'ombra", "2d8+4 necrotici", "Spegne luci e usa eco false per dividere il gruppo."],
  },
};

function getEncounterProfile(biome, level, zoneType) {
  const profiles = biomeEncounterProfiles[biome] || biomeEncounterProfiles.forest;
  const source = zoneType === "boss" ? profiles.boss : profiles.monster;
  const levelBonus = level === "low" ? -4 : level === "high" ? 12 : level === "boss" ? 24 : 0;
  return {
    name: source[0],
    armorClass: source[1] + (zoneType === "boss" && level === "boss" ? 1 : 0),
    hitPoints: Math.max(8, source[2] + levelBonus),
    speed: biome === "coastal" || biome === "swamp" ? "9 m, nuoto 6 m" : "9 m",
    attack: source[3],
    damage: source[4],
    special: zoneType === "boss" ? "Tratto speciale: controlla il terreno una volta per round." : "Tratto speciale: vantaggio se attacca da copertura o terreno favorevole.",
    tactics: source[5],
    difficulty: zoneType === "boss" ? "Boss" : level === "low" ? "Facile" : level === "high" ? "Difficile" : "Media",
  };
}

function createTreasurePlayDetail(content, biome) {
  const locationByBiome = {
    forest: "sotto una radice cava",
    coastal: "in una cassa cerata sotto assi marce",
    swamp: "dentro un vaso sigillato nel fango",
    mountain: "in una nicchia dietro pietre fredde",
    desert: "sotto una lastra coperta di sabbia",
    infernal: "in uno scrigno caldo legato a catene",
    underdark: "tra funghi luminescenti secchi",
  };
  return {
    name: content.treasure?.split(":")[0] || "Ricompensa nascosta",
    location: locationByBiome[biome] || "in un nascondiglio vicino al centro della zona",
    value: biome === "coastal" ? "45 mo, una bussola scheggiata e una pozione minore" : "34 mo, una chiave annerita e una piccola gemma verde",
    effect: "Oggetto utile come indizio, merce rara o leva narrativa per la scena successiva.",
    dmNote: "Mettilo in vista solo dopo una ricerca attiva o dopo aver risolto il rischio della zona.",
  };
}

function createHazardPlayDetail(content, biome) {
  const triggerByBiome = {
    forest: "calpestare radici troppo chiare",
    coastal: "correre sulle assi bagnate",
    swamp: "smuovere il fango vicino alle bolle",
    mountain: "colpire o saltare vicino al bordo",
    desert: "toccare la lastra centrale",
    infernal: "restare nello stesso punto per un round intero",
    underdark: "fare rumore forte nel cunicolo",
  };
  return {
    name: content.trapDetail?.name || "Pericolo ambientale",
    trigger: triggerByBiome[biome] || "avanzare senza controllare il terreno",
    dc: "CD 12 Destrezza o Saggezza",
    effect: content.trapDetail?.effect || "Blocca movimento o separa il gruppo.",
    damage: content.trapDetail?.damage || "2d6 danni appropriati al bioma",
    counter: "Si evita rallentando, usando una corda, cercando indizi o descrivendo una soluzione prudente.",
  };
}

const connectionTextByBiome = {
  coastal: [
    ["molo", "Passerella bagnata", "Assi scivolose sopra acqua scura.", "Se si corre, una tavola cede e fa perdere posizione."],
    ["ponte", "Ponte di assi sul porto", "Il legno scricchiola mentre sotto batte la marea.", "Al secondo passaggio rapido puo spezzarsi una sezione."],
    ["scala", "Scaletta verso la stiva", "Una scala stretta scende tra corde salate e barili gonfi.", "Chi porta armature pesanti fa rumore evidente."],
    ["tunnel", "Tunnel sotto il magazzino", "Un passaggio basso odora di sale, muffa e contrabbando.", "Ottimo punto per un agguato o un inseguimento."],
    ["sentiero", "Barca legata a una fune", "Una piccola barca permette di tirarsi verso l'altra banchina.", "La fune puo essere tagliata o mollata."],
  ],
  swamp: [
    ["passerella", "Passerella marcia", "Tavole nere affondano nel fango a ogni passo.", "Un peso improvviso puo far cedere la passerella."],
    ["ponte", "Ponte di radici", "Radici intrecciate formano un arco sopra l'acqua torbida.", "Le radici si muovono se disturbate."],
    ["sentiero", "Sentiero nel fango", "Il terreno conserva impronte fresche e bolle lente.", "Il movimento e rumoroso e lascia tracce chiare."],
  ],
  mountain: [
    ["ponte", "Ponte sospeso", "Corde tese collegano due cenge battute dal vento.", "Ogni colpo forte puo far oscillare il passaggio."],
    ["crepaccio", "Crepaccio attraversabile", "Una fenditura stretta taglia la roccia.", "Saltare o passare in fretta richiede attenzione."],
    ["tunnel", "Tunnel nella roccia", "La galleria comprime suoni e odore di pietra bagnata.", "I rumori si sentono da molto lontano."],
  ],
  desert: [
    ["arco", "Arco semi-sepolto", "Colonne spezzate emergono dalla sabbia calda.", "Il vento puo coprire tracce o indizi."],
    ["corridoio", "Corridoio di tomba", "Una discesa di pietra porta sotto la duna.", "La sabbia filtra dall'alto a ogni vibrazione."],
    ["scala", "Scala sotto la sabbia", "Gradini consunti scendono in aria piu fredda.", "Un gradino falso puo bloccare la ritirata."],
  ],
  infernal: [
    ["ponte", "Ponte su lava", "Lastre nere galleggiano sopra calore vivo.", "Restare fermi troppo a lungo infligge pressione e paura."],
    ["cancello", "Cancello di ferro caldo", "Il metallo vibra come se respirasse.", "Aprirlo lascia un marchio o richiama attenzione."],
    ["arco", "Arco di ossidiana", "Rune rosse pulsano lungo il bordo tagliente.", "Una menzogna detta qui ha conseguenze."],
  ],
  forest: [
    ["sentiero", "Sentiero tra radici", "Radici alte creano una galleria naturale.", "Chi osserva trova segni di passaggio recente."],
    ["ponte", "Tronco caduto", "Un tronco muschiato supera un ruscello freddo.", "Il muschio rende il passaggio instabile."],
    ["arco", "Arco di rami", "Rami intrecciati sembrano indicare una soglia.", "Qualcosa ascolta chi passa sotto."],
  ],
  underdark: [
    ["tunnel", "Cunicolo stretto", "Pareti umide obbligano a procedere in fila.", "Perfetto per separare il gruppo."],
    ["ponte", "Ponte di pietra", "Una lama di roccia passa sopra il buio.", "La profondita sotto non restituisce eco."],
    ["crepaccio", "Crepaccio cieco", "Una spaccatura interrompe la via principale.", "Cadere qui significa sparire dalla vista."],
  ],
};

function clamp(value, min, max) {
  return Math.max(min, Math.min(value, max));
}

function normalizeZoneCount(value) {
  const numericValue = Number(value);
  return Number.isFinite(numericValue)
    ? clamp(Math.round(numericValue), 1, 12)
    : 8;
}

function normalizeOption(value, options, fallback) {
  return options.some((option) => option.id === value) ? value : fallback;
}

function createEmptyTiles() {
  return Array.from({ length: MAP_SIZE }, (_, y) =>
    Array.from({ length: MAP_SIZE }, (_, x) => ({
      id: `tile-${x}-${y}`,
      x,
      y,
      type: "empty",
      zoneId: null,
      connectionId: null,
      environment: null,
    }))
  );
}

function getTileTypeForZone(zoneType, biome) {
  if (biome === "coastal") {
    if (zoneType === "entrance") return "bridge";
    if (zoneType === "trap") return "trap";
    if (zoneType === "hazard") return "water";
    if (zoneType === "boss") return "boss";
    return "floor";
  }
  if (zoneType === "boss") return "boss";
  if (zoneType === "entrance") return "entrance";
  if (zoneType === "trap") return "trap";
  if (zoneType === "treasure") return "treasure";
  if (zoneType === "hazard") {
    if (biome === "infernal") return "lava";
    if (biome === "swamp" || biome === "coastal") return "water";
    return "hazard";
  }
  return "floor";
}

function getConnectionTileType(connection, biome) {
  if (connection.type === "secret") return "secret";
  if (
    connection.type === "bridge" ||
    connection.type === "passerella" ||
    biome === "swamp" ||
    biome === "coastal"
  ) return "bridge";
  return "corridor";
}

function getMarkerType(zoneType) {
  if (zoneType === "boss") return "boss";
  if (zoneType === "monster") return "monster";
  if (zoneType === "treasure") return "treasure";
  if (zoneType === "trap") return "trap";
  if (zoneType === "secret") return "secret";
  if (zoneType === "hazard") return "hazard";
  if (zoneType === "safe") return "safe";
  if (zoneType === "entrance") return "entrance";
  return "event";
}

function makeTilesForZone(zone) {
  const tiles = [];
  for (let y = zone.y; y < zone.y + zone.height; y += 1) {
    for (let x = zone.x; x < zone.x + zone.width; x += 1) {
      tiles.push({ x, y });
    }
  }
  return tiles;
}

function createMarker(zone, content, biome, level) {
  const markerType = getMarkerType(zone.type);
  const encounterProfile =
    markerType === "monster" || markerType === "boss"
      ? getEncounterProfile(biome, level, zone.type)
      : null;
  const treasureDetail = markerType === "treasure" || markerType === "boss"
    ? createTreasurePlayDetail(content, biome)
    : null;
  const hazardDetail =
    markerType === "trap" || markerType === "hazard"
      ? createHazardPlayDetail(content, biome)
      : null;
  const baseTitle = markerLabels[zone.type] || "Evento";
  const title =
    zone.type === "trap" && content.trapDetail?.name
      ? content.trapDetail.name
      : zone.type === "monster" && content.monsterName
        ? encounterProfile?.name || content.monsterName
        : zone.type === "boss" && content.boss
          ? encounterProfile?.name || content.boss
          : zone.type === "treasure" && content.treasure
            ? treasureDetail?.name || content.treasure.split(":")[0]
            : `${baseTitle} - ${zone.name}`;

  return {
    id: `marker-${zone.id}-${markerType}-1`,
    zoneId: zone.id,
    type: markerType,
    x: zone.centerX,
    y: zone.centerY,
    title,
    description:
      content.event ||
      content.monsters ||
      content.trap ||
      content.treasure ||
      content.hazard ||
      content.description,
    effect: hazardDetail?.effect || content.trapDetail?.effect || content.hazard || treasureDetail?.effect || "",
    difficulty: content.difficulty,
    damage: hazardDetail?.damage || encounterProfile?.damage || content.trapDetail?.damage || "",
    reward: treasureDetail?.value || content.treasure || "",
    dmNote: content.dmNote,
    detail: {
      zoneName: zone.name,
      encounterProfile,
      treasureDetail,
      hazardDetail,
      monsters: content.monsters,
      boss: content.boss,
      minions: content.minions,
      trap: content.trap,
      treasure: content.treasure,
      hazard: content.hazard,
      event: content.event,
      bossTwist: content.bossTwist,
    },
  };
}

function paintZone(tiles, zone, biome, environment) {
  const tileType = getTileTypeForZone(zone.type, biome);
  zone.tiles.forEach(({ x, y }) => {
    if (!tiles[y]?.[x]) return;
    tiles[y][x] = {
      ...tiles[y][x],
      type: tileType,
      zoneId: zone.id,
      environment,
    };
  });

  for (let y = zone.y - 1; y <= zone.y + zone.height; y += 1) {
    for (let x = zone.x - 1; x <= zone.x + zone.width; x += 1) {
      if (!tiles[y]?.[x] || tiles[y][x].type !== "empty") continue;
      tiles[y][x] = { ...tiles[y][x], type: "wall", environment };
    }
  }
}

function paintBiomeBackground(tiles, biome, environment) {
  if (biome === "coastal") {
    for (let y = 0; y < MAP_SIZE; y += 1) {
      for (let x = 0; x < MAP_SIZE; x += 1) {
        if (x >= 12 || y >= 13) {
          tiles[y][x] = { ...tiles[y][x], type: "water", environment };
        } else if (y === 12 && x % 2 === 0) {
          tiles[y][x] = { ...tiles[y][x], type: "bridge", environment };
        }
      }
    }
  }

  if (biome === "swamp") {
    for (let y = 0; y < MAP_SIZE; y += 1) {
      for (let x = 0; x < MAP_SIZE; x += 1) {
        if ((x + y) % 7 === 0) {
          tiles[y][x] = { ...tiles[y][x], type: "water", environment };
        }
      }
    }
  }

  if (biome === "infernal") {
    for (let y = 0; y < MAP_SIZE; y += 1) {
      for (let x = 0; x < MAP_SIZE; x += 1) {
        if (y >= 13 || (x === 0 && y % 3 === 0)) {
          tiles[y][x] = { ...tiles[y][x], type: "lava", environment };
        }
      }
    }
  }
}

function paintCorridorTile(tiles, x, y, connection, biome, environment) {
  if (!tiles[y]?.[x]) return;
  const existing = tiles[y][x];
  if (existing.zoneId) return;
  tiles[y][x] = {
    ...existing,
    type: getConnectionTileType(connection, biome),
    connectionId: connection.id,
    environment,
  };
}

function paintCorridor(tiles, from, to, connection, biome, environment) {
  const horizontalFirst = Math.abs(from.centerX - to.centerX) >= Math.abs(from.centerY - to.centerY);

  if (horizontalFirst) {
    const minX = Math.min(from.centerX, to.centerX);
    const maxX = Math.max(from.centerX, to.centerX);
    for (let x = minX; x <= maxX; x += 1) paintCorridorTile(tiles, x, from.centerY, connection, biome, environment);
    const minY = Math.min(from.centerY, to.centerY);
    const maxY = Math.max(from.centerY, to.centerY);
    for (let y = minY; y <= maxY; y += 1) paintCorridorTile(tiles, to.centerX, y, connection, biome, environment);
  } else {
    const minY = Math.min(from.centerY, to.centerY);
    const maxY = Math.max(from.centerY, to.centerY);
    for (let y = minY; y <= maxY; y += 1) paintCorridorTile(tiles, from.centerX, y, connection, biome, environment);
    const minX = Math.min(from.centerX, to.centerX);
    const maxX = Math.max(from.centerX, to.centerX);
    for (let x = minX; x <= maxX; x += 1) paintCorridorTile(tiles, x, to.centerY, connection, biome, environment);
  }
}

function makeConnection(from, to, index, biome) {
  const templates = connectionTextByBiome[biome] || [
    ["porta", "Porta di legno gonfia", "Il legno umido gratta sul pavimento.", "Aprirla in fretta fa rumore."],
    ["corridoio", "Corridoio con corrente d'aria", "Una corrente fredda arriva dalla zona successiva.", "La corrente porta odori e suoni utili."],
    ["tunnel", "Tunnel stretto", "Il passaggio obbliga a procedere compatti.", "Un buon posto per pressione o scelta tattica."],
    ["passaggio segreto", "Passaggio nascosto", "Una fessura rivela una via meno evidente.", "Premia chi cerca dettagli."],
  ];
  const template = from.type === "secret" || to.type === "secret"
    ? ["passaggio segreto", "Passaggio segreto", "Una via nascosta collega le due aree.", "Rivelalo solo con indizi o buona esplorazione."]
    : templates[index % templates.length];
  const type = from.type === "secret" || to.type === "secret"
    ? "secret"
    : biome === "coastal"
      ? index % 3 === 1 ? "passerella" : "bridge"
      : index % 4 === 2
      ? "bridge"
      : "corridor";
  const title = template[1];
  const description = template[2];

  return {
    id: `connection-${from.id}-${to.id}`,
    from: from.id,
    to: to.id,
    type: template[0] || type,
    title,
    label: title,
    description,
    danger: type === "bridge" || type === "passerella" ? "moderato" : "basso",
    dangerLevel: type === "bridge" || type === "passerella" ? "moderato" : "basso",
    effect: template[3],
    check: type === "bridge" || type === "passerella" ? "Destrezza CD 12" : "Saggezza o Indagare CD 12",
    failure: type === "bridge" || type === "passerella"
      ? "Il personaggio cade prono, perde tempo o fa rumore attirando attenzione."
      : "Il gruppo avanza comunque, ma perde un indizio o rivela la propria presenza.",
    dmNote: "Usa questo passaggio per ritmo: rumore, scelta, posizione o rischio prima della prossima zona.",
    secret: type === "secret",
  };
}

function buildZones(zoneCount, biomeId, environment, level) {
  const slotOrder = shortSlotOrders[zoneCount] || shortSlotOrders[8];
  const types = zoneTypePlans[zoneCount] || zoneTypePlans[8];

  return slotOrder.map((slotIndex, index) => {
    const slot = zoneSlots[slotIndex];
    const type = types[index] || "event";
    const content = generateZoneContent(type, biomeId, environment, level);
    const name = biomeId === "coastal"
      ? coastalZoneNames[index % coastalZoneNames.length]
      : content.name;
    const centerX = slot.x + Math.floor(slot.width / 2);
    const centerY = slot.y + Math.floor(slot.height / 2);
    const zone = {
      id: `zone-${index + 1}`,
      index: index + 1,
      order: index + 1,
      type,
      shape: type === "boss" ? "boss-room" : "tile-room",
      icon: getZoneIcon(type),
      name,
      x: slot.x,
      y: slot.y,
      width: slot.width,
      height: slot.height,
      centerX,
      centerY,
      markerX: centerX,
      markerY: centerY,
      tiles: [],
      connections: [],
      markers: [],
      ...content,
    };
    zone.name = name;
    zone.tiles = makeTilesForZone(zone);
    zone.encounterProfile =
      type === "monster" || type === "boss"
        ? getEncounterProfile(biomeId, level, type)
        : null;
    zone.treasureDetail =
      type === "treasure" || type === "boss"
        ? createTreasurePlayDetail(content, biomeId)
        : null;
    zone.hazardDetail =
      type === "trap" || type === "hazard"
        ? createHazardPlayDetail(content, biomeId)
        : null;
    zone.markers = [createMarker(zone, content, biomeId, level)];
    return zone;
  });
}

function connectZones(zones, tiles, biome, environment) {
  const connections = [];
  const sideZoneIds = new Set(
    zones.length >= 8
      ? zones
        .filter((zone, index) =>
          index > 1 &&
          index < zones.length - 1 &&
          (zone.type === "safe" || zone.type === "secret" || (zone.type === "treasure" && index > 5))
        )
        .slice(0, 3)
        .map((zone) => zone.id)
      : []
  );
  const mainZones = zones.filter((zone) => !sideZoneIds.has(zone.id));
  const mainPath = mainZones.map((zone) => zone.id);
  const sideBranches = [];

  for (let index = 0; index < mainZones.length - 1; index += 1) {
    const from = mainZones[index];
    const to = mainZones[index + 1];
    const connection = makeConnection(from, to, index, biome);
    from.connections.push(to.id);
    to.connections.push(from.id);
    connections.push(connection);
    paintCorridor(tiles, from, to, connection, biome, environment);
  }

  zones
    .filter((zone) => sideZoneIds.has(zone.id))
    .forEach((sideZone) => {
      const sideIndex = zones.findIndex((zone) => zone.id === sideZone.id);
      const from =
        [...zones]
          .slice(0, sideIndex)
          .reverse()
          .find((zone) => !sideZoneIds.has(zone.id)) ||
        mainZones[0];
      if (!from) return;
      const connection = makeConnection(from, sideZone, connections.length, biome);
      from.connections.push(sideZone.id);
      sideZone.connections.push(from.id);
      connections.push(connection);
      sideBranches.push({ from: from.id, to: sideZone.id, connectionId: connection.id });
      paintCorridor(tiles, from, sideZone, connection, biome, environment);
    });

  return { connections, mainPath, sideBranches };
}

export function generateTileAdventureMap(options = {}) {
  const biomeId = mapBiomes[options.biome] ? options.biome : "generic";
  const environment = normalizeOption(options.environment, mapEnvironmentOptions, "dungeon");
  const level = normalizeOption(options.level, mapLevelOptions, "mid");
  const zoneCount = normalizeZoneCount(options.zoneCount);
  const biome = mapBiomes[biomeId] || { ...mapBiomes.forest, label: "Generica" };
  const tiles = createEmptyTiles();
  const zones = buildZones(zoneCount, biomeId, environment, level);

  paintBiomeBackground(tiles, biomeId, environment);
  zones.forEach((zone) => paintZone(tiles, zone, biomeId, environment));
  const { connections, mainPath, sideBranches } = connectZones(zones, tiles, biomeId, environment);

  return {
    id: `tile-map-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    title: `${environment === "cave" ? "Caverna" : environment === "camp" ? "Accampamento" : "Mappa"} di ${biome.label}`,
    width: MAP_SIZE,
    height: MAP_SIZE,
    biome: biomeId,
    biomeLabel: biome.label,
    environment,
    environmentLabel: mapEnvironmentOptions.find((option) => option.id === environment)?.label || "Dungeon",
    level,
    levelLabel: mapLevelOptions.find((option) => option.id === level)?.label || "Medio livello",
    createdAt: new Date().toISOString(),
    tiles,
    zones,
    connections,
    mainPath,
    sideBranches,
  };
}
