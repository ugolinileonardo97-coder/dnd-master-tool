import {
  mapBiomes,
  mapEnvironmentOptions,
  mapLevelOptions,
  zoneTypeMeta,
} from "../data/maps/mapData";
import { pickSeeded } from "./mapMonsterPicker";

const environmentWeights = {
  dungeon: ["entrance", "corridor", "monster", "trap", "event", "treasure", "secret", "hazard"],
  cave: ["entrance", "corridor", "hazard", "monster", "event", "treasure", "secret", "safe"],
  ruin: ["entrance", "event", "trap", "monster", "treasure", "secret", "hazard", "corridor"],
  camp: ["entrance", "safe", "event", "monster", "treasure", "hazard", "trap", "secret"],
  city: ["entrance", "event", "safe", "secret", "trap", "monster", "treasure", "corridor"],
  wild: ["entrance", "hazard", "event", "monster", "safe", "treasure", "trap", "secret"],
};

const shapeByType = {
  entrance: ["room", "clearing", "cave"],
  corridor: ["corridor", "bridge"],
  monster: ["room", "cave", "clearing"],
  treasure: ["room", "secret"],
  event: ["room", "clearing", "cave"],
  trap: ["corridor", "room"],
  secret: ["secret", "cave"],
  boss: ["boss"],
  hazard: ["cave", "clearing", "bridge"],
  safe: ["clearing", "room"],
};

const markerIcons = {
  monster: "●",
  treasure: "◆",
  trap: "▲",
  event: "✦",
  boss: "♛",
  hazard: "≈",
  entrance: "▥",
  safe: "✚",
  secret: "◈",
};

function randomItem(items) {
  if (!items?.length) return "";
  return items[Math.floor(Math.random() * items.length)];
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function normalizeOption(value, options, fallback) {
  return options.some((option) => option.id === value) ? value : fallback;
}

function getDifficulty(level, zoneType) {
  if (zoneType === "boss") return "Boss";
  if (zoneType === "safe") return "Semplice";
  if (level === "low") return zoneType === "monster" || zoneType === "trap" ? "Facile" : "Semplice";
  if (level === "high") return zoneType === "monster" || zoneType === "hazard" ? "Difficile" : "Medio";
  if (level === "boss") return zoneType === "monster" || zoneType === "trap" ? "Difficile" : "Medio";
  return zoneType === "monster" || zoneType === "trap" ? "Medio" : "Facile";
}

function makeTitle(biome, environment) {
  const environmentLabel =
    mapEnvironmentOptions.find((option) => option.id === environment)?.label || "Mappa";
  return `${environmentLabel} di ${biome.label}`;
}

function getGridShape(zoneCount) {
  if (zoneCount <= 3) return { columns: Math.max(1, zoneCount), rows: 1 };
  return zoneCount > 9 ? { columns: 4, rows: 3 } : { columns: 3, rows: 3 };
}

function getCellKey(row, column) {
  return `${row}-${column}`;
}

function createTileLayout(zoneCount) {
  const { columns, rows } = getGridShape(zoneCount);
  if (zoneCount === 1) {
    return {
      columns,
      rows,
      slots: [{ row: 0, column: 0, pathRole: "entrance", pathIndex: 0 }],
    };
  }

  const entranceRow = Math.floor(Math.random() * rows);
  const bossRow = Math.floor(Math.random() * rows);
  const mainPath = [];
  let currentRow = entranceRow;

  for (let column = 0; column < columns; column += 1) {
    mainPath.push({ row: currentRow, column, pathRole: column === 0 ? "entrance" : "main", pathIndex: mainPath.length });
    if (column < columns - 1 && currentRow !== bossRow && Math.random() > 0.35) {
      currentRow += currentRow < bossRow ? 1 : -1;
      mainPath.push({ row: currentRow, column, pathRole: "bend", pathIndex: mainPath.length });
    }
  }

  mainPath[mainPath.length - 1] = { row: bossRow, column: columns - 1, pathRole: "boss", pathIndex: mainPath.length - 1 };

  const occupied = new Map();
  mainPath.forEach((slot) => occupied.set(getCellKey(slot.row, slot.column), slot));

  const optionalCells = shuffle(
    Array.from({ length: rows }, (_, row) =>
      Array.from({ length: columns }, (_, column) => ({ row, column, pathRole: "branch", pathIndex: 999 }))
    ).flat()
  ).filter((slot) => !occupied.has(getCellKey(slot.row, slot.column)));

  while (occupied.size < zoneCount && optionalCells.length) {
    const next = optionalCells.shift();
    occupied.set(getCellKey(next.row, next.column), next);
  }

  const orderedSlots = [...occupied.values()].sort(
    (a, b) => a.pathIndex - b.pathIndex || a.column - b.column || a.row - b.row
  );

  const selectedSlots = orderedSlots.slice(0, zoneCount);
  const bossSlot = orderedSlots.find((slot) => slot.pathRole === "boss");
  if (
    bossSlot &&
    zoneCount > 1 &&
    !selectedSlots.some((slot) => slot.row === bossSlot.row && slot.column === bossSlot.column)
  ) {
    selectedSlots[selectedSlots.length - 1] = bossSlot;
  }

  return {
    columns,
    rows,
    slots: selectedSlots,
  };
}

function getShape(type, environment) {
  if (environment === "cave" && type !== "corridor") return randomItem(["cave", "cave", "room"]);
  if (environment === "wild" && type !== "corridor") return randomItem(["clearing", "clearing", "cave"]);
  if (environment === "camp" && type !== "corridor") return randomItem(["clearing", "room"]);
  return randomItem(shapeByType[type] || ["room"]);
}

function createMarkers(zoneType, level) {
  const counts = {
    entrance: 1,
    corridor: 1,
    monster: level === "low" ? 2 : level === "boss" ? 4 : 3,
    treasure: level === "low" ? 1 : 2,
    event: 1,
    trap: level === "high" || level === "boss" ? 3 : 2,
    secret: 1,
    boss: 4,
    hazard: 2,
    safe: 1,
  };
  const count = counts[zoneType] || 1;

  return Array.from({ length: count }, (_, index) => ({
    id: `marker-${zoneType}-${index}`,
    kind: zoneType,
    icon: markerIcons[zoneType] || "•",
    x: 28 + Math.random() * 44,
    y: 30 + Math.random() * 40,
  }));
}

function getEncounterText(encounter, level) {
  if (!encounter) return "";
  return encounter[level] || encounter.mid || encounter.low || encounter.name;
}

function buildDescription(zoneType, roomName, biome, environment, detail) {
  const environmentLabel =
    mapEnvironmentOptions.find((option) => option.id === environment)?.label || "mappa";
  const base = `${roomName}. ${detail}. Ambiente: ${environmentLabel.toLowerCase()} in ${biome.label.toLowerCase()}.`;

  const suffix = {
    entrance: "L'accesso dice subito ai giocatori che tipo di pericolo li aspetta.",
    corridor: "Il passaggio serve per ritmo, imboscate e scelte di posizione.",
    monster: "La stanza premia chi legge coperture, rumori e vie di fuga.",
    treasure: "Il bottino e visibile, ma non necessariamente sicuro.",
    event: "Qui la scena cambia tono: indizio, dialogo, rumore o scelta morale.",
    trap: "Dai un indizio prima dello scatto, poi lascia spazio a decisioni rapide.",
    secret: "Il segreto dovrebbe premiare osservazione, mappa o intuizione.",
    boss: "La stanza ha un centro scenico e almeno un modo per alterare lo scontro.",
    hazard: "Il terreno e il vero avversario, anche prima dei mostri.",
    safe: "Un respiro breve, non una garanzia assoluta.",
  };

  return `${base} ${suffix[zoneType] || suffix.event}`;
}

export function getZoneIcon(type) {
  return zoneTypeMeta[type]?.icon || "✦";
}

export function generateZoneContent(
  zoneType,
  biomeId,
  environment = "dungeon",
  level = "mid",
  generationContext = {}
) {
  const biome = mapBiomes[biomeId] || mapBiomes.forest;
  const seedBase = `${generationContext.mapSeed || "legacy"}-${biomeId}-${environment}-${level}-${generationContext.zoneIndex || 0}`;
  const bossRoom = pickSeeded(biome.bossRooms, `${seedBase}-boss-room`) || randomItem(biome.bossRooms);
  const encounter =
    pickSeeded(biome.monsterEncounters, `${seedBase}-encounter`) ||
    randomItem(biome.monsterEncounters);
  const trap = pickSeeded(biome.traps, `${seedBase}-trap`) || randomItem(biome.traps);
  const treasure =
    pickSeeded(biome.treasures, `${seedBase}-treasure`) || randomItem(biome.treasures);
  const event = pickSeeded(biome.events, `${seedBase}-event`) || randomItem(biome.events);
  const environmentalDetail =
    pickSeeded(biome.environmentalDetails, `${seedBase}-detail`) ||
    randomItem(biome.environmentalDetails);
  const entranceVisual =
    pickSeeded(biome.entranceVisuals, `${seedBase}-entrance`) ||
    randomItem(biome.entranceVisuals);
  const roomName =
    zoneType === "boss"
      ? bossRoom.name
      : pickSeeded(biome.roomNames, `${seedBase}-room`) || randomItem(biome.roomNames);

  return {
    name: roomName,
    entranceVisual: zoneType === "entrance" ? entranceVisual : "",
    difficulty: getDifficulty(level, zoneType),
    description: buildDescription(zoneType, roomName, biome, environment, environmentalDetail),
    event: zoneType === "event" ? event : "",
    monsters: zoneType === "monster" || zoneType === "boss" ? getEncounterText(encounter, level) : "",
    monsterName: encounter?.name || "",
    treasure: zoneType === "treasure" || zoneType === "boss" ? `${treasure.name}: ${treasure.description}` : "",
    trap: zoneType === "trap" ? `${trap.name}: ${trap.description} Effetto: ${trap.effect}` : "",
    trapDetail: zoneType === "trap" || zoneType === "hazard" ? trap : null,
    hazard: zoneType === "hazard" || zoneType === "boss" ? `${trap.name}. ${trap.effect}` : "",
    boss: zoneType === "boss" ? bossRoom.boss : "",
    minions: zoneType === "boss" ? bossRoom.minions : "",
    bossTwist: zoneType === "boss" ? bossRoom.twist : "",
    environmentalDetail,
    dmNote:
      zoneType === "boss"
        ? `Boss: ${bossRoom.boss}. Pericolo: ${bossRoom.hazard}. Tesoro: ${bossRoom.treasure}.`
        : trap?.dmNote || "Offri almeno una scelta chiara: avanzare, aggirare, trattare o indagare.",
  };
}

function areAdjacent(zoneA, zoneB) {
  const rowDiff = Math.abs(zoneA.row - zoneB.row);
  const columnDiff = Math.abs(zoneA.column - zoneB.column);
  return rowDiff + columnDiff === 1;
}

export function createMapConnections(zones, biomeId) {
  const biome = mapBiomes[biomeId] || mapBiomes.forest;
  const connections = [];
  const connectedZones = zones.map((zone) => ({ ...zone, connections: [] }));

  function addConnection(fromIndex, toIndex, forceSecret = false) {
    const from = connectedZones[fromIndex];
    const to = connectedZones[toIndex];
    if (!from || !to) return;
    if (connections.some((connection) => connection.from === from.id && connection.to === to.id)) return;

    const template = forceSecret
      ? biome.connectionTypes.find((item) => item.secret) || randomItem(biome.connectionTypes)
      : randomItem(biome.connectionTypes);
    const type = forceSecret ? "passaggio segreto" : template.type;

    from.connections.push(to.id);
    connections.push({
      id: `connection-${from.id}-${to.id}`,
      from: from.id,
      to: to.id,
      type,
      label: template.label,
      dangerLevel: template.dangerLevel,
      secret: forceSecret || Boolean(template.secret),
    });
  }

  const orderedPath = connectedZones
    .filter((zone) => zone.pathRole === "entrance" || zone.pathRole === "main" || zone.pathRole === "bend" || zone.pathRole === "boss")
    .sort((a, b) => a.pathIndex - b.pathIndex);

  for (let index = 0; index < orderedPath.length - 1; index += 1) {
    const fromIndex = connectedZones.findIndex((zone) => zone.id === orderedPath[index].id);
    const toIndex = connectedZones.findIndex((zone) => zone.id === orderedPath[index + 1].id);
    if (areAdjacent(orderedPath[index], orderedPath[index + 1])) addConnection(fromIndex, toIndex);
  }

  connectedZones.forEach((zone, index) => {
    if (zone.connections.length || zone.pathRole !== "branch") return;
    const neighborIndex = connectedZones.findIndex(
      (candidate) => candidate.id !== zone.id && areAdjacent(zone, candidate)
    );
    if (neighborIndex >= 0) addConnection(Math.min(index, neighborIndex), Math.max(index, neighborIndex));
  });

  const secretFromIndex = connectedZones.findIndex((zone) => zone.type === "secret");
  if (secretFromIndex >= 0 && Math.random() > 0.45) {
    const targetIndex = connectedZones.findIndex(
      (zone, index) => index !== secretFromIndex && areAdjacent(zone, connectedZones[secretFromIndex])
    );
    if (targetIndex >= 0) addConnection(Math.min(secretFromIndex, targetIndex), Math.max(secretFromIndex, targetIndex), true);
  }

  return { zones: connectedZones, connections };
}

export function generateMapZones(options = {}) {
  const biome = normalizeOption(options.biome, Object.keys(mapBiomes).map((id) => ({ id })), "forest");
  const environment = normalizeOption(options.environment, mapEnvironmentOptions, "dungeon");
  const level = normalizeOption(options.level, mapLevelOptions, "mid");
  const numericZoneCount = Number(options.zoneCount);
  const zoneCount = Number.isFinite(numericZoneCount)
    ? Math.max(1, Math.min(Math.round(numericZoneCount), 12))
    : 8;
  const weightedTypes = shuffle(environmentWeights[environment] || environmentWeights.dungeon);
  const layout = createTileLayout(zoneCount);

  const types = Array.from({ length: zoneCount }, (_, index) => weightedTypes[index % weightedTypes.length]);
  types[0] = "entrance";
  if (zoneCount > 1 && !types.includes("event")) types[1] = "event";
  if (zoneCount > 2 && !types.some((type) => ["monster", "trap", "hazard"].includes(type))) types[2] = "monster";
  if (zoneCount > 1) types[types.length - 1] = "boss";

  if (!types.includes("safe") && zoneCount > 7 && Math.random() > 0.45) types[Math.min(3, zoneCount - 2)] = "safe";

  const slots = layout.slots.sort((a, b) => {
    if (a.pathRole === "entrance") return -1;
    if (b.pathRole === "entrance") return 1;
    if (a.pathRole === "boss") return 1;
    if (b.pathRole === "boss") return -1;
    return a.pathIndex - b.pathIndex || a.column - b.column || a.row - b.row;
  });

  const zones = slots.map((slot, index) => {
    const type = slot.pathRole === "entrance" ? "entrance" : slot.pathRole === "boss" ? types[types.length - 1] : types[index];
    const shape = getShape(type, environment);
    const content = generateZoneContent(type, biome, environment, level);
    return {
      id: `zone-${index + 1}`,
      order: index + 1,
      type,
      shape,
      icon: getZoneIcon(type),
      row: slot.row,
      column: slot.column,
      pathRole: slot.pathRole,
      cellKey: getCellKey(slot.row, slot.column),
      markers: createMarkers(type, level),
      ...content,
    };
  });

  return { ...createMapConnections(zones, biome), columns: layout.columns, rows: layout.rows };
}

export function generateAdventureMap(options = {}) {
  const biomeId = normalizeOption(options.biome, Object.keys(mapBiomes).map((id) => ({ id })), "forest");
  const environment = normalizeOption(options.environment, mapEnvironmentOptions, "dungeon");
  const level = normalizeOption(options.level, mapLevelOptions, "mid");
  const biome = mapBiomes[biomeId] || mapBiomes.forest;
  const generated = generateMapZones({ ...options, biome: biomeId, environment, level });

  return {
    id: `map-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    title: makeTitle(biome, environment),
    biome: biomeId,
    biomeLabel: biome.label,
    biomePalette: biome.palette,
    environment,
    environmentLabel:
      mapEnvironmentOptions.find((option) => option.id === environment)?.label || "Dungeon",
    level,
    levelLabel: mapLevelOptions.find((option) => option.id === level)?.label || "Medio livello",
    createdAt: new Date().toISOString(),
    zones: generated.zones,
    connections: generated.connections,
    columns: generated.columns,
    rows: generated.rows,
  };
}
