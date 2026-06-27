import { useEffect, useMemo, useState } from "react";
import { generateTileAdventureMap } from "../../utils/tileMapGenerator";
import { MapCanvas } from "./MapCanvas";
import { MapControls } from "./MapControls";
import { MapDetailPanel } from "./MapDetailPanel";
import "./MapSection.css";

const LEGACY_STORAGE_KEY = "dnd-shop-generated-map-v1";

function isValidSavedMap(map) {
  return map?.zones?.length && map?.mainPath?.length;
}

function getMapStorageKey(sessionId) {
  return `${LEGACY_STORAGE_KEY}-${sessionId || "default"}`;
}

function loadSavedMap(storageKey) {
  try {
    const savedMap = localStorage.getItem(storageKey);
    const parsedMap = savedMap ? JSON.parse(savedMap) : null;
    if (isValidSavedMap(parsedMap)) return parsedMap;

    const legacyMap = localStorage.getItem(LEGACY_STORAGE_KEY);
    const parsedLegacyMap = legacyMap ? JSON.parse(legacyMap) : null;
    if (isValidSavedMap(parsedLegacyMap)) {
      localStorage.setItem(storageKey, JSON.stringify(parsedLegacyMap));
      return parsedLegacyMap;
    }

    return null;
  } catch {
    return null;
  }
}

function saveMap(map, storageKey) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(map));
  } catch {
    // The generator still works if storage is not available.
  }
}

function normalizeZoneCount(value) {
  const numericValue = Number(value);
  if (!Number.isFinite(numericValue) || numericValue <= 0) return 8;
  return Math.max(1, Math.min(Math.round(numericValue), 12));
}

export function MapGenerator({ compact = false, sessionId = "default" }) {
  const storageKey = useMemo(() => getMapStorageKey(sessionId), [sessionId]);
  const savedMap = useMemo(() => loadSavedMap(storageKey), [storageKey]);
  const [options, setOptions] = useState({
    biome: savedMap?.biome || "forest",
    environment: savedMap?.environment || "dungeon",
    level: savedMap?.level || "mid",
    zoneCount: normalizeZoneCount(savedMap?.zones?.length || 8),
  });
  const [currentMap, setCurrentMap] = useState(
    savedMap || generateTileAdventureMap(options)
  );
  const [selectedZoneId, setSelectedZoneId] = useState(
    currentMap.zones[0]?.id || ""
  );
  const [selectedMarkerId, setSelectedMarkerId] = useState("");
  const [selectedConnectionId, setSelectedConnectionId] = useState("");

  useEffect(() => {
    const nextSavedMap = loadSavedMap(storageKey);
    const nextOptions = {
      biome: nextSavedMap?.biome || "forest",
      environment: nextSavedMap?.environment || "dungeon",
      level: nextSavedMap?.level || "mid",
      zoneCount: normalizeZoneCount(nextSavedMap?.zones?.length || 8),
    };
    const nextMap = nextSavedMap || generateTileAdventureMap(nextOptions);

    setOptions(nextOptions);
    setCurrentMap(nextMap);
    setSelectedZoneId(nextMap.zones[0]?.id || "");
    setSelectedMarkerId("");
    setSelectedConnectionId("");
  }, [storageKey]);

  const selectedZone =
    currentMap.zones.find((zone) => zone.id === selectedZoneId) ||
    currentMap.zones[0] ||
    null;
  const selectedMarker =
    currentMap.zones
      .flatMap((zone) => zone.markers || [])
      .find((marker) => marker.id === selectedMarkerId) || null;
  const selectedConnection =
    currentMap.connections.find((connection) => connection.id === selectedConnectionId) || null;

  function updateOption(field, value) {
    setOptions((current) => ({
      ...current,
      [field]: field === "zoneCount" ? normalizeZoneCount(value) : value,
    }));
  }

  function generateMap() {
    const nextMap = generateTileAdventureMap(options);
    setCurrentMap(nextMap);
    setSelectedZoneId(nextMap.zones[0]?.id || "");
    setSelectedMarkerId("");
    setSelectedConnectionId("");
    saveMap(nextMap, storageKey);
  }

  function selectZone(zoneId) {
    setSelectedZoneId(zoneId);
    setSelectedMarkerId("");
    setSelectedConnectionId("");
  }

  function selectMarker(marker) {
    setSelectedZoneId(marker.zoneId);
    setSelectedMarkerId(marker.id);
    setSelectedConnectionId("");
  }

  function selectConnection(connectionId) {
    setSelectedConnectionId(connectionId);
    setSelectedMarkerId("");
  }

  return (
    <section className={compact ? "map-generator compact" : "map-generator"}>
      {!compact && (
        <header className="map-generator-hero fantasy-card">
          <div>
            <span className="section-kicker">Generatore Mappe</span>
            <h1>Mappe narrative per il tavolo</h1>
            <p>
              Crea una mappa rapida con zone, incontri, pericoli e appunti DM.
              Non sostituisce la mappa campagna: serve per preparare scene e
              dungeon al volo.
            </p>
          </div>
          <span className="map-generator-mark">🗺️</span>
        </header>
      )}

      <MapControls
        options={options}
        onChange={updateOption}
        onGenerate={generateMap}
        compact={compact}
      />

      <div className="map-generator-layout">
        <MapCanvas
          map={currentMap}
          selectedZoneId={selectedZone?.id}
          selectedMarkerId={selectedMarker?.id}
          selectedConnectionId={selectedConnection?.id}
          onSelectZone={selectZone}
          onSelectMarker={selectMarker}
          onSelectConnection={selectConnection}
        />
        <MapDetailPanel
          zone={selectedZone}
          marker={selectedMarker}
          connection={selectedConnection}
          map={currentMap}
        />
      </div>
    </section>
  );
}
