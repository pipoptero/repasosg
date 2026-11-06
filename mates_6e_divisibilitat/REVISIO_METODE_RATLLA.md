# Mètode de la ratlla · Revisió pedagògica

6 de novembre de 2026. Implementació local, sense commit, push ni desplegament.

## Què s'ha incorporat

Al tema **Factors primers** (`#apren/0/factors`), la ratlla apareix **abans de l'explicació anterior**. Es mostra el nombre i els quocients a l'esquerra, els divisors primers a la dreta i una ratlla vertical contínua que separa les dues columnes. L'última fila és 1 amb la columna dreta buida: l'1 no es presenta com a factor primer.

Les instruccions, en català, expliquen que només es divideix per nombres primers, que es comença pel més petit que permet una divisió exacta, que es repeteix si encara serveix i que s'atura en arribar a 1. Després es llegeixen els factors de la dreta, es multipliquen i finalment s'agrupen amb potències.

### Exemple guiat de 100

«Fes el primer pas / Fes el pas següent» construeix la columna progressivament:

| Nombre a l'esquerra | Primer a la dreta | Quocient que s'escriu a sota |
|---|---|---|
| 100 | 2 | 50 |
| 50 | 2 | 25 |
| 25 | 5 | 5 |
| 5 | 5 | 1 |
| 1 | — | Aturem la descomposició |

Cada pas explica la tria: 100 i 50 són parells; 25 no és divisible ni per 2 ni per 3 però sí per 5; 5 es divideix per 5 i dona 1. S'explica expressament per què no es tria 4 encara que divideixi 100: no és primer.

**El producte i les potències del 100 no apareixen abans d'acabar la columna.** Després es mostren, en aquest ordre:

- 100 = 2 × 2 × 5 × 5.
- 100 = 2² × 5².
- Comprovació: 2×2=4, 5×5=25 i 4×25=100.

Hi ha un botó per veure l'exemple complet, un altre per començar de nou i un desplegable final per repassar les quatre divisions amb totes les explicacions. No és una activitat puntuada ni es guarda l'estat del recorregut.

### Tres exemples curts resolts

Les tres targetes mostren la ratlla sencera i, a sota, primer el producte desplegat i després les potències:

| Nombre | Divisors primers de la dreta | Quocients successius | Igualtat amb potències |
|---|---|---|---|
| 300 | 2, 2, 3, 5, 5 | 150, 75, 25, 5, 1 | 300 = 2² × 3 × 5² |
| 459 | 3, 3, 3, 17 | 153, 51, 17, 1 | 459 = 3³ × 17 |
| 728 | 2, 2, 2, 7, 13 | 364, 182, 91, 13, 1 | 728 = 2³ × 7 × 13 |

El format segueix el procediment indicat per la família. No s'han copiat fotografies ni pàgines escolars. L'exemple anterior de 60, els textos de teoria, el desplegable d'exponents i el taller de factors es conserven íntegrament després del bloc nou.

## Connexió amb m.c.m. i m.c.d.

Als dos temes (`#apren/1/mcm` i `#apren/1/mcd`) es manté la introducció conceptual amb llistes. El nou bloc **«Primer la ratlla, després triem els factors»** mostra les dues descomposicions abans de seleccionar factors i abans del desplegable anterior de factors/potències.

Es descomponen 12 i 18 en columnes: 12→6→3→1, amb 2/2/3 a la dreta; 18→9→3→1, amb 2/3/3. Després s'escriuen 12=2²×3 i 18=2×3².

Regles memoritzables visibles:

- **m.c.m. → comuns i no comuns amb l'exponent més gran.**
- **m.c.d. → només comuns amb l'exponent més petit.**

Les targetes de selecció compten les repeticions de cada primer en cada nombre, expliquen per què es tria la potència i mostren el producte final:

| Càlcul | Factors triats | Resultat i comprovació |
|---|---|---|
| m.c.m.(12,18) | 2² i 3² | 36; 36÷12=3 i 36÷18=2 |
| m.c.d.(12,18) | 2 i 3 | 6; 12÷6=2 i 18÷6=3 |

Un desplegable afegeix el cas **12 i 20** perquè la regla de «no comuns» es vegi realment: 20 es descompon amb la ratlla en 2×2×5; el 3 només apareix en 12 i el 5 només en 20.

- m.c.m.(12,20)=2²×3×5=60; comprovació 60÷12=5 i 60÷20=3.
- m.c.d.(12,20)=2²=4; el 3 i el 5 es descarten perquè no són comuns; comprovació 12÷4=3 i 20÷4=5.

El resultat s'interpreta: en dos ritmes de 12/18 minuts, 36 són minuts d'espera; en lots mixtos de 12/18 fitxes, 6 són lots i encara cal dividir per obtenir 2/3 fitxes de cada color. La ratlla és un procediment de càlcul; la pregunta i les unitats continuen determinant si cal m.c.m. o m.c.d.

## Recordatori de cinc passos

Disponible al final del bloc de factors, als ponts de m.c.m./m.c.d. i al «Detectiu de problemes», conservant els models i el taller existents:

1. **Descompon** amb la ratlla fins a l'1.
2. **Mira si és m.c.m. o m.c.d.** segons la pregunta i les unitats.
3. **Tria els factors** amb la regla corresponent.
4. **Multiplica** els factors triats.
5. **Interpreta la resposta**, fes una operació posterior si cal i comprova-la.

## Preservació i fitxers

S'han capturat i comparat **134 hashes SHA-256** anteriors als canvis. Continuen intactes el banc de 180 exercicis i les seves respostes, el generador, motor, geometria, dades didàctiques, vídeo, Medi, portada, preparatoris i materials originals. `content.js` es conserva byte per byte: no s'ha eliminat ni reescrit cap de les tretze lliçons. Tampoc s'han modificat els tests previs.

La clau `mates6e_div_v1`, les revisions, quotes 12+12+6, nota, sessió, historial, intents i repàs d'errors conserven el funcionament anterior. Les noves interaccions només actualitzen el DOM i un comptador temporal dins del component, sense llegir/escriure dades locals.

Modificats: `app.js` (insercions de teoria i muntatge), `index.html` (nou script local), `styles.css` (només classes noves) i `README.md`.

Nous: `ratlla.js` (presentació i càlcul formatiu), `ratlla-protection.json`, `verify_ratlla.py`, `ratlla-browser-test.cjs` i aquest informe. No s'han afegit dependències de xarxa, PDFs, fotos ni recursos externs.

## Validacions executades

Totes han acabat en **PASS**:

| Prova | Resultat |
|---|---|
| `python mates_6e_divisibilitat/verify_ratlla.py` | 999 descomposicions (2–1000): cada divisor és primer i el menor possible, cada quocient és exacte, productes i exponents correctes. Catorze seleccions m.c.m./m.c.d. amb límits; 134 hashes intactes |
| `node mates_6e_divisibilitat/ratlla-browser-test.cjs` | Quatre passos del 100, producte/potències només al final, repàs/reinici, 300/459/728, selecció i exclusió de factors, teoria anterior present, teclat i 33 captures |
| `node mates_6e_divisibilitat/validate.cjs` | 180 claus/enunciats, 7 formats, 13 temes, funcions/casos límit, estat i 1.000 simulacres 12+12+6 |
| `python mates_6e_divisibilitat/verify_independent.py` | 180 respostes independents, geometria, proteccions i originals exclosos |
| `node mates_6e_divisibilitat/didactic-test.cjs` | 70.007 comprovacions de criteris, dades, 6 models, 12 casos i 110 proteccions anteriors |
| `python mates_6e_divisibilitat/verify_didactics.py` | 18 històries, 13 propostes, 120 igualtats de teoria/criteris i geometria |
| `node mates_6e_divisibilitat/editorial-browser-test.cjs` | 360 correccions DOM: encert/error dels 180 ítems, solucions i passos complets |
| `node mates_6e_divisibilitat/browser-test.cjs` | 51 captures; pràctica, filtres, formats, errors, restauració, nota, simulacre 29/30 i reinici aïllat |
| `node mates_6e_divisibilitat/didactic-browser-test.cjs` | Criteris, propostes i 12 casos; persistència, pràctica/simulacre i 79 captures |
| `node mates_6e_divisibilitat/video-test.cjs` | Vídeo/fallback, dos camins i unitats, 12 casos, offline, dades guardades i 37 captures |
| `node medi_6e_cos_huma/validate.cjs` | 180 ítems i simulacres equilibrats de Medi |
| `node medi_6e_cos_huma/browser-test.cjs` | Navegació, progrés, simulacre 30/30, historial, reinici i tres vídeos de Medi reproduïts |

La prova matemàtica nova és independent: Python verifica primalitat i enumera el menor divisor directament, sense importar `math.js`; també enumera múltiples/divisors per contrastar les seleccions. El navegador comprova els números de totes les cel·les visibles i els exponents realment renderitzats.

Contextos de navegador aïllats, sense dades reals de la família. Totes les claus de `localStorage` es conserven idèntiques després de completar, reiniciar i navegar per les activitats; es reprèn la mateixa sessió amb l'esborrany anterior. No es genera cap ajuda de ratlla dins del simulacre.

## Captures i revisió visual

**33 captures noves en Chromium a 390, 768 i 1280 px**, amb focus de teclat, moviment reduït i comprovació de desbordament. Sense errors JS, 404 ni peticions externes a la prova específica.

[Galeria local](../tmp/mates-review/ratlla/captures.html) · [Llista de captures](../tmp/mates-review/ratlla/captures.json).

S'han inspeccionat captures completes de 100 en mòbil, 459, el pont de m.c.m. a escriptori i l'exclusió dels factors no comuns del m.c.d. en mòbil. Columnes i exponents llegibles; targetes apilades en pantalla estreta. El disseny general i les tres identitats del mòdul es mantenen.

La validació pedagògica és una revisió del procediment i dels exemples; queda pendent observar l'alumna utilitzant-lo en un problema nou. No s'ha provat en dispositiu físic, Safari/iOS o lector de pantalla. **No s'ha fet commit, push ni desplegament.**
