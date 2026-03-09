export type CompareTab = {
  id: string;
  label: string;
  intro?: string;
  columns?: string[];
  rows?: { label: string; values: boolean[] | string[] }[];
  bullets?: string[];
  cards?: { title: string; desc: string; tag?: string }[];
  advice?: { title: string; desc: string }[];
};

export type ProductCompareConfig = {
  tabs: CompareTab[];
};

const yes = 'Sí';
const medium = 'Según modalidad';

export const productCompare: Record<string, ProductCompareConfig> = {
  salud: {
    tabs: [
      {
        id: 'modalidades',
        label: 'Modalidades',
        intro: 'No todas las opciones funcionan igual. Elige antes qué tipo de uso le darás al seguro.',
        cards: [
          { title: 'Ambulatorio / Extrahospitalario', desc: 'Consultas, pruebas y especialistas sin necesidad de ingreso. Ideal si buscas acceso rápido a medicina general.', tag: 'Más accesible' },
          { title: 'Con hospitalización', desc: 'Incluye cobertura por ingreso, cirugía y estancias hospitalarias. Más completo para familias o perfiles senior.', tag: 'Más completo' },
          { title: 'Con copago / Sin copago', desc: 'Con copago la cuota baja pero pagas por uso. Sin copago pagas más al mes pero nada al ir al médico.', tag: 'Clave decisiva' },
          { title: 'Reembolso', desc: 'Libertad de elegir cualquier especialista, también fuera del cuadro médico. Se reembolsa un porcentaje establecido.', tag: 'Más libertad' },
        ],
        bullets: [
          'Hay opciones más ambulatorias y otras más completas con hospitalización.',
          'El copago, el reembolso y la libertad de elección no siempre vienen igual.',
          'Conviene ordenar prioridades antes de mirar solo la cuota.',
        ],
      },
      {
        id: 'comparador',
        label: 'Comparador',
        intro: 'Tabla orientativa para ver diferencias generales entre niveles. No es un presupuesto.',
        columns: ['Básico', 'Equilibrado', 'Completo'],
        rows: [
          { label: 'Medicina general y especialidades', values: [yes, yes, yes] },
          { label: 'Urgencias y pruebas diagnósticas', values: [medium, yes, yes] },
          { label: 'Hospitalización', values: ['No siempre', medium, yes] },
          { label: 'Reembolso', values: ['No', 'No siempre', medium] },
          { label: 'Asistencia internacional', values: ['No siempre', medium, medium] },
        ],
      },
      {
        id: 'consejos',
        label: 'Consejos',
        intro: 'Lo que conviene saber antes de comparar precios.',
        advice: [
          { title: 'Qué mirar antes del precio', desc: 'El precio mensual no lo dice todo. Revisa copagos, carencias, exclusiones y el cuadro médico disponible en tu zona.' },
          { title: 'Cuándo te interesa hospitalización', desc: 'Si tienes hijos menores, planeas una intervención o quieres estar cubierto ante ingresos, la hospitalización marca una diferencia real.' },
          { title: 'Qué cambia con reembolso', desc: 'Reembolso permite ir a cualquier especialista, incluso fuera del cuadro médico. Ideal si ya tienes un médico de confianza.' },
          { title: 'Cuándo conviene copago', desc: 'Si usas poco el seguro, el copago abarata la cuota mensual. Pero si necesitas atención frecuente, puede salir más caro a medio plazo.' },
          { title: 'Qué preguntar antes de contratar', desc: 'Pregunta siempre por carencias, periodo de permanencia, topes en pruebas diagnósticas y cobertura dental incluida.' },
        ],
      },
      {
        id: 'preguntas',
        label: 'Tus preguntas',
        intro: 'Preguntas que aparecen a menudo antes de decidir.',
        advice: [
          { title: '¿Seguro familiar o individual?', desc: 'Depende de cuántas personas necesitan cobertura y qué tipo de uso harán del seguro. Una conversación previa aclara mucho.' },
          { title: '¿Copago o sin copago?', desc: 'Copago reduce la cuota pero pagas por consulta. Sin copago cuesta más al mes pero no pagas al usarlo. La clave es tu frecuencia de uso.' },
          { title: '¿Red cerrada o libre elección?', desc: 'Red cerrada tiene cuadro médico definido. Libre elección o reembolso permite ir a cualquier especialista.' },
          { title: '¿Necesito cobertura internacional?', desc: 'Si viajas con frecuencia o tienes familia fuera, la asistencia internacional o en viaje puede ser importante.' },
        ],
      },
    ],
  },
  vida: {
    tabs: [
      {
        id: 'modalidades',
        label: 'Modalidades',
        intro: 'No todas las pólizas de vida cubren el mismo riesgo. Identifica primero tu objetivo.',
        cards: [
          { title: 'Protección familiar', desc: 'Capital para tus beneficiarios en caso de fallecimiento. La opción más habitual para proteger a quienes dependen de ti.', tag: 'Más frecuente' },
          { title: 'Vinculado a hipoteca', desc: 'Protege el pago de la hipoteca ante fallecimiento o incapacidad. Suele ser requisito del banco.', tag: 'Muy solicitado' },
          { title: 'Incapacidad', desc: 'Cobertura ante una incapacidad permanente que impida generar ingresos. Complemento clave para muchos perfiles.', tag: 'Complementario' },
        ],
        bullets: ['No todas las soluciones de protección personal cubren el mismo riesgo.', 'Conviene separar VIDA de productos centrados en accidente.'],
      },
      {
        id: 'comparador',
        label: 'Comparador',
        intro: 'Visión general orientativa entre niveles de protección.',
        columns: ['Base', 'Familiar', 'Protección ampliada'],
        rows: [
          { label: 'Cobertura principal por fallecimiento', values: [yes, yes, yes] },
          { label: 'Finalidad hipoteca o deuda', values: [medium, medium, medium] },
          { label: 'Incapacidad', values: ['No siempre', medium, yes] },
          { label: 'Capital más amplio', values: ['Básico', 'Medio', 'Amplio'] },
          { label: 'Enfoque distinto a accidente', values: [yes, yes, yes] },
        ],
      },
      {
        id: 'consejos',
        label: 'Consejos',
        intro: 'Lo que conviene tener claro antes de elegir un seguro de vida.',
        advice: [
          { title: 'Define tu objetivo principal', desc: 'No es lo mismo proteger a tu familia que garantizar una hipoteca. El capital y la duración cambian según el fin.' },
          { title: 'Revisa la incapacidad', desc: 'Muchas pólizas la incluyen como extra. Si dependes de un ingreso regular, puede ser la cobertura más importante.' },
          { title: 'No elijas solo por precio', desc: 'Un capital demasiado bajo puede no servir cuando más se necesita. Ajusta según tu situación real.' },
        ],
      },
    ],
  },
  dental: {
    tabs: [
      {
        id: 'modalidades',
        label: 'Modalidades',
        intro: 'Hay distintas formas de acceder a asistencia dental. A veces viene incluida, otras es independiente.',
        cards: [
          { title: 'Dental incluido en salud', desc: 'Algunas pólizas de salud incluyen un cuadro dental básico. Ideal si ya tienes seguro médico y quieres añadir dental.', tag: 'Integrado' },
          { title: 'Seguro dental independiente', desc: 'Póliza específica solo para dental, con cuadro propio y coberturas centradas en odontología.', tag: 'Especializado' },
          { title: 'Con copago dental', desc: 'Consultas gratuitas pero tratamientos con copago reducido. Una opción económica para uso frecuente.', tag: 'Económico' },
        ],
        bullets: ['Revisa si tu póliza de salud ya incluye dental básico.', 'Hay opciones con consultas incluidas y tratamientos a precio reducido.'],
      },
      {
        id: 'comparador',
        label: 'Comparador',
        intro: 'Diferencias orientativas entre niveles de cobertura dental.',
        columns: ['Básico', 'Intermedio', 'Completo'],
        rows: [
          { label: 'Revisiones y limpiezas', values: [yes, yes, yes] },
          { label: 'Empastes y endodoncias', values: ['Copago', 'Copago reducido', yes] },
          { label: 'Ortodoncia', values: ['No', 'Descuento', medium] },
          { label: 'Implantes', values: ['No', 'Descuento', 'Descuento mayor'] },
          { label: 'Urgencias dentales', values: [yes, yes, yes] },
        ],
      },
      {
        id: 'consejos',
        label: 'Consejos',
        intro: 'Lo que conviene saber antes de elegir un seguro dental.',
        advice: [
          { title: 'Revisa si ya tienes dental incluido', desc: 'Muchas pólizas de salud incluyen un cuadro dental básico. Antes de contratar por separado, verifica lo que ya tienes.' },
          { title: 'Compara tratamientos, no solo cuotas', desc: 'Lo importante es qué tratamientos están incluidos y cuáles tienen copago. Las revisiones suelen ser gratuitas en todos los niveles.' },
          { title: 'Pregunta por ortodoncia e implantes', desc: 'Estos tratamientos suelen tener descuentos o copagos especiales. Si los necesitas, asegúrate de que están contemplados.' },
        ],
      },
    ],
  },
  mascotas: {
    tabs: [
      {
        id: 'modalidades',
        label: 'Modalidades',
        intro: 'Responsabilidad civil, asistencia veterinaria o ambas. Tu elección depende del uso.',
        cards: [
          { title: 'Veterinaria', desc: 'Centrado en asistencia veterinaria, consultas, urgencias y tratamientos. Ideal si buscas cubrir gastos vet.', tag: 'Cuidado' },
          { title: 'Responsabilidad civil', desc: 'Cubre daños que tu mascota pueda causar a terceros. Obligatorio para algunas razas o municipios.', tag: 'Obligatorio' },
          { title: 'Mixto', desc: 'Combina veterinaria y RC. El equilibrio más habitual para quienes quieren protección completa.', tag: 'Recomendado' },
        ],
        bullets: ['Los opcionales económicos pueden cambiar bastante.', 'Conviene revisar si la RC es principal u opcional.'],
      },
      {
        id: 'comparador',
        label: 'Comparador',
        intro: 'Visión general orientativa entre tipos de cobertura para mascotas.',
        columns: ['Veterinaria', 'Mixto', 'RC reforzada'],
        rows: [
          { label: 'Asistencia veterinaria', values: [yes, yes, medium] },
          { label: 'Responsabilidad civil', values: ['No siempre', medium, yes] },
          { label: 'Opcionales útiles', values: [medium, yes, medium] },
          { label: 'Encaje con obligaciones legales', values: ['No siempre', medium, yes] },
        ],
      },
      {
        id: 'consejos',
        label: 'Consejos',
        intro: 'Lo más importante antes de elegir un seguro para tu mascota.',
        advice: [
          { title: '¿RC obligatoria?', desc: 'Algunas razas y municipios exigen responsabilidad civil obligatoria. Verifica la normativa de tu zona antes de elegir.' },
          { title: 'Veterinaria vs. RC', desc: 'No es lo mismo cubrir gastos de veterinario que cubrir daños a terceros. Decide qué necesitas primero.' },
          { title: 'Opcionales que merecen la pena', desc: 'Asistencia en viaje, robo/extravío y sacrificio necesario son complementos que pueden marcar diferencia.' },
        ],
      },
    ],
  },
  accidentes: {
    tabs: [
      {
        id: 'modalidades',
        label: 'Modalidades',
        intro: 'El seguro de accidentes cubre situaciones imprevistas. No es lo mismo que vida.',
        cards: [
          { title: 'Individual', desc: 'Protección personal ante accidentes que provoquen invalidez, fallecimiento o gastos médicos derivados.', tag: 'Personal' },
          { title: 'Familiar', desc: 'Extensión de la cobertura a tu núcleo familiar. Especialmente útil con hijos menores o actividades deportivas.', tag: 'Para familias' },
          { title: 'Profesional', desc: 'Orientado a autónomos o profesionales con riesgo laboral específico. Complemento al régimen de la Seguridad Social.', tag: 'Profesional' },
        ],
        bullets: ['Conviene diferenciarlo de un seguro de vida.', 'El capital y las garantías cambian según el enfoque.'],
      },
      {
        id: 'comparador',
        label: 'Comparador',
        intro: 'Comparativa orientativa entre niveles de protección ante accidentes.',
        columns: ['Básico', 'Intermedio', 'Reforzado'],
        rows: [
          { label: 'Fallecimiento por accidente', values: [yes, yes, yes] },
          { label: 'Invalidez permanente', values: [yes, yes, yes] },
          { label: 'Gastos médicos', values: ['Limitados', medium, 'Ampliados'] },
          { label: 'Indemnización diaria por hospitalización', values: ['No', medium, yes] },
        ],
      },
      {
        id: 'consejos',
        label: 'Consejos',
        intro: 'Lo que conviene saber sobre seguros de accidentes.',
        advice: [
          { title: 'No lo confundas con vida', desc: 'El seguro de accidentes solo cubre fallecimiento o invalidez por accidente, no por enfermedad. Son productos distintos.' },
          { title: 'Revisa el capital de invalidez', desc: 'Es la garantía más utilizada. Asegúrate de que el capital sea suficiente para cubrir un cambio de vida importante.' },
          { title: 'Comprueba los gastos médicos', desc: 'Algunos incluyen gastos médicos por accidente. Si no tienes seguro de salud, puede ser un complemento importante.' },
        ],
      },
    ],
  },
  hospitalizacion: {
    tabs: [
      {
        id: 'modalidades',
        label: 'Modalidades',
        intro: 'Seguro de hospitalización: cobertura económica diaria durante un ingreso.',
        cards: [
          { title: 'Indemnización diaria', desc: 'Recibes una cantidad fija por cada día de ingreso hospitalario. Tú decides en qué gastarlo.', tag: 'Más habitual' },
          { title: 'Con intervención quirúrgica', desc: 'Incluye también indemnización por intervenciones quirúrgicas, no solo por ingreso.', tag: 'Más completo' },
          { title: 'Complemento a salud', desc: 'Ideal como refuerzo si ya tienes un seguro de salud y quieres cubrir el impacto económico de un ingreso.', tag: 'Complementario' },
        ],
        bullets: ['No sustituye al seguro de salud, lo complementa.', 'La indemnización es libre: la usas como necesites.'],
      },
      {
        id: 'comparador',
        label: 'Comparador',
        intro: 'Diferencias generales entre niveles de cobertura por hospitalización.',
        columns: ['Básico', 'Intermedio', 'Reforzado'],
        rows: [
          { label: 'Indemnización diaria por ingreso', values: [yes, yes, yes] },
          { label: 'Intervención quirúrgica', values: ['No', medium, yes] },
          { label: 'Ingreso por accidente y enfermedad', values: ['Solo accidente', yes, yes] },
          { label: 'Capital máximo', values: ['Básico', 'Medio', 'Amplio'] },
        ],
      },
      {
        id: 'consejos',
        label: 'Consejos',
        intro: 'Lo que conviene entender sobre el seguro de hospitalización.',
        advice: [
          { title: 'No es un seguro de salud', desc: 'La hospitalización no cubre consultas ni tratamientos. Es una indemnización diaria que recibes por estar ingresado.' },
          { title: 'Ideal como complemento', desc: 'Si ya tienes seguro de salud, la hospitalización cubre el impacto económico de un ingreso: desplazamientos, cuidadores, pérdida de ingresos.' },
          { title: 'Revisa si cubre enfermedad o solo accidente', desc: 'Algunas modalidades solo cubren ingreso por accidente. Si quieres cobertura completa, revisa que incluya enfermedad.' },
        ],
      },
    ],
  },
  decesos: {
    tabs: [
      {
        id: 'modalidades',
        label: 'Modalidades',
        intro: 'El seguro de decesos cubre los gastos y gestiones derivados del fallecimiento.',
        cards: [
          { title: 'Prima nivelada', desc: 'Pagas siempre la misma cuota. Más cara al principio, pero estable durante toda la vida de la póliza.', tag: 'Estable' },
          { title: 'Prima natural', desc: 'La cuota sube con la edad. Más barata al principio, pero puede encarecerse con el tiempo.', tag: 'Más económica al inicio' },
          { title: 'Familiar / individual', desc: 'Puedes asegurar también a tu pareja, hijos o padres. Muchas familias optan por cobertura conjunta.', tag: 'Flexible' },
        ],
        bullets: ['Conviene decidir entre prima nivelada y natural según tu edad.', 'Los servicios adicionales (asistencia jurídica, en viaje) pueden marcar la diferencia.'],
      },
      {
        id: 'comparador',
        label: 'Comparador',
        intro: 'Diferencias generales entre tipos de póliza de decesos.',
        columns: ['Básico', 'Estándar', 'Completo'],
        rows: [
          { label: 'Servicio funerario completo', values: [yes, yes, yes] },
          { label: 'Tramitación administrativa', values: ['Parcial', yes, yes] },
          { label: 'Asistencia en viaje por fallecimiento', values: ['No', medium, yes] },
          { label: 'Asistencia jurídica familiar', values: ['No', 'No siempre', yes] },
          { label: 'Servicios adicionales (limpieza, manutención)', values: ['No', medium, yes] },
        ],
      },
      {
        id: 'consejos',
        label: 'Consejos',
        intro: 'Lo que conviene entender sobre el seguro de decesos.',
        advice: [
          { title: 'Prima nivelada vs. natural', desc: 'Si contratas joven, la nivelada compensa a largo plazo. Si contratas con más edad, la natural puede ser más práctica inicialmente.' },
          { title: 'Servicios que alivian gestiones', desc: 'Lo más valorado no siempre es el precio, sino los servicios que alivian trámites en un momento difícil: gestiones, desplazamientos, papeles.' },
          { title: 'Revisa los extras', desc: 'Asistencia en viaje por fallecimiento, limpieza del hogar, asistencia jurídica... Son servicios que hacen la diferencia real.' },
        ],
      },
    ],
  },
  viaje: {
    tabs: [
      {
        id: 'modalidades',
        label: 'Modalidades',
        intro: 'El tipo de viaje determina la modalidad que más te conviene.',
        cards: [
          { title: 'Viaje puntual', desc: 'Para un viaje concreto con fechas definidas. Se adapta al destino y duración del viaje.', tag: 'Más habitual' },
          { title: 'Multiviaje / Frecuente', desc: 'Si viajas varias veces al año, una póliza anual multiviaje suele salir más rentable.', tag: 'Viajeros frecuentes' },
          { title: 'Estudios o larga estancia', desc: 'Para estancias largas, Erasmus, prácticas o trabajo temporal en el extranjero.', tag: 'Especializado' },
        ],
        bullets: ['No es lo mismo un viaje puntual que estudios o multiviaje.', 'La anulación y el límite médico no siempre vienen igual.'],
      },
      {
        id: 'comparador',
        label: 'Comparador',
        intro: 'Comparativa orientativa entre tipos de seguro de viaje.',
        columns: ['Escapada', 'Frecuente', 'Especializado'],
        rows: [
          { label: 'Asistencia médica en viaje', values: [yes, yes, yes] },
          { label: 'Anulación', values: ['No siempre', medium, medium] },
          { label: 'Límite médico', values: ['Variable', 'Medio', 'Más amplio'] },
          { label: 'Equipaje o interrupción', values: ['No siempre', medium, yes] },
        ],
      },
      {
        id: 'consejos',
        label: 'Consejos',
        intro: 'Lo que conviene tener claro antes de contratar un seguro de viaje.',
        advice: [
          { title: 'Contrata antes de salir', desc: 'La anulación solo tiene sentido si la contratas antes de que surja el motivo de cancelación. Hazlo al reservar.' },
          { title: 'Mira el límite médico', desc: 'Fuera de la UE, la sanidad puede ser muy cara. Un límite médico bajo puede dejar gastos importantes sin cubrir.' },
          { title: 'Estudios y larga estancia', desc: 'Si vas a estar más de 30 días, necesitas una modalidad específica. Los seguros de viaje estándar no suelen cubrir estancias largas.' },
        ],
      },
    ],
  },
};
