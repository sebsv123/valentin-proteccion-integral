export type FAQLocal = { q: string; a: string };

export type DatosLocales = {
  poblacion: string;
  hospitalMasCercano: string;
  perfilPrincipal: string;
  curiosidadLocal: string;
};

export type Zona = {
  slug: string;
  nombre: string;
  nombreCorto: string;
  provincia: string;
  cp: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubtitle: string;
  intro: string;
  porQueElegirNos: string;
  datosLocales: DatosLocales;
  perfilResidente: string;
  faqsLocales: FAQLocal[];
  segurosDestacados: string[];
  zonasCercanas: string[];
  whatsappMessage: string;
  keywords?: string[]; // Para la Ronda 2
  heroImage?: string;
  heroImageAlt?: string;
  heroImageCredit?: string;
  landmarks?: { name: string; icon: string }[];
  heroAccent?: string;
};

export const zonas: Zona[] = [
  {
    slug: 'boadilla-del-monte',
    nombre: 'Boadilla del Monte',
    nombreCorto: 'Boadilla',
    provincia: 'Madrid',
    cp: '28660',
    metaTitle: 'Seguros en Boadilla del Monte — Salud, Vida y Más | VPI',
    metaDescription: 'Asesoramiento de seguros en Boadilla del Monte con sede propia. Salud, vida, mascotas y dental. Responsable profesional: Rosa Valentín, agente registrada DGSFP C012479234434D.',
    h1: 'Seguros en Boadilla del Monte – Tu Asesor Local con +10 Años',
    heroSubtitle: 'Sede en Boadilla del Monte. Rosa y Sebastián llevan más de 10 años protegiendo a familias, autónomos y vecinos del municipio. Sin call center — respuesta personal en 30 minutos.',
    intro: 'Somos agentes de seguros registrados con sede en Boadilla del Monte. Llevamos más de 10 años ayudando a familias, autónomos y vecinos del municipio a elegir el seguro que realmente necesitan. Te acompañamos para que elijas con toda la información — sin letra pequeña y sin presión comercial. La consulta es gratuita y puedes contactarnos por WhatsApp, teléfono o videollamada.',
    porQueElegirNos: 'Boadilla del Monte es uno de los municipios con mayor calidad de vida y mayor renta per cápita de España. Ese perfil se traduce en familias con hipotecas, autónomos con negocio propio y un perfil senior creciente que busca cobertura completa. Las necesidades de protección son amplias y diversas — y ningún portal automático puede sustituir a alguien que conoce el municipio de primera mano.\n\nBoadilla no tiene hospital propio. El centro hospitalario de referencia más cercano es el Hospital Universitario Puerta de Hierro en Majadahonda, a unos 10 minutos, y el HM Montepríncipe a escasos 5 minutos. Esto hace que un seguro de salud privado sea especialmente valioso para los residentes: elimina listas de espera para especialistas, pruebas diagnósticas y urgencias sin necesidad de desplazarse. Las listas de espera en la sanidad pública madrileña superan los 60 días de media para especialistas.\n\nNuestra sede está en Boadilla del Monte. No somos un call center ni una plataforma digital — somos Rosa y Sebastián, asesores que viven y trabajan en el municipio. Conocemos los colegios, las urbanizaciones, el Prado del Espino, las necesidades reales de las familias de aquí. Atendemos presencialmente y también por teléfono, WhatsApp o videollamada para quien prefiera no desplazarse.',
    datosLocales: {
      poblacion: '52.000 habitantes',
      hospitalMasCercano: 'HM Montepríncipe (~5 min) y Hospital Universitario Puerta de Hierro, Majadahonda (~10 min)',
      perfilPrincipal: 'Familias con hipoteca, autónomos locales, profesionales liberales y perfil senior creciente',
      curiosidadLocal: 'Boadilla del Monte tiene una de las rentas per cápita más altas de España y es la base de operaciones de Valentín Protección Integral — conocemos el municipio de primera mano desde hace más de 10 años',
    },
    perfilResidente: 'Familias con hijos, autónomos, profesionales liberales y un perfil senior creciente. Alto nivel adquisitivo. Prioridad en salud, vida y mascotas.',
    faqsLocales: [
      {
        q: '¿Hay asesores de seguros con sede en Boadilla del Monte?',
        a: 'Sí. Valentín Protección Integral tiene su sede en Boadilla del Monte y lleva más de 10 años asesorando a familias y autónomos del municipio. Rosa y Sebastián conocen el municipio, sus urbanizaciones y el perfil de sus vecinos. Atendemos de forma presencial y también por videollamada o teléfono.',
      },
      {
        q: '¿Cuánto cuesta un seguro de salud en Boadilla del Monte?',
        a: 'El precio de un seguro de salud en Boadilla del Monte varía según la edad, las coberturas y la modalidad elegida. En nuestra consulta gratuita te asesoramos con criterio propio y buscamos la mejor solución para tu perfil concreto. Sin coste ni compromiso.',
      },
      {
        q: '¿Puedo contratar un seguro sin desplazarme en Boadilla del Monte?',
        a: 'Sí. Toda la asesoría y contratación se puede hacer por videollamada, teléfono o WhatsApp. No es necesario ir a ninguna oficina. Y si prefieres la atención presencial, nuestra sede está en Boadilla del Monte.',
      },
      {
        q: '¿Qué seguros necesita una familia en Boadilla del Monte?',
        a: 'Las familias de Boadilla suelen priorizar seguro de salud (sin listas de espera y con pediatría), seguro de vida (especialmente con hipoteca), seguro para mascotas y seguro dental. Al no haber hospital público en el municipio, el acceso rápido a especialistas privados es especialmente valorado. Te ayudamos a entender qué cubre cada uno y cuál tiene más sentido para tu situación.',
      },
      {
        q: '¿Es obligatorio el seguro de perro en Boadilla del Monte?',
        a: 'Sí. La Ley de Bienestar Animal de 2023 obliga a todos los propietarios de perros en España, incluido Boadilla del Monte, a tener un seguro de responsabilidad civil. Te asesoramos para elegir la cobertura adecuada. Las opciones que gestionamos empiezan desde 5€/mes para RC básica.',
      },
      {
        q: '¿Qué necesita un autónomo en Boadilla del Monte para estar bien protegido?',
        a: 'Un autónomo en Boadilla del Monte necesita como mínimo: seguro de accidentes (que cubre incapacidad temporal cuando no puedes trabajar), seguro de salud privado para no depender de listas de espera, y responsabilidad civil profesional según la actividad. Además, el seguro de salud para autónomos tiene ventajas fiscales reales — es deducible como gasto de la actividad. Rosa y Sebastián te lo explican sin tecnicismos en 30 minutos.',
      },
    ],
    segurosDestacados: ['salud', 'vida', 'mascotas', 'dental'],
    zonasCercanas: ['majadahonda', 'pozuelo-de-alarcon', 'las-rozas', 'madrid'],
    whatsappMessage: 'Hola, soy de Boadilla del Monte y quiero una consulta gratuita sobre seguros. ¿Podéis ayudarme?',
    heroImage: '/images/zonas/boadilla-del-monte.webp',
    heroImageAlt: 'Palacio del Infante don Luis en Boadilla del Monte, Madrid',
    heroImageCredit: 'Palacio del Infante don Luis · Wikimedia Commons (CC BY-SA)',
    heroAccent: '#0F5E9C',
    landmarks: [
      { name: 'Palacio del Infante don Luis', icon: '🏛️' },
      { name: 'HM Montepríncipe', icon: '🏥' },
      { name: 'Convento de la Encarnación', icon: '⛪' },
      { name: 'Fuente de las Conchas', icon: '⛲' },
    ],
    keywords: [
      'seguros boadilla del monte',
      'asesores seguros boadilla del monte',
      'seguro salud boadilla del monte',
      'seguro mascotas boadilla del monte',
      'seguro vida boadilla del monte',
      'seguro rc perro boadilla del monte',
      'asesor seguros boadilla',
      'seguro autonomos boadilla del monte',
      'seguros familias boadilla del monte',
    ],
  },
  {
    slug: 'las-rozas',
    nombre: 'Las Rozas de Madrid',
    nombreCorto: 'Las Rozas',
    provincia: 'Madrid',
    cp: '28230',
    metaTitle: 'Seguros en Las Rozas — Salud, Vida, Autónomos | VPI',
    metaDescription: 'Asesoramiento de seguros para Las Rozas de Madrid. Salud, vida, autónomos y RC mascotas. Responsable profesional: Rosa Valentín, agente registrada DGSFP C012479234434D.',
    h1: 'Seguros en Las Rozas de Madrid – Orientación con registro oficial y +10 años',
    heroSubtitle: 'Orientación de seguros para familias, autónomos y profesionales de Las Rozas. Salud, vida, mascotas y más — sin call center, sin letra pequeña. Rosa y Sebastián responden en 30 minutos.',
    intro: 'Atendemos a familias, autónomos y profesionales de Las Rozas de Madrid con asesoramiento especializado en seguros. Analizamos tu situación real, te acompañamos para que elijas con toda la información y te recomendamos la opción más adecuada — sin presión, sin letra pequeña y sin coste. Nuestra sede está en Boadilla del Monte, a 15 minutos, y atendemos también por videollamada, teléfono o WhatsApp.',
    porQueElegirNos: 'Las Rozas de Madrid ha crecido hasta convertirse en uno de los municipios más dinámicos del noroeste metropolitano, con más de 100.000 habitantes y una alta concentración de familias jóvenes, autónomos digitales y profesionales de empresa. Este perfil mixto genera necesidades muy diversas: desde familias con hipoteca que necesitan un seguro de vida bien dimensionado, hasta autónomos tech que deben proteger sus ingresos ante una incapacidad, pasando por familias con mascotas que buscan RC y cobertura veterinaria.\n\nLas Rozas no tiene hospital público propio. El centro hospitalario de referencia más cercano es el HM Montepríncipe en Boadilla del Monte, a unos 12 minutos, y el Hospital Universitario Puerta de Hierro en Majadahonda, a unos 15 minutos. Esto hace que un seguro de salud privado sea especialmente valioso: elimina las listas de espera para especialistas — que en Madrid superan los 67 días de media — y da acceso a consultas en 24-48h.\n\nLas Rozas también alberga uno de los mayores polos empresariales del noroeste — lo que hace que el seguro para autónomos y pymes sea una de las coberturas más demandadas en la zona. Conocemos el perfil del municipio y ofrecemos orientación con registro oficial. Atendemos presencialmente desde Boadilla y por videollamada o WhatsApp para quien prefiera no desplazarse.',
    datosLocales: {
      poblacion: 'Más de 100.000 habitantes',
      hospitalMasCercano: 'HM Montepríncipe (Boadilla del Monte, ~12 min) y Hospital Universitario Puerta de Hierro (Majadahonda, ~15 min)',
      perfilPrincipal: 'Familias jóvenes con hijos, autónomos digitales, directivos y profesionales del polo empresarial de Las Rozas',
      curiosidadLocal: 'Las Rozas alberga uno de los mayores Business Parks del noroeste de Madrid y es uno de los municipios con mayor crecimiento de autónomos de la Comunidad — perfil que genera alta demanda de seguros de salud, accidentes e incapacidad temporal',
    },
    perfilResidente: 'Familias jóvenes con hijos, autónomos, directivos de empresa y pymes. Perfil diverso. Alta demanda de salud, vida, accidentes y seguros de negocio.',
    faqsLocales: [
      {
        q: '¿Hay agentes de seguros registrados cerca de Las Rozas de Madrid?',
        a: 'Sí. Desde nuestra sede en Boadilla del Monte, a unos 15 minutos de Las Rozas, atendemos a clientes del municipio tanto de forma presencial como por videollamada, teléfono o WhatsApp. Nuestro compromiso es asesorarte con claridad y defender tus intereses.',
      },
      {
        q: '¿Qué seguro necesita un autónomo o profesional tech en Las Rozas?',
        a: 'Los autónomos y profesionales digitales en Las Rozas necesitan como mínimo: seguro de accidentes con incapacidad temporal (para cuando no puedes trabajar), seguro de salud privado para no depender de listas de espera, y RC profesional según la actividad. El seguro de salud para autónomos además es deducible como gasto de la actividad en el IRPF. Rosa y Sebastián te asesoran sin tecnicismos en 30 minutos.',
      },
      {
        q: '¿Puedo cambiar de seguro de salud en Las Rozas sin perder coberturas?',
        a: 'Sí. Se puede cambiar de compañía respetando los períodos de carencia ya cumplidos. Rosa y Sebastián te acompañan en todo el proceso para que la transición sea sin sorpresas y sin perder ninguna cobertura contratada. La consulta es gratuita y sin compromiso.',
      },
      {
        q: '¿Cuánto cuesta un seguro de vida en Las Rozas de Madrid?',
        a: 'El precio de un seguro de vida en Las Rozas depende de la edad, el capital asegurado y si hay hipoteca. Para un perfil joven con hipoteca, las coberturas habituales empiezan por un precio mensual accesible. Rosa y Sebastián calculan el capital que necesitas y el precio real para tu situación concreta, gratis y sin compromiso.',
      },
      {
        q: '¿Qué seguro necesita una pyme o negocio en Las Rozas Business Park?',
        a: 'Una pyme en Las Rozas necesita como mínimo seguro multirriesgo de negocio (continente, contenido y RC), seguro de vida para socios clave y, según la actividad, RC profesional. Te asesoramos sin coste para encontrar la cobertura adecuada a tu sector y tamaño de empresa.',
      },
      {
        q: '¿Es obligatorio el seguro de perro en Las Rozas de Madrid?',
        a: 'Sí. La Ley de Bienestar Animal de 2023 obliga a todos los propietarios de perros en España, incluido Las Rozas de Madrid, a tener un seguro de responsabilidad civil. Las opciones que gestionamos empiezan desde 5€/mes para RC básica. Si quieres añadir cobertura veterinaria, Rosa y Sebastián te calculan el precio para tu perro en 30 minutos.',
      },
    ],
    segurosDestacados: ['salud', 'vida', 'accidentes', 'mascotas'],
    zonasCercanas: ['boadilla-del-monte', 'majadahonda', 'madrid'],
    whatsappMessage: 'Hola, soy de Las Rozas y quiero asesoramiento especializado sobre seguros. ¿Podéis ayudarme?',
    heroImage: '/images/zonas/las-rozas.webp',
    heroImageAlt: 'Centro de las Artes y Biblioteca León Tolstoi en Las Rozas de Madrid',
    heroImageCredit: 'Centro de las Artes y Biblioteca León Tolstoi · Wikimedia Commons (CC BY-SA)',
    heroAccent: '#7BC67E',
    landmarks: [
      { name: 'Las Rozas Business Park', icon: '🏢' },
      { name: 'Heron City', icon: '🎬' },
      { name: 'Parque Empresarial', icon: '💼' },
      { name: 'HU Puerta de Hierro (12 min)', icon: '🏥' },
    ],
    keywords: [
      'seguros las rozas de madrid',
      'asesores seguros las rozas',
      'seguro salud las rozas',
      'seguro autonomos las rozas madrid',
      'seguro vida las rozas',
      'seguro mascotas las rozas',
      'seguro rc perro las rozas',
      'agente seguros las rozas madrid',
      'seguro accidentes las rozas',
    ],
  },
  {
    slug: 'majadahonda',
    nombre: 'Majadahonda',
    nombreCorto: 'Majadahonda',
    provincia: 'Madrid',
    cp: '28220',
    metaTitle: 'Seguros en Majadahonda — Salud, Vida y Autónomos | VPI',
    metaDescription: 'Asesoramiento de seguros para Majadahonda. Salud, vida, autónomos y dental. Responsable profesional: Rosa Valentín, agente registrada DGSFP C012479234434D.',
    h1: 'Seguros en Majadahonda – Tu Asesor Local con +10 Años',
    heroSubtitle: 'Orientación de seguros a 10 minutos de Majadahonda. Rosa y Sebastián llevan más de 10 años protegiendo a familias y autónomos del noroeste de Madrid. Respuesta personal en 30 minutos — sin call center.',
    intro: 'Asesoramos a particulares, familias y autónomos de Majadahonda en seguros de salud, vida, dental, accidentes y más. Nuestra sede está en Boadilla del Monte, a 10 minutos, y atendemos también por videollamada, teléfono o WhatsApp. Te acompañamos para que elijas con toda la información y para que la recomendación sea siempre la que te conviene a ti — no la que más comisión da.',
    porQueElegirNos: 'Majadahonda tiene un perfil demográfico muy particular: alta concentración de profesionales liberales, sanitarios, directivos y familias de nivel medio-alto. El municipio acoge el Hospital Universitario Puerta de Hierro, uno de los centros más grandes de la Comunidad de Madrid — pero ese hospital es público y sujeto a las listas de espera del sistema sanitario madrileño, que superan los 60 días para especialistas. Un seguro de salud privado elimina esas esperas y da acceso a consultas en 24-48h.\n\nMajadahonda también concentra una alta actividad deportiva — golf, tenis, pádel, running — que hace que las coberturas de accidentes deportivos sean especialmente relevantes para muchos residentes. Un accidente durante la práctica deportiva puede generar gastos médicos y, sobre todo, tiempo sin trabajar. Un seguro de accidentes bien dimensionado cubre ambas cosas.\n\nLos autónomos y profesionales liberales de Majadahonda — abogados, médicos, consultores, diseñadores — necesitan protección específica: RC profesional, incapacidad temporal y salud. Rosa y Sebastián conocen esos perfiles desde hace más de 10 años y asesoran de forma personalizada, sin plantillas ni soluciones genéricas.',
    datosLocales: {
      poblacion: '75.000 habitantes',
      hospitalMasCercano: 'Hospital Universitario Puerta de Hierro (en el propio municipio)',
      perfilPrincipal: 'Profesionales liberales, sanitarios, directivos, familias de nivel medio-alto y autónomos con actividad deportiva',
      curiosidadLocal: 'Majadahonda alberga el Hospital Universitario Puerta de Hierro, referencia sanitaria del noroeste de Madrid — pero es público y con listas de espera. Un seguro de salud privado es el complemento más demandado en el municipio',
    },
    perfilResidente: 'Profesionales liberales, sanitarios, directivos y familias de nivel adquisitivo medio-alto. Alta demanda de salud completa, vida y protección jurídica.',
    faqsLocales: [
      {
        q: '¿Merece la pena un seguro de salud privado en Majadahonda teniendo el Puerta de Hierro?',
        a: 'El Hospital Puerta de Hierro es público y sujeto a las listas de espera de la Comunidad de Madrid, que superan los 60 días para especialistas. Un seguro de salud privado da acceso a consultas en 24-48h, pruebas diagnósticas rápidas y hospitalización sin esperas en centros privados. Rosa y Sebastián te calculan el precio para tu perfil en 30 minutos, gratis y sin compromiso.',
      },
      {
        q: '¿Qué seguro necesita un autónomo o profesional liberal en Majadahonda?',
        a: 'Los autónomos y profesionales liberales en Majadahonda (médicos, abogados, consultores) necesitan como mínimo: RC profesional, seguro de accidentes con incapacidad temporal y seguro de salud privado. Además, el seguro de salud para autónomos es deducible como gasto de la actividad en el IRPF. Te asesoramos para cubrir exactamente lo que necesitas según tu sector, sin pagar de más.',
      },
      {
        q: '¿Existe algún seguro de accidentes deportivos para residentes de Majadahonda?',
        a: 'Sí. Los seguros de accidentes cubren lesiones durante la práctica deportiva — golf, pádel, tenis, running, ciclismo — incluyendo gastos médicos e incapacidad temporal si no puedes trabajar. Son especialmente relevantes para autónomos y profesionales que no tienen cobertura laboral. Desde 3€/mes para coberturas básicas. Rosa y Sebastián te calculan la opción adecuada para tu actividad.',
      },
      {
        q: '¿Puedo contratar un seguro dental para toda la familia en Majadahonda?',
        a: 'Sí. Gestionamos opciones de seguro dental familiar con acceso a clínicas en Majadahonda y alrededores. Cubrimos revisiones, limpiezas, empastes y ortodoncia según la modalidad. El precio depende del número de miembros y las coberturas elegidas. Primera consulta gratuita y sin compromiso.',
      },
      {
        q: '¿Cómo contrato un seguro si los asesores están en Boadilla y yo soy de Majadahonda?',
        a: 'Nuestra sede está en Boadilla del Monte, a menos de 10 minutos de Majadahonda. Pero toda la asesoría y contratación también se puede hacer por videollamada, teléfono o WhatsApp — sin necesidad de desplazarte. La mayoría de nuestros clientes de Majadahonda prefieren la comodidad de la gestión remota.',
      },
      {
        q: '¿Cuánto cuesta un seguro de vida en Majadahonda?',
        a: 'El precio de un seguro de vida en Majadahonda depende de la edad, el capital asegurado y si hay hipoteca. Para un perfil de 40 años con hipoteca, las coberturas habituales empiezan por un precio mensual accesible. Rosa y Sebastián te calculan el capital que necesitas y el precio real para tu situación en 30 minutos, gratis y sin compromiso.',
      },
    ],
    segurosDestacados: ['salud', 'vida', 'accidentes', 'dental'],
    zonasCercanas: ['boadilla-del-monte', 'las-rozas', 'pozuelo-de-alarcon', 'madrid'],
    whatsappMessage: 'Hola, soy de Majadahonda y quiero una consulta gratuita sobre seguros. ¿Podéis ayudarme?',
    heroImage: '/images/zonas/majadahonda.webp',
    heroImageAlt: 'Hospital Universitario Puerta de Hierro en Majadahonda, Madrid',
    heroImageCredit: 'Hospital Puerta de Hierro, Majadahonda · Antonio Rubio / Wikimedia Commons (CC BY 2.0)',
    heroAccent: '#F28C28',
    landmarks: [
      { name: 'Hospital Puerta de Hierro', icon: '🏥' },
      { name: 'Plaza Mayor', icon: '🏛️' },
      { name: 'Centro Comercial Centro Oeste', icon: '🛍️' },
      { name: 'Club de Campo Las Rejas', icon: '⛳' },
    ],
    keywords: [
      'seguros majadahonda',
      'asesores seguros majadahonda',
      'seguro salud majadahonda',
      'seguro salud privado majadahonda',
      'seguro accidentes deportivos majadahonda',
      'seguro autonomos majadahonda',
      'seguro dental majadahonda',
      'seguro vida majadahonda',
      'agente seguros majadahonda',
    ],
  },
  {
    slug: 'pozuelo-de-alarcon',
    nombre: 'Pozuelo de Alarcón',
    nombreCorto: 'Pozuelo',
    provincia: 'Madrid',
    cp: '28223',
    metaTitle: 'Seguros en Pozuelo de Alarcón — Salud Premium | VPI',
    metaDescription: 'Asesoramiento de seguros para Pozuelo de Alarcón. Salud, vida y protección jurídica. Responsable profesional: Rosa Valentín, agente registrada DGSFP C012479234434D.',
    h1: 'Seguros en Pozuelo de Alarcón – Asesoramiento Experto con Registro Oficial DGSFP',
    heroSubtitle: 'Orientación de seguros para familias y profesionales de Pozuelo de Alarcón. Salud, vida, hogar y protección jurídica — coberturas que responden cuando las necesitas. Rosa y Sebastián, respuesta personal en 30 minutos.',
    intro: 'Ayudamos a familias y profesionales de Pozuelo de Alarcón a elegir seguros con criterio. Analizamos tu situación real, te acompañamos para que elijas con toda la información y te recomendamos la opción más adecuada — sin presión, sin letra pequeña y sin compromisos. Nuestra sede está en Boadilla del Monte, a 15 minutos, y atendemos también por videollamada, teléfono o WhatsApp.',
    porQueElegirNos: 'Pozuelo de Alarcón es uno de los municipios con mayor renta per cápita de España. Ese perfil se traduce en necesidades de protección amplias y bien definidas: familias con hipotecas de capital elevado que necesitan seguros de vida correctamente dimensionados, profesionales con demanda de salud premium con libre elección médica o reembolso, y autónomos con facturaciones altas que deben proteger su actividad y sus ingresos ante cualquier imprevisto.\n\nEl perfil de Pozuelo también incluye familias con hijos en colegios privados e internacionales, propiedades de valor elevado que justifican un seguro de hogar bien cubierto, y un perfil senior con patrimonio que busca dejar todo en orden para sus hijos. No se trata de pagar más por lo mismo — se trata de tener la cobertura que realmente responde en el momento que la necesitas.\n\nNuestro compromiso es contigo: te explicamos cada opción con claridad, sin tecnicismos y con honestidad total. Llevamos más de 10 años haciéndolo para familias y profesionales del noroeste de Madrid. Atendemos por videollamada o presencialmente desde nuestra sede en Boadilla del Monte, a menos de 15 minutos de Pozuelo.',
    datosLocales: {
      poblacion: '90.000 habitantes',
      hospitalMasCercano: 'Hospital Universitario Puerta de Hierro (Majadahonda, ~12 min) y Clínica Ruber Internacional (Madrid, ~20 min)',
      perfilPrincipal: 'Ejecutivos, directivos, profesionales liberales, familias de alto poder adquisitivo y perfil senior con patrimonio',
      curiosidadLocal: 'Pozuelo de Alarcón tiene la renta per cápita más alta de España junto a Boadilla del Monte — el perfil de sus residentes genera la mayor prima media por cliente de todo el noroeste de Madrid',
    },
    perfilResidente: 'Ejecutivos, directivos, profesionales liberales y familias de alto poder adquisitivo. Alta demanda de salud premium, vida, reembolso y protección jurídica.',
    faqsLocales: [
      {
        q: '¿Cuánto cuesta un seguro de salud con reembolso en Pozuelo de Alarcón?',
        a: 'Los seguros de salud con reembolso permiten acudir a cualquier médico del mundo y recuperar parte del coste. Son especialmente valorados en Pozuelo por perfiles que viajan frecuentemente o quieren total libertad de elección médica. El precio depende de la edad, el capital de reembolso y las coberturas. Rosa y Sebastián te asesoran sobre las coberturas disponibles para tu perfil concreto en 30 minutos, gratis y sin compromiso.',
      },
      {
        q: '¿Cómo dimensionar bien un seguro de vida en Pozuelo de Alarcón?',
        a: 'Con hipotecas de capital elevado y un nivel de vida que mantener, en Pozuelo es habitual necesitar capitales asegurados altos. La regla general es cubrir el capital pendiente de la hipoteca más entre 3 y 5 veces los ingresos anuales netos. Rosa y Sebastián calculan la cobertura exacta que necesitas para tu situación concreta, sin compromiso.',
      },
      {
        q: '¿Hay agentes de seguros registrados cerca de Pozuelo de Alarcón?',
        a: 'Nuestra sede está en Boadilla del Monte, a menos de 15 minutos de Pozuelo. Atendemos también por videollamada o teléfono. Te acompañamos para que elijas con toda la información.',
      },
      {
        q: '¿Qué seguro necesita un autónomo o directivo en Pozuelo de Alarcón?',
        a: 'Los autónomos y directivos en Pozuelo suelen necesitar RC profesional, seguro de salud privado, accidentes con incapacidad temporal y seguro de vida. Si tienen empleados, también cobertura de convenio colectivo. Además, el seguro de salud para autónomos es deducible como gasto de la actividad. Te asesoramos para cubrir exactamente lo que necesitas según tu sector y facturación.',
      },
      {
        q: '¿Merece la pena contratar el seguro de vida para hipoteca fuera del banco en Pozuelo?',
        a: 'Contratar el seguro de vida para hipoteca fuera del banco puede suponer un ahorro significativo manteniendo las mismas o mejores coberturas. Con hipotecas de capital alto como las habituales en Pozuelo, ese ahorro puede ser relevante a lo largo del préstamo. Rosa y Sebastián lo calculan para tu hipoteca concreta sin compromiso.',
      },
      {
        q: '¿Qué seguro de hogar necesita una propiedad de valor elevado en Pozuelo?',
        a: 'Las propiedades de valor elevado en Pozuelo requieren un seguro de hogar bien dimensionado: continente a valor real de reconstrucción, contenido con capital adecuado, responsabilidad civil y coberturas de asistencia. Un seguro de hogar mal dimensionado puede dejar sin cubrir parte del siniestro. Rosa y Sebastián revisan tu situación y calculan la cobertura correcta para tu propiedad, gratis y sin compromiso.',
      },
    ],
    segurosDestacados: ['salud', 'vida', 'accidentes', 'decesos'],
    zonasCercanas: ['madrid', 'majadahonda', 'boadilla-del-monte'],
    whatsappMessage: 'Hola, soy de Pozuelo de Alarcón y quiero asesoramiento sobre seguros para mi familia. ¿Podéis ayudarme?',
    heroImage: '/images/zonas/pozuelo-de-alarcon.webp',
    heroImageAlt: 'Biblioteca Municipal Universitaria ESIC en Pozuelo de Alarcón, Madrid',
    heroImageCredit: 'Biblioteca Municipal Universitaria ESIC · Wikimedia Commons (CC BY-SA)',
    heroAccent: '#123B68',
    landmarks: [
      { name: 'Ciudad de la Imagen', icon: '🎬' },
      { name: 'ESIC Business School', icon: '🎓' },
      { name: 'Av. de Europa', icon: '🌲' },
      { name: 'Clínica Ruber Internacional (20 min)', icon: '🏥' },
    ],
    keywords: [
      'seguros pozuelo de alarcon',
      'asesores seguros pozuelo alarcon',
      'seguro salud pozuelo de alarcon',
      'seguro salud premium pozuelo',
      'seguro salud reembolso pozuelo',
      'seguro vida pozuelo alarcon',
      'seguro vida hipoteca pozuelo',
      'seguro hogar pozuelo de alarcon',
      'agente seguros pozuelo de alarcon',
    ],
  },
  {
    slug: 'madrid',
    nombre: 'Madrid',
    nombreCorto: 'Madrid',
    provincia: 'Madrid',
    cp: '28001',
    metaTitle: 'Seguros en Madrid — Orientación con registro oficial | VPI',
    metaDescription: 'Asesoramiento de seguros en Madrid. Salud, vida, autónomos y más. Responsable profesional: Rosa Valentín, agente registrada DGSFP C012479234434D.',
    h1: 'Seguros en Madrid – Orientación clara que trabaja para ti',
    heroSubtitle: 'En Madrid hay cientos de opciones de seguros. Rosa y Sebastián llevan más de 10 años ayudando a familias y autónomos a elegir la correcta — registrados en la DGSFP, con asesoramiento personalizado y sin letra pequeña, con respuesta personal en 30 minutos.',
    intro: 'Somos agentes de seguros registrados con más de 10 años de experiencia ayudando a particulares, familias y autónomos en Madrid a elegir el seguro adecuado. Te acompañamos para que elijas con toda la información y te explicamos cada opción con claridad — sin tecnicismos, sin presión y sin letra pequeña. Atendemos por videollamada, teléfono o WhatsApp en toda la Comunidad de Madrid.',
    porQueElegirNos: 'Madrid tiene más de 3,3 millones de habitantes y una de las mayores demandas de seguros de salud privados de España. Las listas de espera en la sanidad pública madrileña para especialistas superan los 67 días de media, lo que hace que cada vez más familias opten por complementar o sustituir la sanidad pública con un seguro privado. La oferta es enorme — el problema no es encontrar un seguro, sino encontrar el correcto para tu situación concreta.\n\nAhí es donde entramos nosotros. A diferencia de los portales automáticos que muestran resultados por algoritmo, Rosa y Sebastián estudian tu perfil real, tus necesidades y tu presupuesto — y te presentan la opción que de verdad tiene sentido para ti, con orientación profesional y registro oficial. Sin coste, sin compromiso y sin presión comercial.\n\nLlevamos más de 10 años haciéndolo para familias y autónomos de Madrid y el noroeste de la Comunidad. Atendemos por videollamada, teléfono o WhatsApp en toda la Comunidad de Madrid — sin necesidad de desplazarse a ninguna oficina.',
    datosLocales: {
      poblacion: '3,3 millones de habitantes',
      hospitalMasCercano: 'Red hospitalaria completa — hospitales públicos y privados de primer nivel en toda la ciudad',
      perfilPrincipal: 'Perfil muy diverso: familias, autónomos, jóvenes profesionales, seniors y extranjeros con visado',
      curiosidadLocal: 'Las listas de espera en la sanidad pública de Madrid para especialistas superan los 67 días de media — el mayor mercado de seguros de salud privados de España. Atendemos por videollamada en toda la Comunidad',
    },
    perfilResidente: 'Perfil muy diverso. Alta demanda en todos los ramos. Especialmente salud, vida, mascotas, viaje y protección jurídica.',
    faqsLocales: [
      {
        q: '¿Cuánto cuesta un seguro de salud en Madrid?',
        a: 'El precio de un seguro de salud en Madrid varía según la edad, las coberturas, la modalidad elegida (con o sin copago, con o sin hospitalización, con o sin reembolso) y la compañía. En nuestra consulta gratuita buscamos la cobertura más adecuada para tu perfil — sin coste ni compromiso.',
      },
      {
        q: '¿Es mejor contratar un seguro con un agente registrado DGSFP o directamente con la compañía?',
        a: 'Rosa Valentín es la agente de seguros registrada responsable de la mediación. Su inscripción puede consultarse en el registro público de la DGSFP con la clave C012479234434D.',
      },
      {
        q: '¿Qué seguros son obligatorios en Madrid?',
        a: 'En Madrid son obligatorios el seguro de responsabilidad civil para vehículos, el seguro de RC para perros (Ley de Bienestar Animal 2023) y determinados seguros de RC profesional según el sector. El seguro de hogar no es obligatorio por ley, pero la mayoría de hipotecas lo exigen. Te asesoramos sobre qué es obligatorio en tu situación concreta.',
      },
      {
        q: '¿Puedo contratar un seguro de salud para extranjeros en Madrid?',
        a: 'Sí. Gestionamos opciones de seguro de salud específicas para extranjeros residentes en Madrid, incluyendo modalidades válidas para visados de larga duración y permisos de residencia. Te asesoramos según tu situación migratoria y necesidades concretas.',
      },
      {
        q: '¿Por qué elegir un agente de seguros registrado en la DGSFP?',
        a: 'Rosa Valentín es la agente de seguros registrada responsable de la mediación de Valentín Protección Integral. Su inscripción C012479234434D puede consultarse en el registro público de la DGSFP.',
      },
      {
        q: '¿Qué necesita un autónomo en Madrid para estar bien protegido?',
        a: 'Un autónomo en Madrid necesita como mínimo: seguro de accidentes con incapacidad temporal (para cuando no puedes trabajar), seguro de salud privado para no depender de listas de espera, y RC profesional según la actividad. El seguro de salud para autónomos además es deducible como gasto de la actividad en el IRPF. Rosa y Sebastián te lo explican sin tecnicismos en 30 minutos.',
      },
    ],
    segurosDestacados: ['salud', 'vida', 'mascotas', 'viaje'],
    zonasCercanas: ['boadilla-del-monte', 'las-rozas', 'majadahonda', 'pozuelo-de-alarcon'],
    whatsappMessage: 'Hola, soy de Madrid y quiero asesoramiento especializado sobre seguros. ¿Podéis ayudarme?',
    heroImage: '/images/zonas/madrid.webp',
    heroImageAlt: 'Plaza de Cibeles en Madrid centro',
    heroImageCredit: 'Plaza de Cibeles · Wikimedia Commons (CC BY-SA)',
    heroAccent: '#003366',
    landmarks: [
      { name: 'Plaza de Cibeles', icon: '⛲' },
      { name: 'Hospital Gregorio Marañón', icon: '🏥' },
      { name: 'Hospital 12 de Octubre', icon: '🏥' },
      { name: 'Clínica Ruber', icon: '🏥' },
    ],
    keywords: [
      'seguros madrid',
      'agentes seguros registrados madrid',
      'seguro salud madrid',
      'seguro salud privado madrid',
      'seguro salud sin esperas madrid',
      'seguro autonomos madrid',
      'seguro vida hipoteca madrid',
      'seguros madrid registro oficial',
      'agente seguros madrid',
      'consulta seguros gratis madrid',
    ],
  },
];

export const getZona = (slug: string) => zonas.find((z) => z.slug === slug);
