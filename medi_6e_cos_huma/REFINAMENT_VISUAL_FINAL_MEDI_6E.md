# Missió Cos Humà — refinament visual final

Implementació local del refinament sol·licitat el 5 de novembre de 2026. Aquesta intervenció no canvia cap enunciat, resposta, pista, explicació, concepte, font ni regla pedagògica.

## Què ha canviat

### Preguntes: prioritat principal

- Capçalera temàtica amb la imatge escolar del món i la informació original de tema, subtema i importància. No s'introdueix cap dibuix anatòmic nou.
- Composició més compacta i amb fons temàtic: capçalera, avanç, pregunta, quatre targetes, pista i accions tenen una jerarquia definida.
- Quatre targetes de resposta amb fons blau, violeta, préssec i verd suau, vores i relleu diferenciats, lletres A–D i focus visible. Les posicions continuen barrejant-se amb el motor original; els colors identifiquen la posició, no la correcció.
- Avanç amb barra de 20 px i dos indicadors: pregunta actual i nombre real de preguntes completades. No es confon «pregunta 1» amb haver-ne completat una.
- Pista en un desplegable groc amb indicador d'obertura. El text de la pista es conserva íntegrament.
- En encert: verd, marca de verificació, etiqueta «Correcta», celebració breu existent, explicació destacada i botó de continuació gran.
- En error: opció escollida amb vora discontínua ambre i etiqueta «La teva tria»; correcta amb vora verda contínua i etiqueta «Correcta». El color es complementa amb text, símbols i etiquetes accessibles.
- Targeta educativa amb solució, explicació específica de l'opció incorrecta, explicació general i font originals. L'enllaç de retorn a teoria es presenta com una acció destacada.
- Durant el simulacre, només s'assenyala «La teva tria · desada». No es revela cap resposta correcta fins a acabar.

### Teoria: lectura i il·lustracions

- Targetes amb fons del món, títols amb un marcador temàtic i separadors visibles.
- Les il·lustracions es col·loquen immediatament després de l'explicació principal i abans de l'ampliació. En escriptori, les targetes amb una il·lustració presenten concepte i imatge en dues columnes; en mòbil es llegeixen en una columna. Les parelles d'imatges conserven l'espai per estudiar-les.
- Les 13 imatges mantenen els fitxers originals, proporcions, textos, peus, fonts i visor ampliable. Les miniatures de les capçaleres reutilitzen aquests mateixos assets locals.
- «Ho entenem millor» té un panell propi; els conceptes fonamentals de cada paràgraf es destaquen tipogràficament.
- Exemples blaus amb indicador de connexió, «Recorda-ho!» groc amb signe d'atenció i confusions violetes amb símbol de diferència. Textos complets i llegibles.
- Millora de l'interlineat, els marges entre idees i els desplegables. No es limita ni s'oculta cap ampliació.

### Portada, mons i resultats

La portada conserva exactament l'estructura, composició, recursos i navegació de la versió aprovada. No s'ha modificat `app.js`, que genera la portada i els resultats. Es conserven les identitats turquesa/blau, taronja/coral i violeta/blau, inclosos els resultats per món de la versió anterior. La presentació de resultats i les celebracions adequades a la nota continuen operatives.

El refinament recupera l'ús de targetes de resposta amb relleu, panells de feedback i accions destacades dels preparatoris revisats anteriorment, sense copiar mecàniques ni modificar aquells cursos.

## Fitxers d'aquesta intervenció

Modificats:

- `styles.css`: composició interior, targetes de resposta, pistes, feedback, teoria, il·lustracions, estats seleccionats, responsive i moviment reduït.
- `appearance.js`: només decoració de DOM, agrupació visual de progrés, capçalera de món, reordenació de les imatges de teoria i etiquetes de selecció. Llegeix la sessió; no corregeix, no desa i no canvia estadístiques.
- `REDISENY_VISUAL_MEDI_6E.md`: enllaç al present refinament.

Nous:

- `refinement-integrity.json`: empremtes SHA-256 preses abans de modificar res, inclòs `app.js` complet, banc complet, font editorial, inventari, motor, teoria/ampliacions, manifest d'imatges, assets i vídeos, entrada i preparatoris anteriors.
- `refinement-test.cjs`: protecció dels fitxers, captures i interaccions dels tres mons.
- Aquest informe.

Les captures estan a `tmp/medi-review/refinement-qa/` i `tmp/medi-review/redesign-qa/`, fora dels assets de producció i excloses de Git. No s'han afegit dependències ni recursos externs.

## Validació executada

| Bateria | Resultat |
|---|---|
| `validate.cjs` | PASS: 180 preguntes, 60 per món, ancoratges, fonts i 1.000 simulacres equilibrats |
| `browser-test.cjs` | PASS: navegació, pràctica, persistència, represa, simulacre, nota, vídeos, teclat, moviment reduït i historial |
| `visual-test.cjs` | PASS: 13 WebP, tres mons × tres amplades, càrrega, dimensions, visor i cap desbordament |
| `theory-test.cjs` | PASS: textos principals, 16 ampliacions, desplegables, fonts i enllaços profunds |
| `bank-audit-test.cjs --browser` | PASS: 180 pistes, 540 explicacions específiques, 720 respostes, quotes, migració i historial |
| `redesign-test.cjs` | PASS: 49 captures, mapa, teoria, preguntes, errors, simulacre sense solucions anticipades i resultats 7/10 i 0/10 |
| `refinement-test.cjs` | PASS: 57 captures, tres mons × 390/768/1280, teoria, pistes, encert/error, retorn a teoria, teclat i moviment reduït |
| Comprovació addicional de simulacre | PASS: selecció desada visible, cap classe de correcta/incorrecta i captura real |
| Sintaxi de `appearance.js` i `git diff --check` | PASS |

S'han revisat visualment captures reals de Chromium, incloent pregunta i error en mòbil, teoria il·lustrada en escriptori i les captures de les tres amplades. Les proves utilitzen contextos aïllats: no s'ha obert el perfil ni alterat el progrés real de l'alumna.

Contrast calculat dels nous textos sobre els seus fons plans: respostes 10,49–11,10:1, pista 7,23:1, estats d'encert/error 6,46–6,71:1 i títols dels panells d'exemple/recordatori/confusió 5,96–6,36:1. Es mantenen els focus visibles, les respostes activables per teclat i `prefers-reduced-motion`; no hi ha animacions contínues. Aquesta revisió no equival a una auditoria exhaustiva amb lector de pantalla ni a proves en dispositius físics.

## Captures per revisar

| Pantalla | 390 px | 768 px | 1280 px |
|---|---|---|---|
| Portada conservada | [Veure](../tmp/medi-review/redesign-qa/mapa-390.png) | [Veure](../tmp/medi-review/redesign-qa/mapa-768.png) | [Veure](../tmp/medi-review/redesign-qa/mapa-1280.png) |
| Teoria respiratori | [Veure](../tmp/medi-review/refinement-qa/teoria-respiratori-390.png) | [Veure](../tmp/medi-review/refinement-qa/teoria-respiratori-768.png) | [Veure](../tmp/medi-review/refinement-qa/teoria-respiratori-1280.png) |
| Teoria locomotor | [Veure](../tmp/medi-review/refinement-qa/teoria-locomotor-390.png) | [Veure](../tmp/medi-review/refinement-qa/teoria-locomotor-768.png) | [Veure](../tmp/medi-review/refinement-qa/teoria-locomotor-1280.png) |
| Teoria nerviós | [Veure](../tmp/medi-review/refinement-qa/teoria-nervios-390.png) | [Veure](../tmp/medi-review/refinement-qa/teoria-nervios-768.png) | [Veure](../tmp/medi-review/refinement-qa/teoria-nervios-1280.png) |
| Pregunta | [Veure](../tmp/medi-review/refinement-qa/pregunta-respiratori-390.png) | [Veure](../tmp/medi-review/refinement-qa/pregunta-respiratori-768.png) | [Veure](../tmp/medi-review/refinement-qa/pregunta-respiratori-1280.png) |
| Pista oberta | [Veure](../tmp/medi-review/refinement-qa/pista-locomotor-390.png) | [Veure](../tmp/medi-review/refinement-qa/pista-locomotor-768.png) | [Veure](../tmp/medi-review/refinement-qa/pista-locomotor-1280.png) |
| Encert i explicació | [Veure](../tmp/medi-review/refinement-qa/encert-locomotor-390.png) | [Veure](../tmp/medi-review/refinement-qa/encert-locomotor-768.png) | [Veure](../tmp/medi-review/refinement-qa/encert-locomotor-1280.png) |
| Error i explicació | [Veure](../tmp/medi-review/refinement-qa/error-nervios-390.png) | [Veure](../tmp/medi-review/refinement-qa/error-nervios-768.png) | [Veure](../tmp/medi-review/refinement-qa/error-nervios-1280.png) |
| Resultats del simulacre | [Veure](../tmp/medi-review/redesign-qa/resultats-resum-390.png) | [Veure](../tmp/medi-review/redesign-qa/resultats-resum-768.png) | [Veure](../tmp/medi-review/redesign-qa/resultats-resum-1280.png) |

[Concepte i imatge escolar en dues columnes](../tmp/medi-review/refinement-qa/teoria-illustrada-1280.png) · [Resposta desada durant el simulacre](../tmp/medi-review/refinement-qa/simulacre-seleccio-1280.png).

## Conservació i pendents

La comprovació SHA-256 confirma que el banc complet, la font editorial, teoria, ampliacions, imatges, vídeos, motor, `app.js`, inventari i altres preparatoris es conserven byte a byte respecte de l'inici d'aquest refinament. Per tant, tampoc no s'han modificat les tres preguntes corregides durant la intervenció anterior. Els canvis són exclusivament de presentació.

No queda implementació pendent del refinament. Queda la revisió personal en local i, si es vol, la comprovació en mòbil/tablet físics. No s'ha fet commit, push ni desplegament.
