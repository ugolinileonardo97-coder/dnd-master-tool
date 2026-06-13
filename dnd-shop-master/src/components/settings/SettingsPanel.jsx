import { useMemo, useState } from "react";
import { merchantRegions, getMerchantRegionLabel } from "../../data/merchantRegions";

function formatDate(value) {
  if (!value) return "—";

  try {
    return new Intl.DateTimeFormat("it-IT", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(value));
  } catch {
    return "—";
  }
}

export function SettingsPanel({
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
  const [sessionNameDraft, setSessionNameDraft] = useState(
    activeSessionName === "Partita non salvata" ? "" : activeSessionName || ""
  );

  const sortedSessions = useMemo(() => {
    return [...(savedSessions || [])].sort((a, b) =>
      String(b.updatedAt || "").localeCompare(String(a.updatedAt || ""))
    );
  }, [savedSessions]);

  function saveSession() {
    const fallbackName =
      sessionNameDraft.trim() ||
      activeSessionName ||
      `Partita ${new Date().toLocaleDateString("it-IT")}`;

    const sessionId = onSaveCurrentSession(fallbackName);

    if (sessionId) {
      setSessionNameDraft(fallbackName);
    }
  }

  function createNewSession() {
    const nextName =
      window.prompt("Nome della nuova partita?", "Nuova partita") ||
      "Nuova partita";

    onCreateEmptySession(nextName.trim() || "Nuova partita");
    setSessionNameDraft(nextName.trim() || "Nuova partita");
  }

  function renameSession(session) {
    const nextName = window.prompt("Nuovo nome partita", session.name);

    if (!nextName) return;

    onRenameSession(session.id, nextName);
  }

  function deleteSession(session) {
    const confirmed = window.confirm(
      `Eliminare la partita "${session.name}"? Questa azione non può essere annullata.`
    );

    if (!confirmed) return;

    onDeleteSession(session.id);
  }

  return (
    <>
      <section className="settings-hero fantasy-card">
        <div>
          <div className="section-kicker">Archivio del Master</div>
          <h1>Impostazioni</h1>
          <p>
            Gestisci più partite, one-shot o campagne. Ogni salvataggio conserva
            mercanti, locande, inventari e stato del combattimento.
          </p>
        </div>
        <div className="settings-hero-mark">⚙️</div>
      </section>

      <section className="settings-card fantasy-card">
        <div className="card-title-row">
          <div>
            <div className="card-icon">💾</div>
            <h2>Gestione Partita</h2>
          </div>
        </div>

        <div className="active-session-summary">
          <span>Partita attiva</span>
          <strong>{activeSessionName || "Partita non salvata"}</strong>
          <small>Zona: {getMerchantRegionLabel(sessionRegion)}</small>
          <small>
            Salva prima di cambiare partita se vuoi conservare le ultime
            modifiche.
          </small>
        </div>

        <div className="session-save-row">
          <label>
            Nome partita
            <input
              value={sessionNameDraft}
              onChange={(event) => setSessionNameDraft(event.target.value)}
              placeholder="Es. One-shot rovine"
            />
          </label>

          <label>
            Zona geografica della partita
            <select
              value={sessionRegion || "generic"}
              onChange={(event) => onChangeSessionRegion(event.target.value)}
            >
              {merchantRegions.map((region) => (
                <option key={region.id} value={region.id}>
                  {region.label}
                </option>
              ))}
            </select>
          </label>

          <button className="primary-button" onClick={saveSession}>
            Salva partita attuale
          </button>

          <button className="secondary-button" onClick={createNewSession}>
            + Nuova partita vuota
          </button>
        </div>

        <div className="session-list">
          {sortedSessions.length === 0 ? (
            <div className="session-empty-state">
              <strong>Nessuna partita salvata</strong>
              <span>
                Crea una nuova partita o salva lo stato attuale per ritrovarlo
                nelle prossime sessioni.
              </span>
            </div>
          ) : (
            sortedSessions.map((session) => (
              <div
                className={
                  session.id === activeSessionId
                    ? "session-row active"
                    : "session-row"
                }
                key={session.id}
              >
                <div>
                  <strong>{session.name}</strong>
                  <span>
                    Aggiornata {formatDate(session.updatedAt)} · Creata{" "}
                    {formatDate(session.createdAt)}
                  </span>
                </div>

                <div className="session-actions">
                  <button
                    className="secondary-button"
                    onClick={() => onLoadSession(session.id)}
                  >
                    Carica
                  </button>

                  <button
                    className="secondary-button"
                    onClick={() => renameSession(session)}
                  >
                    Rinomina
                  </button>

                  <button
                    className="secondary-button"
                    onClick={() => onDuplicateSession(session.id)}
                  >
                    Duplica
                  </button>

                  <button
                    className="danger-button"
                    onClick={() => deleteSession(session)}
                  >
                    Elimina
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
}
