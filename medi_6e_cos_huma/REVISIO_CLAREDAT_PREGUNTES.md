# Revisió de claredat de les 180 preguntes de Medi

> Publicació autoritzada per l’usuari després de la revisió local. L’entrega inclou les correccions editorials, l’inventari, les proves i aquest informe. Les referències següents a l’estat local documenten la fase prèvia a aquesta autorització. Els originals escolars, les captures i els altres fitxers locals queden fora de la publicació.

Data: 14 de novembre de 2026. Estat: revisió local completada; sense commit, push ni desplegament d’aquesta correcció.

## Abast i resultat

S’han revisat els enunciats i les opcions de les 180 preguntes anteriors, així com les pistes i les explicacions associades. S’han millorat 52 preguntes: 21 de respiratori, 9 de locomotor i 22 de sistema nerviós. Les altres 128 es conserven idèntiques.

Camps modificats (una pregunta pot tenir diversos camps revisats):

- 34 enunciats.
- 16 conjunts d’opcions.
- 13 pistes.
- 17 explicacions de la resposta correcta.
- 18 conjunts de comentaris sobre alternatives incorrectes.

No s’han afegit ni eliminat preguntes. Es mantenen 60 per tema, els mateixos identificadors, fonts, pàgines, ancoratges, classificació, resposta correcta i ordre lògic d’índexs. La posició correcta editorial continua sent 0; la interfície continua barrejant-ne la presentació.

## Problemes corregits

1. Referències a fletxes, dibuixos, esquemes o etiquetes que no es mostraven amb la pregunta. S’han substituït per situacions quotidianes o descripcions completes. També s’han corregit les pistes que encara remetien a un dibuix absent.
2. Sigles SNC/SNP en preguntes independents. S’han desenvolupat com a «sistema nerviós central» i «sistema nerviós perifèric» en tots els camps del banc antic.
3. Direcció d’un recorregut poc explícita: es concreta quan es pregunta per inspirar o expirar, o pel pas de gasos entre alvèols i sang.
4. Respostes massa abreujades, com «l’òssia», i distractors que no encaixaven amb la pregunta. Els dos tipus de medul·la ara tenen el nom complet i funcions diferenciades.
5. Vocabulari de consigna innecessàriament difícil: «mobilitat decreixent» es converteix en «de més moviment a menys moviment», amb les articulacions ben identificades.

Les seqüències amb el símbol → es mantenen quan tots els seus passos apareixen escrits a les opcions: són text complet i no exigeixen un dibuix extern. No s’ha afegit cap esquema artificial per rescatar una pregunta mal formulada.

## Els dos exemples comunicats

- `locomotor-020`: abans es preguntava «Quina fa cèl·lules sanguínies?» amb respostes abreujades i una alternativa sobre lligaments. Ara s’explica on és cada medul·la i es pregunta quina produeix les cèl·lules sanguínies. Les quatre opcions són la medul·la òssia, l’espinal, totes dues o cap. L’explicació diferencia producció de cèl·lules de la sang i transmissió d’informació nerviosa.
- `nervios-048`: abans una fletxa inexistent anava de la pell al SNC. Ara la situació és tocar una superfície rugosa i identificar el nervi que porta aquesta informació al sistema nerviós central. Les alternatives contrasten nom i direcció de la informació; cada error té una explicació pròpia.

## Fidelitat escolar

S’ha contrastat el text del document essencial de respiratori, pàgines 1–2, i s’han renderitzat i revisat visualment la pàgina 1 del document essencial de locomotor i les pàgines 2–3 del document essencial de sistema nerviós. Aquests darrers documents tenen el contingut escolar incrustat com a imatge i una extracció de text gairebé buida.

No s’han introduït conceptes nous ni s’ha ampliat el temari. La revisió dels altres consells i definicions és lingüística; no afegeix recomanacions mèdiques. Les fonts i pàgines de cada ítem es conserven a l’inventari.

## Conservació de la web i del progrés

La revisió és editorial dins de la mateixa versió conceptual del banc (revisió 2). No cal migrar ni reiniciar les dades: cada identificador continua avaluant el mateix concepte i conserva l’índex correcte. Es preserven intents, encerts, errors pendents, simulacres completats i sessió en curs. Una sessió restaurada mostrarà la redacció millorada.

No s’han modificat l’aplicació, la teoria, el disseny, les imatges, els vídeos, les 36 preguntes noves dels resums, les 26 etiquetes dels dibuixos, Matemàtiques ni altres preparatoris. Una comprovació de 139 empremtes protegeix els fitxers que queden fora de l’abast.

## Fitxers

Modificats:

- `build_bank.py`: font editorial; es conserva el format de la resta de dades.
- `questions.js`: banc regenerat.
- `inventari.json`: enunciats i objectius sincronitzats.
- `resums-protection.json`: actualització exclusiva de les empremtes dels tres fitxers anteriors, després de verificar els canvis editorials. Les altres empremtes no es reescriuen.

Nous:

- Aquest informe.
- `claredat-canvis.json`: abans/després de cadascun dels camps modificats, agrupats per identificador.
- `claredat-protection.json`: contracte del banc anterior, hash reconstruïble del banc sencer i empremtes dels 139 fitxers conservats.
- `claredat-test.cjs`: coherència editorial, absència de referències visuals inadequades, inventari, camps preservats i continuïtat del progrés.
- `claredat-browser-test.cjs`: correcció real de totes les opcions i captures responsive.

## Proves executades

Totes aquestes proves han passat:

- `node medi_6e_cos_huma/validate.cjs`: 180 preguntes, 60 per tema, dades i fonts, 1.000 simulacres equilibrats.
- `node medi_6e_cos_huma/claredat-test.cjs`: canvis limitats als camps documentats; reconstrucció exacta del banc anterior; 180 pistes i 540 comentaris d’error diferents; 139 fitxers conservats; sessió, intents, encerts, errors i històric preservats.
- `node medi_6e_cos_huma/claredat-browser-test.cjs`: 720 correccions (180 × 4), correspondència entre opcions barrejades i índexs, feedback específic, protecció de doble clic, registre d’errors, preservació de claus d’altres mòduls i represa de sessió. Comprova les 180 preguntes a 390 i 1.280 píxels sense desbordament horitzontal. Genera 24 captures de sis casos representatius, amb enunciat i correcció. Sense errors JavaScript ni recursos inexistents.
- `node medi_6e_cos_huma/browser-test.cjs`: navegació, progrés, sessió restaurada, simulacre 30/30, vídeos, reinici, teclat i responsive a 390/768/1280.
- `node medi_6e_cos_huma/resums-test.cjs`: 36 preguntes i 26 noms complementaris intactes, dades, màscares i proteccions.
- `node medi_6e_cos_huma/resums-browser-test.cjs`: pràctica de les fitxes, persistència, correccions, visors i 45 captures a 390/768/1280.
- `node mates_6e_divisibilitat/validate.cjs`: banc de Matemàtiques conservat.
- Sintaxi JavaScript i Python; `git diff --check`.

Les auditories antigues que fixaven l’empremta de tota la interfície de teoria ja no corresponen a la incorporació dels resums publicada anteriorment. No s’han utilitzat com a prova d’aquesta revisió; les proteccions actuals comproven els fitxers reals previs a aquest encàrrec.

S’han inspeccionat les captures mòbils dels dos exemples comunicats. Galeria local: `../tmp/medi-review/claredat/captures.html`. La validació responsive és amb Chromium, no amb un dispositiu físic ni amb una sessió de l’alumna.

## Enunciats reformulats

| ID | Abans | Després |
| --- | --- | --- |
| respiratori-012 | Quin tram està ben ordenat? | Quan inspirem, en quin ordre passa l’aire per la faringe, la laringe i la tràquea? |
| respiratori-016 | En un esquema falta una peça: tràquea → … → bronquíols. Quina és? | Completa aquest tram del recorregut de l’aire quan inspirem: tràquea → … → bronquíols. |
| respiratori-017 | En quin ordre passarà una partícula d'aire per aquests dos conductes en inspirar? | Quan inspirem, per quins conductes passa primer l’aire: pels bronquis o pels bronquíols? |
| respiratori-018 | Per sortir des dels bronquis, cap a quin conducte va l'aire? | Quan expirem, l’aire surt dels bronquis. Per quin conducte passa a continuació? |
| respiratori-019 | Quina peça uneix la faringe amb la tràquea? | Quin conducte uneix la faringe amb la tràquea? |
| respiratori-020 | Quin recorregut resumeix l'entrada fins a l'intercanvi? | Quin recorregut segueix l’aire des que entra pel nas fins que arriba al lloc on s’intercanvien gasos amb la sang? |
| respiratori-029 | Una etiqueta diu «conductes que comuniquen pulmons i exterior». A què correspon? | Com s’anomena el conjunt de conductes que comuniquen els pulmons amb l’exterior? |
| respiratori-034 | Una fletxa surt dels pulmons cap a l'exterior. Quin moviment representa? | Deixes sortir l’aire dels pulmons cap a l’exterior. Com s’anomena aquest moviment? |
| respiratori-035 | Una fletxa entra del nas als pulmons. Quina etiqueta hi poses? | Agafes aire pel nas i l’aire entra als pulmons. Com s’anomena aquest moviment? |
| respiratori-038 | En un dibuix el tòrax es fa més petit i l'aire surt. Com està el diafragma? | Quan expirem, disminueix l’espai de la cavitat toràcica i l’aire surt. Com està el diafragma? |
| respiratori-039 | Quina seqüència explica l'entrada d'aire? | Quina seqüència explica què passa al diafragma, a l’espai del tòrax i a l’aire quan inspirem? |
| respiratori-040 | Una companya dibuixa inspiració amb el diafragma pujant. Què ha de corregir? | Una companya diu: «Quan inspirem, el diafragma puja». Quina explicació la corregeix? |
| respiratori-042 | Quina fletxa representa el camí de l'oxigen als pulmons? | Durant l’intercanvi de gasos als alvèols, d’on surt i on va l’oxigen que el cos capta? |
| respiratori-043 | Quina fletxa representa el camí del CO₂ als pulmons? | Durant l’intercanvi de gasos als pulmons, d’on surt i on va el diòxid de carboni abans de ser expulsat? |
| respiratori-047 | Quin pas permet que el CO₂ alveolar arribi a l'exterior? | El diòxid de carboni ja ha passat de la sang a l’aire dels alvèols. Quin moviment el fa sortir del cos? |
| respiratori-049 | Un esquema posa O₂ anant de la sang a l'alvèol en l'intercanvi estudiat. Què cal fer? | Una companya diu: «Als pulmons, l’oxigen passa de la sang als alvèols». Com la corregiries? |
| respiratori-056 | Quina seqüència segueix l'oxigen després d'arribar a l'alvèol? | L’oxigen arriba a un alvèol. Quin camí segueix després per arribar a les cèl·lules del cos? |
| respiratori-059 | Quina part prepara l'aire i quina intercanvia gasos? | Quina opció relaciona correctament les parts que preparen l’aire i les que intercanvien gasos amb la sang? |
| locomotor-004 | Quina funció exemplifica el crani al voltant de l'encèfal? | El crani envolta l’encèfal. Quina funció de l’esquelet mostra aquest exemple? |
| locomotor-012 | Quin tipus d'os exemplifica el crani? | Segons els apunts, de quin tipus són els ossos del crani? |
| locomotor-018 | Una etiqueta diu «moll de l'os». A què es refereix? | Als apunts es fa servir el nom «moll de l’os». Quin altre nom té aquest teixit? |
| locomotor-020 | Una companya confon medul·la òssia i espinal. Quina fa cèl·lules sanguínies? | La medul·la òssia és dins dels ossos i la medul·la espinal és dins la columna vertebral. Quina de les dues produeix cèl·lules sanguínies? |
| locomotor-028 | Per què genoll i crani tenen mobilitat diferent? | Per què l’articulació del genoll permet més moviment que les unions entre els ossos del crani? |
| locomotor-029 | Si assenyales una banda resistent entre dos ossos, què identifiques? | Una banda molt resistent uneix dos ossos en una articulació. Com s’anomena aquesta banda? |
| locomotor-030 | Quina associació ordena mobilitat decreixent? | Quina opció ordena les articulacions de les que permeten més moviment a les que en permeten menys? |
| locomotor-054 | En un esquema, una banda uneix el múscul al seu os. Quina etiqueta hi poses? | Com s’anomena la banda que uneix un múscul amb un os? |
| nervios-018 | Quina parella diferencia estímul i resposta? | Notes que un objecte crema i retires la mà. Quina opció posa primer l’estímul i després la resposta? |
| nervios-062 | En una neurona assenyales el cos central, entre les dendrites i l’axó. Com s’anomena? | Com s’anomena el cos central de la neurona, del qual surten les dendrites i l’axó? |
| nervios-030 | Si una fletxa arriba a les dendrites, què representa? | Les dendrites reben un impuls nerviós. Aquest impuls està entrant a la neurona o en surt? |
| nervios-044 | Veus una amiga. Quin tipus de nervi porta la informació dels ulls cap al SNC? | Veus una amiga. Quin tipus de nervi porta la informació dels ulls cap al sistema nerviós central? |
| nervios-047 | Quina seqüència segueix una resposta muscular voluntària? | Veus una pilota i decideixes agafar-la. Quin recorregut segueix la informació des que la captes fins que es mouen els músculs? |
| nervios-048 | Una fletxa va de la pell al SNC. Quina etiqueta hi correspon? | Toques una superfície rugosa. Quin nervi porta la informació de la pell cap al sistema nerviós central? |
| nervios-049 | Una fletxa va del SNC a un múscul. Què representa? | El sistema nerviós central envia un missatge a un múscul perquè es mogui. Quin tipus de missatge és? |
| nervios-050 | Com treballen junts SNC i SNP quan saludem? | Quan veus una amiga i decideixes saludar-la, com col·laboren el sistema nerviós central i el perifèric? |
