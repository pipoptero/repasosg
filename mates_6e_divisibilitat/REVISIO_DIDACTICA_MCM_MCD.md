# Revisió didàctica de Matemàtiques 6è · v2

Data: 6 de novembre de 2026. Encàrrec executat: `PROMPT_CODEX_MATES_6E_REFORC_DIDACTIC_v2.md`, que substitueix l'anterior. Treball exclusivament local, sense commit, push ni desplegament.

## Resultat i límits respectats

S'han reforçat els **13 apartats**, amb objectiu, idees separades, exemple concret, passos curts, explicació del perquè, comprovació i proposta autocorrectiva sense nota. S'han desenvolupat **set criteris**, **sis històries model**, **dotze casos guiats**, **deu miniqüestions de criteris** i **tretze propostes de lliçó**. Les set targetes també tenen cadascuna la seva autocorrecció: són 42 propostes formatives, fora del banc puntuat, a més dels laboratoris lliures.

El banc continua tenint exactament **180 ítems i els mateixos IDs, continguts, respostes, revisions i fonts**: 80 + 70 + 30; set formats, 122 respostes de producció (67,8%). No s'ha regenerat. Simulacres: 30 activitats, quotes 12+12+6 i nota encerts/30×10. Mateixa clau `mates6e_div_v1`, esquema/revisió 1, rutes i ordre dels temes. No hi ha migració ni reinici del progrés.

S'han comparat **110 hashes SHA-256** amb la instantània anterior al reforç: banc, generador, inventari, cobertura, motor, geometria, portada, configuració local existent, fitxers de Medi, preparatoris anteriors i 16 originals de Matemàtiques. Tots coincideixen. La portada i `.gitignore` ja tenien canvis de l'encàrrec anterior; aquesta revisió no els ha modificat. HEAD continua sent `240c49ba56be2bf632fe1a10812d7efa9f9e55d9`.

## Diagnòstic i canvis reals de pantalla

| Abans | Ara |
|---|---|
| Paràgrafs que comprimien definició, procediment i interpretació | Una idea per paràgraf; objectiu visible; «Per què funciona?» i «Com ho comprovo?» separats |
| Sis criteris resumits i resultat de 2028 visible automàticament | Set fitxes amb exemples, contraexemples, xifres subratllades i autocorrecció; laboratori amb previsió abans de mostrar resultats |
| Un exemple breu que barrejava compra i repartiment | Sis històries independents, cadascuna amb dades, pregunta, relació, càlcul, significat i comprovació |
| Dibuix de lots barrejats reutilitzat per decidir qualsevol problema | Dos camins diferents: recta de múltiples i divisió de totals en grups d'un sol tipus; dibuixos específics de capses, lots, bosses i cintes |
| Taller de decisió amb dos selectors fixos | Dotze situacions graduades, pregunta/unitat abans de relació/mètode; dues pistes sol·licitades expressament; solució desenvolupada amb botó propi |
| Tres rètols estàtics als problemes de pràctica | Guia opcional desplegable amb tres preguntes, sense calcular ni autocompletar res |
| Correcció amb els passos del banc en una sola llista | Sis fases de correcció; passos originals íntegres; valor intermedi i resposta final diferenciats |
| Hora final expressada visualment com «6 hores» | En el feedback nou: «A les 6:00 (hora del dia)»; espera de 12 hores i suma 18+12=30 explicades a part; dades del banc preservades |
| Fórmules de geometria massa aviat | Figura manipulable primer; coordenades, signes i fórmules en un desplegable posterior |

El disseny conserva el mapa, els tres mons, les paletes, les targetes, els SVG, la navegació i les activitats anteriors. Només s'han afegit estils per als components didàctics.

## Fonts originals i fidelitat

S'han consultat l'inventari i la revisió de fonts existent. S'han tornat a comprovar visualment les còpies de lectura locals de les fotografies pertinents i de totes les pàgines PDF indicades a continuació. Les còpies orientades/renderitzades continuen exclusivament a `tmp/mates-review/`; els originals no s'han modificat ni incorporat a la web.

| Font | Localització aprofitada | Aplicació al reforç |
|---|---|---|
| `Image (2)(1).jfif`, `Image (4)(1).jfif` | Pàgina de múltiples | Zero, seqüències i grups iguals |
| `Image (3)(1).jfif` | Divisors | Divisió exacta, quocient i residu |
| `Image (5)(1).jfif` | Criteris | 2, 3, 5, 9, 10; diferència entre criteri i divisió |
| `TEORIA DIVISIBILITAT.pdf` | p. 1 | Criteri del 4, factors primers, m.c.m. i m.c.d. |
| `worksheet_175830.pdf` | p. 1 | Taula 2/3/5 i condicions simultànies |
| `worksheet_333518.pdf` | p. 1–2 | 2/3/5/9/10 i selecció de tots els criteris aplicables |
| `worksheet_1263604.pdf` | p. 1–2 | Nombres de diverses xifres, 3/5/7/9; el 7 es comprova per divisió/múltiples |
| `Image (6)(1).jfif` | Tots els divisors | Parelles del 15 i moment d'aturar la cerca |
| `Image (7)(1).jfif` | Primers i compostos | Provar divisors, cas particular de l'1 |
| `problemas_ mcm_mcd_1.jfif` | Exemple «Aprèn» | Bosses d'un sol tipus: m.c.d. com a contingut, no com a nombre de bosses |
| `problemas_ mcm_mcd_2.jfif` | Exercici 38 | Periodicitat 8/12; context escolar adaptat a senyals, sense consells de medicació |
| `problemas_ mcm_mcd_3.jfif` | Exercicis 36–37 | Coincidències, punts, torres i rams |
| `Image (8)(1).jfif` | Girs i brúixola | Centre, sentit, angle, conservació de mida i gir de 70° |
| `Image (9)(1).jfif` | Simetries | Plegament, eixos i distàncies |

**Abast honest:** les fonts anteriors aporten explícitament els criteris 2, 3, 4, 5, 9 i 10. No s'ha localitzat una regla explícita del 6 en aquestes imatges/PDF. El **6 s'incorpora per requeriment exprés de la família**, tal com fixa el ONE-SHOT v2. Aquesta distinció també figura a la font visible de la lliçó. No s'atribueix el 6 al PDF. No s'ha inventat una regla ràpida del 7.

Els números i les històries noves són exemples propis dins d'aquest abast matemàtic. No es reprodueixen pàgines del llibre ni infografies escolars com a substitut de l'explicació.

## Cobertura dels tretze apartats

Tots tenen «Prova-ho tu» amb resposta explicada, sense comptador ni guardat, i vocabulari opcional.

| ID preservat | Reforç principal | Exemple / proposta de comprensió |
|---|---|---|
| `multiples` | Grups, multiplicació i zero; primers vs primers positius | 0,3,6,9,12,15; produir 4,8,12,16 |
| `divisors` | Separar quocient i residu; reconstruir el total | 15 en grups de 3; residu de 14 entre 4 = 2 |
| `criteris` | Set regles independents, contrastos i simultaneïtat | Set fitxes + 2028 interactiu; suma de xifres de 216 = 9 |
| `tots-divisors` | Parelles successives, aturada i duplicat del quadrat | Divisors de 15; cas 36 amb 6×6 una vegada; divisors de 16 |
| `primers` | Provar divisors, 1, 2 i senars compostos | Comparar 7 i 6; classificar 9 com a compost |
| `factors` | Divisions successives i reconstrucció; repeticions | 60÷2→30÷2→15÷3→5÷5→1; factors de 20; exponents opcionals |
| `mcm` | Llistes primer, factors després; primer comú positiu | 6/8→24; 4/10→20; casos 4/12, 8/15, 9/9 |
| `mcd` | Divisors comuns abans de factors; què representa el valor | 12/18→6; 8/12→4; factors comuns i casos límit opcionals |
| `metode` | Procediment del detectiu amb sis passos | Sis models separats i taller de dotze casos |
| `coincidencies` | Temps, hora del rellotge i nombre de rondes | 8/12 hores des de les 7:00; 5/6 minuts→30÷5=6 rondes |
| `repartiments` | Distingir nombre de lots i contingut de cada bossa | 10/15→5 per bossa→2/3 bosses; 6/9 mixtos→2 blaves/lot |
| `girs` | Centre fix, angle i sentit; figura abans de coordenades | Brúixola 70° antihorari i triangle 90° horari; nord→oest antihorari |
| `simetries` | Plegament, eixos vertical/horitzontal i punts fixos | Reflex manipulable; mateixa distància de 3 caselles a l'eix |

En els exemples de divisions no exactes s'escriu «quocient 7 i residu 1», sense presentar 15÷2=7 com una igualtat ordinària. Es manté «residu zero» com a condició de divisió exacta.

## Desenvolupament dels set criteris

Cada fitxa mostra regla, xifres que cal mirar, exemple resolt, contraexemple, divisió de verificació, recordatori i pregunta autocorrectiva pròpia. Els errors expliquen la prova completa; les respostes no es guarden.

| Criteri | Exemple positiu | Contraexemple(s) | Autocorrecció |
|---|---|---|---|
| 2 | 126, última xifra 6 | 127 | 138: sí |
| 3 | 123, suma 6 | 124, suma 7 | 125: no, suma 8 |
| 4 | 2028, últimes 28 | 2026, últimes 26 | 1316: sí, 16÷4=4 |
| 5 | 145, acaba en 5 | 142 | 203: no |
| 6 | 42, parell i suma 6 | 44: falla el 3; 45: falla el 2 | 54: sí, parell i suma 9 |
| 9 | 729, suma 18 | 732, suma 12 | 741: no, suma 12 |
| 10 | 130, acaba en 0 | 125 | 430: sí |

Per al 4 s'expliquen les centenes com a 25 grups de 4; per això només queda revisar les dues últimes xifres. Es contrasten expressament 3/9, 2/6 i 5/10. Per al 6 es comproven les dues condicions, no només una.

El laboratori permet escriure un nombre, marcar els set divisors possibles, comprovar un sol criteri o tot el conjunt i canviar de nombre. No mostra la correcció en entrar. En canviar el nombre es netegen les previsions anteriors. Per a **2028**, la resposta completa és **2,3,4,6**; no 5,9,10. Es mostren separadament regla mental i identitat de la divisió amb residu.

Les deu miniqüestions inclouen una per criteri, construir un positiu menor que 100 divisible alhora per 2/3/5 (30,60,90), completar el conjunt de 2028 i contrastar 45 amb la regla del 6.

Captures de les set fitxes (390 px; també disponibles a 768/1280): [2](../tmp/mates-review/didactic-v2/criteri-2-390.png), [3](../tmp/mates-review/didactic-v2/criteri-3-390.png), [4](../tmp/mates-review/didactic-v2/criteri-4-390.png), [5](../tmp/mates-review/didactic-v2/criteri-5-390.png), [6](../tmp/mates-review/didactic-v2/criteri-6-390.png), [9](../tmp/mates-review/didactic-v2/criteri-9-390.png), [10](../tmp/mates-review/didactic-v2/criteri-10-390.png). Les set explicacions després d'un error també tenen captura pròpia `autocorreccio-error-<criteri>-1280.png`.

## Guió del detectiu i exemples model

1. Identificar la pregunta final i la unitat.
2. Escriure les dades amb significat: no només dos números.
3. Justificar si el valor intermedi conté blocs complets (múltiple) o divideix totals exactament (divisor).
4. Calcular amb llistes/divisors; factors com a segon camí opcional.
5. Dir en gran què representa el nombre i comprovar si falta una divisió o un recompte.
6. Verificar els totals/intervals i escriure la resposta que realment es demanava.

No s'ensenya una regla de paraules clau. «Paquets» no determina el mètode i «màxim/mínim» només té sentit després d'explicar la relació.

| Model separat | Càlcul i interpretació verificats |
|---|---|
| A · Robots cada 6/8 minuts | m.c.m.=24 minuts futurs; 24÷6=4 i 24÷8=3; zero és l'inici |
| B · Capses de 4 llapis / 6 gomes | m.c.m.=12 de **cada** material; 12÷4=3 capses de llapis i 12÷6=2 de gomes |
| C · 12/18 fitxes en lots mixtos | m.c.d.=6 **lots**; 12÷6=2 blaves i 18÷6=3 taronja per lot |
| D · 10/15 objectes, bosses d'un sol tipus | m.c.d.=5 **objectes per bossa**; 10÷5=2 bosses i 15÷5=3; connectat amb la foto escolar de bosses |
| E · Cintes de 24/36 cm | m.c.d.=12 **cm per tros**; 24÷12=2, 36÷12=3; 2+3=5 trossos |
| F · Rondes de 10/14 minuts | m.c.m.=70 **minuts**; el primer robot fa 70÷10=7 **rondes** |

Les llistes i les representacions corresponen als números de cada història. En B es dibuixen capses de capacitats diferents amb el mateix total; en C tots els lots tenen els dos colors; en D cada bossa té un sol tipus. C i D comparteixen mètode però no significat del m.c.d. Els models es despleguen un per un (només A obert inicialment), abans de la comparació final.

## Dotze situacions del taller

Les quatre primeres són de nivell Fàcil, les quatre següents Connecta i les quatre últimes Interpreta. Les històries no copien cap enunciat exacte del banc de 180.

| Cas | Mètode / valor intermedi | Segona operació i resposta amb unitat |
|---|---|---|
| 1 · Llums cada 4/7 minuts | m.c.m.(4,7)=28 | 28 minuts d'espera |
| 2 · Cintes de 18/30 cm | m.c.d.(18,30)=6 | 6 cm per tros |
| 3 · Jocs de 3/8 punts per torn | m.c.m.(3,8)=24 | 24 punts comuns mínims positius |
| 4 · 16 margarides / 28 tulipes; rams d'un sol tipus | m.c.d.(16,28)=4 | 4 flors per ram |
| 5 · Capses de 5 retoladors / 6 pinzells | m.c.m.(5,6)=30 de cada material | 30÷5=6 capses de retoladors; 30÷6=5 de pinzells |
| 6 · 14/21 fitxes; lots amb tots dos colors | m.c.d.(14,21)=7 lots | 14÷7=2 blaves; 21÷7=3 taronja per lot |
| 7 · 18/27 caramels; bosses d'un sol gust | m.c.d.(18,27)=9 caramels/bossa | 18÷9=2 bosses de menta; 27÷9=3 de llimona |
| 8 · Mosaic, files de 8 o de 10 | m.c.m.(8,10)=40 | 40 peces en total |
| 9 · Circuits de 7/9 minuts | m.c.m.(7,9)=63 minuts | 63÷7=9 rondes del circuit de 7 minuts |
| 10 · 24 blaves / 40 taronja; paquets mixtos | m.c.d.(24,40)=8 paquets | 24÷8=3 fitxes blaves per paquet |
| 11 · Cintes de 20/32 cm; demanen trossos | m.c.d.(20,32)=4 cm/tros | 20÷4=5; 32÷4=8; 5+8=13 trossos |
| 12 · 9 blaves / 9 taronja; lots mixtos | m.c.d.(9,9)=9 lots | 9÷9=1 de cada color per lot |

Primer es trien la pregunta i la unitat; després, la relació i el mètode. Hi ha dues pistes desplegables: pregunta/unitat i relació de les quantitats. Només s'obren per petició. Un error explica què canviaria o quina condició no es compleix; no bloqueja. El raonament numèric complet no apareix fins a prémer «Ho fem junts». Botons anterior, següent i repetir, sense rellotge, nota ni càstig. Disponible des de `metode` i des del taller «Detectiu», amb el mateix component.

Casos límit verificats addicionalment: 4/12 (un divideix l'altre: m.c.m.=12, m.c.d.=4), 8/15 (únic divisor comú 1: m.c.m.=120), 9/9 (tots dos resultats 9). Els tres apareixen també a les ampliacions opcionals de la teoria.

## Pràctica, simulacre i persistència

La guia de pràctica és només text desplegable; no té controls de resposta ni fa cap inferència específica de l'ítem. No emplena unitats, no tria mètode, no mostra resultats i no és obligatòria per corregir. En simulacre el seu HTML **no es genera**; tampoc es mostra cap correcció abans del final.

En corregir un problema apareixen sis fases: dades → què busquem → mètode/motiu → operacions → significat → comprovació. Es conserven tots els `steps` originals. Per `cycleCount`, es divideix el total comú per `period`; per `groupsContent`, el total del color preguntat es divideix pel nombre de paquets; per `clock`, s'afegeix l'espera i es llegeix el rellotge de 24 hores. L'hora final té presentació específica, sense alterar la resposta numèrica ni la unitat del banc.

La revisió de resultats només afegeix aquesta presentació quan la revisió del banc i de l'ítem coincideixen. No modifica les instantànies ni recalcula notes històriques. Les versions antigues mantenen la presentació/instantània conservada. No s'ha detectat cap error matemàtic que requereixi modificar un ítem del banc.

Els components didàctics no llegeixen ni escriuen `localStorage`. S'ha provat navegació, activitats i recàrregues partint d'un estat amb intent/temps d'intent, error antic, historial, lectura, arxiu, sessió activa, esborrany i ordre d'opcions: el contingut de **totes** les claus ha quedat idèntic després de les activitats formatives. També s'ha reprès la sessió prèvia i s'han comprovat les claus sentinella de Medi i català.

## Validacions executades

Totes les ordres següents s'han executat i han acabat en **PASS**, sense dependències de xarxa per a la web:

| Ordre | Resultat |
|---|---|
| `node mates_6e_divisibilitat/validate.cjs` | 180 claus i enunciats, 7 formats, 13 temes, funcions/casos límit, estat/versions/arxiu; 1.000 simulacres 12+12+6 |
| `python mates_6e_divisibilitat/verify_independent.py` | 180 claus recalculades independentment; geometria; 55 fitxers protegits del preparatori anterior; 16 originals exclosos de Git |
| `node mates_6e_divisibilitat/browser-test.cjs` | 51 captures; portal amb 2 exàmens, 13 apartats, 7 formats, filtres, tallers, errors, esborrany, recàrrega, doble correcció, simulacre real 29/30, historial, reinici aïllat, estat corrupte; arrel i `/repasosg/` |
| `node mates_6e_divisibilitat/editorial-browser-test.cjs` | 360 correccions DOM: encert i error dels 180 ítems, passos i resposta visibles, un intent per correcció |
| `node medi_6e_cos_huma/validate.cjs` | 180 ítems, 60/món, fonts/enllaços, 1.000 simulacres equilibrats i estat corrupte |
| `node medi_6e_cos_huma/browser-test.cjs` | Navegació, preparatoris antics, 3 amplades, lectura/sessió, encert/error, simulacre 30/30, historial, reinici, dades corruptes i tres vídeos reproduïts |
| `node mates_6e_divisibilitat/didactic-test.cjs` | 70.007 comprovacions de criteris contra residu directe + nombres grans; 7 fitxes, 6 models, 12 casos, dades JSON/JS idèntiques, feedback avançat i 110 hashes |
| `python mates_6e_divisibilitat/verify_didactics.py` | Enumeració independent de les 18 històries, llistes i operacions; 13 propostes; 120 igualtats numèriques de teoria/criteris; divisors, límits, rellotge, gir i reflex |
| `node mates_6e_divisibilitat/didactic-browser-test.cjs` | 13 propostes encert/error, 7 autocorreccions encert/error, 10 miniqüestions, 12 casos amb pregunta/unitat/pistes/relació/mètode/solució; anterior/següent/repetir; dades guardades intactes; pràctica vs simulacre; 79 captures |

Les proves didàctiques cobreixen especialment 42/44/45 per al 6, 2028→2/3/4/6, conjunts incomplets, diverses xifres i divisors zero/no admesos. El 6 s'implementa com **criteri del 2 I criteri del 3** a la capa formativa; `math.js` i el corrector dels 180 ítems són idèntics a l'inici.

Chromium en contextos aïllats, 390/768/1280 px i comprovació addicional de paisatge a la regressió existent. Sense errors JavaScript, HTTP 404, peticions als originals o desbordament horitzontal a les pantalles capturades. Focus de teclat, activació amb Enter i `prefers-reduced-motion` comprovats. Les proves no han utilitzat les dades reals del navegador de la família.

## Captures i revisió visual/editorial

**79 captures específiques v2**, més les 51 de regressió de Matemàtiques. Índex navegable local: [captures.html](../tmp/mates-review/didactic-v2/captures.html). Llista reproduïble: [captures.json](../tmp/mates-review/didactic-v2/captures.json). No formen part dels recursos de la web.

Les captures v2 inclouen teoria simple, totes les fitxes i les seves autocorreccions errònies, laboratori de 2028, entrada de `metode`, dos camins, models A–F complets, taller incorrecte/correcte, pràctica amb guia oberta, feedback amb segona operació, errors, simulacre sense ajudes i correcció de rellotge després d'acabar. Les vistes llargues es capturen per component complet; les entrades de teoria es capturen com a vista general.

S'han inspeccionat les làmines de contacte i captures completes representatives: criteris 4/6, models de bosses, camins, guia en mòbil, taller incorrecte i feedback de rellotge. S'ha revisat el català dels 13 apartats, set fitxes, sis models, dotze casos, pistes, unitats, errors i controls. S'ha eliminat una explicació de coordenades pròpia de programació de la lliçó infantil de girs; ara l'advertiment compara angle i orientació.

La prova de comprensió s'ha simulat seguint les sis històries A–F: es pot identificar pregunta/unitat, relacionar quantitats, justificar el mètode, calcular i tornar a la pregunta. Les sis solucions coincideixen amb les exigides pel ONE-SHOT. Això és una revisió pedagògica i matemàtica, **no una prova real amb l'alumna**.

## Fitxers modificats i nous

Modificats dins del mòdul:

- `content.js`: 13 lliçons reforçades; mateixos IDs i ordre.
- `app.js`: integració de fitxes, objectius, comprovacions, models, propostes, geometria guiada, taller Detectiu i feedback de resultats.
- `activities.js`: delegació dels tallers de criteris i decisions; substitució dels components antics de sis criteris/dos casos.
- `practice.js`: guia opcional només en pràctica, sis fases de feedback, presentació d'hora del dia.
- `styles.css`: estils dels components nous; lectura apilada en mòbil.
- `index.html`: càrrega local dels nous scripts en ordre de dependències.
- `browser-test.cjs`: expectativa correcta de quatre criteris per a 2028 en el nou taller, inclòs el 6. Les taules del banc continuen amb els divisors originals.
- `README.md`: arquitectura, ús i proves del reforç.

Nous dins del mòdul:

- `didactic-data.json` i `didactic-data.js`: mateixes dades, versió auditable i versió de càrrega estàtica.
- `didactic-math.js`: funcions pures de la capa formativa; no puntuen.
- `didactics.js`: components i interaccions formatives, guia i presentació de correccions.
- `didactic-protection.json`: 110 hashes previs a la implementació.
- `didactic-test.cjs`, `verify_didactics.py`, `didactic-browser-test.cjs`: proves específiques.
- `REVISIO_DIDACTICA_MCM_MCD.md`: aquest informe.

Auxiliars locals ignorats: scripts de treball, captures, làmines de contacte i galeria a `tmp/mates-review/`. Cap document escolar original, vídeo, PDF o foto s'ha copiat als assets públics. No s'han tocat `visuals.js`, `geometry.js`, el motor ni el banc per donar cobertura aparent al 6.

## Aspectes pendents i limitacions

- Revisió de la família en local i, especialment, observar si l'alumna pot resoldre un problema nou explicant què representa el resultat.
- No s'ha fet una prova amb alumna real, dispositiu físic, Safari/iOS o lector de pantalla. Les proves responsive són en Chromium.
- Les activitats formatives són deliberadament efímeres: en recarregar tornen al començament; el progrés puntuat conserva el funcionament anterior.
- No queden proves exigides sense executar ni incidències tècniques conegudes pendents. Publicació pendent de revisió i autorització; **no s'ha fet commit, push ni desplegament**.
