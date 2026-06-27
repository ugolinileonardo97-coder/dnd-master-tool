import {
  mapBiomeOptions,
  mapEnvironmentOptions,
  mapLevelOptions,
} from "../../data/maps/mapData";

export function MapControls({
  options,
  onChange,
  onGenerate,
  compact = false,
}) {
  const zoneCount = Math.max(1, Math.min(Number(options.zoneCount) || 8, 12));

  function updateZoneCount(nextValue) {
    const numericValue = Number(nextValue);
    const safeValue = Number.isFinite(numericValue)
      ? Math.max(1, Math.min(Math.round(numericValue), 12))
      : 8;
    onChange("zoneCount", safeValue);
  }

  return (
    <section className={compact ? "map-controls compact" : "map-controls fantasy-card"}>
      <label>
        Bioma
        <select
          value={options.biome}
          onChange={(event) => onChange("biome", event.target.value)}
        >
          {mapBiomeOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.icon} {option.label}
            </option>
          ))}
        </select>
      </label>

      <label>
        Ambiente
        <select
          value={options.environment}
          onChange={(event) => onChange("environment", event.target.value)}
        >
          {mapEnvironmentOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <label>
        Livello
        <select
          value={options.level}
          onChange={(event) => onChange("level", event.target.value)}
        >
          {mapLevelOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <label>
        Zone
        <div className="map-zone-stepper">
          <button
            type="button"
            onClick={() => updateZoneCount(zoneCount - 1)}
            aria-label="Diminuisci zone"
          >
            ‹
          </button>
          <input
            type="number"
            min="1"
            max="12"
            value={zoneCount}
            onChange={(event) => updateZoneCount(event.target.value)}
          />
          <button
            type="button"
            onClick={() => updateZoneCount(zoneCount + 1)}
            aria-label="Aumenta zone"
          >
            ›
          </button>
        </div>
      </label>

      <button className="map-generate-button" type="button" onClick={onGenerate}>
        Genera mappa
      </button>
    </section>
  );
}
