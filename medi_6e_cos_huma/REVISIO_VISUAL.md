# Segona revisió: recursos visuals dels materials originals

S'han substituït tots els esquemes didàctics creats expressament per a la primera versió. La teoria textual, el banc de 180 preguntes, els simulacres, la persistència, les activitats i la navegació es mantenen.

## Esquemes propis retirats

- Camí de l'aire amb caixes HTML i fletxes.
- Comparació d'inspiració/expiració dibuixada en SVG.
- Doble circuit de caixes per a O₂ i CO₂.
- Dibuix SVG d'os, cartílag, articulació, lligament i tendó.
- Cadena visual d'estímul, receptor, nervis, SNC i múscul.
- Cadena visual de les parts de la neurona.

No s'ha mantingut cap d'aquests esquemes com a excepció. Es conserva l'activitat interactiva «Reconstrueix el recorregut», amb la mateixa lògica, i la petita icona decorativa de pulmons de la capçalera/mapa: no són làmines d'estudi.

## Selecció i procedència

13 imatges locals WebP, 738,8 KiB en total: nou retalls de les fitxes escolars i quatre de la guia de suport. Els originals no s'han modificat. No s'han copiat PDF complets, pàgines senceres, presentacions ni vídeos nous.

| Fitxer dins `assets/teoria/` | Font | Pàgina | Ús |
|---|---|---:|---|
| `respiratori-parts.webp` | APARELL RESPIRATORI.pdf | 1 | Recorregut i parts de l'aparell |
| `respiratori-moviments.webp` | APARELL RESPIRATORI.pdf | 2 | Comparació original d'inspiració i expiració |
| `respiratori-alveols.webp` | APARELL RESPIRATORI.pdf | 2 | Alvèols, vasos i intercanvi de gasos |
| `locomotor-medulla-ossia.webp` | APARELL LOCOMOTOR.pdf | 1 | Ossos i medul·la òssia |
| `locomotor-esquelet.webp` | El_Cuaderno_Secreto_de_Súper_Anatomía.pdf | 5 | Figura de l'esquelet, sense la llista de noms en castellà |
| `locomotor-musculatura.webp` | El_Cuaderno_Secreto_de_Súper_Anatomía.pdf | 11 | Musculatura anterior i posterior, retall sense els rètols en castellà |
| `locomotor-articulacio.webp` | El_Cuaderno_Secreto_de_Súper_Anatomía.pdf | 8 | Detall de cartílag i lligaments, sense els textos auxiliars |
| `locomotor-tendo.webp` | El_Cuaderno_Secreto_de_Súper_Anatomía.pdf | 12 | Detall de la inserció múscul-tendó-os; ampliació |
| `nervios-voluntaria.webp` | SISTEMA NERVIÓS.pdf | 2 | Fotografies dels exemples voluntaris de la fitxa |
| `nervios-reflexa.webp` | SISTEMA NERVIÓS.pdf | 2 | Fotografia del reflex de tancar els ulls davant l'aigua |
| `nervios-neurona.webp` | SISTEMA NERVIÓS.pdf | 3 | Neurona i rètols originals en català |
| `nervios-central.webp` | SISTEMA NERVIÓS.pdf | 3 | Encèfal, parts i medul·la espinal |
| `nervios-nervi.webp` | SISTEMA NERVIÓS.pdf | 4 | Nervi, neurona i fibra muscular |

S'han tornat a comparar aquests recursos amb la guia respiratòria, les làmines de suport i la presentació ja revisades a la primera fase. Per al sistema nerviós s'ha prioritzat la fitxa en català davant de la presentació en castellà. No s'ha reutilitzat la infografia amb el rètol erroni «Sema» ni s'han necessitat fotogrames de vídeo.

Les respostes voluntàries/reflexes s'acompanyen dels exemples fotogràfics de la fitxa. La connexió entre estímul, medul·la i resposta continua explicada al text i a l'activitat, sense afegir un circuit anatòmic nou.

## Tractament i integració

Retalls directes, rasterització del fragment i compressió WebP de qualitat 87. Sense IA generativa, redibuix, canvi de fletxes, canvi d'anatomia ni rètols inventats. Els fragments de les guies en castellà es limiten a les il·lustracions; els títols, peus, alternatives accessibles i controls afegits són en català.

La comparació respiratòria conserva les dues figures juntes per evitar tallar els rètols compartits de pulmons i diafragma. La qualitat de les imatges rasteritzades està limitada per la resolució dels originals; no s'ha simulat detall inexistent.

Les imatges apareixen dins la targeta del concepte corresponent. Càrrega diferida, dimensions reservades per evitar salts, graella doble només quan hi ha espai i apilament en mòbil. Cada imatge té un peu breu, pàgina d'origen i un visor accessible amb «Amplia la imatge», ajust a pantalla, mida original, desplaçament, botó de tancament i tecla Esc. El visor no requereix sortir de la pàgina ni descarregar la imatge.

## Fitxers de la revisió

Modificats: `app.js` (presentació de teoria i visor), `styles.css`, `index.html` (càrrega de les dades visuals) i `README.md` (documentació).

Creats: els 13 WebP de la taula, `assets/teoria/fonts.json` (font, pàgina, coordenades exactes de retall, dimensions i pes), `visuals.js` (dades de presentació), `extract_visuals.py` (extracció reproduïble), `visual-test.cjs`, `visual-integrity.json` (empremtes dels fitxers preservats) i aquest informe.

`questions.js`, `build_bank.py`, `content.js`, `engine.js` i `inventari.json` són idèntics byte a byte als de l'inici d'aquesta revisió, verificat amb SHA-256. No s'han canviat claus de localStorage ni funcions de pràctica, correcció, simulacre o progrés.

## Comprovacions

- `node medi_6e_cos_huma/validate.cjs`: PASS, 180 preguntes i 1.000 simulacres equilibrats.
- `node medi_6e_cos_huma/browser-test.cjs`: PASS, proves funcionals anteriors de navegació, pràctica, errors, persistència, simulacre i vídeos.
- `node medi_6e_cos_huma/visual-test.cjs`: PASS, 13 imatges reals, els tres mons a 390/768/1280 px, càrrega i dimensions, absència de scroll lateral, ampliació amb mida original i tancament amb Esc, cap esquema propi a la teoria, cap error JS/404 i fitxers preservats amb hash.
- Revisió visual dels retalls i captures de la teoria en mòbil/escriptori. Temporals i captures a `tmp/medi-review/`, exclosos de Git.

Per repetir l'extracció: `python medi_6e_cos_huma/extract_visuals.py`, amb PyMuPDF i Pillow. Per a la prova visual, iniciar el servidor local a 8765; el test fa servir la mateixa instal·lació local de Playwright/Chromium que les proves anteriors. Les empremtes de `visual-integrity.json` documenten aquesta revisió; només s'han d'actualitzar quan s'autoritzi modificar els continguts o el motor en una tasca posterior.

Tot queda en local per a revisió. No s'ha fet commit, push ni desplegament.
