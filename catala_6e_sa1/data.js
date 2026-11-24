(function(root){
'use strict';
const sections=[
 {id:'diacritics',title:'Accents diacrítics',icon:'✨',color:'#7a3dad',subtitle:'Un accent, dos significats'},
 {id:'pronoms',title:'Pronoms personals',icon:'👥',color:'#146a9a',subtitle:'Substitueix sense repetir'},
 {id:'apostrof',title:'Apòstrof i pronoms',icon:'🧩',color:'#ad4274',subtitle:'Cada peça al seu lloc'},
 {id:'ela',title:'L, ll i l·l',icon:'🔎',color:'#8a5909',subtitle:'Detectius del punt volat'},
 {id:'comes',title:'Les comes',icon:'🌿',color:'#256a47',subtitle:'Ordena i aclareix les idees'},
 {id:'oracions',title:'Tipus d’oracions',icon:'💬',color:'#ac4228',subtitle:'Què vol comunicar qui parla?'}
];
const questions=[];
function add(section,kind,prompt,stimulus,fields,hint,explanation,source){questions.push({id:section+'-'+String(questions.filter(q=>q.section===section).length+1).padStart(2,'0'),section,kind,prompt,stimulus,fields,hint,explanation,source})}
const field=(label,answers,options)=>({label,answers:Array.isArray(answers)?answers:[answers],...(options?{options}: {})});
const pairs=[
 ['bé','be','correctament; també un bé o una possessió','xai; també nom de la lletra b','Has endreçat molt ___ els llibres.','A la granja ha nascut un ___ blanc.','En la primera frase es valora com s’ha fet una cosa; en la segona es parla d’un animal.'],
 ['déu','deu','divinitat','nombre 10 o forma del verb deure','El relat grec parla d’un ___ del mar.','La capsa conté ___ retoladors.','La divinitat duu accent. El nombre 10 no en duu; «deu» del verb deure tampoc.'],
 ['és','es','forma del verb ser','pronom feble','La meva motxilla ___ verda.','Cada matí la Berta ___ pentina.','«És» relaciona la motxilla amb una qualitat: verb ser. «Es» acompanya «pentina»: pronom.'],
 ['mà','ma','part del cos','possessiu: la meva','Aixeca la ___ per demanar torn.','___ germana petita es diu Ona.','La part del cos és «mà». «Ma germana» vol dir «la meva germana»: possessiu sense accent.'],
 ['més','mes','quantitat superior','període del calendari','Voldria una mica ___ d’aigua.','El novembre és el meu ___ preferit.','La quantitat és «més»; el període del calendari és «mes». No tots els mesos tenen trenta dies.'],
 ['món','mon','el món, el conjunt de la Terra','possessiu: el meu','El globus representa els països del ___.','___ avi explica històries del poble.','«Món» fa referència al món on vivim; «mon avi» equival a «el meu avi».'],
 ['pèl','pel','filament de la pell','contracció de per + el','El gat ha deixat un ___ al coixí.','Hem passat ___ pont de fusta.','El filament és un «pèl». En «pel pont», «pel» uneix «per» i «el».'],
 ['què','que','interrogatiu; també alguns relatius després de preposició','conjunció o relatiu sense preposició','No entenc ___ vols dir.','M’has dit ___ vindries demà.','La primera és una pregunta indirecta: demana quina cosa vols dir. La segona introdueix allò que has dit.'],
 ['sé','se','forma del verb saber','pronom feble','Ja ___ resoldre aquest enigma.','El nen va rentar-___ les mans.','«Sé» es pot relacionar amb «jo saber». «Se» és el pronom que acompanya «rentar», amb guionet.'],
 ['sí','si','afirmació','condició','Has acabat? ___, ja he acabat.','___ fa bon temps, sortirem.','La resposta afirmativa és «sí». La condició, que indica què ha de passar per sortir, és «si».'],
 ['sòl','sol','terra o superfície on trepitgem','estrella; també sense companyia','Les arrels creixen sota el ___.','El ___ il·lumina el jardí.','El terreny és el «sòl». L’estrella que ens il·lumina és el «sol», sense accent.'],
 ['són','son','forma del verb ser','ganes de dormir','Aquestes galetes ___ de civada.','Després de sopar tinc molta ___.','«Són» és el verb ser en plural. «Son» és la necessitat o les ganes de dormir.'],
 ['té','te','forma del verb tenir','infusió; també pronom feble','La Júlia ___ una bicicleta nova.','A la tassa hi ha ___ amb llimona.','«Té» indica que la Júlia posseeix una bicicleta. La beguda de la tassa és «te».'],
 ['ús','us','acció de fer servir','pronom feble: a vosaltres','Cal fer un bon ___ del material.','Demà ___ explicaré les instruccions.','«L’ús» és el fet d’utilitzar una cosa. «Us explicaré» significa que ho explicaré a vosaltres.'],
 ['vós','vos','pronom fort de tractament respectuós','pronom feble, com en -vos','Senyora, ___ coneixeu aquest camí?','Podeu asseure-___ en aquest banc.','«Vós» designa la persona amb un tractament respectuós i porta el verb en segona persona plural. «-Vos» s’uneix al verb com a pronom feble.']
];
for(const [yes,no,meaningYes,meaningNo,s1,s2,why] of pairs){
 for(const [i,sentence,answer] of [[0,s1,yes],[1,s2,no]]) add('diacritics',i%2?'escriu':'tria','Completa el buit segons el significat de la frase.',sentence,[field('Paraula que falta',answer,i===0?[no,yes]:undefined)],'Llegeix tota la frase. Parla de '+meaningYes+' o de '+meaningNo+'?',why,'Foto Image (2), taula de diacrítics; contrast normatiu IEC');
}

const strongOptions=['jo','tu','ell','ella','nosaltres','vosaltres','ells','elles'];
const strong=[
 ['La Rita i jo preparem el mural.','La Rita i jo','nosaltres','El grup inclou qui parla i una altra persona: primera persona del plural.'],
 ['En Pau i tu porteu les cartolines.','En Pau i tu','vosaltres','El grup inclou la persona a qui parlem, però no qui parla: segona persona del plural.'],
 ['Les dues jugadores escalfen abans del partit.','Les dues jugadores','elles','És un grup femení de persones de qui es parla: tercera persona del plural.'],
 ['Els meus germans cuinen avui.','Els meus germans','ells','Es parla d’un grup masculí en plural; «ells» concorda amb «cuinen».'],
 ['L’Aina dibuixa un drac.','L’Aina','ella','Es parla d’una persona femenina singular, no de la persona a qui ens adrecem.'],
 ['En Biel busca les tisores.','En Biel','ell','Es parla d’una persona masculina singular: «ell busca».'],
 ['La mare i jo anirem a la biblioteca.','La mare i jo','nosaltres','Com que hi apareix «jo», el conjunt correspon a «nosaltres».'],
 ['La Carla i tu cantareu al concert.','La Carla i tu','vosaltres','Qui escolta forma part del grup: «vosaltres cantareu».'],
 ['Les mestres arribaran aviat.','Les mestres','elles','El nom femení plural se substitueix per «elles».'],
 ['Els veïns netegen l’escala.','Els veïns','ells','El nom masculí plural se substitueix per «ells».'],
 ['La veterinària examina el gat.','La veterinària','ella','La veterinària és la persona de qui parlem: tercera persona femenina singular.'],
 ['En Nil llegirà el conte.','En Nil','ell','«Ell llegirà» conserva la tercera persona singular de la frase.']
];
for(const [s,group,a,why]of strong)add('pronoms','tria','Substitueix només «'+group+'» pel pronom fort corresponent.',s,[field('Pronom fort',a,strongOptions)],'Mira qui forma el grup: qui parla, qui escolta o les persones de qui es parla.',why,'Foto Image (3), pronoms forts; Image (7), activitat 1');
const persons=[
 ['Demà instal·larem la parada.','nosaltres','La terminació «-arem» correspon a nosaltres, primera persona del plural.'],
 ['Tu treballaves amb molta cura.','tu','«Treballaves» concorda amb tu; la frase ja fixa qui fa l’acció.'],
 ['Jo interrogaré el personatge del conte.','jo','«Interrogaré» és primera persona singular: jo.'],
 ['Vosaltres reconeixereu el senyal.','vosaltres','«Reconeixereu» és segona persona plural: vosaltres.'],
 ['Elles cuinaven la sopa.','elles','El subjecte explícit «elles» resol el gènere; «cuinaven» és tercera persona plural.'],
 ['Alba, tanca la finestra, si us plau.','tu','És una petició dirigida a l’Alba: li parlem de tu. El nom separat per coma és un vocatiu, no el subjecte «ella».']
];
for(const[s,a,why]of persons)add('pronoms','tria','Quin pronom fort concorda amb qui fa l’acció en aquesta frase?',s,[field('Pronom',a,strongOptions)],'Busca la persona verbal. Si donem una ordre directament a algú de tu, pensa en qui escolta.',why,'Foto Image (7), activitats 1 i 2');
const weak=[
 ['Veig la Marta → ___ veig.','la',['la','li','les'],'«La» substitueix la Marta, complement directe femení singular.'],
 ['Veig en Pol → ___ veig.','el',['el','els','li'],'«El» substitueix en Pol, complement directe masculí singular.'],
 ['Miro les fotografies → ___ miro.','les',['les','la','els'],'El referent és femení plural: «les fotografies» passa a ser «les».'],
 ['Guardo els llibres → ___ guardo.','els',['els','el','les'],'El referent és masculí plural: «els llibres» passa a ser «els».'],
 ['A mi ___ conviden a la festa.','em',['em','et','ens'],'«A mi» correspon a la primera persona singular: em.'],
 ['A tu ___ conviden a la festa.','et',['et','em','us'],'«A tu» correspon a la segona persona singular: et.'],
 ['A nosaltres ___ conviden a la festa.','ens',['ens','em','us'],'«A nosaltres» és plural i inclou qui parla: ens.'],
 ['A vosaltres ___ conviden a la festa.','us',['us','ens','et'],'«A vosaltres» és plural i designa qui escolta: us.']
];
for(const[s,a,opts,why]of weak)add('pronoms','tria','Tria el pronom feble que substitueix el referent indicat.',s,[field('Pronom feble',a,opts)],'Conserva la persona, el nombre i, si cal, el gènere del referent.',why,'Fotos Image (3) i Image (7), pronoms febles i substitució');
for(const[s,a,why]of [
 ['Ella arribarà a les cinc.','fort','«Ella» pot fer de subjecte i es pronuncia amb força pròpia.'],
 ['La veuré aquesta tarda.','feble','«La» és al costat del verb i substitueix la persona que veuré.'],
 ['Volem parlar amb tu.','fort','«Tu» apareix després de la preposició «amb» i és un pronom fort.'],
 ['Ens esperen a l’entrada.','feble','«Ens» acompanya «esperen» i substitueix nosaltres com a complement.']
])add('pronoms','tria','El pronom inicial, o el que va després de «amb», és fort o feble?',s,[field('Tipus',a,['fort','feble'])],'Pregunta’t si és independent o si s’enganxa al verb com a complement.',why,'Foto Image (3), definició i exemples');

const apostrophes=[
 ['em + agrada','m’agrada','Davant d’un verb començat per vocal, «em» perd la e i s’apostrofa.'],
 ['et + escolto','t’escolto','«Et» davant de la vocal e es redueix a t’.'],
 ['es + amaga','s’amaga','«Es» davant de vocal passa a s’.'],
 ['en + agafo','n’agafo','«En» davant de vocal es redueix a n’.'],
 ['el + obro (el calaix)','l’obro','«El» s’apostrofa davant de vocal: l’.'],
 ['la + obro (la porta)','l’obro','«La» s’apostrofa davant de o: l’.'],
 ['em + ha convidat','m’ha convidat','La h no impedeix l’apòstrof; després hi ha una vocal.'],
 ['et + ajudaré','t’ajudaré','Davant de la vocal a, «et» passa a t’.'],
 ['es + ha aixecat','s’ha aixecat','«Es» s’apostrofa davant de h seguida de vocal.'],
 ['en + he comprat','n’he comprat','«En» s’apostrofa davant de h seguida de vocal.'],
 ['em + imagino','m’imagino','«Em» s’apostrofa davant de i vocàlica, encara que sigui àtona. L’excepció de i/u àtones afecta «la», no «em».'],
 ['la + imagino (la festa)','la imagino','La i inicial d’«imagino» és àtona. El pronom femení «la» conserva la a.'],
 ['la + utilitzo (la regla)','la utilitzo','La u inicial d’«utilitzo» és àtona. «La» no s’apostrofa en aquest cas.'],
 ['el + utilitzo (el regle)','l’utilitzo','El pronom masculí «el» sí que s’apostrofa davant de la u vocàlica, també si és àtona.'],
 ['ens + escolten','ens escolten','«Ens» es manté sencer davant del verb, també quan comença per vocal.'],
 ['us + ajudo','us ajudo','«Us» no té forma apostrofada. No escrivim u’ ni ’us.'],
 ['les + agafo (les claus)','les agafo','«Les» no s’apostrofa davant de vocal.'],
 ['els + obro (els calaixos)','els obro','Davant del verb, «els» es manté sencer encara que el verb comenci per vocal.'],
 ['mira + em','mira’m','Darrere d’un verb acabat en vocal, «em» pren la forma reduïda ’m.'],
 ['escolta + et','escolta’t','Darrere de la a final, «et» es redueix a ’t.'],
 ['renti + es','renti’s','Darrere de vocal, «es» pren la forma ’s.'],
 ['mira + ens','mira’ns','Darrere de vocal, «ens» es redueix a ’ns. Davant del verb, en canvi, és «ens».'],
 ['compra + el (el llibre)','compra’l','Darrere de vocal, el pronom masculí singular pren la forma ’l.'],
 ['compra + els (els llibres)','compra’ls','Darrere de vocal, el pronom masculí plural pren la forma ’ls.'],
 ['compra + en','compra’n','Darrere de vocal, «en» es redueix a ’n.'],
 ['mira + la (la lluna)','mira-la','Darrere del verb, el pronom femení «la» va amb guionet; no es redueix a ’l.'],
 ['ajudar + em','ajudar-me','El verb acaba en consonant: guionet i forma plena -me.'],
 ['comprar + es','comprar-se','El verb acaba en consonant: guionet i forma -se.'],
 ['doneu + em','doneu-me','Darrere d’un verb acabat en u de diftong, s’utilitza guionet i forma plena: -me.'],
 ['renteu + us','renteu-vos','Darrere del verb acabat en u, el pronom «us» pren la forma -vos. No duu accent.']
];
for(const[s,a,why]of apostrophes)add('apostrof','escriu','Uneix el verb i el pronom. Conserva també els espais necessaris.',s,[field('Expressió completa',a)],'Primer mira si el pronom va davant o darrere. Després, fixa’t en la primera o l’última lletra del verb.',why,'Foto Image (4), taula de formes; contrast CPNL/Optimot');

const elaWords=[
 ['a___èrgia','al·lèrgia','l·l','Comença amb al·l-, com en el grup d’exemples de la fitxa.'],
 ['i___usió','il·lusió','l·l','Comença amb il·l-; conserva el punt volat entre les dues eles.'],
 ['co___aborar','col·laborar','l·l','És un dels mots amb col·l- de la fitxa: col·laborar.'],
 ['co___egi','col·legi','l·l','«Col·legi» s’escriu amb ela geminada, no amb el dígraf ll.'],
 ['mi___ímetre','mil·límetre','l·l','«Mil·límetre» duu l·l, tal com mostra la llista escolar.'],
 ['mi___enari','mil·lenari','l·l','«Mil·lenari» duu l·l. No ho confonguis amb «miler» o «milió», que duen una l.'],
 ['frane___a','franel·la','l·l','La terminació -el·la és freqüent amb ela geminada.'],
 ['gori___a','goril·la','l·l','«Goril·la» té la terminació -il·la i s’escriu amb punt volat.'],
 ['parce___a','parcel·la','l·l','En «parcel·la», el grup és l·l; no és una sola ela ni el dígraf ll.'],
 ['tranqui___a','tranquil·la','l·l','La forma femenina «tranquil·la» conserva dues eles separades pel punt volat.'],
 ['ti___a','til·la','l·l','La infusió «til·la» és un dels exemples de la fitxa amb l·l.'],
 ['mo___usc','mol·lusc','l·l','«Mol·lusc» és un cas que cal retenir amb ela geminada. No tots els mots segueixen un prefix.'],
 ['i___uminar','il·luminar','l·l','Comença amb il·l-, com «il·lusió».'],
 ['co___ocar','col·locar','l·l','«Col·locar» és un altre exemple amb col·l- de la fitxa.'],
 ['crista___í','cristal·lí','l·l','«Cristal·lí» duu dues eles amb punt volat; cal recordar-ne l’escriptura.'],
 ['a___egre','alegre','l','«Alegre» és una excepció als exemples amb al·l-: només duu una ela.'],
 ['a___egria','alegria','l','«Alegria» té una sola ela, com «alegre».'],
 ['mi___ió','milió','l','«Milió» duu una sola ela; no tots els mots començats per mil- duen l·l.'],
 ['mi___er','miler','l','«Miler» és un dels mots amb una sola ela, encara que es relacioni amb mil.'],
 ['te___a','tela','l','«Tela» és un dels exemples amb una sola ela: no hi afegeixis punt volat.'],
 ['vi___a','vila','l','«Vila» duu una sola ela. La terminació escrita -ila no sempre és -il·la.'],
 ['pi___a','pila','l','«Pila» té una sola ela: és un dels mots de contrast de l’exercici escolar.'],
 ['cò___era','còlera','l','«Còlera» duu una sola ela; començar per co- no implica escriure col·l-.'],
 ['co___ònia','colònia','l','«Colònia» té una sola ela. Els inicis amb co- no formen una regla sense excepcions.'],
 ['___um','llum','ll','«Ll» és un dígraf: dues lletres que representen un sol so. Aquí no hi ha punt volat.'],
 ['ba___ar','ballar','ll','El verb «ballar» porta el dígraf ll entre vocals.'],
 ['ta___','tall','ll','El dígraf ll també pot aparèixer al final de paraula, com a «tall».'],
 ['en___aç','enllaç','ll','«Enllaç» és un dels exemples escolars amb ll després de n.'],
 ['re___otge','rellotge','ll','«Rellotge» duu ll. El punt volat canviaria l’escriptura correcta.'],
 ['motxi___a','motxilla','ll','«Motxilla» és un dels exemples de ll de la teoria. No totes les terminacions semblants duen l·l.']
];
for(const[gap,word,a,why]of elaWords)add('ela','tria','Completa el mot triant la grafia que falta.',gap,[field('Grafia',a,['l','ll','l·l'])],'Pensa en un exemple de la fitxa i en les excepcions. L·l porta sempre un punt volat, no un punt normal.', 'El mot complet és «'+word+'». '+why,'PDF LL/L·L p. 1; foto Image (5), classificació i buits');

function comma(sentence,why,prompt='Posa les comes seguint el model de la fitxa: subordinada inicial separada, incís entre dues comes i subordinada final integrada sense coma.'){
 const words=sentence.split(' '),positions=[];words.forEach((w,i)=>{if(w.endsWith(','))positions.push(i)});
 add('comes','comes',prompt,words.map(w=>w.replace(/,/g,'')).join(' '),[field('Posicions de les comes',positions.length?positions.join('|'):'none')],'Llegeix les dues parts. Si és un incís al mig, necessita obertura i tancament. No separis el subjecte del verb.',why,'PDF subordinades p. 1; foto Image (6), activitats 1 i 4');
}
comma('Quan arribis a casa, deixa la motxilla.','Seguint el model escolar, primer hi ha la indicació de temps «Quan arribis a casa» i després l’acció principal. La coma separa les dues parts.');
comma('Si tens gana, prepara un entrepà.','La condició va davant: «Si tens gana». Seguint el model de la fitxa, hi posem coma abans de l’acció principal.');
comma('Com que feia calor, vam obrir les finestres.','La causa «Com que feia calor» va al davant i es tanca amb coma.');
comma('Quan acabi la pel·lícula, apagarem la pantalla.','La subordinada temporal va al davant. Segons el model que practiquem, la coma va després de «pel·lícula».');
comma('La Júlia, si acaba aviat, ens ajudarà.','La condició s’insereix com un incís: una coma abans de «si» i una altra després d’«aviat».');
comma('Els visitants, quan soni el timbre, podran entrar.','La informació temporal és un incís al mig: es delimita amb dues comes.');
comma('El grup, si tothom hi està d’acord, sortirà demà.','La condició intercalada s’obre després de «grup» i es tanca després d’«acord».');
comma('Guardarem els llapis quan acabem el dibuix.','La subordinada temporal final està integrada en l’acció principal: segons el model de la fitxa, no hi posem coma.');
comma('Anirem al pati si deixa de ploure.','La condició és al final i forma part de la informació necessària: no cal coma en aquest model.');
comma('Vull que em deixis el llibre.','«Que em deixis el llibre» és allò que vull: no separem el verb «vull» del seu complement amb una coma.');
const relatives=[
 ['A la classe hi ha infants amb gorra i sense. Ens referim només als que duen gorra.','Els infants que duen gorra faran la primera fila.','especificativa','La relativa selecciona un grup concret d’infants. Si la traiem, canviem a qui ens referim; no va entre comes.'],
 ['Tots els infants del grup duen gorra. Hi afegim aquesta informació com un aclariment.','Els infants, que duen gorra, faran la primera fila.','explicativa','Es parla de tots els infants del grup. «Que duen gorra» només hi afegeix un aclariment i va entre dues comes.'],
 ['Hi ha molts llibres. Vull identificar només el que té la coberta verda.','El llibre que té la coberta verda és meu.','especificativa','La relativa serveix per identificar quin llibre és meu; no va entre comes.'],
 ['Només parlem de la meva bicicleta, ja identificada. Afegeixo de passada que és vermella.','La meva bicicleta, que és vermella, és al garatge.','explicativa','El color és una dada extra sobre una bicicleta ja identificada. Per això la relativa és explicativa i es delimita amb comes.'],
 ['D’entre totes les jugadores, només les que han acabat poden descansar.','Les jugadores que han acabat poden descansar.','especificativa','«Que han acabat» restringeix el grup: no totes les jugadores, només aquestes. Sense comes.'],
 ['Totes les jugadores han acabat. Ara dono aquesta informació com un aclariment.','Les jugadores, que han acabat, poden descansar.','explicativa','La informació afecta totes les jugadores i és un aclariment que es pot suprimir sense canviar el grup. Dues comes.'],
 ['Parlem de la biblioteca del barri, ja identificada. Com a informació extra, diem que s’ha renovat.','Visitem la biblioteca del barri, que s’ha renovat.','explicativa','L’aclariment va al final, però necessita una coma inicial. La posició final no vol dir que mai no hi hagi coma. El punt tanca la frase.'],
 ['Hi ha diverses capses; busquem només la que conté els pinzells.','Busca la capsa que conté els pinzells.','especificativa','La relativa identifica la capsa que cal buscar. No és una dada extra i no s’aïlla amb comes.']
];
for(const[context,s,type,why]of relatives)add('comes','doble','Amb aquest context, tria el tipus de relativa i la puntuació adequada.',context,[field('Tipus de relativa',type,['explicativa','especificativa']),field('Frase adequada',s,[s.includes(',')?s.replace(/,/g,''):s.replace(' que',', que').replace(/ (faran|és|poden|és meu)/,', $1'),s].filter((v,i,a)=>a.indexOf(v)===i))],'L’aclariment afecta tot el grup o serveix per triar-ne només una part?',why,'PDF subordinades p. 1, explicatives i especificatives; foto Image (6), activitat 2');
const edits=[
 ['La meva cosina, juga a bàsquet.','La meva cosina juga a bàsquet.','La coma separava el subjecte «La meva cosina» del verb «juga». Cal treure-la.'],
 ['Ens han dit, que el tren arriba aviat.','Ens han dit que el tren arriba aviat.','La subordinada amb «que» completa què ens han dit. No separem el verb del complement amb coma.'],
 ['Quan s’acabi el taller tornarem a classe.','Quan s’acabi el taller, tornarem a classe.','Seguint el model escolar, tanquem amb coma la subordinada temporal que va davant.'],
 ['El pare, si pot vindrà a buscar-nos.','El pare, si pot, vindrà a buscar-nos.','L’incís «si pot» té una coma d’obertura però en faltava la de tancament.'],
 ['Tancarem la porta, quan tothom hagi sortit.','Tancarem la porta quan tothom hagi sortit.','En aquest exercici la temporal final està integrada en l’acció. Apliquem el model de la fitxa: sense coma.'],
 ['Si vols venir avisa’m.','Si vols venir, avisa’m.','La condició precedeix l’acció principal i, segons el model que practiquem, se separa amb coma.']
];
for(const[bad,good,why]of edits)add('comes','tria','Repara la puntuació. Aplica el model escolar per a les temporals i condicionals integrades.',bad,[field('Frase reparada',good,[bad,good])],'No es tracta de posar moltes comes: han de separar les parts adequades.',why,'Foto Image (6), activitats 1 i 4');
for(const[original,answer,why]of [
 ['Recollirem el material quan acabi la classe.','Quan acabi la classe, recollirem el material.','La indicació temporal passa al davant i es tanca amb coma. Conservem el mateix significat i les mateixes paraules.'],
 ['T’ensenyaré el joc si vens demà.','Si vens demà, t’ensenyaré el joc.','La condició passa al davant; després de «demà» hi va la coma del model escolar.'],
 ['Ens refugiarem si comença a ploure.','Si comença a ploure, ens refugiarem.','Primer la condició completa, després la coma i l’acció principal.'],
 ['Obrirem la capsa quan arribi l’Ona.','Quan arribi l’Ona, obrirem la capsa.','No n’hi ha prou amb afegir una coma: cal moure tota la subordinada temporal al davant.'],
 ['Podràs sortir quan hagis acabat.','Quan hagis acabat, podràs sortir.','La subordinada temporal és «quan hagis acabat». Va sencera al davant i es tanca amb coma.'],
 ['Llegirem al jardí si fa sol.','Si fa sol, llegirem al jardí.','La condició «si fa sol» precedeix l’acció de llegir i es tanca amb coma.']
])add('comes','reescriu','Reescriu la frase posant tota la subordinada al davant. Segueix el model de la fitxa i afegeix la coma.',original,[field('Frase reordenada',answer)],'Localitza el tros que comença per «quan» o «si». Mou-lo sencer al davant; no canviïs les altres paraules.',why,'Foto Image (6), activitat 3');

const intentions={declarativa:['informar, afirmant o negant','No portem cap paraigua.'],interrogativa:['demanar informació','A quina hora obren?'],exclamativa:['expressar una emoció','Quina sorpresa més bona!'],imperativa:['donar una ordre o una instrucció','Desa els retoladors.'],dubitativa:['expressar un dubte o una possibilitat','Potser arribarem tard.'],desiderativa:['expressar un desig','Tant de bo guanyem!']};
const utterances={
 declarativa:['La biblioteca tanca a les sis.','Avui no tenim classe de música.','La meva germana viu a Girona.','Aquest tren no s’atura aquí.'],
 interrogativa:['On has deixat el diccionari?','Quantes pàgines has llegit?','Vols un got d’aigua?','Has acabat el dibuix?'],
 exclamativa:['Que bonic que és aquest paisatge!','Quina alegria tornar-vos a veure!','Quin soroll més fort!','Com m’agrada aquesta cançó!'],
 imperativa:['Apagueu els llums abans de marxar.','No trepitgis la gespa, si us plau.','Escolta les instruccions amb atenció!','Passeu el full a la companya.'],
 dubitativa:['Potser la botiga encara és oberta.','Tal vegada vindran a berenar.','No sé si demà nevarà.','És possible que el paquet arribi avui.'],
 desiderativa:['Tant de bo faci bon temps!','M’agradaria aprendre a tocar el violí.','Desitjo que et recuperis aviat.','Voldria passar les vacances amb vosaltres.']
};
const types=Object.keys(intentions);
for(const type of types){for(const s of utterances[type])add('oracions','classifica','Quin tipus d’oració és segons la intenció de qui parla?',s,[field('Tipus d’oració',type,types)],'No et fixis només en el signe final. Què fa qui parla: informa, pregunta, expressa emoció, ordena, dubta o desitja?', 'És '+type+' perquè la intenció és '+intentions[type][0]+'. '+(type==='imperativa'?'Una ordre pot dur un signe d’exclamació i continuar sent imperativa.':type==='declarativa'?'Negar una informació també és declarar.':type==='desiderativa'?'Un desig pot acabar amb signe d’exclamació; la intenció principal continua sent desitjar.':''),'PDF tipus d’oracions p. 1; formats inspirats en Liveworksheets');
 add('oracions','tria','Tria l’oració que serveix per '+intentions[type][0]+'.','Vols comunicar aquesta intenció, no només triar un signe de puntuació.',[field('Oració',intentions[type][1],types.map(t=>intentions[t][1]))],'Llegeix totes les opcions i pregunta’t què vol aconseguir qui les diu.','«'+intentions[type][1]+'» és '+type+': serveix per '+intentions[type][0]+'.','PDF tipus d’oracions p. 1');
}
const api={sections,questions,pairs,intentions};if(typeof module!=='undefined')module.exports=api;root.CatalaData=api;
})(typeof window==='undefined'?globalThis:window);
