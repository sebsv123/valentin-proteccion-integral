export type CompareTab = {
  id: string;
  label: string;
  intro?: string;
  columns?: string[];
  rows?: { label: string; values: boolean[] | string[] }[];
  bullets?: string[];
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
        bullets: [
          'Hay opciones más ambulatorias y otras más completas con hospitalización.',
          'El copago, el reembolso y la libertad de elección no siempre vienen igual.',
          'Conviene ordenar prioridades antes de mirar solo la cuota.',
        ],
      },
      {
        id: 'comparador',
        label: 'Comparador',
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
        bullets: [
          'Piensa primero en el uso real que harás del seguro.',
          'Valora si necesitas hospitalización o una solución más ambulatoria.',
          'Si quieres libertad de elección, revisa bien cómo funciona el reembolso.',
        ],
      },
      {
        id: 'preguntas',
        label: 'Tus preguntas',
        bullets: [
          '¿Buscas una opción familiar, senior, con copago o sin copago?',
          '¿Quieres red médica cerrada o mayor libertad de elección?',
          '¿Necesitas cobertura fuera de España?',
        ],
      },
    ],
  },
  vida: {
    tabs: [
      { id: 'modalidades', label: 'Modalidades', bullets: ['Protección familiar, hipoteca o deuda y necesidades ligadas a incapacidad.', 'No todas las soluciones de protección personal cubren el mismo riesgo.', 'Conviene separar VIDA de productos centrados en accidente.'] },
      { id: 'comparador', label: 'Comparador', columns: ['Base', 'Familiar', 'Protección ampliada'], rows: [
        { label: 'Cobertura principal por fallecimiento', values: [yes, yes, yes] },
        { label: 'Finalidad hipoteca o deuda', values: [medium, medium, medium] },
        { label: 'Incapacidad', values: ['No siempre', medium, yes] },
        { label: 'Capital más amplio', values: ['Básico', 'Medio', 'Amplio'] },
        { label: 'Enfoque distinto a accidente', values: [yes, yes, yes] },
      ] },
      { id: 'consejos', label: 'Consejos', bullets: ['Define si quieres proteger a tu familia, una deuda o ambas cosas.', 'No elijas solo capital: revisa también duración, incapacidad y finalidad.', 'Conviene ordenar prioridades antes de comparar.'] },
    ],
  },
  mascotas: {
    tabs: [
      { id: 'modalidades', label: 'Modalidades', bullets: ['Hay modalidades más centradas en asistencia veterinaria y otras en responsabilidad civil.', 'Los opcionales y los límites económicos pueden cambiar bastante.', 'Conviene revisar si la RC es principal u opcional.'] },
      { id: 'comparador', label: 'Comparador', columns: ['Veterinaria', 'Mixto', 'RC reforzada'], rows: [
        { label: 'Asistencia veterinaria', values: [yes, yes, medium] },
        { label: 'Responsabilidad civil', values: ['No siempre', medium, yes] },
        { label: 'Opcionales útiles', values: [medium, yes, medium] },
        { label: 'Encaje con obligaciones legales', values: ['No siempre', medium, yes] },
      ] },
      { id: 'asistencia', label: 'Asistencia', bullets: ['Te ayudamos a ver si te interesa más veterinaria, RC o un equilibrio entre ambas.', 'Si tienes dudas sobre límites o encaje legal, lo aterrizamos contigo.'] },
    ],
  },
  viaje: {
    tabs: [
      { id: 'modalidades', label: 'Modalidades', bullets: ['No es lo mismo un viaje puntual que estudios, multiviaje o escapadas frecuentes.', 'La anulación y el límite médico no siempre vienen igual.', 'Conviene elegir según destino, duración y tipo de viaje.'] },
      { id: 'comparador', label: 'Comparador', columns: ['Escapada', 'Frecuente', 'Especializado'], rows: [
        { label: 'Asistencia médica en viaje', values: [yes, yes, yes] },
        { label: 'Anulación', values: ['No siempre', medium, medium] },
        { label: 'Límite médico', values: ['Variable', 'Medio', 'Más amplio'] },
        { label: 'Equipaje o interrupción', values: ['No siempre', medium, yes] },
      ] },
      { id: 'consejos', label: 'Consejos', bullets: ['Revisa si quieres cubrir anulación antes de contratar el viaje.', 'Mira el límite médico con más atención si sales fuera de España.', 'Estudios, crucero o multiviaje merecen una modalidad específica.'] },
    ],
  },
};
