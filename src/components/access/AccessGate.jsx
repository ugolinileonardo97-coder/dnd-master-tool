import { useEffect, useState } from "react";
import "./access-gate.css";

const ACCESS_TYPE_KEY = "mg_access_type";
const ACCESS_EXPIRES_AT_KEY = "mg_access_expires_at";
const TEMPORARY_ACCESS_CODE = "MG-DEMO-2026";
const LIFETIME_ACCESS_CODE = "MG-LIFETIME-ADMIN";
const TEMPORARY_ACCESS_DURATION = 30 * 60 * 1000;
const ACCESS_CHECK_INTERVAL = 30 * 1000;

function clearStoredAccess() {
  try {
    window.localStorage.removeItem(ACCESS_TYPE_KEY);
    window.localStorage.removeItem(ACCESS_EXPIRES_AT_KEY);
  } catch {
    // Storage can be unavailable in private or restricted browser contexts.
  }
}

function readStoredAccess() {
  try {
    const accessType = window.localStorage.getItem(ACCESS_TYPE_KEY);

    if (accessType === "lifetime") {
      return { isGranted: true, accessType, reason: "" };
    }

    if (accessType === "temporary") {
      const expiresAt = Number(
        window.localStorage.getItem(ACCESS_EXPIRES_AT_KEY)
      );

      if (Number.isFinite(expiresAt) && Date.now() < expiresAt) {
        return { isGranted: true, accessType, expiresAt, reason: "" };
      }

      clearStoredAccess();
      return { isGranted: false, accessType: null, reason: "expired" };
    }

    if (accessType) clearStoredAccess();
  } catch {
    // A blocked localStorage behaves like a signed-out browser.
  }

  return { isGranted: false, accessType: null, reason: "" };
}

function storeTemporaryAccess(expiresAt) {
  window.localStorage.setItem(ACCESS_TYPE_KEY, "temporary");
  window.localStorage.setItem(ACCESS_EXPIRES_AT_KEY, String(expiresAt));
}

function storeLifetimeAccess() {
  window.localStorage.setItem(ACCESS_TYPE_KEY, "lifetime");
  window.localStorage.removeItem(ACCESS_EXPIRES_AT_KEY);
}

export function AccessGate({ children }) {
  const [access, setAccess] = useState(readStoredAccess);
  const [code, setCode] = useState("");

  useEffect(() => {
    if (!access.isGranted || access.accessType !== "temporary") return undefined;

    function verifyTemporaryAccess() {
      const nextAccess = readStoredAccess();
      if (!nextAccess.isGranted) setAccess(nextAccess);
    }

    const intervalId = window.setInterval(
      verifyTemporaryAccess,
      ACCESS_CHECK_INTERVAL
    );
    document.addEventListener("visibilitychange", verifyTemporaryAccess);

    return () => {
      window.clearInterval(intervalId);
      document.removeEventListener("visibilitychange", verifyTemporaryAccess);
    };
  }, [access.accessType, access.isGranted]);

  function grantAccess(event) {
    event.preventDefault();
    const normalizedCode = code.trim();

    if (normalizedCode === TEMPORARY_ACCESS_CODE) {
      const expiresAt = Date.now() + TEMPORARY_ACCESS_DURATION;

      try {
        storeTemporaryAccess(expiresAt);
      } catch {
        // Keep the current demo usable even if this browser blocks storage.
      }

      setAccess({
        isGranted: true,
        accessType: "temporary",
        expiresAt,
        reason: "",
      });
      return;
    }

    if (normalizedCode === LIFETIME_ACCESS_CODE) {
      try {
        storeLifetimeAccess();
      } catch {
        // Keep the current session usable even if persistence is unavailable.
      }

      setAccess({ isGranted: true, accessType: "lifetime", reason: "" });
      return;
    }

    setAccess((current) => ({ ...current, reason: "invalid" }));
  }

  if (access.isGranted) return children;

  return (
    <main className="access-gate">
      <section className="access-gate-card" aria-labelledby="access-gate-title">
        <div className="access-gate-sigil" aria-hidden="true"><span>MG</span></div>
        <p className="access-gate-kicker">Archivio del Dungeon Master</p>
        <h1 id="access-gate-title">MASTER&rsquo;S GRIMOIRE</h1>
        <p className="access-gate-subtitle">Accesso demo</p>

        <form className="access-gate-form" onSubmit={grantAccess}>
          <label htmlFor="access-code">Codice di accesso</label>
          <input
            id="access-code"
            type="password"
            value={code}
            onChange={(event) => {
              setCode(event.target.value);
              if (access.reason) {
                setAccess((current) => ({ ...current, reason: "" }));
              }
            }}
            autoComplete="off"
            autoCapitalize="characters"
            spellCheck="false"
            required
          />

          {access.reason === "invalid" && (
            <p className="access-gate-error" role="alert">Codice non valido</p>
          )}
          {access.reason === "expired" && (
            <p className="access-gate-error" role="alert">
              Sessione demo scaduta. Inserisci nuovamente il codice.
            </p>
          )}

          <button type="submit">Accedi</button>
        </form>
      </section>
    </main>
  );
}
