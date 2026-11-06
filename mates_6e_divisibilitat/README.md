> Publicació autoritzada per la família el **6 de novembre de 2026**, després de la revisió local. Web: https://pipoptero.github.io/repasosg/mates_6e_divisibilitat/. Les indicacions posteriors «només local» o «sense commit/push/desplegament» descriuen les revisions prèvies. Els originals escolars, ZIP i captures continuen exclosos. Vegeu [PUBLICACIO_MATES_6E.md](PUBLICACIO_MATES_6E.md).

# Missió Matemàtica · Matemàtiques 6è

Preparatori independent en català, fet per revisar **en local**. Entrada: `index.html`. El Portal de Repàs l’enllaça juntament amb Medi com a segon examen actiu. No hi ha dependències de xarxa ni backend.

## Què inclou

- Tres mons i 13 apartats amb descoberta, explicació completa, exemple pas a pas, comprovació, recordatori, confusions i taller.
- 180 exercicis-base: 80 nombres, 70 m.c.m./m.c.d./problemes, 30 girs/simetries. Set formats; 122 (67,8%) exigeixen produir una resposta.
- Pràctica filtrada, minirepàs, errors antics prioritzats, simulacre de 30 amb correcció diferida, revisió desenvolupada i progrés persistent.
- Tallers de salts, divisors, criteris, primers, factors, cicles, paquets, decisions, brúixola i mirall. Totes les representacions són matemàtiques originals en HTML/SVG.
- Reforç didàctic v2: set fitxes completes (2/3/4/5/6/9/10), autocorrecció individual, laboratori combinat i deu miniqüestions. El criteri del 6 és una ampliació expressament demanada per la família; no s'atribueix als PDF originals.
- Detectiu de problemes: sis històries resoltes, dotze casos guiats (4+4+4), significat de les unitats i segones operacions. Tretze propostes «Prova-ho tu» sense nota ni guardat. Ajuda opcional en pràctica, absent en simulacre.
- Introducció «Primer entenc la història»: camins de múltiples/divisors, contrast entre cm per tros i lots i fase inicial «Què passa?» als dotze casos. Vídeo complementari de SusiProfe (en castellà) amb activació voluntària i alternativa a YouTube; la lliçó funciona sense tercers.
- Mètode de la ratlla: 100 guiat divisió a divisió, 300/459/728 resolts, potències després del procés i connexió amb la tria de factors del m.c.m./m.c.d. L'explicació anterior es conserva íntegra.

## Arquitectura

| Fitxer | Responsabilitat |
|---|---|
| `index.html`, `styles.css` | Entrada semàntica i disseny responsive, tres identitats, focus i moviment reduït |
| `content.js` | Mons, teoria, exemples, comprovacions i referències als originals |
| `build_bank.py` | Font editorial determinista de les 180 activitats |
| `bank.json`, `bank.js`, `inventari.json` | Banc complet i inventari de traçabilitat generats |
| `math.js` | Aritmètica pura, geometria, solució verificable, normalització i correcció |
| `engine.js` | Selecció de simulacres, validació d’estat, sessions, historial i versions |
| `visuals.js`, `geometry.js` | SVG calculats i editor accessible de punts |
| `activities.js` | Tallers manipulables, sense escriure intents puntuats |
| `didactic-data.json`, `didactic-data.js` | Dades idèntiques dels set criteris, sis models, dotze casos i deu miniqüestions; fora del banc puntuat |
| `didactic-math.js`, `didactics.js` | Composició segura del criteri del 6, càlculs i components formatius; cap escriptura de progrés |
| `story-support.js` | Introducció intuïtiva, vídeo sota demanda, identificació de la història i feedback conceptual |
| `ratlla.js` | Columnes de divisions, exemple guiat, productes/potències, selecció de factors i recordatori de cinc passos; sense puntuació ni guardat |
| `practice.js` | Controls dels set formats, confirmació, pistes, feedback i passos |
| `app.js` | Rutes, teoria, pràctica, resultats, errors, progrés i emmagatzematge |
| `coverage.json`, `source-review.md` | Revisió dels 16 originals i correspondència amb el temari |
| `protection.json` | SHA-256 dels 55 fitxers de Medi i preparatoris protegits |
| `didactic-protection.json` | Instantània addicional de 110 fitxers abans del reforç v2: banc/motor, portada, Medi, preparatoris i originals |

## Ús local

Des de l’arrel del repositori:

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Obrir `http://127.0.0.1:8765/mates_6e_divisibilitat/index.html`. També funciona obrint l’HTML local, ja que les dades es carreguen amb scripts i no amb `fetch`. El `localStorage` dels fitxers locals depèn del navegador: per revisar persistència, es recomana el servidor.

## Regeneració i proves

```powershell
python mates_6e_divisibilitat/build_bank.py
node mates_6e_divisibilitat/validate.cjs
python mates_6e_divisibilitat/verify_independent.py
node mates_6e_divisibilitat/browser-test.cjs
node mates_6e_divisibilitat/editorial-browser-test.cjs
node mates_6e_divisibilitat/didactic-test.cjs
python mates_6e_divisibilitat/verify_didactics.py
node mates_6e_divisibilitat/didactic-browser-test.cjs
node mates_6e_divisibilitat/video-test.cjs
python mates_6e_divisibilitat/verify_ratlla.py
node mates_6e_divisibilitat/ratlla-browser-test.cjs
```

- `validate.cjs`: aritmètica, banc, casos límit, estat, versions i 1.000 simulacres.
- `verify_independent.py`: recalcula totes les claus amb enumeració/fórmules independents; revisa geometria, fitxers protegits i exclusió dels originals.
- `browser-test.cjs`: servidor efímer al port 8767; prova `/repasosg/` i arrel, tres amplades i paisatge, fluxos i captures.
- `editorial-browser-test.cjs`: 180 encerts i 180 errors passant per tots els controls del DOM. Requereix el servidor al port 8765.
- `didactic-test.cjs`: set criteris, 70.007 comprovacions, sis models, dotze casos, integritat dels 110 fitxers i límits del reforç.
- `verify_didactics.py`: enumera solucions i llistes independentment, verifica les operacions de les 18 històries, 13 propostes, equacions i geometria de la teoria.
- `didactic-browser-test.cjs`: servidor efímer al port 8768; proves de set autocorreccions, deu miniqüestions, dotze casos i tretze propostes, progressos previs intactes, pràctica/simulacre, captures 390/768/1280. Sortida local: `tmp/mates-review/didactic-v2/`.
- `video-test.cjs`: servidor efímer al port 8769; 116 hashes, deu lliçons preservades, dos camins i unitats, sis models, dotze fases inicials, vídeo voluntari/fallback simulat, cap tercer abans d'activar-lo, progrés intacte i 37 captures a `tmp/mates-review/video-susiprofe/`. El test intercepta el reproductor; no acredita reproducció real de YouTube.
- `verify_ratlla.py`: comprovació independent de 999 descomposicions (2–1000), primer mínim, quocients, productes i exponents; catorze seleccions m.c.m./m.c.d. i 134 hashes de fitxers previs.
- `ratlla-browser-test.cjs`: servidor efímer al port 8770; seqüència completa de 100, potències al final, tres exemples resolts, factors comuns/no comuns, conservació del progrés i de l'explicació anterior, teclat i 33 captures a `tmp/mates-review/ratlla/`.

Les proves reutilitzen Playwright de `tmp/medi-review/node_modules/playwright` i el Chromium instal·lat en aquest equip, com les de Medi. En un altre equip, cal instal·lar Playwright a aquella carpeta i adaptar `executablePath`; cap d’aquests paquets forma part de la web. Python independent utilitza només la biblioteca estàndard.

## Persistència i límits

Clau exclusiva `mates6e_div_v1`, esquema 1 i revisió editorial 1. Guarda intents, errors amb resposta i explicació, lectura, sessió amb esborrany i ordre d’opcions, historial de les últimes 60 sessions i arxiu de versions incompatibles. Les captures utilitzen contextos aïllats i no dades reals. El reinici confirmat afecta només Matemàtiques.

La lectura no equival a domini. La precisió descriu intents, no una diagnosi d’aprenentatge. Cada activitat del simulacre pesa el mateix: encerts/30×10. Els errors de format no sumen intents; les seleccions parcials i les figures incompletes correctament introduïdes són respostes a revisar. No hi ha variants numèriques aleatòries: el banc editorial és finit; s’aleatoritzen la selecció i l’ordre d’opcions.

No es carreguen PDF ni fotos originals. L'únic recurs extern opcional és el reproductor oficial de YouTube, després de prémer «Mostra el vídeo»; no hi ha autoplay ni dependència d'aquest recurs per estudiar. No se'n descarreguen mitjans, miniatures ni subtítols al projecte. Els 16 originals romanen a `material_mates_6e/`, exclòs de Git. Les captures i còpies de lectura romanen a `tmp/mates-review/`, també exclòs. No hi ha drets de reproducció d’originals pendents perquè no se n’ha incorporat cap a la web.

No s’ha provat en dispositiu físic, Safari/iOS ni amb lector de pantalla. No hi ha service worker ni promesa de reobertura offline des d’una URL. Informe complet: [AUDITORIA_MATES_6E.md](AUDITORIA_MATES_6E.md).

Informe del reforç v2 i índex de captures: [REVISIO_DIDACTICA_MCM_MCD.md](REVISIO_DIDACTICA_MCM_MCD.md). Durant aquest reforç no es regenera ni es modifica el banc.

Revisió posterior del vídeo i de la identificació de problemes: [REVISIO_VIDEO_SUSIPROFE_DIDACTICA.md](REVISIO_VIDEO_SUSIPROFE_DIDACTICA.md). S'han verificat les metadades i la permissió d'incrustació de YouTube, però no la narració; el contingut didàctic nou és original del projecte, seguint l'encàrrec.

Reforç del procediment de classe: [REVISIO_METODE_RATLLA.md](REVISIO_METODE_RATLLA.md). La ratlla apareix abans de l'explicació anterior de factors; als apartats m.c.m./m.c.d. es mostra abans de triar factors i abans del desplegable anterior de potències.

**No s’ha fet commit, push, publicació ni desplegament d’aquest preparatori.**
