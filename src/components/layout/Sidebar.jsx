import { MerchantList } from "../merchants/MerchantList";

export function Sidebar({
  mode,
  onChangeMode,

  partyLevel,
  onChangePartyLevel,

  merchants,
  selectedMerchantId,

  onSelectMerchant,

  onAddMerchant,
  onAddGeneratedMerchant,
}) {
  const isTavern = mode === "tavern";
  const isBestiary = mode === "bestiary";
  const isCombat = mode === "combat";
  const isUtilityMode = isBestiary || isCombat;

  function generateShop() {
    onAddGeneratedMerchant("shop");
  }

  function generateTavern() {
    onAddGeneratedMerchant("tavern");
  }

  function addEmptyShop() {
    onAddMerchant("shop");
  }

  function addEmptyTavern() {
    onAddMerchant("tavern");
  }

  function selectItem(item) {
    onSelectMerchant(item.id);

    if (item.type === "tavern") {
      onChangeMode("tavern");
    } else {
      onChangeMode("shop");
    }
  }

  const visibleItems = merchants.filter((item) =>
    isTavern ? item.type === "tavern" : item.type !== "tavern"
  );

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1>D&amp;D Shop</h1>
        <p>Assistente Master</p>
      </div>

      <div className="mode-switch four-modes">
        <button
          className={mode === "shop" ? "mode-button active" : "mode-button"}
          onClick={() => onChangeMode("shop")}
        >
          🛒 Mercanti
        </button>

        <button
          className={mode === "tavern" ? "mode-button active" : "mode-button"}
          onClick={() => onChangeMode("tavern")}
        >
          🍺 Locande
        </button>

        <button
          className={mode === "bestiary" ? "mode-button active" : "mode-button"}
          onClick={() => onChangeMode("bestiary")}
        >
          🐉 Bestiario
        </button>

        <button
          className={mode === "combat" ? "mode-button active" : "mode-button"}
          onClick={() => onChangeMode("combat")}
        >
          ⚔️ Combattimento
        </button>
      </div>

      {!isUtilityMode && (
        <div className="panel level-panel">
          <label>{isTavern ? "Livello Locanda" : "Livello Party"}</label>

          <input
            type="range"
            min="1"
            max="20"
            value={partyLevel}
            onChange={(e) => onChangePartyLevel(e.target.value)}
          />

          <div className="party-level-display">Livello {partyLevel}</div>

          <button className="primary-button" onClick={generateShop}>
            🎲 Genera Mercante
          </button>

          <button
            className="primary-button tavern-button"
            onClick={generateTavern}
          >
            🍺 Genera Locanda
          </button>

          <button className="secondary-button" onClick={addEmptyShop}>
            + Mercante Vuoto
          </button>

          <button className="secondary-button" onClick={addEmptyTavern}>
            + Locanda Vuota
          </button>
        </div>
      )}

      {!isUtilityMode && (
        <>
          <div className="merchant-list-title">
            {isTavern ? "Locande" : "Commercianti"}
          </div>

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
        </>
      )}

      {isBestiary && (
        <div className="panel level-panel">
          <div className="merchant-list-title">Archivio Mostri</div>
          <p className="sidebar-helper-text">
            Consulta i mostri divisi per bioma, difficoltà, ruolo e danno.
          </p>
        </div>
      )}

      {isCombat && (
        <div className="panel level-panel">
          <div className="merchant-list-title">Tracker Combattimento</div>
          <p className="sidebar-helper-text">
            Crea il party, aggiungi mostri, assegna XP, iniziativa, PF e
            bersagli.
          </p>
        </div>
      )}

      <div className="sidebar-footer">
        <button className="sidebar-footer-button">⚙ Impostazioni</button>
        <button className="sidebar-footer-button icon-only">📖</button>
      </div>
    </aside>
  );
}