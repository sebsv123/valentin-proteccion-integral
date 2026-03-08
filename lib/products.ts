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
  title: 'Valentín Protección Integral | Protegemos lo que más importa',
  description:
    'Asesoramiento personalizado en SALUD, VIDA, MASCOTAS, VIAJE, DENTAL, ACCIDENTES, HOSPITALIZACIÓN y DECESOS. Más de 10 años ayudando a familias y particulares a elegir con claridad.',
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
      'No todas las opciones funcionan igual. Hay modalidades más sencillas, otras con hospitalización y otras con mayor libertad de elección o reembolso. La clave está en comparar con contexto.',
    heroImage: '/images/premium/hero-family.png',
    heroAlt: 'Familia disfrutando de un momento de bienestar y salud en el exterior',
    cardImage: '/images/premium/hero-family.png',
    cardAlt: 'Momento de salud familiar',
    summary:
      'Medicina general, especialidades, urgencias y pruebas, con diferencias importantes entre copago, hospitalización, reembolso, libertad de elección y nivel de cobertura según modalidad.',
    highlights: [
      'Elegir SALUD no consiste solo en mirar si tiene copago o reembolso. También conviene distinguir entre modalidades más ambulatorias y otras más completas con hospitalización, porque no todas responden al mismo uso ni al mismo nivel de protección.',
      'Nuestro trabajo es ayudarte a comparar bien, sin complicarte, para que sepas qué cambia de verdad antes de contratar.',
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
    cases: ['FAMILIAS', 'AUTÓNOMOS', 'SENIOR', 'REEMBOLSO', 'CON COPAGO', 'SIN COPAGO'],
    faqs: [
      {
        q: '¿Todos los seguros de SALUD incluyen hospitalización?',
        a: 'No. Hay modalidades más ambulatorias y otras más completas. Conviene revisar este punto antes de decidir, porque cambia bastante la utilidad real del seguro.',
      },
      {
        q: '¿Todos tienen copago?',
        a: 'No siempre. Depende del producto y del tipo de contratación. Conviene valorar cuánto crees que lo vas a usar y qué equilibrio buscas entre cuota y utilización.',
      },
      {
        q: '¿Puedo elegir médico libremente?',
        a: 'Depende. Algunas modalidades funcionan dentro del cuadro médico y otras permiten mayor libertad de elección o reembolso. No siempre viene igual.',
      },
      {
        q: '¿El reembolso viene incluido?',
        a: 'No en todos los casos. Es una característica específica de determinadas modalidades y conviene revisar cómo funciona antes de darlo por supuesto.',
      },
    ],
    disclaimer:
      'Coberturas, copagos, hospitalización, reembolso y alcance territorial sujetos a modalidad y documentación contractual.',
    related: ['vida', 'dental', 'hospitalizacion'],
    whatsappMessage:
      'Hola, quiero orientación sobre SALUD y entender qué modalidad me encaja mejor.',
  },
  {
    slug: 'vida',
    name: 'Seguro de vida',
    label: 'VIDA',
    eyebrow: 'VIDA',
    heroTitle: 'Un seguro de VIDA no sirve solo para dejar un capital: bien elegido, puede ayudarte a proteger a tu familia, tu hipoteca o tu estabilidad económica',
    heroCopy:
      'No todas las soluciones de VIDA responden a la misma necesidad. Algunas están pensadas para protección familiar, otras para hipoteca o deuda y otras conviene diferenciarlas de productos centrados en accidente, porque el riesgo cubierto no siempre es el mismo.',
    heroImage: '/images/premium/life.png',
    heroAlt: 'Manos de padre e hijo representando protección y seguridad familiar',
    cardImage: '/images/premium/life.png',
    cardAlt: 'Protección familiar',
    summary:
      'Protección económica, apoyo a tu familia y modalidades distintas según quieras cubrir una necesidad familiar, una deuda o una situación concreta.',
    highlights: [
      'La clave está en elegir la modalidad adecuada, no solo un capital.',
      'Algunas opciones están pensadas para protección familiar y otras para hipoteca o deuda.',
      'No todas las soluciones de protección personal responden al mismo riesgo: algunas cubren fallecimiento por cualquier causa y otras se centran en accidente.',
    ],
    benefits: [
      'Ayuda real para separar una protección familiar de una solución para deuda o hipoteca.',
      'Comparativa con más contexto y menos letra pequeña.',
      'Orientación sobre capital, edad y finalidad del seguro.',
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
        q: '¿Todos los seguros de VIDA cubren lo mismo?',
        a: 'No. Hay opciones más familiares, otras ligadas a hipoteca y otras con un enfoque distinto según la cobertura incluida. Conviene revisar la finalidad del producto.',
      },
      {
        q: '¿La incapacidad viene siempre incluida?',
        a: 'No. Puede ser opcional o variar según modalidad. No siempre forma parte del producto con el mismo alcance.',
      },
      {
        q: '¿Existe una modalidad pensada para hipoteca?',
        a: 'Sí. Hay soluciones orientadas a proteger deuda o hipoteca, y suelen funcionar con una lógica distinta a la de una protección familiar más abierta.',
      },
      {
        q: '¿Un seguro de ACCIDENTES es lo mismo que uno de VIDA?',
        a: 'No exactamente. Hay productos que comparten ciertos fines, pero el riesgo cubierto puede ser distinto y conviene no tratarlos como equivalentes.',
      },
    ],
    disclaimer:
      'Capital, incapacidad, duración y alcance de la cobertura sujetos a modalidad y condiciones de contratación.',
    related: ['salud', 'accidentes', 'decesos'],
    whatsappMessage:
      'Hola, quiero orientación sobre VIDA para mi familia o mi hipoteca.',
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
      {
        q: '¿Se puede ampliar?',
        a: 'Sí, puede haber coberturas opcionales adicionales. Lo importante es ver si te aportan valor real o solo hacen más complejo el producto.',
      },
      {
        q: '¿Sirve para cumplir con obligaciones legales?',
        a: 'Algunas modalidades se orientan expresamente a cubrir esa necesidad, según su configuración y la documentación del producto.',
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
    heroImage: '/images/premium/dental-care.png',
    heroAlt: 'Sonrisa sana y cuidado dental profesional',
    cardImage: '/images/premium/dental-care.png',
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
      {
        q: '¿Hay opciones para familias?',
        a: 'Sí. Existen soluciones familiares y también para empresas, con diferencias que merece la pena ordenar antes de decidir.',
      },
      {
        q: '¿Incluye reembolso por accidente dental?',
        a: 'Algunas modalidades incluyen apoyo o reembolso en este tipo de situaciones, según condiciones y documentación del producto.',
      },
    ],
    disclaimer:
      'Actos incluidos, tratamientos, descuentos y condiciones para familias o empresas sujetos a modalidad y documentación del producto.',
    related: ['salud', 'vida', 'hospitalizacion'],
    whatsappMessage: 'Hola, quiero orientación sobre DENTAL.',
  },
  {
    slug: 'accidentes',
    name: 'Seguro de accidentes',
    label: 'ACCIDENTES',
    eyebrow: 'ACCIDENTES',
    heroTitle: 'Un seguro de ACCIDENTES puede ayudarte a protegerte frente a imprevistos que alteran tu estabilidad económica',
    heroCopy:
      'La clave está en saber si buscas una protección básica o una solución más amplia. Hay modalidades más sencillas y otras que amplían la protección con invalidez, hospitalización o apoyo económico temporal.',
    heroImage: '/brand/banner-accidentes.png',
    heroAlt: 'Creatividad de marca para ACCIDENTES',
    cardImage: '/brand/banner-accidentes.png',
    cardAlt: 'Banner de ACCIDENTES',
    summary:
      'Indemnización, invalidez, renta y hospitalización con una lectura más clara para distinguir una modalidad básica de otra más completa.',
    highlights: [
      'Dentro del ramo de ACCIDENTES hay opciones más sencillas y otras más completas.',
      'Algunas se centran en una indemnización básica y otras amplían la protección con invalidez, hospitalización o apoyo económico temporal, según modalidad.',
      'Capital, invalidez, hospitalización y renta no siempre vienen igual y conviene compararlos con contexto.',
    ],
    benefits: [
      'Más claridad al separar protección básica de ampliada.',
      'Explicación humana de un ramo sensible.',
      'Ayuda para revisar capitales y matices antes de decidir.',
    ],
    whatIncludes: [
      'Indemnización por accidente.',
      'Posibles capitales por invalidez, según modalidad.',
      'Coberturas complementarias en opciones más amplias.',
      'Protección económica frente a imprevistos graves.',
    ],
    whatVaries: [
      'La invalidez.',
      'La hospitalización.',
      'La renta mensual.',
      'El importe del capital.',
      'El alcance real de las coberturas ampliadas.',
    ],
    whatReview: [
      'Si buscas protección básica o ampliada.',
      'Si quieres invalidez incluida.',
      'Si necesitas hospitalización o renta.',
      'Qué capital y límites encajan contigo.',
    ],
    cases: ['BÁSICO', 'AMPLIADO', 'INVALIDEZ', 'HOSPITALIZACIÓN'],
    faqs: [
      {
        q: '¿Todos los seguros de ACCIDENTES incluyen hospitalización?',
        a: 'No. Depende del producto y del nivel de cobertura elegido. Conviene revisar este punto porque cambia bastante el alcance de la protección.',
      },
      {
        q: '¿La invalidez viene siempre incluida?',
        a: 'No siempre. Puede variar mucho según modalidad y conviene mirarlo con calma antes de tratar dos opciones como equivalentes.',
      },
      {
        q: '¿Puedo contratar una opción más básica?',
        a: 'Sí. Hay soluciones más simples y otras más completas. La clave está en saber qué nivel de respaldo económico quieres realmente.',
      },
      {
        q: '¿Qué debería comparar de verdad?',
        a: 'Capital, invalidez, hospitalización, renta y alcance de la modalidad. Son los puntos que más cambian la utilidad real del producto.',
      },
    ],
    disclaimer:
      'Capitales, invalidez, hospitalización, rentas y coberturas complementarias sujetos a modalidad y condiciones del producto.',
    related: ['vida', 'hospitalizacion', 'salud'],
    whatsappMessage: 'Hola, quiero orientación sobre ACCIDENTES.',
  },
  {
    slug: 'hospitalizacion',
    name: 'Seguro de hospitalización',
    label: 'HOSPITALIZACIÓN',
    eyebrow: 'HOSPITALIZACIÓN',
    heroTitle: 'Un seguro de HOSPITALIZACIÓN puede ayudarte a contar con un apoyo económico diario si tienes que ingresar en un hospital por una causa cubierta',
    heroCopy:
      'Cubre hospitalización por accidente, enfermedad o intervención quirúrgica, dentro de los límites y exclusiones del producto. La cuantía diaria puede adaptarse a tus necesidades y conviene revisar duración máxima y supuestos no cubiertos.',
    heroImage: '/brand/banner-hospitalizacion.png',
    heroAlt: 'Creatividad de marca para HOSPITALIZACIÓN',
    cardImage: '/brand/banner-hospitalizacion.png',
    cardAlt: 'Banner de HOSPITALIZACIÓN',
    summary:
      'Indemnización diaria por ingreso hospitalario, con una explicación más precisa de causas cubiertas, límites y funcionamiento.',
    highlights: [
      'Este producto está pensado para ofrecer una indemnización diaria en caso de hospitalización por accidente, enfermedad o intervención quirúrgica, dentro de los límites y exclusiones del producto.',
      'La cuantía diaria puede adaptarse a tus necesidades.',
      'No hace falta recargarlo: lo importante es revisar bien qué causa se cubre, cuánto dura y cómo se define el ingreso hospitalario cubierto.',
    ],
    benefits: [
      'Explicación concreta y sencilla.',
      'Útil como complemento bien entendido.',
      'Ayuda para revisar cuantía diaria y límites sin ruido.',
    ],
    whatIncludes: [
      'Indemnización diaria por hospitalización cubierta.',
      'Ingreso por accidente, enfermedad o intervención quirúrgica.',
      'Cobertura en distintos tipos de centro.',
      'Posible aplicación en España y en el extranjero.',
    ],
    whatVaries: [
      'La cuantía diaria.',
      'El detalle de exclusiones.',
      'El funcionamiento en situaciones concretas.',
      'Las condiciones operativas del ingreso cubierto.',
    ],
    whatReview: [
      'Qué cuantía diaria necesitas.',
      'Cuántos días cubre la póliza, con límites que pueden llegar hasta 365 días según producto.',
      'Qué exclusiones aplican.',
      'Cómo se define el ingreso hospitalario cubierto.',
    ],
    cases: ['INDEMNIZACIÓN DIARIA', 'COMPLEMENTO', 'APOYO ECONÓMICO'],
    faqs: [
      {
        q: '¿Puedo elegir la cuantía diaria?',
        a: 'Sí, normalmente puede adaptarse según producto. Conviene revisar qué importe tiene sentido para ti y qué límites operan después.',
      },
      {
        q: '¿Qué causas suelen estar cubiertas?',
        a: 'Accidente, enfermedad o intervención quirúrgica, según condiciones. No siempre viene igual y merece la pena confirmarlo antes de contratar.',
      },
      {
        q: '¿Hay exclusiones importantes?',
        a: 'Sí. Conviene revisar especialmente exclusiones destacadas y supuestos no cubiertos para entender bien la utilidad real del producto.',
      },
      {
        q: '¿Cuánto tiempo puede durar la cobertura?',
        a: 'Puede existir un límite máximo de días cubiertos, que puede llegar hasta 365 días según producto. Conviene revisar ese punto con atención.',
      },
    ],
    disclaimer:
      'Indemnización diaria, causas cubiertas, exclusiones, duración y alcance territorial sujetos a póliza y modalidad.',
    related: ['salud', 'accidentes', 'decesos'],
    whatsappMessage: 'Hola, quiero orientación sobre HOSPITALIZACIÓN.',
  },
  {
    slug: 'decesos',
    name: 'Seguro de decesos',
    label: 'DECESOS',
    eyebrow: 'DECESOS',
    heroTitle: 'El seguro de DECESOS puede ayudarte a dejar resueltas muchas gestiones y servicios importantes en un momento delicado',
    heroCopy:
      'No se trata solo del servicio funerario. Según contratación, puede incluir traslados, gestiones y servicios complementarios que ayudan a reducir carga para la familia en un momento delicado.',
    heroImage: '/brand/banner-decesos.png',
    heroAlt: 'Creatividad de marca para DECESOS',
    cardImage: '/brand/banner-decesos.png',
    cardAlt: 'Banner de DECESOS',
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
      {
        q: '¿Puede incluir servicios legales?',
        a: 'En algunos casos sí, según la modalidad y las coberturas adicionales. Conviene revisar este punto si para ti es relevante.',
      },
      {
        q: '¿Se puede personalizar?',
        a: 'Puede haber servicios extra o añadidos según contratación. Lo importante es entender bien qué va de base y qué no.',
      },
    ],
    disclaimer:
      'Servicio funerario, traslados, gestiones y coberturas complementarias sujetos a modalidad y contratación.',
    related: ['vida', 'salud', 'hospitalizacion'],
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
    heroImage: '/images/premium/travel.png',
    heroAlt: 'Pareja disfrutando de un atardecer en la costa española con tranquilidad',
    cardImage: '/images/premium/travel.png',
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
      {
        q: '¿Hay seguros para estudiantes o viajes frecuentes?',
        a: 'Sí. Existen opciones orientadas a diferentes usos y no conviene tratar un viaje puntual igual que una estancia larga o repetida.',
      },
      {
        q: '¿Qué debería mirar primero?',
        a: 'Destino, duración, tipo de viaje y si necesitas anulación o mayor asistencia médica. Con eso ya se aclara gran parte de la comparación.',
      },
    ],
    disclaimer:
      'Asistencia médica, anulación, equipaje, duración y ámbito territorial sujetos a modalidad y documentación contractual.',
    related: ['salud', 'accidentes', 'mascotas'],
    whatsappMessage: 'Hola, quiero orientación sobre VIAJE para elegir bien según mi destino y duración.',
  },
];

export const subpages: ProductSubpage[] = [
  { parent: 'salud', slug: 'familias', name: 'Salud para familias', label: 'FAMILIAS', eyebrow: 'SALUD · FAMILIAS', title: 'SALUD para familias con una comparación más útil y menos fría', summary: 'Pediatría, urgencias, hospitalización y equilibrio entre prima y uso ordenados para decidir mejor.', heroImage: '/images/products/salud-familias.jpg', heroAlt: 'Familia caminando junta', bullets: ['Orientación sobre copago y sin copago según frecuencia de uso.', 'Especial atención a coberturas familiares y atención pediátrica según modalidad.', 'Ayuda para comparar sin perderte en términos técnicos.'], faqs: [ { q: '¿Compensa una modalidad con copago para una familia?', a: 'Depende del uso previsto y del equilibrio que busquéis entre prima y utilización. Lo revisamos con un criterio práctico.' }, { q: '¿Conviene mirar solo el precio?', a: 'No. En SALUD familiar suelen importar mucho las urgencias, la hospitalización y la flexibilidad del producto.' } ], whatsappMessage: 'Hola, quiero orientación sobre SALUD para FAMILIAS.' },
  { parent: 'salud', slug: 'senior', name: 'Salud senior', label: 'SENIOR', eyebrow: 'SALUD · SENIOR', title: 'SALUD senior con una lectura más clara de lo que cambia de verdad', summary: 'Edad, cuadro médico, hospitalización, aceptación y ritmo de uso explicados con más calma.', heroImage: '/images/agent/rosa-valentin.jpg', heroAlt: 'Rosa Valentín', bullets: ['Más ayuda para entender aceptación, edad y modalidad.', 'Comparación sencilla entre opciones ambulatorias, completas o con reembolso.', 'Acompañamiento humano para revisar dudas con calma.'], faqs: [ { q: '¿La edad afecta mucho a la decisión?', a: 'Sí. Puede influir en precio, aceptación y tipo de modalidad que encaja mejor.' }, { q: '¿Se puede priorizar cuadro médico y hospitalización?', a: 'Sí. Para muchos perfiles senior esos puntos son una parte importante de la comparación.' } ], whatsappMessage: 'Hola, quiero orientación sobre SALUD senior.' },
  { parent: 'salud', slug: 'reembolso', name: 'Salud con reembolso', label: 'REEMBOLSO', eyebrow: 'SALUD · REEMBOLSO', title: 'Cuando quieres más libertad de elección, conviene entender bien el REEMBOLSO', summary: 'Porcentajes, límites y libertad para acudir fuera del cuadro concertado explicados con más claridad.', heroImage: '/images/products/salud-hero-bike.jpg', heroAlt: 'Familia en actividad saludable', bullets: ['Ideal para quien valora elegir médico o centro fuera de red.', 'Importa revisar porcentajes, límites y ámbito territorial.', 'Ayuda real para saber si compensa frente a una modalidad cerrada.'], faqs: [ { q: '¿REEMBOLSO significa que todo se cubre fuera del cuadro?', a: 'No exactamente. Suele haber porcentajes y límites que conviene aterrizar antes de decidir.' }, { q: '¿Encaja para cualquier perfil?', a: 'No siempre. Tiene más sentido cuando realmente vas a aprovechar esa libertad de elección.' } ], whatsappMessage: 'Hola, quiero orientación sobre SALUD con REEMBOLSO.' },
  { parent: 'vida', slug: 'hipoteca', name: 'Vida para hipoteca', label: 'HIPOTECA', eyebrow: 'VIDA · HIPOTECA', title: 'VIDA pensada para hipoteca o deuda ligada a vivienda', summary: 'Una forma más clara de entender el capital decreciente y cuándo tiene sentido.', heroImage: '/images/products/vida-hero.jpg', heroAlt: 'Familia en casa', bullets: ['Protección de una deuda concreta.', 'El capital no funciona igual que en una protección familiar estándar.', 'Te ayudamos a valorar capital, plazo y tranquilidad real.'], faqs: [ { q: '¿Es mejor para hipoteca que un VIDA general?', a: 'Depende. A veces interesa un producto muy ligado a deuda y otras una protección más abierta para la familia.' } ], whatsappMessage: 'Hola, quiero orientación sobre VIDA para hipoteca.' },
  { parent: 'mascotas', slug: 'responsabilidad-civil', name: 'Mascotas con responsabilidad civil', label: 'RESPONSABILIDAD CIVIL', eyebrow: 'MASCOTAS · RESPONSABILIDAD CIVIL', title: 'Cuando lo principal es la RESPONSABILIDAD CIVIL, conviene verlo claro desde el principio', summary: 'Ayuda a entender cuándo la RC es el núcleo del producto y cuándo se combina con servicios veterinarios.', heroImage: '/images/products/mascotas-hero.jpg', heroAlt: 'Creatividad de mascotas', bullets: ['Útil para quien prioriza daños a terceros y tranquilidad legal.', 'La asistencia veterinaria puede ir como apoyo o como producto principal.', 'Te ayudamos a diferenciar límites y extras sin ruido.'], faqs: [ { q: '¿La RESPONSABILIDAD CIVIL siempre viene igual?', a: 'No. Cambian los límites y la posición que ocupa dentro del producto.' } ], whatsappMessage: 'Hola, quiero orientación sobre MASCOTAS con responsabilidad civil.' },
  { parent: 'dental', slug: 'familias', name: 'Dental para familias', label: 'FAMILIAS', eyebrow: 'DENTAL · FAMILIAS', title: 'DENTAL para familias con revisiones y tratamientos mejor explicados', summary: 'Pensada para ordenar qué aporta cada modalidad familiar antes de contratar.', heroImage: '/brand/banner-dental.png', heroAlt: 'Creatividad de dental', bullets: ['Buena opción para revisar actos incluidos y urgencias.', 'Aterriza diferencias entre uso puntual y base más estable.', 'Explicación clara antes de decidir.'], faqs: [ { q: '¿DENTAL familiar sirve para uso continuo?', a: 'Sí, especialmente cuando queréis tener una base más estable para revisiones y tratamientos.' } ], whatsappMessage: 'Hola, quiero orientación sobre DENTAL para FAMILIAS.' },
  { parent: 'accidentes', slug: 'plus', name: 'Accidentes ampliado', label: 'AMPLIADO', eyebrow: 'ACCIDENTES · AMPLIADO', title: 'ACCIDENTES con más capas de protección y una lectura más útil', summary: 'Indemnización, invalidez y hospitalización explicadas con mejor contexto.', heroImage: '/brand/banner-accidentes.png', heroAlt: 'Creatividad de accidentes', bullets: ['Más contexto sobre invalidez y apoyo económico.', 'Lectura clara de diferencias entre modalidad básica y ampliada.', 'Enfoque más humano en un ramo sensible.'], faqs: [ { q: '¿Qué cambia en una opción ampliada?', a: 'Suelen ganar peso la invalidez, la hospitalización u otras capas de protección, pero conviene revisarlo en cada modalidad.' } ], whatsappMessage: 'Hola, quiero orientación sobre ACCIDENTES ampliado.' },
  { parent: 'hospitalizacion', slug: 'diaria', name: 'Indemnización diaria', label: 'INDEMNIZACIÓN DIARIA', eyebrow: 'HOSPITALIZACIÓN · INDEMNIZACIÓN DIARIA', title: 'HOSPITALIZACIÓN con indemnización diaria mejor explicada', summary: 'Te ayudamos a valorar cuándo encaja como complemento y qué límites conviene revisar.', heroImage: '/brand/banner-hospitalizacion.png', heroAlt: 'Creatividad de hospitalización', bullets: ['Importa la cuantía diaria y la duración máxima.', 'Conviene revisar causas cubiertas y exclusiones.', 'Muy útil como complemento bien entendido.'], faqs: [ { q: '¿Es un complemento o un seguro principal?', a: 'Suele entenderse mejor como complemento económico a otra base de protección.' } ], whatsappMessage: 'Hola, quiero orientación sobre HOSPITALIZACIÓN con indemnización diaria.' },
  { parent: 'decesos', slug: 'familias', name: 'Decesos para familias', label: 'FAMILIAS', eyebrow: 'DECESOS · FAMILIAS', title: 'DECESOS para familias con una explicación serena y clara', summary: 'Una sección para entender mejor servicios, gestiones y tranquilidad familiar.', heroImage: '/brand/banner-decesos.png', heroAlt: 'Creatividad de decesos', bullets: ['Ayuda a revisar el alcance real del servicio.', 'Buena opción para quien quiere prever con orden.', 'Comparación sensible y más humana.'], faqs: [ { q: '¿Se puede adaptar a diferentes familias?', a: 'Sí, y es un punto importante al elegir una opción adecuada.' } ], whatsappMessage: 'Hola, quiero orientación sobre DECESOS para FAMILIAS.' },
  { parent: 'viaje', slug: 'estudios', name: 'Viaje para estudios', label: 'ESTUDIOS', eyebrow: 'VIAJE · ESTUDIOS', title: 'VIAJE para estudios o estancias largas con una explicación más aterrizada', summary: 'Asistencia, duración, destino y tipo de viaje ordenados para decidir mejor.', heroImage: '/images/products/viaje-hero.jpg', heroAlt: 'Viajera en destino monumental', bullets: ['Buena opción para revisar estancias por estudios.', 'Ayuda a leer mejor límites, duración y asistencia.', 'Comparación más útil entre un viaje puntual y uno de estudio.'], faqs: [ { q: '¿Es lo mismo que un viaje de ocio?', a: 'No. Suele cambiar la lógica del producto según duración, destino y finalidad del desplazamiento.' } ], whatsappMessage: 'Hola, quiero orientación sobre VIAJE para ESTUDIOS.' },
];

export const generalFaqs: FAQItem[] = [
  { q: '¿Puedo empezar por WhatsApp y decidir después si relleno el formulario?', a: 'Sí. Muchas personas prefieren comenzar por WhatsApp para contar su caso con naturalidad y, si hace falta, seguir después por llamada o formulario. La idea es adaptarnos al canal que te resulte más cómodo desde el primer momento.' },
  { q: '¿Me ayudáis aunque todavía no tenga claro qué seguro necesito?', a: 'Sí. Es una de las situaciones más habituales. Podemos ordenar contigo si conviene empezar por SALUD, VIDA, MASCOTAS, VIAJE, DENTAL, ACCIDENTES, HOSPITALIZACIÓN o DECESOS y después afinar modalidad, coberturas y nivel de protección.' },
  { q: '¿Trabajáis como comparador automático o como asesoramiento personalizado?', a: 'El enfoque es de asesoramiento personalizado. No se trata de dejarte solo ante una tabla de precios, sino de explicarte qué cambia entre opciones, qué tiene más sentido para tu situación y qué conviene revisar antes de contratar.' },
  { q: '¿La orientación tiene algún compromiso o me obliga a contratar?', a: 'No. La orientación es sin compromiso. Puedes consultar, entender mejor tus opciones y decidir con calma si quieres avanzar o no. Lo importante es que tomes una decisión más clara y más segura.' },
  { q: '¿Qué diferencia hay entre pedir orientación general y entrar directamente a un producto?', a: 'Si todavía estás ordenando opciones, suele venir mejor una orientación general. Si ya sabes que buscas SALUD, VIDA, MASCOTAS, VIAJE, DENTAL o DECESOS, entrar al producto te permite profundizar más rápido en coberturas, perfiles y preguntas frecuentes.' },
  { q: '¿La información de la web sustituye a las condiciones de la póliza?', a: 'No. La web sirve para orientarte, ayudarte a comparar y hacerte más sencilla la decisión. La contratación final siempre debe revisarse con la documentación contractual correspondiente a la opción que te interese.' },
  { q: '¿Puedo pedir ayuda si quiero proteger a mi familia y no sé por dónde empezar?', a: 'Claro. Es una de las consultas más frecuentes. Podemos ayudarte a separar qué conviene mirar primero, qué producto tiene más sentido para vuestro caso y qué puntos pesan más, como asistencia, hospitalización, responsabilidad civil o protección económica.' },
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
