# Missió Català · Laboratori de paraules · 6è SA-1

Publicació autoritzada el 24 de novembre de 2026: https://pipoptero.github.io/repasosg/catala_6e_sa1/index.html . Els originals escolars i les captures locals continuen exclosos de Git.

Nou preparatori local, 24 de novembre de 2026. Entrada: `index.html`. No necessita cap compilació, compte ni servei extern. La portada del portal conserva Medi i Anglès i hi afegeix Català.

## Contingut i manteniment

- `data.js`: banc editorial de 180 activitats; 30 per secció. Inclou enunciats, respostes, opcions, pistes, explicacions i fonts.
- `content.js`: teoria accessible dels sis blocs, exemples i aclariments de les fitxes.
- `engine.js`: normalització respectuosa amb els accents, correcció, selecció equilibrada i validació de les dades desades.
- `app.js`: navegació, formularis, comes interactives, teclat d’ajuda, pràctica, simulacres, errors i progrés.
- `styles.css`: disseny adaptatiu, mascota decorativa feta amb CSS, focus i moviment reduït.
- `assets/`: tres retalls escolars revisats, en WebP sense pèrdua. Cap PDF complet ni foto amb dades personals.
- `validate.cjs`: comprovació del banc, corrector, persistència, distraccions i 1.000 simulacres equilibrats.
- `browser-test.cjs`: 180 activitats resoltes amb els formularis reals en Chromium, errors, teclat, recàrrega, simulacre, mides de pantalla i integració de la portada.

Les pràctiques són de 6, 12 o 30 activitats. El simulacre conté 30 activitats, cinc de cada secció, i mostra les solucions al final. En pràctica, la correcció arriba després de cada intent. Les activitats amb dues respostes demanen encertar-les totes dues per comptar com a correctes.

## Persistència independent

Única clau escrita: `catala6e_sa1_v1`. Desa intents, darrer resultat, errors pendents, esborrany de la ronda, última correcció i fins a vint rondes acabades. No llegeix ni altera el progrés dels altres preparatoris. No hi ha reinici global.

No s’eliminen accents. S’accepten majúscules/minúscules, accents Unicode equivalents i apòstrof recte o corbat. Es respecten comes, guionets i punt volat. En reordenar frases no s’avalua el punt final ni la majúscula inicial.

## Fonts i correccions

Base: els tres PDF i les sis fotografies escolars. Originals privats, inventari i hashes a `../material_catala_6e_sa1/`, exclòs de Git. Les fotografies amb respostes són una referència de formats i continguts; les respostes manuscrites no són el solucionari.

S’han aclarit be/bé, les excepcions d’apostrofació del pronom la, les formes sense apòstrof, les concordances de vostè/vós i el caràcter contextual de les comes. Vegeu l’informe detallat `../REVISIO_CATALA_SA1.md`.

## Validació local

Des de l’arrel:

```powershell
node catala_6e_sa1/validate.cjs
node catala_6e_sa1/browser-test.cjs
python -m http.server 8766 --bind 127.0.0.1
```

El test de navegador fa servir el Playwright ja instal·lat a `tmp/medi-review/node_modules` i Chromium 1208 de l’entorn local. Si es canvia d’ordinador, cal ajustar aquesta dependència i la ruta de Chromium al fitxer de prova; no són dependències de la web. Les captures es generen dins de `tmp/medi-review/catala-sa1/captures/`, carpeta ignorada per Git.
