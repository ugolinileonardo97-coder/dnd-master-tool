export function MerchantList({
  merchants,
  selectedMerchantId,
  onSelectMerchant,
}) {
  return (
    <div className="merchant-list">
      {merchants.map((merchant) => (
        <button
          key={merchant.id}
          className={
            merchant.id === selectedMerchantId
              ? merchant.favorite
                ? "merchant-button active favorite"
                : "merchant-button active"
              : merchant.favorite
                ? "merchant-button favorite"
                : "merchant-button"
          }
          onClick={() => onSelectMerchant(merchant.id)}
        >
          {merchant.favorite && (
            <span className="merchant-favorite-mark" aria-hidden="true">
              ★
            </span>
          )}

          <strong>{merchant.name}</strong>

          <span>
            {merchant.shopName || "Bottega senza nome"}
          </span>
        </button>
      ))}
    </div>
  );
}
