import internacionIcon from '/logos/internacion.svg'
import clipboardIcon   from '/logos/saludCheck.svg'
import umbrellaIcon    from '/logos/cobertura.svg'
import celularIcon     from '/logos/celular.svg'

export const advantages = [
  {
    icon: internacionIcon,
    title: 'Sumá reintegros',
    subtitle: 'por prótesis e internación'
  },
  {
    icon: clipboardIcon,
    title: 'Sin exámenes médicos',
    subtitle: ''
  },
  {
    icon: umbrellaIcon,
    title: 'Cobertura desde',
    subtitle: 'los 18 años'
  },
  {
    icon: celularIcon,
    title: 'Todo on line,',
    subtitle: 'incluso tu póliza'
  }
]

export const assistanceData = [
  {
    id: 'atencion',
    title: 'Atención cubierta',
    items: [
      'Médico a domicilio',
      'Reintegros en farmacias todos los meses',
      'Sesiones de psicología virtual o presencial',
      {
        subtitle: 'Atención odontológica',
        description: `Atención ante urgencias odontológicas, incluyendo radiografías (Periapicales y Coronales), Endodoncia (Tratamiento de Conducto), Operatoria Dental (Obturación simple compuesta y compleja), Periodoncia (Tratamiento gingivitis), Cirugías: dientes (permanentes/temporales); (radiculares/fracturados), Limpieza.`
      },
      {
        subtitle: 'Asistencia nutricional',
        description: `Con planes orientativos de alimentación saludable indicando calorías recomendadas en cada comida, información práctica de recetas clásicas adaptadas a las distintas patologías (por ejemplo, celiaquía y diabetes) y asesoramiento sobre productos disponibles en el mercado para cada caso.`
      },
      {
        subtitle: 'Alquiler de aparatos ortopédicos',
        description: '' // si hay texto, complétalo aquí
      }
    ]
  },
  {
    id: 'examenes',
    title: 'Exámenes',
    items: [
      {
        subtitle: 'Consultas médicas de cualquier especialidad',
        description: `Con especialistas como Kinesiología, Dermatología, Gastroenterología, Nutrición, Oftalmología, Psicología, Otorrinolaringología, Odontología, Nefrología, Neurología, Neumología, Endocrinología, Cardiología, Traumatología, Reumatología, Cirugía General y Hepatología.`
      },
      {
        subtitle: 'Chequeos preventivos',
        description: `Que incluye electrocardiograma, hemograma y análisis de orina completo, RX de tórax, ecografía abdominal y ecografía Doppler. Control médico anual por prevención/control con un especialista en estudios de:`,
        list: [
          'Endoscopia',
          'Colonoscopia',
          'Examen prostático',
          'PET / CT (Estudio de Cáncer)'
        ]
      },
      {
        subtitle: 'Estudios de laboratorio',
        description: `Vas a poder realizarte estudios de laboratorio, hemograma y análisis de orina completo, entre otros.`
      }
    ]
  },
  {
    id: 'telemedicina',
    title: 'Telemedicina',
    items: [
      {
        subtitle: 'Consultas médicas para vos y tu familia',
        description: `Te sumamos el más completo servicio de telemedicina para vos y para tu grupo familiar, las 24 hs, los 365 días del año.`
      },
      {
        subtitle: 'Atención on line las 24 hs.',
        description: `Sin límite de llamados.`
      },
      {
        subtitle: 'Clínica médica y pediatría',
        description: `Ante una duda, mejor acudir rápidamente antes de salir de casa.`
      },
      {
        subtitle: 'Recetas y órdenes de estudios totalmente digital',
        description: `Con registro de historia clínica y derivación a diferentes especialidades.`
      }
    ]
  }
];
