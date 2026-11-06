# Auditoria · Missió Matemàtica 6è

**Estat: implementació completa en local, pendent de revisió familiar.** 6 de novembre de 2026. Repositori actiu: `C:/Users/Isaac/Documents/repasosg-web`.

Entrada local: http://127.0.0.1:8765/mates_6e_divisibilitat/index.html. Cal tenir el servidor local iniciat. El Portal de Repàs mostra **Medi i Matemàtiques** com a dos exàmens actius, sense dates inventades.

## 1. Abast i fidelitat escolar

S’ha llegit íntegrament el ONE-SHOT i l’inventari abans de programar. S’han inspeccionat visualment **els 16 originals**: 12 fotografies i les 6 pàgines dels 4 PDF, renderitzades perquè no tenien text extraïble. Les fotos girades s’han orientat en còpies temporals. Els originals no s’han modificat.

«El pla de treball» delimita els set temes: múltiples/divisors, criteris, tots els divisors, primers/compostos, m.c.m./m.c.d., problemes i girs/simetries. La web els desplega en 13 apartats. No introdueix unitats de fraccions, percentatges o traslacions. Les coordenades de les quadrícules es presenten com a eina per construir i comprovar els girs/reflexos, amb x cap a la dreta i y cap amunt, i s’ensenyen abans de preguntar-les.

La teoria és autosuficient: no necessita obrir cap llibre ni PDF. Els exemples i problemes són redactats per a aquesta pràctica, amb traçabilitat al concepte escolar; no es presenten com si fossin preguntes anunciades pel col·legi.

## 2. Cobertura font → localització → concepte → activitat

La taula següent resumeix la revisió visual. La traçabilitat específica dels **180 ítems** és a `inventari.json` i als camps `source`, `objective`, `theory` de `bank.json`. `coverage.json` conserva les 16 fitxes de revisió.

| Original | Localització revisada | Concepte | Apartat | Exercicis/activitat |
|---|---|---|---|---|
| Image (1)(1).jfif | Foto única · El pla de treball | Delimitació dels set temes | Tots els apartats i simulacre | 180 ítems; quotes 12+12+6 |
| Image (2)(1).jfif | Múltiples · pàgina fotografiada | Múltiples, zero, seqüències i relacions | multiples | mates-001–012 |
| Image (3)(1).jfif | Divisors · girada per llegir-la | Divisió exacta, divisor i múltiple | divisors | mates-013–024 |
| Image (4)(1).jfif | Múltiples · segona presa girada | Solapament amb foto 2; Descobreix/Aprèn/Practica | multiples | mates-001–012 i taller de salts |
| Image (5)(1).jfif | Criteris · girada | 2/3/5/9/10, residu | criteris | mates-025–048 |
| Image (6)(1).jfif | Tots els divisors · girada | Parelles, exemple 15, aturada del mètode | tots-divisors | mates-049–060 |
| Image (7)(1).jfif | Primers i compostos · girada | Definició i cas 1 explicitat a la web | primers | mates-061–070 |
| Image (8)(1).jfif | Girs · girada | Brúixola, centre, mida/forma, 70° | girs | mates-151–165 i brúixola |
| Image (9)(1).jfif | Simetries · girada | Plegament, eixos i quadrícula | simetries | mates-166–180 i mirall |
| problemas_ mcm_mcd_1.jfif | Aprèn · girada | Bosses d’un sol tipus, interpretació del m.c.d. | metode / repartiments | mates-097–112, 113–124, 138–150 |
| problemas_ mcm_mcd_2.jfif | Exercici 38 · rotació 180° | Cicles 8/12; context substituït per senyals | coincidencies | mates-130 i teoria; no medicació |
| problemas_ mcm_mcd_3.jfif | Exercicis 36–37 · rotació 180° | Torres, semàfors, rams, punts | metode / coincidencies / repartiments | mates-113–150 |
| TEORIA DIVISIBILITAT.pdf | p. 1 renderitzada | 4, factors primers, llistes i mètodes m.c.m./m.c.d. | criteris / factors / mcm / mcd | mates-034, 038, 046, 071–112; tallers |
| worksheet_175830.pdf | p. 1 renderitzada | Taula 2/3/5 i criteris simultanis | criteris | mates-031 i combinacions |
| worksheet_333518.pdf | p. 1–2 renderitzades | Selecció completa 2/3/5/9/10, taula | criteris | mates-025–029, 032 |
| worksheet_1263604.pdf | p. 1–2 renderitzades | 3/5/7/9 i taula amb nombres de diverses xifres | criteris | mates-030, 033; 7 per divisió explícita |


No s’inventen números de pàgina del llibre si no són visibles: es referencia la fotografia i l’apartat. Les fotos 2 i 4 se solapen; es documenten com dues preses, no com dos temes diferents. Els marges tallats o de pàgines veïnes no s’utilitzen per afegir continguts.

## 3. Banc editorial: 180 exercicis-base

**80 + 70 + 30**, amb identificadors estables `mates-001`–`mates-180` i revisió editorial 1. No són 180 preguntes de quatre opcions. Hi ha **122 activitats de producció (67,8%)**: nombres, llistes, taules, problemes amb unitat i figures. Les altres són 42 activitats d’una resposta i 16 de selecció múltiple real.

| Apartat | Nombre | Tria una | Marca totes | Llista | Taula | Problema | Figura | Total |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| multiples | 5 | 1 | 2 | 4 | 0 | 0 | 0 | 12 |
| divisors | 7 | 2 | 3 | 0 | 0 | 0 | 0 | 12 |
| criteris | 4 | 4 | 8 | 4 | 4 | 0 | 0 | 24 |
| tots-divisors | 4 | 2 | 0 | 6 | 0 | 0 | 0 | 12 |
| primers | 3 | 4 | 3 | 0 | 0 | 0 | 0 | 10 |
| factors | 2 | 2 | 0 | 6 | 0 | 0 | 0 | 10 |
| mcm | 10 | 3 | 0 | 3 | 0 | 0 | 0 | 16 |
| mcd | 10 | 2 | 0 | 4 | 0 | 0 | 0 | 16 |
| metode | 0 | 12 | 0 | 0 | 0 | 0 | 0 | 12 |
| coincidencies | 0 | 0 | 0 | 0 | 0 | 13 | 0 | 13 |
| repartiments | 0 | 0 | 0 | 0 | 0 | 13 | 0 | 13 |
| girs | 6 | 5 | 0 | 0 | 0 | 0 | 4 | 15 |
| simetries | 2 | 5 | 0 | 0 | 0 | 0 | 8 | 15 |
| **Total** | 53 | 42 | 16 | 27 | 4 | 26 | 12 | **180** |

La varietat inclou: recuperar un factor, distingir quocient/residu, construir seqüències amb o sense zero, limitar un interval i filtrar senars, comprovar un conjunt complet, trobar xifres amagades, completar criteris simultanis, llistes exhaustives, factors repetits, triar mètode amb justificació, calcular un total mínim, convertir-lo en nombre de capses/rondes, passar de durada a hora del dia, distingir mida i quantitat de paquets, girar vèrtexs i construir reflexos.

Hi ha sèries curtes de càlcul per consolidar un procediment, al costat d’activitats d’interpretació i verificació. Els distractors dels tests tenen una explicació específica. Les pistes aritmètiques s’han contextualitzat en les dades: guien l’operació sense mostrar el resultat. El banc és finit i determinista; no s’han afegit variants numèriques aleatòries ni exercicis obligatoris fora del temari.

### Mostres comprovades

1. **Zero i múltiples.** Sis primers múltiples de 3 incloent-hi 0: 0,3,6,9,12,15. Són sis nombres; 0 no s’accepta com a divisor.
2. **Llista completa.** Divisors de 36: 1,2,3,4,6,9,12,18,36. Les parelles 1×36, 2×18, 3×12, 4×9 i 6×6 expliquen per què el 6 només apareix una vegada.
3. **Criteris.** 2028 és divisible per 2,3,4; no per 5,9,10. Suma de xifres 12; últimes dues xifres 28; comprovació 2028:4=507.
4. **Primers.** 1 no és primer ni compost; 2 és l’únic primer parell; 21 és compost perquè 21=3×7, encara que sigui senar.
5. **Mètodes.** m.c.m.(6,8)=24; m.c.m.(12,18)=36; m.c.d.(12,18)=6; m.c.d.(10,15)=5. La teoria mostra llistes i factors primers, amb comprovació per divisió.
6. **Cicles.** Dos robots saluden cada 6 i 8 minuts, junts ara: la primera coincidència futura és als 24 minuts. Si es demanessin intervals del primer, serien 24:6=4 intervals, no 24.
7. **Paquets.** Amb 12 i 18 fitxes, el màxim de paquets idèntics és 6; cadascun té 2 i 3 fitxes. Si són bosses d’un sol color de mida màxima, el mateix m.c.d. representa 6 fitxes per bossa i dona 2 i 3 bosses.
8. **Gir real.** Triangle (1;1),(3;1),(1;2), gir 90° horari respecte d’O: (1;−1),(1;−3),(2;−1). Les distàncies entre vèrtexs es conserven.
9. **Reflex real.** Triangle (1;1),(3;1),(2;3), eix x=0: (−1;1),(−3;1),(−2;3). Els punts són igual de lluny de l’eix i conserven l’altura.

## 4. Teoria, composició i tallers

Cada apartat inclou descoberta, explicació completa, exemple resolt i comprovat, recordatori, confusió habitual, taller útil, minirepàs i pràctica contextual. Es mostra un apartat cada vegada, amb navegació clara i continuïtat dins de cada món; no s’ha eliminat contingut per fer-lo cabre en una targeta.

- **Laboratori dels nombres:** blau cobalt/turquesa i groc; fitxes, salts, factors i mosaic de criteris.
- **Repte de les coincidències:** taronja/coral amb verd de coincidència; rectes temporals i paquets.
- **Taller de girs i miralls:** violeta/magenta i blau; brúixola i quadrícules calculades.

S’aprofiten del disseny final de Medi les targetes amb relleu, capçaleres de món, jerarquia de passos, pista groga, correcció amable i accions destacades. La teoria i els exercicis també tenen identitat visual; no es limiten a la portada.

**10 modalitats de taller**, reutilitzades contextualment: salts de múltiples, constructor de divisors, laboratori de criteris, detector de primers, descomposició en factors, cicles, paquets, elecció de mètode, brúixola i mirall. No escriuen estadístiques d’intents.

- El constructor mostra els rectanglets i els sobrants reals.
- El laboratori explica quina xifra, suma o residu ha comprovat cada criteri.
- Els dos cicles tenen marques calculades i coincideixen exactament al m.c.m.
- Paquets mostra quocient i residu de tots dos colors i distingeix nombre de grups i contingut.
- La brúixola admet també 70°, amb sentit coherent.
- El mirall i els exercicis de geometria permeten afegir/treure vèrtexs per toc, o introduir x/y i utilitzar botons/teclat. No depenen d’arrossegar.

## 5. Correcció, modes i dades

`math.js` calcula cada resposta amb funcions pures. La UI no dona per bona una cadena perquè «s’hi assembla».

- **Nombres:** enters exactes, sense avaluar expressions de l’usuari. Formats com `1e3` o `1.000` es rebutgen amb missatge i no sumen intents.
- **Llistes:** ordre indiferent; comes, espais i × admesos. Els duplicats de divisors es demanen corregir sense penalitzar. En factors primers les repeticions són necessàries i es conserven.
- **Multiselecció:** es compara el conjunt complet. Una selecció parcial no és correcta; el feedback indica si sobra un candidat o en falta un.
- **Taules:** totes les caselles necessiten Sí/No. El feedback localitza la primera discrepància i comprova el residu.
- **Problemes:** valor numèric i unitat es comproven separadament. Un valor correcte amb unitat equivocada rep una explicació específica.
- **Geometria:** conjunt exacte de vèrtexs, independent de l’ordre d’introducció. Rotació i reflexió calculades, no dibuixos arbitraris.

La pràctica permet filtrar món, apartat, nivell i format; rondes de 8/12/20 o més curtes si el filtre té menys ítems. Novetats i errors antics tenen prioritat. El minirepàs és de 5 activitats. Cada resposta exigeix confirmar-la abans de corregir; el doble enviament no suma intents.

Els errors pendents guarden ID/versió, concepte, resposta, explicació i antiguitat; un encert posterior els resol. Els missatges que atribueixen una confusió concreta només ho fan si el valor observat la identifica (p. ex. escriure el m.c.d. quan cal el m.c.m., usar l’altre eix o el sentit de gir contrari). Altrament, es diu què no compleix la resposta sense inventar què havia pensat l’alumna.

El simulacre conté **30 activitats: 12+12+6**, amb els 13 apartats representats i garanties de nombres, llistes, taula, problemes i construcció geomètrica. No té pistes ni correcció fins al final. Cada activitat pesa igual i la nota és encerts/30×10. La distribució és una decisió didàctica del preparatori, no un anunci del col·legi. El resultat mostra nota, encerts, desglossament per mons i formats, conceptes a revisar, resposta enviada, explicació específica, passos i figura quan correspon. Els resultats baixos conviden a continuar i no mostren una celebració d’èxit alt.

La clau nova és **`mates6e_div_v1`**. La sessió desa ID, versió, ordre d’opcions, esborrany i respostes. S’han validat dades corruptes, recàrrega, represa, doble confirmació i final idempotent. Les sessions incompatibles s’arxiven per evitar corregir un examen antic amb un banc nou; els resultats conserven una instantània de la pregunta, passos i solució. L’historial manté les últimes 60 sessions. El reinici confirmat només reinicia Mates.

No s’ha llegit ni migrat el progrés real de l’alumna. Les proves de navegador utilitzen contextos aïllats i dades simulades.

## 6. Incidències escolars i ajustos editorials

1. **Infografia: «a : b = 0».** Es corregeix a **residu 0 amb divisor diferent de 0**; el quocient no ha de ser zero. Es fa servir també la identitat dividend=divisor×quocient+residu.
2. **Múltiples i zero.** El llibre inclou el 0; la infografia mostra una llista de positius. La web explicita a cada seqüència si inclou zero; per m.c.m. es demana el primer comú positiu.
3. **Primers/compostos.** La frase simplificada del llibre «compost quan no és primer» es completa amb l’excepció de l’1 i amb la definició «més de dos divisors».
4. **Divisibilitat per 7.** La fitxa la pregunta, però no ensenya un criteri mental particular. Es resol només amb divisió o múltiples.
5. **Mètode de problemes.** No es copia com a regla universal «si és gran, m.c.d.; si és petit, m.c.m.»: primer s’identifica si el resultat és divisor o múltiple i què representa.
6. **Bosses versus lots.** L’exemple del llibre fa bosses d’un sol tipus: el m.c.d. és la mida per bossa. La web contrasta aquest cas amb el màxim de lots idèntics amb tots dos materials.
7. **Context de medicació.** S’ha comprovat la foto, però els nous problemes utilitzen senyals i rellotges hipotètics; no s’introdueixen recomanacions de medicació ni de salut.
8. **Codificació.** La primera revisió visual va detectar accents mal codificats en el banc generat. S’ha corregit la font UTF-8 i afegit una comprovació que rebutja els patrons de text deformat. Les captures finals s’han regenerat.

## 7. Validacions executades

| Capa | Resultat real |
|---|---|
| `validate.cjs` | PASS: 180 IDs/enunciats, claus/alternatives, set formats, teoria/traçabilitat, casos límit i 1.000 simulacres 12+12+6 sense duplicats, amb 13 apartats i diversitat de formats |
| Funcions pures JS | Divisors/primers/factors per 1–250, m.c.d./m.c.m. amb segons nombres 1–50, criteris 2/3/4/5/9/10 per 0–10.000, 7 per divisió, conjunts parcials, llistes reordenades, factors repetits, zero/1/2, quadrats, parelles iguals/coprimes i un múltiple de l’altre |
| `verify_independent.py` | PASS: les 180 claus recalculades sense importar el generador ni JS; divisors per enumeració, mínim múltiple per cerca, girs per quarts enters, distàncies i reflexos; originals exclosos |
| Estat/versionat | PASS: arxiu de sessió incompatible, historial conservat, esborrany geomètric corrupte descartat, final idempotent, ordre persistent i dades invàlides |
| `browser-test.cjs` | PASS: servidor efímer amb `/repasosg/` i arrel, dos exàmens, 13 teories completes, set formats, filtres i rondes curtes, tallers, pistes/controls, format, encert/error, repàs, recàrrega, doble enviament, simulacre de 29/30 amb 9,7, revisió, historial, reinici aïllat i JSON corrupte |
| `editorial-browser-test.cjs` | PASS: 180 encerts i 180 errors per controls DOM, amb passos, solució exacta, feedback específic i un sol intent per resposta |
| Regressió Medi | PASS: `medi_6e_cos_huma/validate.cjs` i `browser-test.cjs`, inclosa reproducció dels tres vídeos, simulacre 30/30, historial, navegació i persistència |
| Protecció de fitxers | PASS: SHA-256 dels 55 fitxers protegits de Medi i preparatoris anteriors, byte a byte. Cap fitxer dins de `medi_6e_cos_huma/` modificat |
| Sintaxi i espais | Comprovació de sintaxi JS i `git diff --check` sense incidències finals |

El filtre combinat de criteris+nivell3+llista produeix 4 activitats sense duplicar-ne cap quan se’n demanen 20. La taula de sis criteris s’ha comprovat especialment en mòbil. La prova de geometria utilitza els camps i botons reals, i la del mirall comprova el reflex exacte.

**51 captures autèntiques** a 390, 768 i 1280 px; també 844×390 i 1024×768 sense desbordament del document. S’han revisat totes les captures en fulls de contacte i s’han obert a mida completa les pantalles representatives de teoria, problemes, geometria, taules, error i resultats. No hi ha errors JavaScript/404 ni peticions a `material_mates_6e/`.

Contrast calculat de colors plans: botons primaris dels tres mons 5,80–7,24:1 sobre blanc; text principal de passos 8,83:1; recordatori 6,60:1; confusions 6,70:1; comprovacions Sí/No 6,33–6,60:1. Focus visible, controls grans, etiquetes i llegendes; la taula de sis criteris conserva selects de 44 px i pot desplaçar-se dins del seu contenidor si cal. Es respecta `prefers-reduced-motion` i no hi ha animacions contínues ni sons.

No s’afirma una auditoria exhaustiva WCAG ni proves amb lector de pantalla, dispositius físics, Safari o iOS.

## 8. Captures per revisar en local

| Pantalla | 390 px | 768 px | 1280 px |
|---|---|---|---|
| Mapa | [Veure](../tmp/mates-review/qa/mapa-390.png) | [Veure](../tmp/mates-review/qa/mapa-768.png) | [Veure](../tmp/mates-review/qa/mapa-1280.png) |
| Teoria del món 1 | [Veure](../tmp/mates-review/qa/teoria-multiples-390.png) | [Veure](../tmp/mates-review/qa/teoria-multiples-768.png) | [Veure](../tmp/mates-review/qa/teoria-multiples-1280.png) |
| Teoria del món 2 | [Veure](../tmp/mates-review/qa/teoria-mcm-390.png) | [Veure](../tmp/mates-review/qa/teoria-mcm-768.png) | [Veure](../tmp/mates-review/qa/teoria-mcm-1280.png) |
| Teoria del món 3 | [Veure](../tmp/mates-review/qa/teoria-girs-390.png) | [Veure](../tmp/mates-review/qa/teoria-girs-768.png) | [Veure](../tmp/mates-review/qa/teoria-girs-1280.png) |
| Criteris | [Veure](../tmp/mates-review/qa/teoria-criteris-390.png) | [Veure](../tmp/mates-review/qa/teoria-criteris-768.png) | [Veure](../tmp/mates-review/qa/teoria-criteris-1280.png) |
| Problema m.c.m. | [Veure](../tmp/mates-review/qa/problema-mcm-390.png) | [Veure](../tmp/mates-review/qa/problema-mcm-768.png) | [Veure](../tmp/mates-review/qa/problema-mcm-1280.png) |
| Problema m.c.d. | [Veure](../tmp/mates-review/qa/problema-mcd-390.png) | [Veure](../tmp/mates-review/qa/problema-mcd-768.png) | [Veure](../tmp/mates-review/qa/problema-mcd-1280.png) |
| Gir geomètric | [Veure](../tmp/mates-review/qa/gir-390.png) | [Veure](../tmp/mates-review/qa/gir-768.png) | [Veure](../tmp/mates-review/qa/gir-1280.png) |
| Reflex geomètric | [Veure](../tmp/mates-review/qa/simetria-390.png) | [Veure](../tmp/mates-review/qa/simetria-768.png) | [Veure](../tmp/mates-review/qa/simetria-1280.png) |
| Multiselecció | [Veure](../tmp/mates-review/qa/multiseleccio-390.png) | [Veure](../tmp/mates-review/qa/multiseleccio-768.png) | [Veure](../tmp/mates-review/qa/multiseleccio-1280.png) |
| Taula | [Veure](../tmp/mates-review/qa/taula-390.png) | [Veure](../tmp/mates-review/qa/taula-768.png) | [Veure](../tmp/mates-review/qa/taula-1280.png) |
| Taula de sis criteris | [Veure](../tmp/mates-review/qa/taula-sis-criteris-390.png) | [Veure](../tmp/mates-review/qa/taula-sis-criteris-768.png) | [Veure](../tmp/mates-review/qa/taula-sis-criteris-1280.png) |
| Encert i passos | [Veure](../tmp/mates-review/qa/encert-390.png) | [Veure](../tmp/mates-review/qa/encert-768.png) | [Veure](../tmp/mates-review/qa/encert-1280.png) |
| Error i passos | [Veure](../tmp/mates-review/qa/error-390.png) | [Veure](../tmp/mates-review/qa/error-768.png) | [Veure](../tmp/mates-review/qa/error-1280.png) |
| Resultats del simulacre | [Veure](../tmp/mates-review/qa/resultats-simulacre-390.png) | [Veure](../tmp/mates-review/qa/resultats-simulacre-768.png) | [Veure](../tmp/mates-review/qa/resultats-simulacre-1280.png) |
| Portal amb dos exàmens | [Veure](../tmp/mates-review/qa/portal-390.png) | [Veure](../tmp/mates-review/qa/portal-768.png) | [Veure](../tmp/mates-review/qa/portal-1280.png) |

## 9. Fitxers modificats i recursos

Fora del nou mòdul, només:

- `index.html`: afegeix Matemàtiques al costat de Medi a «Pròxims exàmens», nou accés a la targeta de Mates, cerca de l’assistent i resum de Mates separat. Conserva els enllaços i totes les claus dels preparatoris existents.
- `.gitignore`: protegeix `material_mates_6e/` i `tmp/mates-review/`.

Fitxers nous de producció: `index.html`, `styles.css`, `content.js`, `bank.js`, `math.js`, `engine.js`, `visuals.js`, `geometry.js`, `activities.js`, `practice.js` i `app.js`, dins de `mates_6e_divisibilitat/`.

Fonts editorials/traçabilitat: `build_bank.py`, `bank.json`, `inventari.json`, `coverage.json`, `source-review.md`. Verificació: `validate.cjs`, `verify_independent.py`, `browser-test.cjs`, `editorial-browser-test.cjs`, `protection.json`. Documentació: `README.md` i aquest informe.

**Disponibilitat de mitjans:** tots els esquemes matemàtics es calculen localment amb SVG/HTML. No hi ha recursos obligatoris externs, fotos, PDF ni vídeos al nou mòdul. La teoria no depèn de permisos o de l’accés als originals. No s’han afegit dependències de runtime.

**Originals exclosos de Git (els 16):**

- `Image (1)(1).jfif` a `Image (9)(1).jfif` (nou fotografies).
- `problemas_ mcm_mcd_1.jfif`, `problemas_ mcm_mcd_2.jfif`, `problemas_ mcm_mcd_3.jfif`.
- `TEORIA DIVISIBILITAT.pdf`.
- `worksheet_175830.pdf`, `worksheet_333518.pdf`, `worksheet_1263604.pdf`.

Tots romanen únicament a `material_mates_6e/`. Les còpies orientades/renderitzades i captures són temporals locals ignorats. No s’ha incorporat ni publicat cap pàgina o fotografia escolar.

## 10. Límits i següent pas

El contingut, la implementació i les validacions sol·licitades estan completats en local. Queda la revisió familiar del contingut i l’experiència; opcionalment, la prova en una tablet física i una revisió específica amb lector de pantalla.

El progrés es guarda per navegador/origen: les dades de localhost no es transfereixen automàticament al domini públic ni a un altre dispositiu. No hi ha compte, backend, service worker ni sincronització. Nivells de dificultat editorials, no calibrats amb alumnes. Es conserva un historial de 60 sessions, no un registre il·limitat.

**No s’ha fet commit, push, desplegament, publicació ni cap canvi en remots. Medi continua intacte i visible.**
