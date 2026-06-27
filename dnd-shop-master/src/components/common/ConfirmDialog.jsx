export function ConfirmDialog({
  open,
  title,
  message,
  confirmLabel = "Conferma",
  secondaryLabel = "",
  cancelLabel = "Annulla",
  onConfirm,
  onSecondary,
  onCancel,
  variant = "normal",
}) {
  if (!open) return null;

  return (
    <div className="app-confirm-overlay" role="dialog" aria-modal="true">
      <section className="app-confirm-dialog fantasy-card">
        <h2>{title}</h2>
        <p>{message}</p>

        <div
          className={
            secondaryLabel
              ? "app-confirm-actions with-secondary"
              : "app-confirm-actions"
          }
        >
          {secondaryLabel && (
            <button className="secondary-button" type="button" onClick={onSecondary}>
              {secondaryLabel}
            </button>
          )}

          <button
            className={variant === "danger" ? "danger-button" : "primary-button"}
            type="button"
            onClick={onConfirm}
          >
            {confirmLabel}
          </button>

          <button className="secondary-button ghost" type="button" onClick={onCancel}>
            {cancelLabel}
          </button>
        </div>
      </section>
    </div>
  );
}
