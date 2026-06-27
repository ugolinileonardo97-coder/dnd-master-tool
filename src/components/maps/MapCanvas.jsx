import { zoneTypeMeta } from "../../data/maps/mapData";
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

function getMarkerType(zone) {
  if (zone.boss) return "boss";
  if (zone.monsters) return "monster";
  if (zone.treasure) return "treasure";
  if (zone.trap) return "trap";
  if (zone.hazard) return "hazard";
  if (zone.type === "secret") return "secret";
  if (zone.type === "safe") return "safe";
  if (zone.type === "entrance") return "entrance";
  return "event";
}

function getZoneMarkers(zone) {
  if (zone.markers?.length) return zone.markers;
  return [{
    id: `marker-${zone.id}`,
    zoneId: zone.id,
    type: getMarkerType(zone),
    title: zone.name,
    description: zone.description,
    effect: zone.trap || zone.hazard || zone.event || "",
    reward: zone.treasure || "",
    dmNote: zone.dmNote,
  }];
}

function getConnectionIcon(connection) {
  const type = String(connection?.type || "");
  if (type.includes("ponte") || type.includes("bridge") || type.includes("passerella") || type.includes("molo")) {
    return "bridge";
  }
  if (type.includes("segreto") || connection?.secret) return "secret";
  return "door";
}

function ZoneCard({
  zone,
  selected,
  selectedMarkerId,
  onSelectZone,
  onSelectMarker,
}) {
  const typeLabel = zoneTypeMeta[zone.type]?.label || "Zona";
  const markers = getZoneMarkers(zone);

  return (
    <article
      className={["narrative-zone-card", zone.type, selected ? "selected" : ""]
        .filter(Boolean)
        .join(" ")}
    >
      <button
        type="button"
        className="narrative-zone-main"
        onClick={() => onSelectZone(zone.id)}
      >
        <span className="narrative-zone-topline">
          <span className="narrative-zone-number">Zona {zone.index || zone.order}</span>
          <span className="narrative-zone-icon">{zone.icon}</span>
        </span>
        <strong>{zone.name}</strong>
        <span className="narrative-zone-meta">{typeLabel}</span>
      </button>
      <span className="narrative-zone-markers" aria-label="Marker zona">
        {markers.map((marker) => (
          <button
            key={marker.id}
            type="button"
            className={selectedMarkerId === marker.id ? "selected" : ""}
            onClick={(event) => {
              event.stopPropagation();
              onSelectMarker(marker);
            }}
            title={marker.title}
            aria-label={`Apri ${marker.title}`}
          >
            <img src={getMarkerAsset(marker.type)} alt="" draggable="false" />
          </button>
        ))}
      </span>
    </article>
  );
}

function ConnectionCard({ connection, selected, onSelectConnection, branch = false }) {
  if (!connection) return null;
  const icon = getConnectionIcon(connection);

  return (
    <button
      type="button"
      className={[
        "narrative-connection-card",
        connection.type,
        branch ? "branch" : "main",
        selected ? "selected" : "",
      ].filter(Boolean).join(" ")}
      onClick={() => onSelectConnection(connection.id)}
    >
      <span className="narrative-connection-arrow">{branch ? "->" : "v"}</span>
      <span className="narrative-connection-body">
        <span>
          <img src={getMarkerAsset(icon)} alt="" draggable="false" />
          <strong>{connection.title || connection.label}</strong>
        </span>
        <small>{connection.secret ? "Segreto" : connection.danger || connection.dangerLevel || "basso"}</small>
      </span>
    </button>
  );
}

export function MapCanvas({
  map,
  selectedZoneId,
  selectedMarkerId,
  selectedConnectionId,
  onSelectZone,
  onSelectMarker,
  onSelectConnection,
}) {
  const zones = map?.zones || [];
  const zoneById = new Map(zones.map((zone) => [zone.id, zone]));
  const connections = map?.connections || [];
  const connectionByPair = new Map(
    connections.flatMap((connection) => [
      [`${connection.from}->${connection.to}`, connection],
      [`${connection.to}->${connection.from}`, connection],
    ])
  );
  const mainPath = map?.mainPath?.length ? map.mainPath : zones.map((zone) => zone.id);
  const sideBranches = map?.sideBranches || [];

  return (
    <section className="adventure-map-canvas narrative-map-canvas fantasy-card" aria-label="Mappa narrativa">
      <div className="adventure-map-title">
        <div>
          <span className="section-kicker">Mappa narrativa</span>
          <h2>{map.title}</h2>
        </div>
        <strong>{map.levelLabel}</strong>
      </div>

      <div className="narrative-map-board">
        <div className="narrative-main-path">
          {mainPath.map((zoneId, index) => {
            const zone = zoneById.get(zoneId);
            const nextZoneId = mainPath[index + 1];
            const connection = nextZoneId
              ? connectionByPair.get(`${zoneId}->${nextZoneId}`)
              : null;
            if (!zone) return null;

            return (
              <div className="narrative-path-step" key={zone.id}>
                <ZoneCard
                  zone={zone}
                  selected={selectedZoneId === zone.id && !selectedConnectionId}
                  selectedMarkerId={selectedMarkerId}
                  onSelectZone={onSelectZone}
                  onSelectMarker={onSelectMarker}
                />

                {sideBranches
                  .filter((branch) => branch.from === zone.id)
                  .map((branch) => {
                    const branchZone = zoneById.get(branch.to);
                    const branchConnection = connections.find((item) => item.id === branch.connectionId);
                    if (!branchZone || !branchConnection) return null;
                    return (
                      <div className="narrative-side-branch" key={branch.connectionId}>
                        <ConnectionCard
                          connection={branchConnection}
                          selected={selectedConnectionId === branchConnection.id}
                          onSelectConnection={onSelectConnection}
                          branch
                        />
                        <ZoneCard
                          zone={branchZone}
                          selected={selectedZoneId === branchZone.id && !selectedConnectionId}
                          selectedMarkerId={selectedMarkerId}
                          onSelectZone={onSelectZone}
                          onSelectMarker={onSelectMarker}
                        />
                      </div>
                    );
                  })}

                {connection && (
                  <ConnectionCard
                    connection={connection}
                    selected={selectedConnectionId === connection.id}
                    onSelectConnection={onSelectConnection}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="adventure-map-legend narrative-map-legend">
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
