export const merchantRegions = [
  {
    id: "generic",
    label: "Generica",
    shortLabel: "Generica",
    description: "un crocevia commerciale senza una specializzazione dominante",
    shopHint: "assortimento misto da viaggio, città e avventura",
  },
  {
    id: "coastal",
    label: "Porto / Città di mare",
    shortLabel: "Porto",
    description:
      "una città portuale battuta da vento salmastro, pescatori e mercanti stranieri",
    shopHint:
      "reti, ami, corde cerate, tridenti, lampade schermabili e strumenti nautici",
  },
  {
    id: "mountain",
    label: "Montagna",
    shortLabel: "Montagna",
    description:
      "un insediamento di montagna tra rocce fredde, passi difficili e botteghe robuste",
    shopHint:
      "picchetti, corde, chiodi da roccia, ciaspole, mantelli pesanti e attrezzi da scalata",
  },
  {
    id: "forest",
    label: "Foresta",
    shortLabel: "Foresta",
    description:
      "un borgo ai margini del bosco, frequentato da cacciatori, taglialegna e guide",
    shopHint:
      "trappole, archi, frecce, pelli, erbe, lame da caccia e attrezzatura da campo",
  },
  {
    id: "desert",
    label: "Deserto",
    shortLabel: "Deserto",
    description:
      "un avamposto arido dove acqua, ombra e stoffe leggere valgono quasi quanto l'oro",
    shopHint:
      "otri, veli, spezie, bussole, tende leggere, lame ricurve e scorte da carovana",
  },
  {
    id: "urban",
    label: "Grande città",
    shortLabel: "Città",
    description:
      "un quartiere urbano affollato, pieno di compratori frettolosi e vicoli pieni di voci",
    shopHint:
      "oggetti raffinati, strumenti da scasso, abiti, documenti, armi corte e merci rare",
  },
  {
    id: "frontier",
    label: "Frontiera selvaggia",
    shortLabel: "Frontiera",
    description:
      "un insediamento di frontiera dove ogni merce deve resistere a fango, sangue e pioggia",
    shopHint:
      "razioni, torce, kit da sopravvivenza, armi semplici, corde e utensili riparabili",
  },
  {
    id: "rural",
    label: "Villaggio rurale",
    shortLabel: "Rurale",
    description:
      "un villaggio agricolo di strade battute, granai, stalle e botteghe essenziali",
    shopHint:
      "attrezzi robusti, sementi rare, cordame, ferri di ricambio, coperte e provviste semplici",
  },
  {
    id: "underdark",
    label: "Sottosuolo",
    shortLabel: "Sottosuolo",
    description:
      "un mercato sotterraneo scavato nella pietra, illuminato da funghi e bracieri bassi",
    shopHint:
      "lampade schermate, corde scure, maschere filtranti, mappe di cunicoli e sali minerali",
  },
  {
    id: "ruins",
    label: "Rovine antiche",
    shortLabel: "Rovine",
    description:
      "un accampamento tra rovine antiche, colonne spezzate e passaggi dimenticati",
    shopHint:
      "gesso da dungeon, pergamene cerate, picchetti, corde, specchi e strumenti da esplorazione",
  },
  {
    id: "arctic",
    label: "Artico",
    shortLabel: "Artica",
    description:
      "un insediamento gelido dove il vento copre le piste e ogni fuoco vale una promessa",
    shopHint:
      "mantelli foderati, ramponi, otri isolati, tende pesanti, grasso da lanterna e ciaspole",
  },
  {
    id: "swamp",
    label: "Palude",
    shortLabel: "Palude",
    description:
      "un villaggio umido di passerelle, zanzare, acqua scura e barche piatte",
    shopHint:
      "stivali impermeabili, antitossine, bastoni da sondaggio, sale nero e repellenti alchemici",
  },
];

export function getMerchantRegionById(regionId) {
  return (
    merchantRegions.find((region) => region.id === regionId) ||
    merchantRegions[0]
  );
}

export function getMerchantRegionLabel(regionId) {
  return getMerchantRegionById(regionId).label;
}
