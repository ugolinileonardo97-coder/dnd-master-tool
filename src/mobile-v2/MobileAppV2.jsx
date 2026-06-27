import { useMemo, useState } from "react";
import { alignmentOptions, getAlignmentLabel } from "../data/alignments";
import {
  getMerchantRegionLabel,
  merchantRegions,
} from "../data/merchantRegions";
import { merchantReputations } from "../data/merchantReputations";
import { MobileBottomNavV2 } from "./MobileBottomNavV2";
import { MobileHomeV2 } from "./MobileHomeV2";
import "./mobile-v2.css";

const screens = {
  home: "Home",
  merchants: "Mercanti",
  merchantDetail: "Mercante",
  itemDetail: "Oggetto",
  taverns: "Locande",
  bestiary: "Bestiario",
  combat: "Combattimento",
  map: "Mappa",
};

const merchantTabs = [
  { id: "overview", label: "Panoramica" },
  { id: "inventory", label: "Inventario" },
  { id: "quest", label: "Quest" },
  { id: "edit", label: "Modifica" },
  { id: "map", label: "Mappa" },
];

function getMapRegion(item, fallback = "generic") {
  return (
    item?.mapRegion ||
    item?.geographicRegion ||
    item?.region ||
    item?.area ||
    fallback
  );
}

function getItemDescription(item) {
  return item?.notes || item?.description || "";
}

function getItemEffect(item) {
  return item?.effect || item?.damage || "";
}

function getItemPrice(item) {
  return item?.price || item?.cost || "Prezzo n.d.";
}

function BadgeRow({ children }) {
  return <div className="mobile-v2-badge-row">{children}</div>;
}

function MobileBackButton({ children = "Indietro", onClick }) {
  return (
    <button className="mobile-v2-back" type="button" onClick={onClick}>
      <span aria-hidden="true">‹</span>
      {children}
    </button>
  );
}

export function MobileAppV2({
  activeSessionName,
  sessionRegion,
  partyLevel,
  merchants = [],
  onAddGeneratedMerchant,
  onSelectMerchant,
  onToggleMerchantFavorite,
  onUpdateMerchant,
  onDeleteInventoryItem,
}) {
  const [activeScreen, setActiveScreen] = useState("home");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [selectedMerchantId, setSelectedMerchantId] = useState(null);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [activeMerchantTab, setActiveMerchantTab] = useState("overview");
  const regionLabel = getMerchantRegionLabel(sessionRegion || "generic");

  const shopMerchants = useMemo(
    () => merchants.filter((merchant) => merchant.type !== "tavern"),
    [merchants]
  );
  const visibleMerchants = showFavoritesOnly
    ? shopMerchants.filter((merchant) => merchant.favorite)
    : shopMerchants;
  const selectedMerchant =
    shopMerchants.find((merchant) => merchant.id === selectedMerchantId) || null;
  const selectedItem =
    selectedMerchant?.inventory?.find((item) => item.id === selectedItemId) ||
    null;

  function openMerchant(merchant) {
    onSelectMerchant?.(merchant.id);
    setSelectedMerchantId(merchant.id);
    setSelectedItemId(null);
    setActiveMerchantTab("overview");
    setActiveScreen("merchantDetail");
  }

  function generateMerchant() {
    const generated = onAddGeneratedMerchant?.("shop");

    if (!generated) return;

    openMerchant(generated);
  }

  function updateSelectedMerchant(field, value) {
    if (!selectedMerchant) return;
    onSelectMerchant?.(selectedMerchant.id);
    onUpdateMerchant?.(field, value);
  }

  function renderPlaceholder() {
    return (
      <main className="mobile-v2-screen">
        <header className="mobile-v2-page-header">
          <span>Sezione</span>
          <h1>{screens[activeScreen]}</h1>
          <p>Questa sezione resta placeholder fino alla sua fase dedicata.</p>
        </header>

        <section className="mobile-v2-placeholder-card">
          <strong>{screens[activeScreen]}</strong>
          <p>Per ora la FASE 2 integra solo Mercanti mobile.</p>
          <button type="button" onClick={() => setActiveScreen("home")}>
            Torna alla Home
          </button>
        </section>
      </main>
    );
  }

  function renderMerchantList() {
    return (
      <main className="mobile-v2-screen">
        <header className="mobile-v2-page-header compact">
          <span>Archivio</span>
          <h1>Mercanti</h1>
          <p>Lista compatta dei commercianti della partita.</p>
        </header>

        <button
          className="mobile-v2-primary-action"
          type="button"
          onClick={generateMerchant}
        >
          Genera mercante
        </button>

        <div className="mobile-v2-filter-tabs" aria-label="Filtro mercanti">
          <button
            type="button"
            className={!showFavoritesOnly ? "active" : ""}
            onClick={() => setShowFavoritesOnly(false)}
          >
            Tutti
          </button>
          <button
            type="button"
            className={showFavoritesOnly ? "active" : ""}
            onClick={() => setShowFavoritesOnly(true)}
          >
            Preferiti
          </button>
        </div>

        <section className="mobile-v2-list">
          {visibleMerchants.length === 0 ? (
            <div className="mobile-v2-empty-card">
              {showFavoritesOnly
                ? "Nessun mercante preferito."
                : "Nessun mercante creato."}
            </div>
          ) : (
            visibleMerchants.map((merchant) => (
              <button
                className="mobile-v2-list-card"
                key={merchant.id}
                type="button"
                onClick={() => openMerchant(merchant)}
              >
                <div>
                  <strong>{merchant.name || "Mercante senza nome"}</strong>
                  <span>{merchant.shopName || "Bottega senza nome"}</span>
                </div>
                <BadgeRow>
                  <span>{getMerchantRegionLabel(merchant.region || "generic")}</span>
                  <span>{merchant.reputation || "Sconosciuto"}</span>
                  <span aria-label={merchant.favorite ? "Preferito" : "Non preferito"}>
                    {merchant.favorite ? "★" : "☆"}
                  </span>
                </BadgeRow>
                <em aria-hidden="true">›</em>
              </button>
            ))
          )}
        </section>
      </main>
    );
  }

  function renderMerchantHeader() {
    if (!selectedMerchant) return null;

    return (
      <>
        <MobileBackButton onClick={() => setActiveScreen("merchants")}>
          Lista mercanti
        </MobileBackButton>

        <header className="mobile-v2-detail-header">
          <div>
            <span>{selectedMerchant.shopName || "Bottega"}</span>
            <h1>{selectedMerchant.name || "Mercante"}</h1>
          </div>
          <button
            className={selectedMerchant.favorite ? "active" : ""}
            type="button"
            onClick={() => onToggleMerchantFavorite?.(selectedMerchant.id)}
            aria-label="Preferito"
          >
            {selectedMerchant.favorite ? "★" : "☆"}
          </button>
        </header>

        <BadgeRow>
          <span>{getMerchantRegionLabel(selectedMerchant.region || "generic")}</span>
          <span>{selectedMerchant.race || "Razza n.d."}</span>
          <span>{getAlignmentLabel(selectedMerchant.alignment)}</span>
          <span>{selectedMerchant.reputation || "Sconosciuto"}</span>
          <span>{selectedMerchant.shopTier || "Comune"}</span>
          <span>Sconti {selectedMerchant.discount || "Basso"}</span>
        </BadgeRow>

        <nav className="mobile-v2-tabs" aria-label="Sezioni mercante">
          {merchantTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={activeMerchantTab === tab.id ? "active" : ""}
              onClick={() => setActiveMerchantTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </>
    );
  }

  function renderOverview() {
    return (
      <section className="mobile-v2-content-card">
        <h2>Mercante</h2>
        <p>{selectedMerchant?.story || "Descrizione mercante non disponibile."}</p>
        <h2>Bottega</h2>
        <p>
          {selectedMerchant?.locationDescription ||
            "Descrizione bottega non disponibile."}
        </p>
      </section>
    );
  }

  function renderInventory() {
    const inventory = selectedMerchant?.inventory || [];

    return (
      <section className="mobile-v2-list">
        {inventory.length === 0 ? (
          <div className="mobile-v2-empty-card">Inventario vuoto.</div>
        ) : (
          inventory.map((item) => (
            <button
              className="mobile-v2-list-card item"
              key={item.id}
              type="button"
              onClick={() => {
                setSelectedItemId(item.id);
                setActiveScreen("itemDetail");
              }}
            >
              <div>
                <strong>{item.name || "Oggetto senza nome"}</strong>
                <span>{item.category || "Varie"}</span>
              </div>
              <BadgeRow>
                <span>{item.rarity || "Comune"}</span>
                <span>{getItemPrice(item)}</span>
                <span>Qt. {item.qty || 1}</span>
              </BadgeRow>
              <em aria-hidden="true">›</em>
            </button>
          ))
        )}
      </section>
    );
  }

  function renderQuest() {
    return (
      <section className="mobile-v2-content-card">
        <h2>Side Quest</h2>
        <p>{selectedMerchant?.sideQuest || "Nessuna side quest presente."}</p>
        <h2>Ricompensa</h2>
        <p>{selectedMerchant?.reward || "Nessuna ricompensa indicata."}</p>
      </section>
    );
  }

  function renderEdit() {
    return (
      <section className="mobile-v2-form-card">
        <label>
          Nome mercante
          <input
            value={selectedMerchant?.name || ""}
            onChange={(event) => updateSelectedMerchant("name", event.target.value)}
          />
        </label>
        <label>
          Nome bottega
          <input
            value={selectedMerchant?.shopName || ""}
            onChange={(event) =>
              updateSelectedMerchant("shopName", event.target.value)
            }
          />
        </label>
        <label>
          Razza
          <input
            value={selectedMerchant?.race || ""}
            onChange={(event) => updateSelectedMerchant("race", event.target.value)}
          />
        </label>
        <label>
          Zona
          <select
            value={selectedMerchant?.region || "generic"}
            onChange={(event) => updateSelectedMerchant("region", event.target.value)}
          >
            {merchantRegions.map((region) => (
              <option key={region.id} value={region.id}>
                {region.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          Allineamento
          <select
            value={selectedMerchant?.alignment || "neutral"}
            onChange={(event) =>
              updateSelectedMerchant("alignment", event.target.value)
            }
          >
            {alignmentOptions.map((alignment) => (
              <option key={alignment.id} value={alignment.id}>
                {alignment.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          Reputazione
          <select
            value={selectedMerchant?.reputation || "Sconosciuto"}
            onChange={(event) =>
              updateSelectedMerchant("reputation", event.target.value)
            }
          >
            {merchantReputations.map((reputation) => (
              <option key={reputation.id} value={reputation.id}>
                {reputation.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          Ricchezza
          <input
            value={selectedMerchant?.shopTier || ""}
            onChange={(event) =>
              updateSelectedMerchant("shopTier", event.target.value)
            }
          />
        </label>
        <label>
          Sconti
          <input
            value={selectedMerchant?.discount || ""}
            onChange={(event) =>
              updateSelectedMerchant("discount", event.target.value)
            }
          />
        </label>
      </section>
    );
  }

  function renderMerchantMap() {
    return (
      <section className="mobile-v2-form-card">
        <label>
          Zona geografica
          <select
            value={selectedMerchant?.region || "generic"}
            onChange={(event) => updateSelectedMerchant("region", event.target.value)}
          >
            {merchantRegions.map((region) => (
              <option key={region.id} value={region.id}>
                {region.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          Posizione sulla mappa
          <select
            value={getMapRegion(selectedMerchant, sessionRegion || "generic")}
            onChange={(event) =>
              updateSelectedMerchant("mapRegion", event.target.value)
            }
          >
            {merchantRegions.map((region) => (
              <option key={region.id} value={region.id}>
                {region.label}
              </option>
            ))}
          </select>
        </label>
        <button
          type="button"
          onClick={() => setActiveScreen("map")}
        >
          Apri Mappa
        </button>
      </section>
    );
  }

  function renderMerchantDetail() {
    if (!selectedMerchant) return renderMerchantList();

    return (
      <main className="mobile-v2-screen">
        {renderMerchantHeader()}
        {activeMerchantTab === "overview" && renderOverview()}
        {activeMerchantTab === "inventory" && renderInventory()}
        {activeMerchantTab === "quest" && renderQuest()}
        {activeMerchantTab === "edit" && renderEdit()}
        {activeMerchantTab === "map" && renderMerchantMap()}
      </main>
    );
  }

  function renderItemDetail() {
    if (!selectedMerchant || !selectedItem) {
      return renderMerchantDetail();
    }

    const description = getItemDescription(selectedItem);
    const effect = getItemEffect(selectedItem);

    return (
      <main className="mobile-v2-screen">
        <MobileBackButton
          onClick={() => {
            setActiveScreen("merchantDetail");
            setActiveMerchantTab("inventory");
          }}
        >
          Inventario
        </MobileBackButton>

        <section className="mobile-v2-item-detail">
          <span>{selectedItem.category || "Oggetto"}</span>
          <h1>{selectedItem.name || "Oggetto senza nome"}</h1>
          <BadgeRow>
            <span>{selectedItem.rarity || "Comune"}</span>
            <span>{getItemPrice(selectedItem)}</span>
            <span>Qt. {selectedItem.qty || 1}</span>
            <span>{selectedItem.category || "Varie"}</span>
          </BadgeRow>
          <h2>Descrizione</h2>
          <p>{description || "Nessuna descrizione disponibile."}</p>
          {effect && (
            <>
              <h2>Effetto / danno</h2>
              <p>{effect}</p>
            </>
          )}
          <button
            className="danger"
            type="button"
            onClick={() => {
              onSelectMerchant?.(selectedMerchant.id);
              onDeleteInventoryItem?.(selectedItem.id);
              setSelectedItemId(null);
              setActiveScreen("merchantDetail");
              setActiveMerchantTab("inventory");
            }}
          >
            Rimuovi oggetto
          </button>
        </section>
      </main>
    );
  }

  let content;

  if (activeScreen === "home") {
    content = (
      <MobileHomeV2
        activeSessionName={activeSessionName}
        regionLabel={regionLabel}
        partyLevel={partyLevel}
        onNavigate={setActiveScreen}
      />
    );
  } else if (activeScreen === "merchants") {
    content = renderMerchantList();
  } else if (activeScreen === "merchantDetail") {
    content = renderMerchantDetail();
  } else if (activeScreen === "itemDetail") {
    content = renderItemDetail();
  } else {
    content = renderPlaceholder();
  }

  return (
    <div className="mobile-v2-app">
      {content}
      <MobileBottomNavV2
        activeScreen={activeScreen}
        onNavigate={(screen) => {
          setSelectedItemId(null);
          if (screen === "merchants") {
            setActiveMerchantTab("overview");
          }
          setActiveScreen(screen);
        }}
      />
    </div>
  );
}
