/**
 * Database scudi per bioma.
 * Ogni bioma ha 16 scudi unici.
 * Usati da generateShopInventory.js per popolare inventari.
 *
 * Campi:
 * - id: unico
 * - name: nome fantasy
 * - category: "Armature"
 * - type: "Scudo"
 * - biome: id bioma
 * - rarity: Comune / Non Comune / Rara / Molto rara / Leggendaria
 * - price: stringa prezzo
 * - shieldBonus: +2 a +6
 * - armorClassBonus: uguale a shieldBonus
 * - resistances: []
 * - penalties: []
 * - specialEffect: stringa opzionale
 * - mechanicalEffect: stringa chiara
 * - description: breve
 */

const SHIELD_RARITY_MAP = {
  Comune: 2,
  "Non Comune": 3,
  Rara: 4,
  "Molto rara": 5,
  Leggendaria: 6,
};

function shield(name, biome, rarity, extra = {}) {
  const bonus = SHIELD_RARITY_MAP[rarity] || 2;
  const id = `shield-${biome}-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  return {
    id,
    name,
    category: "Armature",
    type: "Scudo",
    biome,
    rarity,
    price: extra.price || `${bonus * 50 + { Comune: 10, "Non Comune": 100, Rara: 500, "Molto rara": 3000, Leggendaria: 20000 }[rarity]} mo`,
    shieldBonus: bonus,
    armorClassBonus: bonus,
    resistances: extra.resistances || [],
    penalties: extra.penalties || [],
    specialEffect: extra.specialEffect || null,
    mechanicalEffect: extra.mechanicalEffect || `+${bonus} CA.`,
    description: extra.description || `${name}. Uno scudo ${rarity.toLowerCase()} di fattura solida.`,
  };
}

export const biomeShields = [
  // ===== GENERICA (16) =====
  shield("Scudo del Crocevia", "generic", "Comune", {
    mechanicalEffect: "+2 CA. Leggero e maneggevole.",
    description: "Uno scudo tondo senza particolari decorazioni, ma ben bilanciato.",
  }),
  shield("Scudo del Viandante", "generic", "Comune", {
    mechanicalEffect: "+2 CA. Resistente agli urti.",
    description: "Rinforzato con cerchi di ferro battuto.",
  }),
  shield("Scudo della Gilda", "generic", "Comune", {
    mechanicalEffect: "+2 CA. Ema un bagliore fioco al buio.",
    description: "Ornato con l'emblema di una gilda mercantile.",
  }),
  shield("Scudo del Mercato", "generic", "Non Comune", {
    resistances: ["tagliente"],
    mechanicalEffect: "+3 CA. Resistenza a tagliente non magico.",
    description: "Usurato da mille contrattazioni e risse.",
  }),
  shield("Scudo del Notaio", "generic", "Non Comune", {
    mechanicalEffect: "+3 CA. Vantaggio a prove di Intimidire quando imbracciato.",
    description: "Uno scudo alto e imponente da ufficiale.",
  }),
  shield("Scudo del Duellante", "generic", "Non Comune", {
    mechanicalEffect: "+3 CA. Leggero, non penalizza l'iniziativa.",
    description: "Scudo piccolo da duello, in acciaio temprato.",
  }),
  shield("Scudo del Capitano di Guardia", "generic", "Rara", {
    resistances: ["perforante"],
    mechanicalEffect: "+4 CA. Resistenza a perforante non magico.",
    description: "Un simbolo d'autorità e difesa.",
  }),
  shield("Scudo dell'Emissario", "generic", "Rara", {
    resistances: ["fuoco"],
    mechanicalEffect: "+4 CA. Resistenza al fuoco minore.",
    description: "Dei rilievi dorati raccontano antichi patti.",
  }),
  shield("Scudo del Tribunale", "generic", "Rara", {
    penalties: ["-1 DES"],
    mechanicalEffect: "+4 CA. Vantaggio a prove di Persuasione. -1 DES.",
    description: "Imponente, decorato con bilance e spade incrociate.",
  }),
  shield("Scudo del Confine", "generic", "Molto rara", {
    resistances: ["tagliente", "contundente"],
    mechanicalEffect: "+5 CA. Resistenza a tagliente e contundente non magici.",
    description: "Una lastra di acciaio scuro tempestata di borchie.",
  }),
  shield("Scudo del Patto d'Acciaio", "generic", "Molto rara", {
    mechanicalEffect: "+5 CA. Una volta al giorno, riduce di 10 il danno subito da un attacco.",
    description: "Forgiato con un patto sigillato nel metallo.",
  }),
  shield("Scudo della Mezzanotte", "generic", "Molto rara", {
    resistances: ["necrotico"],
    mechanicalEffect: "+5 CA. Resistenza a necrotico. Non intralcia il sonno.",
    description: "Annerito e opaco, assorbe la luce.",
  }),
  shield("Scudo del Sole Eterno", "generic", "Leggendaria", {
    resistances: ["fuoco", "acido"],
    mechanicalEffect: "+6 CA. Resistenza a fuoco e acido. Vantaggio contro paura.",
    description: "Sembra fatto di luce solida.",
  }),
  shield("Scudo dell'Ordine Infranto", "generic", "Leggendaria", {
    resistances: ["necrotico", "psichico"],
    mechanicalEffect: "+6 CA. Resistenza a necrotico e psichico. Immune a spaventare.",
    description: "Un antico scudo di un ordine di cavalieri caduti.",
  }),
  shield("Scudo della Prima Gilda", "generic", "Leggendaria", {
    mechanicalEffect: "+6 CA. Una volta al giorno, può riflettere un incantesimo di 1° livello.",
    description: "Il primo scudo forgiato dalla gilda più antica.",
  }),
  shield("Scudo del Mercante Errante", "generic", "Non Comune", {
    mechanicalEffect: "+3 CA. Bonus di +1 ai tiri salvezza contro truffa e inganno.",
    description: "Un vecchio scudo con simboli di bilancia e monete.",
  }),

  // ===== PORTO / COASTAL (16) =====
  shield("Scudo della Risacca", "coastal", "Comune", {
    mechanicalEffect: "+2 CA. Resistente all'acqua salata.",
    description: "Legno marino rinforzato con alghe essiccate.",
  }),
  shield("Scudo del Molo", "coastal", "Comune", {
    mechanicalEffect: "+2 CA. Galleggia in acqua.",
    description: "Fatto di sughero e cuoio cerato.",
  }),
  shield("Scudo del Capitano", "coastal", "Non Comune", {
    mechanicalEffect: "+3 CA. Vantaggio a prove di Atletica in ambienti marini.",
    description: "Ornato con conchiglie e incisioni navali.",
  }),
  shield("Scudo del Porto Vecchio", "coastal", "Non Comune", {
    resistances: ["acido"],
    mechanicalEffect: "+3 CA. Resistenza all'acido.",
    description: "Annerito da anni di salsedine e battaglie portuali.",
  }),
  shield("Scudo della Lanterna", "coastal", "Non Comune", {
    mechanicalEffect: "+3 CA. Illumina debolmente entro 3 metri.",
    description: "Un piccolo scudo con un cristallo luminoso al centro.",
  }),
  shield("Scudo del Mare Inquieto", "coastal", "Rara", {
    resistances: ["freddo"],
    mechanicalEffect: "+4 CA. Resistenza al freddo.",
    description: "Forgiato con metallo recuperato da un naufragio.",
  }),
  shield("Scudo della Sirena", "coastal", "Rara", {
    mechanicalEffect: "+4 CA. Una volta al giorno, può creare una bolla d'aria per 10 minuti.",
    description: "Un leggero scudo di squame e madreperla.",
  }),
  shield("Scudo del Faro", "coastal", "Rara", {
    resistances: ["fuoco"],
    mechanicalEffect: "+4 CA. Resistenza al fuoco.",
    description: "Ornato con un faro stilizzato che sembra ardere.",
  }),
  shield("Scudo dell'Ancora", "coastal", "Rara", {
    penalties: ["-1 mobilità in acqua"],
    mechanicalEffect: "+4 CA. Immune allo spostamento forzato in acqua.",
    description: "Massiccio, a forma di ancora.",
  }),
  shield("Scudo del Kraken", "coastal", "Molto rara", {
    resistances: ["freddo", "acido"],
    mechanicalEffect: "+5 CA. Resistenza a freddo e acido. Vantaggio in prove di nuoto.",
    description: "Scolpito con tentacoli e scaglie nere.",
  }),
  shield("Scudo dell'Onda Perla", "coastal", "Molto rara", {
    mechanicalEffect: "+5 CA. Una volta al giorno, può assorbire un colpo critico trasformandolo in normale.",
    description: "Madreperla incastonata in una montatura di argento marino.",
  }),
  shield("Scudo del Corsaro", "coastal", "Molto rara", {
    mechanicalEffect: "+5 CA. Bonus di +2 ai danni con armi da una mano se impugnato.",
    description: "Un teschio e ossa incisi su metallo scuro.",
  }),
  shield("Scudo del Re dei Mari", "coastal", "Leggendaria", {
    resistances: ["freddo", "acido", "fulmine"],
    mechanicalEffect: "+6 CA. Resistenza a freddo, acido e fulmine.",
    description: "Tempestato di zaffiri e corallo nero.",
  }),
  shield("Scudo della Corrente Abissale", "coastal", "Leggendaria", {
    penalties: ["-2 DES fuori dall'acqua"],
    mechanicalEffect: "+6 CA. In acqua: velocità +3 m e invisibilità ai sensi non magici.",
    description: "Sembra fatto di acqua solidificata.",
  }),
  shield("Scudo del Porto Fantasma", "coastal", "Leggendaria", {
    resistances: ["necrotico"],
    mechanicalEffect: "+6 CA. Resistenza a necrotico. Chi impugna vede i non morti nel raggio di 18 m.",
    description: "Traslucido e freddo come la nebbia notturna.",
  }),
  shield("Scudo del Gabbiano di Ferro", "coastal", "Non Comune", {
    mechanicalEffect: "+3 CA. Bonus di +1 alle prove di Percezione all'aperto.",
    description: "Leggero, con ali di gabbiano incise.",
  }),

  // ===== MONTAGNA (16) =====
  shield("Scudo del Valico", "mountain", "Comune", {
    mechanicalEffect: "+2 CA. Robusto e pesante.",
    description: "Pietra e ferro battuto.",
  }),
  shield("Scudo della Cima", "mountain", "Comune", {
    mechanicalEffect: "+2 CA. Vantaggio a prove di Arrampicata.",
    description: "Fatto di pelle di stambecco e legno duro.",
  }),
  shield("Scudo della Roccia", "mountain", "Comune", {
    mechanicalEffect: "+2 CA. Ignora 1 punto di danno contundente.",
    description: "Rivestito di scaglie di granito.",
  }),
  shield("Scudo del Passo", "mountain", "Non Comune", {
    resistances: ["freddo"],
    mechanicalEffect: "+3 CA. Resistenza al freddo.",
    description: "Foderato di pelliccia di lupo grigio.",
  }),
  shield("Scudo del Minatore", "mountain", "Non Comune", {
    mechanicalEffect: "+3 CA. Vantaggio a prove di Percezione in gallerie e caverne.",
    description: "Segnato da anni di lavoro nelle viscere della montagna.",
  }),
  shield("Scudo della Vetta", "mountain", "Non Comune", {
    mechanicalEffect: "+3 CA. Bonus di +1 ai tiri salvezza contro cadute e valanghe.",
    description: "Leggero ma robusto, tempestato di quarzo.",
  }),
  shield("Scudo Antivalanga", "mountain", "Rara", {
    resistances: ["contundente"],
    mechanicalEffect: "+4 CA. Resistenza a contundente non magico. Immune a danni da caduta inferiori a 6 m.",
    description: "A forma di cuneo, progettato per deviare massi.",
  }),
  shield("Scudo del Ghiacciaio", "mountain", "Rara", {
    resistances: ["freddo"],
    mechanicalEffect: "+4 CA. Resistenza al freddo. Congela l'acqua a contatto.",
    description: "Lastre di ghiaccio eterno tenute insieme da metallo nero.",
  }),
  shield("Scudo del Picco", "mountain", "Rara", {
    mechanicalEffect: "+4 CA. Punta acuminata: 1d4 perforante in mischia come azione bonus.",
    description: "Termina con una punta d'acciaio.",
  }),
  shield("Scudo del Vento Polare", "mountain", "Molto rara", {
    resistances: ["freddo", "tagliente"],
    mechanicalEffect: "+5 CA. Resistenza a freddo e tagliente. Bonus +2 alle prove di nascondersi nella neve.",
    description: "Di colore bianco-azzurro, quasi invisibile nella tormenta.",
  }),
  shield("Scudo del Cuore di Pietra", "mountain", "Molto rara", {
    mechanicalEffect: "+5 CA. Una volta al giorno, riduce a 0 il danno di un attacco contundente.",
    description: "Un nucleo di granito incastonato in acciaio nero.",
  }),
  shield("Scudo della Vetta Spezzata", "mountain", "Molto rara", {
    penalties: ["-1 CAR"],
    mechanicalEffect: "+5 CA. Chi attacca chi impugna subisce 1d4 danni da schegge di pietra.",
    description: "Scheggiato e incrinato, ma ancora letale.",
  }),
  shield("Scudo del Picco Eterno", "mountain", "Leggendaria", {
    resistances: ["freddo", "tagliente", "contundente"],
    mechanicalEffect: "+6 CA. Resistenza a freddo, tagliente e contundente non magici.",
    description: "Sembra scolpito direttamente dalla montagna.",
  }),
  shield("Scudo della Valanga", "mountain", "Leggendaria", {
    mechanicalEffect: "+6 CA. Una volta al giorno: onda d'urto in cono di 6 m, TS FOR o 4d6 contundente.",
    description: "Un'imponente lastra di metallo runico.",
  }),
  shield("Scudo del Gigante Addormentato", "mountain", "Leggendaria", {
    resistances: ["psichico"],
    mechanicalEffect: "+6 CA. Resistenza a psichico. Chi impugna non può essere spostato contro la sua volontà.",
    description: "Massiccio come una porta di fortezza.",
  }),
  shield("Scudo della Guida Alpina", "mountain", "Non Comune", {
    mechanicalEffect: "+3 CA. Bonus +1 alle prove di Sopravvivenza in montagna.",
    description: "Pratico, con rampino e corda integrati.",
  }),

  // ===== FORESTA (16) =====
  shield("Scudo del Sottobosco", "forest", "Comune", {
    mechanicalEffect: "+2 CA. Mimetizzato: vantaggio a Nascondersi nei boschi.",
    description: "Ricoperto di muschio e corteccia.",
  }),
  shield("Scudo del Cacciatore", "forest", "Comune", {
    mechanicalEffect: "+2 CA. Attenua i rumori dello spostamento.",
    description: "Legno duro e pelli scure.",
  }),
  shield("Scudo della Radice", "forest", "Comune", {
    mechanicalEffect: "+2 CA. Si ripara lentamente da solo.",
    description: "Radici intrecciate vive.",
  }),
  shield("Scudo del Cervo", "forest", "Non Comune", {
    mechanicalEffect: "+3 CA. Vantaggio a prove di Sopravvivenza in foresta.",
    description: "Un antico palco di cervo montato su legno.",
  }),
  shield("Scudo della Foresta Oscura", "forest", "Non Comune", {
    resistances: ["veleno"],
    mechanicalEffect: "+3 CA. Resistenza al veleno.",
    description: "Scuro, ricoperto di resina nera.",
  }),
  shield("Scudo del Guardaboschi", "forest", "Non Comune", {
    mechanicalEffect: "+3 CA. Bonus +1 alle prove di Percezione in ambienti naturali.",
    description: "Leggero e silenzioso.",
  }),
  shield("Scudo del Cinghiale", "forest", "Rara", {
    mechanicalEffect: "+4 CA. Azione bonus: carica 3 m e spinge un bersaglio.",
    description: "Un mascherone di cinghiale in ferro decorato.",
  }),
  shield("Scudo delle Fronde Nere", "forest", "Rara", {
    resistances: ["veleno", "acido"],
    mechanicalEffect: "+4 CA. Resistenza a veleno e acido.",
    description: "Fronde di ferro nero intrecciate.",
  }),
  shield("Scudo del Bosco Antico", "forest", "Rara", {
    mechanicalEffect: "+4 CA. Una volta al giorno, può far crescere un muro di rovi per 1 minuto.",
    description: "Pulsante di linfa dorata.",
  }),
  shield("Scudo della Luna Selvatica", "forest", "Molto rara", {
    resistances: ["necrotico"],
    mechanicalEffect: "+5 CA. Resistenza a necrotico. Sotto la luna piena: +1 CA aggiuntivo.",
    description: "Argento lunare e legno d'argento.",
  }),
  shield("Scudo del Rospo Nero", "forest", "Molto rara", {
    resistances: ["veleno"],
    mechanicalEffect: "+5 CA. Resistenza al veleno. Chi attacca può essere avvelenato (CD 15).",
    description: "Rivestito di una sostanza oleosa scura.",
  }),
  shield("Scudo del Guardiano della Foresta", "forest", "Molto rara", {
    mechanicalEffect: "+5 CA. Gli animali non attaccano chi lo impugna se non provocati.",
    description: "Intreccio di rami vivi e foglie di ferro.",
  }),
  shield("Scudo del Primo Bosco", "forest", "Leggendaria", {
    resistances: ["veleno", "fuoco", "acido"],
    mechanicalEffect: "+6 CA. Resistenza a veleno, fuoco e acido. Chi impugna parla con le piante.",
    description: "Un'allegoria vivente della foresta primordiale.",
  }),
  shield("Scudo della Corte Verde", "forest", "Leggendaria", {
    mechanicalEffect: "+6 CA. Una volta al giorno: guarisci 4d8 PF.",
    description: "Della corte dei signori silvani.",
  }),
  shield("Scudo del Corno di Cervo", "forest", "Leggendaria", {
    mechanicalEffect: "+6 CA. Azione bonus: carica 6 m, se colpisci danni +2d6 perforanti.",
    description: "Un'enorme ramificazione di corno fossilizzato.",
  }),
  shield("Scudo della Ghianda d'Acciaio", "forest", "Non Comune", {
    mechanicalEffect: "+3 CA. Dopo un riposo breve, può essere riparato se danneggiato.",
    description: "Ricoperto di ghiande metalliche decorative.",
  }),

  // ===== DESERTO (16) =====
  shield("Scudo della Duna", "desert", "Comune", {
    mechanicalEffect: "+2 CA. Riflette parzialmente la luce solare.",
    description: "Sabbia indurita e tela cerata.",
  }),
  shield("Scudo dell'Oasi", "desert", "Comune", {
    mechanicalEffect: "+2 CA. Mantiene fresca l'aria intorno.",
    description: "Legno argentato e seta azzurra.",
  }),
  shield("Scudo del Nomade", "desert", "Comune", {
    mechanicalEffect: "+2 CA. Leggero e avvolgibile.",
    description: "Pelle di cammello rinforzata.",
  }),
  shield("Scudo del Sole", "desert", "Non Comune", {
    resistances: ["fuoco"],
    mechanicalEffect: "+3 CA. Resistenza al fuoco.",
    description: "Tempestato di turchesi che brillano al sole.",
  }),
  shield("Scudo della Carovana", "desert", "Non Comune", {
    mechanicalEffect: "+3 CA. Bonus +1 ai tiri salvezza contro calore e fatica.",
    description: "Ingombrante ma affidabile.",
  }),
  shield("Scudo dello Scirocco", "desert", "Non Comune", {
    mechanicalEffect: "+3 CA. Vantaggio a prove di Sopravvivenza nel deserto.",
    description: "A forma di vela.",
  }),
  shield("Scudo del Fuoco Pallido", "desert", "Rara", {
    resistances: ["fuoco"],
    mechanicalEffect: "+4 CA. Resistenza al fuoco. Riflette la luce accecante.",
    description: "Metallo dorato inciso con fiamme stilizzate.",
  }),
  shield("Scudo del Vento di Sabbia", "desert", "Rara", {
    mechanicalEffect: "+4 CA. Azione bonus: crea una nube di sabbia (CD 13) che acceca per 1 round.",
    description: "Riempito di sabbia finissima.",
  }),
  shield("Scudo della Lucertola Solare", "desert", "Rara", {
    resistances: ["fuoco"],
    mechanicalEffect: "+4 CA. Resistenza al fuoco. Immune agli effetti del caldo estremo.",
    description: "Squame fossilizzate di un rettile antico.",
  }),
  shield("Scudo dell'Oasi Perduta", "desert", "Molto rara", {
    resistances: ["fuoco", "acido"],
    mechanicalEffect: "+5 CA. Resistenza a fuoco e acido. Una volta al giorno, crea 1L d'acqua.",
    description: "Acque che scorrono sotto la sabbia. Inciso con sorgenti e palme.",
  }),
  shield("Scudo del Sultano", "desert", "Molto rara", {
    mechanicalEffect: "+5 CA. Vantaggio alle prove di Persuasione e Intimidire.",
    description: "Ricoperto d'oro e pietre preziose.",
  }),
  shield("Scudo dello Scorpione", "desert", "Molto rara", {
    resistances: ["veleno"],
    mechanicalEffect: "+5 CA. Resistenza al veleno. La punta infligge 1d6 perforante.",
    description: "A forma di scorpione, con la coda acuminata.",
  }),
  shield("Scudo del Sole Nero", "desert", "Leggendaria", {
    resistances: ["fuoco", "necrotico"],
    mechanicalEffect: "+6 CA. Resistenza a fuoco e necrotico. Chi impugna vede al buio fino a 36 m.",
    description: "Un cerchio di ossidiana che assorbe la luce.",
  }),
  shield("Scudo della Sabbia Eterna", "desert", "Leggendaria", {
    mechanicalEffect: "+6 CA. Una volta al giorno: dissolve in sabbia e si riforma, evitando un colpo.",
    description: "Sembra fatto di sabbia che scorre.",
  }),
  shield("Scudo del Sole Freddo", "desert", "Leggendaria", {
    resistances: ["fuoco", "freddo"],
    mechanicalEffect: "+6 CA. Resistenza a fuoco e freddo. Chi impugna non soffre temperature estreme.",
    description: "Metallo bianco che non si scalda mai.",
  }),
  shield("Scudo della Carovana Perduta", "desert", "Non Comune", {
    mechanicalEffect: "+3 CA. Bonus +1 ai tiri salvezza contro trappole.",
    description: "Usurato, coperto da incisioni di rotte dimenticate.",
  }),

  // ===== GRANDE CITTÀ / URBAN (16) =====
  shield("Scudo del Vicolo", "urban", "Comune", {
    mechanicalEffect: "+2 CA. Piccolo, facile da nascondere sotto un mantello.",
    description: "Un brocchiero scuro e anonimo.",
  }),
  shield("Scudo della Ronda", "urban", "Comune", {
    mechanicalEffect: "+2 CA. Utile per respingere folle.",
    description: "Di forma rettangolare, semplice ma robusto.",
  }),
  shield("Scudo del Bardo", "urban", "Comune", {
    mechanicalEffect: "+2 CA. Decorato con campanelle che non suonano.",
    description: "Vistoso e riccamente dipinto.",
  }),
  shield("Scudo del Duellante Mascherato", "urban", "Non Comune", {
    mechanicalEffect: "+3 CA. Leggero: non penalizza Destrezza.",
    description: "Elegante, con incisioni arabescate.",
  }),
  shield("Scudo del Cortigiano", "urban", "Non Comune", {
    mechanicalEffect: "+3 CA. Vantaggio a prove di Intrattenere.",
    description: "Damascato d'argento con lo stemma di una nobile casata.",
  }),
  shield("Scudo del Mercante di Seta", "urban", "Non Comune", {
    mechanicalEffect: "+3 CA. Bonus +1 ai tiri salvezza contro spese e truffe.",
    description: "Foderato di stoffa preziosa.",
  }),
  shield("Scudo della Gilda Nera", "urban", "Rara", {
    resistances: ["veleno"],
    mechanicalEffect: "+4 CA. Resistenza al veleno.",
    description: "Un pugnale e una rosa incisi su acciaio scuro.",
  }),
  shield("Scudo del Notaio Armato", "urban", "Rara", {
    mechanicalEffect: "+4 CA. Bonus +2 ai tiri salvezza contro tentativi di intimidazione.",
    description: "Alto e massiccio come una porta di tribunale.",
  }),
  shield("Scudo della Guardia", "urban", "Rara", {
    mechanicalEffect: "+4 CA. Vantaggio a prove di Percezione per notare imboscate.",
    description: "Forgiato dalla città, segnato da anni di servizio.",
  }),
  shield("Scudo del Paladino di Strada", "urban", "Molto rara", {
    resistances: ["tagliente", "perforante"],
    mechanicalEffect: "+5 CA. Resistenza a tagliente e perforante non magici.",
    description: "Un'armatura da campione popolare.",
  }),
  shield("Scudo della Corte Segreta", "urban", "Molto rara", {
    mechanicalEffect: "+5 CA. Una volta al giorno: teletrasporto di 15 m in linea retta.",
    description: "Inciso con simboli di porte e chiavi.",
  }),
  shield("Scudo dell'Arcicorte", "urban", "Molto rara", {
    mechanicalEffect: "+5 CA. Chi impugna può lanciare Amicizia 1/giorno.",
    description: "Dorato e tempestato di gemme.",
  }),
  shield("Scudo del Re Senza Trono", "urban", "Leggendaria", {
    resistances: ["psichico", "necrotico"],
    mechanicalEffect: "+6 CA. Resistenza a psichico e necrotico. Immune a critiche alle spalle.",
    description: "Ultimo retaggio di un re decaduto.",
  }),
  shield("Scudo della Città Invisibile", "urban", "Leggendaria", {
    mechanicalEffect: "+6 CA. Una volta al giorno, Invisibilità per 1 minuto per sé o un alleato adiacente.",
    description: "Trasparente come vetro, duro come diamante.",
  }),
  shield("Scudo del Duello Eterno", "urban", "Leggendaria", {
    mechanicalEffect: "+6 CA. Se si para un colpo in mischia, si può fare un contrattacco con reazione.",
    description: "Sottile e letale.",
  }),
  shield("Scudo del Vicolo Stretto", "urban", "Non Comune", {
    mechanicalEffect: "+3 CA. Bonus +1 alle prove di Furtività in ambienti urbani.",
    description: "Scuro, compatto, senza riflessi.",
  }),

  // ===== FRONTIERA SELVAGGIA / FRONTIER (16) =====
  shield("Scudo del Pioniere", "frontier", "Comune", {
    mechanicalEffect: "+2 CA. Riparabile con strumenti semplici.",
    description: "Assi di legno e chiodi.",
  }),
  shield("Scudo del Guado", "frontier", "Comune", {
    mechanicalEffect: "+2 CA. Galleggia.",
    description: "Legno stagionato e cuoio.",
  }),
  shield("Scudo della Palizzata", "frontier", "Comune", {
    mechanicalEffect: "+2 CA. Più efficace in difesa dietro copertura.",
    description: "Fatto con assi di una vecchia palizzata.",
  }),
  shield("Scudo del Cercatore", "frontier", "Non Comune", {
    mechanicalEffect: "+3 CA. Bonus +1 alle prove di Sopravvivenza.",
    description: "Consumato dal vento e dalla polvere.",
  }),
  shield("Scudo della Frontiera", "frontier", "Non Comune", {
    mechanicalEffect: "+3 CA. Vantaggio a prove di Percezione per tracce.",
    description: "Cuoio spesso e fibra vegetale pressata.",
  }),
  shield("Scudo del Bisonte", "frontier", "Non Comune", {
    mechanicalEffect: "+3 CA. Resistente agli urti.",
    description: "Rivestito di pelle di bisonte.",
  }),
  shield("Scudo del Fiume Selvaggio", "frontier", "Rara", {
    mechanicalEffect: "+4 CA. Una volta al giorno: crea un ponte d'acqua largo 1,5 m per 10 minuti.",
    description: "Ondeggia come acqua corrente.",
  }),
  shield("Scudo del Lupo Solitario", "frontier", "Rara", {
    mechanicalEffect: "+4 CA. Bonus +1d4 ai danni se si attacca da soli contro un nemico.",
    description: "Un lupo inciso su acciaio grezzo.",
  }),
  shield("Scudo della Prateria", "frontier", "Rara", {
    mechanicalEffect: "+4 CA. Immune agli effetti del vento forte.",
    description: "Largo e piatto come un orizzonte.",
  }),
  shield("Scudo della Tempesta di Polvere", "frontier", "Molto rara", {
    resistances: ["acido"],
    mechanicalEffect: "+5 CA. Resistenza all'acido. Azione bonus: nube di polvere CD 13.",
    description: "Consumato da mille tempeste.",
  }),
  shield("Scudo del Pioniere Leggendario", "frontier", "Molto rara", {
    mechanicalEffect: "+5 CA. Una volta al giorno: un alleato entro 3 m può ritentare un tiro salvezza fallito.",
    description: "Segnato da innumerevoli battaglie di frontiera.",
  }),
  shield("Scudo del Bisonte d'Acciaio", "frontier", "Molto rara", {
    penalties: ["-1 DES"],
    mechanicalEffect: "+5 CA. Carica: spostamento 6 m e spingi bersaglio grande o inferiore.",
    description: "Massiccio, due maniglie, borchie d'ottone.",
  }),
  shield("Scudo dell'Alba sul Confine", "frontier", "Leggendaria", {
    resistances: ["tagliente", "contundente", "perforante"],
    mechanicalEffect: "+6 CA. Resistenza a danno fisico non magico. Vantaggio a tutti i tiri salvezza di FOR.",
    description: "Un'alba incisa nell'acciaio eterno.",
  }),
  shield("Scudo del Passaggio", "frontier", "Leggendaria", {
    mechanicalEffect: "+6 CA. Una volta al giorno: teletrasporto fino a 300 m in un luogo visibile.",
    description: "Inciso con mappe di terre sconosciute.",
  }),
  shield("Scudo della Terra Promessa", "frontier", "Leggendaria", {
    mechanicalEffect: "+6 CA. Chi impugna e i suoi alleati entro 9 m non subiscono danni da terreno difficile.",
    description: "Verde e marrone come colline fertili.",
  }),
  shield("Scudo del Trapper", "frontier", "Non Comune", {
    mechanicalEffect: "+3 CA. Bonus +1 alle trappole e alla sopravvivenza.",
    description: "Pelle conciata e ossa di animali.",
  }),

  // ===== VILLAGGIO RURALE / RURAL (16) =====
  shield("Scudo del Granaio", "rural", "Comune", {
    mechanicalEffect: "+2 CA. Leggero, fatto con assi di fienile.",
    description: "Di legno chiaro, semplice.",
  }),
  shield("Scudo del Maniscalco", "rural", "Comune", {
    mechanicalEffect: "+2 CA. Testato contro attrezzi agricoli.",
    description: "Ferro di cavallo decorativo.",
  }),
  shield("Scudo del Campo", "rural", "Comune", {
    mechanicalEffect: "+2 CA. Non arrugginisce.",
    description: "Paglia pressata e assi verniciate.",
  }),
  shield("Scudo del Raccolto", "rural", "Non Comune", {
    mechanicalEffect: "+3 CA. Una volta al giorno, una creatura adiacente recupera 1d4 PF.",
    description: "Intreccio di rami di vite e grano sacro.",
  }),
  shield("Scudo del Villaggio", "rural", "Non Comune", {
    mechanicalEffect: "+3 CA. Vantaggio a prove di Rassicurare.",
    description: "Dipinto con scene di vita quotidiana.",
  }),
  shield("Scudo del Pastore", "rural", "Non Comune", {
    mechanicalEffect: "+3 CA. Le bestie non attaccano chi lo impugna.",
    description: "Lana pressata e legno leggero.",
  }),
  shield("Scudo del Falegname", "rural", "Rara", {
    mechanicalEffect: "+4 CA. Se danneggiato, si autoripara in 1d4 ore al sole.",
    description: "Olmo intarsiato, opera di un mastro falegname.",
  }),
  shield("Scudo del Mulino", "rural", "Rara", {
    mechanicalEffect: "+4 CA. Ruota lentamente: +1 ai tiri salvezza contro vento e acqua.",
    description: " Pale di mulino in miniatura.",
  }),
  shield("Scudo della Chiesa", "rural", "Rara", {
    resistances: ["necrotico"],
    mechanicalEffect: "+4 CA. Resistenza a necrotico. Luce fioca sacra nel raggio di 3 m.",
    description: "Inciso con preghiere e simboli sacri.",
  }),
  shield("Scudo del Raccolto Benedetto", "rural", "Molto rara", {
    resistances: ["necrotico", "veleno"],
    mechanicalEffect: "+5 CA. Resistenza a necrotico e veleno. Guarigione +2 da pozioni.",
    description: "Ricoperto d'oro e grano intrecciato.",
  }),
  shield("Scudo della Torre Campanaria", "rural", "Molto rara", {
    mechanicalEffect: "+5 CA. Una volta al giorno: suono di campana che spaventa creature entro 6 m (TS SAG).",
    description: "Un piccolo campanile in ferro battuto.",
  }),
  shield("Scudo del Guardiano della Stalla", "rural", "Molto rara", {
    mechanicalEffect: "+5 CA. Chi impugna può comunicare con gli animali da fattoria.",
    description: "Paglia e metallo fuso insieme.",
  }),
  shield("Scudo della Terra Grassata", "rural", "Leggendaria", {
    resistances: ["veleno", "necrotico", "fuoco"],
    mechanicalEffect: "+6 CA. Resistenza a veleno, necrotico e fuoco. Una volta al giorno: fa crescere un albero della vita che cura 6d8 PF.",
    description: "Radici d'oro e terra fertile incastonata.",
  }),
  shield("Scudo del Primo Raccolto", "rural", "Leggendaria", {
    mechanicalEffect: "+6 CA. Una volta al giorno: evoca uno spirito della natura che cura 4d8 PF.",
    description: "Fatto con i primi frutti della terra.",
  }),
  shield("Scudo del Villaggio Eterno", "rural", "Leggendaria", {
    mechanicalEffect: "+6 CA. Chi impugna e chi lo affianca non possono essere spostati contro la volontà.",
    description: "Un muro vivente di pietre e muschio.",
  }),
  shield("Scudo del Contadino Saggio", "rural", "Non Comune", {
    mechanicalEffect: "+3 CA. Bonus +1 alle prove di Natura e Sopravvivenza.",
    description: "Pesante ma ben bilanciato per il lavoro nei campi.",
  }),

  // ===== SOTTOSUOLO / UNDERDARK (16) =====
  shield("Scudo del Sottosuolo", "underdark", "Comune", {
    mechanicalEffect: "+2 CA. Non scivola sui funghi umidi.",
    description: "Pietra di grotta lavorata.",
  }),
  shield("Scudo di Basalto", "underdark", "Comune", {
    mechanicalEffect: "+2 CA. Assorbe il calore.",
    description: "Roccia vulcanica nera.",
  }),
  shield("Scudo Luminescente", "underdark", "Comune", {
    mechanicalEffect: "+2 CA. Emette una debole luce verde.",
    description: "Ricoperto di licheni luminescenti.",
  }),
  shield("Scudo del Cunicolo", "underdark", "Non Comune", {
    mechanicalEffect: "+3 CA. Bonus +1 alle prove di muoversi silenziosamente.",
    description: "Stretto e oblungo, ideale per gallerie.",
  }),
  shield("Scudo della Grotta", "underdark", "Non Comune", {
    mechanicalEffect: "+3 CA. Vantaggio a nascondersi nell'oscurità.",
    description: "Rivestito di stalattiti.",
  }),
  shield("Scudo Fungo", "underdark", "Non Comune", {
    mechanicalEffect: "+3 CA. Chi attacca può inalare spore (CD 11, veleno 1d4).",
    description: "Un fungo gigante essiccato e temprato.",
  }),
  shield("Scudo della Ragnatela", "underdark", "Rara", {
    resistances: ["veleno"],
    mechanicalEffect: "+4 CA. Resistenza al veleno. Chi attacca in mischia deve superare TS FOR o rimanere bloccato 1 round.",
    description: "Ragnatele fossilizzate su metallo scuro.",
  }),
  shield("Scudo del Minatore Perduto", "underdark", "Rara", {
    mechanicalEffect: "+4 CA. Bonus +2 alle prove di Percezione al buio.",
    description: "Un piccone modificato a scudo.",
  }),
  shield("Scudo della Profondità", "underdark", "Rara", {
    mechanicalEffect: "+4 CA. Una volta al giorno: vedere nell'oscurità magica per 10 minuti.",
    description: "Un occhio incastonato nel metallo.",
  }),
  shield("Scudo del Re della Caverna", "underdark", "Molto rara", {
    resistances: ["veleno", "acido"],
    mechanicalEffect: "+5 CA. Resistenza a veleno e acido. Scurovisione 18 m.",
    description: "Ossidiana e cristalli viola.",
  }),
  shield("Scudo della Luce Nera", "underdark", "Molto rara", {
    mechanicalEffect: "+5 CA. Azione bonus: spegne tutte le fonti di luce non magiche entro 18 m.",
    description: "Assorbe ogni fotone intorno.",
  }),
  shield("Scudo della Mente Silenziosa", "underdark", "Molto rara", {
    resistances: ["psichico"],
    mechanicalEffect: "+5 CA. Resistenza a psichico. Immune a rilevamento magico.",
    description: "Sembra fatto di ombra solida.",
  }),
  shield("Scudo del Vuoto", "underdark", "Leggendaria", {
    resistances: ["psichico", "necrotico", "acido"],
    mechanicalEffect: "+6 CA. Resistenza a psichico, necrotico e acido.",
    description: "Un cerchio di niente. La luce non si riflette.",
  }),
  shield("Scudo dei Cristalli Urlanti", "underdark", "Leggendaria", {
    mechanicalEffect: "+6 CA. Una volta al giorno: urlo psichico, tutti entro 6 m TS INT o 4d6 psichico.",
    description: "Cristalli vibranti che emettono un lamento.",
  }),
  shield("Scudo del Buio Eterno", "underdark", "Leggendaria", {
    mechanicalEffect: "+6 CA. Chi impugna è circondato da oscurità magica (come incantesimo) per 1 round, ricaricabile 3/giorno.",
    description: "Nero oltre il nero.",
  }),
  shield("Scudo del Tarlo", "underdark", "Non Comune", {
    mechanicalEffect: "+3 CA. Piccolo e leggero. Bonus +1 alle trappole.",
    description: "Consumato da insetti, ma ancora funzionale.",
  }),

  // ===== ROVINE ANTICHE / RUINS (16) =====
  shield("Scudo delle Rovine", "ruins", "Comune", {
    mechanicalEffect: "+2 CA. Ha superato i secoli.",
    description: "Consumato dal tempo ma integro.",
  }),
  shield("Scudo della Colonna", "ruins", "Comune", {
    mechanicalEffect: "+2 CA. Dà vantaggio a prove di Arrampicata su pietra.",
    description: "Frammento di una colonna di marmo.",
  }),
  shield("Scudo del Sigillo", "ruins", "Comune", {
    mechanicalEffect: "+2 CA. Sembra avere un sigillo dimenticato.",
    description: "Un cerchio di bronzo verde.",
  }),
  shield("Scudo del Frammento", "ruins", "Non Comune", {
    mechanicalEffect: "+3 CA. Recuperato da antiche rovine, ancora solido.",
    description: "Un frammento di un'armatura antica riadattato.",
  }),
  shield("Scudo del Custode", "ruins", "Non Comune", {
    mechanicalEffect: "+3 CA. Vantaggio a prove di Storia sulle rovine.",
    description: "Inciso con una lingua dimenticata.",
  }),
  shield("Scudo dello Scavo", "ruins", "Non Comune", {
    mechanicalEffect: "+3 CA. Bonus +1 alle prove di Indagare in ambienti antichi.",
    description: "coperto di polvere millenaria.",
  }),
  shield("Scudo del Guardiano", "ruins", "Rara", {
    resistances: ["necrotico"],
    mechanicalEffect: "+4 CA. Resistenza a necrotico. Non può essere posseduto.",
    description: "Un volto severo inciso nel metallo.",
  }),
  shield("Scudo della Porta di Pietra", "ruins", "Rara", {
    mechanicalEffect: "+4 CA. Se si pianta a terra, offre copertura media.",
    description: "Massiccio, come una porta di tomba.",
  }),
  shield("Scudo dell'Ultimo Re", "ruins", "Rara", {
    mechanicalEffect: "+4 CA. Una volta al giorno: un alleato entro 6 m recupera 2d6 PF.",
    description: " Corone e spade incise sull'acciaio.",
  }),
  shield("Scudo della Regina Sepolta", "ruins", "Molto rara", {
    resistances: ["necrotico", "psichico"],
    mechanicalEffect: "+5 CA. Resistenza a necrotico e psichico. Una volta al giorno, resistenza alla morte per 1 round.",
    description: "Ornato di gioielli funerari.",
  }),
  shield("Scudo del Portale", "ruins", "Molto rara", {
    mechanicalEffect: "+5 CA. Una volta al giorno: teletrasporto di 15 m.",
    description: "Un portale in miniatura incastonato.",
  }),
  shield("Scudo delle Iscrizioni", "ruins", "Molto rara", {
    mechanicalEffect: "+5 CA. +2 ai tiri salvezza contro magia.",
    description: "Ricoperto di rune protettive.",
  }),
  shield("Scudo della Città Perduta", "ruins", "Leggendaria", {
    resistances: ["necrotico", "acido", "psichico"],
    mechanicalEffect: "+6 CA. Resistenza a necrotico, acido e psichico.",
    description: "Ultimo retaggio di una civiltà scomparsa.",
  }),
  shield("Scudo del Tempo Sospeso", "ruins", "Leggendaria", {
    mechanicalEffect: "+6 CA. Una volta al giorno, può rallentare il tempo per 1 round (azioni bonus extra).",
    description: "Un orologio senza lancette inciso.",
  }),
  shield("Scudo del Primo Sigillo", "ruins", "Leggendaria", {
    mechanicalEffect: "+6 CA. Una volta al giorno: sigilla un'entità planare per 1 ora (CD 18 CAR).",
    description: "Marchiato con il primo sigillo dell'universo.",
  }),
  shield("Scudo del Collezionista", "ruins", "Non Comune", {
    mechanicalEffect: "+3 CA. Ha un valore storico. Può essere identificato con CD 15 Storia.",
    description: "Un reperto ben conservato.",
  }),

  // ===== ARTICO / ARCTIC (16) =====
  shield("Scudo della Brina", "arctic", "Comune", {
    mechanicalEffect: "+2 CA. Coperto da uno strato di ghiaccio.",
    description: "Pelle di foca e ghiaccio.",
  }),
  shield("Scudo del Nord", "arctic", "Comune", {
    mechanicalEffect: "+2 CA. Isola dal freddo.",
    description: "Doppio strato di pelliccia su legno.",
  }),
  shield("Scudo del Ghiaccio", "arctic", "Comune", {
    mechanicalEffect: "+2 CA. Scivoloso: vantaggio a scivolare sul ghiaccio.",
    description: "Acqua ghiacciata rinforzata con fibre vegetali.",
  }),
  shield("Scudo dell'Orso Polare", "arctic", "Non Comune", {
    resistances: ["freddo"],
    mechanicalEffect: "+3 CA. Resistenza al freddo.",
    description: "Pelle d'orso bianco.",
  }),
  shield("Scudo del Vento Gelido", "arctic", "Non Comune", {
    mechanicalEffect: "+3 CA. Ignora gli effetti del vento forte.",
    description: "Forma aerodinamica.",
  }),
  shield("Scudo del Cacciatore di Foche", "arctic", "Non Comune", {
    mechanicalEffect: "+3 CA. Vantaggio a nascondersi nella neve.",
    description: "Bianco e mimetizzato.",
  }),
  shield("Scudo del Gelo Mordente", "arctic", "Rara", {
    resistances: ["freddo"],
    mechanicalEffect: "+4 CA. Resistenza al freddo. Chi attacca subisce 1d4 freddo.",
    description: "Un cristallo di ghiaccio eterno.",
  }),
  shield("Scudo della Tormenta", "arctic", "Rara", {
    mechanicalEffect: "+4 CA. Azione bonus: crea una piccola tormenta (3 m, TS COS o svantaggio a tiri per 1 round).",
    description: "Rune della neve incise nel metallo.",
  }),
  shield("Scudo dell'Aurora", "arctic", "Rara", {
    resistances: ["freddo"],
    mechanicalEffect: "+4 CA. Resistenza al freddo. Illumina come luce fioca colorata.",
    description: "Riflette i colori dell'aurora boreale.",
  }),
  shield("Scudo del Respiro Bianco", "arctic", "Molto rara", {
    resistances: ["freddo", "tagliente"],
    mechanicalEffect: "+5 CA. Resistenza a freddo e tagliente. Una volta al giorno: cono di gelo 4d6 freddo CD 15.",
    description: "La bocca di un drago bianco stilizzata.",
  }),
  shield("Scudo del Nord Eterno", "arctic", "Molto rara", {
    mechanicalEffect: "+5 CA. Immune a danni da freddo non magico. Vantaggio alle prove di Sopravvivenza artiche.",
    description: "Fatto con l'ultimo cuore di un gigante del gelo.",
  }),
  shield("Scudo della Nebbia Gelata", "arctic", "Molto rara", {
    mechanicalEffect: "+5 CA. Quando para, emette una nube di nebbia gelida che svantaggia il prossimo attacco contro di lui.",
    description: "Sembra respirare vapore.",
  }),
  shield("Scudo del Gelo Primordiale", "arctic", "Leggendaria", {
    resistances: ["freddo", "fuoco"],
    mechanicalEffect: "+6 CA. Resistenza a freddo e fuoco. Congela l'acqua in un raggio di 3 m.",
    description: "Un nucleo di ghiaccio primordiale.",
  }),
  shield("Scudo della Stella Caduta", "arctic", "Leggendaria", {
    mechanicalEffect: "+6 CA. Una volta al giorno: fulmine dal cielo, 6d6 fulmine CD 17.",
    description: "Frammento di meteorite incastonato.",
  }),
  shield("Scudo del Nord Silente", "arctic", "Leggendaria", {
    mechanicalEffect: "+6 CA. Chi impugna emette silenzio (come incantesimo) in un raggio di 3 m.",
    description: "Nero come il cielo invernale.",
  }),
  shield("Scudo del Pescatore di Ghiaccio", "arctic", "Non Comune", {
    mechanicalEffect: "+3 CA. Bonus +1 alle prove di Sopravvivenza in ambienti glaciali.",
    description: "Leggero, con rampino per il ghiaccio.",
  }),

  // ===== PALUDE / SWAMP (16) =====
  shield("Scudo della Palude", "swamp", "Comune", {
    mechanicalEffect: "+2 CA. Non affonda nell'acqua bassa.",
    description: "Legno di torbiera.",
  }),
  shield("Scudo del Miasma", "swamp", "Comune", {
    mechanicalEffect: "+2 CA. Filtrato con erbe repellenti.",
    description: "Rivestito di erbe palustri.",
  }),
  shield("Scudo di Torba", "swamp", "Comune", {
    mechanicalEffect: "+2 CA. Non marcisce.",
    description: "Torba pressata e resina.",
  }),
  shield("Scudo del Canneto", "swamp", "Non Comune", {
    mechanicalEffect: "+3 CA. Leggerissimo: non penalizza il movimento in acqua.",
    description: "Canne intrecciate temprate con resina.",
  }),
  shield("Scudo del Ragno di Palude", "swamp", "Non Comune", {
    resistances: ["veleno"],
    mechanicalEffect: "+3 CA. Resistenza al veleno.",
    description: "Ragnatele fossilizzate su legno di mangrovia.",
  }),
  shield("Scudo della Rana", "swamp", "Non Comune", {
    mechanicalEffect: "+3 CA. Vantaggio a prove di Saltare.",
    description: "Forma arcuata che ricorda una rana.",
  }),
  shield("Scudo della Palude Nera", "swamp", "Rara", {
    resistances: ["veleno", "necrotico"],
    mechanicalEffect: "+4 CA. Resistenza a veleno e necrotico.",
    description: "Uno scudo umido e scuro, inciso con canne e acque ferme.",
  }),
  shield("Scudo del Serpente", "swamp", "Rara", {
    resistances: ["veleno"],
    mechanicalEffect: "+4 CA. Resistenza al veleno. Chi attacca in mischia deve superare TS COS o avvelenato 1 round.",
    description: "Squame di serpente incollate su metallo.",
  }),
  shield("Scudo della Zanzara", "swamp", "Rara", {
    mechanicalEffect: "+4 CA. Chi impugna è ignorato dagli insetti normali e magici.",
    description: "Sottile e forato come ali di insetto.",
  }),
  shield("Scudo del Coccodrillo", "swamp", "Molto rara", {
    resistances: ["veleno", "tagliente"],
    mechanicalEffect: "+5 CA. Resistenza a veleno e tagliente. Vantaggio a nuotare.",
    description: "Pelle di coccodrillo fossilizzata su acciaio.",
  }),
  shield("Scudo della Nebbia Verde", "swamp", "Molto rara", {
    mechanicalEffect: "+5 CA. Azione bonus: nube di nebbia velenosa 3 m (CD 14, 2d6 veleno).",
    description: "Emana un leggero vapore verdastro.",
  }),
  shield("Scudo del Cuore di Torbiera", "swamp", "Molto rara", {
    mechanicalEffect: "+5 CA. Una volta al giorno: riemerge dai liquami senza subire danno.",
    description: "Un cuore di torba che pulsa debolmente.",
  }),
  shield("Scudo dell'Acqua Morta", "swamp", "Leggendaria", {
    resistances: ["veleno", "necrotico", "acido"],
    mechanicalEffect: "+6 CA. Resistenza a veleno, necrotico e acido.",
    description: "Un'oscurità liquida che scorre sulla superficie.",
  }),
  shield("Scudo della Palude Eterna", "swamp", "Leggendaria", {
    mechanicalEffect: "+6 CA. Una volta al giorno: trasforma il terreno in pantano (9 m, terreno difficile).",
    description: "Muschio e ferro fusi insieme.",
  }),
  shield("Scudo del Grande Rospo", "swamp", "Leggendaria", {
    mechanicalEffect: "+6 CA. Lingua afferrante 6 m (TS FOR o trascinato).",
    description: "Un'enorme bocca di rospo incisa.",
  }),
  shield("Scudo del Racoglitore di Erbe", "swamp", "Non Comune", {
    mechanicalEffect: "+3 CA. Bonus +1 alle prove di Natura in ambienti palustri.",
    description: "Foderato di erbe aromatiche e medicinali.",
  }),

  // ===== EXTRA GENERICA PER ARRIVARE A 200 SCUDI =====
  shield("Scudo della Guardia Errante", "generic", "Comune", {
    mechanicalEffect: "+2 CA. Bonus +1 alle prove per proteggere un alleato adiacente.",
    description: "Uno scudo semplice portato da guardie di strada e carovane.",
  }),
  shield("Scudo del Ferro Calmo", "generic", "Non Comune", {
    mechanicalEffect: "+3 CA. Vantaggio al primo TS contro paura dell'incontro.",
    description: "Ferro scuro e impugnatura foderata in cuoio consumato.",
  }),
  shield("Scudo del Banco Chiuso", "generic", "Non Comune", {
    mechanicalEffect: "+3 CA. Una volta per incontro riduce di 3 i danni da un attacco a distanza.",
    description: "Usato dai mercanti per difendere casse e contratti.",
  }),
  shield("Scudo della Strada Bianca", "generic", "Rara", {
    resistances: ["radiante"],
    mechanicalEffect: "+4 CA. Resistenza a radiante per 10 minuti dopo aver subito danno magico.",
    description: "Dipinto con una linea bianca che non si sporca mai.",
  }),
  shield("Scudo del Patto Minore", "generic", "Rara", {
    mechanicalEffect: "+4 CA. Una volta al giorno concede +2 CA a un alleato entro 3 m per 1 round.",
    description: "Porta firme incise di vecchi compagni d'arme.",
  }),
  shield("Scudo dell'Argento Muto", "generic", "Molto rara", {
    resistances: ["psichico"],
    mechanicalEffect: "+5 CA. Resistenza a psichico e vantaggio contro charme.",
    description: "La superficie riflette solo sagome senza volto.",
  }),
  shield("Scudo dell'Ultima Porta", "generic", "Molto rara", {
    mechanicalEffect: "+5 CA. Una volta al giorno blocca completamente un attacco che avrebbe portato a 0 PF.",
    description: "Sembra il battente di una porta antica ridotta a scudo.",
  }),
  shield("Scudo del Primo Giuramento", "generic", "Leggendaria", {
    resistances: ["tagliente", "contundente", "perforante"],
    mechanicalEffect: "+6 CA. Resistenza ai danni fisici non magici. Vantaggio contro paura.",
    description: "Una reliquia lucida come se fosse appena stata forgiata.",
  }),
];