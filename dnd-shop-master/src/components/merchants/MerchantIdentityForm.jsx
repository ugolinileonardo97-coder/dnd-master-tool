export function MerchantIdentityForm({ merchant, onUpdateMerchant }) {
  return (
    <section className="identity-card fantasy-card sheet-card">
      <h2><span className="section-glyph">▧</span> Identità</h2>

      <label>Nome commerciante</label>
      <input
        value={merchant.name || ""}
        onChange={(e) => onUpdateMerchant("name", e.target.value)}
      />

      <label>Razza</label>
      <input
        value={merchant.race || ""}
        onChange={(e) => onUpdateMerchant("race", e.target.value)}
      />

      <label>Nome bottega</label>
      <input
        value={merchant.shopName || ""}
        onChange={(e) => onUpdateMerchant("shopName", e.target.value)}
      />

      <label>Posizione</label>
      <input
        value={merchant.location || ""}
        onChange={(e) => onUpdateMerchant("location", e.target.value)}
      />
    </section>
  );
}
