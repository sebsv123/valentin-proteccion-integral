export type FAQItem = { q: string; a: string };

export type Product = {
  slug: string;
  name: string;
  label: string;
  eyebrow: string;
  heroTitle: string;
  heroCopy: string;
  heroImage: string;
  heroAlt: string;
  cardImage: string;
  cardAlt: string;
  summary: string;
  highlights: string[];
  benefits: string[];
  whatIncludes: string[];
  whatVaries: string[];
  whatReview: string[];
  cases: string[];
  faqs: FAQItem[];
  disclaimer: string;
  related: string[];
  whatsappMessage: string;
  customAdvisor?: {
    name: string;
    photo: string;
    phone: string;
    phoneHref: string;
    whatsappNumber: string;
  };
};

export type ProductSubpage = {
  parent: string;
  slug: string;
  name: string;
  label: string;
  eyebrow: string;
  title: string;
  summary: string;
  heroImage: string;
  heroAlt: string;
  bullets: string[];
  faqs: FAQItem[];
  whatsappMessage: string;
};

export const site = {
  name: 'Valentín Protección Integral',
  shortName: 'VPI',
  title: 'Valentín Protección Integral | Asesora de Seguros en Madrid',
  description:
    'Asesoramiento personalizado en SALUD, VIDA, MASCOTAS, VIAJE, DENTAL, ACCIDENTES, ELECTRODOMÉSTICOS, PROTECCIÓN JURÍDICA y NEGOCIOS en Madrid y Boadilla del Monte. Más de 10 años ayudando a familias a elegir con claridad.',
  phone: '+34 603 448 765',
  phoneHref: '+34603448765',
  domain: process.env.NEXT_PUBLIC_SITE_URL || 'https://valentinproteccionintegral.com',
  whatsappNumber: '34603448765',
  instagram: 'https://www.instagram.com/segurosrosavalentin/',
  heroTagline: 'Protegemos lo que más importa.',
  brandLine: 'Más de 10 años protegiendo tu tranquilidad',
  brandSubline: 'Una orientación clara antes de contratar',
  advisorName: 'Rosa Valentín',
};

export const buildWhatsAppHref = (message: string) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const products: Product[] = [
  {
    slug: 'salud',
    name: 'Seguro de salud',
    label: 'SALUD',
    eyebrow: 'SALUD',
    heroTitle: 'Te ayudamos a encontrar un seguro de SALUD que encaje contigo y con la forma en la que realmente quieres usarlo',
    heroCopy:
      'No todas las opciones funcionan igual. Hay modalidades equilibradas, otras para mayores de 55, para extranjeros o con libre elección de médico y reembolso. La clave está en comparar con contexto.',
    heroImage: '/images/products/health-medical-care.png',
    heroAlt: 'Consulta médica profesional y cercana',
    cardImage: '/images/products/health-medical-care.png',
    cardAlt: 'Asistencia médica de calidad',
    summary:
      'Medicina general, especialidades, urgencias, pruebas y hospitalización. Modalidades específicas para familias, seniors, extranjeros o con libre elección mediante reembolso.',
    highlights: [
      'Los seguros de salud básicos suelen centrarse en diagnóstico y especialistas sin hospitalización. Si buscas algo más completo, conviene mirar opciones que incluyan ingreso y cirugía.',
      'Contamos con soluciones específicas para perfiles senior, extranjeros con repatriación para visados y modalidades de reembolso para libre elección mundial.',
      'Hay opciones pensadas para un uso más básico y otras para quienes priorizan más amplitud, más libertad o un encaje familiar concreto.',
    ],
    benefits: [
      'Te ayudamos a comparar sin centrarlo todo en el precio.',
      'Separamos con claridad copago, hospitalización, reembolso y nivel de cobertura.',
      'Acompañamiento real antes y después de contratar.',
    ],
    whatIncludes: [
      'Acceso a medicina general y especialidades.',
      'Urgencias y pruebas diagnósticas, según modalidad.',
      'Posibilidad de hospitalización en opciones más completas.',
      'Coberturas adicionales como reembolso o asistencia internacional en determinados productos.',
    ],
    whatVaries: [
      'El copago.',
      'La hospitalización.',
      'El reembolso.',
      'La libertad de elección fuera del cuadro médico.',
      'El alcance fuera de España.',
    ],
    whatReview: [
      'Si la modalidad incluye hospitalización o no.',
      'Si hay copago y cómo funciona.',
      'Si buscas red médica cerrada o reembolso.',
      'Si necesitas cobertura internacional o solo uso en España.',
    ],
    cases: ['COMPLETA', 'FAMILIAS', 'AUTÓNOMOS', 'SENIOR', 'REEMBOLSO', 'CON COPAGO', 'SIN COPAGO'],
    faqs: [
      {
        q: '¿Todos los seguros de SALUD incluyen hospitalización?',
        a: 'No. Las modalidades básicas se centran en medicina ambulatoria (especialistas y pruebas). Si quieres cobertura de ingreso y cirugía, debes optar por modalidades completas.',
      },
      {
        q: '¿Qué diferencia hay entre copago y reembolso?',
        a: 'El copago es un importe bajo que pagas por uso dentro del cuadro médico. El reembolso te permite ir a cualquier médico del mundo y recuperar luego el 80-90% de la factura.',
      },
    ],
    disclaimer:
      'Coberturas, copagos, hospitalización, reembolso y alcance territorial sujetos a modalidad y documentación contractual.',
    related: ['vida', 'dental', 'accidentes'],
    whatsappMessage:
      'Hola, quiero orientación sobre SALUD y entender qué modalidad me encaja mejor.',
  },
  {
    slug: 'vida',
    name: 'Seguro de vida',
    label: 'VIDA',
    eyebrow: 'VIDA',
    heroTitle: 'Un seguro de VIDA no sirve solo para dejar un capital: te ayudo a proteger a tu familia y tu hipoteca con total seguridad',
    heroCopy:
      'Hola, soy Sebastián. Me especializo en encontrar la solución de VIDA que realmente responda a tu necesidad, ya sea protección familiar o asegurar tu hipoteca. El objetivo es tu tranquilidad absoluta.',
    heroImage: '/images/agent/sebastian.jpg',
    heroAlt: 'Sebastián, asesor especialista en seguros de vida',
    cardImage: '/images/agent/sebastian.jpg',
    cardAlt: 'Asesoría en seguros de vida',
    summary:
      'Protección económica, apoyo a tu familia y modalidades distintas según quieras cubrir una necesidad familiar, una deuda o una situación concreta.',
    highlights: [
      'Asesoramiento directo con Sebastián para una protección real.',
      'Diferenciamos claramente entre protección familiar y seguros vinculados a hipoteca.',
      'Analizamos tu caso para que el capital contratado sea el que de verdad necesitas.',
    ],
    benefits: [
      'Contacto directo y personal con Sebastián.',
      'Claridad total en coberturas de fallecimiento e incapacidad.',
      'Gestión ágil y sin complicaciones burocráticas.',
    ],
    whatIncludes: [
      'Cobertura principal por fallecimiento.',
      'Posibilidad de añadir incapacidad en algunas modalidades.',
      'Opciones orientadas a hipoteca o deuda.',
      'Soluciones con enfoque más específico según el riesgo cubierto.',
    ],
    whatVaries: [
      'La incapacidad.',
      'El tipo de capital.',
      'La relación con hipoteca o deuda.',
      'La cobertura por accidente frente a cualquier causa.',
    ],
    whatReview: [
      'Qué riesgo principal quieres proteger.',
      'Si necesitas cobertura ligada a hipoteca.',
      'Si quieres incapacidad incluida.',
      'Si la modalidad cubre cualquier causa o solo accidente en ciertos supuestos.',
    ],
    cases: ['FAMILIAS', 'HIPOTECA', 'PROTECCIÓN ECONÓMICA'],
    faqs: [
      {
        q: '¿Hablaré con Sebastián directamente?',
        a: 'Sí, Sebastián gestiona personalmente todas las consultas de seguros de vida para ofrecerte un trato cercano y experto.',
      },
      {
        q: '¿Cómo contacto con Sebastián?',
        a: 'Puedes llamarle o escribirle por WhatsApp al +34 689 791 380 para cualquier duda sobre tu póliza de vida.',
      },
      {
        q: '¿Un seguro de ACCIDENTES es lo mismo que uno de VIDA?',
        a: 'No exactamente. Hay productos que comparten ciertos fines, pero el riesgo cubierto puede ser distinto y conviene no tratarlos como equivalentes.',
      },
    ],
    disclaimer:
      'Capital, incapacidad, duración y alcance de la cobertura sujetos a modalidad y condiciones de contratación gestionadas por Sebastián.',
    related: ['salud', 'accidentes', 'decesos'],
    whatsappMessage:
      'Hola Sebastián, quiero orientación sobre el seguro de VIDA para mi familia o mi hipoteca.',
    customAdvisor: {
      name: 'Sebastián',
      photo: '/images/agent/sebastian.jpg',
      phone: '+34 689 791 380',
      phoneHref: '+34689791380',
      whatsappNumber: '34689791380',
    },
  },
  {
    slug: 'mascotas',
    name: 'Seguro para mascotas',
    label: 'MASCOTAS',
    eyebrow: 'MASCOTAS',
    heroTitle: 'El seguro para MASCOTAS puede ayudarte tanto con la parte veterinaria del día a día como con la protección frente a daños a terceros',
    heroCopy:
      'No todas las opciones parten del mismo enfoque. Algunas están más centradas en asistencia veterinaria y otras en responsabilidad civil. Además, según modalidad, también puede ampliarse la protección con opcionales como robo, fallecimiento accidental o determinados gastos asociados.',
    heroImage: '/images/premium/happy-pets.png',
    heroAlt: 'Perro y gato descansando juntos en un hogar seguro',
    cardImage: '/images/premium/happy-pets.png',
    cardAlt: 'Mascotas protegidas',
    summary:
      'Asistencia veterinaria, responsabilidad civil y coberturas opcionales con una lectura más clara para saber qué estás comparando de verdad.',
    highlights: [
      'Veterinaria y responsabilidad civil no siempre vienen igual.',
      'En algunas modalidades la RC es principal y en otras es opcional o complementaria.',
      'El valor del producto no está solo en la parte veterinaria: conviene mirar también límites, responsabilidad civil y opcionales que de verdad te resulten útiles.',
    ],
    benefits: [
      'Ideal para quien quiere entender mejor antes de contratar.',
      'Ayuda para priorizar veterinaria, RC o ambos.',
      'Explicación clara de límites, extras y servicios asociados.',
    ],
    whatIncludes: [
      'Asistencia veterinaria o acceso a servicios veterinarios, según modalidad.',
      'Responsabilidad civil en algunas opciones.',
      'Servicios complementarios útiles.',
      'Posibilidad de ampliar con coberturas opcionales y servicios asociados.',
    ],
    whatVaries: [
      'Si la RC es principal u opcional.',
      'El tipo de asistencia veterinaria.',
      'Los límites económicos.',
      'Las coberturas extra.',
      'El encaje con necesidades legales concretas.',
    ],
    whatReview: [
      'Si tu prioridad es veterinaria o RC.',
      'Qué capital de RC necesitas.',
      'Qué coberturas opcionales te interesan.',
      'Qué servicios adicionales aporta realmente la modalidad.',
    ],
    cases: ['PERROS', 'GATOS', 'ASISTENCIA VETERINARIA', 'RESPONSABILIDAD CIVIL'],
    faqs: [
      {
        q: '¿Incluye asistencia veterinaria?',
        a: 'Depende de la modalidad. En unas es principal y en otras es complementaria. Conviene revisar qué papel ocupa dentro del producto.',
      },
      {
        q: '¿Incluye responsabilidad civil?',
        a: 'Puede ser principal u opcional según producto. No siempre viene con el mismo peso ni con los mismos límites.',
      },
    ],
    disclaimer:
      'Asistencia veterinaria, responsabilidad civil, opcionales y límites económicos sujetos a modalidad y condiciones de la póliza.',
    related: ['salud', 'accidentes', 'viaje'],
    whatsappMessage:
      'Hola, quiero orientación sobre MASCOTAS y saber qué modalidad me encaja mejor.',
  },
  {
    slug: 'dental',
    name: 'Seguro dental',
    label: 'DENTAL',
    eyebrow: 'DENTAL',
    heroTitle: 'El seguro DENTAL puede ayudarte a acceder a una atención bucodental más cómoda y previsible',
    heroCopy:
      'Según la modalidad, puede dar acceso a distintas especialidades, a determinados actos incluidos sin franquicia y a mejores condiciones frente a tarifas particulares, con opciones pensadas también para familias y empresas.',
    heroImage: '/images/products/dental-hero.png',
    heroAlt: 'Consulta dental profesional con atención cercana',
    cardImage: '/images/products/dental-hero.png',
    cardAlt: 'Cuidado dental premium',
    summary:
      'Una forma más clara de valorar revisiones, urgencias, especialidades y actos incluidos sin reducirlo todo a una limpieza o una revisión puntual.',
    highlights: [
      'El seguro DENTAL puede ir mucho más allá de revisiones y urgencias. Según la modalidad, puede dar acceso a distintas especialidades, a determinados actos incluidos sin franquicia y a mejores condiciones frente a tarifas particulares.',
      'También existen opciones pensadas para familias y para empresas.',
      'Conviene distinguir entre lo que va incluido, lo que lleva descuento y lo que depende de la modalidad o de la contratación.',
    ],
    benefits: [
      'Más claridad al separar actos incluidos, descuentos y tarifas.',
      'Explicación sencilla de lo básico y lo diferencial.',
      'Atención cercana para resolver dudas individuales, familiares o de empresa antes de contratar.',
    ],
    whatIncludes: [
      'Acceso a varias especialidades dentales.',
      'Determinados actos incluidos sin franquicia, según documentación.',
      'Descuentos frente a tarifas particulares.',
      'Opciones orientadas a contratación individual, familiar o para pymes.',
    ],
    whatVaries: [
      'El listado de actos incluidos.',
      'Las tarifas de tratamientos.',
      'El tipo de contratación: individual, familiar o pymes.',
      'Las condiciones especiales para niños o colectivos.',
    ],
    whatReview: [
      'Qué actos están incluidos y cuáles no.',
      'Qué tratamientos llevan descuento o precio especial.',
      'Si necesitas una modalidad individual, familiar o para pymes.',
      'Si hay condiciones particulares para menores.',
    ],
    cases: ['FAMILIAS', 'PARTICULARES', 'PYMES'],
    faqs: [
      {
        q: '¿Todos los tratamientos están incluidos?',
        a: 'No. Hay actos incluidos y otros que pueden tener tarifa o descuento según modalidad y documentación.',
      },
      {
        q: '¿Hay servicios sin franquicia?',
        a: 'Sí, determinados actos pueden estar incluidos sin franquicia. Conviene revisar cuáles y en qué condiciones.',
      },
    ],
    disclaimer:
      'Actos incluidos, tratamientos, descuentos y condiciones para familias o empresas sujetos a modalidad y documentación del producto.',
    related: ['salud', 'vida', 'accidentes'],
    whatsappMessage: 'Hola, quiero orientación sobre DENTAL.',
  },
  {
    slug: 'accidentes',
    name: 'Seguro de accidentes',
    label: 'ACCIDENTES',
    eyebrow: 'ACCIDENTES',
    heroTitle: 'Un seguro de ACCIDENTES puede ayudarte a protegerte frente a imprevistos que alteran tu estabilidad económica',
    heroCopy:
      'La clave está en saber si buscas una protección básica o una solución más amplia. Al no requerir examen médico, es una forma rápida y efectiva de protegerte a ti y a tu negocio.',
    heroImage: '/images/products/accidentes-hero.png',
    heroAlt: 'Apoyo profesional tras un accidente — protección y recuperación',
    cardImage: '/images/products/accidentes-hero.png',
    cardAlt: 'Protección ante accidentes',
    summary:
      'Indemnización, invalidez y hospitalización por causa accidental, sin necesidad de cuestionarios de salud complejos.',
    highlights: [
      'No requiere examen médico ni cuestionario de salud detallado.',
      'Protección 24/7 tanto en la vida privada como profesional.',
      'Indemnizaciones por fallecimiento o invalidez permanente absoluta.',
    ],
    benefits: [
      'Ideal para autónomos que no pueden permitirse parar.',
      'Contratación ágil e inmediata.',
      'Complemento perfecto para cubrir la incapacidad parcial.',
    ],
    whatIncludes: [
      'Indemnización por fallecimiento accidental.',
      'Capital por invalidez permanente (total o parcial).',
      'Anticipo de gastos de sepelio y sucesiones.',
    ],
    whatVaries: [
      'El capital asegurado.',
      'La inclusión de indemnización diaria por hospitalización.',
      'La cobertura específica para convenios colectivos.',
    ],
    whatReview: [
      'Si buscas protección individual o para tus empleados.',
      'Si el riesgo es solo laboral o también en tu vida privada.',
      'Qué capital es suficiente para compensar una incapacidad.',
    ],
    cases: ['PARTICULARES', 'AUTÓNOMOS', 'PYMES', 'SIN EXAMEN MÉDICO'],
    faqs: [
      {
        q: '¿Es lo mismo un seguro de ACCIDENTES que uno de VIDA?',
        a: 'No. El de vida cubre fallecimiento por cualquier causa (enfermedad o accidente), mientras que el de accidentes se centra exclusivamente en causas accidentales, lo que permite contratarlo sin cuestionarios médicos.',
      },
      {
        q: '¿Qué cubre para autónomos y pymes?',
        a: 'Es una protección 24/7 que ayuda a cumplir con los convenios colectivos y protege la estabilidad económica del negocio ante una incapacidad del titular o empleado.',
      },
    ],
    disclaimer:
      'Capitales, invalidez, indemnización diaria y coberturas para autónomos sujetos a modalidad y condiciones del producto.',
    related: ['vida', 'salud', 'negocio'],
    whatsappMessage: 'Hola, quiero orientación sobre ACCIDENTES para mí o para mi negocio.',
  },
  {
    slug: 'electrodomesticos',
    name: 'Seguro de electrodomésticos',
    label: 'ELECTRODOMÉSTICOS',
    eyebrow: 'HOGAR · TECNOLOGÍA',
    heroTitle: 'Protege el corazón tecnológico de tu hogar frente a averías que la garantía oficial no siempre cubre',
    heroCopy:
      'Una protección pensada para alargar la vida de tus electrodomésticos (frigorífico, lavadora, TV, etc.) cubriendo piezas, mano de obra y desplazamiento en caso de avería mecánica.',
    heroImage: '/images/products/electrodomesticos.png',
    heroAlt: 'Cocina moderna con electrodomésticos protegidos',
    cardImage: '/images/products/electrodomesticos.png',
    cardAlt: 'Reparación de electrodomésticos del hogar',
    summary:
      'Reparación de averías mecánicas en línea blanca y marrón para aparatos de menos de 12 años, con un funcionamiento ágil y profesional.',
    highlights: [
      'Cubre averías mecánicas y eléctricas fuera de la garantía del fabricante.',
      'Incluye desplazamiento, mano de obra y piezas originales.',
      'Válido para aparatos de hasta 12 años de antigüedad.',
    ],
    benefits: [
      'Tranquilidad ante facturas de reparación inesperadas.',
      'Acceso directo a técnicos profesionales.',
      'Sustitución o indemnización si el aparato no tiene arreglo.',
    ],
    whatIncludes: [
      'Reparación de frigoríficos, lavadoras y lavavajillas.',
      'Asistencia para televisores, hornos y placas de cocina.',
      'Desplazamiento y mano de obra sin costes extra.',
    ],
    whatVaries: [
      'El número de intervenciones anuales.',
      'El límite máximo por reparación.',
      'La edad máxima admitida del aparato.',
    ],
    whatReview: [
      'Si cubre piezas y mano de obra al 100%.',
      'El periodo de carencia (suele ser de 30 días).',
      'Qué aparatos específicos de tu hogar entran en cobertura.',
    ],
    cases: ['LÍNEA BLANCA', 'LÍNEA MARRÓN', 'MANTENIMIENTO'],
    faqs: [
      {
        q: '¿Qué aparatos puedo asegurar?',
        a: 'Principalmente línea blanca (frigoríficos, lavadoras, hornos) y línea marrón (TVs). Deben tener menos de 12 años y estar en buen estado.',
      },
      {
        q: '¿Cubre la garantía oficial de la marca?',
        a: 'Es un complemento que entra en juego cuando la garantía oficial termina o para situaciones que el fabricante no cubre.',
      },
    ],
    disclaimer:
      'Cobertura, límites y requisitos de antigüedad sujetos a las condiciones de la póliza.',
    related: ['mascotas', 'salud', 'accidentes'],
    whatsappMessage: 'Hola, quiero proteger mis ELECTRODOMÉSTICOS de averías.',
  },
  {
    slug: 'proteccion-juridica',
    name: 'Protección jurídica',
    label: 'PROTECCIÓN JURÍDICA',
    eyebrow: 'DEFENSA LEGAL',
    heroTitle: 'Contar con un abogado a tu lado para defender tus derechos no debería ser un lujo',
    heroCopy:
      'Asesoramiento jurídico y defensa legal en conflictos de consumo, vivienda, trabajo o familia. Acceso telefónico 24h y cobertura de gastos judiciales.',
    heroImage: '/images/products/proteccion-juridica.png',
    heroAlt: 'Consulta legal profesional y cercana',
    cardImage: '/images/products/proteccion-juridica.png',
    cardAlt: 'Protección jurídica',
    summary:
      'Defensa de tus intereses legales, reclamación de daños y asesoramiento telefónico ilimitado con especialistas.',
    highlights: [
      'Asesoramiento jurídico telefónico 24/7.',
      'Defensa en conflictos de consumo y vivienda.',
      'Reclamación de daños y perjuicios a terceros.',
    ],
    benefits: [
      'Resuelve dudas legales antes de que se conviertan en problemas.',
      'Ahorra en honorarios de abogados y gastos judiciales.',
      'Tranquilidad ante conflictos laborales o familiares.',
    ],
    whatIncludes: [
      'Defensa penal y civil.',
      'Reclamaciones a suministros y servicios.',
      'Asesoramiento en trámites de extranjería o sucesiones.',
    ],
    whatVaries: [
      'El capital máximo para gastos judiciales.',
      'La inclusión de defensa en temas familiares (divorcio, etc.).',
      'Los periodos de carencia según el tipo de conflicto.',
    ],
    whatReview: [
      'Si incluye defensa en internet e identidad digital.',
      'El alcance de la defensa laboral.',
      'Los límites geográficos de la cobertura.',
    ],
    cases: ['PARTICULARES', 'CONSUMO', 'LABORAL', 'FAMILIA'],
    faqs: [
      {
        q: '¿Puedo llamar cualquier día para una duda legal?',
        a: 'Sí, la mayoría de modalidades incluyen asesoramiento telefónico ilimitado para resolver consultas rápidas.',
      },
      {
        q: '¿Cubre los gastos de ir a juicio?',
        a: 'Sí, hasta el límite de capital contratatado, el seguro cubre los honorarios de abogados, procuradores y costas.',
      },
    ],
    disclaimer:
      'Capitales de defensa y ámbitos de actuación sujetos a la modalidad contratada.',
    related: ['vida', 'accidentes', 'negocio'],
    whatsappMessage: 'Hola, necesito asesoramiento sobre PROTECCIÓN JURÍDICA.',
  },
  {
    slug: 'negocio',
    name: 'Seguro para negocios',
    label: 'NEGOCIOS',
    eyebrow: 'PYMES · AUTÓNOMOS',
    heroTitle: 'Protege tu local, tu stock y tu actividad profesional frente a imprevistos que puedan parar tu negocio',
    heroCopy:
      'Seguro multirriesgo para locales, oficinas y comercios. Protección total frente a robos, daños por agua, incendio y responsabilidad civil profesional.',
    heroImage: '/images/products/negocio.png',
    heroAlt: 'Local comercial moderno y protegido',
    cardImage: '/images/products/negocio.png',
    cardAlt: 'Seguro para negocios y pymes',
    summary:
      'Cobertura integral para el continente y contenido de tu negocio, incluyendo la protección frente a reclamaciones de terceros.',
    highlights: [
      'Protección frente a robo, incendio y daños eléctricos.',
      'Responsabilidad civil ante clientes y empleados.',
      'Cobertura de pérdida de beneficios por cese de actividad.',
    ],
    benefits: [
      'Asegura la continuidad de tu negocio tras un siniestro.',
      'Adapta las coberturas según tu sector (retail, oficina, servicios).',
      'Cumple con los requisitos legales y contractuales de tu local.',
    ],
    whatIncludes: [
      'Rotura de cristales y rótulos.',
      'Daños por agua y filtraciones.',
      'Responsabilidad Civil de explotación y patronal.',
    ],
    whatVaries: [
      'El capital asegurado de existencias y mobiliario.',
      'La cobertura de transporte de mercancías.',
      'Los límites de RC según la actividad profesional.',
    ],
    whatReview: [
      'Si cubre la defensa jurídica del negocio.',
      'Si necesitas cobertura para equipos electrónicos especializados.',
      'Las exclusiones específicas según tu tipo de local.',
    ],
    cases: ['COMERCIOS', 'OFICINAS', 'AUTÓNOMOS', 'TALLERES'],
    faqs: [
      {
        q: '¿Cubre si tengo que cerrar unos días por un siniestro?',
        a: 'Sí, muchas modalidades incluyen una indemnización por pérdida de beneficios para que el cierre temporal no arruine tu economía.',
      },
      {
        q: '¿Es obligatorio si el local es de alquiler?',
        a: 'Suele ser requisito del contrato de arrendamiento para cubrir los daños al continente y la responsabilidad civil.',
      },
    ],
    disclaimer:
      'Capitales asegurados y límites de RC sujetos a la actividad y condiciones de contratación.',
    related: ['accidentes', 'proteccion-juridica', 'salud'],
    whatsappMessage: 'Hola, quiero proteger mi NEGOCIO con un seguro a medida.',
  },
  {
    slug: 'decesos',
    name: 'Seguro de decesos',
    label: 'DECESOS',
    eyebrow: 'DECESOS',
    heroTitle: 'El seguro de DECESOS puede ayudarte a dejar resueltas muchas gestiones y servicios importantes en un momento delicado',
    heroCopy:
      'No se trata solo del servicio funerario. Según contratación, puede incluir traslados, gestiones y servicios complementarios que ayudan a reducir carga para la familia en un momento delicado.',
    heroImage: '/images/products/decesos-hero.png',
    heroAlt: 'Acompañamiento familiar con dignidad y apoyo',
    cardImage: '/images/products/decesos-hero.png',
    cardAlt: 'Acompañamiento y previsión familiar',
    summary:
      'Una explicación más clara y humana de un ramo donde importa sentirse acompañado y entender qué gestiones y servicios pueden quedar resueltos.',
    highlights: [
      'No conviene reducir DECESOS solo al momento funerario.',
      'Según contratación, este tipo de seguro puede incluir traslados, gestiones y servicios complementarios que alivian más carga a la familia.',
      'Conviene revisar qué parte del servicio está incluida y qué puede depender de añadidos o modalidades distintas.',
    ],
    benefits: [
      'Tono humano y explicaciones serenas.',
      'Ayuda para entender qué cubre de verdad.',
      'Acompañamiento desde la comparación hasta la decisión.',
    ],
    whatIncludes: [
      'Servicios funerarios principales.',
      'Gestiones administrativas básicas.',
      'Posibles traslados nacionales e internacionales.',
      'Servicios complementarios según contratación.',
    ],
    whatVaries: [
      'El alcance del servicio.',
      'Los traslados.',
      'Las coberturas legales o adicionales.',
      'Los servicios extra incorporados.',
    ],
    whatReview: [
      'Qué gestiones están incluidas.',
      'Si incorpora traslados.',
      'Si incluye servicios legales o adicionales.',
      'Qué parte del servicio depende de contratación extra.',
    ],
    cases: ['FAMILIAS', 'PREVISIÓN', 'TRANQUILIDAD'],
    faqs: [
      {
        q: '¿Solo cubre el servicio funerario?',
        a: 'No necesariamente. Puede incluir gestiones, traslados y otros apoyos según contratación. Conviene revisar el alcance real con calma.',
      },
      {
        q: '¿Incluye traslados?',
        a: 'Puede incluirlos, incluso a nivel nacional o internacional según producto. No siempre viene igual y es un punto importante para comparar.',
      },
    ],
    disclaimer:
      'Servicio funerario, traslados, gestiones y coberturas complementarias sujetos a modalidad y contratación.',
    related: ['vida', 'salud', 'accidentes'],
    whatsappMessage: 'Hola, quiero orientación sobre DECESOS.',
  },
  {
    slug: 'viaje',
    name: 'Seguro de viaje',
    label: 'VIAJE',
    eyebrow: 'VIAJE',
    heroTitle: 'No todos los seguros de VIAJE están pensados para lo mismo: elegir bien depende del destino, la duración y el tipo de desplazamiento',
    heroCopy:
      'Hay opciones para viajes puntuales, estudios, escapadas frecuentes o necesidades más específicas. La anulación, el límite médico y el alcance de ciertas coberturas no siempre son iguales entre modalidades.',
    heroImage: '/images/products/viaje-hero.png',
    heroAlt: 'Viajero explorando con tranquilidad y cobertura de seguro',
    cardImage: '/images/products/viaje-hero.png',
    cardAlt: 'Viaje seguro',
    summary:
      'Asistencia médica, anulación, equipaje y modalidades distintas según el tipo de viaje, con una explicación más útil y menos genérica.',
    highlights: [
      'Elegir bien un seguro de VIAJE depende del destino, la duración y el tipo de desplazamiento.',
      'Algunas modalidades ponen más foco en asistencia médica, otras en anulación y otras en viajes recurrentes o situaciones concretas como estudios.',
      'El límite médico y el alcance de ciertas coberturas no siempre son iguales entre modalidades, por lo que conviene revisar qué tipo de viaje quieres proteger.',
    ],
    benefits: [
      'Más claridad al diferenciar límites y destinos.',
      'Buena lectura de anulación cuando proceda.',
      'Ayuda para elegir según uso real del viaje.',
    ],
    whatIncludes: [
      'Asistencia médica en viaje.',
      'Apoyo ante incidencias durante el desplazamiento.',
      'Coberturas de equipaje o interrupción, según modalidad.',
      'Opciones para viajes puntuales o frecuentes.',
    ],
    whatVaries: [
      'La anulación.',
      'El límite médico.',
      'El ámbito territorial.',
      'La duración cubierta.',
      'El tipo de viaje admitido.',
    ],
    whatReview: [
      'Si es viaje puntual o frecuente.',
      'Si necesitas anulación.',
      'Qué límite médico buscas.',
      'Si tu destino o motivo del viaje requiere una modalidad específica.',
    ],
    cases: ['ESCAPADAS', 'ESTUDIOS', 'MULTIVIAJE'],
    faqs: [
      {
        q: '¿Todos los seguros de VIAJE incluyen anulación?',
        a: 'No. Depende de la modalidad. Conviene revisar este punto si para ti es importante antes de reservar o salir.',
      },
      {
        q: '¿Todos tienen el mismo límite médico?',
        a: 'No. Puede variar bastante según modalidad, destino y tipo de viaje. Conviene revisar este punto antes de elegir.',
      },
    ],
    disclaimer:
      'Asistencia médica, anulación, equipaje, duración y ámbito territorial sujetos a modalidad y documentación contractual.',
    related: ['salud', 'accidentes', 'mascotas'],
    whatsappMessage: 'Hola, quiero orientación sobre VIAJE para elegir bien según mi destino y duración.',
  },
];

export const subpages: ProductSubpage[] = [
  { parent: 'salud', slug: 'completa', name: 'Salud completa', label: 'COMPLETA', eyebrow: 'SALUD · COMPLETA', title: 'La modalidad más robusta: cobertura médica integral sin restricciones', summary: 'Hospitalización, cirugía, especialistas, urgencias y pruebas avanzadas con acceso directo al cuadro médico completo. La opción más fuerte para quien no quiere renunciar a nada.', heroImage: '/images/products/health-medical-care.png', heroAlt: 'Atención médica integral y completa', bullets: ['Hospitalización y cirugía incluidas sin limitaciones de la modalidad básica.', 'Acceso directo a todos los especialistas del cuadro médico, sin derivaciones innecesarias.', 'Urgencias 24h, pruebas diagnósticas avanzadas (resonancia, TAC, analíticas) y segunda opinión médica.', 'Cobertura de asistencia en viaje y traslado sanitario en las principales opciones del mercado.', 'Posibilidad de incluir coberturas adicionales como salud mental, fisioterapia y medicina preventiva.'], faqs: [{ q: '¿Qué diferencia hay entre la modalidad básica y la completa?', a: 'La modalidad básica se centra en consultas, especialistas y pruebas ambulatorias. La completa añade hospitalización, cirugía, urgencias 24h y un cuadro médico más amplio. Es la diferencia más importante al elegir.' }, { q: '¿Tiene periodo de carencia?', a: 'Sí, como la mayoría de seguros de salud. Los periodos varían según la cobertura: urgencias suelen ser inmediatas, mientras que hospitalización y cirugía pueden tener entre 3 y 6 meses de carencia según aseguradora.' }, { q: '¿Puedo añadir dental o reembolso a la modalidad completa?', a: 'Sí. Muchas aseguradoras permiten complementar la modalidad completa con un módulo dental o con la opción de reembolso para libre elección de médico.' }], whatsappMessage: 'Hola, quiero orientación sobre la modalidad COMPLETA de SALUD.' },
  { parent: 'salud', slug: 'familias', name: 'Salud para familias', label: 'FAMILIAS', eyebrow: 'SALUD · FAMILIAS', title: 'SALUD para familias con una comparación más útil y menos fría', summary: 'Pediatría, urgencias, hospitalización y equilibrio entre prima y uso ordenados para decidir mejor.', heroImage: '/images/premium/hero-family.png', heroAlt: 'Familia caminando junta', bullets: ['Orientación sobre copago y sin copago según frecuencia de uso.', 'Especial atención a coberturas familiares y atención pediátrica según modalidad.', 'Ayuda para comparar sin perderte en términos técnicos.'], faqs: [{ q: '¿Compensa una modalidad con copago para una familia?', a: 'Depende del uso previsto y del equilibrio que busquéis entre prima y utilización. Lo revisamos con un criterio práctico.' }, { q: '¿Conviene mirar solo el precio?', a: 'No. En SALUD familiar suelen importar mucho las urgencias, la hospitalización y la flexibilidad del producto.' }], whatsappMessage: 'Hola, quiero orientación sobre SALUD para FAMILIAS.' },
  { parent: 'salud', slug: 'senior', name: 'Salud senior', label: 'SENIOR', eyebrow: 'SALUD · SENIOR', title: 'SALUD para mayores de 55 con asesor médico personal', summary: 'Una opción pensada para quienes buscan tranquilidad, con un médico que te guía y sin sorpresas en el precio.', heroImage: '/images/products/salud-senior.png', heroAlt: 'Pareja senior disfrutando con plenitud', bullets: ['Acceso a un asesor médico personal que gestiona tus citas y dudas.', 'Cobertura completa incluyendo hospitalización y cirugía.', 'Asistencia en viaje mundial hasta 12.000€.'], faqs: [{ q: '¿Hay límite de edad para contratar?', a: 'Está diseñado para personas de entre 55 y 84 años.' }, { q: '¿Qué es el asesor médico personal?', a: 'Es un especialista que te orienta sobre qué médico visitar y te ayuda a sacar el máximo partido a tu seguro.' }], whatsappMessage: 'Hola, quiero orientación sobre SALUD para mayores (Senior).' },
  { parent: 'salud', slug: 'extranjeros', name: 'Salud para extranjeros', label: 'EXTRANJEROS', eyebrow: 'SALUD · VISADOS', title: 'Seguro médico para extranjeros en España con todo lo necesario para tu visado', summary: 'Cumple con los requisitos de extranjería: sin copagos, sin carencias y con repatriación incluida.', heroImage: '/images/products/salud-extranjeros.png', heroAlt: 'Persona extranjera residiendo en España', bullets: ['Válido para solicitud de visado y permiso de residencia.', 'Sin copagos y sin periodos de carencia (acceso inmediato).', 'Incluye repatriación a país de origen por enfermedad o fallecimiento.'], faqs: [{ q: '¿Sirve para el NIE o TIE?', a: 'Sí, el certificado cumple con todos los requisitos legales exigidos por las oficinas de extranjería.' }, { q: '¿Puedo contratar con pasaporte?', a: 'Sí, es posible realizar la contratación utilizando el número de pasaporte si aún no tienes el NIE.' }], whatsappMessage: 'Hola, necesito un seguro de SALUD para trámites de EXTRANJERÍA.' },
  { parent: 'salud', slug: 'reembolso', name: 'Salud con reembolso', label: 'REEMBOLSO', eyebrow: 'SALUD · LIBRE ELECCIÓN', title: 'Libertad total para elegir médico en cualquier parte del mundo', summary: 'Cuando quieres lo mejor de la sanidad privada sin límites de cuadro médico: tú elige, nosotros reembolsamos.', heroImage: '/images/products/reembolso-hero.png', heroAlt: 'Paciente eligiendo libremente su atención médica', bullets: ['Libertad para acudir a cualquier especialista o centro mundial.', 'Reembolso de entre el 80% y el 90% de la factura.', 'Límites de cobertura muy amplios (hasta 1 millón de euros).'], faqs: [{ q: '¿Cómo funciona el reembolso?', a: 'Pagas la factura fuera de la red concertada, nos la envías y en unos 15 días te ingresamos el porcentaje correspondiente.' }, { q: '¿Incluye también el cuadro médico nacional?', a: 'Sí, además del reembolso fuera de red, tienes acceso al 100% de los centros concertados sin pagar nada.' }], whatsappMessage: 'Hola, quiero información sobre la modalidad de REEMBOLSO.' },
  { parent: 'vida', slug: 'hipoteca', name: 'Vida para hipoteca', label: 'HIPOTECA', eyebrow: 'VIDA · HIPOTECA', title: 'VIDA pensada para hipoteca o deuda ligada a vivienda', summary: 'Una forma más clara de entender el capital decreciente y cuándo tiene sentido.', heroImage: '/images/premium/life.png', heroAlt: 'Familia en casa', bullets: ['Protección de una deuda concreta.', 'El capital no funciona igual que en una protección familiar estándar.', 'Te ayudamos a valorar capital, plazo y tranquilidad real.'], faqs: [{ q: '¿Es mejor para hipoteca que un VIDA general?', a: 'Depende. A veces interesa un producto muy ligado a deuda y otras una protección más abierta para la familia.' }], whatsappMessage: 'Hola, quiero orientación sobre VIDA para hipoteca.' },
  { parent: 'mascotas', slug: 'responsabilidad-civil', name: 'Mascotas con responsabilidad civil', label: 'RESPONSABILIDAD CIVIL', eyebrow: 'MASCOTAS · RESPONSABILIDAD CIVIL', title: 'Cuando lo principal es la RESPONSABILIDAD CIVIL, conviene verlo claro desde el principio', summary: 'Ayuda a entender cuándo la RC es el núcleo del producto y cuándo se combina con servicios veterinarios.', heroImage: '/images/premium/happy-pets.png', heroAlt: 'Creatividad de mascotas', bullets: ['Útil para quien prioriza daños a terceros y tranquilidad legal.', 'La asistencia veterinaria puede ir como apoyo o como producto principal.', 'Te ayudamos a diferenciar límites y extras sin ruido.'], faqs: [{ q: '¿La RESPONSABILIDAD CIVIL siempre viene igual?', a: 'No. Cambian los límites y la posición que ocupa dentro del producto.' }], whatsappMessage: 'Hola, quiero orientación sobre MASCOTAS con responsabilidad civil.' },
  { parent: 'dental', slug: 'familias', name: 'Dental para familias', label: 'FAMILIAS', eyebrow: 'DENTAL · FAMILIAS', title: 'DENTAL para familias con revisiones y tratamientos mejor explicados', summary: 'Pensada para ordenar qué aporta cada modalidad familiar antes de contratar.', heroImage: '/images/premium/dental-care.png', heroAlt: 'Creatividad de dental', bullets: ['Buena opción para revisar actos incluidos y urgencias.', 'Aterriza diferencias entre uso puntual y base más estable.', 'Explicación clara antes de decidir.'], faqs: [{ q: '¿DENTAL familiar sirve para uso continuo?', a: 'Sí, especialmente cuando queréis tener una base más estable para revisiones y tratamientos.' }], whatsappMessage: 'Hola, quiero orientación sobre DENTAL para FAMILIAS.' },
  { parent: 'accidentes', slug: 'pyme-autonomos', name: 'Accidentes para empresas', label: 'PYMES', eyebrow: 'ACCIDENTES · NEGOCIO', title: 'Protección para el motor de tu negocio: autónomos y empleados', summary: 'Seguro de accidentes que cumple con convenios y garantiza la estabilidad ante imprevistos laborales.', heroImage: '/images/products/accidentes-hero.png', heroAlt: 'Oficina con equipo de trabajo protegido', bullets: ['Cumplimiento de obligaciones de convenios colectivos.', 'Garantía de ingresos ante incapacidad o fallecimiento accidental.', 'Primas deducibles al 100% para la empresa.'], faqs: [{ q: '¿Es obligatorio para mi empresa?', a: 'Muchos convenios colectivos obligan a contratar una póliza de accidentes para los trabajadores bajo pena de sanción.' }], whatsappMessage: 'Hola, quiero información sobre el seguro de ACCIDENTES para mi empresa.' },
  { parent: 'decesos', slug: 'familias', name: 'Decesos para familias', label: 'FAMILIAS', eyebrow: 'DECESOS · FAMILIAS', title: 'DECESOS para familias con una explicación serena y clara', summary: 'Una sección para entender mejor servicios, gestiones y tranquilidad familiar.', heroImage: '/images/premium/hero-family.png', heroAlt: 'Creatividad de decesos', bullets: ['Ayuda a revisar el alcance real del servicio.', 'Buena opción para quien quiere prever con orden.', 'Comparación sensible y más humana.'], faqs: [{ q: '¿Se puede adaptar a diferentes familias?', a: 'Sí, y es un punto importante al elegir una opción adecuada.' }], whatsappMessage: 'Hola, quiero orientación sobre DECESOS para FAMILIAS.' },
  { parent: 'viaje', slug: 'estudios', name: 'Viaje para estudios', label: 'ESTUDIOS', eyebrow: 'VIAJE · ESTUDIOS', title: 'VIAJE para estudios o estancias largas con una explicación más aterrizada', summary: 'Asistencia, duración, destino y tipo de viaje ordenados para decidir mejor.', heroImage: '/images/premium/travel.png', heroAlt: 'Viajera en destino monumental', bullets: ['Buena opción para revisar estancias por estudios.', 'Ayuda a leer mejor límites, duración y asistencia.', 'Comparación más útil entre un viaje puntual y uno de estudio.'], faqs: [{ q: '¿Es lo mismo que un viaje de ocio?', a: 'No. Suele cambiar la lógica del producto según duración, destino y finalidad del desplazamiento.' }], whatsappMessage: 'Hola, quiero orientación sobre VIAJE para ESTUDIOS.' },
];

export const generalFaqs: FAQItem[] = [
  { q: '¿Puedo recibir asesoramiento sin compromiso?', a: 'Sí. La orientación es 100% gratuita y sin compromiso. Puedes consultar, entender mejor tus opciones y decidir con calma si quieres avanzar o no.' },
  { q: '¿Trabajáis con distintas opciones de seguro?', a: 'Trabajamos con las principales aseguradoras del mercado para poder ofrecerte una comparativa real e independiente basada en lo que tú necesitas.' },
  { q: '¿Me ayudáis a comparar coberturas?', a: 'Ese es nuestro principal valor. No somos un comparador automático de precios; traducimos la letra pequeña, te explicamos diferencias reales (ej. copago vs reembolso) y te ayudamos a elegir con criterio.' },
  { q: '¿Qué necesito para contratar?', a: 'Una vez hayamos elegido la mejor opción, nosotros nos encargamos de toda la gestión administrativa. Solo necesitaremos tus datos básicos y confirmar las condiciones pactadas.' },
  { q: '¿Puedo resolver dudas después de contratar?', a: 'Por supuesto. Nuestro trabajo no termina al firmar la póliza. Seguiremos a tu lado para ayudarte con autorizaciones, partes de siniestro o cambios en tus condiciones.' },
  { q: '¿Qué tipo de seguros puedo consultar?', a: 'Somos especialistas en seguros de SALUD, VIDA, MASCOTAS, VIAJES, DENTAL, ACCIDENTES, ELECTRODOMÉSTICOS, PROTECCIÓN JURÍDICA y NEGOCIOS. Además, ofrecemos soluciones específicas para familias, seniors, extranjeros, autónomos y pymes.' },
];

export const testimonials = [
  { name: 'Beatriz Salazar', location: 'Madrid', quote: 'Rosa me explicó todo con muchísima paciencia. No sentí presión en ningún momento y acabé entendiendo mucho mejor qué seguro necesitaba.', avatar: 'B' },
  { name: 'Karola Gómez', location: 'Valencia', quote: 'La atención fue rápida, clara y muy cercana. Da tranquilidad hablar con alguien que realmente te acompaña en el proceso.', avatar: 'K' },
  { name: 'Luis Marcano', location: 'Barcelona', quote: 'Desde que llegué a España ha sido un apoyo constante. Se nota la experiencia y la forma tan humana de orientar.', avatar: 'L' },
  { name: 'Jordi Mena', location: 'Sevilla', quote: 'Excelente servicio y respuesta inmediata. Me ayudó a comparar sin volver todo más complicado de lo necesario.', avatar: 'J' },
  { name: 'Rosa Acosta', location: 'Málaga', quote: 'Siempre está cuando la necesito. Saber que puedo consultar y recibir una orientación clara me da mucha paz.', avatar: 'R' },
  { name: 'Carlos Provenza', location: 'Bilbao', quote: 'Muy profesional, cercana y transparente. Te hace sentir que estás eligiendo mejor, no comprando a ciegas.', avatar: 'C' },
];

export const trustBadges = [
  { title: 'Confianza', copy: 'Miles de conversaciones y familias orientadas con cercanía, claridad y seguimiento.' },
  { title: 'Experiencia', copy: 'Más de 10 años asesorando y comparando opciones con criterio, no con prisas.' },
  { title: 'Cuidado personalizado', copy: 'Cada caso se revisa con contexto: tu etapa, tus prioridades y la protección que buscas.' },
  { title: 'Consulta sin compromiso', copy: 'Puedes empezar por WhatsApp, llamada o formulario corto y seguir por el canal que te resulte más cómodo, siempre sin compromiso.' },
];

export const comparisonProfiles = [
  { title: 'Quiero una primera orientación', description: 'Ideal si todavía estás ordenando opciones y quieres entender qué te conviene revisar primero.', bullets: ['Te explicamos con claridad', 'Resolvemos dudas sin prisa comercial', 'Te ayudamos a comparar mejor'] },
  { title: 'Ya sé el ramo, me falta afinar modalidad', description: 'Para quien ya sabe si busca SALUD, VIDA, MASCOTAS, VIAJE, DENTAL o DECESOS y necesita aterrizar qué opción encaja mejor.', bullets: ['Con y sin copago', 'Hipoteca o protección familiar', 'Veterinaria, RC o extras'] },
  { title: 'Necesito resolverlo rápido', description: 'Cuando prefieres ir al grano sin perder una orientación humana y profesional.', bullets: ['WhatsApp contextual', 'Formulario corto', 'Posibilidad de llamada'] },
];

export const mainNav = [
  { label: 'Inicio', href: '/' },
  { label: 'Seguros', href: '/seguros' },
  { label: 'Cómo te ayudamos', href: '/como-te-ayudamos' },
  { label: 'Sobre mí', href: '/sobre-mi' },
  { label: 'Blog', href: '/blog' },
  { label: 'Opiniones', href: '/opiniones' },
  { label: 'Contacto', href: '/contacto' },
];

export function getProduct(slug: string) { return products.find((product) => product.slug === slug); }
export function getRelatedProducts(slugs: string[]) { return products.filter((product) => slugs.includes(product.slug)); }
export function getProductSubpage(parent: string, subslug: string) { return subpages.find((item) => item.parent === parent && item.slug === subslug); }
export function getSubpagesForProduct(parent: string) { return subpages.filter((item) => item.parent === parent); }
