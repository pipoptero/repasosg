# Revisió pedagògica del banc de Medi 6è · revisió 2

## Resultat i abast

Es mantenen **180 preguntes, 60 per món**, amb **180 pistes diferents i 540 explicacions d'opcions incorrectes diferents**, redactades individualment en català. Les dades editables són exclusivament a `build_bank.py`; `questions.js`, `inventari.json` i `bank-meta.json` es regeneren executant aquest fitxer. La generació serialitza els ítems explícits: no intercanvia noms ni crea preguntes per plantilles.

S'han revisat els 180 enunciats, les 720 opcions, les solucions i la seva relació amb la teoria. Les tres explicacions incorrectes de cada ítem expliquen la confusió de l'opció triada, en lloc de repetir el mateix paràgraf. El feedback de la web ara mostra aquesta explicació específica, a més de la solució, l'explicació correcta i l'enllaç a teoria. Abans, `perQueNo` no es mostrava al feedback actiu.

No s'han modificat `content.js`, `theory-enrichment.js`, `visuals.js`, les 13 imatges, els vídeos, els estils, la portada ni els altres preparatoris. Les empremtes SHA-256 inicials són a `bank-protection.json` i es comproven automàticament.

## Fonts i contrast

Llegides íntegrament les set pàgines de les tres fitxes essencials i les tres pàgines dels documents de cura. Revisió visual dels textos integrats en imatges, especialment locomotor i les quatre pàgines de sistema nerviós:

- `APARELL RESPIRATORI_esencial.pdf`, p. 1–2.
- `APARELL LOCOMOTOR_esencial.pdf`, p. 1.
- `SISTEMA NERVIÓS_esencial.pdf`, p. 1–4.
- `CUIDEM APARELL LOCOMOTOR.pdf`, p. 1.
- `CURA DEL SISTEMA NERVIÓS.pdf`, p. 1–2.

Els cinc ítems que necessiten continguts exclusius de suport continuen citant `El_Cuaderno_Secreto_de_Súper_Anatomía.pdf`, p. 9 o 12, amb etiqueta d'ampliació. Es tracta de contracció/relaxació desenvolupada i tendons, no de dades tècniques noves. No hi ha cap resposta correcta essencial basada només en les guies.

Les metadades noves utilitzen els noms reals amb `_esencial`. Els documents de cura mantenen els seus noms reals sense aquest sufix. La prova comprova que tots els fitxers citats existeixen. Les referències històriques dins de la teoria i les imatges no s'han canviat perquè quedaven fora de l'abast.

## Incidències corregides i identificadors

| Ítem anterior | Resultat | Motiu |
|---|---|---|
| `respiratori-010` | Mateix ID; alternatives sobre balanç O₂/CO₂ i ventilació | Substituir distractors d'altres aparells per confusions respiratòries |
| `respiratori-057` | Mateix ID; solució completa cèl·lules → sang → alvèols → exterior | El recorregut ha de començar on es produeix el CO₂ |
| `locomotor-021` | Mateix ID; comparar articulació, lligament, cartílag i medul·la òssia | Diferenciar la zona de contacte dels seus components i de l'interior ossi |
| `locomotor-032` | Mateix concepte/ID; reformulada la relació dieta-calci-ossos | Alternatives conceptuals més útils que gasos presentats com a minerals |
| `locomotor-044` | Retirat; substituït per `locomotor-061` | Duplicava postura; ara aplica duresa/rigidesa a consistència i resistència |
| `locomotor-047` | Retirat; substituït per `locomotor-062` | Duplicava repartiment de càrregues; ara interpreta el cartílag del dibuix |
| `locomotor-048` | Retirat; substituït per `locomotor-063` | Duplicava aixecament; ara situa la formació sanguínia al moll de l'os |
| `locomotor-050` | Retirat; substituït per `locomotor-064` | Una altra combinació de postura es reemplaça per mobilitat semimòbil aplicada |
| `locomotor-053` | Mateix concepte/ID; cas de banda resistent al genoll | Lligaments essencials, amb font escolar; situació aplicada diferent de la definició de 026 |
| `locomotor-058` | Mateix concepte/ID; precisada com a resposta muscular involuntària | Avalar-la directament amb la classificació de respostes de la fitxa escolar |
| `nervios-009` | Retirat; substituït per `nervios-061` | Afegir pituïtària i captació olfactiva en lloc d'una altra pregunta visual redundant |
| `nervios-028` | Retirat; substituït per `nervios-062` | Retirar l'errata auxiliar i identificar el soma en el dibuix de la neurona |

Els altres enunciats es mantenen quan el concepte i la redacció ja eren adequats, però les opcions, pistes i feedbacks s'han revisat igualment. En total es conserven **174 identificadors** i se substitueixen **6** perquè canvia el concepte. La correspondència figura també a `bank-meta.json` i al camp `replaces` dels ítems nous.

## Classificació i balanç

**175 essencials i 5 ampliacions**, després de contrastar individualment les fonts. Han passat a essencials:

- `locomotor-053`: lligament, fitxa locomotor p. 1.
- `locomotor-056` i `locomotor-060`: coordinació i resposta motora, fitxa nerviós p. 4.
- `locomotor-057` i `locomotor-058`: resposta voluntària/involuntària, fitxa nerviós p. 2.

Per als dos últims, l'enllaç porta a `n-respostes` del món nerviós mitjançant `theoryTema`; així es repassa l'explicació essencial, sense presentar-la com si depengués de la targeta opcional de tendons. La teoria no es modifica.

Es mantenen com a ampliació `locomotor-051`, `052`, `054`, `055` i `059`, que necessiten el desenvolupament muscular/tendinós de la guia.

| Món | Distribució del banc | Essencials / ampliació |
|---|---|---|
| Respiratori | Finalitat 10; recorregut 10; òrgans 10; moviments 10; intercanvi 10; connexions 10 | 60 / 0 |
| Locomotor | Funcions 12; ossos 12; articulacions 13; cura i activitat 10; postura 6; músculs i unions 5; control del moviment 2 | 55 / 5 |
| Nerviós | Sentits 10; respostes 10; neurones 10; sistema central 10; nervis 10; salut 10 | 60 / 0 |

La cura/postura locomotora passa de 20 preguntes a **16**. El simulacre manté 30 preguntes, 10 per món, i prohibeix ampliacions. A locomotor fixa aquesta cobertura: **2 funcions/control, 3 ossos, 3 articulacions i 2 cura/postura**. Els dos ítems de control del moviment també poden ocupar les places de funcions. Les quotes són disjuntes i no repeteixen ítems. Respiratori i nerviós conserven la selecció que inclou els seus sis subtemes i completa fins a 10.

## Exemples abans/després

**Articulació, `locomotor-021`.** Abans, opcions com cèl·lula nerviosa o sac pulmonar, i un missatge genèric que repetia la solució. Ara:

- Si tria «Una banda resistent que uneix ossos»: «Això descriu un lligament, que és un component de la unió, no tota la zona de contacte.»
- Si tria «Una superfície flexible que cobreix un os»: «Això descriu el cartílag articular, no el conjunt de la zona on contacten ossos.»
- Si tria el lloc que forma cèl·lules sanguínies: s'explica que és medul·la òssia, situada a l'interior, no una articulació.

**Finalitat respiratòria, `respiratori-010`.** Abans, els distractors parlaven d'estímuls, sang i unions musculars sense relació amb el problema. Ara es contraposen invertir els gasos, retenir CO₂ i limitar-se a ventilar. Si tria retenir CO₂, el feedback relaciona explícitament l'error amb l'eliminació del residu. Si tria només fer entrar/sortir aire, explica per què també cal intercanvi alveolar.

**Pituïtària, `nervios-061`.** Les alternatives distingeixen olfacte, gust, oïda i interpretació central. Si tria sabors, es recorda que aquests els capten les papil·les de la llengua; si tria sons, que els capta l'orella; si tria interpretar totes les respostes, que el receptor capta i el sistema central interpreta.

Les pistes també canvien: en lloc del mateix resum per a deu ítems, cada pregunta proposa una operació de raonament concreta (seguir una direcció, distingir lloc i component, ordenar passos, localitzar receptor o separar decisió i resposta). No es limita a repetir literalment l'opció correcta.

## Compatibilitat del progrés

Es manté la clau `medi6e_v1` i la versió estructural 1; s'afegeix **`bankRevision: 2`** per separar format de dades i revisió editorial.

La migració és pura: construeix el nou estat en memòria, sense modificar l'objecte rebut ni escriure claus d'altres cursos. Abans de filtrar, desa una còpia del progrés anterior a `bankHistory`, inclosos intents, errors, targetes llegides, dies, simulacres i sessió. Els intents i errors dels IDs que mantenen concepte continuen actius. Els sis IDs retirats queden a l'arxiu i els sis nous comencen sense intents; no es transfereix domini d'una pregunta de postura a una d'ossos.

Les sessions anteriors s'arxiven i no es reprenen amb opcions canviades, encara que continguessin només IDs conservats: un índex d'opció antic podria significar una altra cosa. Es mostra un avís amb «Entesos». Els simulacres acabats conserven la nota i s'identifiquen com a «banc anterior». Les sessions noves de revisió 2 sí que es reprenen normalment.

La migració es persisteix en el següent guardat normal o en prémer «Entesos»; no esborra la clau antiga de manera prèvia. És idempotent: tornar a carregar un estat de revisió 2 no crea un segon arxiu. `bankHistory` és una còpia JSON recuperable en el navegador; no s'ha creat una nova pantalla per executar sessions antigues. El reinici voluntari de Medi amb confirmació conserva el seu comportament de reiniciar Medi, inclòs l'arxiu d'aquest mòdul.

Totes les proves de migració s'han executat amb dades simulades i contextos aïllats de Chromium, sense accedir al perfil real ni a l'emmagatzematge de l'alumna.

## Fitxers

- `build_bank.py`: font editorial explícita de les 180 preguntes, amb tots els camps.
- `questions.js`, `inventari.json`, `bank-meta.json`: generats des de la font anterior.
- `app.js`: mostrar el feedback seleccionat, enllaços transversals a teoria i avís/etiquetes de compatibilitat; sense redisseny.
- `engine.js`: quotes locomotores i compatibilitat de revisió del banc; la barreja, correcció i estructura general de progrés es conserven.
- `bank-audit-test.cjs`, `bank-protection.json`, `bank-ui-protection.json`: proves noves i empremtes de protecció.
- `validate.cjs`, `visual-test.cjs`, `theory-test.cjs`: adaptar comprovacions a les fonts/ancoratges i al fet que aquesta intervenció autoritza canvis al banc/motor. Les proteccions de teoria i imatges continuen actives; les antigues comparacions de banc s'han substituït per la nova auditoria.
- Aquest informe i l'enllaç documental del README.

## Validacions i límits

PASS: banc de 180, 60/món, IDs i enunciats únics, quatre opcions diferents, índex correcte, 180 pistes, 540 feedbacks diferents i específics, zero patrons genèrics prohibits en les dades actives, fonts existents, coherència amb inventari i ancoratges (inclosos els dos transversals).

PASS: 1.000 simulacres 10+10+10, sense duplicats ni ampliació, amb quotes locomotores 2+3+3+2. També s'ha executat la validació existent de 1.000 simulacres.

PASS en navegador: les 720 combinacions de pregunta/opció, comprovant el text de cada botó després de barrejar, el feedback corresponent, solució i explicació visibles, protecció davant doble resposta i cua d'errors. Migració desada, avisos, notes antigues etiquetades i altra clau històrica intacta. Prova de la correcció en mòbil de 390 px.

PASS de les bateries existents: navegació, filtres, rondes, persistència, repàs d'errors, simulacre complet i nota, vídeos, visor i 13 imatges, teoria ampliada, amplades 390/768/1280, sense errors JS ni 404. També es comprova la identitat del codi de mapa, teoria, activitats, pràctica, barreja de posicions en pantalla, registre de respostes i repàs, per limitar els canvis funcionals als autoritzats. Les proves de sintaxi i `git diff --check` també s'han executat.

La correcció científica, l'exclusivitat semàntica de la resposta i la qualitat pedagògica s'han revisat editorialment; ni la unicitat de textos ni una longitud mínima les demostren per si soles. Les proves automàtiques comproven l'estructura i el comportament. No s'ha fet una prova d'aprenentatge amb una alumna real ni una calibració estadística dels nivells de dificultat.

No queda cap pregunta sense una font justificada. Els cinc ítems de suport estan identificats i exclosos dels simulacres. Tot queda local, sense commit, push ni desplegament.

## Revisió ítem per ítem

En totes les files s'han revisat les quatre opcions, la solució, la pista i els tres feedbacks. «Mantingut» significa concepte/ID conservat, no absència d'edició. La taula següent registra la resposta, la font i l'ancoratge finals de cada ítem.

| ID final | Resultat editorial | Resposta correcta revisada | Font i pàgina | Teoria |
|---|---|---|---|---|
| respiratori-001 | Concepte/ID mantingut; imprescindible | Per obtenir energia dels nutrients | APARELL RESPIRATORI_esencial.pdf · 1 | respiratori/r-finalitat |
| respiratori-002 | Concepte/ID mantingut; imprescindible | Diòxid de carboni | APARELL RESPIRATORI_esencial.pdf · 1 | respiratori/r-finalitat |
| respiratori-003 | Concepte/ID mantingut; imprescindible | Aporta oxigen que les cèl·lules necessiten | APARELL RESPIRATORI_esencial.pdf · 1 | respiratori/r-finalitat |
| respiratori-004 | Concepte/ID mantingut; imprescindible | L'obtenció d'energia dels nutrients | APARELL RESPIRATORI_esencial.pdf · 1 | respiratori/r-finalitat |
| respiratori-005 | Concepte/ID mantingut; imprescindible | Necessiten oxigen i produeixen CO₂ | APARELL RESPIRATORI_esencial.pdf · 1 | respiratori/r-finalitat |
| respiratori-006 | Concepte/ID mantingut; imprescindible | Els nutrients i l'oxigen intervenen en l'obtenció d'energia | APARELL RESPIRATORI_esencial.pdf · 1 | respiratori/r-finalitat |
| respiratori-007 | Concepte/ID mantingut; imprescindible | Perquè cal eliminar aquest residu | APARELL RESPIRATORI_esencial.pdf · 1 | respiratori/r-finalitat |
| respiratori-008 | Concepte/ID mantingut; imprescindible | Oxigen | APARELL RESPIRATORI_esencial.pdf · 1 | respiratori/r-finalitat |
| respiratori-009 | Concepte/ID mantingut; imprescindible | L'oxigen captat acaba arribant a les cèl·lules | APARELL RESPIRATORI_esencial.pdf · 1 | respiratori/r-finalitat |
| respiratori-010 | Concepte/ID mantingut; imprescindible | Captar oxigen i eliminar diòxid de carboni | APARELL RESPIRATORI_esencial.pdf · 1 | respiratori/r-finalitat |
| respiratori-011 | Concepte/ID mantingut; imprescindible | A la faringe | APARELL RESPIRATORI_esencial.pdf · 1 | respiratori/r-vies |
| respiratori-012 | Concepte/ID mantingut; imprescindible | Faringe → laringe → tràquea | APARELL RESPIRATORI_esencial.pdf · 1 | respiratori/r-vies |
| respiratori-013 | Concepte/ID mantingut; imprescindible | Els bronquis | APARELL RESPIRATORI_esencial.pdf · 1 | respiratori/r-vies |
| respiratori-014 | Concepte/ID mantingut; imprescindible | Els bronquíols | APARELL RESPIRATORI_esencial.pdf · 1 | respiratori/r-vies |
| respiratori-015 | Concepte/ID mantingut; imprescindible | Els alvèols pulmonars | APARELL RESPIRATORI_esencial.pdf · 1 | respiratori/r-vies |
| respiratori-016 | Concepte/ID mantingut; imprescindible | Bronquis | APARELL RESPIRATORI_esencial.pdf · 1 | respiratori/r-vies |
| respiratori-017 | Concepte/ID mantingut; imprescindible | Primer bronquis, després bronquíols | APARELL RESPIRATORI_esencial.pdf · 1 | respiratori/r-vies |
| respiratori-018 | Concepte/ID mantingut; imprescindible | Cap a la tràquea | APARELL RESPIRATORI_esencial.pdf · 1 | respiratori/r-vies |
| respiratori-019 | Concepte/ID mantingut; imprescindible | La laringe | APARELL RESPIRATORI_esencial.pdf · 1 | respiratori/r-vies |
| respiratori-020 | Concepte/ID mantingut; imprescindible | Nas → vies respiratòries → alvèols | APARELL RESPIRATORI_esencial.pdf · 1 | respiratori/r-vies |
| respiratori-021 | Concepte/ID mantingut; imprescindible | Les fosses nasals | APARELL RESPIRATORI_esencial.pdf · 1 | respiratori/r-organs |
| respiratori-022 | Concepte/ID mantingut; imprescindible | A la laringe | APARELL RESPIRATORI_esencial.pdf · 1 | respiratori/r-organs |
| respiratori-023 | Concepte/ID mantingut; imprescindible | La tràquea | APARELL RESPIRATORI_esencial.pdf · 1 | respiratori/r-organs |
| respiratori-024 | Concepte/ID mantingut; imprescindible | Dos bronquis | APARELL RESPIRATORI_esencial.pdf · 1 | respiratori/r-organs |
| respiratori-025 | Concepte/ID mantingut; imprescindible | Ramificacions més primes dels bronquis | APARELL RESPIRATORI_esencial.pdf · 1 | respiratori/r-organs |
| respiratori-026 | Concepte/ID mantingut; imprescindible | Dins la cavitat toràcica, darrere les costelles | APARELL RESPIRATORI_esencial.pdf · 1 | respiratori/r-organs |
| respiratori-027 | Concepte/ID mantingut; imprescindible | Com dos sacs esponjosos | APARELL RESPIRATORI_esencial.pdf · 1 | respiratori/r-organs |
| respiratori-028 | Concepte/ID mantingut; imprescindible | La faringe | APARELL RESPIRATORI_esencial.pdf · 1 | respiratori/r-organs |
| respiratori-029 | Concepte/ID mantingut; imprescindible | A les vies respiratòries | APARELL RESPIRATORI_esencial.pdf · 1 | respiratori/r-organs |
| respiratori-030 | Concepte/ID mantingut; imprescindible | Pulmons i vies respiratòries | APARELL RESPIRATORI_esencial.pdf · 1 | respiratori/r-organs |
| respiratori-031 | Concepte/ID mantingut; imprescindible | Es contrau i baixa | APARELL RESPIRATORI_esencial.pdf · 2 | respiratori/r-moviments |
| respiratori-032 | Concepte/ID mantingut; imprescindible | Es relaxa i puja | APARELL RESPIRATORI_esencial.pdf · 2 | respiratori/r-moviments |
| respiratori-033 | Concepte/ID mantingut; imprescindible | Augmenta el volum de la cavitat toràcica | APARELL RESPIRATORI_esencial.pdf · 2 | respiratori/r-moviments |
| respiratori-034 | Concepte/ID mantingut; imprescindible | Expiració | APARELL RESPIRATORI_esencial.pdf · 2 | respiratori/r-moviments |
| respiratori-035 | Concepte/ID mantingut; imprescindible | Inspiració | APARELL RESPIRATORI_esencial.pdf · 2 | respiratori/r-moviments |
| respiratori-036 | Concepte/ID mantingut; imprescindible | Sota els pulmons | APARELL RESPIRATORI_esencial.pdf · 2 | respiratori/r-moviments |
| respiratori-037 | Concepte/ID mantingut; imprescindible | Un múscul pla | APARELL RESPIRATORI_esencial.pdf · 2 | respiratori/r-moviments |
| respiratori-038 | Concepte/ID mantingut; imprescindible | Relaxat i més amunt | APARELL RESPIRATORI_esencial.pdf · 2 | respiratori/r-moviments |
| respiratori-039 | Concepte/ID mantingut; imprescindible | Diafragma baixa → augmenta volum → entra aire | APARELL RESPIRATORI_esencial.pdf · 2 | respiratori/r-moviments |
| respiratori-040 | Concepte/ID mantingut; imprescindible | Ha de dibuixar-lo baixant en contreure's | APARELL RESPIRATORI_esencial.pdf · 2 | respiratori/r-moviments |
| respiratori-041 | Concepte/ID mantingut; imprescindible | Als alvèols pulmonars | APARELL RESPIRATORI_esencial.pdf · 2 | respiratori/r-gasos |
| respiratori-042 | Concepte/ID mantingut; imprescindible | Alvèol → sang | APARELL RESPIRATORI_esencial.pdf · 2 | respiratori/r-gasos |
| respiratori-043 | Concepte/ID mantingut; imprescindible | Sang → alvèol | APARELL RESPIRATORI_esencial.pdf · 2 | respiratori/r-gasos |
| respiratori-044 | Concepte/ID mantingut; imprescindible | Vasos sanguinis | APARELL RESPIRATORI_esencial.pdf · 2 | respiratori/r-gasos |
| respiratori-045 | Concepte/ID mantingut; imprescindible | La sang | APARELL RESPIRATORI_esencial.pdf · 2 | respiratori/r-gasos |
| respiratori-046 | Concepte/ID mantingut; imprescindible | Als alvèols | APARELL RESPIRATORI_esencial.pdf · 2 | respiratori/r-gasos |
| respiratori-047 | Concepte/ID mantingut; imprescindible | L'expiració | APARELL RESPIRATORI_esencial.pdf · 2 | respiratori/r-gasos |
| respiratori-048 | Concepte/ID mantingut; imprescindible | A través de les seves parets | APARELL RESPIRATORI_esencial.pdf · 2 | respiratori/r-gasos |
| respiratori-049 | Concepte/ID mantingut; imprescindible | Invertir la fletxa d'O₂ | APARELL RESPIRATORI_esencial.pdf · 2 | respiratori/r-gasos |
| respiratori-050 | Concepte/ID mantingut; imprescindible | Petits sacs | APARELL RESPIRATORI_esencial.pdf · 2 | respiratori/r-gasos |
| respiratori-051 | Concepte/ID mantingut; imprescindible | Inspirar mou aire; l'intercanvi fa passar gasos entre alvèols i sang | APARELL RESPIRATORI_esencial.pdf · 1–2 | respiratori/r-gasos |
| respiratori-052 | Concepte/ID mantingut; imprescindible | L'intercanvi gasós | APARELL RESPIRATORI_esencial.pdf · 1–2 | respiratori/r-gasos |
| respiratori-053 | Concepte/ID mantingut; imprescindible | Laringe: conté les cordes vocals | APARELL RESPIRATORI_esencial.pdf · 1 | respiratori/r-organs |
| respiratori-054 | Concepte/ID mantingut; imprescindible | S'escalfa, s'humiteja i es filtra | APARELL RESPIRATORI_esencial.pdf · 1 | respiratori/r-organs |
| respiratori-055 | Concepte/ID mantingut; imprescindible | Els bronquis es ramifiquen en conductes més fins | APARELL RESPIRATORI_esencial.pdf · 1 | respiratori/r-vies |
| respiratori-056 | Concepte/ID mantingut; imprescindible | Sang → cèl·lules | APARELL RESPIRATORI_esencial.pdf · 1–2 | respiratori/r-gasos |
| respiratori-057 | Concepte/ID mantingut; imprescindible | Cèl·lules → sang → alvèols → exterior | APARELL RESPIRATORI_esencial.pdf · 1–2 | respiratori/r-gasos |
| respiratori-058 | Concepte/ID mantingut; imprescindible | El diafragma és un múscul diferent dels pulmons | APARELL RESPIRATORI_esencial.pdf · 1–2 | respiratori/r-moviments |
| respiratori-059 | Concepte/ID mantingut; imprescindible | Fosses nasals i alvèols, respectivament | APARELL RESPIRATORI_esencial.pdf · 1–2 | respiratori/r-gasos |
| respiratori-060 | Concepte/ID mantingut; imprescindible | L'oxigen passa a la sang i arriba a les cèl·lules | APARELL RESPIRATORI_esencial.pdf · 1–2 | respiratori/r-gasos |
| locomotor-001 | Concepte/ID mantingut; imprescindible | Esquelet i musculatura | APARELL LOCOMOTOR_esencial.pdf · 1 | locomotor/l-funcions |
| locomotor-002 | Concepte/ID mantingut; imprescindible | Sostenir el cos | APARELL LOCOMOTOR_esencial.pdf · 1 | locomotor/l-funcions |
| locomotor-003 | Concepte/ID mantingut; imprescindible | Treballa juntament amb la musculatura | APARELL LOCOMOTOR_esencial.pdf · 1 | locomotor/l-funcions |
| locomotor-004 | Concepte/ID mantingut; imprescindible | Protecció d'òrgans interns | APARELL LOCOMOTOR_esencial.pdf · 1 | locomotor/l-funcions |
| locomotor-005 | Concepte/ID mantingut; imprescindible | Ossos, cartílags i articulacions | APARELL LOCOMOTOR_esencial.pdf · 1 | locomotor/l-funcions |
| locomotor-006 | Concepte/ID mantingut; imprescindible | La musculatura també hi participa | APARELL LOCOMOTOR_esencial.pdf · 1 | locomotor/l-funcions |
| locomotor-007 | Concepte/ID mantingut; imprescindible | L'esquelet dona forma al cos | APARELL LOCOMOTOR_esencial.pdf · 1 | locomotor/l-funcions |
| locomotor-008 | Concepte/ID mantingut; imprescindible | L'esquelet sosté el cos mentre caminem amb els músculs | APARELL LOCOMOTOR_esencial.pdf · 1 | locomotor/l-funcions |
| locomotor-009 | Concepte/ID mantingut; imprescindible | Alguns ossos els protegeixen | APARELL LOCOMOTOR_esencial.pdf · 1 | locomotor/l-funcions |
| locomotor-010 | Concepte/ID mantingut; imprescindible | Una estructura de suport i protecció que ajuda a moure'ns | APARELL LOCOMOTOR_esencial.pdf · 1 | locomotor/l-funcions |
| locomotor-011 | Concepte/ID mantingut; imprescindible | Durs i rígids | APARELL LOCOMOTOR_esencial.pdf · 1 | locomotor/l-ossos |
| locomotor-012 | Concepte/ID mantingut; imprescindible | Pla | APARELL LOCOMOTOR_esencial.pdf · 1 | locomotor/l-ossos |
| locomotor-013 | Concepte/ID mantingut; imprescindible | Ossos plans | APARELL LOCOMOTOR_esencial.pdf · 1 | locomotor/l-ossos |
| locomotor-014 | Concepte/ID mantingut; imprescindible | A mans i peus | APARELL LOCOMOTOR_esencial.pdf · 1 | locomotor/l-ossos |
| locomotor-015 | Concepte/ID mantingut; imprescindible | Ossos dels braços i les cames | APARELL LOCOMOTOR_esencial.pdf · 1 | locomotor/l-ossos |
| locomotor-016 | Concepte/ID mantingut; imprescindible | A la medul·la òssia | APARELL LOCOMOTOR_esencial.pdf · 1 | locomotor/l-ossos |
| locomotor-017 | Concepte/ID mantingut; imprescindible | El cartílag és més flexible que l'os | APARELL LOCOMOTOR_esencial.pdf · 1 | locomotor/l-ossos |
| locomotor-018 | Concepte/ID mantingut; imprescindible | A la medul·la òssia | APARELL LOCOMOTOR_esencial.pdf · 1 | locomotor/l-ossos |
| locomotor-019 | Concepte/ID mantingut; imprescindible | Pla: omòplat | APARELL LOCOMOTOR_esencial.pdf · 1 | locomotor/l-ossos |
| locomotor-020 | Concepte/ID mantingut; imprescindible | L'òssia, situada dins els ossos | APARELL LOCOMOTOR_esencial.pdf · 1 | locomotor/l-ossos |
| locomotor-021 | Concepte/ID mantingut; imprescindible | Una zona de contacte entre ossos | APARELL LOCOMOTOR_esencial.pdf · 1 | locomotor/l-articulacions |
| locomotor-022 | Concepte/ID mantingut; imprescindible | Mòbil | APARELL LOCOMOTOR_esencial.pdf · 1 | locomotor/l-articulacions |
| locomotor-023 | Concepte/ID mantingut; imprescindible | Mòbil | APARELL LOCOMOTOR_esencial.pdf · 1 | locomotor/l-articulacions |
| locomotor-024 | Concepte/ID mantingut; imprescindible | Semimòbils | APARELL LOCOMOTOR_esencial.pdf · 1 | locomotor/l-articulacions |
| locomotor-025 | Concepte/ID mantingut; imprescindible | Unió entre ossos del crani | APARELL LOCOMOTOR_esencial.pdf · 1 | locomotor/l-articulacions |
| locomotor-026 | Concepte/ID mantingut; imprescindible | Els lligaments | APARELL LOCOMOTOR_esencial.pdf · 1 | locomotor/l-articulacions |
| locomotor-027 | Concepte/ID mantingut; imprescindible | El cartílag | APARELL LOCOMOTOR_esencial.pdf · 1 | locomotor/l-articulacions |
| locomotor-028 | Concepte/ID mantingut; imprescindible | Tenen tipus d'articulacions diferents | APARELL LOCOMOTOR_esencial.pdf · 1 | locomotor/l-articulacions |
| locomotor-029 | Concepte/ID mantingut; imprescindible | Un lligament | APARELL LOCOMOTOR_esencial.pdf · 1 | locomotor/l-articulacions |
| locomotor-030 | Concepte/ID mantingut; imprescindible | Genoll → columna → unions del crani | APARELL LOCOMOTOR_esencial.pdf · 1 | locomotor/l-articulacions |
| locomotor-031 | Concepte/ID mantingut; imprescindible | Seguir una dieta equilibrada | CUIDEM APARELL LOCOMOTOR.pdf · 1 | locomotor/l-cura |
| locomotor-032 | Reformulat, concepte conservat; imprescindible | El calci és important per als ossos | CUIDEM APARELL LOCOMOTOR.pdf · 1 | locomotor/l-cura |
| locomotor-033 | Concepte/ID mantingut; imprescindible | Llet i derivats | CUIDEM APARELL LOCOMOTOR.pdf · 1 | locomotor/l-cura |
| locomotor-034 | Concepte/ID mantingut; imprescindible | Adaptat a l'edat | CUIDEM APARELL LOCOMOTOR.pdf · 1 | locomotor/l-cura |
| locomotor-035 | Concepte/ID mantingut; imprescindible | Fer escalfament | CUIDEM APARELL LOCOMOTOR.pdf · 1 | locomotor/l-cura |
| locomotor-036 | Concepte/ID mantingut; imprescindible | Abans i després de l'activitat | CUIDEM APARELL LOCOMOTOR.pdf · 1 | locomotor/l-cura |
| locomotor-037 | Concepte/ID mantingut; imprescindible | Força, elasticitat i resistència | CUIDEM APARELL LOCOMOTOR.pdf · 1 | locomotor/l-cura |
| locomotor-038 | Concepte/ID mantingut; imprescindible | Evitar esforços excessius | CUIDEM APARELL LOCOMOTOR.pdf · 1 | locomotor/l-cura |
| locomotor-039 | Concepte/ID mantingut; imprescindible | Escalfar i adaptar l'esforç | CUIDEM APARELL LOCOMOTOR.pdf · 1 | locomotor/l-cura |
| locomotor-040 | Concepte/ID mantingut; imprescindible | Dieta equilibrada i exercici adequat | CUIDEM APARELL LOCOMOTOR.pdf · 1 | locomotor/l-cura |
| locomotor-041 | Concepte/ID mantingut; imprescindible | Flexionant les cames | CUIDEM APARELL LOCOMOTOR.pdf · 1 | locomotor/l-cura |
| locomotor-042 | Concepte/ID mantingut; imprescindible | Repartint el pes de manera equilibrada | CUIDEM APARELL LOCOMOTOR.pdf · 1 | locomotor/l-cura |
| locomotor-043 | Concepte/ID mantingut; imprescindible | Esquena recta | CUIDEM APARELL LOCOMOTOR.pdf · 1 | locomotor/l-cura |
| locomotor-061 | Substitueix locomotor-044; imprescindible | Consistència i resistència | APARELL LOCOMOTOR_esencial.pdf · 1 | locomotor/l-ossos |
| locomotor-045 | Concepte/ID mantingut; imprescindible | Adequat, sense ser massa tou | CUIDEM APARELL LOCOMOTOR.pdf · 1 | locomotor/l-cura |
| locomotor-046 | Concepte/ID mantingut; imprescindible | Que sigui massa alt | CUIDEM APARELL LOCOMOTOR.pdf · 1 | locomotor/l-cura |
| locomotor-062 | Substitueix locomotor-047; imprescindible | Protegeix les superfícies de contacte | APARELL LOCOMOTOR_esencial.pdf · 1 | locomotor/l-articulacions |
| locomotor-063 | Substitueix locomotor-048; imprescindible | La formació de cèl·lules sanguínies | APARELL LOCOMOTOR_esencial.pdf · 1 | locomotor/l-ossos |
| locomotor-049 | Concepte/ID mantingut; imprescindible | Fer servir matalàs i coixí adequats | CUIDEM APARELL LOCOMOTOR.pdf · 1 | locomotor/l-cura |
| locomotor-064 | Substitueix locomotor-050; imprescindible | Les articulacions de la columna vertebral | APARELL LOCOMOTOR_esencial.pdf · 1 | locomotor/l-articulacions |
| locomotor-051 | Concepte/ID mantingut; ampliació | Es contrau | El_Cuaderno_Secreto_de_Súper_Anatomía.pdf · 9 | locomotor/l-musculs |
| locomotor-052 | Concepte/ID mantingut; ampliació | Múscul amb os | El_Cuaderno_Secreto_de_Súper_Anatomía.pdf · 12 | locomotor/l-musculs |
| locomotor-053 | Reformulat, concepte conservat; imprescindible | Lligament: unió d’os amb os | APARELL LOCOMOTOR_esencial.pdf · 1 | locomotor/l-articulacions |
| locomotor-054 | Concepte/ID mantingut; ampliació | Tendó | El_Cuaderno_Secreto_de_Súper_Anatomía.pdf · 12 | locomotor/l-musculs |
| locomotor-055 | Concepte/ID mantingut; ampliació | El tendó uneix múscul-os i el lligament os-os | El_Cuaderno_Secreto_de_Súper_Anatomía.pdf · 12 | locomotor/l-musculs |
| locomotor-056 | Concepte/ID mantingut; imprescindible | El sistema nerviós | SISTEMA NERVIÓS_esencial.pdf · 4 | locomotor/l-funcions |
| locomotor-057 | Concepte/ID mantingut; imprescindible | Voluntari | SISTEMA NERVIÓS_esencial.pdf · 2 | nervios/n-respostes |
| locomotor-058 | Reformulat, concepte conservat; imprescindible | Actua sense una decisió conscient | SISTEMA NERVIÓS_esencial.pdf · 2 | nervios/n-respostes |
| locomotor-059 | Concepte/ID mantingut; ampliació | També es relaxen | El_Cuaderno_Secreto_de_Súper_Anatomía.pdf · 9 | locomotor/l-musculs |
| locomotor-060 | Concepte/ID mantingut; imprescindible | Ordre nerviosa → múscul → moviment de l'os | SISTEMA NERVIÓS_esencial.pdf · 4 | locomotor/l-funcions |
| nervios-001 | Concepte/ID mantingut; imprescindible | Els ulls | SISTEMA NERVIÓS_esencial.pdf · 1 | nervios/n-sentits |
| nervios-002 | Concepte/ID mantingut; imprescindible | L'oïda | SISTEMA NERVIÓS_esencial.pdf · 1 | nervios/n-sentits |
| nervios-003 | Concepte/ID mantingut; imprescindible | La pell | SISTEMA NERVIÓS_esencial.pdf · 1 | nervios/n-sentits |
| nervios-004 | Concepte/ID mantingut; imprescindible | L'olfacte | SISTEMA NERVIÓS_esencial.pdf · 1 | nervios/n-sentits |
| nervios-005 | Concepte/ID mantingut; imprescindible | Les papil·les gustatives | SISTEMA NERVIÓS_esencial.pdf · 1 | nervios/n-sentits |
| nervios-006 | Concepte/ID mantingut; imprescindible | El tacte | SISTEMA NERVIÓS_esencial.pdf · 1 | nervios/n-sentits |
| nervios-007 | Concepte/ID mantingut; imprescindible | Informació visual de l'entorn | SISTEMA NERVIÓS_esencial.pdf · 1 | nervios/n-sentits |
| nervios-008 | Concepte/ID mantingut; imprescindible | Captar informació → interpretar → respondre | SISTEMA NERVIÓS_esencial.pdf · 1 | nervios/n-sentits |
| nervios-061 | Substitueix nervios-009; imprescindible | Capta els estímuls olfactius | SISTEMA NERVIÓS_esencial.pdf · 1 | nervios/n-sentits |
| nervios-010 | Concepte/ID mantingut; imprescindible | Pell i temperatura | SISTEMA NERVIÓS_esencial.pdf · 1 | nervios/n-sentits |
| nervios-011 | Concepte/ID mantingut; imprescindible | Voluntària | SISTEMA NERVIÓS_esencial.pdf · 2–3 | nervios/n-respostes |
| nervios-012 | Concepte/ID mantingut; imprescindible | Reflexa | SISTEMA NERVIÓS_esencial.pdf · 2–3 | nervios/n-respostes |
| nervios-013 | Concepte/ID mantingut; imprescindible | El batec del cor | SISTEMA NERVIÓS_esencial.pdf · 2–3 | nervios/n-respostes |
| nervios-014 | Concepte/ID mantingut; imprescindible | Reflexa | SISTEMA NERVIÓS_esencial.pdf · 2–3 | nervios/n-respostes |
| nervios-015 | Concepte/ID mantingut; imprescindible | La fem conscientment i la podem decidir | SISTEMA NERVIÓS_esencial.pdf · 2–3 | nervios/n-respostes |
| nervios-016 | Concepte/ID mantingut; imprescindible | La medul·la espinal | SISTEMA NERVIÓS_esencial.pdf · 2–3 | nervios/n-respostes |
| nervios-017 | Concepte/ID mantingut; imprescindible | De manera involuntària automàtica | SISTEMA NERVIÓS_esencial.pdf · 2–3 | nervios/n-respostes |
| nervios-018 | Concepte/ID mantingut; imprescindible | Calor percebuda i retirada de la mà | SISTEMA NERVIÓS_esencial.pdf · 2–3 | nervios/n-respostes |
| nervios-019 | Concepte/ID mantingut; imprescindible | Permet respondre sense esperar una decisió conscient | SISTEMA NERVIÓS_esencial.pdf · 2–3 | nervios/n-respostes |
| nervios-020 | Concepte/ID mantingut; imprescindible | Parlar voluntàriament es decideix; el batec habitual funciona automàticament | SISTEMA NERVIÓS_esencial.pdf · 2–3 | nervios/n-respostes |
| nervios-021 | Concepte/ID mantingut; imprescindible | Les neurones | SISTEMA NERVIÓS_esencial.pdf · 3 | nervios/n-neurones |
| nervios-022 | Concepte/ID mantingut; imprescindible | Soma o cos | SISTEMA NERVIÓS_esencial.pdf · 3 | nervios/n-neurones |
| nervios-023 | Concepte/ID mantingut; imprescindible | Les dendrites | SISTEMA NERVIÓS_esencial.pdf · 3 | nervios/n-neurones |
| nervios-024 | Concepte/ID mantingut; imprescindible | L'axó | SISTEMA NERVIÓS_esencial.pdf · 3 | nervios/n-neurones |
| nervios-025 | Concepte/ID mantingut; imprescindible | Pels botons terminals | SISTEMA NERVIÓS_esencial.pdf · 3 | nervios/n-neurones |
| nervios-026 | Concepte/ID mantingut; imprescindible | Dendrites → soma → axó → botons terminals | SISTEMA NERVIÓS_esencial.pdf · 3 | nervios/n-neurones |
| nervios-027 | Concepte/ID mantingut; imprescindible | Dendrites | SISTEMA NERVIÓS_esencial.pdf · 3 | nervios/n-neurones |
| nervios-062 | Substitueix nervios-028; imprescindible | Soma | SISTEMA NERVIÓS_esencial.pdf · 3 | nervios/n-neurones |
| nervios-029 | Concepte/ID mantingut; imprescindible | Impulsos nerviosos | SISTEMA NERVIÓS_esencial.pdf · 3 | nervios/n-neurones |
| nervios-030 | Concepte/ID mantingut; imprescindible | L'entrada d'informació a la neurona | SISTEMA NERVIÓS_esencial.pdf · 3 | nervios/n-neurones |
| nervios-031 | Concepte/ID mantingut; imprescindible | Encèfal i medul·la espinal | SISTEMA NERVIÓS_esencial.pdf · 3 | nervios/n-central |
| nervios-032 | Concepte/ID mantingut; imprescindible | El crani | SISTEMA NERVIÓS_esencial.pdf · 3 | nervios/n-central |
| nervios-033 | Concepte/ID mantingut; imprescindible | La columna vertebral | SISTEMA NERVIÓS_esencial.pdf · 3 | nervios/n-central |
| nervios-034 | Concepte/ID mantingut; imprescindible | El cervell | SISTEMA NERVIÓS_esencial.pdf · 3 | nervios/n-central |
| nervios-035 | Concepte/ID mantingut; imprescindible | El cerebel | SISTEMA NERVIÓS_esencial.pdf · 3 | nervios/n-central |
| nervios-036 | Concepte/ID mantingut; imprescindible | El bulb raquidi | SISTEMA NERVIÓS_esencial.pdf · 3 | nervios/n-central |
| nervios-037 | Concepte/ID mantingut; imprescindible | Cervell, cerebel i bulb raquidi | SISTEMA NERVIÓS_esencial.pdf · 3 | nervios/n-central |
| nervios-038 | Concepte/ID mantingut; imprescindible | El cerebel | SISTEMA NERVIÓS_esencial.pdf · 3 | nervios/n-central |
| nervios-039 | Concepte/ID mantingut; imprescindible | La medul·la espinal | SISTEMA NERVIÓS_esencial.pdf · 3 | nervios/n-central |
| nervios-040 | Concepte/ID mantingut; imprescindible | Resposta voluntària: cervell | SISTEMA NERVIÓS_esencial.pdf · 3 | nervios/n-central |
| nervios-041 | Concepte/ID mantingut; imprescindible | El conjunt de nervis connectats amb el SNC | SISTEMA NERVIÓS_esencial.pdf · 4 | nervios/n-periferic |
| nervios-042 | Concepte/ID mantingut; imprescindible | Dels receptors cap al SNC | SISTEMA NERVIÓS_esencial.pdf · 4 | nervios/n-periferic |
| nervios-043 | Concepte/ID mantingut; imprescindible | Del SNC a l'òrgan que respon | SISTEMA NERVIÓS_esencial.pdf · 4 | nervios/n-periferic |
| nervios-044 | Concepte/ID mantingut; imprescindible | Sensitiu | SISTEMA NERVIÓS_esencial.pdf · 4 | nervios/n-periferic |
| nervios-045 | Concepte/ID mantingut; imprescindible | Motors | SISTEMA NERVIÓS_esencial.pdf · 4 | nervios/n-periferic |
| nervios-046 | Concepte/ID mantingut; imprescindible | Un cordó fi format per axons de diverses neurones | SISTEMA NERVIÓS_esencial.pdf · 4 | nervios/n-periferic |
| nervios-047 | Concepte/ID mantingut; imprescindible | Receptor → sensitiu → SNC → motor → múscul | SISTEMA NERVIÓS_esencial.pdf · 4 | nervios/n-periferic |
| nervios-048 | Concepte/ID mantingut; imprescindible | Nervi sensitiu | SISTEMA NERVIÓS_esencial.pdf · 4 | nervios/n-periferic |
| nervios-049 | Concepte/ID mantingut; imprescindible | Una ordre motora | SISTEMA NERVIÓS_esencial.pdf · 4 | nervios/n-periferic |
| nervios-050 | Concepte/ID mantingut; imprescindible | El SNP porta informació i ordres, i el SNC les interpreta i coordina | SISTEMA NERVIÓS_esencial.pdf · 4 | nervios/n-periferic |
| nervios-051 | Concepte/ID mantingut; imprescindible | Portar casc | CURA DEL SISTEMA NERVIÓS.pdf · 2 | nervios/n-cura |
| nervios-052 | Concepte/ID mantingut; imprescindible | Cordar-nos el cinturó | CURA DEL SISTEMA NERVIÓS.pdf · 2 | nervios/n-cura |
| nervios-053 | Concepte/ID mantingut; imprescindible | Pèrdua de memòria | CURA DEL SISTEMA NERVIÓS.pdf · 1 | nervios/n-cura |
| nervios-054 | Concepte/ID mantingut; imprescindible | Afàsia | CURA DEL SISTEMA NERVIÓS.pdf · 1 | nervios/n-cura |
| nervios-055 | Concepte/ID mantingut; imprescindible | Paràlisi d'alguna part del cos | CURA DEL SISTEMA NERVIÓS.pdf · 1 | nervios/n-cura |
| nervios-056 | Concepte/ID mantingut; imprescindible | La memòria | CURA DEL SISTEMA NERVIÓS.pdf · 1 | nervios/n-cura |
| nervios-057 | Concepte/ID mantingut; imprescindible | Del moviment | CURA DEL SISTEMA NERVIÓS.pdf · 1 | nervios/n-cura |
| nervios-058 | Concepte/ID mantingut; imprescindible | Alterar el sistema nerviós i provocar dependència | CURA DEL SISTEMA NERVIÓS.pdf · 2 | nervios/n-cura |
| nervios-059 | Concepte/ID mantingut; imprescindible | Evitar-ne el consum | CURA DEL SISTEMA NERVIÓS.pdf · 2 | nervios/n-cura |
| nervios-060 | Concepte/ID mantingut; imprescindible | Avisar els serveis mèdics d'urgència | CURA DEL SISTEMA NERVIÓS.pdf · 2 | nervios/n-cura |
