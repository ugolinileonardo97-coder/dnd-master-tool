import { useState } from "react";

const categories = [
  { key: "Armi", label: "⚔️ Armi" },
  { key: "Armature", label: "🛡️ Armature" },
  { key: "Pozioni", label: "🧪 Pozioni" },
  { key: "Oggetti", label: "📦 Oggetti" },
  { key: "Varie", label: "🎒 Varie" },
];

function getRarityLabel(item) {
  return item.rarity || "Comune";
}

function getRarityClass(rarity) {
  const normalized = String(rarity || "Comune").toLowerCase();

  if (normalized.includes("leggendaria") || normalized.includes("leggendario")) {
    return "legendary";
  }

  if (normalized.includes("molto rara") || normalized.includes("molto raro")) {
    return "very-rare";
  }

  if (normalized.includes("rara") || normalized.includes("raro")) {
    return "rare";
  }

  if (normalized.includes("non comune")) {
    return "uncommon";
  }

  return "common";
}

export function InventoryTable({
  inventory = [],
  onAddInventoryItem,
  onUpdateInventoryItem,
  onDeleteInventoryItem,
}) {
  const [activeCategory, setActiveCategory] = useState("Armi");

  const filteredInventory = inventory.filter((item) => {
    if (activeCategory === "Varie") {
      return !["Armi", "Armature", "Pozioni", "Oggetti"].includes(
        item.category
      );
    }

    return item.category === activeCategory;
  });

  function countByCategory(categoryKey) {
    return inventory.filter((item) =>
      categoryKey === "Varie"
        ? !["Armi", "Armature", "Pozioni", "Oggetti"].includes(item.category)
        : item.category === categoryKey
    ).length;
  }

  return (
    <section className="inventory-card fantasy-card">
      <div className="card-title-row inventory-title-row">
        <div>
          <div className="card-icon">📜</div>
          <h2>Inventario</h2>
        </div>

        <button className="primary-button compact" onClick={onAddInventoryItem}>
          + Aggiungi Oggetto
        </button>
      </div>

      <div className="inventory-tabs">
        {categories.map((category) => (
          <button
            key={category.key}
            className={
              activeCategory === category.key
                ? "inventory-tab active"
                : "inventory-tab"
            }
            onClick={() => setActiveCategory(category.key)}
          >
            {category.label}
            <span>{countByCategory(category.key)}</span>
          </button>
        ))}
      </div>

      <div className="inventory-list">
        <div className="inventory-list-head">
          <span>Nome</span>
          <span>Dettagli</span>
          <span>Q.tà</span>
          <span>Rarità</span>
          <span>Prezzo</span>
          <span></span>
        </div>

        {filteredInventory.length === 0 ? (
          <div className="inventory-empty">
            Nessun oggetto in questa categoria.
          </div>
        ) : (
          filteredInventory.map((item) => {
            const rarity = getRarityLabel(item);
            const rarityClass = getRarityClass(rarity);

            return (
              <div className="inventory-list-row" key={item.id}>
                <textarea
                  className="item-name-input"
                  value={item.name || ""}
                  onChange={(e) =>
                    onUpdateInventoryItem(item.id, "name", e.target.value)
                  }
                />

                <textarea
                  className="item-details-input"
                  value={item.notes || item.description || ""}
                  onChange={(e) =>
                    onUpdateInventoryItem(item.id, "notes", e.target.value)
                  }
                />

                <input
                  className="item-qty-input"
                  type="number"
                  value={item.qty || 1}
                  onChange={(e) =>
                    onUpdateInventoryItem(item.id, "qty", e.target.value)
                  }
                />

                <div className="item-rarity-cell">
                  <span className={`item-rarity-badge ${rarityClass}`}>
                    {rarity}
                  </span>
                </div>

                <input
                  className="item-price-input"
                  value={item.price || ""}
                  onChange={(e) =>
                    onUpdateInventoryItem(item.id, "price", e.target.value)
                  }
                />

                <button
                  className="icon-button inventory-delete-button"
                  onClick={() => onDeleteInventoryItem(item.id)}
                >
                  ✕
                </button>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}