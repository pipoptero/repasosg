> Publicació autoritzada el 6 de novembre de 2026. Web: https://pipoptero.github.io/repasosg/medi_6e_cos_huma/. Inclou els tres vídeos integrats i els 13 retalls escolars revisats; els documents originals, ZIP i captures locals no es publiquen. Les referències posteriors a «pendent de publicació» descriuen les revisions locals anteriors.

# Missió Cos Humà · Medi 6è

Redisseny visual d’aventura: veure `REDISENY_VISUAL_MEDI_6E.md`, amb identitat dels tres mons, captures i proves. La teoria i els recursos escolars es conserven; només s’han precisat els enunciats 015 de respiratori, 062 de locomotor i 027 de nerviós, sense canviar-ne el concepte ni la revisió 2 del banc.

Revisió pedagògica del banc **2**: veure `REVISIO_BANC_PEDAGOGIC.md`. Estat actual: 180 preguntes, 175 essencials/5 ampliacions, 180 pistes i 540 explicacions específiques d’error. Regenerar només amb `python medi_6e_cos_huma/build_bank.py`. Els recomptes i proteccions dels informes anteriors documenten les seves revisions històriques.

Ampliació pedagògica additiva: veure `REVISIO_TEORIA_ESSENCIAL.md`. Les 16 targetes conserven el text principal i incorporen explicacions de suport a `theory-enrichment.js`; el banc, el motor i les 13 imatges es mantenen intactes.

Implementació local del 5 de novembre de 2026. Segona revisió visual documentada a `REVISIO_VISUAL.md`: els esquemes didàctics propis s’han substituït per 13 retalls dels materials originals. Entrada: `index.html`, enllaçada des de la portada. Tota la teoria, els controls, les preguntes i les explicacions són en català. No s'ha executat cap commit, push ni desplegament.

## Fitxers i manteniment

- `index.html`: entrada semàntica i navegació.
- `styles.css`: disseny adaptatiu, focus, controls tàctils i moviment reduït.
- `content.js`: teoria dels tres mons, fonts, resums, confusions i ampliacions.
- `build_bank.py`: font editorial amb 180 preguntes escrites explícitament, explicacions i aclariments. Executar `python medi_6e_cos_huma/build_bank.py` des de l'arrel per regenerar les dades.
- `questions.js`: banc consumit directament, també obrint el fitxer HTML sense servidor.
- `inventari.json`: tema, subtema, importància, font, pàgina, objectiu i ancoratge per a cada ítem.
- `engine.js`: barreja, selecció equilibrada i recuperació segura de l'estat.
- `app.js`: teoria, recursos originals, visor ampliable, ordenació interactiva, pràctica, errors, simulacre, represa i estadístiques.
- `validate.cjs`: comprovacions del banc i 1.000 simulacres.
- `browser-test.cjs`: proves de navegació i reproducció en Chromium amb servidor efímer sota `/repasosg/`.
- `media/`: tres còpies locals MP4 amb noms segurs, excloses de Git. No conté PDF. Les imatges escolars seleccionades es guarden separadament a `assets/teoria/`, amb procedència documentada.

La portada `../index.html` destaca un únic pròxim examen, afegeix la missió de Medi 6è, conserva els preparatoris i l'arxiu 5è, elimina accessos i recomanacions d'estiu i mostra estadístiques limitades explícitament a Medi. `../.gitignore` protegeix originals, vídeos i temporals. El README general també s'ha actualitzat.

## Banc real i cobertura

| Món | Subtemes (10 preguntes cadascun) | Total | Imprescindibles | Ampliació |
|---|---|---:|---:|---:|
| Respiratori | Finalitat; Recorregut; Òrgans; Moviments; Intercanvi; Connexions | 60 | 60 | 0 |
| Locomotor | Funcions; Ossos; Articulacions; Cura i activitat; Postura; Músculs i unions | 60 | 50 | 10 |
| Nerviós | Sentits; Respostes; Neurones; Sistema central; Nervis; Salut | 60 | 60 | 0 |

180 identificadors i enunciats únics, quatre opcions per pregunta. 82 ítems etiquetats editorialment com a comprensió/aplicació (45,6%): casos, comparacions, seqüències i lectura d'esquemes. La resta són recuperació de coneixements. Els nivells són una orientació didàctica, no una dificultat calibrada amb dades d'alumnes.

El simulacre selecciona 30 preguntes imprescindibles, 10 per món, cobrint almenys tres subtemes de cadascun (la selecció actual n'inclou tots els imprescindibles disponibles). No mostra solucions fins al final. La correcció inclou nota /10, desglossament per món, conceptes a reforçar i explicacions. Pràctica de 10 o 20 amb filtres; si el filtre té menys ítems, es fa una ronda més curta sense repetir preguntes. Mini repassos de 5.

## Fonts i decisions editorials

Base: les cinc fitxes escolars de nivell A, llegides per extracció i revisió visual de les pàgines amb text en imatges, incloses les quatre del sistema nerviós. Es respecten les categories i els exemples dels apunts. No es copien els errors tipogràfics.

Suport: revisió visual de les guies de 14 i 15 pàgines, les 13 diapositives de la presentació i la infografia; lectura del document respiratori de 43 pàgines amb revisió de les seves làmines. Tendons, tipus de músculs, plèura, lòbuls i mitocondris estan marcats com a ampliació. No s'avaluen xifres d'ATP, pressions, capacitats ni rècords. L'error «Sema» es corregeix a «soma».

Son: la fitxa indica mínim 8 hores. La teoria distingeix aquesta frase de la recomanació general de 9–12 hores per a 6–12 anys, verificada al NIH: https://www.nhlbi.nih.gov/health/sleep/how-much-sleep . No hi ha preguntes que ensenyin que 8 hores són suficients als 11 anys.

`preguntas.txt` conté dos enllaços NotebookLM, no preguntes. S'ha intentat accedir als dos i no s'ha pogut obtenir el contingut. No s'utilitzen com a font ni s'afirma haver-los llegit.

## Vídeos locals

| Còpia | Original | Durada comprovada | Pes aproximat |
|---|---|---|---:|
| `media/respiratori.mp4` | El_aparato_respiratorio.mp4 | 6:31,86 | 33,8 MB |
| `media/locomotor.mp4` | El_Aparato_Locomotor.mp4 | 6:01,40 | 33,5 MB |
| `media/estres.mp4` | Por_Qué_el_Estrés_Encoge_Tu_Cerebro.mp4 | 1:02,86 | 6,4 MB |

H.264/AAC. Controls, `playsinline`, precàrrega de metadades i cap reproducció automàtica. Revisió de fotogrames en tres punts de cada vídeo i reproducció real dels tres al navegador local. No s'ha fet una transcripció ni una verificació frase per frase de l'àudio. La teoria i el banc depenen de les fitxes, no de les afirmacions dels vídeos. El d'estrès es presenta com a complement, amb advertiment que no resumeix la unitat. No hi ha subtítols inventats ni còpia de les imatges auxiliars en castellà. La publicació dels MP4 resta pendent d'autorització; per això estan ignorats per Git.

## Progrés i ús sense xarxa

Clau nova `medi6e_v1`, versió 1. Es guarden intents, encerts, preguntes úniques, targetes llegides, cua d'errors, dies de pràctica, últims 30 resultats i sessió en curs. Lectura no equival a domini. Errors programats amb una ronda intermèdia i prioritat dels antics; el repàs explícit permet avançar-los. Un encert elimina l'error pendent. No és un model adaptatiu clínicament validat ni un sistema de repetició espaiada per dies.

La sessió guarda ordre d'opcions i resposta; un doble clic no suma dues vegades. Les respostes d'un simulacre s'incorporen a les estadístiques en acabar-lo. Reinici només de Medi, amb confirmació. Es validen les estructures recuperades i s'avisa si el navegador no permet guardar. Les altres claus no es toquen.

Teoria i preguntes funcionen sense xarxa mentre la pàgina carregada continua oberta, i obrint els fitxers locals. No hi ha service worker: no es promet reobertura offline d'una URL remota ni disponibilitat offline dels vídeos.

## Verificacions executades

`node medi_6e_cos_huma/validate.cjs`: PASS. Comptes, identificadors i enunciats únics, camps obligatoris, quatre opcions diferents, índex correcte, explicacions, fonts, ancoratges, proporció d'aplicació, 1.000 simulacres 10+10+10 sense ampliació ni duplicats, dades corruptes i enllaços antics.

`node medi_6e_cos_huma/browser-test.cjs`: PASS en Chromium local. Navegació portada-mòdul; chatbot per pròxim examen i termes dels tres mons; tres missions Medi 5è; amplades 390/768/1280 i formats 844×390 i 1024×768 sense scroll lateral; lectura persistent; encert i error amb feedback; represa després de recarregar; simulacre complet amb 30 encerts i nota 10; correcció diferida; tres vídeos reproduïts; ronda de 20 preguntes; eliminació d’errors després d’encertar-los; reinici acceptat/cancel·lat; històric de català i estiu intacte; JSON corrupte; teclat i preferència de moviment reduït; cap error JavaScript ni 404.

Captures locals a `../tmp/medi-review/`, excloses de Git. Revisió visual del mapa en mòbil/escriptori i teoria en mòbil. `git diff --check` sense incidències. Sense dependències noves en temps d'execució de la web.

Per repetir les proves de navegador: instal·lar Playwright a `tmp/medi-review` amb `npm install --prefix tmp/medi-review playwright`. El test actual apunta al Chromium disponible a l'ordinador d'Isaac; cal adaptar `executablePath` si es prova en un altre equip.

## Límits de la revisió i publicació

No s'ha provat en una tablet física, Safari/iOS ni amb lector de pantalla. Els controls es poden usar amb teclat i tenen focus visible, però això no substitueix una auditoria completa d'accessibilitat. Cal la revisió familiar local abans de publicar, especialment de l'àudio original dels vídeos i dels drets de distribució. No s'ha publicat cap document ni vídeo, ni s'ha modificat cap configuració remota.
