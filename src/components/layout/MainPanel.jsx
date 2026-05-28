import { MerchantHeader } from "../merchants/MerchantHeader";
import { MerchantBehaviorForm } from "../merchants/MerchantBehaviorForm";
import { MerchantQuestPanel } from "../merchants/MerchantQuestPanel";
import { InventoryTable } from "../inventory/InventoryTable";
import { TavernPanel } from "../tavern/TavernPanel";
import { BestiaryPanel } from "../bestiary/BestiaryPanel";

export function MainPanel({
  mode,
  selectedMerchant,
  onDeleteMerchant,
  onUpdateMerchant,
  onRegenerateDescriptions,
  onAddInventoryItem,
  onUpdateInventoryItem,
  onDeleteInventoryItem,
}) {
  if (mode === "bestiary") {
    return (
      <main className="main">
        <div className="main-inner">
          <BestiaryPanel />
        </div>
      </main>
    );
  }

  if (!selectedMerchant) {
    return (
      <main className="main">
        <div className="grimoire-empty fantasy-card">
          <div className="empty-symbol">⚜</div>
          <h1>DM’s Grimoire</h1>
          <p>Genera un mercante o una locanda per iniziare la sessione.</p>
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

            <InventoryTable
              inventory={selectedMerchant.inventory || []}
              onAddInventoryItem={onAddInventoryItem}
              onUpdateInventoryItem={onUpdateInventoryItem}
              onDeleteInventoryItem={onDeleteInventoryItem}
            />

            <MerchantQuestPanel
              merchant={selectedMerchant}
              onUpdateMerchant={onUpdateMerchant}
            />
          </>
        )}
      </div>
    </main>
  );
}