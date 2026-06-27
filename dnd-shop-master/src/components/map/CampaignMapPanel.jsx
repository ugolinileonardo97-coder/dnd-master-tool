import { useMemo, useState } from "react";
import { merchantRegions } from "../../data/merchantRegions";
import { MapGenerator } from "../maps/MapGenerator";

const regionVisuals = {
  generic: {
    icon: "🌾",
    description: "Pianure, crocevia e strade comuni della campagna.",
  },
  coastal: {
    icon: "⚓",
    description: "Banchine, moli, taverne salmastre e quartieri di mare.",
  },
  mountain: {
    icon: "🏔️",
    description: "Passi rocciosi, miniere fredde e fortezze d'altura.",
  },
  forest: {
    icon: "🌲",
    description: "Sentieri ombrosi, villaggi di legno e botteghe di confine.",
  },
  desert: {
    icon: "🏜️",
    description: "Oasi, carovane, tende mercantili e piste sepolte.",
  },
  urban: {
    icon: "🏰",
    description: "Quartieri affollati, mercati ricchi e vicoli sorvegliati.",
  },
  frontier: {
    icon: "🛡️",
    description: "Avamposti, strade fangose e confini poco protetti.",
  },
  rural: {
    icon: "🏡",
    description: "Stalle, granai, fiere di villaggio e botteghe essenziali.",
  },
  underdark: {
    icon: "🕳️",
    description: "Caverne, mercati sotterranei e luci fungine.",
  },
  ruins: {
    icon: "🏛️",
    description: "Accampamenti tra colonne spezzate e sale dimenticate.",
  },
  arctic: {
    icon: "❄️",
    description: "Insediamenti gelidi, piste bianche e rifugi controvento.",
  },
  swamp: {
    icon: "🪷",
    description: "Passerelle, barche piatte, acque nere e capanne umide.",
  },
};

function normalizeMapRegion(item) {
  const regionId =
    item?.mapRegion ||
    item?.geographicRegion ||
    item?.region ||
    item?.area ||
    "generic";

  return merchantRegions.some((region) => region.id === regionId)
    ? regionId
    : "generic";
}

function getMarkerName(item) {
  return item?.shopName || item?.name || "Luogo senza nome";
}

export function CampaignMapPanel({
  merchants = [],
  onSelectMapItem,
  activeSessionId,
}) {
  const [activeMapTab, setActiveMapTab] = useState("campaign");
  const [mapFilter, setMapFilter] = useState("all");
  const [selectedMobileRegionId, setSelectedMobileRegionId] = useState(null);

  const groupedRegions = useMemo(() => {
    return merchantRegions.map((region) => {
      const regionItems = merchants.filter(
        (item) => normalizeMapRegion(item) === region.id
      );

      const visibleItems = regionItems.filter((item) => {
        if (mapFilter === "shops") return item.type !== "tavern";
        if (mapFilter === "taverns") return item.type === "tavern";
        if (mapFilter === "favorites") return Boolean(item.favorite);
        return true;
      });

      return {
        ...region,
        icon: regionVisuals[region.id]?.icon || "🗺️",
        mapDescription:
          regionVisuals[region.id]?.description || region.description,
        items: visibleItems,
        shopCount: regionItems.filter((item) => item.type !== "tavern").length,
        tavernCount: regionItems.filter((item) => item.type === "tavern").length,
      };
    });
  }, [mapFilter, merchants]);

  const totalVisibleItems = groupedRegions.reduce(
    (total, region) => total + region.items.length,
    0
  );
  const selectedMobileRegion = groupedRegions.find(
    (region) => region.id === selectedMobileRegionId
  );

  return (
    <>
      <section className="campaign-map-hero fantasy-card">
        <div>
          <div className="section-kicker">Cartografia del Master</div>
          <h1>Mappa Campagna</h1>
          <p>
            Una griglia semplice per vedere dove si trovano mercanti e locande
            della partita. Ogni marker apre direttamente la scheda collegata.
          </p>
        </div>

        <div className="campaign-map-mark">🗺️</div>
      </section>

      <nav className="campaign-map-tabs" aria-label="Sezioni mappa">
        <button
          type="button"
          className={activeMapTab === "campaign" ? "active" : ""}
          onClick={() => setActiveMapTab("campaign")}
        >
          Biomi
        </button>
        <button
          type="button"
          className={activeMapTab === "generator" ? "active" : ""}
          onClick={() => setActiveMapTab("generator")}
        >
          Mappe
        </button>
      </nav>

      {activeMapTab === "generator" ? (
        <MapGenerator sessionId={activeSessionId} />
      ) : (
        <>

      <section className="campaign-map-toolbar fantasy-card">
        <div>
          <span>Luoghi visibili</span>
          <strong>{totalVisibleItems}</strong>
        </div>

        <div className="campaign-map-filters" aria-label="Filtri mappa">
          {[
            ["all", "Tutto"],
            ["shops", "Solo mercanti"],
            ["taverns", "Solo locande"],
            ["favorites", "Solo preferiti"],
          ].map(([id, label]) => (
            <button
              key={id}
              type="button"
              className={mapFilter === id ? "active" : ""}
              onClick={() => setMapFilter(id)}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {merchants.length === 0 && (
        <section className="campaign-map-empty fantasy-card">
          Genera mercanti o locande per popolare la mappa della campagna.
        </section>
      )}

      {selectedMobileRegion && (
        <section className="campaign-map-mobile-detail fantasy-card">
          <button
            className="mobile-back-button"
            type="button"
            onClick={() => setSelectedMobileRegionId(null)}
          >
            ← Indietro
          </button>

          <div className="campaign-map-region-header">
            <span className="campaign-map-region-icon">
              {selectedMobileRegion.icon}
            </span>
            <div>
              <h2>{selectedMobileRegion.label}</h2>
              <p>{selectedMobileRegion.mapDescription}</p>
            </div>
          </div>

          <div className="campaign-map-counts">
            <span>Mercanti: {selectedMobileRegion.shopCount}</span>
            <span>Locande: {selectedMobileRegion.tavernCount}</span>
          </div>

          <div className="campaign-map-markers">
            {selectedMobileRegion.items.length === 0 ? (
              <span className="campaign-map-no-marker">
                Nessun luogo registrato
              </span>
            ) : (
              selectedMobileRegion.items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={
                    item.type === "tavern"
                      ? "campaign-map-marker tavern"
                      : "campaign-map-marker shop"
                  }
                  onClick={() => onSelectMapItem(item)}
                >
                  <span>{item.type === "tavern" ? "ðŸº" : "ðŸª"}</span>
                  <strong>{getMarkerName(item)}</strong>
                  {item.favorite && <em>â˜…</em>}
                </button>
              ))
            )}
          </div>
        </section>
      )}

      <section
        className={
          selectedMobileRegion
            ? "campaign-map-grid mobile-region-detail-open"
            : "campaign-map-grid"
        }
      >
        {groupedRegions.map((region) => (
          <article className="campaign-map-region fantasy-card" key={region.id}>
            <div className="campaign-map-region-header">
              <span className="campaign-map-region-icon">{region.icon}</span>
              <div>
                <h2>{region.label}</h2>
                <p>{region.mapDescription}</p>
              </div>
            </div>

            <div className="campaign-map-counts">
              <span>Mercanti: {region.shopCount}</span>
              <span>Locande: {region.tavernCount}</span>
            </div>

            <button
              className="campaign-map-open-region"
              type="button"
              onClick={() => setSelectedMobileRegionId(region.id)}
            >
              Apri bioma
            </button>

            <div className="campaign-map-markers">
              {region.items.length === 0 ? (
                <span className="campaign-map-no-marker">
                  Nessun luogo registrato
                </span>
              ) : (
                region.items.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={
                      item.type === "tavern"
                        ? "campaign-map-marker tavern"
                        : "campaign-map-marker shop"
                    }
                    onClick={() => onSelectMapItem(item)}
                  >
                    <span>{item.type === "tavern" ? "🍺" : "🏪"}</span>
                    <strong>{getMarkerName(item)}</strong>
                    {item.favorite && <em>★</em>}
                  </button>
                ))
              )}
            </div>
          </article>
        ))}
      </section>
        </>
      )}
    </>
  );
}
