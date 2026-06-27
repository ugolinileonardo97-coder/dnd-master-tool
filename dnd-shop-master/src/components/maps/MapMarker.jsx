import { getMarkerAsset } from "../../data/maps/tileAssetMap";

const fallbackMarkers = {
  monster: "!",
  boss: "B",
  treasure: "T",
  trap: "!",
  event: "*",
  secret: "?",
  hazard: "~",
  safe: "+",
  entrance: "E",
};

export function MapMarker({ marker, selected = false, onSelect }) {
  const asset = getMarkerAsset(marker.type);

  return (
    <button
      type="button"
      className={["tile-map-marker", marker.type, selected ? "selected" : ""]
        .filter(Boolean)
        .join(" ")}
      style={{
        gridColumn: marker.x + 1,
        gridRow: marker.y + 1,
      }}
      onClick={(event) => {
        event.stopPropagation();
        onSelect(marker);
      }}
      aria-label={`Apri marker ${marker.title}`}
      title={marker.title}
    >
      <img
        src={asset}
        alt=""
        draggable="false"
        onError={(event) => {
          event.currentTarget.hidden = true;
        }}
      />
      <span>{fallbackMarkers[marker.type] || "*"}</span>
    </button>
  );
}
