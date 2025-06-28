// src/data/hero.js
export const heroData = {
  badgeText: '¡Nueva protección!',
  saludText: 'Salud Integral',
  title: 'Respaldá tu economía ante un imprevisto de salud',
  subtitle:
    'Funciona como un complemento al sistema de salud público, obras sociales y prepagas y aporta un beneficio adicional para utilizarlo como necesites.',
  plan: {
    features: [
      'Plan individual',
      'Cobertura desde los 18 años',
      'Ingreso sin chequeo médico',
      'Contratación fácil y 100% online'
    ],
    priceMonth: '$5.185',
    priceDay: '$172,83',
    footerLabel: 'Hasta'
  },
  criticalItems: [
    {
      label: 'Enfermedades críticas',
      amount: '$1.750.000',
      tooltip:
        'Te pagamos hasta la suma asegurada en caso de primer diagnóstico de las siguientes enfermedades: cáncer o infarto de miocardio o derrame e infarto cerebral.'
    },
    {
      label: 'Cirugías',
      amount: '$1.750.000',
      tooltip:
        'Te pagamos hasta la suma asegurada si te sometés a una intervención quirúrgica como: visión, otorrinolaringológicas, mamas, cardiovasculares, en el aparato digestivo y urinario, obstétricas, óseas, dermis, reparadoras y bariátricas.'
    },
    {
      label: 'Trasplante de órganos',
      amount: '$3.500.000',
      tooltip:
        'Te pagamos hasta la suma asegurada si te sometés a alguno de los siguientes trasplantes de órganos: médula ósea, corazón, pulmón o bipulmón, hígado, páncreas, riñones y de córnea.'
    }
  ]
};
