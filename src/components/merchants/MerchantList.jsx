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
              ? "merchant-button active"
              : "merchant-button"
          }
          onClick={() => onSelectMerchant(merchant.id)}
        >
          <strong>{merchant.name}</strong>

          <span>
            {merchant.shopName || "Bottega senza nome"}
          </span>
        </button>
      ))}
    </div>
  );
}