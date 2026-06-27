import { useEffect, useState } from "react";

function readStorageValue(key, initialValue) {
  if (typeof window === "undefined" || !window.localStorage) {
    return initialValue;
  }

  try {
    const savedValue = window.localStorage.getItem(key);

    if (!savedValue) {
      return initialValue;
    }

    return JSON.parse(savedValue);
  } catch {
    try {
      window.localStorage.removeItem(key);
    } catch {
      // Safari/private browsing/tablet storage can throw here too.
    }

    return initialValue;
  }
}

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => readStorageValue(key, initialValue));

  useEffect(() => {
    if (typeof window === "undefined" || !window.localStorage) return;

    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Evita crash se localStorage è pieno, corrotto o bloccato.
    }
  }, [key, value]);

  return [value, setValue];
}
