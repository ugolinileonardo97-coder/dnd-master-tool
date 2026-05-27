export function MerchantQuestPanel({ merchant, onUpdateMerchant }) {
  return (
    <section className="sidequest-card fantasy-card">
      <div className="services-title-row">
        <div className="card-icon">📋</div>
        <h2>Side Quest</h2>
      </div>

      <div className="dish-divider">✦</div>

      <textarea
        className="sidequest-main-text"
        value={merchant.sideQuest || ""}
        onChange={(e) => onUpdateMerchant("sideQuest", e.target.value)}
      />

      <div className="sidequest-reward-box">
        <span className="sidequest-reward-title">🏆 Ricompensa</span>

        <textarea
          className="sidequest-reward-text"
          value={merchant.reward || ""}
          onChange={(e) => onUpdateMerchant("reward", e.target.value)}
        />
      </div>
    </section>
  );
}