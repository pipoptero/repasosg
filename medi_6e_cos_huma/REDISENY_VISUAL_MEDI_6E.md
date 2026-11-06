# Missió Cos Humà · Redisseny visual i motivació

## Resultat

La presentació passa d'una lectura de targetes sòbries a una expedició científica amb una benvinguda il·lustrada, un mapa de mons, recorregut d'estudi, targetes amb profunditat, preguntes amb identitat de repte i resultats de sessió destacats. Tot funciona amb els fitxers estàtics locals, sense dependències ni recursos externs nous.

La capa visual no introdueix monedes, punts nous, desbloquejos, límits de temps ni noves claus de localStorage. Les 180 preguntes, la selecció/correcció del simulacre i el guardat del progrés conserven el funcionament anterior. Només es corregeixen els tres enunciats autoritzats.

## Patrons recuperats dels preparatoris anteriors

S'han inspeccionat codi i pantalles reals de `missio_catala_6e.html`, `mates_6e_primer_examen.html` i `Academia_de_Palabras/index.html`:

- **Català:** composició de benvinguda amb art a un costat, mapa de missions, botons amb relleu i retorn amable sobre els errors. Es reutilitza aquesta idea d'aventura, amb il·lustracions escolars en lloc d'un personatge nou.
- **Matemàtiques:** fons amb color i profunditat, contenidors arrodonits, etiquetes i caixes de lectura diferenciades. A Medi s'utilitzen de manera més temàtica i amb contrast controlat.
- **Academia de Palabras:** jerarquia de navegació amb càpsules, sensació de mapa i recursos de descoberta. No s'han copiat els XP ni cap sistema de recompenses.

Les captures de referència es conserven a `../tmp/medi-review/reference-catala.png`, `reference-mates.png` i `reference-castella.png`. No s'ha modificat cap d'aquests preparatoris.

## Tres mons amb identitat pròpia

| Món | Identitat | Aplicació |
|---|---|---|
| Respiratori | Blau cel, turquesa, blau profund | Fons clar, progressió blava/turquesa, capçaleres i botons amb contrast; recursos d'aire i pulmons dels apunts |
| Locomotor | Taronja, groc, coral, terracota | Fons càlid, relleu groc, accents de moviment, esquelet i musculatura reals |
| Nerviós | Violeta, blau elèctric i verd | Targetes violetes, progressió amb blau/verd, accents de connexió, encèfal i neurona originals |

Els textos llargs continuen en tinta fosca sobre superfícies clares. El color ajuda a orientar-se, però els estats d'encert/error també tenen símbols i etiquetes textuals. El tema acompanya teoria i preguntes, incloses les preguntes barrejades del simulacre.

## Entrada i mapa

- Benvinguda «Missió Cos Humà!» amb accés directe a començar l'aprenentatge i al simulacre.
- Composició amb tres finestres il·lustrades, òrbites decoratives i una etiqueta de 3 mons/180 preguntes. Reutilitza imatges existents: no hi ha anatomia generada.
- Ruta visual «Aprèn → Practica → Repassa errors → Fes el simulacre».
- Tres targetes grans amb il·lustració temàtica, explicació, botons i progrés real de preguntes úniques practicades.
- El recompte no s'etiqueta com a domini: 0/60 és 0/60, sense cap avanç fictici.
- La sessió desada continua disponible al mapa, amb el mateix botó de represa.

## Teoria i recursos originals

Els textos principals i l'ampliació pedagògica es conserven exactament. Les 13 imatges escolars, metadades, peus i el visor també es conserven.

Les targetes tenen accent de món, títols amb més jerarquia, separadors, paraules clau ressaltades i caixes de colors diferenciades per a exemple, recordatori i confusió. Les imatges es mostren en una superfície pròpia, amb més espai i una altura màxima de fins a 550 px en escriptori. El visor continua permetent veure-les a mida original.

S'afegeixen accessos als apartats de cada món aprofitant els ancoratges existents. Són accessos de lectura: no bloquegen continguts ni marquen targetes com a llegides. Les caselles de lectura continuen funcionant amb la lògica anterior.

## Preguntes i feedback

La pregunta es presenta com una targeta central amb barra de progrés, número visible, món i subtema. Les quatre opcions tenen lletres A–D, mida tàctil gran, relleu i focus visible. A partir de 901 px es disposen en dues columnes; en mòbil i tablet es mantenen en columna.

Les lletres indiquen la posició visual, no canvien l'índex de resposta: la barreja manté la correspondència entre opció i feedback. S'ha tornat a provar per a les 720 combinacions de pregunta/resposta.

En encertar, s'afegeixen un missatge breu variat i una aparició finita d'estrelles decoratives. En fallar, l'opció triada es distingeix amb un símbol de repàs, la correcta amb una marca, i el feedback explica la confusió concreta. No hi ha missatges de vergonya ni pèrdua de punts. Solució, explicació i enllaç a teoria continuen disponibles.

Els efectes duren 0,26 s (entrada de targeta) i 0,65 s (detall d'encert). No hi ha animacions contínues ni sons. `prefers-reduced-motion` desactiva animacions, transicions i desplaçaments de hover.

## Simulacre i resultats

Durant el simulacre es conserva la correcció al final: ni el color d'opció, ni les etiquetes accessibles ni el feedback revelen la resposta correcta abans d'acabar.

Els resultats destaquen la nota /10, encerts/errors de la ronda, targetes amb el resultat de cada món i conceptes a reforçar. Es conserven els accessos al repàs i a repetir el simulacre, i totes les explicacions desplegables.

La menció de sessió es calcula només amb el resultat actual: «Ronda sense errors» si s'han encertat totes; «Bon treball de repàs» a partir del 70%; i «Ronda completada: seguim aprenent» en la resta. És un missatge visual de sessió, no un premi persistent ni una afirmació de domini. En resultats que necessiten reforç, el cercle es presenta en blau tranquil amb símbol de tornar-hi, en lloc de l’estrella daurada de celebració. Es proven explícitament resultats de 7/10 i 0/10.

## Tres correccions editorials, i només aquestes

Modificades a `build_bank.py`, després regenerats `questions.js` i `inventari.json`:

| ID | Enunciat nou |
|---|---|
| `respiratori-015` | A quines estructures arriba l’aire al final del recorregut per les vies respiratòries? |
| `locomotor-062` | El cartílag cobreix els extrems de dos ossos en una articulació. Quina funció hi fa? |
| `nervios-027` | Una neurona té diverses ramificacions curtes que reben informació. Com s’anomenen aquestes parts? |

Tots tres es poden entendre sense tenir una imatge davant. Conserven ID, concepte, resposta, quatre opcions, explicacions, pista, font, pàgina, nivell, importància i referència a teoria. La resta de preguntes són idèntiques camp per camp. No cal una nova revisió/migració del banc per aquests canvis de redacció; `bankRevision` continua sent 2.

## Arquitectura i fitxers

Modificats:

- `app.js`: HTML de benvinguda/mapa, presentació del feedback i HTML dels resultats. Els càlculs, handlers de resposta, cues i guardat no canvien.
- `styles.css`: identitat, components, disposició responsive, estats, focus i moviment reduït.
- `index.html`: identitat de capçalera, color de navegador i càrrega de la capa de presentació.
- `build_bank.py`, `questions.js`, `inventari.json`: els tres enunciats i dades derivades. `bank-meta.json` es regenera sense canvis.
- `bank-audit-test.cjs`: adaptar les antigues comparacions d'identitat de mapa/estils/entrada als canvis visuals ara autoritzats. La resta de comprovacions de comportament i integritat continuen actives.
- `README.md`: enllaç a aquest informe.

Creats:

- `appearance.js`: aplica tema, orientació de navegació, etiquetes accessibles d'opcions i accessos de capítol. Llegeix l'estat de la sessió, però no puntua ni escriu progrés.
- `redesign-integrity.json`: empremtes de continguts protegits i de tots els camps del banc, amb les tres excepcions de redacció.
- `redesign-test.cjs`: verificació de la protecció i prova visual de pantalles/estats.
- Aquest informe. Les captures es guarden fora dels assets de producció, a `tmp/medi-review/redesign-qa/`, exclòs de Git.

No hi ha dependències noves, fonts remotes, il·lustracions anatòmiques generades ni canvis en altres cursos.

## Proves

- `validate.cjs`: PASS, estructura del banc, ancoratges i 1.000 simulacres.
- `browser-test.cjs`: PASS, navegació, rondes, encerts/errors, persistència, represa, repàs, simulacre, nota i vídeos.
- `visual-test.cjs`: PASS, 13 imatges, visor, tres mons a 390/768/1280 px i absència de desbordament lateral.
- `theory-test.cjs`: PASS, explicacions principals i 16 ampliacions, fonts i recursos protegits.
- `bank-audit-test.cjs --browser`: PASS, 180 pistes, 540 feedbacks, quotes, migració anterior, 720 respostes barrejades i historial antic.
- `redesign-test.cjs`: PASS, comparació SHA-256 d'engine, teoria, ampliacions, il·lustracions, vídeos i preparatoris; banc amb només tres enunciats canviats; inventari consistent; progrés real; pantalles a 390/768/1280 px; examen sense solucions anticipades; resultats alts/baixos; focus i moviment reduït; sense errors JS/404.
- Revisió visual real de captures de mapa, teoria, imatges, qüestionari, encert/error, repàs, examen i resultats. Contrast dels quatre colors de botó sobre blanc entre 4,52:1 i 6,94:1. Controls principals de 44 px o més, amb text i símbols que complementen el color.

Les dades de les captures són simulades en contextos aïllats de Chromium: no s'ha obert el perfil ni el localStorage real de l'alumna. La prova no substitueix una revisió en una tablet física o una auditoria completa amb lector de pantalla.

## Captures de la versió final

Les captures es poden obrir des d'aquest informe. Les imatges llargues no s'inclouen als assets que carrega l'aplicació.

![Mapa d'exploració, escriptori](../tmp/medi-review/redesign-qa/mapa-1280.png)

![Resultats de sessió, escriptori](../tmp/medi-review/redesign-qa/resultats-resum-1280.png)

| Pantalla | Mòbil 390 | Tablet 768 | Escriptori 1280 |
|---|---|---|---|
| Entrada i mons | [Captura](../tmp/medi-review/redesign-qa/mapa-390.png) | [Captura](../tmp/medi-review/redesign-qa/mapa-768.png) | [Captura](../tmp/medi-review/redesign-qa/mapa-1280.png) |
| Teoria respiratori | [Captura](../tmp/medi-review/redesign-qa/teoria-respiratori-390.png) | [Captura](../tmp/medi-review/redesign-qa/teoria-respiratori-768.png) | [Captura](../tmp/medi-review/redesign-qa/teoria-respiratori-1280.png) |
| Teoria locomotor | [Captura](../tmp/medi-review/redesign-qa/teoria-locomotor-390.png) | [Captura](../tmp/medi-review/redesign-qa/teoria-locomotor-768.png) | [Captura](../tmp/medi-review/redesign-qa/teoria-locomotor-1280.png) |
| Teoria nerviós | [Captura](../tmp/medi-review/redesign-qa/teoria-nervios-390.png) | [Captura](../tmp/medi-review/redesign-qa/teoria-nervios-768.png) | [Captura](../tmp/medi-review/redesign-qa/teoria-nervios-1280.png) |
| Imatge respiratori | [Captura](../tmp/medi-review/redesign-qa/imatge-respiratori-390.png) | [Captura](../tmp/medi-review/redesign-qa/imatge-respiratori-768.png) | [Captura](../tmp/medi-review/redesign-qa/imatge-respiratori-1280.png) |
| Imatge locomotor | [Captura](../tmp/medi-review/redesign-qa/imatge-locomotor-390.png) | [Captura](../tmp/medi-review/redesign-qa/imatge-locomotor-768.png) | [Captura](../tmp/medi-review/redesign-qa/imatge-locomotor-1280.png) |
| Imatge nerviós | [Captura](../tmp/medi-review/redesign-qa/imatge-nervios-390.png) | [Captura](../tmp/medi-review/redesign-qa/imatge-nervios-768.png) | [Captura](../tmp/medi-review/redesign-qa/imatge-nervios-1280.png) |
| Selecció de pràctica | [Captura](../tmp/medi-review/redesign-qa/seleccio-390.png) | [Captura](../tmp/medi-review/redesign-qa/seleccio-768.png) | [Captura](../tmp/medi-review/redesign-qa/seleccio-1280.png) |
| Pregunta | [Captura](../tmp/medi-review/redesign-qa/pregunta-390.png) | [Captura](../tmp/medi-review/redesign-qa/pregunta-768.png) | [Captura](../tmp/medi-review/redesign-qa/pregunta-1280.png) |
| Encert | [Captura](../tmp/medi-review/redesign-qa/encert-390.png) | [Captura](../tmp/medi-review/redesign-qa/encert-768.png) | [Captura](../tmp/medi-review/redesign-qa/encert-1280.png) |
| Error | [Captura](../tmp/medi-review/redesign-qa/error-390.png) | [Captura](../tmp/medi-review/redesign-qa/error-768.png) | [Captura](../tmp/medi-review/redesign-qa/error-1280.png) |
| Repàs d'errors | [Captura](../tmp/medi-review/redesign-qa/repas-errors-390.png) | [Captura](../tmp/medi-review/redesign-qa/repas-errors-768.png) | [Captura](../tmp/medi-review/redesign-qa/repas-errors-1280.png) |
| Entrada de simulacre | [Captura](../tmp/medi-review/redesign-qa/simulacre-inici-390.png) | [Captura](../tmp/medi-review/redesign-qa/simulacre-inici-768.png) | [Captura](../tmp/medi-review/redesign-qa/simulacre-inici-1280.png) |
| Pregunta de simulacre | [Captura](../tmp/medi-review/redesign-qa/simulacre-pregunta-390.png) | [Captura](../tmp/medi-review/redesign-qa/simulacre-pregunta-768.png) | [Captura](../tmp/medi-review/redesign-qa/simulacre-pregunta-1280.png) |
| Resultats | [Captura](../tmp/medi-review/redesign-qa/resultats-resum-390.png) | [Captura](../tmp/medi-review/redesign-qa/resultats-resum-768.png) | [Captura](../tmp/medi-review/redesign-qa/resultats-resum-1280.png) |

[Resultat de 0/10 amb invitació a continuar aprenent](../tmp/medi-review/redesign-qa/resultat-per-reforcar-1280.png).

Tot queda local per a revisió. No s'ha fet commit, push ni desplegament.

## Refinament visual final posterior

La portada es conserva i es reforça la presentació interior de preguntes i teoria. Vegeu [REFINAMENT_VISUAL_FINAL_MEDI_6E.md](REFINAMENT_VISUAL_FINAL_MEDI_6E.md) per als canvis, protecció íntegra dels continguts, proves i captures actualitzades.
