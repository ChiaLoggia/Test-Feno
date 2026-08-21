/*
 * EDITAR ESTE ARCHIVO para agregar, quitar o cambiar preguntas.
 * No cambies los nombres de las propiedades (slug, questions, options, correct, feedback).
 */
window.QUESTIONNAIRE_DATA = [
  {
    "slug": "oppenheimer",
    "presenter": "Gabriel Gellon",
    "title": "Oppenheimer y la explosión de la ciencia",
    "questions": [
      {
        "number": 1,
        "prompt": "Según lo expuesto por Gabriel en la masterclass, ¿cuál era la verdadera función de J. Robert Oppenheimer dentro del Proyecto Manhattan y qué escala tenía respecto a la estructura general del proyecto?",
        "options": [
          {
            "key": "A",
            "text": "Era el director general del Proyecto Manhattan a nivel nacional y supervisaba la construcción del Pentágono."
          },
          {
            "key": "B",
            "text": "Era el director del laboratorio de Los Álamos."
          },
          {
            "key": "C",
            "text": "Era el ministro de ciencia del presidente Roosevelt y se encargaba de la financiación de las universidades."
          },
          {
            "key": "D",
            "text": "Era el líder militar a cargo de las operaciones defensivas y del confinamiento del uranio."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "B",
        "feedback": "Oppenheimer no dirigía todo el Proyecto Manhattan, sino el laboratorio específico de Los Álamos. El proyecto global estuvo bajo el mando general del coronel (luego general) Leslie Groves e involucraba plantas gigantescas como Oak Ridge (80.000 empleados) y Hanford (50.000 empleados).",
        "scored": true
      },
      {
        "number": 2,
        "prompt": "¿Cómo se originó el concepto y la denominación de \"fisión nuclear\" tras los experimentos de Otto Hahn en Berlín?",
        "options": [
          {
            "key": "A",
            "text": "Fue desarrollado por Enrico Fermi en Roma al disparar neutrones contra proyectiles de plomo."
          },
          {
            "key": "B",
            "text": "Fue acuñado por Otto Frisch y Lise Meitner tras deducir en la nieve que el núcleo de uranio se partía en dos, inspirándose Frisch en la fisión binaria de las bacterias."
          },
          {
            "key": "C",
            "text": "Fue propuesto por Niels Bohr al observar el comportamiento del helio en una cámara de niebla."
          },
          {
            "key": "D",
            "text": "Fue acuñado por Albert Einstein en su famosa carta dirigida al presidente Roosevelt."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "B",
        "feedback": "Lise Meitner y su sobrino Otto Frisch interpretaron los resultados de Hahn durante un paseo por la nieve en Suecia. Frisch, tras conversar con un amigo biólogo sobre la división bacteriana, bautizó el fenómeno como \"fisión nuclear\".",
        "scored": true
      },
      {
        "number": 3,
        "prompt": "Según la explicación sobre las propiedades de los isótopos del uranio, ¿por qué el célebre físico Niels Bohr consideraba inicialmente que era imposible construir una bomba atómica?",
        "options": [
          {
            "key": "A",
            "text": "Porque creía que el uranio-235 no existía de forma natural en la Tierra."
          },
          {
            "key": "B",
            "text": "Porque el uranio-238 abarca más del 99% del uranio natural y actúa absorbiendo neutrones, requiriendo una separación física del escaso uranio-235 (<1%) que se consideraba inviable a gran escala."
          },
          {
            "key": "C",
            "text": "Porque la cantidad de calor liberada derretiría el cañón del arma antes de la detonación."
          },
          {
            "key": "D",
            "text": "Porque sostenía que los neutrones no podían acelerarse dentro de un campo magnético."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "B",
        "feedback": "Bohr demostró que el U-238 “captura” neutrones y apaga la reacción en cadena. Como ambos isótopos tienen propiedades químicas idénticas, separar el fisionable U-235 parecía un desafío técnico insuperable a menos que todo el país se transformase en una fábrica.",
        "scored": true
      },
      {
        "number": 4,
        "prompt": "¿Qué cálculo crucial realizado en Inglaterra por los físicos emigrados Otto Frisch y Rudolf Peierls cambió radicalmente las perspectivas sobre la viabilidad de la bomba atómica?",
        "options": [
          {
            "key": "A",
            "text": "Demostraron que la reacción en cadena requería un acelerador de partículas del tamaño de una ciudad."
          },
          {
            "key": "B",
            "text": "Calcularon que la masa crítica necesaria de uranio-235 puro para desencadenar la explosión era de solo unos 5 kilogramos, una cantidad manejable y transportable en avión."
          },
          {
            "key": "C",
            "text": "Probaron que el agua pesada podía detener la radiación de forma instantánea."
          },
          {
            "key": "D",
            "text": "Descubrieron que el plutonio podía extraerse directamente de minerales de carbón."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "B",
        "feedback": "El cálculo de Frisch y Peierls demostró que no se necesitaban toneladas de material, sino apenas unos 5 kg de U-235 para alcanzar la masa crítica, haciendo de la bomba una posibilidad bélica real.",
        "scored": true
      },
      {
        "number": 5,
        "prompt": "Durante el desarrollo del Proyecto Manhattan existían tres técnicas posibles para enriquecer uranio (ciclotrón, difusión por barreras y difusión térmica). ¿Qué decisión ejecutiva tomó el general Leslie Groves ante la incertidumbre sobre cuál funcionaría?",
        "options": [
          {
            "key": "A",
            "text": "Descartó las tres opciones y se enfocó únicamente en la energía solar."
          },
          {
            "key": "B",
            "text": "Decidió financiar e implementar las tres técnicas en paralelo de forma masiva, argumentando que sobraba dinero pero faltaba tiempo."
          },
          {
            "key": "C",
            "text": "Sometió la elección a votación entre todos los estudiantes de la Universidad de Harvard."
          },
          {
            "key": "D",
            "text": "Financió únicamente la opción más económica para no comprometer el presupuesto militar."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "B",
        "feedback": "Groves asumió un riesgo industrial gigantesco construyendo instalaciones masivas para las tres tecnologías a la vez. Su convicción era que el tiempo era el único recurso verdaderamente escaso frente a la amenaza de la guerra.",
        "scored": true
      },
      {
        "number": 6,
        "prompt": "¿Cuál fue el descubrimiento del químico Glenn Seaborg respecto al plutonio-239 y por qué representaba una alternativa estratégica frente al uranio-235?",
        "options": [
          {
            "key": "A",
            "text": "Descubrió que el plutonio no es radiactivo y se puede manipular sin protección."
          },
          {
            "key": "B",
            "text": "Identificó que surge cuando el U-238 absorbe neutrones en un reactor y que, al ser un elemento diferente, se puede separar del uranio por métodos químicos en lugar de métodos físicos."
          },
          {
            "key": "C",
            "text": "Probó que el plutonio abunda en la superficie de la Luna."
          },
          {
            "key": "D",
            "text": "Demostró que el plutonio sustituye al combustible fósil sin emitir calor."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "B",
        "feedback": "Al ser un elemento químico distinto (elemento 94 que no existe en la naturaleza), el plutonio-239 se puede aislar mediante reacciones químicas, lo cual resultaba técnicamente más viable a escala industrial que separar isótopos del mismo elemento.",
        "scored": true
      },
      {
        "number": 7,
        "prompt": "¿Por qué el mecanismo de detonación tipo \"pistola\" (utilizado en la bomba de uranio Little Boy) resultaba totalmente inoperante para la bomba de plutonio (Fat Man)?",
        "options": [
          {
            "key": "A",
            "text": "Porque el plutonio es un líquido viscoso que no se puede moldear en balas."
          },
          {
            "key": "B",
            "text": "Porque el plutonio es extremadamente fisionable y sensible, por lo que la velocidad de una pistola provocaba una pre-detonación que desarmaba la masa antes de completar la explosión."
          },
          {
            "key": "C",
            "text": "Porque el cañón de la pistola resultaba demasiado pesado para los aviones de la época."
          },
          {
            "key": "D",
            "text": "Porque el plutonio se apaga automáticamente en presencia de nitrógeno."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "B",
        "feedback": "Gabriel detalla que el plutonio es demasiado \"piqui piqui\" (muy activo fisionablemente). Si se ensamblaba con un cañón o pistola, la reacción comenzaba antes de tiempo y la misma fuerza dispersaba el material produciendo un fiasco de baja potencia.",
        "scored": true
      },
      {
        "number": 8,
        "prompt": "¿Qué solución teórico-matemática aportó John von Neumann para lograr la compresión uniforme y simétrica en la bomba de implosión de plutonio?",
        "options": [
          {
            "key": "A",
            "text": "El diseño de bombas de hidrógeno secundarias acopladas al detonador."
          },
          {
            "key": "B",
            "text": "La creación de \"lentes explosivas\" que combinan explosivos de distintas densidades para transformar y enfocar la onda expansiva de convexa a cóncava hacia el centro."
          },
          {
            "key": "C",
            "text": "La invención del contador Geiger digital para medir la presión en tiempo real."
          },
          {
            "key": "D",
            "text": "La inclusión de escudos de plomo flotantes alrededor del núcleo de plutonio."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "B",
        "feedback": "Von Neumann aplicó principios análogos a los de la óptica. Al hacer pasar la onda de choque por materiales explosivos de diferente densidad, logró desviar y enfocar la detonación hacia el centro como si fuera una lente refractando luz.",
        "scored": true
      },
      {
        "number": 9,
        "prompt": "Tras finalizar la guerra, Vannevar Bush presentó al presidente Truman el histórico informe \"Science, the Endless Frontier\". ¿Cuál era su tesis principal sobre el rol del Estado y la ciencia en tiempos de paz?",
        "options": [
          {
            "key": "A",
            "text": "Que la investigación científica debía subordinarse en todo momento a las órdenes secretas de las Fuerzas Armadas."
          },
          {
            "key": "B",
            "text": "Que la ciencia básica es la raíz del progreso, debe ser financiada generosamente por el Estado, estar alojada en las universidades y ser dirigida de forma libre por los propios científicos."
          },
          {
            "key": "C",
            "text": "Que todas las patentes científicas debían venderse exclusivamente a corporaciones privadas."
          },
          {
            "key": "D",
            "text": "Que las universidades debían cerrar sus facultades de ciencias para concentrarse en la producción industrial."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "B",
        "feedback": "De acuerdo con lo expuesto por Gabriel, el informe de Bush sentó las bases de la política científica moderna: inversión pública sostenida en investigación básica, autonomía de los investigadores y el ámbito universitario como centro del saber.",
        "scored": true
      },
      {
        "number": 10,
        "prompt": "Al concluir la masterclass, ¿qué reflexión formula Gabriel respecto al aprendizaje organizativo del Proyecto Manhattan y los problemas del mundo contemporáneo?",
        "options": [
          {
            "key": "A",
            "text": "Que la única forma de resolver problemas sociales es mediante el uso de la fuerza militar."
          },
          {
            "key": "B",
            "text": "Que si se logró crear la bomba atómica combinando masa crítica de científicos, liderazgo motivacional, financiamiento y libertad de expresión, esa misma fórmula debería aplicarse para resolver grandes desafíos como el cambio climático, la pobreza o la educación."
          },
          {
            "key": "C",
            "text": "Que la ciencia nunca más debería involucrarse en cuestiones técnicas o de infraestructura social."
          },
          {
            "key": "D",
            "text": "Que es imposible organizar equipos multidisciplinarios sin mantener un hermetismo de censores militares."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "B",
        "feedback": "Gabriel destaca que el Proyecto Manhattan demostró que problemas de complejidad abrumadora se pueden solucionar cuando se articulan recursos, talentos, libertad intelectual y liderazgos positivos.",
        "scored": true
      },
      {
        "number": 11,
        "prompt": "Tras mirar la Masterclass \"Oppenheimer y la ciencia de la bomba\", ¿en qué medida considerás que abordar la historia de la ciencia mediante narrativas humanas, tensiones políticas y anécdotas históricas es aplicable en tus clases para enseñar conceptos complejos de física y química?",
        "options": [
          {
            "key": "A",
            "text": "Totalmente aplicable: me brinda herramientas narrativas para introducir conceptos abstractos (como isótopos, fisión o reacciones en cadena) captando el interés de los estudiantes."
          },
          {
            "key": "B",
            "text": "Muy aplicable: planeo incluir algunos de estos relatos históricos en mis clases sobre estructura atómica, radiactividad o historia de la ciencia."
          },
          {
            "key": "C",
            "text": "Parcialmente aplicable: la propuesta es muy interesante, pero la extensión del programa escolar dificulta hacer pausas para el contexto histórico."
          },
          {
            "key": "D",
            "text": "Poco aplicable: prefiero volcar la enseñanza directamente en el cálculo matemático, las fórmulas y la ejercitación técnica tradicional."
          },
          {
            "key": "E",
            "text": "Aún no sé cómo articular las dimensiones ético-históricas con los criterios institucionales de evaluación en mi nivel."
          },
          {
            "key": "F",
            "text": "No sé."
          }
        ],
        "correct": null,
        "feedback": "",
        "scored": false
      }
    ]
  },
  {
    "slug": "adn",
    "presenter": "Juan Manuel Carballeda",
    "title": "155 años no son nada: desde el descubrimiento a la manipulación del ADN",
    "questions": [
      {
        "number": 1,
        "prompt": "Según lo expuesto por Carba en la masterclass, ¿dónde realizaba sus experimentos Friedrich Miescher en 1869 y de dónde obtuvo las muestras para aislar por primera vez la \"nucleína\" (ADN)?",
        "options": [
          {
            "key": "A",
            "text": "En el laboratorio central de Berlín, utilizando cultivos puros de bacterias."
          },
          {
            "key": "B",
            "text": "En la cocina de un castillo en Tubinga, utilizando vendas con pus enviadas desde el hospital local."
          },
          {
            "key": "C",
            "text": "En un jardín botánico de París, utilizando extractos de hojas de plantas."
          },
          {
            "key": "D",
            "text": "En un laboratorio de la Universidad de Alicante, utilizando muestras de sangre purificada."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "B",
        "feedback": "Miescher trabajaba en la antigua cocina adaptada como laboratorio dentro del castillo de Tubinga. Las vendas con pus del hospital le proporcionaron una fuente homogénea de glóbulos blancos, de cuyos núcleos extrajo por primera vez la nucleína.",
        "scored": true
      },
      {
        "number": 2,
        "prompt": "¿Qué anécdota histórica utiliza Carba para ilustrar lo frecuente que es en ciencia descubrir algo fundamental sin comprender de inmediato su verdadero potencial?",
        "options": [
          {
            "key": "A",
            "text": "La invención del telescopio por Galileo Galilei y su uso inicial como juguete naval."
          },
          {
            "key": "B",
            "text": "La proyección de la primera película por los hermanos Lumière en 1895 y la frase sobre que era \"un invento sin futuro\"."
          },
          {
            "key": "C",
            "text": "La manzana de Isaac Newton y su desinterés inicial por publicar las leyes de la gravedad."
          },
          {
            "key": "D",
            "text": "La creación de la vacuna contra la viruela por Edward Jenner sin conocer la existencia de los virus."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "B",
        "feedback": "Carba compara el hallazgo del ADN con la primera proyección de cine en París en 1895. Se cuenta que los propios creadores consideraban que el cine era un invento sin futuro, demostrando lo difícil que es medir la trascendencia de un descubrimiento en el momento en que ocurre.",
        "scored": true
      },
      {
        "number": 3,
        "prompt": "En los célebres experimentos de 1952 de Martha Chase y Alfred Hershey, ¿qué electrodoméstico desempeñó un rol crucial para demostrar que la información genética reside en el ADN y no en las proteínas?",
        "options": [
          {
            "key": "A",
            "text": "Un horno microondas para desnaturalizar las proteínas virales."
          },
          {
            "key": "B",
            "text": "Una licuadora para separar las cubiertas proteicas de la superficie bacteriana sin destruir el proceso."
          },
          {
            "key": "C",
            "text": "Un congelador eléctrico para detener la agitación térmica del material genético."
          },
          {
            "key": "D",
            "text": "Una centrífuga industrial para aislar los núcleos celulares por densidad."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "B",
        "feedback": "Conocidos como los \"experimentos de la licuadora\", Chase y Hershey usaron este aparato doméstico para agitar el cultivo, separando la estructura proteica externa de los virus bacteriófagos del ADN que sí había ingresado a las bacterias.",
        "scored": true
      },
      {
        "number": 4,
        "prompt": "¿Cuál fue la contribución determinante de Rosalind Franklin en la carrera por descifrar la estructura del ADN en 1953?",
        "options": [
          {
            "key": "A",
            "text": "Diseñar el modelo de madera y metal del rompecabezas tridimensional del ADN."
          },
          {
            "key": "B",
            "text": "Lograr cristalizar la molécula de ADN y obtener la famosa imagen de difracción de rayos X (Foto 51/53)."
          },
          {
            "key": "C",
            "text": "Identificar las cuatro bases nitrogenadas (A, T, G, C) mediante espectrometría de masa."
          },
          {
            "key": "D",
            "text": "Descubrir que las mitocondrias poseen su propio material genético independiente."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "B",
        "feedback": "Rosalind Franklin logró la cristalización del ADN y la obtención de la imagen de rayos X clave (la Foto 51/53), cuya observación permitió a Watson y Crick armar el modelo tridimensional correcto.",
        "scored": true
      },
      {
        "number": 5,
        "prompt": "Según la teoría expuesta por Lynn Margulis en 1967 (“Teoría endosimbiótica”), ¿cuál es el origen de las mitocondrias dentro de las células eucariotas?",
        "options": [
          {
            "key": "A",
            "text": "Surgieron como replegamientos de la membrana nuclear para almacenar ATP."
          },
          {
            "key": "B",
            "text": "Se originaron a partir de una bacteria ancestral que fue englobada por otra celular y comenzó a especializarse en la producción de energía."
          },
          {
            "key": "C",
            "text": "Aparecieron como respuesta evolutiva a la infección por virus bacteriófagos."
          },
          {
            "key": "D",
            "text": "Se formaron por la acumulación de mutaciones en los cromosomas principales del núcleo."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "B",
        "feedback": "Margulis propuso que una célula procariota engulló a una bacteria capaz de procesar energía, estableciendo una relación de endosimbiosis permanente que dio lugar a la mitocondria.",
        "scored": true
      },
      {
        "number": 6,
        "prompt": "¿Qué peculiaridad genética de las mitocondrias resultó fundamental para el trabajo de identificación biológica llevado a cabo por las Abuelas de Plaza de Mayo?",
        "options": [
          {
            "key": "A",
            "text": "Se heredan únicamente por línea materna y permanecen muy estables entre generaciones consecutivas."
          },
          {
            "key": "B",
            "text": "Se recombinan al 50% entre ambos progenitores en cada generación."
          },
          {
            "key": "C",
            "text": "Mutan a una velocidad extrema que permite diferenciar a cada individuo sin margen de error."
          },
          {
            "key": "D",
            "text": "Contienen la totalidad de los 6.500 millones de nucleótidos del genoma humano."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "A",
        "feedback": "El ADN mitocondrial no se mezcla con el del padre; se transmite intacto de madres a hijos/as. Esta propiedad fue crucial para que abuelas maternas pudieran identificar a sus nietos apropiados durante la dictadura.",
        "scored": true
      },
      {
        "number": 7,
        "prompt": "En la charla se describe una \"revolución\" en la secuenciación del genoma. ¿Cómo ha evolucionado este proceso desde el Proyecto Genoma Humano (2001) hasta el presente?",
        "options": [
          {
            "key": "A",
            "text": "El costo se mantuvo en unos 100 millones de dólares pero el tiempo se redujo a la mitad."
          },
          {
            "key": "B",
            "text": "Se pasó de un proyecto que demandó 25 años y 100 millones de dólares a poder secuenciar un genoma en pocas horas por unos cientos de dólares."
          },
          {
            "key": "C",
            "text": "Se demostró que es imposible secuenciar más de 1.000 letras de ADN sin cometer errores graves de lectura."
          },
          {
            "key": "D",
            "text": "Las técnicas actuales requieren enviar las muestras únicamente a un laboratorio centralizado en Alemania."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "B",
        "feedback": "Carba destaca que obtener el primer borrador del genoma humano llevó de los años 70 al 2001 con un costo astronómico. Hoy, gracias a la secuenciación masiva, el procedimiento toma horas y cuesta una fracción mínima de ese valor.",
        "scored": true
      },
      {
        "number": 8,
        "prompt": "¿Qué hallazgo realizó el investigador español Francisco Mojica en 1987 al estudiar bacterias extremófilas en las Salinas de Alicante?",
        "options": [
          {
            "key": "A",
            "text": "Descubrió el primer antibiótico de origen sintético producido por arqueas."
          },
          {
            "key": "B",
            "text": "Encontró secuencias repetidas en el ADN bacteriano que formaban parte de un sistema inmune ancestral contra virus (CRISPR)."
          },
          {
            "key": "C",
            "text": "Logró clonar el primer mamífero utilizando mitocondrias aisladas."
          },
          {
            "key": "D",
            "text": "Aisló una enzima capaz de disolver plásticos en salmuera."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "B",
        "feedback": "Al estudiar microbios adaptados a la alta salinidad, Mojica notó repeticiones en su ADN que coincidían con fragmentos de virus, descubriendo las bases del sistema conocido como CRISPR.",
        "scored": true
      },
      {
        "number": 9,
        "prompt": "¿Cuál fue el avance clave desarrollado por Emmanuelle Charpentier y Jennifer Doudna a partir del sistema CRISPR de las bacterias?",
        "options": [
          {
            "key": "A",
            "text": "Demostrar que las bacterias pueden sobrevivir sin material genético nuclear."
          },
          {
            "key": "B",
            "text": "Diseñar un método para cristalizar proteínas en el espacio exterior."
          },
          {
            "key": "C",
            "text": "Convertir el mecanismo bacteriano en una herramienta sencilla y precisa para editar el ADN de cualquier organismo, incluidos seres humanos."
          },
          {
            "key": "D",
            "text": "Desarrollar un test rápido de saliva para detectar enfermedades mitocondriales."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "C",
        "feedback": "Charpentier y Doudna adaptaron la maquinaria molecular de CRISPR/Cas9 para cortar y modificar secuencias específicas de ADN en células complejas (eucariotas), revolucionando la biotecnología.",
        "scored": true
      },
      {
        "number": 10,
        "prompt": "Durante las preguntas finales, ¿qué película de ciencia ficción de finales de los noventa recomienda Carba por anticipar tanto la secuenciación genómica instantánea como los dilemas éticos de la edición genética?",
        "options": [
          {
            "key": "A",
            "text": "Oppenheimer."
          },
          {
            "key": "B",
            "text": "Gattaca."
          },
          {
            "key": "C",
            "text": "Jurassic Park."
          },
          {
            "key": "D",
            "text": "Blade Runner."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "B",
        "feedback": "Feedback si responde B — correcta Carba menciona Gattaca como una obra maestra que imaginaba una sociedad dividida según el perfil genético, anticipando tecnologías de secuenciación rápida y edición de embriones que hoy son técnicamente posibles.",
        "scored": true
      },
      {
        "number": 11,
        "prompt": "Tras presenciar la Masterclass \"155 años no son nada: desde el descubrimiento a la manipulación del ADN\", ¿en qué medida considerás que el recurso de contar la ciencia a través de relatos e historias humanas (como la licuadora o las vendas de pus) es aplicable en tus clases para despertar la curiosidad de los estudiantes?",
        "options": [
          {
            "key": "A",
            "text": "Totalmente aplicable: me brinda herramientas narrativas para introducir conceptos abstractos de biología desde la curiosidad y la anécdota."
          },
          {
            "key": "B",
            "text": "Muy aplicable: planeo incluir algunas de estas historias en mis clases sobre genética, evolución o célula."
          },
          {
            "key": "C",
            "text": "Parcialmente aplicable: la propuesta es interesante, pero los tiempos del programa escolar dificultan dedicarle espacio a las historias contextuales."
          },
          {
            "key": "D",
            "text": "Poco aplicable: prefiero centrar las clases directamente en los contenidos técnicos y esquemas conceptuales tradicionales."
          },
          {
            "key": "E",
            "text": "Aún no sé cómo articular estas historias con las exigencias de evaluación del nivel en el que trabajo."
          },
          {
            "key": "F",
            "text": "No sé."
          }
        ],
        "correct": null,
        "feedback": "",
        "scored": false
      }
    ]
  },
  {
    "slug": "medir",
    "presenter": "Teo López Puccio",
    "title": "Medir para imaginar: de los fenómenos naturales a las ideas matemáticas (y viceversa)",
    "questions": [
      {
        "number": 1,
        "prompt": "Según lo expuesto por Teo en la masterclass, ¿cuál es la relación fundamental entre los fenómenos del mundo natural y las abstracciones matemáticas?",
        "options": [
          {
            "key": "A",
            "text": "Las fórmulas matemáticas existen previamente en la naturaleza y las personas las descubren mediante la observación."
          },
          {
            "key": "B",
            "text": "Las abstracciones matemáticas deben enseñarse primero para que los estudiantes puedan interpretar los fenómenos reales."
          },
          {
            "key": "C",
            "text": "Los fenómenos naturales y la experiencia concreta suceden primero, y luego las personas inventan abstracciones para pensarlos y volver a la realidad."
          },
          {
            "key": "D",
            "text": "El pensamiento matemático se desarrolla de forma independiente de la realidad física y no requiere volver a los fenómenos concretos."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "C",
        "feedback": "Teo plantea que la trayectoria del pensamiento matemático comienza en los fenómenos naturales concretos. Primero experimentamos el mundo y luego inventamos abstracciones (como el concepto de volumen o la idea de número) para procesarlo y aplicarlo nuevamente al mundo real.",
        "scored": true
      },
      {
        "number": 2,
        "prompt": "En la primera estimación planteada (Método 1), se utiliza el peso de un puñado de 50 garbanzos (20 g) para calcular la cantidad total en un paquete de 500 g. ¿Qué limitación principal se señala respecto a este enfoque basado en el peso total?",
        "options": [
          {
            "key": "A",
            "text": "Requiere conocer o medir el peso total del contenido, lo cual resulta difícil si no se puede extraer el contenido de recipientes muy grandes."
          },
          {
            "key": "B",
            "text": "Produce un margen de error estadístico superior al 50% en comparación con el conteo directo."
          },
          {
            "key": "C",
            "text": "Solo funciona si todos los garbanzos poseen exactamente la misma masa y forma geométrica."
          },
          {
            "key": "D",
            "text": "Depende obligatoriamente del uso de aplicaciones digitales para calcular la densidad de la muestra."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "A",
        "feedback": "Aunque usar la masa es una estrategia válida, requiere acceder a la información del peso total. Si el recipiente es inamovible o muy grande (como un silo de granos), extraer o pesar todo el contenido se vuelve impracticable.",
        "scored": true
      },
      {
        "number": 3,
        "prompt": "En la estimación visual e indirecta del frasco (Método 2), ¿qué procedimiento se utiliza para calcular la cantidad total de garbanzos sin abrir el frasco para pesarlo?",
        "options": [
          {
            "key": "A",
            "text": "Se mide el diámetro del frasco con una regla y se multiplica por el peso individual de un garbanzo."
          },
          {
            "key": "B",
            "text": "Se cuentan los garbanzos visibles en la superficie lateral del recipiente y se dividen por la masa de la muestra."
          },
          {
            "key": "C",
            "text": "Se suma la cantidad de garbanzos de la base con la altura del frasco y se aplica una regla de tres simple."
          },
          {
            "key": "D",
            "text": "Se promedia el conteo de garbanzos en una “capa/disco” vista desde arriba y se multiplica por la altura medida en unidades de garbanzo."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "D",
        "feedback": "El método consistió en simular que el cilindro es una pila de discos de garbanzos: se estimó el promedio de garbanzos por capa (vista superior) y se multiplicó por la altura del frasco medida en garbanzos.",
        "scored": true
      },
      {
        "number": 4,
        "prompt": "Durante la charla, Teo relata que su madre estimó inicialmente que en el frasco había \"un millón\" de garbanzos. ¿Por qué esta anécdota permite destacar la importancia de determinar el “orden de magnitud”?",
        "options": [
          {
            "key": "A",
            "text": "Porque demuestra la necesidad de realizar cálculos estadísticos con decimales precisos."
          },
          {
            "key": "B",
            "text": "Porque ubicar la respuesta en la escala correcta de potencia de diez (entre 1.000 y 10.000 en lugar de 1.000.000) ya brinda información sumamente valiosa sobre la realidad."
          },
          {
            "key": "C",
            "text": "Porque demuestra que las mediciones intuitivas suelen ser más exactas que las estimaciones geométricas."
          },
          {
            "key": "D",
            "text": "Porque establece que sin un margen de error exacto no es posible hacer ciencia."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "B",
        "feedback": "En ciencia, enmarcar un fenómeno en el orden de magnitud adecuado (saber si son cientos, miles o millones) es un avance conceptual decisivo cuando no se dispone de un conteo exacto.",
        "scored": true
      },
      {
        "number": 5,
        "prompt": "Al reconstruir la fórmula del volumen del cilindro (Volumen = base × altura), ¿cómo se deduce la proporcionalidad de sus variables a partir del frasco de garbanzos?",
        "options": [
          {
            "key": "A",
            "text": "Explicando que el valor de π se duplica cuando la altura del recipiente aumenta al doble."
          },
          {
            "key": "B",
            "text": "Comprobando que al duplicar la altura del frasco el radio de la base circular se cuadruplica automáticamente."
          },
          {
            "key": "C",
            "text": "Razonando que al duplicar la altura manteniendo la base se duplican los garbanzos, y al duplicar el área de la base manteniendo la altura ocurre lo mismo."
          },
          {
            "key": "D",
            "text": "Memorizando el texto del tratado de los Elementos de Euclides sin recurrir a la representación concreta."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "C",
        "feedback": "La fórmula surge de observar directamente el comportamiento del objeto: si se apila el doble de altura de discos iguales, hay el doble de contenido; si la base contiene el doble de garbanzos para la misma altura, el contenido también se duplica.",
        "scored": true
      },
      {
        "number": 6,
        "prompt": "En el ejemplo sobre el trabajo de Carl Sagan relativo al Monstruo del Lago Ness, ¿cómo se aplica la abstracción matemática para analizar la veracidad del fenómeno?",
        "options": [
          {
            "key": "A",
            "text": "Se utiliza un modelo de física de partículas que relaciona velocidad, densidad, volumen y frecuencia de colisión para estimar la cantidad posible de individuos."
          },
          {
            "key": "B",
            "text": "Se mide el agua desplazada por el lago para determinar la masa exacta de los animales."
          },
          {
            "key": "C",
            "text": "Se calcula la radiación emitida por las ondas del agua aplicando la Ecuación de Drake."
          },
          {
            "key": "D",
            "text": "Se realiza un conteo directo uno a uno de los animales mediante fotografías submarinas de alta resolución."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "A",
        "feedback": "Carl Sagan adaptó ecuaciones de colisión de física de partículas (donde los avistamientos funcionan como \"choques\" entre la sonda y las entidades) para estimar que en el lago podrían existir unos 300 individuos según los datos de frecuencia registrados.",
        "scored": true
      },
      {
        "number": 7,
        "prompt": "¿Cuál era la motivación de fondo de Carl Sagan al publicar un análisis matemático sobre la existencia de animales en el Lago Ness?",
        "options": [
          {
            "key": "A",
            "text": "Promocionar el uso de equipos de sonar en la industria pesquera europea."
          },
          {
            "key": "B",
            "text": "Demostrar la existencia biológica de seres mitológicos antiguos."
          },
          {
            "key": "C",
            "text": "Impugnar las leyes del movimiento formuladas por Isaac Newton."
          },
          {
            "key": "D",
            "text": "Desarrollar y evaluar métodos con pocos datos indirectos para aplicarlos a la búsqueda de vida en otros planetas (astrobiología)."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "D",
        "feedback": "A Sagan le interesaba la exploración espacial. Si una sonda enviada a otro planeta (como Marte) registra señales periódicas escasas, estas herramientas matemáticas permiten estimar la presencia o abundancia de organismos con datos muy limitados.",
        "scored": true
      },
      {
        "number": 8,
        "prompt": "¿Qué principio matemático en común comparten la Ecuación de Drake y la estimación de garbanzos en el frasco?",
        "options": [
          {
            "key": "A",
            "text": "Ambas exigen conocer con precisión el peso en gramos de los elementos analizados."
          },
          {
            "key": "B",
            "text": "Ambas aplican una secuencia de multiplicaciones (y filtrados de factores) para acotar una cantidad desconocida a partir de datos estimables."
          },
          {
            "key": "C",
            "text": "Ambas requieren calcular obligatoriamente el área de un círculo mediante la constante π."
          },
          {
            "key": "D",
            "text": "Ambas se basan en el conteo exhaustivo y directo uno a uno de todos los componentes."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "B",
        "feedback": "Tanto el cálculo de garbanzos (base × altura) como la Ecuación de Drake se estructuran como multiplicaciones sucesivas que van refinando o filtrando factores para aproximar un número total que no se puede contar directamente.",
        "scored": true
      },
      {
        "number": 9,
        "prompt": "Al reflexionar sobre la enseñanza en el aula, Teo recurre a la analogía \"aprendemos a hablar antes de aprender a escribir\". ¿Qué implicancia didáctica se desprende de esta afirmación?",
        "options": [
          {
            "key": "A",
            "text": "Que las fórmulas algebraicas deben memorizarse y ejercitarse antes de abordar problemas prácticos."
          },
          {
            "key": "B",
            "text": "Que la matemática no puede enseñarse en niveles iniciales debido a la falta de lenguaje formal."
          },
          {
            "key": "C",
            "text": "Que conviene promover la exploración y el razonamiento sobre situaciones concretas antes de introducir la formalización simbólica."
          },
          {
            "key": "D",
            "text": "Que el uso de material concreto debe reemplazarse progresivamente por la memorización de definiciones."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "C",
        "feedback": "Primero surge la necesidad, el razonamiento y la intuición sobre el fenómeno concreto; la formalización con símbolos, reglas y fórmulas abstractas viene después para sistematizar lo comprendido.",
        "scored": true
      },
      {
        "number": 10,
        "prompt": "En el intercambio final de la masterclass se destaca una función clave del docente para la enseñanza de las ciencias naturales y la matemática. ¿Cuál es?",
        "options": [
          {
            "key": "A",
            "text": "Diseñar situaciones de enseñanza donde pensar y hacerse preguntas sobre la realidad resulte inevitable."
          },
          {
            "key": "B",
            "text": "Exponer las fórmulas de manera directa al inicio de la clase para evitar errores conceptuales en los alumnos."
          },
          {
            "key": "C",
            "text": "Limitar las actividades escolares al método de conteo exacto y comprobación rigurosa."
          },
          {
            "key": "D",
            "text": "Evitar el uso de analogías o ejemplos cotidianos para mantener el rigor técnico formal."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "A",
        "feedback": "Como se menciona en el encuentro, el pensamiento es un acto del estudiante, pero el rol pedagógico fundamental es generar escenarios e interrogantes concretos donde reflexionar sea un paso natural e ineludible.",
        "scored": true
      },
      {
        "number": 11,
        "prompt": "Tras haber presenciado la Masterclass \"Medir para imaginar\", ¿en qué medida considerás que la propuesta de reconstruir conceptos y fórmulas a partir de problemas o fenómenos concretos es aplicable a tu práctica docente cotidiana?",
        "options": [
          {
            "key": "A",
            "text": "Totalmente aplicable: me aporta ideas concretas para transformar la manera en que introduzco las fórmulas y conceptos en el aula."
          },
          {
            "key": "B",
            "text": "Muy aplicable: planeo adaptar algunas estrategias de estimación e indagación a mis planificaciones actuales."
          },
          {
            "key": "C",
            "text": "Parcialmente aplicable: encuentro valioso el enfoque, pero requeriría adaptaciones complejas según el nivel o diseño curricular en el que trabajo."
          },
          {
            "key": "D",
            "text": "Poco aplicable: la dinámica de mis clases o los tiempos curriculares me dificultan postergar la presentación formal de los contenidos."
          },
          {
            "key": "E",
            "text": "Aún no estoy seguro/a de cómo llevarlo a la práctica."
          },
          {
            "key": "F",
            "text": "No sé."
          }
        ],
        "correct": null,
        "feedback": "",
        "scored": false
      }
    ]
  },
  {
    "slug": "biodiversidad",
    "presenter": "Nadia Cerino",
    "title": "De las profundidades del mar al aula: una inmersión en la biodiversidad submarina",
    "questions": [
      {
        "number": 1,
        "prompt": "Durante la expedición presentada por Nadia, ¿qué función cumplía principalmente el ROV (vehículo operado remotamente)?",
        "options": [
          {
            "key": "A",
            "text": "Transportar a los investigadores hasta el fondo del mar para que pudieran tomar muestras directamente."
          },
          {
            "key": "B",
            "text": "Explorar y observar el fondo marino en vivo, además de permitir recolectar organismos, agua y sedimentos mediante distintas herramientas."
          },
          {
            "key": "C",
            "text": "Permanecer en la superficie y registrar las condiciones meteorológicas durante la expedición."
          },
          {
            "key": "D",
            "text": "Capturar únicamente imágenes de los organismos para utilizarlas posteriormente en el laboratorio."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "B",
        "feedback": "El ROV permitió observar el fondo marino en tiempo real y recolectar diferentes tipos de muestras mediante cámaras, luces y herramientas específicas. Su utilización modificó profundamente la forma de realizar las campañas respecto de expediciones anteriores.",
        "scored": true
      },
      {
        "number": 2,
        "prompt": "Una de las características que permitió reconocer a los organismos del grupo de los cnidarios durante la masterclass fue:",
        "options": [
          {
            "key": "A",
            "text": "La presencia de un esqueleto externo duro y articulado."
          },
          {
            "key": "B",
            "text": "La presencia de cinco brazos organizados alrededor de un centro."
          },
          {
            "key": "C",
            "text": "La presencia de cnidocitos, células especializadas que pueden liberar una estructura urticante."
          },
          {
            "key": "D",
            "text": "La presencia de una concha formada por carbonato de calcio."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "C",
        "feedback": "Los cnidarios se caracterizan por poseer cnidocitos, células especializadas que intervienen en la captura de presas y en la defensa. Nadia presentó dentro de este grupo a medusas, anémonas y corales.",
        "scored": true
      },
      {
        "number": 3,
        "prompt": "Nadia explicó que las hidromedusas pueden diferenciarse de las “medusas verdaderas”. ¿Cuál de las siguientes características permite reconocer a las hidromedusas según lo explicado en la masterclass?",
        "options": [
          {
            "key": "A",
            "text": "Son pequeñas y sus tentáculos se disponen alrededor del borde de la estructura semejante a una campana."
          },
          {
            "key": "B",
            "text": "Son las medusas de mayor tamaño y poseen tentáculos muy largos que salen del centro."
          },
          {
            "key": "C",
            "text": "No pertenecen al grupo de los cnidarios."
          },
          {
            "key": "D",
            "text": "Se caracterizan por vivir exclusivamente adheridas al fondo marino."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "A",
        "feedback": "Nadia utilizó características de la forma y disposición de los tentáculos para diferenciar los tipos de medusas. Las hidromedusas que presentó eran pequeñas y tenían los tentáculos alrededor del borde de la estructura semejante a una campana.",
        "scored": true
      },
      {
        "number": 4,
        "prompt": "¿Cuál de las siguientes afirmaciones describe mejor la diferencia entre un coral duro y un coral blando, según lo explicado por Nadia?",
        "options": [
          {
            "key": "A",
            "text": "Los corales duros son animales y los corales blandos son algas."
          },
          {
            "key": "B",
            "text": "Los corales duros forman un esqueleto de carbonato de calcio, mientras que los corales blandos forman principalmente una masa de tejido."
          },
          {
            "key": "C",
            "text": "Los corales duros viven en profundidad y los blandos solamente en aguas superficiales."
          },
          {
            "key": "D",
            "text": "Los corales blandos tienen seis tentáculos y los duros ocho."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "B",
        "feedback": "Nadia explicó que los corales duros producen un esqueleto que se mantiene como una estructura rígida, mientras que los corales blandos forman principalmente tejido y pueden presentar estructuras internas que les dan cierta rigidez.",
        "scored": true
      },
      {
        "number": 5,
        "prompt": "Durante la masterclass se explicó que los pulpos pertenecen al grupo de los moluscos. ¿Cuál de las siguientes afirmaciones permite comprender esta clasificación?",
        "options": [
          {
            "key": "A",
            "text": "Los pulpos conservan una concha externa visible que permite identificarlos como moluscos."
          },
          {
            "key": "B",
            "text": "Los pulpos pertenecen a los moluscos porque poseen un cuerpo organizado a partir de estructuras características del grupo, aunque en ellos la concha se haya perdido."
          },
          {
            "key": "C",
            "text": "Los pulpos son cnidarios porque tienen tentáculos alrededor de la boca."
          },
          {
            "key": "D",
            "text": "Los pulpos son crustáceos porque viven exclusivamente en ambientes marinos."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "B",
        "feedback": "Los pulpos pertenecen a los moluscos aunque en ellos la concha se haya perdido. Nadia mostró que, en los pulpos, el manto contiene los órganos y que la concha característica del grupo se perdió completamente.",
        "scored": true
      },
      {
        "number": 6,
        "prompt": "¿Cuál de las siguientes combinaciones reúne características propias de los equinodermos presentadas en la masterclass?",
        "options": [
          {
            "key": "A",
            "text": "Simetría pentarradial y sistema vascular acuífero."
          },
          {
            "key": "B",
            "text": "Simetría bilateral y exoesqueleto articulado."
          },
          {
            "key": "C",
            "text": "Concha externa y rádula."
          },
          {
            "key": "D",
            "text": "Cnidocitos y formas pólipo y medusa."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "A",
        "feedback": "Nadia destacó dos características de los equinodermos: la simetría pentarradial y la presencia de un sistema vascular acuífero. Este sistema interviene, entre otras funciones, en el movimiento mediante los pies ambulacrales.",
        "scored": true
      },
      {
        "number": 7,
        "prompt": "Nadia mostró que las características de los organismos pueden variar en relación con el ambiente en el que viven. ¿Cuál de los siguientes ejemplos presentó para las estrellas de mar?",
        "options": [
          {
            "key": "A",
            "text": "Las estrellas que viven sobre sustratos blandos tienen estructuras que evitan que sus órganos respiratorios se llenen de arena."
          },
          {
            "key": "B",
            "text": "Las estrellas que viven sobre sustratos blandos pierden el sistema vascular acuífero."
          },
          {
            "key": "C",
            "text": "Las estrellas de sustratos duros carecen de pies ambulacrales."
          },
          {
            "key": "D",
            "text": "Todas las estrellas tienen exactamente las mismas estructuras, independientemente del sustrato."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "A",
        "feedback": "Las diferencias que Nadia presentó no implican perder el sistema vascular acuífero ni los pies ambulacrales. Por el contrario, mostró cómo algunas estructuras se modifican según el tipo de sustrato. En ambientes arenosos, determinadas estructuras protegen las zonas respiratorias de la arena.",
        "scored": true
      },
      {
        "number": 8,
        "prompt": "¿Por qué la acidificación del océano puede afectar especialmente a organismos que poseen estructuras formadas por carbonato de calcio?",
        "options": [
          {
            "key": "A",
            "text": "Porque el aumento de dióxido de carbono en el agua modifica las condiciones químicas del océano y puede afectar la formación y el mantenimiento de esas estructuras."
          },
          {
            "key": "B",
            "text": "Porque el dióxido de carbono elimina directamente todos los organismos que viven en el fondo del mar."
          },
          {
            "key": "C",
            "text": "Porque la acidificación hace que el océano pierda completamente su salinidad."
          },
          {
            "key": "D",
            "text": "Porque el aumento de dióxido de carbono impide que los organismos puedan reproducirse durante toda su vida."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "A",
        "feedback": "Nadia explicó que el aumento de dióxido de carbono en el océano modifica químicamente el agua y que esto puede afectar a organismos que utilizan carbonato de calcio para formar sus estructuras, como los caracoles y los cangrejos.",
        "scored": true
      },
      {
        "number": 9,
        "prompt": "¿Cuál de las siguientes secuencias describe mejor el proceso de eutrofización explicado por Nadia?",
        "options": [
          {
            "key": "A",
            "text": "Ingreso de basura orgánica → aumento de nutrientes → proliferación excesiva de algas → disminución del oxígeno en el agua → condiciones anóxicas."
          },
          {
            "key": "B",
            "text": "Ingreso de plásticos → aumento de oxígeno → desaparición de algas → aumento de biodiversidad."
          },
          {
            "key": "C",
            "text": "Aumento de temperatura → formación de carbonato de calcio → proliferación de corales → disminución de nutrientes."
          },
          {
            "key": "D",
            "text": "Ingreso de basura orgánica → disminución de nutrientes → desaparición de algas → aumento del oxígeno."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "A",
        "feedback": "La eutrofización puede producirse cuando ingresa una cantidad excesiva de materia orgánica al agua. Su descomposición aporta nutrientes que favorecen una proliferación excesiva de algas. Cuando estas cubren la superficie y se descomponen, disminuye el oxígeno disponible y pueden generarse condiciones anóxicas.",
        "scored": true
      },
      {
        "number": 10,
        "prompt": "¿Qué relación estableció Nadia entre el calentamiento del océano y el blanqueamiento de los corales de arrecife?",
        "options": [
          {
            "key": "A",
            "text": "El aumento de temperatura hace que los corales produzcan más pigmentos y por eso se vuelvan blancos."
          },
          {
            "key": "B",
            "text": "El aumento de temperatura puede provocar la pérdida de las algas que viven asociadas a los corales; al perderlas, los corales quedan blancos y más vulnerables."
          },
          {
            "key": "C",
            "text": "El calentamiento transforma directamente el carbonato de calcio del coral en una sustancia blanca."
          },
          {
            "key": "D",
            "text": "El blanqueamiento ocurre exclusivamente en los corales de aguas profundas porque allí no hay luz."
          },
          {
            "key": "E",
            "text": "No sé."
          }
        ],
        "correct": "B",
        "feedback": "Nadia explicó que los corales de arrecife viven asociados a algas que les aportan color y alimento. Cuando aumenta la temperatura del agua, esas algas pueden salir del coral y morir. Al perderlas, el coral queda blanco y más vulnerable.",
        "scored": true
      },
      {
        "number": 11,
        "prompt": "Una de las ideas que atraviesa la masterclass es que “no se puede cuidar lo que no se conoce”. Después de ver la charla, ¿qué tan de acuerdo estás con esta afirmación?",
        "options": [
          {
            "key": "A",
            "text": "Totalmente de acuerdo."
          },
          {
            "key": "B",
            "text": "De acuerdo."
          },
          {
            "key": "C",
            "text": "Ni de acuerdo ni en desacuerdo."
          },
          {
            "key": "D",
            "text": "En desacuerdo."
          },
          {
            "key": "E",
            "text": "Totalmente en desacuerdo."
          },
          {
            "key": "F",
            "text": "No sé."
          }
        ],
        "correct": null,
        "feedback": "",
        "scored": false
      }
    ]
  }
];
