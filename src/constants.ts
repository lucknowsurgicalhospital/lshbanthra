import { 
  Stethoscope, 
  Activity, 
  Baby, 
  Brain, 
  Bone, 
  HeartPulse, 
  ShieldCheck, 
  Clock, 
  Truck, 
  FlaskConical, 
  Zap, 
  Thermometer,
  Microscope,
  Syringe,
  Pill
} from 'lucide-react';

export const SERVICES = [
  {
    id: 'general-surgery',
    title: 'General Surgery',
    description: 'Advanced surgical procedures with minimally invasive techniques for faster recovery.',
    icon: Stethoscope,
    details: 'Our surgical department is equipped with state-of-the-art operation theaters and experienced surgeons specializing in abdominal, thyroid, and soft tissue surgeries.'
  },
  {
    id: 'general-medicine',
    title: 'General Medicine',
    description: 'Comprehensive primary care and management of chronic health conditions.',
    icon: Activity,
    details: 'From routine check-ups to managing complex internal diseases, our physicians provide personalized care for all age groups.'
  },
  {
    id: 'ob-gyn',
    title: 'Obstetrics and Gynecology',
    description: 'Specialized care for women throughout all stages of life, including pregnancy and childbirth.',
    icon: HeartPulse,
    details: 'Comprehensive maternity services, prenatal care, and treatment for gynecological disorders in a supportive environment.'
  },
  {
    id: 'orthopedics',
    title: 'Orthopedics',
    description: 'Expert care for bone, joint, and muscle conditions, including trauma and joint replacements.',
    icon: Bone,
    details: 'Treatment for fractures, sports injuries, arthritis, and spinal disorders using modern orthopedic techniques.'
  },
  {
    id: 'neurosurgery',
    title: 'Neurosurgery',
    description: 'Advanced treatment for disorders of the brain, spine, and nervous system.',
    icon: Brain,
    details: 'Specialized surgical interventions for brain tumors, spinal injuries, and neurological trauma.'
  },
  {
    id: 'pediatrics',
    title: 'Pediatrics',
    description: 'Compassionate healthcare for infants, children, and adolescents.',
    icon: Baby,
    details: 'Dedicated pediatric care including vaccinations, growth monitoring, and treatment for childhood illnesses.'
  }
];

export const FACILITIES = [
  {
    title: 'Digital X-Ray',
    description: 'High-resolution imaging for accurate diagnosis with minimal radiation exposure.',
    icon: Zap
  },
  {
    title: 'ECG',
    description: 'Advanced cardiac monitoring to assess heart health and detect abnormalities.',
    icon: Activity
  },
  {
    title: 'Physiotherapy',
    description: 'Professional rehabilitation services to restore movement and function.',
    icon: Thermometer
  },
  {
    title: '24 Hour Pharmacy',
    description: 'Round-the-clock access to essential medicines and healthcare products.',
    icon: Pill
  },
  {
    title: '24 Hour Laboratory',
    description: 'Fully automated diagnostic lab providing rapid and precise test results.',
    icon: Microscope
  }
];

export const INSURANCE_PARTNERS = [
  'HDFC ERGO',
  'TATA AIG',
  'ICICI Lombard',
  'Niva Bupa',
  'Care Health',
  'FHPL',
  'Paramount TPA',
  'SBI General',
  'Cholamadalam MS',
  'Volo Health Insurance',
  'Pandit Deen Dayal Upadhyay Cashless Treatment Scheme',
  'Safeway TPA',
  'Vidal Health',
  'Heritage TPA'
];

export const FAQS = [
  {
    question: 'How do I book an appointment?',
    answer: 'You can book an appointment through our website\'s appointment page, by calling us at 9555255348, or by visiting the hospital directly.'
  },
  {
    question: 'Do you provide cashless treatment?',
    answer: 'Yes, we are empaneled with major insurance companies and TPAs to provide cashless treatment facilities to eligible patients.'
  },
  {
    question: 'Is Ayushman Bharat scheme available?',
    answer: 'Yes, Lucknow Surgical Hospital is empaneled under the Ayushman Bharat (PM-JAY) scheme.'
  },
  {
    question: 'What are the visiting hours?',
    answer: 'General visiting hours are from 10:00 AM to 1:00 PM and 5:00 PM to 7:00 PM. However, emergency services are available 24/7.'
  }
];
