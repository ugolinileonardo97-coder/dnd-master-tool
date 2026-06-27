import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  reloadPage = () => {
    window.location.reload();
  };

  resetLocalData = () => {
    const volatileKeys = [
      "dnd-shop-combat-state-v1",
      "dnd-shop-generated-map-v1",
    ];

    try {
      volatileKeys.forEach((key) => window.localStorage.removeItem(key));
    } catch {
      // Se il browser blocca lo storage, ricarichiamo comunque.
    }

    window.location.reload();
  };

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    const errorMessage = this.state.error?.message || "Errore sconosciuto";
    const stack = this.state.errorInfo?.componentStack || this.state.error?.stack || "";

    return (
      <main className="app-error-boundary" role="alert">
        <section className="app-error-card fantasy-card">
          <span className="section-kicker">Stabilità app</span>
          <h1>Errore dell’app</h1>
          <p>
            Qualcosa è andato storto nel caricamento. Puoi ricaricare oppure
            resettare i dati locali se il problema dipende da una partita salvata
            corrotta o da cache vecchia del browser.
          </p>

          <div className="app-error-actions">
            <button type="button" className="primary-action" onClick={this.reloadPage}>
              Ricarica
            </button>
            <button type="button" className="danger-action" onClick={this.resetLocalData}>
              Reset cache combat/mappa
            </button>
          </div>

          <details className="app-error-details">
            <summary>Dettaglio tecnico</summary>
            <pre>{errorMessage}{stack ? `\n${stack}` : ""}</pre>
          </details>
        </section>
      </main>
    );
  }
}
