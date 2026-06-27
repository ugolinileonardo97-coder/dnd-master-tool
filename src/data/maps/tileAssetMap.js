const base = "/map-tiles";

export const TILE_ASSETS = {
  generic: {
    empty: `${base}/generic/empty.png`,
    floor: `${base}/generic/floor-stone.png`,
    wall: `${base}/generic/wall-stone.png`,
    corridor: `${base}/generic/corridor-straight.png`,
    door: `${base}/generic/door-wood.png`,
    entrance: `${base}/generic/door-wood.png`,
    room: `${base}/generic/floor-stone.png`,
    boss: `${base}/dungeon/dungeon-boss-room.png`,
    trap: `${base}/generic/floor-stone.png`,
    treasure: `${base}/generic/floor-stone.png`,
    bridge: `${base}/generic/corridor-straight.png`,
    secret: `${base}/generic/secret-door.png`,
    hazard: `${base}/generic/floor-stone.png`,
    safe: `${base}/generic/floor-stone.png`,
  },
  dungeon: {
    floor: `${base}/dungeon/dungeon-floor.png`,
    wall: `${base}/dungeon/dungeon-wall.png`,
    corridor: `${base}/generic/corridor-straight.png`,
    door: `${base}/dungeon/dungeon-door-iron.png`,
    entrance: `${base}/dungeon/dungeon-door-iron.png`,
    boss: `${base}/dungeon/dungeon-boss-room.png`,
    trap: `${base}/dungeon/dungeon-trap-floor.png`,
    treasure: `${base}/dungeon/dungeon-treasure-room.png`,
  },
  cave: {
    floor: `${base}/cave/cave-floor.png`,
    wall: `${base}/cave/cave-wall.png`,
    corridor: `${base}/cave/cave-corridor.png`,
    door: `${base}/cave/cave-entrance.png`,
    entrance: `${base}/cave/cave-entrance.png`,
    boss: `${base}/cave/cave-boss-chamber.png`,
    bridge: `${base}/cave/cave-bridge-rock.png`,
    hazard: `${base}/cave/cave-crevasse.png`,
  },
  forest: {
    floor: `${base}/forest/forest-ground.png`,
    wall: `${base}/forest/forest-roots-wall.png`,
    corridor: `${base}/forest/forest-path.png`,
    door: `${base}/forest/forest-entrance-roots.png`,
    entrance: `${base}/forest/forest-entrance-roots.png`,
    room: `${base}/forest/forest-clearing.png`,
    boss: `${base}/forest/forest-boss-grove.png`,
    bridge: `${base}/forest/forest-fallen-log.png`,
    hazard: `${base}/forest/forest-stream.png`,
    trap: `${base}/forest/forest-trap-roots.png`,
  },
  swamp: {
    floor: `${base}/swamp/swamp-mud.png`,
    wall: `${base}/swamp/swamp-reeds-wall.png`,
    corridor: `${base}/swamp/swamp-boardwalk.png`,
    bridge: `${base}/swamp/swamp-bridge-rotten.png`,
    door: `${base}/swamp/swamp-rotten-door.png`,
    entrance: `${base}/swamp/swamp-rotten-door.png`,
    boss: `${base}/swamp/swamp-boss-temple.png`,
    water: `${base}/swamp/swamp-water.png`,
    hazard: `${base}/swamp/swamp-gas-pool.png`,
    trap: `${base}/swamp/swamp-trap-bog.png`,
  },
  desert: {
    floor: `${base}/desert/sand-floor.png`,
    wall: `${base}/desert/desert-ruin-wall.png`,
    corridor: `${base}/desert/desert-stone-floor.png`,
    door: `${base}/desert/desert-tomb-door.png`,
    entrance: `${base}/desert/desert-tomb-door.png`,
    boss: `${base}/desert/desert-boss-tomb.png`,
    hazard: `${base}/desert/desert-trap-sand.png`,
    trap: `${base}/desert/desert-trap-sand.png`,
  },
  mountain: {
    floor: `${base}/mountain/rock-floor.png`,
    wall: `${base}/mountain/mountain-wall.png`,
    corridor: `${base}/mountain/mountain-path.png`,
    bridge: `${base}/mountain/mountain-suspended-bridge.png`,
    door: `${base}/mountain/mountain-cave-entrance.png`,
    entrance: `${base}/mountain/mountain-cave-entrance.png`,
    boss: `${base}/mountain/mountain-boss-peak.png`,
    hazard: `${base}/mountain/mountain-crevasse.png`,
    trap: `${base}/mountain/mountain-trap-rockslide.png`,
  },
  coastal: {
    floor: `${base}/coast/coast-sand-wet.png`,
    wall: `${base}/coast/coast-rock-floor.png`,
    corridor: `${base}/coast/coast-dock.png`,
    bridge: `${base}/coast/coast-bridge-planks.png`,
    door: `${base}/coast/coast-cave-entrance.png`,
    entrance: `${base}/coast/coast-cave-entrance.png`,
    boss: `${base}/coast/coast-boss-cavern.png`,
    water: `${base}/coast/coast-water.png`,
    hazard: `${base}/coast/coast-tide-trap.png`,
    trap: `${base}/coast/coast-tide-trap.png`,
  },
  arctic: {
    floor: `${base}/arctic/ice-floor.png`,
    wall: `${base}/arctic/arctic-wall-ice.png`,
    corridor: `${base}/arctic/snow-floor.png`,
    door: `${base}/arctic/arctic-frozen-door.png`,
    entrance: `${base}/arctic/arctic-cave-entrance.png`,
    boss: `${base}/arctic/arctic-boss-hall.png`,
    bridge: `${base}/arctic/arctic-ice-bridge.png`,
    hazard: `${base}/arctic/arctic-crevasse.png`,
    trap: `${base}/arctic/arctic-trap-thin-ice.png`,
  },
  ruins: {
    floor: `${base}/ruins/ruin-floor.png`,
    wall: `${base}/ruins/ruin-wall.png`,
    corridor: `${base}/ruins/ruin-floor.png`,
    door: `${base}/ruins/ruin-door-stone.png`,
    entrance: `${base}/ruins/ruin-arch-broken.png`,
    boss: `${base}/ruins/ruin-boss-sanctum.png`,
    secret: `${base}/ruins/ruin-secret-passage.png`,
    trap: `${base}/ruins/ruin-trap-ancient.png`,
    treasure: `${base}/ruins/ruin-treasure-cache.png`,
  },
  infernal: {
    floor: `${base}/infernal/infernal-floor.png`,
    wall: `${base}/infernal/infernal-wall.png`,
    corridor: `${base}/infernal/infernal-chain-floor.png`,
    bridge: `${base}/infernal/infernal-chain-bridge.png`,
    door: `${base}/infernal/infernal-gate.png`,
    entrance: `${base}/infernal/infernal-gate.png`,
    boss: `${base}/infernal/infernal-boss-throne.png`,
    lava: `${base}/infernal/lava.png`,
    hazard: `${base}/infernal/lava.png`,
    trap: `${base}/infernal/infernal-trap-fire.png`,
  },
  urban: {
    floor: `${base}/city/city-street.png`,
    wall: `${base}/city/city-warehouse-floor.png`,
    corridor: `${base}/city/city-alley.png`,
    door: `${base}/city/city-cellar-door.png`,
    entrance: `${base}/city/city-gate.png`,
    boss: `${base}/city/city-boss-hideout.png`,
    trap: `${base}/city/city-trap-ambush.png`,
  },
};

export const MARKER_ASSETS = {
  monster: `${base}/icons/monster.png`,
  boss: `${base}/icons/boss.png`,
  treasure: `${base}/icons/treasure.png`,
  trap: `${base}/icons/trap.png`,
  event: `${base}/icons/event.png`,
  secret: `${base}/icons/secret.png`,
  hazard: `${base}/icons/hazard.png`,
  safe: `${base}/icons/safe.png`,
  entrance: `${base}/icons/entrance.png`,
  door: `${base}/icons/door.png`,
  bridge: `${base}/icons/bridge.png`,
  water: `${base}/icons/water.png`,
};

export function normalizeTileBiome(biome, environment) {
  if (biome === "coast") return "coastal";
  if (biome === "city") return "urban";
  if (TILE_ASSETS[biome]) return biome;
  if (TILE_ASSETS[environment]) return environment;
  return "generic";
}

export function getTileAsset(biome, tileType, environment = "generic") {
  const normalizedBiome = normalizeTileBiome(biome, environment);
  const biomeAssets = TILE_ASSETS[normalizedBiome] || TILE_ASSETS.generic;
  return (
    biomeAssets[tileType] ||
    biomeAssets.floor ||
    TILE_ASSETS.generic[tileType] ||
    TILE_ASSETS.generic.floor
  );
}

export function getMarkerAsset(markerType) {
  return MARKER_ASSETS[markerType] || MARKER_ASSETS.event;
}
