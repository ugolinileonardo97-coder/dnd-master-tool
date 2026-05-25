export function InventoryTable({
  inventory,
  onAddInventoryItem,
  onUpdateInventoryItem,
  onDeleteInventoryItem,
}) {
  return (
    <section className="inventory-card fantasy-card">
      <div className="card-title-row">
        <h2>⚱ Inventario</h2>

        <button className="primary-button compact" onClick={onAddInventoryItem}>
          + Aggiungi Oggetto
        </button>
      </div>

      <div className="inventory-table">
        <div className="inventory-row inventory-head">
          <span>Nome</span>
          <span>Tipo</span>
          <span>Q.tà</span>
          <span>Prezzo</span>
          <span>Descrizione</span>
          <span>Azioni</span>
        </div>

        {inventory.map((item) => (
          <div className="inventory-row" key={item.id}>
            <input
              value={item.name}
              onChange={(e) =>
                onUpdateInventoryItem(item.id, "name", e.target.value)
              }
            />

            <input
              value={item.category}
              onChange={(e) =>
                onUpdateInventoryItem(item.id, "category", e.target.value)
              }
            />

            <input
              type="number"
              value={item.qty}
              onChange={(e) =>
                onUpdateInventoryItem(item.id, "qty", e.target.value)
              }
            />

            <input
              value={item.price}
              onChange={(e) =>
                onUpdateInventoryItem(item.id, "price", e.target.value)
              }
            />

            <input
              value={item.notes}
              onChange={(e) =>
                onUpdateInventoryItem(item.id, "notes", e.target.value)
              }
            />

            <button
              className="icon-button"
              onClick={() => onDeleteInventoryItem(item.id)}
            >
              🗑
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}