import pagoIcon from '/logos/pago.svg';
import saludCheck from '/logos/saludCheck.svg';
import medicamentoIcon from '/logos/medicamento.svg';
import odontologiaIcon from '/logos/odolontologia.svg';
import laboratorioIcon from '/logos/laboratorio.svg';
import medicoIcon from '/logos/medico.svg';
import telemedicinaIcon from '/logos/telemedicina.svg';
import chequeosIcon from '/logos/checkeos-preventivos.svg';
export const highlights = [
  {
    icon: pagoIcon,
    bgColor: 'var(--color-price-bg)',         
    textColor: '#ffffff',                 
    title: 'Te pagamos los gastos que tu obra social no te cubre',
    bullets: [
      '¿Quién va a pagar los viáticos?',
      '¿Quién le paga a la niñera?',
      '¿Quién te cuida?'
    ]
  },
  {
    icon: saludCheck,
    bgColor: 'var(--color-highlight-light)',       
    textColor: 'var(--color-text-dark)',      
    title: 'Si no tenés cobertura de salud, nosotros te asistimos',
    subtitle: 'Ante una urgencia, tenemos prestadores que pueden ayudarte'
  }
];

export const services = [
  {
    icon: medicamentoIcon,
    title: 'Reintegro en farmacias',
    desc: '1 medicamento recetado al mes. Hasta $8000 cada uno.'
  },
  {
    icon: odontologiaIcon,
    title: 'Reintegro en Odontología',
    desc: '2 consultas o limpieza por año. Hasta $19.000 cada una.'
  },
  {
    icon: laboratorioIcon,
    title: 'Estudios de laboratorio',
    desc: '4 veces por año. Hasta $8000 cada uno.'
  },
  {
    icon: medicoIcon,
    title: 'Médico clínico a domicilio',
    desc: 'Hasta 6 visitas por año.'
  },
  {
    icon: telemedicinaIcon,
    title: 'Telemedicina para grupo familiar',
    desc: 'Atención 24hs online para consultas y recetas.'
  },
  {
    icon: chequeosIcon,
    title: 'Chequeos preventivos',
    desc: '2 veces al año. Hasta $29.000 cada uno.'
  }
];
