# Missió Nutrició · Medi 6è

> Publicació autoritzada per l’usuari després de la revisió local. L’entrega inclou la portada i aquest mòdul amb els vuit assets revisats. Els PDF i els altres originals de `material_medi_6e_nutricio/`, les captures i els fitxers locals aliens a aquesta missió queden fora del commit. Les referències següents a l’estat local documenten la fase prèvia a l’autorització.

16 de novembre de 2026. Implementació local completada. Sense commit, push ni desplegament.

## Resultat

Nou preparatori independent a `medi_6e_nutricio/index.html`, amb tres mons: aparell digestiu, sistema excretor i aparell circulatori. La interfície i els continguts són en català.

Cada tema mostra primer el PNG original ampliable i, després, sis apartats explicatius basats en els PDF. Inclou idees clau, recorreguts escrits, preguntes d’autoexplicació amb resposta desplegable i marques de lectura persistents. Llegir no es presenta com a demostració de domini.

Hi ha dues pràctiques diferenciades:

| Tema | Preguntes dels PDF | Preguntes dels PNG | Total |
| --- | ---: | ---: | ---: |
| Digestiu | 48 | 12 | 60 |
| Excretor | 48 | 12 | 60 |
| Circulatori | 48 | 12 | 60 |
| Total | 144 | 36 | 180 |

Els 180 enunciats són diferents. Els conceptes dels PDF es treballen amb un enunciat de record i un altre d’aplicació; no s’afirma que siguin 180 conceptes diferents. Les preguntes s’han redactat explícitament al generador editorial. Les alternatives contrasten conceptes del mateix apartat i cada opció té una explicació del seu significat; la correcció combina aquesta explicació amb la del concepte demanat. La interfície barreja preguntes i posicions de resposta.

La pràctica incorpora pistes, correcció immediata i repàs dels errors. El simulacre tria 30 preguntes dels PDF, 10 per tema, cobrint els sis apartats de cadascun. No mostra pistes ni solucions durant l’examen: corregeix al final, amb nota, resultats per tema i explicacions. Es pot desar i reprendre una pregunta ja contestada sense comptar dues vegades l’intent.

## Completar els dibuixos

S’han reutilitzat les cinc imatges JPG proporcionades. Les etiquetes estan ocultes amb màscares numerades, sense redibuixar l’anatomia ni alterar els JPEG. Cada número té un selector de noms, una pista funcional i correcció. El botó «On és?» amplia el dibuix i destaca el punt corresponent, útil per consultar-lo des d’un selector situat més avall en mòbil. L’ampliació manté tapats els noms.

| Activitat | Punts |
| --- | ---: |
| Parts del digestiu: boca, faringe, esòfag, fetge, estómac, pàncrees, intestí prim, intestí gros i anus | 9 |
| Recorregut dels aliments: boca, esòfag, estómac, intestí prim i intestí gros | 5 |
| Parts de l’urinari: ronyons, urèters, bufeta urinària i uretra | 4 |
| Recorregut de l’orina: ronyons, urèters, bufeta i uretra | 4 |
| Sang: plasma, glòbul blanc, glòbul vermell i plaquetes | 4 |
| Total de punts practicables | 26 |

En els recorreguts es tapen les paraules seleccionades; es conserva la resta del text com a context per comprendre la funció. A la sang s’oculta del camp visible la llegenda lateral per no mostrar les solucions al costat. El repàs d’errors de cada dibuix només torna a preguntar els punts pendents.

La revisió visual va corregir diverses màscares dels recorreguts que inicialment deixaven veure part de les paraules o envaïen la línia següent. També es va corregir l’alçada de les imatges PNG perquè mantinguessin la proporció en mòbil sense grans espais blancs. Les captures finals i les proves corresponen a les versions corregides.

## Fonts revisades

S’han llegit íntegrament els tres PDF i inspeccionat les seves 12 pàgines renderitzades. Les pàgines del circulatori contenen el text incrustat com a imatge: s’han revisat visualment, no només per extracció de text.

| PDF | Pàgines | Cobertura |
| --- | --- | --- |
| `Aparell-digestiu.pdf` | 1–8 | Digestió mecànica i química; boca, dents, llengua i saliva; tub digestiu; intestins i absorció; glàndules i sucs; hàbits de cura |
| `SISTEMA EXCRETOR.pdf` | 1–2 | Excreció, transport de residus, aparell respiratori, pell, sudoració, ronyons, bufeta i conductes urinaris |
| `APARELL CIRCULATORI.pdf` | 1–2 | Transport, composició de la sang, funcions dels components, cor, moviments cardíacs i vasos |

Les tres fitxes PNG també s’han revisat. Els noms «circulació pulmonar» i «circulació general» i els seus recorreguts s’identifiquen com a informació del PNG, complementària al PDF. La comparació entre excrements i orina es recolza també en la pàgina 6 del PDF digestiu, indicada a la teoria.

No es converteixen en preguntes de memorització les xifres de longitud intestinal, el temps aproximat a l’estómac ni el nombre de dents. No es reprodueix el mapa de zones de sabors de la llengua ni la regla d’espera fixa abans del bany que apareixen al PDF digestiu. El text conserva els quatre sabors que treballen els apunts sense afirmar que siguin els únics. Aquestes decisions eviten presentar esquemes simplificats o consells personals com a normes universals; no s’han afegit continguts clínics nous.

## Tractament dels originals

Els 11 fitxers originals es conserven en una còpia local a `material_medi_6e_nutricio/`, exclosa de Git. `fonts.json` registra els noms, mides i empremtes. No s’ha modificat cap fitxer de Downloads.

La web utilitza només vuit assets:

- `assets/digestiu-resum.webp`, `assets/excretor-resum.webp` i `assets/circulatori-resum.webp`: versions sense pèrdua dels PNG. La comparació de píxels RGB i dimensions és exacta.
- `assets/digestiu-parts.jpg` ← `completar_aparell_digestiu.JPG`.
- `assets/digestiu-recorregut.jpg` ← `completar_recurregut_dels_alimentsJPG.JPG`.
- `assets/excretor-parts.jpg` ← `completar_excretor.JPG`.
- `assets/excretor-recorregut.jpg` ← `completar_excretor_recurregut_de_lorina.JPG`.
- `assets/circulatori-sang.jpg` ← `completar_aparell_circulatori_la_sang.JPG`.

Els cinc JPEG són còpies idèntiques byte a byte. Els retalls visibles i les màscares es defineixen a la interfície SVG. No hi ha PDF, vídeos ni altres originals complets dins del nou mòdul. El navegador no demana els PDF per executar-lo.

## Portada i conservació del progrés

«Pròxims exàmens» mostra només Missió Nutrició. Medi anterior i Matemàtiques continuen al «Tauler de missions», amb enllaços propis. El cercador/xat recomana la nova missió per digestiu, excretor, circulatori i pròxim examen. El resum de progrés de la portada està identificat com a Missió Nutrició i només llegeix la seva clau.

La clau nova és `medi6e_nutricio_v1`: preguntes, intents, encerts, errors, punts dels dibuixos, lectura, historial de simulacres, sessió en curs i última ronda acabada. Les marques de lectura no sumen encerts. Un encert posterior elimina l’estat pendent d’error, però conserva els intents anteriors.

Les claus i els fitxers de Medi anterior, les seves fitxes noves, Matemàtiques i els altres preparatoris no es modifiquen. El reinici només afecta la nova clau, demana confirmació i també s’ha provat cancel·lant-lo. Les dades recuperades es validen; un JSON malformat permet continuar sense tocar altres cursos.

## Fitxers

Modificats fora del mòdul:

- `index.html`: pròxim examen, tauler, cerca/xat i resum de progrés.
- `.gitignore`: exclusió de la carpeta nova d’originals.

Creats a `medi_6e_nutricio/`:

- `index.html`, `styles.css`, `app.js`: navegació, teoria, visors, pràctica, dibuixos, resultats i progrés.
- `data.js`: teoria, metadades i coordenades de les màscares.
- `build_questions.py`, `questions.js`: font editorial i banc regenerable determinista.
- `engine.js`: selecció de simulacres, barreja, sanejament de dades i registre d’intents.
- `fonts.json`, `protection.json`: inventari dels originals i empremtes dels 146 fitxers anteriors conservats.
- `validate.cjs`, `browser-test.cjs`, `verify_assets.py`: validacions.
- Els vuit assets enumerats i aquest informe.

## Proves executades

Han passat:

1. `node medi_6e_nutricio/validate.cjs`: 180 enunciats i identificadors diferents; repartiment 48+12 per tema; 18 apartats; opcions, pistes i explicacions; 26 punts i límits de màscares; 1.000 simulacres de 30 preguntes, amb 10 per tema i cobertura dels sis apartats; dades corruptes; sessió; originals i 146 fitxers preservats; portada i exclusió dels originals; generació reproduïble del banc.
2. `python medi_6e_nutricio/verify_assets.py`: tres WebP amb dimensions i píxels RGB preservats, cinc JPEG idèntics i cap PDF al mòdul.
3. `node medi_6e_nutricio/browser-test.cjs`: Chromium a 390, 768 i 1.280 píxels. Mapa, tres teories i cinc dibuixos; visors, ampliació, Escape i accés de cada selector al punt destacat amb teclat; lectures persistents; 26 noms amb error i posterior encert, validació de buits i doble correcció; 720 correccions de preguntes (180 × 4), correspondència d’opcions i feedback; pràctica PDF/PNG separada; simulacre amb 29/30, correcció diferida, represa d’una pregunta contestada i resultat persistent; repàs d’errors; portada/xat; reinici acceptat/cancel·lat, dades corruptes i preferència de moviment reduït. Les claus dels altres preparatoris es mantenen byte a byte. Sense errors JavaScript, recursos 404, desbordament horitzontal ni peticions de PDF originals.
4. `node medi_6e_cos_huma/validate.cjs`: banc anterior de 180 preguntes i simulacres equilibrats intactes.
5. `node mates_6e_divisibilitat/validate.cjs`: banc de 180 exercicis i validacions de Matemàtiques intactes.
6. Sintaxi dels scripts nous i `git diff --check`.

Hi ha 40 captures finals a `../tmp/medi-review/nutricio/`, amb una galeria `captures.html`. S’han inspeccionat els cinc dibuixos en mòbil, els recorreguts corregits, el mapa d’escriptori, la teoria i la correcció de preguntes. Les captures dels PDF originals i les quadrícules de treball són artefactes locals, no assets de producció.

## Estat de l’entrega

Preparat per revisar a `http://127.0.0.1:8765/medi_6e_nutricio/index.html`. No està publicat i no s’han fet operacions de Git d’escriptura. No s’ha provat en Safari/iOS ni en un mòbil físic; la revisió responsive és amb Chromium. Queden la revisió familiar del contingut i l’autorització de publicació.
