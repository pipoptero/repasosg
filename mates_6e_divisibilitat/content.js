/* Teoria revisada: passos curts i comprovacions; banc i rutes intactes. */
window.MATES_WORLDS = [
  {
    "id": 0,
    "key": "laboratori",
    "title": "El laboratori dels nombres",
    "short": "Nombres amb secrets",
    "intro": "Troba patrons, construeix divisors i descobreix els primers.",
    "count": 80,
    "mark": "01",
    "topics": [
      "multiples",
      "divisors",
      "criteris",
      "tots-divisors",
      "primers",
      "factors"
    ]
  },
  {
    "id": 1,
    "key": "coincidencies",
    "title": "El repte de les coincidències",
    "short": "Tot encaixa!",
    "intro": "Fes coincidir cicles i reparteix sense deixar res enrere.",
    "count": 70,
    "mark": "02",
    "topics": [
      "mcm",
      "mcd",
      "metode",
      "coincidencies",
      "repartiments"
    ]
  },
  {
    "id": 2,
    "key": "miralls",
    "title": "El taller de girs i miralls",
    "short": "Canvia el punt de vista",
    "intro": "Gira, reflecteix i comprova cada punt de la quadrícula.",
    "count": 30,
    "mark": "03",
    "topics": [
      "girs",
      "simetries"
    ]
  }
];
window.MATES_LESSONS = {
  "multiples": {
    "title": "Múltiples: salta amb el mateix ritme",
    "question": "Si cada equip aporta 3 fitxes, quins totals pots construir?",
    "learn": [
      "Un múltiple és un total que podem construir amb grups iguals. Si cada grup té 3 fitxes, els totals són 0, 3, 6, 9…",
      "Multiplicar indica quants grups prenem. En 3 × 4, prenem quatre grups de tres fitxes.",
      "El 0 també hi és: cap grup de 3 dona 0 fitxes. «Primers múltiples positius» demana començar després del zero.",
      "Per a un nombre positiu sempre podem fer un grup més: els seus múltiples no s’acaben.",
      "Si dividim un múltiple pel nombre del grup, el residu és 0. No podem fer aquesta prova dividint entre zero."
    ],
    "example": "Sis múltiples de 3, incloent-hi el zero",
    "steps": [
      "Què faig? Decideixo que el primer factor és 0, perquè la pregunta inclou el zero.",
      "3 × 0 = 0 fitxes.",
      "3 × 1 = 3 fitxes.",
      "3 × 2 = 6 fitxes.",
      "3 × 3 = 9 fitxes.",
      "3 × 4 = 12 fitxes.",
      "3 × 5 = 15 fitxes.",
      "Compto els nombres: 0, 3, 6, 9, 12, 15. N’hi ha sis, no set."
    ],
    "remember": "Múltiple = total construït amb grups iguals. La posició i el valor no són el mateix: el sisè nombre de la llista que comença a 0 és 15.",
    "confusion": "0 és múltiple de qualsevol nombre positiu, però mai no el farem servir com a divisor. No podem dividir entre 0.",
    "tool": "multiples",
    "source": "Image (2)(1).jfif i Image (4)(1).jfif · Múltiples d’un nombre",
    "goal": "Construir totals de grups iguals i saber si la llista comença a zero.",
    "because": "Cada vegada afegim exactament un grup de 3. Per això el salt entre totals és sempre el mateix.",
    "check": "15 ÷ 3 = 5 grups i residu 0. Si es demanen múltiples entre 10 i 20, només hi entren 12, 15 i 18; si també han de ser senars, queda 15.",
    "tryIt": {
      "question": "Escriu els quatre primers múltiples POSITIUS de 4.",
      "answer": [
        4,
        8,
        12,
        16
      ],
      "kind": "list",
      "why": "Comença amb 4 × 1; continua fins a 4 × 4. El zero és múltiple, però aquí es demanen positius."
    }
  },
  "divisors": {
    "title": "Divisors: grups exactes, sense sobrants",
    "question": "Pots repartir 15 fitxes en grups de 3? I en grups de 4?",
    "learn": [
      "Un divisor és una mida de grup que permet repartir TOT el total sense sobrants.",
      "Una divisió és exacta quan el residu és 0. Residu vol dir allò que sobra.",
      "El quocient diu quants grups complets hem fet. No és el mateix que el residu.",
      "Si 3 divideix exactament 15, podem dir «3 és divisor de 15» o «15 és múltiple de 3». És la mateixa relació mirant-la des dels dos costats.",
      "Per comprovar una divisió, multiplica el divisor pel quocient i afegeix el residu. Has de recuperar el total. El residu és menor que el divisor."
    ],
    "example": "15 fitxes: files de 3 o de 4?",
    "steps": [
      "Què faig? Provo si la mida 3 encaixa exactament dins de 15.",
      "15 ÷ 3 = 5 grups; residu 0.",
      "3 × 5 = 15. No sobra cap fitxa: 3 és divisor de 15.",
      "Ara provo files de 4 fitxes.",
      "4 × 3 = 12 fitxes col·locades.",
      "15 − 12 = 3 fitxes sobrants. El quocient és 3 i el residu també és 3, però signifiquen coses diferents.",
      "15 = 4 × 3 + 3. La mida 4 no és divisor de 15."
    ],
    "remember": "No n’hi ha prou que el divisor sigui més petit: la divisió ha de ser exacta.",
    "confusion": "El quocient i el residu són diferents. En 15 : 3, el quocient és 5 i el residu és 0.",
    "tool": "divisors",
    "source": "Image (3)(1).jfif · Divisors d’un nombre",
    "goal": "Distingir la mida dels grups, el quocient i el que sobra.",
    "because": "Una mida només és divisor si forma grups sencers fins a esgotar totes les fitxes.",
    "check": "Amb files de 3, 5 grups reconstrueixen 15; amb files de 4, queden 3 fitxes fora.",
    "tryIt": {
      "question": "Repartim 14 fitxes en grups de 4. Quin RESIDU queda?",
      "answer": 2,
      "kind": "number",
      "why": "4 × 3 = 12; 14 − 12 = 2. Fem tres grups complets i sobren dues fitxes."
    }
  },
  "criteris": {
    "title": "Criteris: petites pistes, grans nombres",
    "question": "Pots decidir si 2028 és divisible per 4 sense fer tota la divisió?",
    "learn": [
      "Un criteri és una comprovació curta que ens permet decidir si una divisió serà exacta.",
      "Primer triem QUIN divisor volem comprovar. Després mirem les xifres que indica la seva fitxa.",
      "La regla mental ens ajuda a decidir. La divisió serveix per verificar que el residu és realment zero.",
      "Quan es demanen diverses condicions alhora, el nombre ha de passar TOTES les proves. Per al 6 cal passar alhora la del 2 i la del 3.",
      "No hi ha cap criteri de divisió entre zero. Per al 7, les fitxes es resolen amb divisió o múltiples, sense una regla ràpida nova."
    ],
    "example": "Investiguem 2028 abans d’obrir la comprovació",
    "steps": [
      "Llegeix la fitxa del divisor que vols provar.",
      "Mira les xifres que toca; si cal, fes la suma en una línia a part.",
      "Marca la teva previsió al taller dels set criteris. Encara no cal fer tota la divisió.",
      "Prem «Comprova el conjunt». Compara la regla mental i la divisió de verificació."
    ],
    "remember": "Per 3 i 9 sumem xifres. Per 4 mirem les dues últimes. Per 2, 5 i 10 mirem l’última.",
    "confusion": "Acabar en 3 no prova divisibilitat per 3: 13 no és múltiple de 3. Un nombre acabat en 0 no passa automàticament el criteri de 9.",
    "tool": "criteris",
    "source": "Image (5)(1).jfif; TEORIA DIVISIBILITAT.pdf p. 1; worksheet_175830.pdf p. 1; worksheet_333518.pdf p. 1–2; worksheet_1263604.pdf p. 1–2; el 6 s’incorpora al repàs per petició expressa de la família.",
    "goal": "Aplicar per separat les proves de 2, 3, 4, 5, 6, 9 i 10 i comprovar-les dividint.",
    "because": "Cada criteri comprova una condició exacta. Passar una prova no implica passar-ne una altra: 3 i 9, 2 i 6, o 5 i 10 no són equivalents.",
    "check": "Una divisió exacta deixa residu zero, no pas quocient zero. Les set fitxes següents en mostren exemples i contraexemples.",
    "tryIt": {
      "question": "Quina suma de xifres faries per començar la prova de 3 o 9 amb 216?",
      "answer": 9,
      "kind": "number",
      "why": "2 + 1 + 6 = 9. Després cal mirar si aquesta suma passa el criteri triat."
    }
  },
  "tots-divisors": {
    "title": "Tots els divisors: cap parella perduda",
    "question": "Com pots estar segura que no t’has deixat cap divisor de 15?",
    "learn": [
      "Tots els divisors d’un nombre positiu formen una llista finita. Sempre hi trobem 1 i el nombre mateix.",
      "Prova 1, 2, 3… Si la divisió és exacta, anota la parella: divisor i quocient.",
      "Quan el quocient ja és menor o igual que el divisor, les parelles s’han trobat. Revisa aquella divisió i atura’t: després es repetirien les parelles al revés.",
      "Ordena els divisors i elimina duplicats. Si una parella té dos factors iguals, aquell nombre s’escriu una sola vegada."
    ],
    "example": "Trobar tots els divisors de 15",
    "steps": [
      "15 ÷ 1 = 15; residu 0. Anoto 1 i 15.",
      "15 dividit entre 2 dona quocient 7 i residu 1. No anoto cap parella nova.",
      "15 ÷ 3 = 5; residu 0. Anoto 3 i 5.",
      "15 dividit entre 4 dona quocient 3 i residu 3. El quocient ja és menor que el divisor i no hi ha cap parella nova.",
      "Ordeno: 1, 3, 5, 15."
    ],
    "remember": "Cada divisió exacta aporta una parella. Comptar parelles no és el mateix que comptar divisors.",
    "confusion": "No confonguis la llista de divisors de 12 (finita) amb la dels múltiples de 12 (infinita).",
    "tool": "divisors",
    "source": "Image (6)(1).jfif · Càlcul de tots els divisors d’un nombre",
    "goal": "Buscar parelles de factors sense deixar-te’n cap ni repetir-ne.",
    "because": "Cada divisió exacta dona dos factors que multipliquen fins al total. Quan les parelles es creuen, repetiries les mateixes al revés.",
    "check": "1 × 15 = 15 i 3 × 5 = 15. En 36, la parella 6 × 6 aporta el 6 només una vegada; la llista és 1,2,3,4,6,9,12,18,36.",
    "tryIt": {
      "question": "Escriu tots els divisors positius de 16, sense repetir.",
      "answer": [
        1,
        2,
        4,
        8,
        16
      ],
      "kind": "list",
      "why": "Les parelles són 1 × 16, 2 × 8 i 4 × 4. El 4 s’escriu només una vegada."
    }
  },
  "primers": {
    "title": "Primers i compostos: compta els divisors",
    "question": "Per què 7 no es pot repartir en files iguals de 2 o més, llevat d’una fila de 7?",
    "learn": [
      "Un primer té exactament dos divisors positius diferents: 1 i ell mateix.",
      "Un compost té més de dos divisors. Es pot construir amb dos factors més grans que 1.",
      "1 té un sol divisor: no és primer ni compost.",
      "2 té dos divisors, 1 i 2. És l’únic primer parell; qualsevol altre parell més gran que 2 també té el divisor 2.",
      "Ser senar no és una prova de primalitat: 9 i 21 són senars, però tenen divisors intermedis."
    ],
    "example": "Compareu 7 fitxes i 6 fitxes",
    "steps": [
      "Amb 7 fitxes, una fila de 1 dona 7 files; una fila de 7 dona 1 fila.",
      "Provar files de 2 o de 3 deixa sobrants. D(7) = {1, 7}.",
      "Només hi ha dos divisors: 7 és primer.",
      "Amb 6 fitxes, també podem fer 2 files de 3: 2 × 3 = 6.",
      "D(6) = {1, 2, 3, 6}: més de dos divisors. És compost."
    ],
    "remember": "Primer vol dir exactament dos divisors, no «nombre senar» ni «nombre petit».",
    "confusion": "La frase breu «compost si no és primer» necessita l’excepció de l’1. Aquí sempre la fem explícita.",
    "tool": "primers",
    "source": "Image (7)(1).jfif · Nombres primers i compostos",
    "goal": "Decidir si un nombre és primer comptant els seus divisors.",
    "because": "La classificació depèn de les divisions exactes, no del color, la mida o si el nombre és senar.",
    "check": "D(1)={1}; D(2)={1,2}; D(21)={1,3,7,21}. Aquests exemples comproven les excepcions i el cas senar compost.",
    "tryIt": {
      "question": "El 9 és primer, compost o cap de les dues coses?",
      "answer": "compost",
      "kind": "choice",
      "why": "9 = 3 × 3. Té els divisors 1, 3 i 9: és compost."
    }
  },
  "factors": {
    "title": "Factors primers: les peces bàsiques",
    "question": "Pots desmuntar 60 en una multiplicació on totes les peces siguin primeres?",
    "learn": [
      "Un factor és un nombre que participa en una multiplicació. Ara volem que tots els factors siguin primers.",
      "Divideix per un primer que encaixi exactament. Continua amb el quocient fins a arribar a 1.",
      "Si el mateix primer torna a dividir, l’has de tornar a escriure. Les repeticions canvien el producte.",
      "El 1 final indica que ja hem acabat. No és un factor primer."
    ],
    "example": "Desmuntem 60, un pas cada vegada",
    "steps": [
      "60 ÷ 2 = 30. Escric el primer factor 2.",
      "30 ÷ 2 = 15. Torno a escriure 2: no l’eliminem per estar repetit.",
      "15 ÷ 3 = 5. Escric 3.",
      "5 ÷ 5 = 1. Escric 5 i paro.",
      "Reconstrueixo: 2 × 2 × 3 × 5 = 60."
    ],
    "remember": "Producte correcte + tots els factors primers + totes les repeticions.",
    "confusion": "No sumis els factors: 2+2+3+5 no reconstrueix 60. El 1 és el final de les divisions, no un factor primer.",
    "tool": "factors",
    "source": "TEORIA DIVISIBILITAT.pdf · p. 1, descomposició en factors primers",
    "goal": "Desmuntar un nombre en factors primers i reconstruir-lo multiplicant.",
    "because": "Cada divisió treu un factor sense perdre el valor original. Multiplicar tots els factors desfà les divisions.",
    "check": "2 × 2 = 4; 4 × 3 = 12; 12 × 5 = 60. El producte és correcte i 2, 3 i 5 són primers.",
    "tryIt": {
      "question": "Escriu els factors primers de 20, incloses les repeticions.",
      "answer": [
        2,
        2,
        5
      ],
      "kind": "factors",
      "why": "20 ÷ 2 = 10; 10 ÷ 2 = 5; 5 ÷ 5 = 1. 2 × 2 × 5 = 20."
    },
    "more": {
      "title": "Una abreviatura útil: els exponents",
      "paragraphs": [
        "2² vol dir 2 × 2. L’exponent 2 diu quantes vegades apareix el factor, no vol dir multiplicar 2 per l’exponent.",
        "60 = 2² × 3 × 5. L’ordre dels factors pot canviar, però no les repeticions.",
        "4 × 15 també és 60, però encara no és una descomposició completa en factors primers: 4 i 15 són compostos."
      ]
    }
  },
  "mcm": {
    "title": "m.c.m.: la primera coincidència positiva",
    "question": "Si un cicle dura 6 minuts i un altre 8, quan coincidiran després de començar junts?",
    "learn": [
      "m.c.m. vol dir mínim comú múltiple. «Comú» vol dir que serveix per als dos nombres.",
      "Primer imagina els grups de cada mida. Escriu els totals positius que pots construir amb cada nombre.",
      "El primer total positiu que surt a les dues llistes és el m.c.m. No comptem el zero perquè busquem una coincidència després de començar."
    ],
    "example": "m.c.m. de 6 i 8 amb dues llistes",
    "steps": [
      "Començo pels múltiples positius de 6.",
      "6, 12, 18, 24…",
      "Ara escric els de 8.",
      "8, 16, 24…",
      "El primer nombre que surt a totes dues llistes és 24.",
      "El 24 conté 4 grups de 6 i 3 grups de 8."
    ],
    "remember": "El resultat és múltiple de totes dues dades i és el més petit entre els comuns positius.",
    "confusion": "El més petit dels nombres inicials no és necessàriament el m.c.m. Multiplicar-los sempre pot donar un múltiple comú massa gran.",
    "tool": "cycles",
    "source": "TEORIA DIVISIBILITAT.pdf p. 1; problemas_ mcm_mcd_3.jfif · coincidències",
    "goal": "Trobar el primer total positiu que conté grups complets de dues mides.",
    "because": "Busquem un mateix total que es pugui construir sencer amb totes dues mides. El primer comú és el més petit positiu que compleix la condició.",
    "check": "24 ÷ 6 = 4; 24 ÷ 8 = 3. Totes dues divisions són exactes.",
    "tryIt": {
      "question": "Quin és el m.c.m. de 4 i 10?",
      "answer": 20,
      "kind": "number",
      "why": "Múltiples positius de 4: 4,8,12,16,20… De 10: 10,20… La primera coincidència és 20."
    },
    "more": {
      "title": "Segon camí: factors primers i casos especials",
      "paragraphs": [
        "Quan les llistes s’allarguen, els factors primers poden ser més pràctics. Primer entén el significat del total comú.",
        "6 = 2 × 3.",
        "8 = 2 × 2 × 2 = 2³.",
        "Agafem tots els factors amb la repetició més gran: 2 × 2 × 2 × 3 = 24.",
        "Un altre exemple: 12 = 2² × 3; 18 = 2 × 3².",
        "Prenem 2² × 3² = 36. Comprovem: 36 ÷ 12 = 3; 36 ÷ 18 = 2.",
        "Si un nombre ja és múltiple de l’altre, no cal multiplicar-los: m.c.m.(4,12)=12. Si són iguals, m.c.m.(9,9)=9.",
        "Si no comparteixen factors primers, el producte és el m.c.m.: m.c.m.(8,15)=120."
      ]
    }
  },
  "mcd": {
    "title": "m.c.d.: el divisor comú més gran",
    "question": "Amb 12 fitxes d’un color i 18 d’un altre, quina mida màxima poden tenir les files d’un sol color?",
    "learn": [
      "m.c.d. vol dir màxim comú divisor. És el divisor més gran que serveix per als dos nombres.",
      "Escriu els divisors de cada total i busca els que apareixen a totes dues llistes.",
      "Tria el més gran dels comuns. En un problema, encara caldrà explicar si representa grups, objectes per grup o longitud."
    ],
    "example": "m.c.d. de 12 i 18 amb divisors",
    "steps": [
      "Divisors de 12: 1, 2, 3, 4, 6, 12.",
      "Divisors de 18: 1, 2, 3, 6, 9, 18.",
      "Comuns a totes dues llistes: 1, 2, 3, 6.",
      "El més gran és 6. Aquest és el m.c.d.",
      "El 6 cap exactament dues vegades en 12 i tres vegades en 18."
    ],
    "remember": "El resultat divideix totes dues dades. En un problema has de dir si representa mida o nombre de grups.",
    "confusion": "Triar tots els factors amb exponents grans dona el m.c.m.; per m.c.d. només volem els comuns.",
    "tool": "packages",
    "source": "TEORIA DIVISIBILITAT.pdf p. 1; problemas_ mcm_mcd_1.jfif · exemple",
    "goal": "Trobar el nombre més gran que cap exactament en dos totals.",
    "because": "Un divisor comú ha de repartir TOTS DOS totals sense residu. Triar-ne el més gran imposa la condició de màxim.",
    "check": "12 ÷ 6 = 2; 18 ÷ 6 = 3. No sobra res en cap total. Per 10 i 15, els comuns són 1 i 5: el m.c.d. és 5.",
    "tryIt": {
      "question": "Quin és el m.c.d. de 8 i 12?",
      "answer": 4,
      "kind": "number",
      "why": "Els comuns són 1, 2 i 4. El més gran és 4; 8 ÷ 4 = 2 i 12 ÷ 4 = 3."
    },
    "more": {
      "title": "Segon camí: factors comuns, sense afegir-ne",
      "paragraphs": [
        "12 = 2 × 2 × 3.",
        "18 = 2 × 3 × 3.",
        "Només podem treure de TOTS DOS una vegada el 2 i una vegada el 3.",
        "m.c.d.(12,18) = 2 × 3 = 6. Prenem la repetició més petita dels factors comuns.",
        "En 10 = 2 × 5 i 15 = 3 × 5, només comparteixen el factor primer 5.",
        "Si només comparteixen el divisor 1, el m.c.d. és 1: m.c.d.(8,15)=1. Tots dos poden ser compostos.",
        "Si són iguals, m.c.d.(9,9)=9. Si un divideix l’altre, m.c.d.(4,12)=4."
      ]
    }
  },
  "metode": {
    "title": "Detectiu de problemes: m.c.m. o m.c.d.?",
    "question": "Abans de calcular: què passa en aquesta història i què et demanen?",
    "learn": [
      "Primer imagino què passa. Hi ha ritmes que es repeteixen, grups de mida fixa o material que volem repartir?",
      "Després llegeixo la pregunta final i dic la unitat: minuts, capses, lots, objectes per bossa o cm per tros.",
      "Si el total ha de contenir grups sencers de totes dues mides, busco múltiples. Si un valor ha de repartir exactament dos totals, busco divisors.",
      "Aquesta és la condició que justifica el mètode. Cap paraula sola el decideix. Abans d’acabar, comprovo què significa el nombre i si encara falta dividir."
    ],
    "example": "El mapa del detectiu: una pregunta a cada pas",
    "steps": [
      "Què passa? Explico la història i identifico què representa cada dada.",
      "Què em demanen i en quina unitat? Llegeixo la pregunta final abans de calcular.",
      "Quina condició ha de complir el valor intermedi? Ha de contenir grups complets o dividir totals sense sobrants?",
      "Calculo el m.c.m. o el m.c.d. amb llistes o divisors.",
      "Aquest nombre ja respon la pregunta? Si calen capses, rondes o contingut per paquet, faig la divisió posterior.",
      "Comprovo les condicions i escric la resposta amb unitats."
    ],
    "remember": "Què em demanen? → Dades → Múltiple o divisor? → Mètode → Càlcul → Significat i comprovació.",
    "confusion": "«Paquets idèntics amb els dos materials» i «bosses d’un sol tipus amb la mateixa mida» poden donar interpretacions diferents del m.c.d.",
    "tool": "decision",
    "source": "problemas_ mcm_mcd_1.jfif · Aprèn; problemas_ mcm_mcd_3.jfif · 36–37",
    "goal": "Explicar què es demana, triar la relació i donar un resultat amb significat.",
    "because": "La relació matemàtica justifica el mètode. Així serveix encara que canviïn els noms dels objectes o les paraules del problema.",
    "check": "Segueix A per veure una coincidència i E per veure un tall; després B mostra capses amb m.c.m. C i D contrasten dos significats del m.c.d.; F acaba comptant rondes.",
    "tryIt": {
      "question": "Si busco un temps que conté intervals complets de dues durades, necessito un múltiple o un divisor comú?",
      "answer": "múltiple",
      "kind": "relation",
      "why": "El temps total ha de contenir intervals sencers de cadascuna de les durades: és un múltiple comú."
    }
  },
  "coincidencies": {
    "title": "Problemes de coincidència: posa-hi unitats",
    "question": "Quan tornaran a coincidir dos senyals? I quantes voltes haurà fet cadascun?",
    "learn": [
      "Primer imagino dos ritmes que comencen junts: cada un fa salts de la seva durada. El zero és l’inici; la pròxima coincidència ha de passar més tard.",
      "El temps d’espera és múltiple dels dos períodes. El primer positiu és el m.c.m.",
      "Si demanen quantes rondes es fan, divideix l’espera per la durada d’una ronda. Si demanen l’hora, suma l’espera a l’hora inicial."
    ],
    "example": "Cada 8 i 12 hores, començant a les 7:00",
    "steps": [
      "Múltiples positius de 8: 8, 16, 24…",
      "Múltiples positius de 12: 12, 24…",
      "Primera coincidència futura: 24 HORES d’espera.",
      "24 ÷ 8 = 3 intervals del primer ritme.",
      "24 ÷ 12 = 2 intervals del segon ritme.",
      "Hora final: 7 + 24 = 31.",
      "En un rellotge de 24 hores: 31 − 24 = 7. És a les 7:00 de l’endemà."
    ],
    "remember": "Durada, hora del dia i nombre d’intervals són respostes diferents. Llegeix la unitat.",
    "confusion": "No comptis el moment inicial com una coincidència FUTURA. Les activitats de senyals substitueixen el context de medicació del llibre.",
    "tool": "cycles",
    "source": "problemas_ mcm_mcd_2.jfif · periodicitat; problemas_ mcm_mcd_3.jfif · semàfors i punts",
    "goal": "Separar temps d’espera, nombre de rondes i hora del rellotge.",
    "because": "Per tornar a coincidir han de passar intervals complets de tots dos ritmes. Comptar intervals o llegir una hora són operacions posteriors diferents.",
    "check": "3 × 8 = 24 hores i 2 × 12 = 24 hores. Esperar 24 hores porta a la mateixa hora del dia següent.",
    "tryIt": {
      "question": "Dos cicles duren 5 i 6 minuts. Quantes rondes del de 5 minuts passen fins a coincidir per primer cop després de començar?",
      "answer": 6,
      "kind": "number",
      "why": "m.c.m.(5,6)=30 minuts; 30 ÷ 5 = 6 rondes. El 30 és el temps, no el nombre de rondes."
    }
  },
  "repartiments": {
    "title": "Repartiments: què va a cada paquet?",
    "question": "Vols fer moltes bosses petites o poques bosses amb molts objectes? Quines condicions s’han de complir?",
    "learn": [
      "Primer imagino tot el material i com el separo. Si no ha de sobrar res, la mida comuna o el nombre de grups ha de dividir exactament tots dos totals.",
      "En lots IDÈNTICS amb tots dos materials, el m.c.d. és el màxim nombre de lots. Després divideixes cada total per trobar-ne el contingut.",
      "En bosses d’un SOL tipus, amb contingut igual i màxim, el m.c.d. és el contingut per bossa. Després divideixes per comptar les bosses.",
      "En una cinta, el divisor comú pot representar centímetres per tros. Les unitats ens diuen què hem calculat."
    ],
    "example": "10 objectes i 15 objectes, en bosses d’un sol tipus",
    "steps": [
      "Què busco? La mateixa mida màxima de bossa, sense barrejar tipus ni deixar sobrants.",
      "Divisors comuns de 10 i 15: 1 i 5.",
      "El m.c.d. és 5 OBJECTES PER BOSSA. No són cinc bosses.",
      "10 ÷ 5 = 2 bosses del primer tipus.",
      "15 ÷ 5 = 3 bosses del segon tipus.",
      "En total hi ha 2 + 3 = 5 bosses, però aquest recompte és una operació diferent del contingut per bossa."
    ],
    "remember": "Abans de posar la unitat, escriu què representa el valor calculat: grups, objectes per grup o longitud.",
    "confusion": "La pregunta «quants objectes de cada color a cada paquet?» necessita dividir després de trobar el nombre de paquets.",
    "tool": "packages",
    "source": "problemas_ mcm_mcd_1.jfif · exemple; problemas_ mcm_mcd_3.jfif · torres i rams",
    "goal": "Distingir quants paquets fem de quants objectes té cada paquet.",
    "because": "La mida de cada bossa ha de cabre exactament tant en el total de 10 com en el de 15. Cap dels dos tipus pot deixar objectes fora.",
    "check": "2 bosses × 5 objectes = 10; 3 bosses × 5 objectes = 15. Torna al «Detectiu de problemes» i compara-ho amb lots barrejats.",
    "tryIt": {
      "question": "Amb 6 fitxes blaves i 9 de taronja fem el màxim nombre de lots idèntics amb els dos colors. Quantes BLAVES hi ha a cada lot?",
      "answer": 2,
      "kind": "number",
      "why": "m.c.d.(6,9)=3 lots; 6 ÷ 3 = 2 blaves per lot. Les taronja són 9 ÷ 3 = 3 per lot."
    }
  },
  "girs": {
    "title": "Girs: centre, angle i sentit",
    "question": "Una brúixola mira al nord. Com la faries mirar a l’est? I a l’oest?",
    "learn": [
      "El centre és el punt al voltant del qual gira la figura. El centre es queda fix.",
      "L’angle mesura quant girem: 90° és un quart de volta, 180° mitja volta i 360° una volta completa.",
      "Horari és el sentit de les agulles del rellotge. Antihorari és el contrari. El dibuix del llibre mostra un gir de 70° cap a l’esquerra: no tots els girs són de 90°.",
      "La figura conserva forma i mida. Cada punt manté la distància al centre. Primer mira el moviment; després comptarem caselles per indicar els punts."
    ],
    "example": "Del nord a l’est: un quart de volta horari",
    "steps": [
      "Marco el centre de la brúixola. La fletxa inicial apunta al nord.",
      "Trio el sentit horari, com les agulles del rellotge.",
      "Faig un quart de volta: 90°. La fletxa apunta a l’est.",
      "Si giro 90° antihorari des del nord, arribo a l’oest. El sentit canvia el resultat.",
      "A la brúixola prova també 70° antihorari: és un gir menor que un quart de volta."
    ],
    "remember": "Un gir necessita centre, amplitud i sentit. No barregis l’orientació final amb l’angle que has girat.",
    "confusion": "No confonguis l’angle del gir amb l’orientació final. Girar 70° antihorari des del nord deixa la fletxa entre el nord i l’oest.",
    "tool": "compass",
    "source": "Image (8)(1).jfif · Girs, brúixola i exemple de 70°",
    "goal": "Moure una figura al voltant d’un centre amb un angle i un sentit.",
    "because": "Tots els punts giren al voltant del mateix centre, la mateixa amplitud i en el mateix sentit. No estirem ni deformem la figura.",
    "check": "Una volta de 360° retorna a l’orientació inicial. El centre continua al mateix lloc i la distància de cada vèrtex al centre no canvia.",
    "tryIt": {
      "question": "Des del nord, després de 90° ANTIHORARI, cap on mires?",
      "answer": "oest",
      "kind": "direction",
      "why": "Nord → oest és el quart de volta antihorari. Nord → est és l’horari."
    },
    "more": {
      "title": "Per als reptes de quadrícula: caselles primer, fórmules després",
      "paragraphs": [
        "Les coordenades són una manera d’anomenar les caselles, no un altre tema per memoritzar. O és (0;0).",
        "(1;2) vol dir una casella a la dreta i dues cap amunt. Un signe menys indica esquerra o avall.",
        "Girem 90° horari el triangle A(1;1), B(3;1), C(1;2): A′(1;−1), B′(1;−3), C′(2;−1). Compta les caselles i compara els costats.",
        "Drecera opcional, després d’entendre el dibuix: 90° horari transforma (x;y) en (y;−x); 90° antihorari en (−y;x); 180° en (−x;−y). No cal memoritzar-ho per fer servir el taller."
      ]
    }
  },
  "simetries": {
    "title": "Simetries: un mirall a la quadrícula",
    "question": "Si plegues el paper per una recta, quins punts han de coincidir?",
    "learn": [
      "L’eix és la recta per on plegaríem el paper. El punt i el reflex han de quedar igual de lluny d’aquesta recta, a costats oposats.",
      "Amb eix vertical canvien esquerra i dreta, però l’altura es manté. Amb eix horitzontal canvien dalt i baix, però la posició esquerra/dreta es manté.",
      "Un punt que és damunt de l’eix es queda al mateix lloc: no té cap distància per canviar de costat.",
      "Un eix de simetria d’una figura fa coincidir les dues parts en plegar. Un rectangle no quadrat en té dos; un quadrat en té quatre, incloses les diagonals.",
      "El reflex conserva forma i mida. No el confonguis amb un gir: el mirall té un eix; el gir té centre, angle i sentit."
    ],
    "example": "Un mirall vertical: comptem caselles abans de calcular",
    "steps": [
      "Trio el punt A una casella a la dreta de l’eix i una casella amunt.",
      "Mantinc l’altura: el reflex també serà una casella amunt.",
      "Poso A′ una casella a l’esquerra de l’eix.",
      "En plegar pel mirall, A i A′ coincideixen.",
      "Un punt sobre l’eix no es mou. Repeteixo la mateixa comprovació per a cada vèrtex de la figura."
    ],
    "remember": "Eix vertical: mateixa y. Eix horitzontal: mateixa x. Sempre mateixa distància a l’eix.",
    "confusion": "Gir i reflex poden conservar forma i mida però no són la mateixa transformació: un té centre i angle; l’altre, un eix.",
    "tool": "mirror",
    "source": "Image (9)(1).jfif · Simetries",
    "goal": "Fer coincidir una figura amb el seu reflex en plegar per un eix.",
    "because": "La recta queda just a mig camí entre un punt i el seu reflex, en direcció perpendicular a l’eix.",
    "check": "Si un punt és a tres caselles de l’eix, el reflex també és a tres. Entre tots dos hi ha sis caselles: no confonguis les dues distàncies.",
    "tryIt": {
      "question": "Un punt és a 3 caselles d’un eix horitzontal. A quantes caselles de l’eix serà el reflex?",
      "answer": 3,
      "kind": "number",
      "why": "La distància a l’eix es conserva: 3 caselles, però a l’altre costat. Entre els dos punts hi hauria 6 caselles."
    },
    "more": {
      "title": "La quadrícula posa nom als punts: ajuda opcional",
      "paragraphs": [
        "Primer compta caselles des de l’eix. Després pots escriure el punt com (x;y): dreta/esquerra i amunt/avall.",
        "Respecte de x=0, el triangle (1;1),(3;1),(2;3) passa a (−1;1),(−3;1),(−2;3). Conservem l’altura de cada punt.",
        "Respecte de y=0, (1;1) passa a (1;−1). És un altre reflex. Si l’eix és x=1 o y=1, compta des d’aquella recta.",
        "Drecera opcional: amb x=0, (x;y) passa a (−x;y); amb y=0, passa a (x;−y). Són maneres curtes d’escriure el que ja has vist al mirall."
      ]
    }
  }
};
