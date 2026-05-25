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

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1>D&D Shop</h1>
        <p>Assistente Master</p>
      </div>

      <div className="mode-switch">
        <button
          className={mode === "shop" ? "mode-button active" : "mode-button"}
          onClick={() => onChangeMode("shop")}
        >
          🛒 Shop
        </button>

        <button
          className={mode === "tavern" ? "mode-button active" : "mode-button"}
          onClick={() => onChangeMode("tavern")}
        >
          🍺 Locanda
        </button>
      </div>

      <div className="panel">
        <label>{isTavern ? "Livello Locanda" : "Livello Party"}</label>

        <input
          type="range"
          min="1"
          max="20"
          value={partyLevel}
          onChange={(e) => onChangePartyLevel(e.target.value)}
        />

        <div className="party-level-display">
          {isTavern ? `Locanda Livello ${partyLevel}` : `Party Livello ${partyLevel}`}
        </div>

        <button className="primary-button" onClick={onAddGeneratedMerchant}>
          🎲 {isTavern ? "Genera Locanda" : "Genera Mercante"}
        </button>

        <button className="secondary-button" onClick={onAddMerchant}>
          + {isTavern ? "Locanda Vuota" : "Mercante Vuoto"}
        </button>
      </div>

      <div className="merchant-list-title">
        {isTavern ? "Locande" : "Commercianti"}
      </div>

      <MerchantList
        merchants={merchants.filter((item) =>
          isTavern ? item.type === "tavern" : item.type !== "tavern"
        )}
        selectedMerchantId={selectedMerchantId}
        onSelectMerchant={onSelectMerchant}
      />

      <div className="sidebar-footer">
        <button className="sidebar-footer-button">⚙ Impostazioni</button>
        <button className="sidebar-footer-button icon-only">📖</button>
      </div>
    </aside>
  );
}