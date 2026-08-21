/* EDITABLE: bloques posteriores a la evaluación. Mantener las claves si se cambia el texto. */
window.OPINION_CONTENT = {
  demographics: [
    { key:"edad", title:"¿Cuál es tu edad?", options:["Menos de 25 años","25 a 34 años","35 a 44 años","45 a 54 años","55 años o más"] },
    { key:"genero", title:"¿Con qué género te identificás?", options:["Femenino","Masculino","No binario / Otro","Prefiero no decirlo"] },
    { key:"pais", title:"¿En qué país vivís?", options:["Argentina","Bolivia","Brasil","Chile","Colombia","Ecuador","México","Panamá","Paraguay","Perú","Uruguay","Venezuela","España","Otro"] },
    { key:"formacion", title:"¿Cuál es tu formación?", options:["Maestro/a","Profesor/a","Estudiante de profesorado o de carrera científica","Licenciado/a, científico/a o profesional afín","No soy docente","Otra"] },
    { key:"disciplina", title:"¿Cuál es tu principal área o disciplina?", options:["Ciencias naturales (Biología, Física, Química, Ciencias de la Tierra)","Ciencias sociales","Lengua","Matemáticas","Otras","No ejerzo"] },
    { key:"anios_docencia", title:"¿Cuántos años de experiencia docente tenés?", options:["Menos de 2 años","Entre 2 y 5 años","Entre 6 y 10 años","Entre 11 y 20 años","Más de 20 años","Nunca ejercí","Ya estoy jubilada/o"] },
    { key:"nivel_educativo", title:"¿En qué niveles educativos trabajás o trabajaste?", multiple:true, exclusive:["Nunca ejercí","Ya estoy jubilada/o"], options:["Nivel Inicial","Nivel Primario","Nivel Secundario","Nivel Superior / Terciario / Universidad","Nunca ejercí","Ya estoy jubilada/o"] },
    { key:"sector", title:"¿En qué sector ejercés principalmente?", options:["Exclusivamente gestión pública","Exclusivamente gestión privada","En ambos sectores","No ejerzo"] },
    { key:"conocia_fenomenautas", title:"Antes de este material, ¿conocías Fenomenautas?", options:["No, es la primera vez que conozco la propuesta Fenomenautas.","Sí, la conocía de nombre, pero nunca había utilizado sus materiales.","Sí, la conozco y he utilizado alguno de sus materiales o propuestas.","Sí, la conozco y utilizo frecuentemente sus materiales o propuestas."] }
  ],
  likert: [
    {key:"likert_claridad", title:"Claridad. Las explicaciones teóricas y los conceptos abordados fueron claros y fáciles de seguir."},
    {key:"likert_viabilidad", title:"Viabilidad. Los experimentos o actividades propuestas son viables para llevar a cabo en mi contexto escolar (materiales, espacio, etc.)."},
    {key:"likert_innovacion", title:"Innovación. La propuesta me aportó ideas nuevas o diferentes a las que suelo usar en mis clases."},
    {key:"likert_duracion", title:"Duración. La duración y el ritmo del video fueron adecuados."},
    {key:"likert_recomendacion", title:"Recomendación. Le recomendaría este material a otros colegas docentes."}
  ],
  projection: [
    {key:"proy_usar", title:"¿Pensás incorporar esta propuesta en tus clases?", options:["Sí, definitivamente lo voy a incorporar a corto plazo.","Sí, es probable que lo sume más adelante en el ciclo lectivo.","Tal vez, tendría que analizar más detalladamente cómo adaptarlo a mi aula.","No creo, no se ajusta a las necesidades actuales de mis cursos."]},
    {key:"proy_valor", title:"¿Qué aspecto de la propuesta te resultó más valioso?", options:["La claridad de las explicaciones","La posibilidad de llevarla al aula","La originalidad de la propuesta","La relación entre teoría y práctica","Los recursos y materiales sugeridos","Otro"]},
    {key:"proy_desafios", title:"¿Qué desafíos encontrás para implementarla?", multiple:true, options:["Falta de tiempo","Falta de materiales o recursos","Cantidad de estudiantes","Adecuación al nivel educativo","Articulación con la planificación curricular","Necesidad de mayor capacitación","No encuentro dificultades"]},
    {key:"proy_enfoque", title:"¿Qué enfoque te gustaría encontrar en próximos materiales?", options:["Más propuestas experimentales","Más desarrollo conceptual","Más recursos listos para usar en el aula","Más ejemplos de implementación docente","Más articulación con contenidos curriculares","Otro"]}
  ],
  comment: {key:"comentario", title:"¿Querés dejarnos algún comentario, sugerencia o experiencia que quieras compartir?", placeholder:"Escribí tu respuesta (opcional)"}
};
