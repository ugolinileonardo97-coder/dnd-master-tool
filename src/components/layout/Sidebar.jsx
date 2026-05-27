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

  function generateShop() {
    onChangeMode("shop");
    setTimeout(() => onAddGeneratedMerchant(), 0);
  }

  function generateTavern() {
    onChangeMode("tavern");
    setTimeout(() => onAddGeneratedMerchant(), 0);
  }

  function addEmptyShop() {
    onChangeMode("shop");
    setTimeout(() => onAddMerchant(), 0);
  }

  function addEmptyTavern() {
    onChangeMode("tavern");
    setTimeout(() => onAddMerchant(), 0);
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

      <div className="mode-switch">
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
      </div>

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

        <button className="primary-button tavern-button" onClick={generateTavern}>
          🍺 Genera Locanda
        </button>

        <button className="secondary-button" onClick={addEmptyShop}>
          + Mercante Vuoto
        </button>

        <button className="secondary-button" onClick={addEmptyTavern}>
          + Locanda Vuota
        </button>
      </div>

      <div className="merchant-list-title">
        {isTavern ? "Locande" : "Commercianti"}
      </div>

      <MerchantList
        merchants={visibleItems}
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