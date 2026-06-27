export const alignmentOptions = [
  {
    id: "lawful-good",
    label: "Legale Buono",
    discountBias: "Alto",
    roleplayHint:
      "Onesto, protettivo, incline ad aiutare chi dimostra una causa giusta.",
  },
  {
    id: "neutral-good",
    label: "Neutrale Buono",
    discountBias: "Medio",
    roleplayHint:
      "Empatico e disponibile, aiuta volentieri ma non sacrifica sempre il guadagno.",
  },
  {
    id: "chaotic-good",
    label: "Caotico Buono",
    discountBias: "Medio",
    roleplayHint:
      "Generoso ma imprevedibile, apprezza coraggio, storie strane e gesti audaci.",
  },
  {
    id: "lawful-neutral",
    label: "Legale Neutrale",
    discountBias: "Basso",
    roleplayHint:
      "Rispetta contratti, registri, tariffe e procedure. Tratta solo con argomenti solidi.",
  },
  {
    id: "neutral",
    label: "Neutrale",
    discountBias: "Medio",
    roleplayHint:
      "Pragmatico: valuta reputazione, rischio, scarsità della merce e vantaggio reciproco.",
  },
  {
    id: "chaotic-neutral",
    label: "Caotico Neutrale",
    discountBias: "Variabile",
    roleplayHint:
      "Capriccioso e creativo: può accettare baratti, favori bizzarri o prove improvvisate.",
  },
  {
    id: "lawful-evil",
    label: "Legale Malvagio",
    discountBias: "Basso",
    roleplayHint:
      "Ama clausole, debiti, pegni e contratti. Gli sconti arrivano quasi sempre con un prezzo nascosto.",
  },
  {
    id: "neutral-evil",
    label: "Neutrale Malvagio",
    discountBias: "Basso",
    roleplayHint:
      "Opportunista e freddo. Contratta solo se ottiene potere, segreti o vantaggio concreto.",
  },
  {
    id: "chaotic-evil",
    label: "Caotico Malvagio",
    discountBias: "Basso",
    roleplayHint:
      "Pericoloso, instabile, incline a truffe e minacce. Utile per mercati neri o scene rischiose.",
  },
];

export function getAlignmentLabel(value) {
  const alignment = alignmentOptions.find(
    (item) => item.id === value || item.label === value
  );

  return alignment?.label || value || "Neutrale";
}

export function getAlignmentById(value) {
  return (
    alignmentOptions.find((item) => item.id === value || item.label === value) ||
    alignmentOptions.find((item) => item.id === "neutral")
  );
}
