export default {
  global: {
    Name: 'Administración de personal, manuales y procedimientos',
    Description:
      'Este componente desarrolla los fundamentos de la administración del personal, los procedimientos técnicos y las actividades propias de la seguridad privada. Aborda la gestión del talento humano, la estandarización de procesos, la capacitación y la planificación operativa para fortalecer la calidad del servicio. Su aplicación favorece el cumplimiento normativo, la eficiencia, la trazabilidad y la mejora continua de las operaciones.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Administración de personal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Administración del personal en seguridad privada',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Departamento de recursos humanos en seguridad privada',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Tipos de directrices en la administración de personal en seguridad privada',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Tipos de inducción en la administración del personal en seguridad privada',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Métodos de entrenamiento en seguridad privada',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Procedimiento técnico en seguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Definición de procedimiento técnico',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos de procedimientos técnicos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Características de los procedimientos técnicos en la seguridad privada',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Actividades en la seguridad privada',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Características de las actividades',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Aplicación práctica en seguridad privada',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Supervisión en seguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Situaciones prácticas aplicadas al sector de vigilancia y seguridad privada',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Complemento de funciones y perspectiva estratégica',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Manuales de funciones en seguridad privada',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Tipos de manuales de funciones',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Elementos que componen el manual de funciones',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Aplicación en seguridad privada',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Manuales de procesos y procedimientos',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Diagramas de flujo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Estructura de un diagrama de flujo',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Diagramas de flujo en la administración del servicio',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Elaboración de un diagrama de flujo',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Recomendaciones para la elaboración de diagramas de flujo',
            hash: 't_6_4',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Trabajo en equipo y liderazgo en la seguridad privada',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Trabajo en equipo',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Liderazgo en la supervisión',
            hash: 't_7_2',
          },
        ],
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'Administración de personal',
      significado:
        'proceso de planificar, organizar, dirigir y controlar las actividades relacionadas con la gestión del talento humano para alcanzar los objetivos de la organización.',
    },
    {
      termino: 'Capacitación',
      significado:
        'proceso de formación orientado a fortalecer los conocimientos, habilidades y competencias necesarias para desempeñar un cargo de manera eficiente.',
    },
    {
      termino: 'Directriz',
      significado:
        'lineamiento o política que orienta las decisiones, conductas y procedimientos dentro de una organización.',
    },
    {
      termino: 'Inducción',
      significado:
        'proceso mediante el cual el nuevo colaborador conoce la organización, sus funciones, normas y procedimientos antes de asumir sus responsabilidades.',
    },
    {
      termino: 'Manual de funciones',
      significado:
        'documento que establece el objetivo, las responsabilidades, competencias y requisitos de cada cargo dentro de la organización.',
    },
    {
      termino: 'Procedimiento técnico',
      significado:
        'secuencia documentada y estandarizada de actividades que permite ejecutar una tarea de forma segura, eficiente y controlada.',
    },
    {
      termino: 'Supervisión',
      significado:
        'proceso de seguimiento, control y evaluación de las actividades del personal para verificar el cumplimiento de los procedimientos y estándares establecidos.',
    },
    {
      termino: 'Diagrama de flujo',
      significado:
        'representación gráfica de un proceso mediante símbolos estandarizados que muestran la secuencia de actividades y decisiones.',
    },
    {
      termino: 'Trabajo en equipo',
      significado:
        'forma de organización en la que varias personas coordinan esfuerzos, comparten responsabilidades y colaboran para alcanzar objetivos comunes.',
    },
    {
      termino: 'Liderazgo',
      significado:
        'capacidad para orientar, motivar y coordinar a un grupo de personas con el fin de lograr los objetivos organizacionales de manera eficaz.',
    },
  ],
  referencias: [
    {
      referencia:
        'Chiavenato, I. (2008). Gestión del talento humano. McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Decreto Ley 356 de 1994. Por el cual se expide el Estatuto de Vigilancia y Seguridad Privada.',
      link: '',
    },
    {
      referencia:
        'Dessler, G., & Varela, R. (2011). Administración de recursos humanos. Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Ley 1920 de 2018. Por medio de la cual se dictan disposiciones relacionadas con la vigilancia y la seguridad privada en Colombia.',
      link: '',
    },
    {
      referencia: 'MacMillan. (s. f.). El departamento de recursos humanos.',
      link: '',
    },
    {
      referencia:
        'Ordoñez. (2025). ¿Qué es la administración de personal? Una guía completa.',
      link: '',
    },
    {
      referencia:
        'Superintendencia de Vigilancia y Seguridad Privada. (2013). Manual de doctrina de la Supervigilancia.',
      link: '',
    },
    {
      referencia:
        'Superintendencia de Vigilancia y Seguridad Privada. (2014). Protocolo de operación para el servicio de vigilancia y seguridad privada prestados en el sector residencial.',
      link: '',
    },
    {
      referencia:
        'Superintendencia de Vigilancia y Seguridad Privada. (2021). Manual de supervisión e interventoría.',
      link: '',
    },
    {
      referencia:
        'Superintendencia de Vigilancia y Seguridad Privada. (s. f.). Protocolo de operación para el servicio de vigilancia y seguridad privada – Vigilancia electrónica.',
      link: '',
    },
    {
      referencia:
        'Universidad Industrial de Santander. (2020). Manual de seguridad y vigilancia.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06 - Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Joinner Enrique Osorio Martínez',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cielo Damaris Angulo Rodríguez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
