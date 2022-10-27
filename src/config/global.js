export default {
  global: {
    componenteFormativo:
      'Recuperación de datos y registro en unidades de información digital',
    descripcionCurso:
      'Este componente aborda aspectos clave de la recuperación de datos, en tanto técnicas y procedimientos para el acceso a información y extracción de esta, almacenada en distintos medios o formatos digitales. Con el estudio de este componente, el aprendiz podrá asimilar y gestionar factores determinantes que facilitan o impiden la consulta y lectura del medio digital.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Medición y análisis de información digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Datos y criterios de modificación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Estructura de datos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Recursos digitales en diferentes formatos',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Normativa',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Tratamiento técnico de datos',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Esquema de clasificación Dewey (para obras en general)',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo:
              'Esquema de clasificación local (para obras en soportes electrónicos)',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Número Cutter',
            hash: 't_1_8',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Informes de datos digitales',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Medición y análisis de información digital',
      referencia:
        'Biblioteca Nacional de Colombia. (s. f.). Acceso al bibliotecario. Biblioteca Nacional.',
      tipo: 'Página web',
      link:
        'https://bibliotecanacional.gov.co/es-co/servicios/en-la-rnbp/acceso-al-bibliotecario',
    },
    {
      tema: 'Normativa',
      referencia:
        'Blog de la Biblioteca de la Universidad Politécnica. (2009). Normas, procedimientos y políticas de la biblioteca. [Web log post]. Bibliopoli.',
      tipo: 'Blog',
      link:
        'https://bibliopoli.wordpress.com/normas-procedimientos-y-politicas-de-la-biblioteca/',
    },
  ],
  glosario: [
    {
      termino: 'Abstracto',
      significado: 'resumen de un libro o artículo.',
    },
    {
      termino: 'Aprobado por expertos',
      significado:
        'este término se aplica exclusivamente a las revistas profesionales o académicas (<em>journals</em>) que aplica artículos previamente revisados por expertos en la materia.',
    },
    {
      termino: 'Artículo',
      significado: 'pieza publicada en un periódico o revista.',
    },
    {
      termino: 'Base de datos',
      significado:
        'lista de fichas bibliográficas archivadas electrónicamente que se puede navegar y manipular. En muchos casos las bases de datos incluyen el texto completo de las obras. Las bibliotecas de ACC ofrecen más de 100 bases de datos con artículos de revistas, periódicos, y en algunos casos materiales de consulta y libros.',
    },
    {
      termino: 'Bibliografía',
      significado:
        'lista de obras sobre un tema o utilizados en una investigación.',
    },
    {
      termino: 'Biografía',
      significado: 'obra que narra la vida de una persona.',
    },
    {
      termino: 'Catálogo de la biblioteca',
      significado:
        'lista completa de todos los materiales (libros, revistas, videos, etc.) que tiene una biblioteca. Cada libro tiene récord bibliográfico en la lista. La Información se ingresa a graves de formatos electrónicos para la consulta o navegación en línea.',
    },
    {
      termino: 'Diccionario de sinónimos',
      significado:
        'diccionario que agrupa palabras de significado igual o similar.',
    },
    {
      termino: 'Escritorio de referencia',
      significado:
        'escritorio o estación donde el/la bibliotecario/ referente te ayuda a encontrar el libro o la información que buscas.',
    },
    {
      termino: 'Ficha bibliográfica',
      significado:
        'cúmulo de datos que describen una obra. Siempre incluye título, autor y fecha entre otras cosas. Existen numerosos formatos. La más usada es la norma APA (American Psychological Association). Para aprender a hacer fichas bibliográficas en estos formatos.',
    },
    {
      termino: 'Sistema decimal Dewey',
      significado:
        'sistema de organización y clasificación bibliográfica que se usa en las bibliotecas públicas (fue creado por Melvil Dewey).',
    },
  ],
  referencias: [
    {
      referencia:
        'Blog de la Biblioteca de la Universidad Politécnica. (2009). Normas, procedimientos y políticas de la biblioteca. [Web log post]. Bibliopoli.',
      link:
        'https://bibliopoli.wordpress.com/normas-procedimientos-y-politicas-de-la-biblioteca/',
    },
    {
      referencia:
        'Dewey, M. (2017). Sistema de clasificación decimal Dewey. Rojas Eberhard Editores.',
    },
    {
      referencia:
        'Ministerio de Cultura. (s. f.). Biblioteca en red. Biblioteca Nacional.',
      link: 'https://bibliotecanacional.gov.co/es-co/bibliotecas-en-red',
    },
    {
      referencia:
        'Rodríguez, G. (2013). Descarte de material bibliográfico y guía para organizar espacios y recursos. Panamericana.',
    },
    {
      referencia:
        'Tramullas, J. (s. f.). Análisis preliminar de bibliotecas digitales en las universidades españolas.',
      link: 'https://core.ac.uk/download/pdf/290472455.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Justino Rojas Cabrera',
        cargo: 'Experto temático',
        centro:
          'Regional Huila - Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador Instruccional',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora Metodológica',
        centro: 'Regional Distrito Capital- Centro de Diseño y Metrología',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital- Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Fabian Zarate',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Miguel Guerrero Gutiérrez',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Maria Eugenia Mejia Lopez',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
