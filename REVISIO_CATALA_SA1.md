# Revisión local · Català 6è SA-1

Publicación autorizada por el usuario el 24 de noviembre de 2026. Destino: https://pipoptero.github.io/repasosg/catala_6e_sa1/index.html . Las referencias a publicación pendiente y ausencia de commit/push en los apartados siguientes describen la revisión local anterior a esta autorización. Los originales escolares y las capturas locales siguen excluidos.

24 de noviembre de 2026. Preparador completo en `catala_6e_sa1/index.html`, integrado en el Portal de Repàs. Sin commit, push ni despliegue. La publicación queda pendiente de revisión local.

## Resultado

Teoría de seis bloques, 180 actividades con pistas y explicaciones en catalán, ejercicios por sección, práctica mezclada, repaso de errores, simulacro de 30 actividades y progreso persistente independiente. Diseño con colores por sección, mascota decorativa, ejemplos comparados, tarjetas y controles adaptados al móvil.

| Sección | Actividades | Cobertura |
|---|---:|---|
| Accents diacrítics | 30 | Los quince pares de la ficha, en ambos sentidos; elección y escritura contextualizada. |
| Pronoms personals | 30 | Sustituir grupos nominales, persona/número, concordancia con contexto, fuertes/débiles y referentes de los pronombres. |
| Apòstrof i pronoms | 30 | Delante de vocal/h, formas completas, después de vocal/consonante/u, excepción de la y formas que no se apostrofan. |
| L, ll i l·l | 30 | Grafías, ejemplos de los apuntes, grupos habituales, excepciones, contrastes con una sola l y punto volado. |
| Les comes | 30 | Diez frases con colocación interactiva; ocho casos contextualizados de relativas con dos respuestas; seis reparaciones y seis reordenaciones. |
| Tipus d’oracions | 30 | Cinco actividades por cada una de las seis intenciones: declarativa, interrogativa, exclamativa, imperativa, dubitativa y desiderativa. |
| **Total** | **180** | **188 campos evaluables; identificadores y combinaciones de enunciado/contexto únicos.** |

Formatos: 87 actividades de elección, 45 de escritura, 10 de insertar/quitar comas, 8 dobles de clasificación/puntuación, 6 de reordenar una frase completa y 24 de clasificación de oraciones. La clasificación se responde mediante opciones seleccionables, no arrastrando elementos. Las reordenaciones se escriben; no hay evaluación automática de redacciones libres.

Rondas de 6, 12 o 30 actividades. Simulacro de 30, cinco por sección, sin pistas ni corrección hasta el final. Las actividades dobles cuentan como correctas solo cuando ambos campos son correctos. Los errores desaparecen del repaso cuando se resuelven correctamente. Las estadísticas distinguen actividades diferentes, aciertos de los intentos y errores pendientes; un último acierto no se presenta como aprendizaje definitivo.

## Archivos nuevos y modificados

Archivos existentes modificados:

- `index.html`: tercer próximo examen, acceso en Català 6è, buscador/recomendador y respuesta sobre próximos exámenes. Medi y Anglès siguen disponibles; la misión anterior de Català también.
- `.gitignore`: exclusión de `material_catala_6e_sa1/`.

Módulo nuevo:

- `catala_6e_sa1/index.html`, `styles.css`, `app.js`, `engine.js`, `content.js`, `data.js`.
- `catala_6e_sa1/validate.cjs`, `browser-test.cjs`, `README.md`.
- `catala_6e_sa1/assets/oracions-resum.webp`, `ela-resum.webp`, `comes-explicatives.webp`.
- Este informe: `REVISIO_CATALA_SA1.md`.

Los 177 archivos existentes rastreados distintos de la portada y `.gitignore` conservan exactamente sus hashes previos. Ningún archivo de los módulos anteriores se ha modificado. Los archivos personales y borradores no rastreados que ya existían se conservan.

## Fuentes escolares revisadas

Los tres PDF tienen la teoría incorporada como imagen. Se han renderizado y revisado visualmente sus páginas completas. También se han leído las seis fotografías adjuntas. El texto de cabeceras y las respuestas manuscritas no se han incorporado a la web.

| Fuente | Uso |
|---|---|
| `18. TEORIA tipus d'oracions (gramàtica).docx.pdf`, p. 1 | Las seis categorías escolares, explicación de la intención y retal del cartel en `oracions-resum.webp`. |
| `22. TEORIA Oracions subordinades amb coma (ortografia).docx (1).pdf`, p. 1 | Posición de la subordinada, incisos y contraste explicativa/especificativa. Solo se extrae el bloque inferior de relativas como `comes-explicatives.webp`; la pauta posicional se explica con sus límites. |
| `TEORIA LL L·L (ortografia).pdf`, p. 1 | Dígrafo ll, ela geminada, grupos frecuentes, excepciones y consulta del diccionario. Retal principal en `ela-resum.webp`. |
| `Image (2).jfif` | Tabla de quince pares diacríticos, transcrita con aclaraciones. |
| `Image (3).jfif` | Pronombres fuertes/débiles, personas, número y sustitución. |
| `Image (4).jfif` | Posiciones y formas de los pronombres, apostrofación y guionet, con corrección de las generalizaciones. |
| `Image (5).jfif` | Vocabulario, clasificación y huecos de l/ll/l·l. Se utilizan palabras legibles y seguras de los apuntes. |
| `Image (6).jfif` | Colocar/quitar comas, relativas, reordenar subordinadas. Las soluciones manuscritas no se toman como correctas. |
| `Image (7).jfif` | Sustituir por pronombres, concordancia verbal y completar huecos. Se añade contexto para evitar respuestas ambiguas. |

Los originales se han copiado sin alteración a `material_catala_6e_sa1/`, con inventario de nueve archivos y SHA-256. Se ha comprobado que tanto las copias como los archivos de Descargas conservan sus hashes. Esa carpeta queda ignorada por Git. Los tres WebP son extracciones directas a doble resolución, sin redibujado y con compresión sin pérdida; pesan aproximadamente 2 MB entre los tres. Se han inspeccionado: no contienen nombres, curso manuscrito ni respuestas personales. No hay PDF completos ni fotografías originales en el módulo público.

## Aclaraciones pedagógicas y normativas

1. **Be/bé:** se corrige la equivalencia errónea de be con una conjunción. Be puede designar un cordero o el nombre de la letra b; bé corresponde al significado de bien o posesión. La regla de «el verbo siempre lleva el diacrítico» no se generaliza: deu, del verbo deure, no lleva acento. Mes se explica como período del calendario, no como un período siempre de treinta días. Qué/que se trabaja en catalán con què/que, incluyendo una interrogativa indirecta. Contraste: [IEC, accent diacrític](https://aoe.iec.cat/al-voltant-de-laccent-diacritic/).
2. **Apóstrofo:** la excepción ante i/u átonas afecta al pronombre femenino la; no a todos los pronombres. Se contraponen la imagino / m’imagino y la utilitzo / l’utilitzo. Ens se mantiene delante del verbo; us y les no tienen forma apostrofada. Se completa la tabla con formas detrás del verbo y la u de diptongo. Contraste: [CPNL, apostrofació i contraccions](https://www.cpnl.cat/gramatica/14/3-l-apostrofacio-i-les-contraccions/nivell/intermedi-3).
3. **Pronombres:** se distingue dirigirse a una persona del verbo que concuerda con ella: vostè/vostès llevan tercera persona verbal, vós segunda plural. No se pregunta quién corresponde a preparava sin contexto. Una orden dirigida a una persona por su nombre se relaciona con tu, no con ella por el mero hecho de citar su nombre. Contraste: [CPNL, pronoms forts](https://www.cpnl.cat/gramatica/64/36-els-pronoms-personals-forts).
4. **Comas:** la pauta escolar inicial/intercalada/final se presenta como modelo de práctica para los ejemplos integrados, no como regla universal. Las relativas incluyen contexto sobre «todo el grupo» o «solo una parte», porque la puntuación cambia el sentido. Se incluye una explicativa al final con coma. No se utilizan los casos concesivos ambiguos corregidos a mano como preguntas de respuesta única. Contraste: [CPNL, subordinades](https://www.cpnl.cat/gramatica/43/11-les-oracions-subordinades) y [Generalitat, usos de la coma](https://justicia.gencat.cat/ca/departament/llengua/recursos-linguistics/materials-consulta/criteris_linguistics_gene/signes-de-puntuacio/coma/).
5. **L·l:** los grupos frecuentes se enseñan junto con sus excepciones, sin convertirlos en una regla automática. El corrector diferencia l·l de ll, l.l y l-l. Contraste: [CPNL, la ela geminada](https://www.cpnl.cat/media/upload/pdf/e_la_ela_geminada_editora_130_696_1.pdf).
6. **Oraciones:** se conserva la terminología declarativa de clase. No se clasifica solo por el signo final: una orden o un deseo pueden llevar exclamación sin convertirse por ello en exclamativas.

## Referencias de actividades

Consultadas las seis páginas indicadas: [427858](https://www.liveworksheets.com/worksheet/ca/esl-grammar/427858), [654041](https://www.liveworksheets.com/worksheet/ca/esl-grammar/654041), [1734075](https://www.liveworksheets.com/worksheet/ca/esl-grammar/1734075), [1922350](https://www.liveworksheets.com/worksheet/ca/esl-grammar/1922350), [389927](https://www.liveworksheets.com/worksheet/ca/esl-grammar/389927) y [2174707](https://www.liveworksheets.com/worksheet/ca/catalan/2174707). La última se consultó mediante HTTPS con www, ya que el enlace HTTP original no respondió adecuadamente.

Se han usado como referencia de formatos: completar diacríticos en contexto, elegir entre formas parecidas, clasificar por intención y relacionar intención con una oración. Se han inspeccionado visualmente las fichas de referencia 427858 y 1922350. No se afirma haber realizado interactivamente las seis fichas ni haber revisado todas sus páginas. No se incrustan esos sitios ni se copian sus imágenes o bancos; las frases de práctica del nuevo módulo se han redactado para este preparatorio.

## Pruebas realizadas

- `node catala_6e_sa1/validate.cjs`: PASS. 180 identificadores y contextos únicos; 30 por bloque; 188 campos; respuestas y opciones incorrectas; diferencias de acento, punto volado, guionet, apóstrofos y comas; Unicode equivalente; actualización de errores; estado inválido y selección de 1.000 simulacros equilibrados.
- `node catala_6e_sa1/browser-test.cjs`: PASS en Chromium. Las 180 actividades se han enviado por los formularios reales; carga de las seis teorías y tres imágenes; corrección de un error y repetición hasta acertar; teclado de ayuda; borrador tras recargar; simulacro completo de 30 con soluciones diferidas y recarga intermedia; resumen final con las 30 explicaciones; continuidad de claves de progreso de Medi y Anglès; tres próximos exámenes; ausencia de errores JavaScript o respuestas HTTP de error durante la prueba.
- Diseño: comprobación de inicio, teoría, práctica y progreso a 320, 390, 768 y 1280 px. Se detectó y corrigió el desbordamiento de las tablas a 320 px; las tablas se desplazan internamente y el documento no desborda. Revisión adicional de los seis bloques de teoría a los cuatro anchos. Se incluye indicación para desplazar las tablas cuando no caben todas las columnas.
- Revisión visual de las capturas de escritorio y móvil, controles para colocar comas, teoría y retales escolares. El movimiento decorativo respeta prefers-reduced-motion; no se necesita arrastrar elementos.
- Regresión: PASS en `angles_6e_irregulars/validate.cjs`, `medi_6e_nutricio/validate.cjs`, `medi_6e_cos_huma/validate.cjs` y `mates_6e_divisibilitat/validate.cjs`.
- Preservación SHA-256: 177 archivos anteriores intactos; solo portada y exclusión de materiales modificadas. Nueve originales privados sin alteración. `git diff --check` sin incidencias.

Las pruebas no sustituyen una prueba con la alumna ni comprueban un dispositivo iOS/Android físico: la revisión móvil usa tamaños de ventana en Chromium. El test de navegador depende de Playwright/Chromium ya instalados localmente, como los tests anteriores del repositorio.

## Capturas y revisión

Capturas locales en `tmp/medi-review/catala-sa1/captures/`:

- `01-inici-escriptori.png` y `05-inici-mobil.png`.
- `02-teoria-diacritics.png`, `02-teoria-pronoms.png`, `02-teoria-apostrof.png`, `02-teoria-ela.png`, `02-teoria-comes.png`, `02-teoria-oracions.png`.
- `03-correccio-error.png`, `04-simulacre.png`, `06-apostrof-mobil.png`, `07-comes-mobil.png` y `08-portal.png`.

Revisión local: `http://127.0.0.1:8766/catala_6e_sa1/index.html` mientras el servidor local esté activo, o abriendo el HTML con su carpeta completa. El progreso es local al navegador y origen utilizado; no se sincroniza entre dispositivos ni entre file://, localhost y la web publicada. No se han importado ni borrado progresos anteriores.

Pendiente: revisión de la familia y autorización para publicar este nuevo examen. No hay una fecha de examen facilitada; la tarjeta no inventa una fecha. No se han ejecutado commit, push ni despliegue.
