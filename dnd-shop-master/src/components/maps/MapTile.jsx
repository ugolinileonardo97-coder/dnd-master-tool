import { getTileAsset } from "../../data/maps/tileAssetMap";

export function MapTile({ tile, biome, environment, selected = false, onSelect }) {
  const asset = getTileAsset(biome, tile.type, environment);
  const selectable = Boolean(tile.zoneId);

  return (
    <button
      type="button"
      className={[
        "tile-map-cell",
        tile.type,
        selectable ? "selectable" : "",
        selected ? "selected" : "",
      ].filter(Boolean).join(" ")}
      onClick={onSelect}
      disabled={!selectable}
      aria-label={
        selectable
          ? `Cella zona ${tile.zoneId}, colonna ${tile.x + 1}, riga ${tile.y + 1}`
          : `Cella ${tile.x + 1}, ${tile.y + 1}`
      }
    >
      <img
        src={asset}
        alt=""
        draggable="false"
        onError={(event) => {
          event.currentTarget.hidden = true;
        }}
      />
    </button>
  );
}
