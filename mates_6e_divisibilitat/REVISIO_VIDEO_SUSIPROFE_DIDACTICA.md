# Revisió del vídeo de suport i de la identificació de problemes

6 de novembre de 2026 · `PROMPT_CODEX_MATES_VIDEO_SUSIPROFE.md` executat en local.

Projecte: `C:\Users\Isaac\Documents\repasosg-web`. Mòdul: `mates_6e_divisibilitat/`. Sense commit, push ni desplegament.

## Accés real al vídeo: què s'ha pogut comprovar

Recurs: [CUÁNDO usar MCM y MCD en Problemas · Truco Fácil — SusiProfe](https://www.youtube.com/watch?v=TKxOWO7o6SQ).

- El navegador de cerca només ha retornat la pàgina bàsica de YouTube, sense contingut didàctic llegible.
- S'ha consultat l'oEmbed oficial: HTTP 200, títol coincident, autoria «Susi Profe» i codi oficial d'incrustació.
- La pàgina pública de YouTube ha retornat metadades del reproductor amb `status: OK`, `playableInEmbed: true` i durada de 578 segons. La URL de YouTube No Cookie també ha respost HTTP 200.
- La petició a la pista de subtítols anunciada per YouTube ha retornat un cos buit. No s'ha obtingut una transcripció utilitzable.
- **No s'ha vist ni escoltat la narració completa, ni es pot afirmar que s'hagin revisat els seus exemples.** La reproducció real del vídeo dins del navegador de la família queda per comprovar.

Per tant, el vídeo s'integra com a **suport complementari extern**. La nova explicació segueix l'esquema original del ONE-SHOT —imaginar la situació, identificar la pregunta, justificar la relació i interpretar les unitats— i els conceptes de les fitxes escolars. No s'atribueixen al vídeo frases, trucs, exercicis ni recursos visuals que no s'han pogut verificar.

No s'han desat MP4, àudio, miniatures, subtítols ni transcripcions al repositori. Tampoc s'han copiat imatges, narració o pissarres del vídeo.

## On es pot revisar

- `#apren/1/metode`: vídeo prop de l'inici, introducció «Primer entenc la història», dos camins, contrast de significats, sis models i taller reforçat.
- `#apren/1/coincidencies`: explicació inicial amb salts i suport per distingir temps, rondes i hora; enllaç de retorn al detectiu.
- `#apren/1/repartiments`: explicació inicial amb el material que es reparteix i les unitats; enllaç de retorn al detectiu.
- `#tallers` → «Detectiu»: els mateixos dotze casos amb la nova fase inicial; cap motor duplicat.

Entrada local, amb el servidor del projecte al port 8765: [Detectiu de problemes](http://127.0.0.1:8765/mates_6e_divisibilitat/index.html#apren/1/metode).

## Vídeo voluntari i alternativa permanent

Bloc «Vols veure-ho explicat? · Vídeo de suport (en castellà)», amb atribució «SusiProfe · YouTube». Tota la redacció pròpia continua en català.

En entrar no existeix cap iframe, miniatura externa ni petició a YouTube. «Mostra el vídeo» crea el reproductor oficial `https://www.youtube-nocookie.com/embed/TKxOWO7o6SQ`, amb títol accessible, proporció 16:9 i sense autoplay. «Amaga el vídeo» elimina l'iframe. El botó informa de l'estat amb `aria-expanded` i funciona amb teclat.

L'enllaç directe a YouTube està disponible sempre, també quan el reproductor queda bloquejat, amb `target="_blank"` i `rel="noopener noreferrer"`. La nota visible explica l'alternativa sense dependre de detectar un error dins d'un iframe d'un altre domini. També hi ha un missatge per a l'error de càrrega que el navegador pugui comunicar.

La lliçó, els càlculs i les activitats no depenen de YouTube. S'han provat amb tercers bloquejats i, després de carregar els scripts locals, amb tota la xarxa desactivada: les rutes internes i el taller continuen funcionant. No s'ha afegit cap service worker ni es promet obrir una URL nova sense haver carregat els recursos locals.

## La nova introducció: primer la història, després el mètode

### Camí A · Es repeteix / han de coincidir

Dos llums s'encenen cada 6 i 8 minuts i comencen junts. La recta de salts mostra el zero com a inici i la primera coincidència futura a 24.

- Salts de 6: 6, 12, 18, **24**.
- Salts de 8: 8, 16, **24**.
- El temps d'espera ha de contenir intervals sencers de totes dues durades: és un **múltiple comú**. El primer positiu és m.c.m.(6,8)=24.
- En gran: **24 minuts d'espera**. Comprovacions separades: 24÷6=4 i 24÷8=3.
- No són les 24:00 ni una hora inicial: si comencen a les 10:00, se sumen 24 minuts i coincideixen a les 10:24.
- També es pot formar un total comú amb capses de capacitats fixes. El m.c.m. no queda limitat als problemes de temps.

### Camí B · Repartim / tallem sense sobrants

Dues cintes de 12 i 18 cm, amb trossos iguals de longitud màxima. Les barres tenen **dos i tres segments de 6 cm**, amb longituds proporcionals.

- La longitud del tros ha de cabre exactament dins de les dues cintes: busquem un **divisor comú**.
- Divisors comuns: 1,2,3,6. El més gran és m.c.d.(12,18)=6.
- En gran: **6 cm per tros**.
- 12÷6=2 trossos i 18÷6=3 trossos; 2+3=**5 trossos en total**.
- 2×6=12 cm i 3×6=18 cm: es recuperen les dues longituds i no sobra res.

### Els mateixos números, un altre significat

En una targeta separada, 12 fitxes blaves i 18 de taronja es distribueixen en el màxim nombre de lots idèntics, tots amb els dos colors.

- Ara el m.c.d.=6 significa **6 lots**, no cm ni fitxes per lot.
- 12÷6=2 blaves i 18÷6=3 taronja per lot; cada lot té 2+3=5 fitxes.
- 6×2=12 blaves i 6×3=18 taronja: els totals es conserven.

La comparació mostra expressament «6 cm per tros» i «6 lots» en targetes diferents. Un enllaç obre i enfoca el model C per veure'n el dibuix desenvolupat.

Aquestes pistes no es presenten com una regla universal. Es rebutgen explícitament les receptes de paraules «màxim/mínim/paquets» i la comparació automàtica de la mida del resultat. Sempre cal justificar si el valor conté blocs complets o divideix totals, escriure la unitat i comprovar si falta una operació.

## Progressió dels models sense duplicar motors ni històries

Es conserven les sis dades model A–F, amb tots els seus números, enunciats, operacions i solucions. Només es reorganitza la presentació: **A → E → B → C → D → F**.

| Model | Situació i resposta conservades | Paper en la progressió |
|---|---|---|
| A | Robots 6/8: 24 minuts; 4/3 intervals | Primera coincidència temporal |
| E | Cintes 24/36: 12 cm/tros; 2+3=5 trossos | Aplicar el tall intuïtiu amb altres números i comptar trossos |
| B | Capses 4/6: 12 de cada material; 3/2 capses | Una quantitat comuna sense ritmes de temps |
| C | Fitxes 12/18: 6 lots; 2/3 fitxes de cada color | El divisor representa nombre de lots mixtos |
| D | Objectes 10/15: 5 per bossa; 2/3 bosses | El divisor representa contingut, no nombre de bosses |
| F | Rondes 10/14: 70 minuts; 70÷10=7 rondes | El valor intermedi encara no respon la pregunta |

La introducció és el resum visual dels significats; remet als models ja existents per veure els passos complets. No es creen sis històries paral·leles ni un segon banc. Cada model continua en un desplegable propi amb sis moments:

1. Què passa? Dades amb significat.
2. Què em demanen i en quina unitat?
3. Busco múltiples o divisors? Per què?
4. Calculem amb llistes/divisors i dibuix.
5. Què representa el resultat? Falta alguna operació?
6. Comprovem la situació original.

Les fórmules de factors primers continuen com a suport posterior a les lliçons de m.c.m./m.c.d.; no es converteixen en el primer pas per reconèixer la història.

## Detectiu: dotze casos conservats, nova primera fase

No s'han afegit preguntes puntuades ni s'han substituït els dotze casos. Ara el recorregut és:

1. **Què passa?** Escollir «Es repeteix / coincideix», «Repartim / tallem» o «Cal pensar què demana exactament».
2. **Què busco?** Identificar la pregunta i la unitat, abans de mostrar el formulari de mètode.
3. **Quina relació i quin mètode?** Primer la condició de múltiple/divisor; després m.c.m./m.c.d.
4. **Ho fem junts**, només si es demana: càlcul, significat i comprovació.

Una resposta buida no avança. Una resposta incorrecta explica la situació i deixa continuar: no hi ha càstig ni bloqueig. «Cal pensar…» és una parada legítima per rellegir qualsevol cas, sense imposar una falsa classificació única. Les capses i els mosaics s'expliquen amb grups de mida fixa, sense fingir que són cicles temporals.

Si s'escull m.c.m. en un repartiment, el feedback explica que cal un valor que **divideixi els totals sense sobrants**. Si s'escull m.c.d. en una coincidència, explica que cal un total amb **blocs sencers de totes dues mides**. S'hi conserva la justificació específica de cada història. No s'atribueixen pensaments ni errors mentals a l'alumna.

Capses, rondes, contingut de paquets i bosses d'un sol tipus reben recordatoris específics de segona divisió. Per exemple: 18/27 caramels → m.c.d.=9 caramels/bossa → 18÷9=2 bosses i 27÷9=3 bosses. Les dues pistes graduades, anterior/següent/repetir i la solució voluntària continuen operatius.

## Integritat i fitxers

Abans de modificar s'ha creat `video-protection.json`: **116 hashes SHA-256**, tots idèntics al final. Inclou els 180 ítems, respostes i generador, inventari, motor, geometria, visualitzacions existents, pràctica, tallers base, dades didàctiques completes, portada, Medi, preparatoris i originals escolars.

`video-lessons-protection.json` comprova addicionalment els tres mons, els tretze IDs en el mateix ordre, les **deu lliçons no afectades** i el codi de les set fitxes de criteris i del seu laboratori. No s'ha modificat el criteri del 6 ni cap altre criteri. No s'han canviat `didactic-data.js`/`.json`, `math.js`, `engine.js`, `geometry.js`, `practice.js` o `activities.js`.

Continuen: 180 ítems (80+70+30), set formats, quotes de simulacre 12+12+6, nota encerts/30×10, clau `mates6e_div_v1` i revisions anteriors. Cap migració de dades. La nova fase i el vídeo no escriuen progrés.

Fitxers modificats dins del mòdul:

- `content.js`: només la redacció de `metode`, `coincidencies` i `repartiments`.
- `didactics.js`: intro visual reutilitzada, sis moments dels models, ordre de presentació i connexió de la fase inicial/feedback.
- `app.js`: bloc de vídeo, intro abans dels exemples, petit recordatori de lectura i connexions amb les dues lliçons relacionades.
- `index.html`: registre de `story-support.js` en l'ordre de càrrega local.
- `styles.css`: estils dels nous components, mantenint les paletes i la navegació.
- `didactic-browser-test.cjs`: completa la nova fase inicial abans dels controls ja existents; conserva les comprovacions anteriors.
- `README.md`: arquitectura, vídeo opcional, proves i límits actualitzats.

Nous: `story-support.js`, `video-test.cjs`, `video-protection.json`, `video-lessons-protection.json` i aquest `REVISIO_VIDEO_SUSIPROFE_DIDACTICA.md`. Captures i galeria només a `tmp/mates-review/video-susiprofe/`, ignorat per Git.

## Validacions executades

Totes les proves de Matemàtiques i les dues regressions exigides de Medi han acabat en **PASS**:

| Ordre | Evidència |
|---|---|
| `node mates_6e_divisibilitat/validate.cjs` | 180 claus i enunciats, 13 apartats, 7 formats, casos límit, estat/versions; 1.000 simulacres equilibrats |
| `python mates_6e_divisibilitat/verify_independent.py` | 180 respostes recalculades independentment, geometria, originals exclosos i proteccions anteriors |
| `node mates_6e_divisibilitat/didactic-test.cjs` | 70.007 comprovacions dels criteris + nombres grans; 6 models, 12 casos, dades i 110 hashes de la revisió anterior |
| `python mates_6e_divisibilitat/verify_didactics.py` | 18 històries, llistes i operacions independents; 13 propostes, 120 igualtats de teoria/criteris, geometria |
| `node mates_6e_divisibilitat/browser-test.cjs` | 51 captures; 7 formats, 13 temes, filtres, tallers, errors, restauració, doble correcció, simulacre 29/30, notes, reinici aïllat i rutes |
| `node mates_6e_divisibilitat/editorial-browser-test.cjs` | 360 correccions DOM: un encert i un error per cadascun dels 180 ítems, passos i explicacions íntegres |
| `node mates_6e_divisibilitat/didactic-browser-test.cjs` | 7 autocorreccions, 10 miniqüestions, 13 propostes i 12 casos amb la nova fase; dades intactes, pràctica/simulacre, 79 captures |
| `node mates_6e_divisibilitat/video-test.cjs` | 116 hashes + deu lliçons + criteris, dos camins/unitats, cinc segments, sis models, dotze fases inicials, error/encert, segona divisió, vídeo/fallback/teclat, xarxa desactivada i 37 captures |
| `node medi_6e_cos_huma/validate.cjs` | 180 ítems, 60/món, fonts, enllaços, 1.000 simulacres i estat corrupte |
| `node medi_6e_cos_huma/browser-test.cjs` | Navegació i arxiu, 390/768/1280, lectura/sessió, encert/error, simulacre 30/30, historial, reinici, dades corruptes i tres vídeos de Medi reproduïts |

El test nou enumera divisors i múltiples sense utilitzar el helper matemàtic del mòdul per verificar 6/8→24, 12/18→6, els comuns 1/2/3/6, cinc trossos, contingut dels lots i la suma de minuts. Al DOM comprova totes les operacions mostrades als camins, les unitats diferenciades i els cinc segments del dibuix. Les operacions dels models i casos continuen recalculades independentment per Python.

El navegador parteix d'un intent anterior, error, historial, lectura, sessió activa i esborrany amb ordre d'opcions, més una clau sentinella de Medi. Després dels tallers, el vídeo, les recàrregues i les activitats, **totes les claus de localStorage són idèntiques**; la sessió es reprèn amb la mateixa tria. El simulacre no genera vídeo, intro, fase d'identificació ni ajudes noves.

Sense errors JS, HTTP 404 ni desbordament horitzontal a les pantalles capturades. S'han comprovat focus/Enter, l'obertura enfocada dels models, text alternatiu dels esquemes, mòbil i `prefers-reduced-motion`. No s'han utilitzat les dades reals de la família.

## Captures i revisió visual

**37 captures noves** a 390, 768 i 1280 px. [Galeria local](../tmp/mates-review/video-susiprofe/captures.html) · [Llista de captures](../tmp/mates-review/video-susiprofe/captures.json).

Inclouen vídeo abans d'activar, reproductor bloquejat amb alternativa, camí de múltiples, camí de divisors, contrast d'unitats, models E/B/C/D/F, identificació incorrecta/correcta i cas avançat amb segona divisió. Els models complets i la resta de fluxos tenen també les captures de regressió regenerades.

Exemples mòbils: [Múltiples](../tmp/mates-review/video-susiprofe/cami-multiples-390.png), [Divisors](../tmp/mates-review/video-susiprofe/cami-divisors-390.png), [Vídeo sense carregar](../tmp/mates-review/video-susiprofe/video-sense-carregar-390.png), [Història identificada](../tmp/mates-review/video-susiprofe/historia-identificada-390.png).

S'han inspeccionat captures completes dels dos camins, el bloc del vídeo, la fase inicial i les unitats; operacions grans i targetes apilades en mòbil. El català nou utilitza frases concretes, diferencia total/mida/grups i no pressuposa què ha pensat l'alumna.

**Important sobre la prova del reproductor:** les captures de fallback utilitzen una resposta interceptada que simula un reproductor bloquejat. Acrediten la integració i que la lliçó continua operativa; **no són captures d'una reproducció real de SusiProfe**.

## Límits i revisió pendent

- La revisió amb una alumna real continua pendent: comprovar que pot explicar què representa el resultat d'una història nova, sense limitar-se al nom del mètode.
- No es presenta el contingut nou com una adaptació d'exemples verificats del vídeo; no se n'ha pogut revisar la narració. La integració real depèn de YouTube, connexió i restriccions del navegador; sempre hi ha alternativa.
- Proves visuals en Chromium, sense validació en dispositiu físic, Safari/iOS o lector de pantalla.
- No s'ha publicat cap document escolar, vídeo o captura. No s'ha fet commit, push ni desplegament; queda pendent la revisió local de la família.
