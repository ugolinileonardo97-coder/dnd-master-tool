export function MerchantQuestPanel({ merchant, onUpdateMerchant }) {
  return (
    <section className="quest-card fantasy-card">
      <h2>📜 Side Quest Personale</h2>

      <label>Richiesta del mercante</label>
      <textarea
        className="quest-textarea"
        value={merchant.sideQuest || ""}
        onChange={(e) => onUpdateMerchant("sideQuest", e.target.value)}
      />

      <label>Ricompensa</label>
      <textarea
        className="reward-textarea"
        value={merchant.reward || ""}
        onChange={(e) => onUpdateMerchant("reward", e.target.value)}
      />
    </section>
  );
}