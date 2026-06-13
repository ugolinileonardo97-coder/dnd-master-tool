const homeCards = [
  { id: "merchants", title: "Mercanti", subtitle: "Botteghe e inventari", mark: "◆" },
  { id: "taverns", title: "Locande", subtitle: "Ospitalita e quest", mark: "◈" },
  { id: "bestiary", title: "Bestiario", subtitle: "Creature e GS", mark: "✦" },
  { id: "combat", title: "Combattimento", subtitle: "Turni e PF", mark: "⚔" },
  { id: "map", title: "Mappa", subtitle: "Zone campagna", mark: "⌖" },
];

export function MobileHomeV2({
  activeSessionName,
  regionLabel,
  partyLevel,
  onNavigate,
}) {
  return (
    <main className="mobile-v2-screen mobile-v2-home">
      <header className="mobile-v2-hero">
        <span>Assistente Master</span>
        <h1>D&amp;D Shop</h1>
        <p>Una schermata alla volta. Pulita, rapida, pronta per il tavolo.</p>
      </header>

      <section className="mobile-v2-session-card">
        <div>
          <span>Partita attiva</span>
          <strong>{activeSessionName || "Partita non salvata"}</strong>
        </div>
        <div className="mobile-v2-session-meta">
          <span>{regionLabel}</span>
          <span>Livello party {partyLevel || 1}</span>
        </div>
      </section>

      <section className="mobile-v2-card-grid" aria-label="Sezioni principali">
        {homeCards.map((card) => (
          <button
            key={card.id}
            type="button"
            className="mobile-v2-home-card"
            onClick={() => onNavigate(card.id)}
          >
            <span aria-hidden="true">{card.mark}</span>
            <strong>{card.title}</strong>
            <small>{card.subtitle}</small>
          </button>
        ))}
      </section>
    </main>
  );
}
