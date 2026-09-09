export type ForeignersLocale = 'es' | 'en';

export const foreignersContent = {
  es: {
    reviewItems: ['Modalidades sin copagos cuando el producto y el trámite lo requieren.', 'Certificado o documentación del producto tras la emisión.', 'Cobertura sanitaria privada y ámbito territorial.', 'Fechas y emisión revisadas según la aseguradora.'],
    faq: [
      { q: '¿Qué modalidad puede encajar con un trámite de estudios o residencia?', a: 'Depende del trámite y del producto. ASISA Health Students y ASISA Health Residents están descritos para situaciones migratorias distintas y sin copagos ni carencias; Residents Premium tiene carencias. La administración o el consulado toma la decisión final y la póliza o certificado fija las condiciones aplicables.' },
      { q: '¿Puedo contratarla solo con mi pasaporte?', a: 'Sí. Podemos tramitar la póliza con el pasaporte, aunque todavía no dispongas de NIE o TIE.' },
      { q: '¿Qué documentación recibiré para presentar en mi trámite?', a: 'Una vez emitida la póliza, recibirás el certificado del seguro y la documentación correspondiente para que puedas incorporarla a tu expediente.' },
      { q: '¿La póliza tiene copagos o periodos de carencia?', a: 'Depende del producto. Students y Residents figuran sin copagos ni carencias en el manual ASISA 2026; Residents Premium no tiene copagos, pero sí carencias. Confirmamos la modalidad y las condiciones que constan en la póliza o certificado.' },
      { q: '¿Puedo contratar el seguro antes de viajar a España?', a: 'Algunas modalidades pueden contratarse antes del viaje. Revisamos la fecha de efecto, el plazo de emisión y la documentación que necesitas con la aseguradora antes de contratar.' },
      { q: '¿Me ayudáis a elegir la opción adecuada para mi caso?', a: 'Sí. Revisamos contigo si se trata de estudios, residencia, renovación o llegada familiar y te explicamos la opción aseguradora que puede encajar con tu situación.' },
    ],
  },
  en: {
    reviewItems: ['No-copayment plans when the product and process require them.', 'Product certificate or documentation after issue.', 'Private healthcare cover and territorial scope.', 'Dates and issue timing checked with the insurer.'],
    process: [
      { title: 'Tell us about the process', copy: 'Tell us whether this is for studies, residence, renewal, family or a professional referral.' },
      { title: 'We review the requirements', copy: 'We organise what to check before arranging cover and avoid asking for sensitive documents at the first contact.' },
      { title: 'You receive clear guidance', copy: 'We explain the insurance option and next steps in direct language, with follow-up.' },
    ],
    professionalSteps: [
      { number: '01', title: 'You share the case', copy: 'We only need the minimum details and permission to make contact.' },
      { number: '02', title: 'We support the client', copy: 'We explain the insurance option and the documentation needed.' },
      { number: '03', title: 'We keep you informed', copy: 'You can follow progress without taking on the insurance work.' },
    ],
    professionalBenefits: [
      { title: 'You keep the client relationship', copy: 'We follow the case without interfering with your professional support.' },
      { title: 'We manage the insurance side', copy: 'We guide, arrange cover and answer insurance-related questions.' },
    ],
    faq: [
      { q: 'Which plan may fit a study or residence process in Spain?', a: 'It depends on the process and product. ASISA Health Students and ASISA Health Residents are described for different immigration situations and without co-payments or waiting periods; Residents Premium has waiting periods. The administration or consulate makes the final decision, and the policy or certificate sets the applicable conditions.' },
      { q: 'Can I arrange it with only my passport?', a: 'Yes. We can arrange the policy using your passport even if you do not yet have an NIE or TIE.' },
      { q: 'What documentation will I receive?', a: 'Once the policy is issued, you receive the insurance certificate and the relevant documentation for your application.' },
      { q: 'Does the policy have co-payments or waiting periods?', a: 'It depends on the product. Students and Residents are described without co-payments or waiting periods in the ASISA 2026 manual; Residents Premium has no co-payments but does have waiting periods. We confirm the product and the conditions shown in the policy or certificate.' },
      { q: 'Can I arrange the insurance before travelling to Spain?', a: 'Some plans can be arranged before travelling. We check the start date, issue timing and documents you need with the insurer before you buy.' },
      { q: 'Can you help me choose the right option?', a: 'Yes. We review whether your case involves studies, residence, renewal or family arrival and explain the option that may fit.' },
    ],
  },
} as const;
