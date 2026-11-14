# Revisió dels nous resums de la professora

> Publicació autoritzada per l’usuari després de la revisió local. Aquesta entrega incorpora només els sis assets revisats, la interfície complementària, les dades i les validacions. Els sis originals de `resums/`, els materials escolars, els ZIP i les captures locals queden fora del commit. Les referències següents a l’estat local documenten la revisió prèvia a aquesta autorització.

Data: 14 de novembre de 2026. Implementació local, sense commit, push ni desplegament.

## Resultat

Els tres blocs de teoria incorporen la fitxa original corresponent, ampliable i acompanyada d’una transcripció accessible en català. Una nova entrada «Fitxes noves» permet estudiar-les, completar els dibuixos, relacionar noms, practicar preguntes i repassar errors.

S’han afegit **36 preguntes complementàries (12 per tema)**, amb quatre opcions, pista, explicació de la resposta i comentari específic de cada alternativa incorrecta. Les opcions i l’ordre de les preguntes es barregen. Cada pregunta identifica la part del resum de què prové.

Hi ha **26 noms per practicar** sobre els dibuixos reals:

- Respiratori (8): fosses nasals, faringe, laringe, tràquea, bronquis, bronquíols, alvèols i pulmons.
- Locomotor (14): crani, mandíbula, clavícula, costelles, estèrnum, húmer, columna vertebral, radi, cúbit, pelvis, fèmur, ròtula, peroné i tíbia.
- Nerviós (4): dendrites, cos cel·lular, terminacions i axó.

L’activitat ofereix escriptura i selecció de noms, en rondes de fins a quatre etiquetes. Els noms originals queden tapats amb màscares numerades sobre el dibuix; també continuen tapats en ampliar-lo. Es poden consultar pistes i tornar a practicar només els errors. S’accepten diferències de majúscules i accents i els sinònims previstos. Les respostes buides no compten com a intent.

## Fonts i imatges

S’han revisat visualment els sis originals de `resums/`:

| Original | Ús i asset local |
| --- | --- |
| `aparell respiratori.png` | Fitxa sencera: `assets/resums/respiratori-resum.webp` |
| `aparell locomotor.png` | Fitxa sencera: `assets/resums/locomotor-resum.webp` |
| `sistema nerviós.png` | Fitxa sencera: `assets/resums/nervios-resum.webp` |
| `aparell_respiratori_para_preguntas.JPG` | Dibuix: `assets/resums/respiratori-dibuix.jpg` |
| `aparell_locomotor_para_preguntasJPG.JPG` | Esquelet: `assets/resums/locomotor-dibuix.jpg` |
| `sistema_nervios_para_preguntas.JPG` | Panell de la neurona: `assets/resums/nervios-dibuix.jpg` |

No s’han redibuixat les il·lustracions. Els tres WebP conserven les dimensions i els píxels RGB dels PNG originals, amb menys pes. Els tres JPEG són còpies idèntiques byte a byte. El retall visible i les màscares es defineixen en SVG a la interfície, sense alterar els originals. El dibuix nerviós mostra el panell de la neurona; els exemples de respostes es treballen amb la fitxa completa i les preguntes.

Els originals facilitats a Downloads no existien a les rutes indicades; s’han utilitzat els sis fitxers presents a la carpeta del projecte. No s’han afegit PDF ni vídeos. Les sis imatges derivades són les úniques fonts escolars noves referenciades per la web.

## Criteri pedagògic i conservació

El nou banc treballa la respiració, el recorregut de l’aire, la ventilació i l’intercanvi de gasos; ossos, músculs, articulacions i unions; i sistema nerviós, neurona i respostes voluntàries i reflexes. Aclareix que una resposta reflexa també és involuntària. Les preguntes noves sobre músculs i tendons provenen de la nova fitxa; no s’ha reclassificat ni reescrit el banc anterior.

Les **180 preguntes anteriors**, els simulacres de 30 preguntes i la seva pràctica i puntuació es conserven. El nou banc és complementari i no entra als simulacres antics. Els 62 elements nous (36 preguntes i 26 noms) guarden intents, encerts i errors amb la clau independent `medi6e_resums_v1`. El progrés anterior de Medi i Matemàtiques no es migra ni es modifica.

La teoria existent, les il·lustracions anteriors i els vídeos es mantenen; únicament s’hi afegeix el bloc dels nous resums. No s’ha modificat Matemàtiques ni els altres preparatoris.

## Fitxers

Modificats:

- `index.html`: càrrega dels dos scripts i entrada de navegació.
- `app.js`: integració del bloc de teoria, accés des del mapa i nova ruta.
- `styles.css`: estils dels resums, activitats, formularis i ampliacions.

Creats:

- `resums-data.js`: fonts, transcripcions, etiquetes, pistes i 36 preguntes.
- `resums-escolars.js`: interfície i lògica de la pràctica complementària.
- Els sis assets descrits a la taula.
- `resums-test.cjs`, `resums-browser-test.cjs` i `verify_resums_assets.py`: validacions.
- `resums-protection.json`: empremtes de 133 fitxers protegits, inclosos els originals.
- Aquest informe.

Les captures i la galeria són artefactes locals de revisió a `../tmp/medi-review/resums/`; no són recursos de producció.

## Validacions executades

Totes les comprovacions següents han passat:

- `node medi_6e_cos_huma/validate.cjs`: banc antic de 180 preguntes i 1.000 simulacres.
- `node medi_6e_cos_huma/browser-test.cjs`: regressió de navegació, progrés, simulacre 30/30, vídeos i reinici.
- `node medi_6e_cos_huma/resums-test.cjs`: 36 preguntes, repartiment 12/tema, 26 noms i màscares, pistes, explicacions, normalització i sinònims, dades corruptes i empremtes dels 133 fitxers. Verifica també que els blocs antics de pràctica, puntuació i repàs d’errors no han canviat.
- `python medi_6e_cos_huma/verify_resums_assets.py`: fidelitat dels píxels RGB, identitat dels JPEG, dimensions i límits de les màscares.
- `node medi_6e_cos_huma/resums-browser-test.cjs`: Chromium amb amplades de 390, 768 i 1.280 píxels; ampliacions i Escape; noms tapats; escriptura i selecció; validació de buits; protecció contra doble correcció i entrada HTML; pistes i explicacions; totes les etiquetes; cada pregunta fallada i corregida; persistència i neteja d’errors; recuperació de dades corruptes; 100 simulacres antics; preservació de les claus anteriors; absència d’errors JavaScript, recursos inexistents i desbordament horitzontal. Genera 45 captures.
- `node mates_6e_divisibilitat/validate.cjs`: les 180 preguntes de Matemàtiques es conserven.
- Comprovació de sintaxi dels scripts modificats i nous, i `git diff --check`.

La revisió visual de captures va detectar i corregir una limitació global que empetitia l’esquelet i dos rètols de la neurona que inicialment no quedaven ben coberts. Les captures finals dels tres dibuixos s’han inspeccionat després de corregir-los. La galeria és `../tmp/medi-review/resums/captures.html`.

No s’han executat com a criteri d’acceptació les auditories antigues que exigeixen una empremta exacta de tota la interfície de teoria: aquesta ampliació la modifica expressament. La protecció del contingut i de la lògica antiga es comprova amb les verificacions específiques anteriors.

## Estat i límits

Preparat per revisar en local. No està publicat. La validació responsive és amb Chromium automatitzat i captures; no substitueix una prova en un telèfon físic ni una sessió amb l’alumna. Es conserva la resolució original dels dibuixos, sense inventar detalls que no hi apareixen.
