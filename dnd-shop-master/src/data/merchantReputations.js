export const merchantReputations = [
  {
    id: "Sconosciuto",
    label: "Sconosciuto",
    tone: "prudente e difficile da leggere",
    bargain: "contratta con cautela e chiede garanzie prima di esporsi",
    quest: "dimostrare affidabilita con una consegna semplice ma urgente",
  },
  {
    id: "Affidabile",
    label: "Affidabile",
    tone: "onesto, diretto e attento ai rapporti duraturi",
    bargain: "accetta trattative ragionevoli e premia clienti corretti",
    quest: "recuperare merce smarrita senza attirare scandali",
  },
  {
    id: "Ben visto",
    label: "Ben visto",
    tone: "cordiale, inserito nella comunita e pieno di conoscenze utili",
    bargain: "offre piccoli favori a chi aiuta il quartiere",
    quest: "proteggere una festa locale o una spedizione comunitaria",
  },
  {
    id: "Discusso",
    label: "Discusso",
    tone: "brillante ma accompagnato da voci contrastanti",
    bargain: "abbassa il prezzo solo se il rischio resta lontano dal suo nome",
    quest: "chiarire una falsa accusa prima che rovini la bottega",
  },
  {
    id: "Sospetto",
    label: "Sospetto",
    tone: "sfuggente, pieno di mezze verita e merce dalla provenienza opaca",
    bargain: "contratta duro e potrebbe nascondere costi o condizioni",
    quest: "scoprire chi lo ricatta con vecchie ricevute compromettenti",
  },
  {
    id: "Famigerato",
    label: "Famigerato",
    tone: "temuto, costoso e capace di procurare oggetti fuori mercato",
    bargain: "concede sconti solo in cambio di favori pericolosi",
    quest: "recuperare un pegno oscuro prima che arrivi un rivale",
  },
  {
    id: "Ricercato",
    label: "Ricercato",
    tone: "nervoso, mobile e sempre pronto a chiudere bottega",
    bargain: "vende bene ma pretende discrezione assoluta",
    quest: "far sparire registri o prove senza coinvolgere le guardie",
  },
  {
    id: "Leggendario",
    label: "Leggendario",
    tone: "raro, esigente e circondato da storie quasi incredibili",
    bargain: "non tratta sul prezzo, ma scambia merce eccezionale per imprese memorabili",
    quest: "compiere un incarico difficile prima di accedere al vero catalogo",
  },
];

export function getMerchantReputationById(reputationId) {
  return (
    merchantReputations.find((reputation) => reputation.id === reputationId) ||
    merchantReputations[0]
  );
}
