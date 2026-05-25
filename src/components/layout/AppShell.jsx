import { Sidebar } from "./Sidebar";
import { MainPanel } from "./MainPanel";

export function AppShell(props) {
  return (
    <div className="app">
      <Sidebar {...props} />

      <MainPanel
        selectedMerchant={props.selectedMerchant}
        onDeleteMerchant={props.onDeleteMerchant}
        onUpdateMerchant={props.onUpdateMerchant}
        onRegenerateDescriptions={props.onRegenerateDescriptions}
        onAddInventoryItem={props.onAddInventoryItem}
        onUpdateInventoryItem={props.onUpdateInventoryItem}
        onDeleteInventoryItem={props.onDeleteInventoryItem}
      />
    </div>
  );
}