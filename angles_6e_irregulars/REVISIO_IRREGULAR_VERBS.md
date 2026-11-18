# Irregular Verbs · Anglès 6è

> L’usuari ha autoritzat la publicació després de demanar una millora decorativa. L’entrega incorpora el preparatori, la portada amb Medi i Anglès i els detalls visuals descrits al final. La fotografia original i les captures locals queden fora del commit. Les referències següents a l’estat local documenten la revisió prèvia a aquesta autorització.

18 de novembre de 2026. Implementació local completada, sense commit, push ni desplegament.

## Què s’ha implementat

Preparatori independent a `angles_6e_irregulars/index.html`, centrat en preguntes escrites, sense afegir lliçons ni verbs aliens a la fotografia. La interfície és en català i conserva els quatre títols de la fitxa en anglès: Verb, Past Simple, Past Participle i Translation.

Es mostra una sola columna de la fila com a pista i es demana escriure les altres tres. Exemple verificat: pista «cut» a Past Simple; respostes «cut» a Verb, «cut» a Past Participle i «tallar» a Translation. La pista no es puntua: cada fila té tres caselles corregibles.

S’han transcrit i revisat visualment els 18 verbs complets de la fotografia:

| Verb | Past Simple | Past Participle | Translation |
| --- | --- | --- | --- |
| be | was / were | been | ser / estar |
| buy | bought | bought | comprar |
| come | came | come | venir |
| cut | cut | cut | tallar |
| dig | dug | dug | cavar / excavar |
| do | did | done | fer |
| draw | drew | drawn | dibuixar |
| drink | drank | drunk | beure |
| eat | ate | eaten | menjar |
| feed | fed | fed | alimentar |
| feel | felt | felt | sentir (emocions/tacte) |
| find | found | found | trobar |
| fly | flew | flown | volar |
| get | got | got | aconseguir / obtenir |
| give | gave | given | donar |
| go | went | gone | anar |
| grow up | grew up | grown up | créixer |
| have | had | had | tenir |

Hi ha **72 pistes possibles** (18 verbs × 4 columnes), amb **216 caselles de resposta** en el conjunt complet. Són formes de preguntar la mateixa fitxa, no 72 verbs diferents.

## Funcionament

- Ronda de 6, 12 o 18 files. A les rondes mixtes, cada verb apareix una vegada i les columnes donades es reparteixen equilibradament. També es poden practicar les 72 combinacions completes.
- Opció de fixar la columna donada: Verb, Past Simple, Past Participle o Translation. En aquest cas hi ha com a màxim 18 pistes.
- Correcció individual de cada casella, conservant el que s’ha escrit, la forma correcta i una explicació. Quan s’intercanvien Past Simple i Past Participle, s’identifica l’intercanvi.
- Resum de la fila completa després de corregir, amb les quatre formes de la fitxa.
- Repàs dels casos amb errors. Una fila deixa d’estar pendent quan es completen correctament les tres caselles.
- Sense rellotge ni opcions de resposta per seleccionar.
- Navegació amb teclat, etiquetes dels camps, missatges de correcció i disseny responsive.

## Criteris de correcció

- No es penalitzen les majúscules ni els espais inicials, finals o repetits. La puntuació final d’una paraula també és prescindible.
- Es conserva l’ortografia de les formes angleses: «baught», «growup» o «grown» sense «up» no es donen per correctes.
- Per a Past Simple de **be** es demanen **was i were**, perquè la pregunta no dona cap subjecte. S’accepten les dues formes en qualsevol ordre, separades per barra, coma, espai o connectors. Escriure només «was» o només «were» es marca com a resposta incompleta; el camp ho avisa abans de respondre.
- Per a les traduccions dobles, s’accepta una de les alternatives originals o totes dues: ser/estar, cavar/excavar i aconseguir/obtenir. No s’afegeixen traduccions d’altres verbs ni sinònims fora de la fitxa.
- Per a **feel**, s’accepta «sentir» i la forma completa amb l’aclariment «emocions/tacte».
- No es penalitza la manca d’accent en la traducció catalana «créixer»; la solució sempre mostra la forma amb accent. Aquesta normalització no s’aplica a l’ortografia anglesa.
- Per a **get**, la resposta de participi prevista és **got**, tal com figura a la fitxa escolar. No s’hi afegeix «gotten» com a resposta d’aquest exercici.
- Les caselles buides no compten com a intent. Un doble enviament no duplica la puntuació.

## Progrés i conservació

La clau independent és `angles6e_irregulars_v1`. Guarda els intents per pista, les files amb tres encerts, els encerts de caselles, les columnes pendents, la ronda en curs, l’esborrany que s’estava escrivint, l’últim resultat i les últimes 20 rondes.

El percentatge d’encerts es calcula sobre les tres caselles escrites per intent, sense comptar la columna donada. Es diferencia entre verbs practicats (fins a 18) i pistes practicades (fins a 72). Practicar un verb una sola vegada no es presenta com a domini de totes les seves formes.

La ronda es pot reprendre abans o després de corregir una fila. El reinici demana confirmació i només afecta Anglès. La recuperació de JSON malformat i la manca d’accés a localStorage permeten continuar practicant amb un avís, sense tocar altres preparatoris. Les respostes escrites es tracten com a text, no com a HTML.

## Portada

«Pròxims exàmens» mostra **Medi · Missió Nutrició i Anglès · Irregular Verbs** alhora. Medi no s’ha retirat ni modificat. El tauler incorpora també una targeta d’Anglès de 6è. Les tres missions d’anglès de 5è continuen al seu arxiu.

El cercador/xat reconeix el nou preparatori i l’esmenta juntament amb Medi quan es pregunta pel pròxim examen. El resum de progrés de Medi de la portada continua referit només a Medi.

## Fitxers i original

Modificats:

- `index.html`: segon pròxim examen, targeta d’Anglès de 6è, recomanacions del xat i estil de la nova targeta d’examen.
- `.gitignore`: exclusió de `material_angles_6e_irregulars/`.

Creats a `angles_6e_irregulars/`:

- `index.html`, `styles.css` i `app.js`: interfície i flux de pràctica, errors i progrés.
- `data.js`: transcripció dels 18 verbs i les 72 pistes.
- `engine.js`: correcció, normalització, selecció equilibrada i validació del progrés.
- `font.json`: nom i empremta de la fotografia original.
- `protection.json`: empremtes de 167 fitxers preexistents, que es conserven intactes.
- `validate.cjs` i `browser-test.cjs`: validacions.
- Aquest informe.

L’original `Image.jfif` s’ha copiat sense canvis a `material_angles_6e_irregulars/`, exclosa de Git. No s’ha modificat la imatge de Downloads. La fotografia no és un asset del mòdul, no es carrega al navegador i no cal publicar-la per fer funcionar la pràctica. Les captures queden a `tmp/medi-review/angles-irregulars/`, també fora de Git.

## Validacions realitzades

Totes les comprovacions següents han passat:

1. `node angles_6e_irregulars/validate.cjs`: transcripció completa de les 18 files; 72 pistes; 216 caselles correctes i negatives; traduccions, was/were, accents, espais i errors ortogràfics; 1.000 seleccions amb verbs sense repetir i pistes equilibrades; dades/sessió; foto privada i portada; 167 empremtes dels preparatoris anteriors conservades.
2. `node angles_6e_irregulars/browser-test.cjs`: Chromium amb amplades 320, 390, 768 i 1.280 píxels i ruta amb prefix `/repasosg/`. Comprova les 72 pistes amb quatre variants cadascuna (288 correccions i 864 caselles): tot correcte o una de les tres caselles incorrecta. Verifica la pista no editable, el buit, la doble correcció, els errors, els temps intercanviats, el tractament de text HTML, el guardat d’esborranys i respostes, els resultats i la represa de ronda. També prova reinici acceptat/cancel·lat, dades corruptes, emmagatzematge bloquejat i preferència de moviment reduït. Conserva byte a byte les claus antigues, comprova Medi i Anglès a la portada i les missions de 5è. Sense errors JavaScript, recursos 404, desbordament horitzontal ni peticions de la fotografia original.
3. `node medi_6e_nutricio/validate.cjs`: banc de Medi actual i simulacres intactes.
4. `node medi_6e_cos_huma/validate.cjs`: banc del Medi anterior intacte.
5. `node mates_6e_divisibilitat/validate.cjs`: banc de Matemàtiques intacte.
6. Comprovació de sintaxi i `git diff --check`.

S’han generat **28 captures** i una galeria a `../tmp/medi-review/angles-irregulars/captures.html`. S’han inspeccionat el cas «cut» sense respostes en mòbil, la correcció completa en escriptori, «be» amb una forma incompleta i la portada amb els dos exàmens.

## Estat

Preparat per revisar en local a `http://127.0.0.1:8765/angles_6e_irregulars/index.html`. No s’ha fet commit, push ni desplegament. La validació responsive és amb Chromium; no s’ha provat en Safari/iOS ni en un telèfon físic. La publicació queda pendent de revisió i autorització.

## Millora decorativa autoritzada · 18 de novembre

S’ha afegit **Pip**, un mussol dibuixat en SVG dins del codi, amb un llapis i missatges d’ànim en català. Acompanya l’inici, cada fila i el final de la ronda. Els missatges no donen pistes sobre les respostes concretes ni introdueixen verbs nous.

La capçalera incorpora adhesius de quadern, un llapis, estrelles i un fons de punts discret. Sis estrelles decoratives marquen l’avanç de la ronda; reflecteixen les files completades, no una recompensa reservada als encerts. La ronda acabada també celebra l’esforç de practicar. Hi ha una animació breu de celebració, sense bucles durant l’escriptura, que es desactiva amb la preferència de moviment reduït.

Els SVG i les estrelles són decoratius per a les tecnologies d’assistència; la barra de progrés existent continua indicant les files completades. No s’han afegit sons, dependències ni imatges externes. `data.js` i `engine.js` s’han conservat idèntics: mateixos verbs, criteris de correcció, clau i estructura de progrés.

Després del canvi visual han tornat a passar `validate.cjs`, les 288 correccions del navegador i les comprovacions responsive a 320/390/768/1280. S’han inspeccionat les captures renovades de l’inici en mòbil i de l’activitat en escriptori. La publicació inclou aquesta millora.
