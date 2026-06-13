import { useState } from "react";
import { MerchantList } from "../merchants/MerchantList";
import {
  merchantRegions,
  getMerchantRegionLabel,
} from "../../data/merchantRegions";
import { prestigeOptions } from "../../data/prestige";

export function Sidebar({
  mode,
  onChangeMode,
  partyLevel,
  onChangePartyLevel,
  generationPrestigeMode = "random",
  onChangeGenerationPrestigeMode,
  merchants,
  selectedMerchantId,
  onSelectMerchant,
  activeSessionName,
  sessionRegion,
  onChangeSessionRegion,
}) {
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const isTavern = mode === "tavern";
  const isUtilityMode =
    mode === "map" ||
    mode === "bestiary" ||
    mode === "combat" ||
    mode === "settings";

  const visibleItems = merchants.filter((item) => {
    const matchesMode = isTavern ? item.type === "tavern" : item.type !== "tavern";
    const matchesFavorite = !showFavoritesOnly || item.favorite;

    return matchesMode && matchesFavorite;
  });

  function selectItem(item) {
    onSelectMerchant(item.id);
    onChangeMode(item.type === "tavern" ? "tavern" : "shop");
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1>D&amp;D Shop</h1>
        <p>Assistente Master</p>
      </div>

      <div className="active-session-card">
        <span>Partita attiva</span>
        <strong>{activeSessionName || "Partita non salvata"}</strong>
        <small>Zona: {getMerchantRegionLabel(sessionRegion)}</small>
        <small>Mercanti, locande e combattimenti vengono salvati qui.</small>
      </div>

      <div className="panel level-panel generation-context-panel">
        <div className="sidebar-region-title">Contesto generazione</div>

        <label htmlFor="sidebar-region">🗺️ Area geografica</label>
        <select
          id="sidebar-region"
          value={sessionRegion || "generic"}
          onChange={(event) => onChangeSessionRegion(event.target.value)}
          aria-label="Area geografica della partita"
        >
          {merchantRegions.map((region) => (
            <option key={region.id} value={region.id}>
              {region.label}
            </option>
          ))}
        </select>

        <label className="party-level-label" htmlFor="sidebar-party-level">
          🎚️ Livello party
        </label>
        <input
          id="sidebar-party-level"
          type="range"
          min="1"
          max="20"
          value={partyLevel}
          onChange={(event) => onChangePartyLevel(event.target.value)}
        />

        <div className="party-level-display">Livello {partyLevel}</div>

        <label htmlFor="sidebar-prestige">Prestigio</label>
        <select
          id="sidebar-prestige"
          value={generationPrestigeMode || "random"}
          onChange={(event) => onChangeGenerationPrestigeMode?.(event.target.value)}
          aria-label="Prestigio per nuove generazioni"
        >
          <option value="random">Casuale</option>
          {prestigeOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>

        <p className="sidebar-save-hint">
          I nuovi mercanti, locande e incontri useranno questi parametri.
        </p>

        <div className="mode-switch four-modes context-mode-switch">
          <button
            className={mode === "shop" ? "mode-button active" : "mode-button"}
            onClick={() => onChangeMode("shop")}
            type="button"
          >
            🛒 Mercanti
          </button>

          <button
            className={mode === "tavern" ? "mode-button active" : "mode-button"}
            onClick={() => onChangeMode("tavern")}
            type="button"
          >
            🍺 Locande
          </button>

          <button
            className={mode === "bestiary" ? "mode-button active" : "mode-button"}
            onClick={() => onChangeMode("bestiary")}
            type="button"
          >
            🐉 Bestiario
          </button>

          <button
            className={mode === "combat" ? "mode-button active" : "mode-button"}
            onClick={() => onChangeMode("combat")}
            type="button"
          >
            ⚔️ Combattimento
          </button>

          <button
            className={mode === "map" ? "mode-button active" : "mode-button"}
            onClick={() => onChangeMode("map")}
            type="button"
          >
            🗺️ Mappa
          </button>
        </div>
      </div>

      {!isUtilityMode && (
        <>
          <div className="merchant-list-title">
            {isTavern ? "Locande" : "Commercianti"}
          </div>

          <div className="favorite-filter-toggle" aria-label="Filtro preferiti">
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

          {visibleItems.length === 0 ? (
            <div className="sidebar-empty-list">
              <strong>
                {showFavoritesOnly
                  ? isTavern
                    ? "Nessuna locanda preferita"
                    : "Nessun mercante preferito"
                  : isTavern
                    ? "Nessuna locanda"
                    : "Nessun mercante"}
              </strong>
              <span>
                Usa le azioni nella sezione principale per creare un elemento.
              </span>
            </div>
          ) : (
            <MerchantList
              merchants={visibleItems}
              selectedMerchantId={selectedMerchantId}
              onSelectMerchant={(id) => {
                const selectedItem = merchants.find((item) => item.id === id);

                if (selectedItem) {
                  selectItem(selectedItem);
                }
              }}
            />
          )}
        </>
      )}

      <div className="sidebar-footer">
        <button
          className={
            mode === "settings"
              ? "sidebar-footer-button active"
              : "sidebar-footer-button"
          }
          onClick={() => onChangeMode("settings")}
          type="button"
        >
          ⚙️ Impostazioni
        </button>
        <button className="sidebar-footer-button icon-only" type="button">
          Menu
        </button>
      </div>
    </aside>
  );
}
