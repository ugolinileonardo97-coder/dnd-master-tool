export const prestigeOptions = [
  {
    id: "mediocre",
    label: "Mediocre",
    itemCountMultiplier: 0.75,
    priceMultiplier: 0.75,
    tone:
      "sedie spaiate, legno consumato, odore di fumo, servizio essenziale e clientela rumorosa",
  },
  {
    id: "buona",
    label: "Buona",
    itemCountMultiplier: 1,
    priceMultiplier: 1,
    tone:
      "tavoli puliti, personale attento, fuoco acceso, merce ordinata e atmosfera affidabile",
  },
  {
    id: "lussuosa",
    label: "Lussuosa",
    itemCountMultiplier: 1.25,
    priceMultiplier: 1.4,
    tone:
      "candele profumate, sale private, personale discreto, sicurezza visibile e dettagli eleganti",
  },
];

export function normalizePrestige(prestige) {
  return prestigeOptions.some((option) => option.id === prestige)
    ? prestige
    : "buona";
}

export function getPrestigeById(prestige) {
  return (
    prestigeOptions.find((option) => option.id === normalizePrestige(prestige)) ||
    prestigeOptions[1]
  );
}

export function getPrestigeLabel(prestige) {
  return getPrestigeById(prestige).label;
}

export function pickPrestigeByLevel(level = 1) {
  const numericLevel = Number(level) || 1;
  const weights =
    numericLevel <= 4
      ? { mediocre: 50, buona: 40, lussuosa: 10 }
      : numericLevel <= 10
        ? { mediocre: 35, buona: 45, lussuosa: 20 }
        : numericLevel <= 16
          ? { mediocre: 25, buona: 45, lussuosa: 30 }
          : { mediocre: 15, buona: 45, lussuosa: 40 };
  const roll = Math.random() * 100;

  if (roll < weights.mediocre) return "mediocre";
  if (roll < weights.mediocre + weights.buona) return "buona";
  return "lussuosa";
}

function hashString(value = "") {
  return String(value)
    .split("")
    .reduce((hash, char) => ((hash << 5) - hash + char.charCodeAt(0)) | 0, 0);
}

function pickSeeded(list, seed) {
  if (!Array.isArray(list) || list.length === 0) return "";
  const index = Math.abs(hashString(seed)) % list.length;
  return list[index];
}

const prestigeTextVariants = {
  shop: {
    mediocre: {
      prefixes: [
        "La bottega vive di occasioni, merce usata e trattative veloci: ",
        "Il negozio punta su prezzi bassi, scaffali stretti e affari rapidi: ",
        "La bottega sembra tirare avanti con poco, ma nasconde merce utile: ",
        "Il banco e spartano, pieno di pezzi recuperati e promesse caute: ",
        "La merce e disordinata, ma chi sa cercare puo trovare qualcosa di buono: ",
      ],
      tones: [
        "legno consumato, casse aperte, odore di corda vecchia e contratti scritti in fretta",
        "scaffali irregolari, prezzi trattabili e un via vai di clienti senza troppe pretese",
        "attrezzi ammaccati, lanterne fumose e un proprietario attento a ogni moneta",
        "merce semplice, polvere sulle etichette e una certa praticita da strada",
        "oggetti di seconda mano, riparazioni visibili e offerte che cambiano con l'umore del giorno",
      ],
    },
    buona: {
      prefixes: [
        "La bottega e ordinata, affidabile e pensata per avventurieri esigenti: ",
        "Il negozio lavora con metodo, scaffali curati e trattative pulite: ",
        "La bottega trasmette fiducia pratica e competenza da viaggio: ",
        "Il banco e ben tenuto, la merce e catalogata e il servizio rapido: ",
        "La bottega mantiene un equilibrio solido fra prezzo, qualita e discrezione: ",
        "Il negozio sembra conoscere bene i bisogni di chi parte armato e torna stanco: ",
      ],
      tones: [
        "tavoli puliti, personale attento, fuoco acceso, merce ordinata e atmosfera affidabile",
        "casse numerate, espositori leggibili, strumenti revisionati e consigli dati senza teatralita",
        "contratti chiari, merce ben separata e un proprietario che misura le parole prima dei prezzi",
        "scaffali robusti, imballaggi cerati e oggetti scelti per sopravvivere piu che per apparire",
        "clienti abituali, registri aggiornati e un assortimento costruito intorno alla regione",
        "lanterne calde, mappe sul muro e merci disposte per essere capite in pochi istanti",
      ],
    },
    lussuosa: {
      prefixes: [
        "La bottega protegge pezzi rari dietro vetrine, contratti e personale discreto: ",
        "Il negozio lavora per clienti che pagano sicurezza, rarita e silenzio: ",
        "La bottega sembra piu una sala privata che un semplice emporio: ",
        "Il banco e impeccabile, sorvegliato e costruito per trattative importanti: ",
        "La merce migliore non e esposta: viene mostrata solo a chi merita ascolto: ",
      ],
      tones: [
        "candele profumate, sale private, personale discreto, sicurezza visibile e dettagli eleganti",
        "vetrine sigillate, pergamene notarili, guardie silenziose e campioni scelti con cura",
        "tappeti spessi, teche pulite, profumo di cera e accordi pronunciati a bassa voce",
        "ogni oggetto ha un certificato, ogni prezzo una ragione e ogni cliente viene pesato con calma",
        "la ricchezza e evidente ma controllata, come se ostentarla fosse considerato volgare",
      ],
    },
  },
  merchant: {
    mediocre: {
      prefixes: [
        "Il mercante tratta in fretta e misura ogni rischio: ",
        "Il venditore conosce il valore della sopravvivenza piu dell'eleganza: ",
        "Il mercante non promette miracoli, solo merce che puo ancora servire: ",
        "Dietro il banco c'e l'aria di chi ha imparato a non fidarsi troppo: ",
      ],
      tones: [
        "parla di prezzi bassi, favori piccoli e debiti da saldare prima del tramonto",
        "controlla le monete due volte e concede sconti solo quando gli conviene davvero",
        "vende soluzioni immediate, riparazioni rapide e informazioni raccolte per caso",
        "sorride poco, ma conosce scorciatoie, fornitori stanchi e merci dimenticate",
      ],
    },
    buona: {
      prefixes: [
        "Il mercante mantiene modi professionali e memoria lunga: ",
        "Chi tratta qui trova competenza, prudenza e una certa onesta pratica: ",
        "Il venditore ascolta prima di proporre, poi indica cio che serve davvero: ",
        "Il mercante pesa clienti, urgenze e reputazione con la stessa attenzione: ",
        "Dietro il sorriso controllato c'e qualcuno abituato a riconoscere guai in arrivo: ",
      ],
      tones: [
        "fa domande precise, ricorda i volti e adatta i prezzi alla storia che gli viene raccontata",
        "non regala nulla, ma sa quando un favore puo valere piu di una moneta",
        "consiglia con calma, evita promesse inutili e protegge i rapporti che possono durare",
        "sa distinguere un avventuriero disperato da uno preparato e tratta di conseguenza",
        "conosce rotte, rischi locali e piccoli segreti che non compaiono sulle mappe",
      ],
    },
    lussuosa: {
      prefixes: [
        "Il mercante tratta come se ogni parola fosse parte di un contratto: ",
        "Il venditore accoglie solo chi sembra poter pagare il prezzo vero: ",
        "Il mercante conserva eleganza, distanza e un archivio di favori non dimenticati: ",
        "Dietro la cortesia c'e una mente abituata a negoziare oggetti pericolosi: ",
      ],
      tones: [
        "offre garanzie, protezione e silenzio, ma non spreca tempo con richieste confuse",
        "parla poco, osserva molto e lascia intendere che ogni favore avra un seguito",
        "vende rarita come se fossero segreti politici e non semplici oggetti da viaggio",
        "concede udienza con calma, ma ogni sorriso sembra gia scritto in un accordo futuro",
      ],
    },
  },
};

export function applyPrestigeText(text, prestige, type = "shop", variantSeed = "") {
  const normalized = normalizePrestige(prestige);
  const fallbackTone = getPrestigeById(normalized).tone;
  const group = prestigeTextVariants[type] || prestigeTextVariants.shop;
  const variants = group[normalized] || group.buona;
  const seed = `${type}-${normalized}-${variantSeed || text || fallbackTone}`;
  const prefix = pickSeeded(variants.prefixes, `${seed}-prefix`);
  const tone = pickSeeded(variants.tones, `${seed}-tone`) || fallbackTone;

  return `${prefix}${tone}. ${text || ""}`.trim();
}
