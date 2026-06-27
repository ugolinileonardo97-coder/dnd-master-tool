import { MapMarker } from "./MapMarker";
import { MapTile } from "./MapTile";
import { getMarkerAsset } from "../../data/maps/tileAssetMap";

const legendItems = [
  ["entrance", "Ingresso"],
  ["monster", "Mostri"],
  ["treasure", "Tesoro"],
  ["trap", "Trappola"],
  ["event", "Evento"],
  ["boss", "Boss"],
  ["secret", "Segreto"],
  ["hazard", "Pericolo"],
  ["safe", "Rifugio"],
  ["door", "Porta"],
  ["bridge", "Ponte"],
];

function getConnectionIcon(connection) {
  if (connection.type === "secret") return "secret";
  if (connection.type === "bridge" || connection.type === "passerella") return "bridge";
  return "door";
}

function getConnectionPoint(zone) {
  return {
    x: zone.centerX + 0.5,
    y: zone.centerY + 0.5,
  };
}

function getConnectionMidpoint(connection, zoneById) {
  const from = zoneById.get(connection.from);
  const to = zoneById.get(connection.to);
  if (!from || !to) return null;
  return {
    x: Math.round((from.centerX + to.centerX) / 2),
    y: Math.round((from.centerY + to.centerY) / 2),
  };
}

function getZoneTypeLabel(type) {
  const labels = {
    entrance: "Ingresso",
    corridor: "Passaggio",
    monster: "Mostri",
    treasure: "Tesoro",
    trap: "Trappola",
    event: "Evento",
    secret: "Segreto",
    boss: "Boss",
    hazard: "Pericolo",
    safe: "Rifugio",
  };
  return labels[type] || "Zona";
}

export function TileMapCanvas({
  map,
  selectedZoneId,
  selectedMarkerId,
  onSelectZone,
  onSelectMarker,
  zoom = 100,
}) {
  const tiles = map?.tiles || [];
  const zones = map?.zones || [];
  const zoneById = new Map(zones.map((zone) => [zone.id, zone]));
  const markers = zones.flatMap((zone) => zone.markers || []);
  const connections = map?.connections || [];

  return (
    <section className="adventure-map-canvas fantasy-card" aria-label="Mappa generata">
      <div className="adventure-map-title">
        <div>
          <span className="section-kicker">Mappa tattica</span>
          <h2>{map.title}</h2>
        </div>
        <strong>{map.levelLabel}</strong>
      </div>

      <div className="tile-map-viewport">
        <div
          className="tile-map-grid"
          style={{
            "--tile-map-width": map.width || 12,
            "--tile-map-height": map.height || 12,
            "--tile-map-zoom": zoom / 100,
          }}
        >
          {tiles.flat().map((tile) => {
            return (
              <MapTile
                key={tile.id}
                tile={tile}
                biome={map.biome}
                environment={map.environment}
                selected={false}
                onSelect={() => {
                  if (tile.zoneId) onSelectZone(tile.zoneId);
                }}
              />
            );
          })}

          <svg
            className="tile-map-connections"
            viewBox={`0 0 ${map.width || 16} ${map.height || 16}`}
            aria-hidden="true"
          >
            {connections.map((connection, index) => {
              const from = zoneById.get(connection.from);
              const to = zoneById.get(connection.to);
              if (!from || !to) return null;
              const start = getConnectionPoint(from);
              const end = getConnectionPoint(to);
              return (
                <line
                  key={connection.id}
                  className={[
                    "tile-map-connection-line",
                    connection.type,
                    index < zones.length - 1 ? "main" : "branch",
                  ].join(" ")}
                  x1={start.x}
                  y1={start.y}
                  x2={end.x}
                  y2={end.y}
                />
              );
            })}
          </svg>

          {connections.map((connection, index) => {
            const midpoint = getConnectionMidpoint(connection, zoneById);
            if (!midpoint) return null;
            const icon = getConnectionIcon(connection);
            return (
              <span
                key={`${connection.id}-icon`}
                className={[
                  "tile-map-connection-icon",
                  connection.type,
                  index < zones.length - 1 ? "main" : "branch",
                ].join(" ")}
                style={{
                  gridColumn: midpoint.x + 1,
                  gridRow: midpoint.y + 1,
                }}
                title={connection.label}
              >
                <img src={getMarkerAsset(icon)} alt="" draggable="false" />
              </span>
            );
          })}

          {zones.map((zone) => (
            <button
              type="button"
              key={zone.id}
              className={[
                "tile-map-zone-overlay",
                zone.type,
                selectedZoneId === zone.id && !selectedMarkerId ? "selected" : "",
                selectedZoneId === zone.id && selectedMarkerId ? "muted-selected" : "",
              ].filter(Boolean).join(" ")}
              style={{
                gridColumn: `${zone.x + 1} / span ${zone.width}`,
                gridRow: `${zone.y + 1} / span ${zone.height}`,
              }}
              onClick={() => onSelectZone(zone.id)}
              aria-label={`Apri Zona ${zone.index || zone.order}: ${zone.name}`}
            >
              <span className="tile-map-zone-kicker">
                {zone.icon} Zona {zone.index || zone.order}
              </span>
              <strong>{zone.name}</strong>
              <em>{getZoneTypeLabel(zone.type)}</em>
            </button>
          ))}

          {markers.map((marker) => (
            <MapMarker
              key={marker.id}
              marker={marker}
              selected={selectedMarkerId === marker.id}
              onSelect={onSelectMarker}
            />
          ))}
        </div>
      </div>

      <div className="adventure-map-legend">
        {legendItems.map(([type, label]) => (
          <span key={type}>
            <img src={getMarkerAsset(type)} alt="" draggable="false" />
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}
