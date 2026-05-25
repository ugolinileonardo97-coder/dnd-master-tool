import { MerchantHeader } from "../merchants/MerchantHeader";
import { MerchantBehaviorForm } from "../merchants/MerchantBehaviorForm";
import { MerchantQuestPanel } from "../merchants/MerchantQuestPanel";
import { InventoryTable } from "../inventory/InventoryTable";
import { TavernPanel } from "../tavern/TavernPanel";

export function MainPanel({
  selectedMerchant,
  onDeleteMerchant,
  onUpdateMerchant,
  onRegenerateDescriptions,
  onAddInventoryItem,
  onUpdateInventoryItem,
  onDeleteInventoryItem,
}) {
  if (!selectedMerchant) {
    return (
      <main className="main">
        <div className="fantasy-card empty-state">
          Nessun elemento selezionato
        </div>
      </main>
    );
  }

  const isTavern = selectedMerchant.type === "tavern";

  return (
    <main className="main">
      <div className="main-inner">
        <MerchantHeader
          merchant={selectedMerchant}
          onDeleteMerchant={onDeleteMerchant}
        />

        {isTavern ? (
          <TavernPanel
            tavern={selectedMerchant}
            onUpdateMerchant={onUpdateMerchant}
            onRegenerateDescriptions={onRegenerateDescriptions}
          />
        ) : (
          <>
            <MerchantBehaviorForm
              merchant={selectedMerchant}
              onUpdateMerchant={onUpdateMerchant}
              onRegenerateDescriptions={onRegenerateDescriptions}
            />

            <section className="lower-workspace">
              <MerchantQuestPanel
                merchant={selectedMerchant}
                onUpdateMerchant={onUpdateMerchant}
              />

              <InventoryTable
                inventory={selectedMerchant.inventory}
                onAddInventoryItem={onAddInventoryItem}
                onUpdateInventoryItem={onUpdateInventoryItem}
                onDeleteInventoryItem={onDeleteInventoryItem}
              />
            </section>
          </>
        )}
      </div>
    </main>
  );
}