const levelBands = {
  1: { band: "low", power: "locale", stakes: "un problema di strada, una consegna mancata o un favore fra vicini", quality: "materiali semplici, prezzi bassi e soluzioni immediate" },
  2: { band: "low", power: "di borgata", stakes: "debiti piccoli, piste fangose e minacce che fanno paura più per vicinanza che per grandezza", quality: "merce riparata bene, cibo caldo e consigli pratici" },
  3: { band: "low", power: "da primi incarichi", stakes: "scorte da proteggere, animali spariti e voci che girano prima del tramonto", quality: "attrezzatura onesta, usata da chi vive la zona ogni giorno" },
  4: { band: "low", power: "di confine locale", stakes: "rivalità fra famiglie, sentieri chiusi e persone che non vogliono chiamare la guardia", quality: "pezzi robusti, qualche oggetto scelto e una rete di conoscenze vicine" },
  5: { band: "mid", power: "regionale", stakes: "contratti più seri, fornitori lontani e nomi che iniziano a pesare", quality: "merce selezionata, stanze migliori e discrezione pagata bene" },
  6: { band: "mid", power: "da compagnia esperta", stakes: "favori fra guide, doganieri, artigiani e piccoli funzionari", quality: "scorte affidabili, contatti utili e qualche pezzo non comune" },
  7: { band: "mid", power: "da rotte frequentate", stakes: "notizie vendibili, debiti importanti e incarichi che superano il quartiere", quality: "qualità riconoscibile senza lusso sfacciato" },
  8: { band: "mid", power: "da reputazione consolidata", stakes: "un segreto gestibile, una scorta delicata o una trattativa da non rendere pubblica", quality: "personale competente, magazzini ordinati e clienti ricorrenti" },
  9: { band: "mid", power: "da contatti selezionati", stakes: "accordi fra gilde minori, passaggi sicuri e merci che non arrivano per caso", quality: "attrezzatura migliore, prezzi più alti e memoria lunga" },
  10: { band: "mid", power: "da fama regionale", stakes: "favori che coinvolgono più insediamenti e persone attente a non comparire nei registri", quality: "scelte curate, accessi discreti e un paio di opportunità rare" },
  11: { band: "high", power: "influente", stakes: "emissari, capitani e nobili minori che pagano per essere ricevuti senza pubblico", quality: "protezioni serie, porte riservate e merci difficili da reperire" },
  12: { band: "high", power: "da intrigo aperto", stakes: "accordi politici, reliquie contese e minacce che cambiano equilibri locali", quality: "servizio preciso, oggetti rari e silenzi comprati a caro prezzo" },
  13: { band: "high", power: "da rete potente", stakes: "messaggi cifrati, contratti pericolosi e clienti che viaggiano con scorta", quality: "magazzini protetti, personale addestrato e contatti fuori città" },
  14: { band: "high", power: "da compagnie note", stakes: "debiti di gilda, ricatti nobiliari e spedizioni con conseguenze politiche", quality: "merci rare, stanze sorvegliate e prezzi che includono il rischio" },
  15: { band: "high", power: "da potere regionale", stakes: "decisioni prese lontano dagli occhi pubblici e oggetti che attirano persone sbagliate", quality: "discrezione professionale, sicurezza visibile solo a chi sa guardare" },
  16: { band: "high", power: "da influenza alta", stakes: "alleanze fragili, contratti vincolanti e missioni che possono cambiare una provincia", quality: "eccellenza senza ostentazione e accesso a fornitori rarissimi" },
  17: { band: "legendary", power: "leggendario", stakes: "reliquie, casate, rotte proibite e favori che possono pesare su un regno", quality: "oggetti eccezionali nascosti dietro normalità credibile" },
  18: { band: "legendary", power: "quasi mitico", stakes: "patti antichi, ambasciatori mascherati e nomi che molti fingono di non conoscere", quality: "accesso, memoria e protezione più preziosi dell'oro" },
  19: { band: "legendary", power: "da soglia epica", stakes: "accordi tra poteri lontani, segreti sepolti e promesse che sopravvivono alle dinastie", quality: "preparazione per imprese che la gente comune chiamerebbe follia" },
  20: { band: "legendary", power: "da fine campagna", stakes: "destini di città, flotte, clan o antichi giuramenti che tornano a chiedere conto", quality: "risorse rarissime, stanze impossibili da ottenere e oggetti con una storia propria" },
};

const biomeData = {
  coastal: {
    label: "porto",
    places: ["una strada umida che scende ai moli", "un portico macchiato di sale", "il retro di un magazzino navale", "una banchina secondaria battuta dal vento", "un vicolo dove asciugano reti e vele", "una piazzetta di doganieri stanchi", "l'ombra di un faro basso", "un ponte di legno che geme a ogni marea", "un deposito con porte gonfie d'acqua", "un canale dove passano barche silenziose"],
    textures: ["sale incrostato", "catrame caldo", "corde cerate", "barili umidi", "gabbiani invadenti", "mappe nautiche macchiate", "lanterne da molo", "conchiglie numerate", "pioggia sottile", "legno impregnato"],
    goods: ["bussole ammaccate, corde cerate e coltelli da bordo", "reti rinforzate, arpioni leggeri e lanterne schermate", "mappe nautiche incomplete e otri impermeabili", "mantelli cerati, stivali da ponte e ami d'argento", "barili sigillati, spezie portuali e attrezzi da vela", "tridenti semplici, remi corti e coltelli da marinaio", "fiale contro la nausea, nodi campione e piccoli amuleti da tempesta", "casse da stiva, secchi di pece e guanti da fune", "corde catramate, uncini da carico e coperture impermeabili", "carte di correnti, pietre di zavorra incise e chiavi di cabina"],
    clients: ["marinai appena sbarcati", "capitani con debiti", "pescatori rumorosi", "contrabbandieri eleganti", "doganieri in ritardo", "cartografi salmastri", "mozzi infreddoliti", "mercanti stranieri", "barcaioli superstiziosi", "guardie portuali"],
    secrets: ["una nave segnata sui registri come affondata", "un carico senza proprietario", "una rotta che appare solo con la bassa marea", "un nome cancellato dalle carte nautiche", "una cassa che nessuno vuole aprire sul molo", "un debito con la dogana", "un fanale che lampeggia nel momento sbagliato", "un capitano che non invecchia", "una chiave di cabina arrivata senza nave", "un messaggio cucito dentro una vela"],
  },
  mountain: {
    label: "montagna",
    places: ["una curva della strada del valico", "una parete di roccia tagliata dal vento", "il ricovero delle guide", "un cortile di pietra pieno di scarponi", "una terrazza che guarda i passi alti", "un tunnel scavato nella neve vecchia", "la base di una torre da segnalazione", "un borgo di minatori e muli", "una scalinata consumata dal ghiaccio", "un riparo sotto tetti appesantiti dalla neve"],
    textures: ["lana bagnata", "ferro freddo", "resina bruciata", "neve sciolta", "pietra umida", "scarponi chiodati", "fumo di pino", "mantelli pesanti", "chiodi da roccia", "mappe dei valichi"],
    goods: ["ramponi, corde da parete e piccozze", "mantelli foderati, lanterne antivento e chiodi da roccia", "mappe dei passi, guanti rinforzati e borracce robuste", "martelli da minatore, ganci da parete e coperte di lana", "amuleti contro le slavine e corde benedette", "scarponi ferrati, ferri di ricambio e razioni secche", "lampade schermate, picchetti rossi e guaine per lame", "pelli conciate, scaldamani di pietra e arpioni da ghiaccio", "utensili da cava, maschere contro polvere e funi segnate", "bastoni da sentiero, compassi da cresta e cunei di ferro"],
    clients: ["guide del passo", "minatori taciturni", "carovane lente", "cacciatori di capre selvatiche", "messaggeri infreddoliti", "clan montani", "cercatori di reliquie", "pellegrini del picco", "tagliapietre", "soldati di guarnigione"],
    secrets: ["un sentiero chiuso troppo presto", "una valanga che non ha seguito il vento", "un passo segnato con inchiostro rosso", "una miniera che respira aria calda", "una guida tornata senza ombra", "un altare sotto la neve", "un carico perso fra due creste", "un vecchio patto con gli spiriti della cima", "una campana che suona durante le tempeste", "una mappa cucita dentro una pelliccia"],
  },
  city: {
    label: "grande città",
    places: ["un vicolo dietro il mercato alto", "un portico fra notai e cambiavalute", "una via laterale sorvegliata da guardie annoiate", "un cortile con targhe di bronzo", "il piano terra di una casa stretta", "una galleria coperta da insegne eleganti", "un incrocio dove passano carrozze e fattorini", "una scala che scende sotto botteghe rispettabili", "un quartiere di copisti, debitori e messaggeri", "una piazza dove le gilde litigano sottovoce"],
    textures: ["cera lacca", "inchiostro fresco", "metallo lucidato", "velluto consumato", "carta asciutta", "campanelli da banco", "profumo costoso", "selciato bagnato", "registri ordinati", "ombre dietro tende pesanti"],
    goods: ["sigilli, pugnali sottili e mappe urbane", "abiti rinforzati, fiale discrete e chiavi grezze", "pergamene di credito, borse antitaglio e lenti da perito", "contratti in bianco, guanti da ladro e anelli con scomparto", "strumenti da calligrafo, profumi costosi e documenti cerati", "lame eleganti, astucci cifrati e inchiostri rari", "maschere da ricevimento, spille di gilda e piccoli talismani legali", "cordini da messaggero, cappucci sobri e serrature campione", "scatole piombate, candele da archivio e polveri rivelatrici", "gioielli discreti, medaglioni vuoti e mappe dei quartieri proibiti"],
    clients: ["notai frettolosi", "apprendisti di gilda", "guardie fuori servizio", "nobili minori", "informatori vestiti male", "messaggeri sudati", "artigiani ricchi", "ladri troppo eleganti", "funzionari prudenti", "duellanti in guanti puliti"],
    secrets: ["una lettera sigillata con cera falsa", "un processo che nessuno vuole nominare", "una gilda pronta a cambiare alleanza", "un debito comprato tre volte", "un balcone da cui si sente troppo", "un registro scomparso", "una chiave che apre una porta pubblica solo di notte", "un nome nobile scritto con grafia sbagliata", "un contratto valido in due tribunali", "una mappa dei sotterranei cittadini"],
  },
  rural: {
    label: "villaggio rurale",
    places: ["la strada battuta vicino al pozzo comune", "un cortile fra stalla e granaio", "una casa bassa con travi scure", "il bordo dei campi appena arati", "una piazza dove tutti conoscono tutti", "una tettoia accanto al maniscalco", "un fienile trasformato in sala comune", "una curva della via dei carri", "il retro della cappella e del forno", "un guado basso dove si fermano i muli"],
    textures: ["legna umida", "pane caldo", "fieno secco", "fango sugli stivali", "farina nell'aria", "ferro da maniscalco", "lanterne da stalla", "lana grezza", "vino leggero", "terra bagnata"],
    goods: ["corde di canapa, falcetti e lanterne da stalla", "pane da viaggio, formaggio stagionato e coltelli da lavoro", "attrezzi da riparazione, coperte grezze e bastoni da cammino", "erbe di campo, aghi robusti e fiasche di vino leggero", "campanacci, sacchi di farina e ferri di ricambio", "mantelli ruvidi, cordame e utensili da carretto", "semi rari, barattoli di miele e scarpe rinforzate", "staffe, cinghie di cuoio e secchi cerati", "pale, zappe corte e chiodi da fienile", "sacche da raccolto, pietre focaie e corde da pozzo"],
    clients: ["contadini diffidenti", "carrettieri stanchi", "mugnai influenti", "famiglie rivali", "pastori taciturni", "bambini mandati a comprare sale", "vecchie del villaggio", "guardie di passaggio", "pellegrini polverosi", "maniscalchi"],
    secrets: ["una campana che suona da sola", "un raccolto cresciuto troppo in fretta", "una famiglia che non apre più la porta", "un campo dove gli animali non entrano", "un pozzo coperto con assi nuove", "una cantina più grande della casa", "un debito tra due casati rurali", "una luce nei campi dopo mezzanotte", "una promessa incisa sotto il banco", "una chiave nascosta nel fienile"],
  },
  forest: {
    label: "foresta",
    places: ["il margine di un sentiero coperto di aghi", "una radura piena di ceppi e fumo dolce", "una casa di legno scuro sotto rami bassi", "una tettoia invasa dall'odore di resina", "il deposito dei cacciatori", "un ponte di radici sopra un ruscello", "una capanna con campanelli d'osso", "la soglia di un bosco che sembra ascoltare", "un vecchio tronco svuotato e rinforzato", "una radura dove i carri non restano dopo il tramonto"],
    textures: ["muschio", "resina", "cera d'api", "piume asciutte", "funghi scuri", "foglie bagnate", "pelli conciate", "erbe pestate", "fumo dolce", "corteccia fresca"],
    goods: ["archi corti, frecce da caccia e trappole leggere", "erbe curative, mantelli mimetici e coltelli da scuoiatura", "corde vegetali, fischietti da richiamo e miele selvatico", "mappe dei sentieri, bacche secche e torce resinose", "amuleti druidici minori, stivali morbidi e unguenti contro spine", "lacci da caccia, reti leggere e borracce di corteccia", "frecce silenziose, ganci da albero e aghi d'osso", "pelli impermeabilizzate, sacche verdi e coltelli a lama larga", "polveri per impronte, campanelli da trappola e corde intrecciate", "semi rari, funghi secchi e bastoni da sentiero"],
    clients: ["cacciatori", "taglialegna", "druidi riservati", "guide silenziose", "raccoglitori di erbe", "pellegrini del bosco", "bracconieri pentiti", "messaggeri sporchi di foglie", "guardaboschi", "viandanti che hanno perso la strada"],
    secrets: ["luci tra gli alberi", "una radura che cambia posto", "un branco che evita il sentiero", "frecce trovate spezzate", "un albero con nomi incisi al contrario", "un cacciatore tornato senza voce", "un patto con qualcosa nel sottobosco", "una pista che compare solo dopo la pioggia", "un nido troppo grande", "una radice che sanguina resina nera"],
  },
  desert: {
    label: "deserto",
    places: ["un cortile ombreggiato da teli color ocra", "il bordo della pista carovaniera", "una casa fresca vicino al pozzo", "una tenda bassa tirata contro la sabbia", "una strada bianca dove l'aria trema", "un portico di pietra chiara", "un bazar di stuoie e anfore sigillate", "la soglia di un caravanserraglio", "un muro che trattiene l'ombra più del vento", "un deposito di selle e otri"],
    textures: ["sabbia sottile", "datteri", "cuoio secco", "spezie calde", "acqua versata piano", "tela cerata", "incenso leggero", "sale minerale", "ottone caldo", "polvere sulle mappe"],
    goods: ["otri rinforzati, veli da sabbia e mappe delle oasi", "bussole solari, razioni essiccate e tende leggere", "spezie da carovana, sandali rinforzati e amuleti contro il caldo", "sale minerale, datteri conservati e lame curve semplici", "occhiali di vetro fumé, sciarpe cerate e filtri d'acqua", "corde da carovana, picchetti da tenda e pietre d'orientamento", "balsami contro il sole, brocche sigillate e coltelli da sella", "sacche per granelli di sabbia magica, astucci impermeabili e mantelli leggeri", "lampade schermate, stoffe color sabbia e aghi da tenda", "mappe con piste cancellate, otri doppi e ciondoli da miraggio"],
    clients: ["carovanieri", "portatori d'acqua", "mercanti di spezie", "nomadi diffidenti", "guardie di pozzo", "cartografi bruciati dal sole", "pellegrini delle dune", "soldati in cerca d'ombra", "cammellieri", "cacciatori di miraggi"],
    secrets: ["un'oasi che non compare sempre", "una carovana persa con il cielo sereno", "un miraggio che risponde alle domande", "un pozzo sigillato da tre famiglie", "una mappa disegnata sulla pelle", "una tempesta con voci umane", "una moneta trovata sotto la sabbia antica", "un patto fatto all'ombra sbagliata", "un animale che torna senza padrone", "una stella che indica la strada solo ai colpevoli"],
  },
  swamp: {
    label: "palude",
    places: ["una passerella bassa sopra acqua scura", "un gruppo di palafitte che scricchiolano", "il margine di un canneto fitto", "una piattaforma di legno umido", "una baracca legata a pali storti", "un approdo per barche piatte", "un sentiero di assi mezzo sommerso", "una curva del fiume lento", "un pontile coperto di alghe", "una casa con lanterne fumose"],
    textures: ["fango nero", "erbe amare", "insetti insistenti", "torce fumogene", "corda catramata", "acqua ferma", "legno gonfio", "miasmi dolciastri", "barattoli scuri", "zanzariere rattoppate"],
    goods: ["stivali cerati, antitossine minori e bastoni da fango", "erbe amare, zanzariere e torce fumogene", "barche pieghevoli, repellenti per insetti e sacche impermeabili", "filtri d'acqua, ami da anguilla e maschere contro miasmi", "mantelli impermeabili, coltelli da canneto e corde catramate", "fiale sigillate, barattoli di sanguisughe e lanterne basse", "pali da sondaggio, polveri assorbenti e guanti cerati", "sale nero, amuleti contro febbri e mappe di canali", "reti da canneto, scarpe da fango e casse galleggianti", "balsami contro punture, aghi da sutura e fiasche d'aceto forte"],
    clients: ["barcaioli", "raccoglitori di erbe", "cacciatori di rane giganti", "guaritori sospetti", "pescatori di anguilla", "messaggeri su barca piatta", "guardie con febbre", "contrabbandieri infangati", "vecchie levatrici", "avventurieri che sottovalutano le zanzare"],
    secrets: ["una barca tornata vuota", "un canale che non era sulla mappa", "una febbre che parla nel sonno", "un corpo visto camminare tra le canne", "una luce verde sotto l'acqua", "una cura che costa più della malattia", "un patto con una strega di fango", "un ponte che affonda solo per certi nomi", "un barattolo che non deve essere aperto", "una campana sommersa"],
  },
  ruins: {
    label: "rovine antiche",
    places: ["un accampamento tra colonne spezzate", "la base di un arco crollato", "una sala antica coperta da un tetto nuovo", "il bordo di una strada lastricata sepolta", "una tenda fissata a statue senza volto", "un cortile invaso da erbacce e iscrizioni", "una scalinata che scende nel buio", "un muro vecchio più della città vicina", "una piazza di pietra rotta", "un portico dove gli studiosi non restano mai soli"],
    textures: ["polvere antica", "gesso da marcatura", "pergamene cerate", "pietra fredda", "muschio tra le rune", "torce lente", "scalpelli fini", "vetro incrinato", "mappe frammentarie", "guanti da reperto"],
    goods: ["pennelli da scavo, scalpelli fini e torce lente", "gesso da marcatura, lenti archeologiche e guanti da reperto", "contenitori imbottiti, mappe frammentarie e corde leggere", "chiavi antiche incomplete, bastoni da esploratore e kit da disinnesco", "lanterne a luce bassa, specchi piccoli e pergamene da rilievo", "sacche per reperti, pioli di bronzo e inchiostro resistente", "maschere antipolvere, cunei morbidi e nastri di misurazione", "astucci per tavolette, amuleti spezzati e carboncini sottili", "fiale per campioni, martelletti cauti e corde segnate", "copie di iscrizioni, coperte imbottite e strumenti da rilievo"],
    clients: ["studiosi", "predoni di tombe", "guardie di spedizione", "cartografi nervosi", "sacerdoti curiosi", "mercanti di reperti", "avventurieri con mappe false", "scribi pieni di polvere", "nobili collezionisti", "guide che non entrano dopo il tramonto"],
    secrets: ["una porta murata da dentro", "un'iscrizione che cambia lingua", "una statua con mani nuove", "un passaggio segnato da sangue vecchio", "una mappa copiata al contrario", "un reperto che torna al suo posto", "un nome inciso sotto la polvere", "un sigillo rotto senza rumore", "una stanza che non esisteva ieri", "un altare che rifiuta la luce"],
  },
  underdark: {
    label: "sottosuolo",
    places: ["una galleria illuminata da funghi pallidi", "una sala scavata nella pietra nera", "il margine di un mercato sotterraneo", "un ponte di roccia sopra un vuoto umido", "una caverna con tende pesanti", "un incrocio di cunicoli segnato a gesso", "una nicchia scaldata da bracieri bassi", "un corridoio dove l'eco arriva in ritardo", "una miniera abbandonata riaperta", "un ingresso nascosto dietro pietre impilate"],
    textures: ["funghi essiccati", "sali minerali", "lanterne schermate", "corde scure", "polvere di roccia", "gesso luminoso", "aria umida", "martelli lontani", "metallo opaco", "eco profonde"],
    goods: ["lanterne schermate, gesso luminoso e corde scure", "picconi corti, filtri per polveri e mappe di gallerie", "occhiali da minatore, sacche antiumidità e fiale fosforescenti", "chiodi da caverna, coltelli da tunnel e amuleti di pietra", "funghi essiccati, bussole minerali e maschere filtranti", "martelli da roccia, cunei di basalto e lampade a olio spesso", "sali minerali, contenitori sigillati e corde senza riflessi", "segnali di gesso, protezioni per ginocchia e uncini da parete", "fischietti muti, specchi angolati e sacche da campione", "bracciali di pietra, mappe incompiute e polvere luminescente"],
    clients: ["minatori", "esploratori di cunicoli", "messaggeri sotterranei", "mercanti drow prudenti", "cercatori di funghi", "guardie di carovana profonda", "artigiani della pietra", "fuggitivi senza sole", "scribi di gilda mineraria", "cultisti troppo silenziosi"],
    secrets: ["un tunnel che respira", "un fungo che ripete voci morte", "una vena minerale che pulsa", "un pozzo senza fondo con luce sul fondo", "una mappa pagata tre volte", "un passaggio vietato dalle gilde", "una creatura che imita i colpi di martello", "un mercato che cambia caverna", "una porta di pietra calda", "un patto scritto con polvere d'argento"],
  },
  arctic: {
    label: "artico",
    places: ["un rifugio mezzo sepolto dalla neve", "una strada di ghiaccio fra case basse", "un avamposto con finestre piccole", "il bordo di una pista per slitte", "una sala chiusa da pelli pesanti", "un deposito di grasso da lanterna", "una palizzata coperta di brina", "un molo congelato su acqua scura", "un passo bianco dove il vento cancella le orme", "una casa di pietra con il camino sempre acceso"],
    textures: ["pellicce pesanti", "grasso da lanterna", "ramponi da ghiaccio", "neve secca", "fiato condensato", "pelli inchiodate", "ossa levigate", "lanterne basse", "vento tagliente", "sale di ghiaccio"],
    goods: ["pellicce pesanti, ramponi e lanterne a grasso", "occhiali da neve, guanti foderati e razioni grasse", "tende da gelo, pietre scalda-mani e coltelli d'osso", "corde da ghiaccio, fischietti da tempesta e amuleti contro il gelo", "arpioni da ghiaccio, coperte termiche e mappe della tundra", "stivali foderati, ganci da slitta e fiasche isolate", "sego per lanterne, maschere contro il vento e corde rigide", "pelli cerimoniali, punte d'osso e coperture da bufera", "bastoni da neve, aghi da pelliccia e oli antigelo", "bussole aurorali, sacche di sale e graffe per ghiaccio"],
    clients: ["cacciatori del nord", "conduttori di slitte", "pellegrini della brina", "guardie infreddolite", "sciamani coperti di pelli", "cartografi delle aurore", "cercatori di reliquie congelate", "pescatori del ghiaccio", "messaggeri con ciglia bianche", "soldati di frontiera gelida"],
    secrets: ["un'aurora che mostra volti", "una pista cancellata senza vento", "una creatura sotto il ghiaccio", "un rifugio trovato caldo ma vuoto", "un corno udito durante le bufere", "una mappa incisa su osso", "un cadavere che non congela", "un fuoco acceso con neve blu", "una promessa fatta a uno spirito del gelo", "una porta coperta da brina dall'interno"],
  },
  frontier: {
    label: "frontiera selvaggia",
    places: ["una palizzata appena rinforzata", "un crocevia di fango e carri", "il margine di un campo trincerato", "una strada dove finisce la legge comoda", "un deposito di tende e ruote rotte", "una torretta che guarda bosco e pianura", "un guado sorvegliato da uomini stanchi", "una fila di baracche riparate in fretta", "un cortile pieno di asce e zaini", "una soglia dove ogni cavallo viene contato"],
    textures: ["fango secco", "cuoio cerato", "fumo di campo", "ferro riparato", "legno fresco di palizzata", "razioni dure", "acciaio scheggiato", "coperte cerate", "polvere di strada", "pioggia sulle tende"],
    goods: ["tende robuste, acciarini e trappole da campo", "corde lunghe, asce da campo e coperte cerate", "razioni dure, coltelli pesanti e mappe incomplete", "fischietti d'allarme, paletti da campo e kit rustici di pronto soccorso", "borracce ampie, lanterne schermate e stivali rinforzati", "scuri da lavoro, chiodi lunghi e cinghie di ricambio", "sacche impermeabili, picchetti e pezzi di armatura riparati", "uncini, corde segnate e martelli da palizzata", "carte dei sentieri, torce resinose e ferri da cavallo", "coperte militari, fiasche dure e coltelli da sopravvivenza"],
    clients: ["pionieri", "scorte armate", "taglialegna armati", "famiglie in viaggio", "esploratori senza mandato", "soldati di presidio", "cacciatori di taglie", "carrettieri nervosi", "artigiani da campo", "avventurieri che cercano lavoro sporco"],
    secrets: ["un palo di confine spostato", "una pattuglia che non torna", "un carro arrivato senza conducente", "una bestia che evita il fuoco", "una mappa venduta anche al nemico", "un accordo con briganti locali", "una miniera trovata e subito taciuta", "un forte abbandonato che fuma ancora", "una famiglia nascosta sotto falso nome", "un sentiero aperto da qualcuno nella notte"],
  },
  generic: {
    label: "crocevia",
    places: ["un crocevia frequentato", "una via di passaggio", "un edificio basso vicino al mercato", "un cortile dove arrivano carri", "una strada con locande e botteghe miste", "un quartiere di viandanti", "una piazza consumata da passi", "un portico pieno di voci", "una soglia fra città e strada", "un tratto di strada dove tutti rallentano"],
    textures: ["legno consumato", "cera calda", "cuoio pulito", "pane scuro", "lanterne basse", "monete contate", "polvere di viaggio", "birra semplice", "pergamena piegata", "ferri riparati"],
    goods: ["corde, lanterne e lame comuni", "mappe piegate, provviste e utensili da viaggio", "borse cerate, candele spesse e piccoli talismani", "ferri riparati, coltelli e contenitori sigillati", "scorte miste e oggetti recuperati da vecchie compagnie", "mantelli comuni, sacche, acciarini e fiasche", "arnesi da campo, ganci e bende pulite", "coperte, pioli, torce e corde di ricambio", "astucci semplici, fiale vuote e cinghie di cuoio", "oggetti pratici per chi non sa ancora dove andrà"],
    clients: ["viandanti", "pellegrini", "guardie stanche", "mercanti minori", "messaggeri", "carrettieri", "avventurieri alle prime armi", "artigiani itineranti", "contadini in viaggio", "ospiti che non vogliono restare"],
    secrets: ["una promessa non mantenuta", "una strada chiusa senza spiegazione", "un debito scritto due volte", "una chiave senza porta", "una lettera senza mittente", "un mercante scomparso", "un segnale inciso sul banco", "una mappa che non torna", "un cliente che paga troppo", "un oggetto lasciato indietro apposta"],
  },
};

const typeTemplates = {
  shop: [
    ({ d, level }) => `Tra ${d.places[0]} e il via vai dei ${d.clients[0]}, la bottega espone ${d.goods[0]}. ${d.textures[0]} e ${d.textures[1]} dominano l'aria; al livello ${level}, il proprietario tratta ormai affari di tono ${levelBands[level].power}, ma tiene tutto abbastanza concreto da sembrare ancora un negozio vero.`,
    ({ d, level }) => `La porta si apre su ${d.places[1]}, dove ${d.textures[2]} e ${d.textures[3]} raccontano subito la zona. Sugli scaffali compaiono ${d.goods[1]}; chi cerca merce più seria viene portato lontano dagli occhi dei ${d.clients[1]}.`,
    ({ d, level }) => `Non è una bottega ordinata per bellezza, ma per sopravvivere a ${d.label}. Dietro il banco stanno ${d.goods[2]}, mentre un odore di ${d.textures[4]} copre appena le discussioni sui prezzi e sui rischi di ${levelBands[level].stakes}.`,
    ({ d, level }) => `Sotto l'insegna consumata vicino a ${d.places[2]}, ogni cassa ha un segno inciso a mano. Ci sono ${d.goods[3]}, scelti per clienti come ${d.clients[2]}; la qualità parla di ${levelBands[level].quality}.`,
    ({ d, level }) => `Il negozio sembra piccolo finché non si notano gli scaffali laterali e le casse coperte da tela. Fra ${d.textures[5]} e ${d.textures[6]}, il mercante conserva ${d.goods[4]} per chi conosce la zona e non spreca domande.`,
    ({ d, level }) => `La bottega occupa ${d.places[3]} e non prova a nascondere la propria funzione: servire chi deve partire, tornare o evitare guai. In bella vista ci sono ${d.goods[5]}, mentre sul retro si parla di ${d.secrets[0]}.`,
    ({ d, level }) => `A prima vista si vedono solo banco, polvere e ${d.textures[7]}; poi l'occhio trova ${d.goods[6]} sistemati con cura. È merce adatta a ${d.clients[3]}, ma il prezzo sale quando la conversazione tocca ${levelBands[level].stakes}.`,
    ({ d, level }) => `La stanza principale guarda ${d.places[4]} e contiene meno oggetti di quanti ne prometta. Il vero assortimento è nelle casse: ${d.goods[7]}, avvolti e numerati per chi può pagare senza attirare attenzione.`,
    ({ d, level }) => `Qui la merce non sembra importata a caso. ${d.goods[8]} stanno accanto a strumenti comuni, e perfino ${d.clients[4]} capiscono che ogni oggetto è stato scelto per i pericoli specifici di ${d.label}.`,
    ({ d, level }) => `Una lanterna bassa illumina ${d.places[5]} e il banco segnato da anni di trattative. Tra ${d.textures[8]} e ${d.textures[9]}, il proprietario mostra ${d.goods[9]} solo quando capisce che il cliente non è venuto per curiosità.`
  ],
  merchant: [
    ({ d, level, c }) => `{name} parla con il ritmo di chi conosce ${d.label} meglio delle mappe. Con ${d.clients[0]} è diretto, con gli stranieri prudente; vende consigli solo quando valgono più di ${d.goods[0].split(',')[0]}.`,
    ({ d, level, c }) => `{name} non si lascia incantare dalle armi lucide né dalle promesse solenni. Guarda mani, scarpe e fretta, poi decide se offrire merce comune o tirare fuori qualcosa adatto a ${levelBands[level].stakes}.`,
    ({ d, level, c }) => `Chi tratta con {name} capisce presto che il prezzo non è mai solo oro. A volte chiede notizie su ${d.secrets[1]}, altre volte uno sconto nasce da un favore che tornerà utile quando ${d.label} diventerà pericoloso.`,
    ({ d, level, c }) => `{name} tiene il sorriso per i clienti abituali e la pazienza per quelli armati. Conosce ${d.clients[1]}, diffida di ${d.clients[2]} e non promette mai una consegna che non possa proteggere.`,
    ({ d, level, c }) => `La reputazione di {name} viene da affari conclusi senza clamore. Sa quando mostrare ${d.goods[2].split(',')[0]} e quando parlare invece di ${d.secrets[2]}, perché certe informazioni valgono più di una vendita.`,
    ({ d, level, c }) => `{name} pesa le parole come oggetti fragili. Se l'allineamento del cliente non gli piace, aumenta i prezzi; se riconosce uno scopo utile, può indicare una pista legata a ${d.secrets[3]}.`,
    ({ d, level, c }) => `Davanti a {name}, i clienti imparano a non fingere esperienza. Una domanda sbagliata su ${d.textures[0]} o ${d.goods[3].split(',')[0]} basta per capire chi vivrà una settimana in questa regione e chi no.`,
    ({ d, level, c }) => `{name} conosce fornitori, debitori e bugiardi della zona. Non vende soltanto oggetti: vende il modo corretto di usarli quando ${d.clients[3]} e ${d.secrets[4]} finiscono nella stessa storia.`,
    ({ d, level, c }) => `Con {name} la contrattazione è breve ma mai semplice. Ogni sconto richiede un motivo, ogni favore lascia una traccia, e ogni merce migliore arriva da rapporti costruiti nel tempo fra ${d.places[6]} e ${d.places[7]}.`,
    ({ d, level, c }) => `{name} sembra più calmo di quanto convenga a chi vive di commercio. In realtà conta uscite, testimoni e rischi; quando nomina ${d.secrets[5]}, lo fa solo per capire quanto il cliente sappia davvero.`
  ],
  tavern: [
    ({ d, level }) => `La locanda sorge presso ${d.places[0]}, con ${d.textures[0]} nell'aria e tavoli segnati da clienti come ${d.clients[0]}. Al livello ${level}, non vive di lusso generico: vive di problemi, voci e ripari propri di ${d.label}.`,
    ({ d, level }) => `Dalla porta entra l'odore di ${d.textures[1]}, e dalla sala escono notizie prima ancora dei clienti. Chi siede vicino al banco sente parlare di ${d.secrets[0]}, ma nessuno lo fa abbastanza forte da attirare guai.`,
    ({ d, level }) => `La sala principale occupa ${d.places[1]} e sembra costruita per resistere alla zona più che per piacere ai forestieri. Il cibo è semplice o raffinato secondo la borsa, ma ogni stanza conosce il peso di ${levelBands[level].stakes}.`,
    ({ d, level }) => `Non tutte le locande di ${d.label} sono accoglienti; questa lo è nel modo giusto. Offre riparo da ${d.textures[2]}, tavoli per ${d.clients[1]} e abbastanza discrezione da lasciare fuori le domande peggiori.`,
    ({ d, level }) => `Le pareti portano tracce di ${d.textures[3]} e nomi incisi da chi è ripartito in fretta. Di giorno sembra un posto pratico; di notte le storie su ${d.secrets[1]} cambiano tono vicino al fuoco.`,
    ({ d, level }) => `La locanda guarda ${d.places[2]} senza farne spettacolo. Serve chi arriva sporco, affamato o inseguito, e a questo livello offre ${levelBands[level].quality} senza dimenticare da quale terra viene.`,
    ({ d, level }) => `Il bancone è il vero confine della sala: da una parte ${d.clients[2]}, dall'altra chi sa ascoltare. Tra ${d.textures[4]} e ${d.textures[5]}, ogni brindisi può diventare una pista verso ${d.secrets[2]}.`,
    ({ d, level }) => `Questa locanda non potrebbe esistere altrove. ${d.places[3]} le dà forma, ${d.textures[6]} le dà odore, e i clienti portano dentro le paure specifiche di ${d.label}.`,
    ({ d, level }) => `Le stanze migliori non sono necessariamente le più belle, ma quelle più adatte a non essere disturbati. Quando si parla di ${d.secrets[3]}, perfino ${d.clients[3]} abbassano la voce.`,
    ({ d, level }) => `A prima vista è solo un rifugio fra ${d.places[4]} e la strada. Poi si notano le sedie lasciate libere, i segni dietro il banco e la cura con cui il personale pesa ogni nuovo arrivato.`
  ],
  innkeeper: [
    ({ d, level }) => `{name} conosce il modo in cui ${d.label} cambia le persone. Serve {race} e forestieri con lo stesso sguardo misurato, ma ricorda chi porta fango, sale, polvere o paura sulla soglia.`,
    ({ d, level }) => `{name} non spreca parole quando la sala è piena di ${d.clients[0]}. Sa chi deve essere separato da chi, quale tavolo vede la porta e quale stanza conviene offrire a chi parla di ${d.secrets[0]}.`,
    ({ d, level }) => `Con {name}, l'ospitalità ha regole chiare. Si può ottenere calore, cibo e silenzio; per compassione, protezione o complicità serve invece un motivo migliore del denaro.`,
    ({ d, level }) => `{name} ha imparato a leggere i clienti dal primo gesto: chi guarda le finestre, chi conta le uscite, chi si siede lontano da ${d.clients[1]}. Raramente sbaglia.`,
    ({ d, level }) => `Il registro di {name} contiene camere, debiti e mezze verità. Alcune pagine parlano di ${d.secrets[1]}, ma sono scritte in modo che solo chi deve capire capisca.`,
    ({ d, level }) => `{name} può calmare una rissa con una frase breve o farla scoppiare voltandosi nel momento giusto. Nella sua sala nessuno dimentica davvero dove si trova: ${d.label}.`,
    ({ d, level }) => `Quando {name} ascolta, la conversazione sembra più ordinaria di quanto sia. Dietro il banco conserva contatti, paure e piccole leve adatte a un luogo dove ${levelBands[level].stakes}.`,
    ({ d, level }) => `{name} protegge il locale senza farlo pesare. Offre la sedia giusta, la stanza giusta e, se serve, il silenzio giusto; tutto il resto ha un prezzo che non sempre è in monete.`,
    ({ d, level }) => `Chi sottovaluta {name} di solito lo fa una volta sola. Conosce ${d.clients[2]}, riconosce le bugie dei viaggiatori e tiene sempre una risposta pronta per chi nomina ${d.secrets[2]}.`,
    ({ d, level }) => `{name} sembra appartenere al posto più delle travi e del camino. Sa quando sorridere, quando chiudere la porta e quando lasciare che la notte faccia il resto.`
  ],
};

function normalizeBiome(biome) {
  const aliases = {
    urban: "city",
    generica: "generic",
    porto: "coastal",
    montagna: "mountain",
    foresta: "forest",
    deserto: "desert",
    palude: "swamp",
    artico: "arctic",
    sottosuolo: "underdark",
    rovine: "ruins",
    rurale: "rural",
    frontiera: "frontier",
  };
  const key = String(biome || "generic").trim().toLowerCase();
  return aliases[key] || key;
}

export function createNarrativePack(biome, type) {
  const normalizedBiome = normalizeBiome(biome);
  const d = biomeData[normalizedBiome] || biomeData.generic;
  const templates = typeTemplates[type] || typeTemplates.tavern;
  const pack = {};

  for (let level = 1; level <= 20; level += 1) {
    pack[level] = templates.map((template, index) => {
      const shifted = {
        ...d,
        places: d.places.slice(index).concat(d.places.slice(0, index)),
        textures: d.textures.slice(index).concat(d.textures.slice(0, index)),
        goods: d.goods.slice(index).concat(d.goods.slice(0, index)),
        clients: d.clients.slice(index).concat(d.clients.slice(0, index)),
        secrets: d.secrets.slice(index).concat(d.secrets.slice(0, index)),
      };
      return template({ d: shifted, level, c: levelBands[level] });
    });
  }

  return pack;
}
