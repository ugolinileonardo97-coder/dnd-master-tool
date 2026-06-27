import { pickNarrativeFromPacks } from "./narrativePacks";

const fallbackRegionId = "generic";

const recentNarratives = {
  merchant: {},
  shop: {},
  tavern: {},
  innkeeper: {},
};

function normalizeText(value) {
  return String(value || "").trim().replace(/\s+/g, " ").toLowerCase();
}

function pick(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function pickUniqueText(regionId, type, candidates) {
  const key = `${regionId}:${type}`;
  const recent = recentNarratives[type][key] || [];
  const recentSet = new Set(recent.map(normalizeText));
  const available = candidates.filter((candidate) => !recentSet.has(normalizeText(candidate)));
  const selected = pick(available.length ? available : candidates);

  recentNarratives[type][key] = [
    selected,
    ...recent.filter((item) => normalizeText(item) !== normalizeText(selected)),
  ].slice(0, 20);

  return selected;
}

function getLevelBand(level = 1) {
  const numericLevel = Number(level) || 1;

  if (numericLevel <= 4) return "low";
  if (numericLevel <= 10) return "mid";
  if (numericLevel <= 16) return "high";
  return "legendary";
}

const bandProfiles = {
  low: {
    shop: [
      "Le merci sono pratiche, consumate dall'uso e scelte per problemi vicini: strade fangose, notti fredde, piccoli debiti.",
      "Il banco non promette miracoli: offre corde buone, lame oneste, lampade riparate e consigli che valgono più del resto.",
      "Chi entra cerca soprattutto soluzioni immediate, non rarità; il proprietario lo sa e tiene i prezzi abbastanza chiari.",
    ],
    merchant: [
      "Tratta con gente comune e avventurieri alle prime armi, quindi pesa più l'affidabilità che la fama.",
      "Non rischia merci preziose senza garanzie, ma ascolta volentieri chi porta notizie utili dalla strada.",
      "La reputazione conta nelle piccole cose: credito, consegne promesse e favori da restituire prima dell'inverno.",
    ],
    tavern: [
      "È un posto per pasti caldi, notti asciutte e problemi locali raccontati a bassa voce.",
      "La sala vive di clienti abituali, viaggiatori stanchi e pettegolezzi che arrivano prima delle lettere ufficiali.",
      "Niente sembra eroico al primo sguardo, ma ogni tavolo può indicare una pista, un debito o una paura concreta.",
    ],
    innkeeper: [
      "Gestisce la sala con pragmatismo, ricordando chi paga, chi mente e chi può creare guai prima dell'alba.",
      "Ha imparato a proteggere il locale con poche parole e con una memoria migliore di qualunque registro.",
      "Non cerca avventure, ma sa riconoscere quando una brutta notizia può diventare lavoro per persone armate.",
    ],
  },
  mid: {
    shop: [
      "Dietro gli oggetti comuni compaiono casse più curate, fornitori selezionati e qualche pezzo tenuto lontano dagli occhi curiosi.",
      "Il negozio serve clienti capaci di pagare bene e di tornare con richieste più difficili.",
      "La qualità cresce senza ostentazione: serrature migliori, merci protette, registri ordinati e accordi non scritti.",
    ],
    merchant: [
      "Conosce capitani, guide e funzionari minori; offre favori solo quando intravede un ritorno concreto.",
      "Contratta con calma, lasciando che sia il cliente a rivelare urgenza, ricchezza e debolezze.",
      "Sa distinguere gli avventurieri di passaggio da quelli destinati a diventare contatti importanti per la regione.",
    ],
    tavern: [
      "La locanda è nota abbastanza da attirare messaggeri, artigiani esperti e viaggiatori con segreti gestibili.",
      "Le stanze migliori vengono assegnate con attenzione, perché alcune conversazioni valgono più del prezzo del letto.",
      "Il locale funziona come punto di scambio per notizie, protezioni discrete e piccoli incarichi non ufficiali.",
    ],
    innkeeper: [
      "Sa quando fare domande e quando lasciare che sia il silenzio del cliente a parlare.",
      "Tiene separati ospiti incompatibili, favori delicati e conti che non devono comparire sulla stessa pagina.",
      "La sua cortesia è reale, ma mai ingenua: ogni servizio porta con sé una traccia di informazione.",
    ],
  },
  high: {
    shop: [
      "Le merci migliori non sono esposte: arrivano su richiesta, con garanzie, intermediari e prezzi che includono il rischio.",
      "Il negozio ha l'aria di un luogo rispettabile, ma chi sa osservare nota protezioni, messaggi cifrati e clienti selezionati.",
      "Qui passano oggetti rari, materiali difficili da reperire e nomi che alcuni preferirebbero non vedere annotati.",
    ],
    merchant: [
      "Tratta con nobili, capitani, emissari e compagnie già note; ogni sconto è una scelta politica.",
      "Non vende solo merci: organizza passaggi, coperture e presentazioni a persone che non ricevono sconosciuti.",
      "La sua reputazione apre porte o ne chiude molte, e il suo allineamento emerge nel prezzo richiesto per fare la cosa giusta.",
    ],
    tavern: [
      "Le sale private ospitano capitani, magistrati e intermediari che preferiscono entrare da porte diverse.",
      "Il servizio è curato, ma la vera ricchezza del luogo è la rete di favori che attraversa camere, cantine e cortili.",
      "Chi paga abbastanza trova discrezione; chi ascolta abbastanza capisce quali tensioni muovono la regione.",
    ],
    innkeeper: [
      "Conosce stemmi, debiti e abitudini di ospiti potenti, ma li usa solo quando serve davvero.",
      "Sorride con misura e fa sparire i problemi prima che diventino scandali.",
      "Tiene una linea netta tra ospitalità e complicità, anche se pochi riescono a capire dove sia.",
    ],
  },
  legendary: {
    shop: [
      "Il luogo sembra accessibile, ma la merce più rara circola solo attraverso parole d'ordine, lettere sigillate e fiducia conquistata.",
      "Ogni scaffale ordinario nasconde una rete di acquisizioni antiche, contratti pericolosi e oggetti che non dovrebbero essere in vendita.",
      "La bottega serve figure capaci di cambiare confini, dinastie o equilibri planari senza alzare la voce.",
    ],
    merchant: [
      "Parla come chi ha già visto cadere casate, gilde e culti; concede favori solo quando il destino sembra presentare un conto.",
      "Non si lascia impressionare dal potere, ma prende nota di chi lo usa con disciplina e di chi lo spreca.",
      "Ogni accordo può diventare un aggancio verso reliquie, alleanze remote o verità che molti preferirebbero sepolte.",
    ],
    tavern: [
      "A un occhio distratto pare un rifugio ben tenuto; a chi sa leggere i segni rivela stanze preparate per ospiti mai annunciati.",
      "Alcuni tavoli sono sempre liberi, alcune porte non cigolano mai e certi nomi vengono pronunciati solo vicino al fuoco basso.",
      "La locanda custodisce accordi, sparizioni e protezioni che superano il quartiere e raggiungono corti, templi o poteri antichi.",
    ],
    innkeeper: [
      "Ha visto eroi diventare leggende e leggende chiedere una stanza sotto falso nome.",
      "Conserva chiavi, promesse e confessioni con la stessa precisione con cui versa il vino.",
      "Non alza quasi mai la voce: quando lo fa, perfino gli ospiti più pericolosi capiscono che la serata è cambiata.",
    ],
  },
};

const regionProfiles = {
  generic: {
    shopPlaces: [
      "al piano terra di una casa stretta vicino al mercato",
      "accanto a una stalla, una fontana e una strada molto battuta",
      "sotto un'insegna ridipinta più volte, con casse ordinate fuori dalla porta",
      "in un edificio basso dove scaffali nuovi convivono con travi antiche",
      "presso un crocevia dove passano carovane, pellegrini e guardie stanche",
    ],
    shopSenses: [
      "odore di cuoio, cera calda e ferro pulito",
      "scricchiolio di assi, fibbie metalliche e pagine sfogliate",
      "luce di lanterne basse su cartellini scritti a mano",
      "profumo di spezie comuni, olio per lame e pergamena",
      "un brusio continuo di clienti che confrontano prezzi e provenienze",
    ],
    shopGoods: [
      "corde, lame comuni, lanterne, borse cerate e mappe piegate",
      "utensili da viaggio, piccoli talismani e provviste robuste",
      "scorte miste, ferri riparati e oggetti recuperati da vecchie compagnie",
      "contenitori sigillati, candele spesse e strumenti da campo",
      "merce pratica affiancata a pochi pezzi curiosi tenuti dietro il banco",
    ],
    merchantBehaviors: [
      "parla con calma e lascia che siano le pause a far salire il prezzo",
      "tocca ogni moneta con due dita, più per abitudine che per sospetto",
      "tratta con cortesia asciutta e interrompe subito chi confonde fretta e autorità",
      "ascolta più di quanto prometta e ricorda ogni favore ricevuto",
      "sorride solo quando capisce che il cliente sa davvero cosa vuole",
    ],
    tavernPlaces: [
      "occupa una casa grande cresciuta stanza dopo stanza",
      "si appoggia a un cortile dove arrivano carri, notizie e animali nervosi",
      "ha travi scure, tavoli diversi fra loro e un camino sincero",
      "vive al piano terra di un edificio storto ma accogliente",
      "apre su una sala bassa dove ogni sedia porta graffi e iniziali",
    ],
    tavernSenses: [
      "odora di pane, birra scura e legna bruciata",
      "risuona di dadi, sedie trascinate e racconti gonfiati",
      "mescola calore, prudenza e promesse facili",
      "tiene nell'aria polvere, zuppa densa e mantelli bagnati",
      "accoglie chi paga, ma non dimentica chi crea problemi",
    ],
    innkeeperHabits: [
      "conosce il nome dei clienti abituali e il debito di molti di loro",
      "tiene un registro preciso di camere, favori e bugie",
      "serve con gentilezza studiata e ascolta più di quanto parli",
      "ha il sorriso facile e una risposta pronta dietro il bancone",
      "misura gli ospiti da scarpe, mani e modo di guardare l'uscita",
    ],
    innkeeperTells: [
      "posa lentamente il boccale quando vuole far tacere una sala",
      "riserva sempre un tavolo a chi porta notizie interessanti",
      "lascia una sedia vuota vicino al camino anche quando il locale è pieno",
      "tiene una balestra corta sotto il banco e la chiama deterrente per i topi",
      "controlla le scale prima di rispondere alle domande più semplici",
    ],
  },
  urban: {
    shopPlaces: [
      "fra un cambiavalute e un venditore di pergamene",
      "sotto portici affollati dove passano guardie, fattorini e apprendisti",
      "in una via laterale abbastanza pulita da sembrare sorvegliata",
      "vicino a una piazza dove gilde e notai litigano per precedenze",
      "al fondo di un cortile con targhe di bronzo e finestre sempre chiuse",
    ],
    shopSenses: [
      "inchiostro, cera lacca e metallo lucidato",
      "passi rapidi, monete contate e campanelli di banco",
      "profumo di carta asciutta, stoffe costose e spezie leggere",
      "mormorii di trattative coperte dal rumore della strada",
      "luce ordinata su scaffali numerati e registri puliti",
    ],
    shopGoods: [
      "astucci, mappe urbane, pugnali sottili e documenti cerati",
      "abiti rinforzati, fiale discrete e strumenti da serratura legali quanto basta",
      "merci da gilda, pergamene, sigilli e piccole protezioni",
      "oggetti raffinati per clienti che non vogliono sporcarsi le mani",
      "equipaggiamento scelto per intrighi, scorte nobiliari e viaggi rapidi",
    ],
    merchantBehaviors: [
      "tratta come un notaio e sorride come un duellante",
      "conosce regolamenti, eccezioni e persone capaci di ignorarli",
      "offre prezzi diversi a chi porta lettere, stemmi o segreti verificabili",
      "non alza mai la voce: lascia che lo facciano i clienti meno esperti",
      "valuta l'abito prima della borsa e la domanda prima dell'abito",
    ],
    tavernPlaces: [
      "si trova fra una bottega di candele e una scala che sale a stanze basse",
      "nasconde sale private dietro una facciata quasi anonima",
      "occupa due piani stretti in un quartiere rumoroso e ben sorvegliato",
      "apre su una strada dove carrozze e messaggeri non smettono mai di passare",
      "mantiene un cortile interno più silenzioso di quanto sembri possibile",
    ],
    tavernSenses: [
      "profuma di vino speziato, carta umida e arrosti ricchi",
      "risuona di posate, pettegolezzi e passi trattenuti nei corridoi",
      "separa con cura la sala rumorosa dalle stanze dove si parla piano",
      "serve clienti eleganti accanto a informatori che fingono povertà",
      "mostra ordine in pubblico e una prudenza quasi militare sul retro",
    ],
    innkeeperHabits: [
      "conosce stemmi minori e debiti maggiori",
      "fa sedere i clienti in modo che non incontrino chi vogliono evitare",
      "capisce da una mancia quale porta conviene aprire",
      "chiama tutti per titolo finché non scopre il nome utile",
      "tiene separati scandali, ricevute e bicchieri scheggiati",
    ],
    innkeeperTells: [
      "porta un mazzo di chiavi sottile come un gioiello",
      "segna i conti con una grafia minuscola e perfetta",
      "ha camerieri addestrati a sparire prima delle discussioni serie",
      "riconosce le bugie migliori perché spesso le ha suggerite lui",
      "guarda le finestre quando in strada rallenta una carrozza",
    ],
  },
  coastal: {
    shopPlaces: [
      "sotto archi umidi vicino ai moli",
      "dietro una fila di barili salati e reti messe ad asciugare",
      "in un magazzino con porte gonfie d'acqua e cardini robusti",
      "accanto a una passerella che geme a ogni onda",
      "sotto un'insegna che oscilla anche quando il vento tace",
    ],
    shopSenses: [
      "sale, pesce, catrame e rum speziato",
      "lanterne che dondolano e tavole bagnate sotto gli stivali",
      "corde appese, conchiglie numerate e mappe macchiate",
      "aria fredda di porto e legno impregnato",
      "voci di marinai filtrate dalle assi e richiami dai moli",
    ],
    shopGoods: [
      "corde cerate, bussole ammaccate, coltelli da bordo e stivali da ponte",
      "reti, ami, lanterne schermate e conserve salmastre",
      "barili segnati, spezie di porto e mappe nautiche",
      "otri cerati, uncini, remi corti e piccoli amuleti contro la tempesta",
      "merci arrivate umide da navi senza nome",
    ],
    merchantBehaviors: [
      "parla rapido come chi contratta prima dell'alta marea",
      "ride forte, ma abbassa la voce quando il discorso tocca la dogana",
      "osserva le mani dei clienti come un ufficiale portuale diffidente",
      "valuta il vento, l'umore e il prezzo nello stesso momento",
      "chiede da quale nave arrivi qualcuno prima di chiedere cosa compri",
    ],
    tavernPlaces: [
      "guarda i moli da una strada stretta dove il sale resta sulle pietre",
      "occupa un vecchio deposito di reti rinforzato con travi navali",
      "ha finestre basse verso le barche e una sala lunga come una cambusa",
      "si stringe tra magazzini, bitte e corde lasciate ad asciugare",
      "tiene il bancone lucidato da sale, gomiti e tempeste",
    ],
    tavernSenses: [
      "odora di rum, pesce affumicato, catrame e pioggia",
      "risuona di canti stonati, bicchieri spessi e catene sul molo",
      "serve marinai stanchi e pescatori rumorosi a tavoli sempre umidi",
      "sembra allegra finché qualcuno nomina la dogana",
      "trattiene storie di tempeste, debiti e navi mai tornate",
    ],
    innkeeperHabits: [
      "conta le maree meglio dei turni in cucina",
      "conosce capitani affidabili e capitani da evitare",
      "ascolta i passi sul pontile prima della campanella",
      "serve rum annacquato solo a chi lo merita",
      "sa chi arriva dal mare e chi vorrebbe ripartire subito",
    ],
    innkeeperTells: [
      "ha mani screpolate da sale e corde",
      "porta una chiave appesa a un amo storto",
      "non si fida di chi entra con stivali troppo asciutti",
      "sorride solo quando sente nominare il vento giusto",
      "tiene sotto il banco una lista di navi che nessuno deve cercare",
    ],
  },
};

Object.assign(regionProfiles, {
  mountain: {
    ...regionProfiles.generic,
    shopPlaces: [
      "vicino a una scalinata di pietra battuta dal vento",
      "sotto un tetto basso rinforzato contro neve e frane",
      "accanto al ricovero delle guide del valico",
      "in una casa di roccia dove gli scarponi lasciano fango chiaro",
      "presso una curva della strada che sale verso i passi alti",
    ],
    shopSenses: [
      "lana bagnata, ferro freddo e resina bruciata",
      "colpi di martello lontani e vento tra le fessure",
      "formaggio stagionato, cuoio spesso e brace lenta",
      "pietra umida, olio per ramponi e neve sciolta",
      "legno di pino, pellicce e metallo temprato",
    ],
    shopGoods: [
      "ramponi, corde da parete, piccozze, mantelli foderati e mappe dei passi",
      "lampade schermate, chiodi da roccia e provviste compatte",
      "pellicce robuste, ferri da scalata e piccoli amuleti contro le slavine",
      "armi corte, borracce rinforzate e utensili da minatore",
      "equipaggiamento da valico scelto da chi conosce il freddo",
    ],
    merchantBehaviors: [
      "contratta come una guida che conosce il tempo meglio dei clienti",
      "misura il valore di qualcuno dal rispetto che mostra per la montagna",
      "fa poche promesse e pretende che vengano mantenute",
      "offre consigli secchi, spesso più utili della merce venduta",
      "non ride delle paure: le cataloga e ci costruisce un prezzo",
    ],
    tavernPlaces: [
      "sorge contro una parete di roccia, con finestre piccole e porte pesanti",
      "accoglie viaggiatori sotto travi scure cariche di mantelli ad asciugare",
      "ha una sala stretta dove le guide siedono sempre vicino all'uscita",
      "vive attorno a un camino profondo che non viene lasciato spegnere",
      "guarda il sentiero del valico da una terrazza battuta dal vento",
    ],
    tavernSenses: [
      "odora di brodo caldo, lana umida e legna resinosa",
      "risuona di vento, boccali pesanti e scarponi contro la pietra",
      "serve selvaggina, funghi e formaggi duri a chi arriva tremando",
      "conserva nomi di guide scomparse e sentieri chiusi troppo presto",
      "sembra ruvida, ma offre coperte asciutte prima ancora delle domande",
    ],
  },
  forest: {
    ...regionProfiles.generic,
    shopPlaces: [
      "sotto una tettoia invasa dall'odore di resina",
      "al margine di un sentiero dove cacciatori e raccoglitori si fermano all'alba",
      "in una casa di legno scuro coperta da rampicanti tagliati con cura",
      "accanto a un deposito di pelli, erbe e frecce riparate",
      "vicino a una radura dove i carri preferiscono non sostare dopo il tramonto",
    ],
    shopSenses: [
      "muschio, cera d'api e piume asciutte",
      "foglie calpestate, corde tese e coltelli affilati",
      "erbe pestate, fumo dolce e cuoio verde",
      "legno fresco, bacche schiacciate e pioggia vicina",
      "silenzio di sottobosco rotto da campanelli di osso",
    ],
    shopGoods: [
      "archi semplici, trappole, erbe, mantelli verdi e coltelli da scuoiatura",
      "unguenti, corde leggere e mappe segnate con radure sicure",
      "frecce robuste, borracce di corteccia e amuleti intrecciati",
      "pelli conciate, funghi secchi e strumenti da campo discreti",
      "oggetti pratici per chi deve camminare senza farsi notare",
    ],
    merchantBehaviors: [
      "parla piano, come se anche le pareti potessero spaventarsi",
      "valuta chi entra dal fango sugli stivali e dal rispetto per le lame",
      "vende volentieri a chi ascolta i consigli prima dei prezzi",
      "sa quali sentieri evitare, ma non regala mai un avvertimento completo",
      "contratta con calma finché qualcuno nomina il bosco sbagliato",
    ],
    tavernPlaces: [
      "sta all'ombra di alberi alti, con il tetto coperto di aghi e foglie",
      "apre su una sala profumata di funghi, fumo dolce e selvaggina",
      "ha panche lucidate da cacciatori, taglialegna e guide silenziose",
      "nasconde un cortile dove vengono legati muli nervosi e cani da pista",
      "sembra parte del bosco, più che un edificio costruito dentro di esso",
    ],
    tavernSenses: [
      "odora di erbe, bacche scure e legna bagnata",
      "risuona di coltelli sul pane, racconti di caccia e pioggia sul tetto",
      "serve funghi, radici e carne di lepre a chi torna dal sottobosco",
      "trattiene storie di luci tra gli alberi e frecce trovate spezzate",
      "invita al riposo, ma non lascia mai dimenticare quanto sia vicino il buio",
    ],
  },
  desert: {
    ...regionProfiles.generic,
    shopPlaces: [
      "sotto tende chiare tese contro sabbia e sole",
      "accanto a un pozzo sorvegliato più del denaro",
      "in una casa fresca con tappeti spessi e anfore sigillate",
      "sul bordo della pista dove le carovane contano animali e ombre",
      "dietro una porta bassa che trattiene profumo di spezie e polvere",
    ],
    shopSenses: [
      "datteri, cuoio secco e spezie calde",
      "sabbia sulle assi, acqua versata piano e bracciali metallici",
      "latte fermentato, incenso leggero e tela cerata",
      "vento contro le tende e monete avvolte in stoffa",
      "sale, olio profumato e mappe indurite dal sole",
    ],
    shopGoods: [
      "otri, veli, bussole solari, spezie conservanti e corde da carovana",
      "lame curve, tende leggere e amuleti contro miraggi e sete",
      "mappe d'oasi, datteri pressati e strumenti per riparare selle",
      "vesti larghe, filtri d'acqua e piccole pietre di orientamento",
      "merci essenziali per chi sa che l'errore più costoso è restare senz'acqua",
    ],
    merchantBehaviors: [
      "parla con ospitalità misurata e non dimentica mai il prezzo dell'acqua",
      "contratta lentamente, lasciando che il caldo faccia parte della trattativa",
      "chiede da quale pista arrivi qualcuno prima di mostrare merce seria",
      "rispetta chi viaggia preparato e tassa chi confonde coraggio e imprudenza",
      "concede favori solo a chi può restituirli prima della prossima tempesta",
    ],
    tavernPlaces: [
      "si raccoglie attorno a un cortile ombreggiato da teli color ocra",
      "tiene le stanze più fresche sotto il livello della strada",
      "guarda il pozzo comune da una veranda bassa piena di brocche",
      "ospita carovanieri in sale dove la sabbia entra comunque",
      "sembra chiusa al mondo finché il sole non cala e la porta si apre",
    ],
    tavernSenses: [
      "odora di datteri, carne secca e latte fermentato",
      "risuona di bracciali, racconti di dune e acqua versata con rispetto",
      "serve riso speziato, pane piatto e ombra più preziosa del vino",
      "trattiene notizie di piste bruciate e guide mai tornate",
      "offre silenzio fresco a chi arriva dalla luce feroce",
    ],
  },
  rural: {
    ...regionProfiles.generic,
    shopPlaces: [
      "vicino al pozzo comune e al granaio",
      "nel piano terra di una casa bassa con gerani alla finestra",
      "accanto alla bottega del maniscalco e a un recinto di galline",
      "sulla strada fangosa che porta ai campi",
      "in una stanza ordinata dove entrano famiglie, braccianti e pellegrini",
    ],
    shopSenses: [
      "farina, legna umida e ferro da aratro",
      "pane caldo, cuoio riparato e paglia pulita",
      "campane lontane, secchi d'acqua e passi sul fango",
      "erbe appese, mele secche e cera grezza",
      "lana, terriccio e fumo di cucina",
    ],
    shopGoods: [
      "coltelli da lavoro, corde, sementi, coperte e ferri riparati",
      "provviste semplici, lampade, zappe corte e piccoli rimedi",
      "arnesi, barattoli, mantelli pesanti e oggetti da viaggio economici",
      "merci utili a raccolti, stalle, recinti e strade vicine",
      "pochi pezzi insoliti arrivati con mercanti di passaggio",
    ],
    merchantBehaviors: [
      "conosce parentele, debiti e raccolti meglio di qualsiasi mappa",
      "vende a credito solo a chi può guardare negli occhi anche dopo il mercato",
      "diffida delle grandi promesse, ma riconosce subito un bisogno sincero",
      "contratta come chi sa quanto costa riparare un tetto prima della pioggia",
      "non ama gli avventurieri rumorosi, ma ascolta chi parla di problemi concreti",
    ],
    tavernPlaces: [
      "occupa una casa bassa vicino al pozzo comune",
      "ha travi scure di fumo e panche consumate da anni di raccolti",
      "guarda una strada di fango dove ogni forestiero viene notato",
      "divide il cortile con un fienile e una catasta di legna ordinata",
      "apre la porta su odori di pane caldo, verdure stufate e camino acceso",
    ],
    tavernSenses: [
      "odora di pane caldo, legna umida e verdure stufate",
      "risuona di cucchiai, stivali infangati e saluti tra vicini",
      "serve braccianti, famiglie e viandanti che non vogliono attirare attenzione",
      "sembra umile, ma conserva nomi, rancori e favori dell'intero villaggio",
      "offre pasti semplici e domande più precise di quanto sembri cortese",
    ],
  },
  swamp: {
    ...regionProfiles.generic,
    shopPlaces: [
      "su una palafitta collegata da passerelle viscide",
      "accanto a un approdo per barche piatte e reti scure",
      "in una casa bassa dove le finestre restano chiuse contro gli insetti",
      "sopra assi umide che scricchiolano anche senza passi",
      "vicino a un canneto da cui arrivano richiami difficili da riconoscere",
    ],
    shopSenses: [
      "torba, erbe amare e acqua ferma",
      "fumo acre, pelli bagnate e pesce salato",
      "zanzare, corde umide e vetro di fiale scure",
      "radici pestate, legno marcio e olio da lanterna",
      "nebbia, sale nero e funghi chiari",
    ],
    shopGoods: [
      "stivali cerati, corde impermeabili, fiale amare e coltelli da canneto",
      "barche pieghevoli, reti, repellenti e mappe dei guadi",
      "erbe medicinali, lampade schermate e amuleti contro febbri",
      "arpioni corti, sacche impermeabili e provviste affumicate",
      "merci scelte per chi deve restare asciutto dove tutto vuole marcire",
    ],
    merchantBehaviors: [
      "parla lentamente, come se aspettasse di sentire cosa si muove sotto l'acqua",
      "chiede sempre quanto a lungo qualcuno intenda restare nella palude",
      "vende rimedi con serietà e storie con maggiore prudenza",
      "non ride mai delle superstizioni locali: alcune sono istruzioni di sopravvivenza",
      "concede sconti a chi porta notizie dai guadi più remoti",
    ],
    tavernPlaces: [
      "sorge su pali scuri sopra acqua ferma e radici affioranti",
      "ha passerelle strette, finestre appannate e lanterne schermate",
      "ospita barcaioli taciturni sotto un tetto basso pieno di umidità",
      "guarda un canale lento dove ogni barca sembra arrivare troppo piano",
      "tiene le dispense alte, lontane dall'acqua e da ciò che la segue",
    ],
    tavernSenses: [
      "odora di pesce affumicato, erbe amare e legno bagnato",
      "risuona di insetti, acqua contro i pali e voci trattenute",
      "serve zuppe torbide, tuberi e pane scuro a clienti poco loquaci",
      "conserva racconti di barche tornate vuote e luci viste tra le canne",
      "sembra fragile, ma chi la gestisce conosce ogni scricchiolio della notte",
    ],
  },
});

const aliases = {
  mountain: "generic",
  forest: "generic",
  desert: "generic",
  frontier: "generic",
  rural: "generic",
  underdark: "generic",
  ruins: "generic",
  arctic: "generic",
  swamp: "generic",
};

export const narrativeArchives = {
  shop: regionProfiles,
  merchant: regionProfiles,
  tavern: regionProfiles,
  innkeeper: regionProfiles,
  bands: bandProfiles,
};

function profile(regionId) {
  return regionProfiles[regionId] || regionProfiles[aliases[regionId]] || regionProfiles[fallbackRegionId];
}

const writtenNarratives = {
  generic: {
    shop: {
      low: [
        "{shopName} occupa una stanza ordinata vicino alla strada principale. Sul banco ci sono corde asciutte, lame comuni e candele spesse; chi entra trova prezzi chiari, poche cerimonie e consigli pratici per il prossimo viaggio.",
        "{shopName} sembra nato per risolvere problemi semplici: riparare uno zaino, sostituire una lanterna, trovare un coltello affidabile. L'aria sa di cera e cuoio, e la clientela parla più di fango che di gloria.",
      ],
      mid: [
        "{shopName} ha scaffali più curati di quanto lasci intuire l'insegna. Tra attrezzi ordinari e mappe piegate compaiono casse riservate a clienti conosciuti, con merci migliori e qualche favore annotato a margine.",
        "{shopName} serve viaggiatori che sono già tornati vivi da luoghi difficili. Le provviste comuni sono in vista; gli oggetti davvero interessanti vengono mostrati solo dopo una conversazione misurata.",
      ],
      high: [
        "{shopName} conserva una facciata sobria, ma il retro parla di contratti, spedizioni protette e fornitori che non usano insegne. Qui la reputazione {reputation} decide quanto in fretta si apre la stanza delle merci rare.",
        "{shopName} tratta equipaggiamenti scelti per compagnie note, emissari e capitani. Il banco resta pulito, le serrature sono eccellenti e ogni richiesta insolita viene pesata prima ancora del prezzo.",
      ],
      legendary: [
        "{shopName} sembra una bottega rispettabile, ma le merci più preziose arrivano attraverso lettere sigillate e favori antichi. Chi compra qui non cerca solo oggetti: cerca accesso, copertura e conseguenze controllate.",
        "{shopName} custodisce pezzi che hanno attraversato guerre, rovine e mani troppo potenti. Nulla viene esposto per caso; perfino gli oggetti comuni sembrano messi lì per distrarre chi non sa osservare.",
      ],
    },
    merchant: {
      low: [
        "{name} è un {race} prudente, abituato a trattare con clienti che contano ogni moneta. Non regala sconti, ma sa riconoscere un bisogno sincero e può indicare lavori locali a chi dimostra serietà.",
        "{name} parla poco e ascolta bene. La reputazione {reputation} lo rende cauto: preferisce accordi piccoli, pagati subito, e ricorda chi mantiene una promessa anche quando nessuno controlla.",
      ],
      mid: [
        "{name} ha imparato a distinguere gli avventurieri affidabili da quelli rumorosi. Offre merci migliori solo dopo aver capito chi ha davanti, e spesso trasforma uno sconto in una richiesta di informazioni.",
        "{name} tratta con calma, lasciando che sia il cliente a rivelare urgenza e disponibilità. La sua rete non è vasta, ma include guide, trasportatori e un paio di nomi utili nei posti giusti.",
      ],
      high: [
        "{name} non vende soltanto equipaggiamento: apre contatti, procura passaggi e chiude conversazioni pericolose prima che attirino testimoni. La reputazione {reputation} pesa in ogni stretta di mano.",
        "{name} conosce il valore politico di una lama rara e quello narrativo di una semplice ricevuta. Concede favori solo a chi può restituirli senza creare scandalo.",
      ],
      legendary: [
        "{name} parla come chi ha visto cadere gilde e casate. Non si lascia impressionare dal potere, ma prende nota di chi lo usa con disciplina e di chi lo spreca.",
        "{name} tratta oggetti, segreti e presentazioni con la stessa precisione. Ogni accordo può portare a reliquie, debiti antichi o verità che qualcuno ha pagato per seppellire.",
      ],
    },
    tavern: {
      low: [
        "{tavernName} è un rifugio semplice per pasti caldi e mantelli asciutti. Le panche portano graffi vecchi, il camino fuma un poco e le conversazioni riguardano raccolti, strade chiuse e debiti vicini.",
        "{tavernName} non promette lusso: promette una ciotola piena, un letto onesto e abbastanza rumore da coprire una brutta notizia. I clienti abituali osservano ogni forestiero prima di salutarlo.",
      ],
      mid: [
        "{tavernName} è abbastanza nota da attirare messaggeri, artigiani esperti e viaggiatori con segreti gestibili. Le stanze migliori non sono sempre le più costose: spesso sono quelle meno visibili.",
        "{tavernName} funziona come punto d'incontro per chi ha bisogno di una guida, un favore o una voce confermata. La sala resta vivace, ma certi tavoli parlano sempre più piano degli altri.",
      ],
      high: [
        "{tavernName} serve capitani, magistrati e intermediari con la stessa cortesia misurata. Il servizio è curato, ma la vera ricchezza del luogo è la rete di favori che passa tra camere e cantina.",
        "{tavernName} ha sale private, ingressi discreti e personale capace di dimenticare una faccia al momento giusto. Chi paga abbastanza trova riposo; chi ascolta abbastanza trova intrighi.",
      ],
      legendary: [
        "{tavernName} sembra accessibile solo a chi si ferma alla porta. Gli ospiti più attenti notano stanze sempre pronte, chiavi senza etichetta e un tavolo lasciato libero anche nelle sere piene.",
        "{tavernName} custodisce accordi che superano il quartiere e raggiungono corti, templi o poteri antichi. Alcuni nomi vengono pronunciati soltanto vicino al fuoco basso.",
      ],
    },
    innkeeper: {
      low: [
        "{name} conosce il nome dei clienti abituali e il debito di molti di loro. Sorride poco, ma sa far tacere una sala posando lentamente un boccale sul banco.",
        "{name} tiene un registro semplice di camere, favori e bugie. Non ama gli avventurieri rumorosi, ma riserva sempre attenzione a chi porta notizie utili.",
      ],
      mid: [
        "{name} serve con gentilezza studiata e ascolta più di quanto parli. Ogni sera lascia un margine di posto per chi arriva tardi con una storia difficile da raccontare.",
        "{name} ha modi cordiali e memoria affilata. Sa chi deve sedere lontano dalla porta, chi paga per discrezione e chi finge di non conoscere gli altri ospiti.",
      ],
      high: [
        "{name} conosce stemmi, debiti e abitudini di persone influenti. Non usa queste informazioni spesso, ma quando lo fa la sala cambia tono senza bisogno di minacce.",
        "{name} fa sparire i problemi prima che diventino scandali. I clienti lo considerano ospitale; quelli più attenti capiscono che la sua prudenza è una forma di potere.",
      ],
      legendary: [
        "{name} ha visto eroi diventare leggende e leggende chiedere una stanza sotto falso nome. Conserva chiavi, promesse e confessioni con la stessa precisione con cui versa il vino.",
        "{name} non alza quasi mai la voce. Quando accade, perfino gli ospiti più pericolosi capiscono che la serata ha appena cambiato regole.",
      ],
    },
  },
};

["rural", "urban", "city", "coastal", "mountain", "forest", "desert", "swamp", "ruins", "underdark", "arctic", "frontier"].forEach((regionId) => {
  writtenNarratives[regionId] = writtenNarratives.generic;
});

function renderWrittenNarrative(template, context) {
  return template
    .replaceAll("{name}", context.name || "Il mercante")
    .replaceAll("{race}", String(context.race || "umano").toLowerCase())
    .replaceAll("{shopName}", context.shopName || "La bottega")
    .replaceAll("{tavernName}", context.tavernName || "La locanda")
    .replaceAll("{reputation}", String(context.reputationLabel || context.reputation || "incerta").toLowerCase());
}

const writtenClosers = {
  shop: [
    "Un cliente attento nota subito che nulla sul banco è disposto senza motivo.",
    "Le richieste strane vengono accolte con calma, ma raramente senza una domanda di ritorno.",
    "Chi paga in fretta riceve merce; chi parla bene può ricevere anche una pista.",
    "Dietro il tono ordinario si sente l'abitudine a trattare con guai veri.",
    "Il personale ricorda volti, debiti e destinazioni meglio di quanto ammetta.",
    "Gli oggetti comuni servono a coprire quelli che non tutti dovrebbero vedere.",
    "Una trattativa educata può valere quanto una borsa piena.",
    "Il registro conserva più storie di quante ne contenga il magazzino.",
    "La porta resta aperta, ma la fiducia va guadagnata un passo alla volta.",
    "Ogni acquisto lascia dietro di sé una piccola possibilità di aggancio.",
  ],
  merchant: [
    "Un favore con lui non resta mai sospeso troppo a lungo.",
    "Prima di concludere un accordo cerca sempre di capire chi pagherà il prezzo più alto.",
    "La cortesia dura finché nessuno prova a trasformarla in debolezza.",
    "Accetta oro, informazioni e promesse solo se può verificarne il peso.",
    "Sa rendere utile anche una conversazione apparentemente fallita.",
    "Non dimentica un debito, ma nemmeno un gesto di lealtà.",
    "Chi gli porta una buona notizia ottiene spesso un prezzo migliore.",
    "Dietro ogni offerta lascia intravedere una strada, un contatto o un problema.",
    "La sua pazienza finisce quando qualcuno mente male.",
    "Per lui ogni vendita è anche un modo per misurare il futuro cliente.",
  ],
  tavern: [
    "Chi resta abbastanza a lungo capisce quali tavoli ascoltare e quali evitare.",
    "La sera cambia volto quando arrivano viaggiatori con mantelli troppo puliti.",
    "Le storie migliori non vengono raccontate al banco, ma sulle scale.",
    "Un avventuriero prudente può uscirne con riposo, notizie e un problema nuovo.",
    "Ogni stanza sembra avere almeno una serratura più vecchia della porta.",
    "Il personale nota chi entra solo per bere e chi sta cercando qualcuno.",
    "Anche quando la sala ride, una parte del locale resta sempre in ascolto.",
    "Le pareti hanno assorbito più accordi che canzoni.",
    "La cucina scalda il corpo; le conversazioni scaldano guai più grandi.",
    "Di notte, il corridoio sembra più lungo di quanto dovrebbe.",
  ],
  innkeeper: [
    "Il suo vero talento è far credere agli ospiti di essersi spiegati da soli.",
    "Non vende segreti, ma sa a chi consegnare una domanda ben posta.",
    "Tiene la pace con un misto di memoria, debiti e tempismo.",
    "Quando smette di sorridere, anche i clienti peggiori abbassano la voce.",
    "La sua ospitalità è sincera, ma non cieca.",
    "Capisce chi fugge, chi mente e chi sta per chiedere troppo.",
    "Sa offrire una stanza senza offrire fiducia.",
    "Ogni chiave che porta sembra avere una storia propria.",
    "Accetta scuse, ma preferisce garanzie.",
    "Dietro il banco sembra sempre sapere quale porta verrà aperta dopo.",
  ],
};

const regionNarrativeAnchors = {
  coastal: {
    shop: "La bottega odora di sale e catrame: corde cerate pendono dalle travi, mappe nautiche restano sotto pesi di bronzo e un fascio di arpioni occupa l'angolo vicino alla porta.",
    merchant: "Conosce moli, dogane e capitani meglio delle strade interne; pesa monete straniere, valuta nodi da marinaio e diffida di chi non sa nominare il vento.",
    tavern: "La locanda guarda i moli da una strada stretta, con barili salati lungo il muro, gabbiani sul tetto e marinai che portano dentro pioggia e rumore.",
    innkeeper: "Ha imparato a leggere equipaggi, debiti di bordo e bugie da porto prima ancora che un cliente raggiunga il banco.",
  },
  mountain: {
    shop: "Pietra, neve e vento entrano nella bottega insieme ai clienti: corde da scalata, piccozze, ramponi e lanterne robuste sono appesi dove tutti possono controllarli.",
    merchant: "Parla poco e controlla ogni fibbia come se da quella dipendesse una vita; in quota, dice, la vanità pesa più del ferro.",
    tavern: "La locanda sta contro la pietra del valico, con il camino sempre acceso, guide infreddolite vicino alla porta e minatori che scuotono neve dagli stivali.",
    innkeeper: "Sa quali sentieri chiudono prima del tramonto e quali guide tornano con tutti i clienti vivi.",
  },
  swamp: {
    shop: "Passerelle umide portano alla porta; dentro ci sono stivali cerati, antitossine, erbe amare, zanzariere e fiale tenute lontane dal sole.",
    merchant: "Tiene le fiale all'ombra e non permette a nessuno di annusarle senza pagare: in palude, ripete, medicina e veleno differiscono spesso per una goccia.",
    tavern: "La locanda sorge su palafitte sopra acqua scura, fra insetti, lanterne fumose e barche basse legate a pali viscidi.",
    innkeeper: "Distingue il passo di un barcaiolo sobrio da quello di chi ha respirato miasmi troppo a lungo.",
  },
  desert: {
    shop: "Teli chiari, otri rinforzati, veli da sabbia e mappe d'oasi riempiono una bottega dove l'ombra vale quasi quanto l'oro.",
    merchant: "Contratta lentamente, lasciando che il caldo faccia parte del prezzo; rispetta chi porta acqua e diffida di chi parla di fortuna.",
    tavern: "La locanda si raccoglie attorno a un cortile ombreggiato, con anfore sigillate, sabbia sulle soglie e carovanieri che contano animali e scorte.",
    innkeeper: "Prima di offrire vino chiede quanta acqua resta negli otri, perché nel deserto la cortesia senza prudenza uccide.",
  },
  urban: {
    shop: "La bottega vive tra vicoli, sigilli, messaggeri e clienti eleganti; dietro il banco compaiono pergamene di credito, pugnali fini e oggetti che nessuno nomina ad alta voce.",
    merchant: "Sa distinguere un nobile da un impostore e un ladro da un funzionario; in città vende soprattutto accesso, discrezione e dettagli raffinati.",
    tavern: "La locanda sta fra vie sorvegliate e cortili interni, frequentata da notai, guardie, informatori e clienti che preferiscono tavoli non visibili dalla strada.",
    innkeeper: "Conosce stemmi minori, debiti maggiori e il valore di una stanza assegnata lontano dalle orecchie sbagliate.",
  },
  forest: {
    shop: "Resina, muschio e piume asciutte segnano il locale: archi rustici, frecce da caccia, trappole leggere ed erbe curative occupano gli scaffali bassi.",
    merchant: "Parla piano, come se il bosco potesse ascoltare, e vende solo a chi capisce la differenza tra sentiero e territorio proibito.",
    tavern: "La locanda sta sotto alberi alti, con odore di funghi, erbe e legna bagnata; cacciatori e guide siedono sempre con le spalle protette.",
    innkeeper: "Capisce dal fango sugli stivali quanto lontano si sia spinto un ospite tra gli alberi.",
  },
  rural: {
    shop: "Il negozio serve campi, stalle e strade fangose: falcetti, corde di canapa, pane da viaggio e attrezzi da riparazione valgono più di ogni ornamento.",
    merchant: "Conosce raccolti, parentele e debiti meglio dei registri; vende cose semplici, ma sa quali famiglie possono permettersi di aspettare.",
    tavern: "La locanda occupa una casa bassa vicino al pozzo comune, con odore di pane caldo, legna umida e verdure stufate.",
    innkeeper: "Ricorda chi ha aiutato durante il raccolto e chi è sparito quando servivano braccia.",
  },
  arctic: {
    shop: "Pellicce pesanti, lanterne a grasso, ramponi da ghiaccio e mappe della tundra riempiono una stanza dove ogni fiamma viene protetta.",
    merchant: "Misura i clienti da come chiudono il mantello e da quanto rispettano il gelo.",
    tavern: "La locanda tiene il vento fuori con porte doppie, pelli spesse e brodi bollenti serviti prima delle domande.",
    innkeeper: "Sa chi sta tremando per il freddo e chi per qualcosa visto nella neve.",
  },
  underdark: {
    shop: "Pietra fredda, funghi essiccati, corde scure e lanterne schermate rendono la bottega adatta a gallerie dove la luce è un rischio.",
    merchant: "Parla di polvere, eco e tunnel come altri parlano del tempo.",
    tavern: "La locanda risuona di gocce lontane, passi su pietra e funghi pallidi che illuminano la sala senza calore.",
    innkeeper: "Ascolta le pareti quanto ascolta i clienti, perché sotto terra le bugie rimbalzano male.",
  },
  ruins: {
    shop: "Pennelli da scavo, gesso da marcatura, contenitori imbottiti e mappe frammentarie coprono tavoli segnati da polvere antica.",
    merchant: "Distingue un reperto da una trappola e non tocca mai una chiave incompleta senza guanti.",
    tavern: "La locanda si appoggia a mura spezzate e colonne antiche, frequentata da studiosi, predoni e guide con mappe incomplete.",
    innkeeper: "Sa quali ospiti cercano storia e quali cercano solo qualcosa da rivendere.",
  },
  frontier: {
    shop: "Tende robuste, acciarini, paletti da campo e coltelli pesanti occupano una bottega pronta a fango, banditi e notti senza riparo.",
    merchant: "Vende oggetti che si riparano con mani sporche e poca luce, perché in frontiera l'eleganza dura meno della pioggia.",
    tavern: "La locanda sembra un avamposto: palizzata vicina, stivali infangati, lanterne schermate e tavoli abbastanza robusti da reggere una rissa.",
    innkeeper: "Tiene d'occhio porte, finestre e scorte come un comandante stanco.",
  },
};

function getWrittenCandidates(context, type) {
  const regionId = context.regionId || fallbackRegionId;
  const band = getLevelBand(context.level);
  const templates =
    writtenNarratives[regionId]?.[type]?.[band] ||
    writtenNarratives[aliases[regionId]]?.[type]?.[band] ||
    writtenNarratives[fallbackRegionId][type][band];

  const anchor = regionNarrativeAnchors[regionId]?.[type] || "";

  return templates.flatMap((template) =>
    writtenClosers[type].map(
      (closer) => `${anchor ? `${anchor} ` : ""}${renderWrittenNarrative(template, context)} ${closer}`
    )
  );
}

// eslint-disable-next-line no-unused-vars
function buildShopCandidates(context) {
  const region = profile(context.regionId);
  const band = bandProfiles[getLevelBand(context.level)].shop;

  return region.shopPlaces.flatMap((place, index) =>
    band.map((tone) => {
      const sense = region.shopSenses[index % region.shopSenses.length];
      const goods = region.shopGoods[(index + 2) % region.shopGoods.length];

      return `${context.shopName} si trova ${place}. Dentro si sentono ${sense}; sugli scaffali compaiono ${goods}. ${tone} La reputazione ${String(context.reputationLabel || "sconosciuta").toLowerCase()} si legge nel modo in cui il personale controlla richieste, pagamenti e promesse.`;
    })
  );
}

// eslint-disable-next-line no-unused-vars
function buildMerchantCandidates(context) {
  const region = profile(context.regionId);
  const band = bandProfiles[getLevelBand(context.level)].merchant;

  return region.merchantBehaviors.flatMap((behavior, index) =>
    band.map((tone) => {
      const hook = region.shopGoods[index % region.shopGoods.length];
      const alignment = context.alignmentHint || context.alignmentLabel || "una morale difficile da leggere";

      return `${context.name} è un ${String(context.race || "mercante").toLowerCase()} ${String(context.personality || "attento").toLowerCase()}: ${behavior}. ${tone} Tiene d'occhio soprattutto ${hook}, e il suo modo di trattare lascia intuire ${String(alignment).toLowerCase()}.`;
    })
  );
}

// eslint-disable-next-line no-unused-vars
function buildTavernCandidates(context) {
  const region = profile(context.regionId);
  const band = bandProfiles[getLevelBand(context.level)].tavern;

  return region.tavernPlaces.flatMap((place, index) =>
    band.map((tone) => {
      const sense = region.tavernSenses[index % region.tavernSenses.length];

      return `${context.tavernName} ${place}. ${sense}. ${tone}`;
    })
  );
}

// eslint-disable-next-line no-unused-vars
function buildInnkeeperCandidates(context) {
  const region = profile(context.regionId);
  const band = bandProfiles[getLevelBand(context.level)].innkeeper;

  return region.innkeeperHabits.flatMap((habit, index) =>
    band.map((tone) => {
      const tell = region.innkeeperTells[index % region.innkeeperTells.length];

      return `${context.name} è un ${String(context.race || "locandiere").toLowerCase()} ${String(context.personality || "prudente")}. ${habit}; ${tell}. ${tone}`;
    })
  );
}

export function countNarrativeOptions(regionId, type, level = 1) {
  return getWrittenCandidates({ regionId, level }, type).length;
}

export function buildRegionalMerchantNarrative(context) {
  const regionId = context.regionId || fallbackRegionId;
  return pickNarrativeFromPacks("merchant", {
    regionId,
    level: context.level,
    usedTexts: context.usedTexts,
    context,
  }) || pickUniqueText(regionId, "merchant", getWrittenCandidates(context, "merchant"));
}

export function buildRegionalShopNarrative(context) {
  const regionId = context.regionId || fallbackRegionId;
  return pickNarrativeFromPacks("shop", {
    regionId,
    level: context.level,
    usedTexts: context.usedTexts,
    context,
  }) || pickUniqueText(regionId, "shop", getWrittenCandidates(context, "shop"));
}

export function buildRegionalTavernNarrative(context) {
  const regionId = context.regionId || fallbackRegionId;
  return pickNarrativeFromPacks("tavern", {
    regionId,
    level: context.level,
    usedTexts: context.usedTexts,
    context,
  }) || pickUniqueText(regionId, "tavern", getWrittenCandidates(context, "tavern"));
}

export function buildRegionalInnkeeperNarrative(context) {
  const regionId = context.regionId || fallbackRegionId;
  return pickNarrativeFromPacks("innkeeper", {
    regionId,
    level: context.level,
    usedTexts: context.usedTexts,
    context,
  }) || pickUniqueText(regionId, "innkeeper", getWrittenCandidates(context, "innkeeper"));
}
