"""Banc explícit: 144 preguntes dels PDF i 36 dels PNG. Cada concepte té
explicació, pista i enunciats redactats individualment. No genera variants de text.
Les alternatives reutilitzen les explicacions dels conceptes del mateix grup.
"""
import json
from pathlib import Path

GROUPS=[]
def group(topic,section,page,rows,kind='pdf'):
    cards=[]
    for row in rows.strip().splitlines():
        parts=row.split('|')
        assert len(parts)==(5 if kind=='pdf' else 4),row
        answer,learn,hint,*prompts=parts
        cards.append(dict(answer=answer,learn=learn,hint=hint,prompts=prompts))
    assert len(cards)==4
    GROUPS.append(dict(topic=topic,section=section,page=page,kind=kind,cards=cards))

group('digestiu','transformacio','1','''
La digestió|La digestió transforma els aliments en substàncies nutritives simples que el cos pot aprofitar.|Diferencia transformar els aliments de transportar substàncies pel cos.|Com s’anomena la transformació dels aliments en substàncies nutritives simples?|Has menjat pa. Quin procés permet transformar-lo en nutrients que el cos pot assimilar?
La transformació mecànica|La transformació mecànica tritura i mou els aliments; no és l’acció dels sucs digestius.|Pensa en què fan les dents quan mastegues, sense cap suc digestiu.|Quin tipus de transformació fan les dents quan trituren els aliments?|Talles i tritures un tros de poma amb les dents. Quin canvi dels aliments estàs fent?
La transformació química|La transformació química es produeix per l’acció dels sucs digestius, com la saliva o el suc gàstric.|Fixa’t en si l’acció la fan moviments o líquids digestius.|Quina transformació dels aliments produeixen els sucs digestius?|El suc gàstric actua sobre els aliments. És un exemple de quin tipus de transformació?
El transport dels nutrients per la sang|La sang transporta els nutrients després que hagin estat absorbits; transportar-los no és el mateix que digerir els aliments.|La substància ja ha travessat la paret intestinal. Pensa en el pas següent.|Quina feina permet repartir pel cos els nutrients que ja han passat de l’intestí a la sang?|Un nutrient ja està dins la sang. Quina feina el porta fins a altres parts del cos?
''')
group('digestiu','boca','3–4','''
Les incisives|Les incisives tallen els aliments. No fan la mateixa feina que les canines o els queixals.|Relaciona cada forma de dent amb tallar, esquinçar o triturar.|Quines dents tallen els aliments?|Per fer el primer tall d’un tros de poma, quines dents hi intervenen especialment?
Les canines|Les canines esquincen els aliments. Les incisives tallen i les premolars i molars trituren.|Busca la funció d’esquinçar, no la de moldre el menjar.|Quines dents esquincen els aliments?|Una pregunta demana les dents que esquincen un tros de menjar. Quines has de triar?
Les premolars i les molars|Les premolars i molars trituren i molen els aliments. També es parla dels molars com a queixals.|Pensa en les dents que fan els trossets més petits en mastegar.|Quines dents trituren i molen els aliments?|Ja has tallat un aliment i ara el mastegues per triturar-lo bé. Quines dents fan aquesta feina?
La llengua|La llengua és un múscul que mou els aliments i ajuda a empassar-los. No és una dent.|Diferencia les dents de la part muscular de la boca.|Quina part muscular de la boca mou els aliments i ajuda a empassar?|Mentre mastegues, una part de la boca recol·loca el menjar i l’acompanya per empassar. Quina és?
''')
group('digestiu','tub','2, 5','''
La boca|La boca és l’entrada del tub digestiu: s’hi masteguen els aliments i es barregen amb saliva.|Situa el primer lloc del recorregut, abans de la faringe.|On comença el tub digestiu?|Abans que un aliment passi per la faringe, on entra al tub digestiu?
La faringe|La faringe comunica la boca amb l’esòfag. Hi passen aliments i també aire.|Busca el tram entre la boca i l’esòfag.|Quin tram del tub digestiu va entre la boca i l’esòfag?|Un aliment acaba de sortir de la boca i encara no ha arribat a l’esòfag. Per on passa?
L’esòfag|L’esòfag és el conducte que porta els aliments de la faringe fins a l’estómac, amb moviments de les seves parets.|El destí és l’estómac; busca el conducte que hi arriba.|Quin conducte porta els aliments des de la faringe fins a l’estómac?|Després de travessar la faringe, un aliment avança cap a l’estómac. Quin tub recorre?
L’estómac|L’estómac té forma de bossa, remou els aliments i els barreja amb suc gàstric abans de passar-los a l’intestí prim.|Pensa en la bossa situada després de l’esòfag.|Quin òrgan remou els aliments i els barreja amb suc gàstric?|Un aliment ja ha sortit de l’esòfag i es barreja amb suc gàstric. En quin òrgan és?
''')
group('digestiu','intestins','1, 6','''
L’intestí prim|A l’intestí prim es continua la digestió i els nutrients travessen les parets per passar a la sang.|Busca el lloc d’absorció dels nutrients, no el de sortida dels excrements.|On passen a la sang les substàncies nutritives de la digestió?|Un nutrient ha de travessar la paret del tub digestiu per arribar a la sang. A quin tram ho fa?
L’intestí gros|L’intestí gros és més ample i més curt que el prim. Recupera aigua i condueix les restes cap a l’anus.|Diferencia absorbir nutrients d’aprofitar l’aigua de les restes.|En quin tram s’absorbeix aigua de les restes que no s’han assimilat?|Les restes ja han passat per l’intestí prim. A quin tram continua l’absorció d’aigua abans d’expulsar-les?
L’anus|L’anus és l’obertura final del tub digestiu per on s’expulsen els residus sòlids.|Busca la comunicació final amb l’exterior.|Per on surten els residus sòlids del tub digestiu?|Unes restes han recorregut l’intestí gros. Per quina obertura abandonen el cos?
La sang|La sang rep els nutrients que travessen les parets de l’intestí prim i els reparteix per l’organisme.|Diferencia el lloc d’absorció del medi que després transporta els nutrients.|Què reparteix els nutrients pel cos després que hagin travessat la paret de l’intestí prim?|Un nutrient ja ha estat absorbit a l’intestí prim. Què el transporta fins a la resta del cos?
''')
group('digestiu','glandules','4, 5, 7','''
Les glàndules salivals|Les glàndules salivals fabriquen saliva, que actua a la boca i ajuda a barrejar els aliments.|Relaciona saliva amb el lloc on es mastega.|Quines glàndules produeixen la saliva?|A la boca cal un líquid que humitegi i ajudi a barrejar els aliments. Quines glàndules el fabriquen?
Les glàndules gàstriques|Les glàndules gàstriques són a l’estómac i produeixen suc gàstric.|La paraula gàstric està relacionada amb l’estómac.|Quines glàndules produeixen els sucs que actuen a l’estómac?|Un aliment es barreja amb suc gàstric. Quines glàndules han produït aquest suc?
El fetge|El fetge produeix bilis, que arriba a l’intestí prim. Els aliments no han de passar per dins del fetge.|Diferencia la bilis del suc pancreàtic.|Quin òrgan produeix bilis?|A l’intestí prim arriba bilis per ajudar a fer la digestió. Quin òrgan l’ha fabricada?
El pàncrees|El pàncrees produeix suc pancreàtic que arriba al començament de l’intestí prim.|El nom del suc et pot ajudar a relacionar-lo amb la glàndula.|Quin òrgan produeix el suc pancreàtic?|Una glàndula situada sota l’estómac envia suc pancreàtic a l’intestí prim. Quina és?
''')
group('digestiu','cura','3, 4, 7, 8','''
Rentar-se les mans abans de menjar|Els apunts recomanen rentar-se les mans abans dels àpats. És un hàbit d’higiene que prepara el moment de menjar.|La pregunta se situa abans de començar l’àpat.|Quin hàbit d’higiene de les mans recomanen els apunts abans de cada àpat?|Acabes de jugar i t’asseus a dinar. Quin hàbit d’higiene de les mans cal fer primer?
Mastegar bé i menjar a poc a poc|Mastegar bé tritura els aliments i els barreja amb saliva. Els apunts recomanen menjar a poc a poc i en un ambient tranquil.|Pensa en com preparar cada mos abans d’empassar.|Quin hàbit ajuda a triturar i barrejar els aliments abans d’empassar?|Una companya s’empassa els mossos sense gairebé mastegar. Quin hàbit li recordaries?
Menjar variat i amb fibra|Els apunts recomanen una dieta equilibrada, amb fruita, verdura, cereals i llegums com a exemples d’aliments amb fibra.|Busca la recomanació sobre la varietat dels aliments.|Quina opció resumeix el consell dels apunts sobre una dieta equilibrada i la fibra?|Un menú sempre conté els mateixos aliments i gairebé cap fruita ni verdura. Quin hàbit dels apunts hi falta?
Raspallar-se les dents després dels àpats|Els apunts recomanen raspallar-se bé les dents després de menjar i fer revisions dentals.|Ara l’àpat ja ha acabat; centra’t en la higiene de les dents.|Quin hàbit d’higiene de les dents recomanen els apunts després de cada àpat?|Has acabat de sopar. Quin hàbit ajuda a cuidar les dents que han triturat els aliments?
''')

group('excretor','excrecio','1','''
L’excreció|L’excreció és el procés que elimina les substàncies de rebuig de l’organisme.|Diferencia eliminar residus de transformar aliments.|Com s’anomena el procés que elimina substàncies de rebuig del cos?|Les cèl·lules generen substàncies que el cos no pot aprofitar. Quin procés permet eliminar-les?
L’activitat de les cèl·lules|Quan les cèl·lules obtenen energia de les substàncies nutritives, es generen diòxid de carboni i altres residus.|Busca l’origen dels residus, abans que la sang els transporti.|Quina activitat genera els productes de rebuig que després cal eliminar?|Què ha generat els residus abans que siguin transportats als òrgans excretors?
El transport per la sang|La sang transporta els residus de les cèl·lules als òrgans i aparells que els eliminen.|No confonguis portar residus amb fer-los sortir del cos.|Com arriben els residus de les cèl·lules als òrgans excretors?|Un residu s’ha format lluny dels ronyons. Quin transport permet que hi arribi?
El conjunt d’òrgans i aparells excretors|El sistema excretor és un conjunt: aparell respiratori, pell i aparell urinari. No es limita a una sola bossa ni a un sol conducte.|Pensa en l’equip complet que elimina residus de diferents maneres.|Què és el sistema excretor: un procés o el conjunt d’òrgans i aparells que el fan?|Pulmons, pell i aparell urinari participen en una mateixa funció. Quin conjunt formen?
''')
group('excretor','organs','1','''
L’aparell respiratori|L’aparell respiratori elimina diòxid de carboni amb la respiració.|El residu és un gas que surt quan expirem.|Quin aparell elimina diòxid de carboni a l’exterior?|La sang porta diòxid de carboni fins als pulmons. Quin aparell permet expulsar-lo?
La pell|La pell permet eliminar suor i també és una barrera protectora del cos.|Busca la via de sortida de la suor, no de l’orina.|Per quina part del cos s’excreta la suor?|Un líquid clar i salat arriba a la superfície del cos pels porus. Quina part del sistema excretor hi intervé?
L’aparell urinari|L’aparell urinari forma i elimina orina per retirar substàncies de rebuig del cos.|Relaciona el residu líquid amb ronyons, bufeta i conductes.|Quin aparell elimina residus mitjançant la formació d’orina?|Una pregunta parla de ronyons i d’orina. Quin aparell està estudiant?
La sang|La sang porta residus cap als òrgans excretors. És el transport, no la sortida final de l’orina ni de la suor.|La funció demanada és portar substàncies d’un lloc a un altre.|Què transporta els residus cap a l’aparell respiratori, la pell i els ronyons?|Un residu encara no ha arribat a l’òrgan que l’eliminarà. Què el transporta dins del cos?
''')
group('excretor','ronyons','2','''
Els ronyons|Els dos ronyons filtren la sang i elaboren l’orina. Són a banda i banda de la columna, a l’alçada de la cintura.|Busca els òrgans on es forma l’orina, no on s’emmagatzema.|Quins òrgans filtren la sang per formar l’orina?|Una companya diu que l’orina es fabrica a la bufeta. Quins òrgans fan realment aquesta feina?
Els urèters|Els urèters són els conductes que porten l’orina dels ronyons a la bufeta urinària.|El tram acaba a la bufeta i comença als ronyons.|Quins conductes comuniquen els ronyons amb la bufeta?|L’orina ja s’ha format i avança dels ronyons cap al lloc on es guardarà. Per on passa?
La bufeta urinària|La bufeta és una bossa de parets elàstiques que emmagatzema l’orina; no la fabrica.|Diferencia guardar l’orina de filtrar la sang.|Quin òrgan emmagatzema l’orina abans que surti?|L’orina s’acumula en una bossa de parets elàstiques. Quin òrgan és?
La uretra|La uretra és el conducte per on l’orina surt de la bufeta cap a l’exterior.|Aquest tram va després de la bufeta, no abans.|Per quin conducte surt l’orina de la bufeta?|L’orina ja era emmagatzemada i ara ha de sortir del cos. Quin conducte travessa?
''')
group('excretor','conductes','2','''
Ronyons → urèters → bufeta → uretra|Primer es forma orina als ronyons; els urèters la porten a la bufeta i la uretra en permet la sortida.|Ordena formar, transportar, guardar i expulsar.|Quina seqüència posa en ordre el recorregut de l’orina des que es forma fins que surt?|Una gota d’orina acaba de formar-se. Quin recorregut complet seguirà abans d’arribar a l’exterior?
Ronyons → urèters → bufeta|Els urèters uneixen els ronyons i la bufeta. Aquest és el tram que porta l’orina fins al lloc on es guarda.|Atura el camí al lloc d’emmagatzematge, sense incloure la sortida.|Quina seqüència arriba dels ronyons fins al lloc on es guarda l’orina, sense incloure la sortida a l’exterior?|L’orina encara no s’expulsarà: només va dels ronyons fins a la bufeta. Quin tram segueix?
Bufeta → uretra → exterior|Quan surt, l’orina va de la bufeta a la uretra i després a l’exterior. No torna a passar pels ronyons.|La gota ja era guardada: només falta el tram final.|Quina seqüència comença al lloc on l’orina ja estava guardada i acaba fora del cos?|Una gota és dins la bufeta i ara s’expulsa. Quin camí segueix des d’aquí?
Sang → ronyons → formació d’orina|La sang passa pels ronyons, que la filtren i formen orina amb residus i una part de l’aigua. Aquest pas és anterior als urèters.|La pregunta comença abans que existeixi l’orina.|Quina seqüència descriu el pas previ al viatge de l’orina pels urèters?|Un residu encara és a la sang. Quin pas ha de passar abans que formi part de l’orina?
''')
group('excretor','suor','1','''
Les glàndules sudorípares|Les glàndules sudorípares, a les capes profundes de la pell, fabriquen la suor.|Diferencia fabricar el líquid de deixar-lo sortir.|Quines estructures produeixen la suor?|La suor encara no ha arribat a la superfície de la pell. Quines estructures l’han elaborada?
Els porus|Els porus són les obertures per on la suor surt a la superfície; no són les glàndules que la fabriquen.|Busca l’obertura final de sortida de la suor.|Per quines obertures surt la suor a l’exterior?|Una companya confon la fàbrica de suor amb la sortida. Com s’anomena l’obertura de sortida?
Els capil·lars sanguinis|Els capil·lars aporten aigua i materials de rebuig a les glàndules sudorípares.|Pensa en la petita xarxa sanguínia que arriba a les glàndules.|Què aporta aigua i materials de rebuig a les glàndules sudorípares?|Una glàndula necessita rebre de la sang aigua i materials de rebuig. Quins vasos petits els hi aporten?
La suor|La suor és el líquid clar i salat que fabriquen les glàndules sudorípares i que surt pels porus.|La pregunta demana el líquid, no una part anatòmica.|Com s’anomena el líquid clar i salat expulsat pels porus?|Les glàndules sudorípares han elaborat un líquid que arriba a la pell. Quin és?
''')
group('excretor','connexions','1–2','''
Filtrar la sang i formar orina|La filtració de la sang i la formació d’orina són feina dels ronyons, abans que els urèters la transportin.|La sang entra als ronyons; l’orina encara no estava formada.|Quina feina fan els ronyons amb la sang que passa per ells?|Un residu està dins la sang i arriba als ronyons. Quina acció permet separar-lo en formar orina?
Transportar orina fins a la bufeta|Els urèters transporten orina ja formada fins a la bufeta. No filtren sang ni són el lloc on es guarda.|La pregunta se situa entre el lloc de formació i el d’emmagatzematge.|Quina feina fan els urèters?|L’orina surt dels ronyons, però encara no és a la bufeta. Quina feina s’està fent en aquest tram?
Guardar l’orina abans d’expulsar-la|La bufeta guarda l’orina abans que la uretra en permeti la sortida. Guardar no és fabricar.|Pensa en la funció d’una bossa elàstica on s’acumula el líquid.|Quina és la feina de la bufeta urinària?|La bufeta es va omplint amb orina que arriba dels urèters. Quina funció està fent?
Permetre la sortida de l’orina a l’exterior|La uretra condueix l’orina de la bufeta cap a fora. És l’últim conducte del recorregut.|Aquest pas arriba després d’emmagatzemar, no abans de formar.|Quina feina fa la uretra?|L’orina abandona la bufeta i recorre l’últim conducte. Quina funció fa aquest conducte?
''')

group('circulatori','transport','1–2','''
La sang|La sang reparteix oxigen i nutrients pel cos i recull diòxid de carboni i altres residus.|Pensa en què circula per tot el cos portant les substàncies.|Què reparteix oxigen i nutrients per l’organisme i recull residus?|Les cèl·lules necessiten substàncies i produeixen residus. Què fa el transport entre les parts del cos?
El cor|El cor impulsa la sang; és la bomba muscular de l’aparell circulatori.|Diferencia la bomba del líquid que transporta i dels conductes.|Quin òrgan impulsa la sang perquè es pugui repartir per tot el cos?|La sang ja porta nutrients, però necessita ser impulsada. Quin òrgan fa de bomba?
Els vasos sanguinis|Els vasos sanguinis són els conductes que permeten que la sang circuli; inclouen artèries, venes i capil·lars.|Busca els camins del transport, no la bomba ni la càrrega.|Per quins conductes circula la sang per l’organisme?|Vols identificar els camins que segueix la sang entre el cor i els òrgans. Quins són?
L’oxigen i els nutrients|L’oxigen i els nutrients són substàncies que la sang reparteix perquè el cos les necessita; no són òrgans ni conductes.|La pregunta demana les substàncies transportades, no les peces del sistema.|Quines substàncies necessàries reparteix la sang per tot el cos?|Les cèl·lules reben de la sang allò que necessiten. Quines substàncies aporta aquest repartiment?
''')
group('circulatori','sang','1','''
El plasma|El plasma és la part líquida de la sang, formada bàsicament per aigua, que transporta nutrients i residus.|Busca la part líquida, no una cèl·lula ni un fragment cel·lular.|Quina part líquida de la sang transporta nutrients i residus?|En una mostra de sang, una part és sobretot aigua i serveix de transport. Quina és?
Els glòbuls vermells|Els glòbuls vermells transporten oxigen. El PDF també els relaciona amb el transport de diòxid de carboni.|Diferencia transportar gasos de defensar de microbis.|Quines cèl·lules sanguínies transporten oxigen?|La sang acaba de recollir oxigen als pulmons. Quines cèl·lules s’associen al seu transport?
Els glòbuls blancs|Els glòbuls blancs defensen el cos de les infeccions i ataquen els microbis que les causen.|Busca la defensa, no la reparació d’una ferida.|Quines cèl·lules de la sang defensen el cos de les infeccions?|Un microbi entra al cos. Quin component sanguini participa especialment en la defensa contra la infecció?
Les plaquetes|Les plaquetes són fragments de cèl·lules que ajuden a tancar les ferides i aturar les hemorràgies.|Pensa en aturar la sortida de sang d’una ferida.|Quins fragments cel·lulars ajuden a aturar les hemorràgies?|Una petita ferida sagna. Quin component de la sang ajuda a tancar-la i aturar la pèrdua de sang?
''')
group('circulatori','cor','2','''
Un múscul|El cor és un múscul. Pot contreure’s i relaxar-se per impulsar la sang.|La pregunta demana de quin tipus d’òrgan es tracta.|Què és el cor segons els apunts?|Un òrgan es contrau i es relaxa contínuament per bombar sang. Quin tipus d’òrgan és?
Contracció i relaxació|El cor alterna contracció i relaxació. Aquests dos moviments permeten bombar la sang.|Busca els dos moviments, no el tipus de teixit.|Quins dos moviments fa contínuament el cor?|Per explicar com funciona la bomba del cor, quina parella de moviments has d’incloure?
Bombar i impulsar la sang|La feina del cor és impulsar la sang perquè circuli pels vasos i arribi als òrgans.|Diferencia impulsar sang de captar oxigen als pulmons.|Quina és la funció del cor dins de l’aparell circulatori?|La sang ha d’avançar pels vasos. Quina feina del cor fa possible aquest desplaçament?
Els pulmons|Als pulmons la sang recull oxigen i deixa diòxid de carboni per expulsar-lo. El cor impulsa la sang, però no fabrica l’oxigen.|Busca el lloc d’intercanvi de gasos abans que la sang es reparteixi pel cos.|A quin òrgan envia el cor la sang que ha de deixar diòxid de carboni i recollir oxigen?|La sang torna del cos carregada de diòxid de carboni. Cap a on l’ha d’impulsar el cor per renovar els gasos?
''')
group('circulatori','vasos','2','''
Les artèries|Les artèries porten sang des del cor cap als òrgans. El criteri és sortir del cor.|Fixa’t en la direcció respecte del cor, no en el color del vas.|Quins vasos porten la sang des del cor cap als òrgans?|Un vas surt del cor i condueix sang cap a un òrgan. De quin tipus és?
Les venes|Les venes retornen la sang dels òrgans cap al cor. El criteri és tornar-hi.|El recorregut acaba al cor, no en surt.|Quins vasos retornen la sang dels òrgans al cor?|La sang ja ha passat per un òrgan i torna al cor. Per quin tipus de vas viatja?
Els capil·lars|Els capil·lars són vasos molt fins que connecten la xarxa de circulació amb els teixits i permeten intercanvis.|Busca la xarxa més fina i propera als teixits.|Quins vasos són molt prims i permeten l’intercanvi de substàncies amb els teixits?|En un teixit, les substàncies han de passar entre la sang i les cèl·lules. Quins vasos petits hi intervenen?
El cor|El cor impulsa la sang pels vasos, però no és una artèria, una vena ni un capil·lar: és una bomba muscular.|Diferencia la bomba dels tres tipus de conductes.|Quin òrgan impulsa la sang pels vasos, però no és un vas sanguini?|Artèries, venes i capil·lars són conductes. Quin òrgan els envia la sang, fent de bomba?
''')
group('circulatori','circuits','1–2','''
Als pulmons|La sang capta oxigen als pulmons abans de repartir-lo per l’organisme.|Pensa en on arriba l’aire que inspirem.|On recull la sang l’oxigen que després reparteix?|La sang necessita captar oxigen de l’aire inspirat. A quin lloc ho fa?
A la resta del cos|La sang porta oxigen i nutrients als òrgans del cos; aquests els necessiten per al seu funcionament.|El cas tracta el destí del repartiment, no el lloc de captació de gasos.|On porta la sang l’oxigen i els nutrients quan els reparteix fora dels pulmons?|La sang ha sortit dels pulmons i el cor l’impulsa. Quin és el destí del repartiment d’oxigen i nutrients per l’organisme?
Cap al cor|La sang retorna al cor a través de les venes, després de passar pels òrgans.|Busca el destí del retorn per les venes.|Cap a on torna la sang dels òrgans per les venes?|Després d’haver passat per una part del cos, la sang entra en una vena. Cap a on es dirigeix?
Des del cor|Les artèries porten sang que surt del cor. El cor és el punt d’origen d’aquest tram del recorregut.|La pregunta demana l’origen, no el destí del vas.|D’on surt la sang que viatja per les artèries?|Segueixes una artèria cap enrere fins a l’origen del seu recorregut. D’on venia la sang?
''')
group('circulatori','connexions','1–2','''
El transport per tot el cos|La funció de l’aparell circulatori és distribuir contínuament la sang per tot el cos; així es connecten els òrgans.|Pensa en la funció del conjunt, no en una peça concreta.|Quina funció del conjunt circulatori connecta les diferents parts de l’organisme?|Els nutrients s’han obtingut en un lloc i els necessita una altra part del cos. Quina funció general resol aquesta distància?
La part bàsicament aquosa|El plasma es compon bàsicament d’aigua. Aquesta part líquida transporta nutrients i residus.|Busca la característica del plasma, no la d’una cèl·lula.|Quina descripció correspon a la composició bàsica del plasma?|Vols descriure què predomina en el plasma sanguini. Quina opció és adequada?
La defensa contra microbis|Els glòbuls blancs defensen el cos atacant microbis que poden causar infeccions.|No confonguis protegir contra una infecció amb tancar una ferida.|Quina funció dels glòbuls blancs ajuda a evitar infeccions?|Una cèl·lula sanguínia actua contra un microbi. Quina feina està fent?
L’ajuda per aturar hemorràgies|Les plaquetes ajuden a tancar ferides i aturar hemorràgies. No són la part líquida ni les cèl·lules que transporten oxigen.|El cas parla d’una pèrdua de sang, no de captar oxigen.|Quina funció tenen les plaquetes quan es produeix una ferida?|Un component sanguini contribueix a frenar la sortida de sang. Quina funció fa?
''')

# Preguntes de les tres fitxes PNG: circuit independent del repàs dels PDF.
group('digestiu','Resum: parts','PNG', '''
Boca|La boca és l’entrada del recorregut dels aliments i on comença la preparació del bol.|Pensa en el primer pas del recorregut numerat.|Segons el resum, on les dents trituren i la saliva humiteja els aliments?
Esòfag|L’esòfag condueix el bol alimentari cap a l’estómac després de la faringe.|El bol ja ha passat per la faringe i va cap a l’estómac.|Quin conducte recorre el bol entre la faringe i l’estómac en el resum?
Intestí prim|A l’intestí prim es completa la digestió i la major part dels nutrients passen a la sang.|Diferencia el pas de nutrients del pas final dels excrements.|Al pas 4 del resum s’acaba de digerir i s’absorbeixen nutrients. De quin intestí es parla?
Intestí gros|A l’intestí gros s’absorbeix aigua i es formen els excrements.|Pensa en les restes després d’absorbir els nutrients.|Quin intestí relaciona el resum amb absorbir aigua i formar excrements?
''',kind='png')
group('digestiu','Resum: òrgans i sucs','PNG','''
Fetge|El fetge produeix bilis. La bilis arriba a l’intestí prim.|Compara els dos òrgans que ajuden a fer la digestió.|Quin òrgan del resum fabrica bilis?
Pàncrees|El pàncrees produeix suc pancreàtic i l’envia a l’intestí prim.|Relaciona el nom del suc amb el nom de l’òrgan.|Quin òrgan del resum produeix suc pancreàtic?
Estómac|A l’estómac el suc gàstric es barreja amb els aliments.|Busca el pas del suc gàstric al recorregut.|Quin òrgan apareix al pas 3 del recorregut dels aliments, quan s’hi barreja suc gàstric?
Anus|L’anus és l’obertura per on s’expulsen els excrements.|Segueix el tub digestiu fins al seu final.|Per on s’expulsen els excrements segons el resum?
''',kind='png')
group('digestiu','Resum: què passa a cada pas','PNG','''
Es forma el bol alimentari|A la boca la trituració i la saliva preparen el bol alimentari.|Fixa’t en el resultat del primer pas.|Què es forma a la boca després de triturar i humitejar els aliments?
Es barreja suc gàstric amb els aliments|El resum situa la barreja amb suc gàstric a l’estómac.|Relaciona cada suc amb el lloc on actua.|Què passa amb els aliments a l’estómac segons el resum?
Els nutrients passen a la sang|El resum situa el pas de la major part dels nutrients a la sang a l’intestí prim.|Pensa en com el cos pot repartir els nutrients.|Què passa amb la major part dels nutrients a l’intestí prim segons la fitxa?
Arriben a l’intestí prim|La bilis i el suc pancreàtic arriben a l’intestí prim, segons la franja final del resum.|El resum mostra que els dos líquids tenen el mateix destí.|On arriben la bilis i el suc pancreàtic que fabriquen els dos òrgans auxiliars del resum?
''',kind='png')
group('excretor','Resum: aparell urinari','PNG','''
Ronyons|Els ronyons filtren la sang i formen l’orina.|Busca el primer pas, abans dels conductes.|Quins dos òrgans del resum filtren la sang i formen l’orina?
Urèters|Els urèters porten l’orina dels ronyons a la bufeta.|Fixa’t en els conductes que van abans de la bossa.|Com s’anomenen els conductes que uneixen els ronyons amb la bufeta al resum?
Bufeta urinària|La bufeta urinària emmagatzema l’orina.|Diferencia guardar l’orina de fabricar-la.|Quina part del resum guarda l’orina abans de sortir?
Uretra|La uretra és el conducte per on l’orina surt de la bufeta cap a fora.|Busca el conducte de sortida, després de la bossa.|Per quin conducte surt l’orina a l’exterior segons el pas 4 del resum?
''',kind='png')
group('excretor','Resum: eliminació de residus','PNG','''
Els pulmons|Els pulmons expulsen diòxid de carboni amb la respiració.|El residu és un gas que surt quan expirem.|Quins òrgans relaciona el resum amb expulsar diòxid de carboni?
La pell|La pell elimina aigua, sals i petites quantitats de residus amb la suor.|El residu líquid del cas surt pels porus.|Quina part del cos relaciona el resum amb l’eliminació de suor?
L’aparell urinari|L’aparell urinari elimina residus amb l’orina.|El líquid del cas ha estat format als ronyons.|Quin aparell relaciona el resum amb l’eliminació de residus amb orina?
La sang|La sang transporta les substàncies de rebuig fins als òrgans que les eliminen.|Diferencia portar el residu del lloc per on surt.|Segons el requadre d’excreció del resum, què porta els residus als òrgans que els eliminaran?
''',kind='png')
group('excretor','Resum: sudoració i funcions','PNG','''
Glàndula sudorípara|La glàndula sudorípara produeix suor a la pell.|La pregunta demana la fàbrica de suor.|Quina estructura de la pell segons la fitxa fabrica la suor?
Porus|Els porus són les obertures per on la suor surt a la superfície.|La pregunta demana la sortida, no la fàbrica.|Quina obertura de la pell segons la fitxa permet que surti la suor?
Filtrar la sang|El primer pas del recorregut del resum és la filtració de la sang als ronyons per formar orina.|Comença el recorregut abans que l’orina baixi pels urèters.|Quina acció del resum permet als ronyons formar orina?
Emmagatzemar l’orina|La funció de la bufeta al resum és emmagatzemar l’orina fins que s’expulsa.|La pregunta se situa al pas 3 del recorregut.|Quina acció fa la bufeta al tercer pas del recorregut de l’orina?
''',kind='png')
group('circulatori','Resum: la sang','PNG','''
Plasma|El plasma transporta nutrients i residus i és la part líquida de la sang.|Pensa en el líquid on hi ha els altres components.|Quin component del resum transporta nutrients i residus?
Glòbuls vermells|Els glòbuls vermells s’associen al transport d’oxigen al resum.|Diferencia repartir oxigen de defensar-se de microbis.|Quines cèl·lules del resum transporten oxigen?
Glòbuls blancs|Els glòbuls blancs defensen el cos de les infeccions.|La funció del cas és la defensa.|Quin component del resum defensa el cos de les infeccions?
Plaquetes|Les plaquetes ajuden a aturar les hemorràgies.|La pista és una ferida per on surt sang.|Quin component del resum ajuda a aturar les hemorràgies?
''',kind='png')
group('circulatori','Resum: circuits i cor','PNG','''
Circulació pulmonar|La circulació pulmonar segueix el recorregut cor → pulmons → cor.|Fixa’t en l’òrgan que es visita entre les dues passes pel cor.|Com s’anomena al resum el recorregut cor → pulmons → cor?
Circulació general|La circulació general segueix el recorregut cor → resta del cos → cor.|El recorregut visita el cos, no només els pulmons.|Com s’anomena al resum el recorregut cor → resta del cos → cor?
Contracció i relaxació|El cor es contrau i es relaxa per bombar sang.|Busca els moviments de la bomba muscular.|Quins dos moviments del cor explica el resum per bombar la sang?
Retorn al cor|Els dos circuits del resum tornen al cor; no són camins que s’aturin als pulmons o al cos.|Compara l’últim òrgan dels dos recorreguts escrits.|Què tenen en comú el final de la circulació pulmonar i el de la general al resum?
''',kind='png')
group('circulatori','Resum: vasos i transport','PNG','''
Artèries|Les artèries porten la sang des del cor.|La pista és la direcció de sortida respecte del cor.|Quins vasos del resum porten la sang des del cor cap a fora?
Venes|Les venes retornen la sang al cor.|La pista és la direcció de retorn.|Quins vasos del resum fan tornar la sang al cor?
Capil·lars|Els capil·lars són vasos molt fins on s’intercanvien substàncies amb els teixits.|Pensa en la xarxa petita entre artèries i venes.|Quins vasos del resum permeten l’intercanvi de substàncies amb els teixits?
La sang reparteix i recull|La sang reparteix oxigen i nutrients i recull diòxid de carboni i residus.|Inclou tant el viatge d’anada com la recollida de residus.|Quina idea resumeix el requadre «La circulació» de la fitxa?
''',kind='png')

def build():
    sources={'digestiu':'Aparell-digestiu.pdf','excretor':'SISTEMA EXCRETOR.pdf','circulatori':'APARELL CIRCULATORI.pdf'}
    bank=[];counts={}
    for g in GROUPS:
        for i,c in enumerate(g['cards']):
            order=[i]+[j for j in range(4) if j!=i]
            for level,prompt in enumerate(c['prompts']):
                key=(g['topic'],g['kind']);counts[key]=counts.get(key,0)+1
                bank.append(dict(id=f"{g['topic']}-{g['kind']}-{counts[key]:03}",topic=g['topic'],kind=g['kind'],section=g['section'],page=g['page'],source=sources[g['topic']] if g['kind']=='pdf' else f"{g['topic']}-resum.webp",prompt=prompt,correct=0,options=[dict(text=g['cards'][j]['answer'],why=c['learn'] if j==i else g['cards'][j]['learn']) for j in order],explanation=c['learn'],hint=c['hint'],process='aplicació' if level else 'record'))
    assert len(bank)==180 and len({q['prompt'] for q in bank})==180
    assert all(counts[t,k]==(48 if k=='pdf' else 12) for t in sources for k in ['pdf','png'])
    out=Path(__file__).resolve().parent
    out.joinpath('questions.js').write_text('(function(root){const bank='+json.dumps(bank,ensure_ascii=False,indent=2)+';if(typeof module!=="undefined")module.exports=bank;root.NutricioQuestions=bank;})(typeof window==="undefined"?globalThis:window);\n',encoding='utf-8')
    print('180 preguntes: 48 PDF + 12 PNG per tema.')
if __name__=='__main__':build()
