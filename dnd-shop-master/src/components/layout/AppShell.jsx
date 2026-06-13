import { Component, Suspense, lazy, useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import { MainPanel } from "./MainPanel";

const MobileBase44App = lazy(() =>
  import("../../mobile-base44/MobileBase44App.jsx").then((module) => ({
    default: module.MobileBase44App,
  }))
);

class MobileLazyErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      message: error?.message || "Errore di caricamento della versione mobile.",
    };
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="mobile-native-screen mobile-load-error">
        <h1>Master&rsquo;s Grimoire</h1>
        <p>Non riesco a caricare la versione mobile.</p>
        <small>{this.state.message}</small>
        <button type="button" onClick={() => window.location.reload()}>
          Riprova
        </button>
      </div>
    );
  }
}

function getIsSmartphone() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 640px)").matches;
}

export function AppShell(props) {
  const [isSmartphone, setIsSmartphone] = useState(getIsSmartphone);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const updateLayout = () => setIsSmartphone(mediaQuery.matches);

    updateLayout();
    mediaQuery.addEventListener("change", updateLayout);

    return () => mediaQuery.removeEventListener("change", updateLayout);
  }, []);

  if (isSmartphone) {
    return (
      <div className="mobile-native-shell">
        <MobileLazyErrorBoundary>
          <Suspense fallback={<div className="mobile-native-screen">Caricamento...</div>}>
            <MobileBase44App {...props} />
          </Suspense>
        </MobileLazyErrorBoundary>
      </div>
    );
  }

  return (
    <div className="app-shell desktop-app-shell">
      <Sidebar {...props} />

      <MainPanel
        mode={props.mode}
        onChangeMode={props.onChangeMode}
        combatEntryKey={props.combatEntryKey}
        partyLevel={props.partyLevel}
        generationPrestigeMode={props.generationPrestigeMode}
        onChangeGenerationPrestigeMode={props.onChangeGenerationPrestigeMode}
        merchants={props.merchants}
        onSelectMerchant={props.onSelectMerchant}
        selectedMerchant={props.selectedMerchant}
        onDeleteMerchant={props.onDeleteMerchant}
        onUpdateMerchant={props.onUpdateMerchant}
        onToggleMerchantFavorite={props.onToggleMerchantFavorite}
        onRegenerateDescriptions={props.onRegenerateDescriptions}
        onAddInventoryItem={props.onAddInventoryItem}
        onUpdateInventoryItem={props.onUpdateInventoryItem}
        onDeleteInventoryItem={props.onDeleteInventoryItem}
        onAddMerchant={props.onAddMerchant}
        onAddGeneratedMerchant={props.onAddGeneratedMerchant}
        favoriteMonsterIds={props.favoriteMonsterIds}
        onToggleFavoriteMonster={props.onToggleFavoriteMonster}
        onAddMonsterToCombat={props.onAddMonsterToCombat}
        activeSessionName={props.activeSessionName}
        activeSessionId={props.activeSessionId}
        savedSessions={props.savedSessions}
        onSaveCurrentSession={props.onSaveCurrentSession}
        onCreateEmptySession={props.onCreateEmptySession}
        onLoadSession={props.onLoadSession}
        onRenameSession={props.onRenameSession}
        onDuplicateSession={props.onDuplicateSession}
        onDeleteSession={props.onDeleteSession}
        sessionRegion={props.sessionRegion}
        onChangeSessionRegion={props.onChangeSessionRegion}
      />
    </div>
  );
}
