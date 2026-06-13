import { Suspense, lazy, useEffect, useMemo, useState } from "react";
import { MerchantHeader } from "../merchants/MerchantHeader";
import { MerchantBehaviorForm } from "../merchants/MerchantBehaviorForm";
import { MerchantQuestPanel } from "../merchants/MerchantQuestPanel";
import { InventoryTable } from "../inventory/InventoryTable";
import { TavernPanel } from "../tavern/TavernPanel";
import { SettingsPanel } from "../settings/SettingsPanel";
import { getMerchantRegionLabel } from "../../data/merchantRegions";
import { ConfirmDialog } from "../common/ConfirmDialog";

const BestiaryPanel = lazy(() =>
  import("../bestiary/BestiaryPanel").then((module) => ({
    default: module.BestiaryPanel,
  }))
);

const CombatPanel = lazy(() =>
  import("../combat/CombatPanel").then((module) => ({
    default: module.CombatPanel,
  }))
);

const CampaignMapPanel = lazy(() =>
  import("../map/CampaignMapPanel").then((module) => ({
    default: module.CampaignMapPanel,
  }))
);

function LazySectionFallback({ label = "Caricamento sezione..." }) {
  return (
    <section className="lazy-section-fallback fantasy-card">
      <span className="section-kicker">Archivio</span>
      <p>{label}</p>
    </section>
  );
}

function useSmartphoneLayout() {
  const [isSmartphone, setIsSmartphone] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const updateLayout = () => setIsSmartphone(mediaQuery.matches);

    updateLayout();
    mediaQuery.addEventListener("change", updateLayout);

    return () => mediaQuery.removeEventListener("change", updateLayout);
  }, []);

  return isSmartphone;
}

function MobileBackButton({ children = "Indietro", onClick }) {
  return (
    <button className="mobile-back-button" type="button" onClick={onClick}>
      ← {children}
    </button>
  );
}

function MobileEntityList({ title, description, items, emptyText, onOpen }) {
  return (
    <section className="mobile-list-screen fantasy-card">
      <div className="section-kicker">Archivio mobile</div>
      <h1>{title}</h1>
      <p>{description}</p>

      <div className="mobile-entity-list">
        {items.length === 0 ? (
          <div className="mobile-empty-state">{emptyText}</div>
        ) : (
          items.map((item) => (
            <button
              className="mobile-entity-row"
              key={item.id}
              type="button"
              onClick={() => onOpen(item)}
            >
              <div>
                <strong>
                  {item.name || "Nome non definito"} {item.favorite ? "★" : ""}
                </strong>
                <span>{item.shopName || "Attività senza nome"}</span>
              </div>

              <div className="mobile-entity-meta">
                <span>{getMerchantRegionLabel(item.region || "generic")}</span>
                {item.reputation && <span>{item.reputation}</span>}
                {item.type !== "tavern" && item.shopTier && (
                  <span>{item.shopTier}</span>
                )}
                {item.type !== "tavern" && item.discount && (
                  <span>Sconti {item.discount}</span>
                )}
              </div>
            </button>
          ))
        )}
      </div>
    </section>
  );
}

function MobileSectionTabs({ sections, activeSection, onChange }) {
  return (
    <div className="mobile-section-tabs" aria-label="Sezioni dettaglio">
      {sections.map((section) => (
        <button
          key={section.id}
          type="button"
          className={activeSection === section.id ? "active" : ""}
          onClick={() => onChange(section.id)}
        >
          {section.label}
        </button>
      ))}
    </div>
  );
}

function SectionActionBar({ isTavern, onGenerate, onCreateEmpty }) {
  return (
    <section className="section-action-bar fantasy-card">
      <div>
        <div className="section-kicker">
          {isTavern ? "Gestione locande" : "Gestione mercanti"}
        </div>
        <h1>{isTavern ? "Locande" : "Mercanti"}</h1>
        <p>
          {isTavern
            ? "Genera, modifica e salva locande della campagna."
            : "Genera, modifica e salva commercianti della campagna."}
        </p>
      </div>

      <div className="section-action-buttons">
        <button className="primary-button" type="button" onClick={onGenerate}>
          {isTavern ? "🎲 Genera locanda" : "🎲 Genera mercante"}
        </button>
        <button className="secondary-button" type="button" onClick={onCreateEmpty}>
          {isTavern ? "+ Locanda vuota" : "+ Mercante vuoto"}
        </button>
      </div>
    </section>
  );
}


// eslint-disable-next-line no-unused-vars
function SectionShortcutNav({ isTavern }) {
  const options = isTavern
    ? [
        { id: "tavern-sheet", label: "Scheda locanda" },
        { id: "tavern-rooms", label: "Camere" },
        { id: "tavern-dish", label: "Piatto del giorno" },
        { id: "tavern-services", label: "Servizi" },
        { id: "tavern-quest", label: "Side quest" },
      ]
    : [
        { id: "merchant-sheet", label: "Scheda commerciante" },
        { id: "merchant-inventory", label: "Inventario" },
        { id: "merchant-quest", label: "Side quest" },
      ];

  function handleChange(event) {
    const targetId = event.target.value;
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    event.target.value = "";
  }

  return (
    <div className="removed-shortcut-bar">
      <div>
        <span>Sezione</span>
        <strong>{isTavern ? "Locanda" : "Commerciante"}</strong>
      </div>

      <select defaultValue="" onChange={handleChange}>
        <option value="" disabled>
          Scegli una sezione…
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function MainPanel({
  mode,
  onChangeMode,
  combatEntryKey,
  partyLevel,
  merchants,
  onSelectMerchant,
  selectedMerchant,
  onDeleteMerchant,
  onUpdateMerchant,
  onToggleMerchantFavorite,
  onRegenerateDescriptions,
  onAddInventoryItem,
  onUpdateInventoryItem,
  onDeleteInventoryItem,
  onAddMerchant,
  onAddGeneratedMerchant,
  favoriteMonsterIds,
  onToggleFavoriteMonster,
  onAddMonsterToCombat,

  activeSessionName,
  activeSessionId,
  savedSessions,
  onSaveCurrentSession,
  onCreateEmptySession,
  onLoadSession,
  onRenameSession,
  onDuplicateSession,
  onDeleteSession,
  sessionRegion,
  onChangeSessionRegion,
}) {
  const isSmartphone = useSmartphoneLayout();
  const [mobileDetailView, setMobileDetailView] = useState(null);
  const [mobileDetailMode, setMobileDetailMode] = useState(null);
  const [selectedMobileEntityId, setSelectedMobileEntityId] = useState(null);
  const [activeMobileSection, setActiveMobileSection] = useState("sheet");
  const [pendingDeleteEntity, setPendingDeleteEntity] = useState(null);
  const [pendingPrestigeChange, setPendingPrestigeChange] = useState(null);

  const mobileItems = useMemo(() => {
    if (mode === "tavern") {
      return merchants.filter((merchant) => merchant.type === "tavern");
    }

    if (mode === "shop") {
      return merchants.filter((merchant) => merchant.type !== "tavern");
    }

    return [];
  }, [merchants, mode]);

  function selectMapItem(item) {
    onSelectMerchant(item.id);
    onChangeMode(item.type === "tavern" ? "tavern" : "shop");
  }

  function openMobileEntity(item) {
    onSelectMerchant(item.id);
    setSelectedMobileEntityId(item.id);
    setMobileDetailMode(mode);
    setMobileDetailView(item.type === "tavern" ? "tavernDetail" : "merchantDetail");
    setActiveMobileSection("sheet");
  }

  function closeMobileDetail() {
    setMobileDetailView(null);
    setMobileDetailMode(null);
    setSelectedMobileEntityId(null);
    setActiveMobileSection("sheet");
  }

  function requestDeleteMerchant(entity = selectedMerchant) {
    if (!entity) return;
    setPendingDeleteEntity(entity);
  }

  function confirmDeleteMerchant() {
    if (!pendingDeleteEntity) return;
    onSelectMerchant(pendingDeleteEntity.id);
    onDeleteMerchant(pendingDeleteEntity.id);
    setPendingDeleteEntity(null);
    closeMobileDetail();
  }

  function handleUpdateMerchant(field, value, options = {}) {
    if (field === "prestige" && typeof options.regeneratePrestige !== "boolean") {
      setPendingPrestigeChange({
        entity: selectedMerchant,
        value,
      });
      return;
    }

    onUpdateMerchant(field, value, options);
  }

  function applyPrestigeChange(regeneratePrestige) {
    if (!pendingPrestigeChange?.entity) return;
    onSelectMerchant(pendingPrestigeChange.entity.id);
    onUpdateMerchant("prestige", pendingPrestigeChange.value, {
      regeneratePrestige,
    });
    setPendingPrestigeChange(null);
  }

  function renderMainDialogs() {
    const deleteTitle = pendingDeleteEntity?.type === "tavern"
      ? "Eliminare locanda?"
      : "Eliminare mercante?";
    const deleteName =
      pendingDeleteEntity?.type === "tavern"
        ? pendingDeleteEntity?.shopName || "questa locanda"
        : pendingDeleteEntity?.name || "questo mercante";
    const prestigeIsTavern = pendingPrestigeChange?.entity?.type === "tavern";

    return (
      <>
        <ConfirmDialog
          open={Boolean(pendingDeleteEntity)}
          title={deleteTitle}
          message={`Vuoi eliminare "${deleteName}"? Questa azione non puo essere annullata.`}
          confirmLabel="Elimina"
          cancelLabel="Annulla"
          variant="danger"
          onConfirm={confirmDeleteMerchant}
          onCancel={() => setPendingDeleteEntity(null)}
        />

        <ConfirmDialog
          open={Boolean(pendingPrestigeChange)}
          title="Cambiare prestigio?"
          message={
            prestigeIsTavern
              ? "Vuoi rigenerare camere, servizi, piatto e descrizioni in base al nuovo prestigio?"
              : "Vuoi rigenerare descrizione e inventario in base al nuovo prestigio?"
          }
          confirmLabel="Rigenera contenuti"
          secondaryLabel="Solo cambia prestigio"
          cancelLabel="Annulla"
          onConfirm={() => applyPrestigeChange(true)}
          onSecondary={() => applyPrestigeChange(false)}
          onCancel={() => setPendingPrestigeChange(null)}
        />
      </>
    );
  }

  if (mode === "bestiary") {
    return (
      <main className="main">
        <div className="main-inner">
          <Suspense fallback={<LazySectionFallback label="Caricamento bestiario..." />}>
            <BestiaryPanel
              favoriteMonsterIds={favoriteMonsterIds}
              onToggleFavoriteMonster={onToggleFavoriteMonster}
              onAddMonsterToCombat={onAddMonsterToCombat}
            />
          </Suspense>
        </div>
      </main>
    );
  }

  if (mode === "combat") {
    return (
      <main className="main combat-main">
        <div className="main-inner combat-main-inner">
          <Suspense fallback={<LazySectionFallback label="Caricamento combattimento..." />}>
            <CombatPanel
              selectedMerchant={selectedMerchant}
              combatEntryKey={combatEntryKey}
            />
          </Suspense>
        </div>
      </main>
    );
  }

  if (mode === "settings") {
    return (
      <main className="main">
        <div className="main-inner">
          <SettingsPanel
            activeSessionName={activeSessionName}
            activeSessionId={activeSessionId}
            savedSessions={savedSessions}
            onSaveCurrentSession={onSaveCurrentSession}
            onCreateEmptySession={onCreateEmptySession}
            onLoadSession={onLoadSession}
            onRenameSession={onRenameSession}
            onDuplicateSession={onDuplicateSession}
            onDeleteSession={onDeleteSession}
            sessionRegion={sessionRegion}
            onChangeSessionRegion={onChangeSessionRegion}
          />
        </div>
      </main>
    );
  }

  if (mode === "map") {
    return (
      <main className="main">
        <div className="main-inner">
          <Suspense fallback={<LazySectionFallback label="Caricamento mappe..." />}>
            <CampaignMapPanel
              merchants={merchants}
              onSelectMapItem={selectMapItem}
              activeSessionId={activeSessionId}
            />
          </Suspense>
        </div>
      </main>
    );
  }

  if (mode === "shop" || mode === "tavern") {
    const isTavernSection = mode === "tavern";
    const selectedMerchantMatchesSection =
      selectedMerchant &&
      ((isTavernSection && selectedMerchant.type === "tavern") ||
        (!isTavernSection && selectedMerchant.type !== "tavern"));

    if (!selectedMerchantMatchesSection) {
      return (
        <main className="main">
          <div className="main-inner">
            <SectionActionBar
              isTavern={isTavernSection}
              onGenerate={() =>
                onAddGeneratedMerchant(isTavernSection ? "tavern" : "shop")
              }
              onCreateEmpty={() =>
                onAddMerchant(isTavernSection ? "tavern" : "shop")
              }
            />

            <section className="section-empty-state fantasy-card">
              <div className="section-kicker">
                {isTavernSection ? "Archivio locande" : "Archivio mercanti"}
              </div>
              <h2>{isTavernSection ? "Locande" : "Mercanti"}</h2>
              <p>
                {isTavernSection
                  ? "Nessuna locanda creata."
                  : "Nessun mercante creato."}
              </p>
            </section>
          </div>
        </main>
      );
    }
  }

  if (!selectedMerchant) {
    return (
      <main className="main">
        <div className="grimoire-empty fantasy-card">
          <div className="empty-symbol">⚜</div>
          <div className="section-kicker">Nuova scena</div>
          <h1>Inizia una nuova scena</h1>
          <p>
            Scegli la sezione su cui lavorare. La generazione principale resta
            dentro Mercanti e Locande, così ogni flusso rimane separato e chiaro.
          </p>
          <div className="home-context-summary">
            <span>Partita: {activeSessionName || "Partita non salvata"}</span>
            <span>🗺️ Area: {getMerchantRegionLabel(sessionRegion)}</span>
            <span>🎚️ Livello party: {partyLevel}</span>
          </div>

          <p className="home-sidebar-hint">
            Scegli una sezione dal pannello laterale.
          </p>

          <div className="home-navigation-actions">
            <button
              type="button"
              onClick={() => onSaveCurrentSession()}
            >
              ⚙️ Salva partita
            </button>
          </div>
        </div>
      </main>
    );
  }

  const isTavernMode = mode === "tavern";
  const isShopMode = mode === "shop";
  const selectedMerchantMatchesMode =
    (isTavernMode && selectedMerchant.type === "tavern") ||
    (isShopMode && selectedMerchant.type !== "tavern");

  if ((isTavernMode || isShopMode) && !selectedMerchantMatchesMode) {
    return (
      <main className="main">
        <div className="main-inner">
          <SectionActionBar
            isTavern={isTavernMode}
            onGenerate={() => onAddGeneratedMerchant(isTavernMode ? "tavern" : "shop")}
            onCreateEmpty={() => onAddMerchant(isTavernMode ? "tavern" : "shop")}
          />

          <section className="section-empty-state fantasy-card">
            <div className="section-kicker">
              {isTavernMode ? "Archivio locande" : "Archivio mercanti"}
            </div>
            <h2>
              {isTavernMode
                ? "Nessuna locanda selezionata"
                : "Nessun mercante selezionato"}
            </h2>
            <p>
              Usa le azioni qui sopra per creare un nuovo elemento in questa
              sezione, oppure scegli una voce dalla lista laterale.
            </p>
          </section>
        </div>
      </main>
    );
  }

  const isTavern = isTavernMode;

  if (isSmartphone && (mode === "shop" || mode === "tavern")) {
    const isDetailForCurrentMode = mobileDetailMode === mode;
    const currentMobileEntity = isDetailForCurrentMode
      ? merchants.find((merchant) => merchant.id === selectedMobileEntityId) ||
        selectedMerchant
      : null;

    if (!mobileDetailView || !currentMobileEntity || !isDetailForCurrentMode) {
      return (
        <main className="main">
          <div className="main-inner mobile-main-inner">
            <MobileEntityList
              title={mode === "tavern" ? "Locande" : "Mercanti"}
              description={
                mode === "tavern"
                  ? "Tocca una locanda per aprire la scheda dedicata."
                  : "Tocca un mercante per aprire la scheda dedicata."
              }
              items={mobileItems}
              emptyText={
                mode === "tavern"
                  ? "Nessuna locanda creata."
                  : "Nessun mercante creato."
              }
              onOpen={openMobileEntity}
            />
          </div>
        </main>
      );
    }

    const currentIsTavern = currentMobileEntity.type === "tavern";
    const merchantSections = [
      { id: "sheet", label: "Descrizione" },
      { id: "inventory", label: "Inventario" },
      { id: "quest", label: "Side Quest" },
    ];
    const tavernSections = [
      { id: "sheet", label: "Scheda" },
      { id: "rooms", label: "Camere" },
      { id: "dish", label: "Piatto" },
      { id: "services", label: "Servizi" },
      { id: "quest", label: "Side Quest" },
    ];

    return (
      <main className="main">
        <div className="main-inner mobile-main-inner mobile-detail-screen">
          <MobileBackButton onClick={closeMobileDetail} />

          <MerchantHeader
            merchant={currentMobileEntity}
            onDeleteMerchant={() => requestDeleteMerchant(currentMobileEntity)}
            onToggleFavorite={() => onToggleMerchantFavorite(currentMobileEntity.id)}
          />

          <MobileSectionTabs
            sections={currentIsTavern ? tavernSections : merchantSections}
            activeSection={activeMobileSection}
            onChange={setActiveMobileSection}
          />

          {currentIsTavern ? (
            <TavernPanel
              tavern={currentMobileEntity}
              onUpdateMerchant={handleUpdateMerchant}
              onRegenerateDescriptions={onRegenerateDescriptions}
              mobileSection={activeMobileSection}
            />
          ) : (
            <>
              {activeMobileSection === "sheet" && (
                <MerchantBehaviorForm
                  merchant={currentMobileEntity}
                  onUpdateMerchant={handleUpdateMerchant}
                  onRegenerateDescriptions={onRegenerateDescriptions}
                />
              )}

              {activeMobileSection === "inventory" && (
                <InventoryTable
                  inventory={currentMobileEntity.inventory || []}
                  onAddInventoryItem={onAddInventoryItem}
                  onUpdateInventoryItem={onUpdateInventoryItem}
                  onDeleteInventoryItem={onDeleteInventoryItem}
                />
              )}

              {activeMobileSection === "quest" && (
                <MerchantQuestPanel
                  merchant={currentMobileEntity}
                  onUpdateMerchant={handleUpdateMerchant}
                />
              )}
            </>
          )}
        </div>
        {renderMainDialogs()}
      </main>
    );
  }

	  return (
	    <main className="main">
	      <div className="main-inner">
        <SectionActionBar
          isTavern={isTavern}
          onGenerate={() => onAddGeneratedMerchant(isTavern ? "tavern" : "shop")}
          onCreateEmpty={() => onAddMerchant(isTavern ? "tavern" : "shop")}
        />

	        <div className="session-context-banner">
          <span>Partita attiva</span>
          <strong>{activeSessionName || "Partita non salvata"}</strong>
          <small>Zona: {getMerchantRegionLabel(sessionRegion)}</small>
          <small>
            {isTavern
              ? "Questa locanda verrà salvata nella partita attiva."
              : "Questo mercante e il suo inventario verranno salvati nella partita attiva."}
          </small>
        </div>

        <MerchantHeader
          merchant={selectedMerchant}
          onDeleteMerchant={() => requestDeleteMerchant(selectedMerchant)}
          onToggleFavorite={() => onToggleMerchantFavorite(selectedMerchant.id)}
        />

        {isTavern ? (
          <TavernPanel
            tavern={selectedMerchant}
            onUpdateMerchant={handleUpdateMerchant}
            onRegenerateDescriptions={onRegenerateDescriptions}
          />
        ) : (
          <>
            <MerchantBehaviorForm
              merchant={selectedMerchant}
              onUpdateMerchant={handleUpdateMerchant}
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
              onUpdateMerchant={handleUpdateMerchant}
            />
          </>
        )}
      </div>
      {renderMainDialogs()}
    </main>
  );
}
