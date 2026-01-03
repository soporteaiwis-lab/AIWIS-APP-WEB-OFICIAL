import { ServicePhase, Product } from './types';

export const COMPANY_INFO = {
  name: "AIWIS",
  tagline: "Arquitectos de la Evolución Digital",
  ceo: "Armin Wildo Salazar San Martín",
  philosophy: "Innovar y evolucionar sin miedos. La revolución digital sin riesgos es evolución.",
  description: "AIWIS es una empresa de tecnología e innovación orientada a democratizar y potenciar el uso de la Inteligencia Artificial (IA) en múltiples rubros y sectores productivos. Buscamos innovar en el día a día de las personas comunes y transformar oficios tradicionales.",
  websites: ["www.simpledata.cl", "www.aiwis.cl"]
};

export const CONSULTING_PHASES: ServicePhase[] = [
  {
    id: 1,
    title: "Fase 1: Adopción",
    subtitle: "Desmitificación",
    description: "Consultoría inicial para identificar puntos de dolor. Introducción a herramientas de IA generativa y capacitación básica para perder el miedo a la tecnología.",
    iconName: "Zap"
  },
  {
    id: 2,
    title: "Fase 2: Continuidad",
    subtitle: "Vibe Coding",
    description: "Formación técnica (Vibe Coding) para acelerar el desarrollo de software, permitiendo que el equipo se enfoque en la lógica de negocio y la creatividad.",
    iconName: "Code"
  },
  {
    id: 3,
    title: "Fase 3: Socio Estratégico",
    subtitle: "Proyectos Conjuntos",
    description: "Desarrollo de proyectos complejos en conjunto (Co-desarrollo). AIWIS actúa como el brazo de innovación constante para escalar la oferta comercial.",
    iconName: "Handshake"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "armonia",
    title: "Ecosistema ARMONÍA",
    category: "Música y Entretenimiento",
    description: "Plataforma diseñada para evitar la obsolescencia de productores y músicos, convirtiendo a la IA en una herramienta creativa indispensable.",
    image: "https://picsum.photos/800/600?grayscale",
    features: [
      { name: "Audio Lens", description: "Asistente experto en ingeniería de sonido." },
      { name: "Chord AI", description: "Detección y transcripción de armonías en tiempo real." },
      { name: "Drums Labs", description: "Módulo de percusión asistido por IA." },
      { name: "Suno Labs Copilot", description: "Simulador para crear maquetas antes de usar Suno." }
    ]
  },
  {
    id: "edulabs",
    title: "EDU LABS",
    category: "Transformación Educativa",
    description: "Estudio de Grabación Digital Educativo para revolucionar la educación artística en colegios y liceos.",
    image: "https://picsum.photos/800/601?grayscale",
    features: [
      { name: "Ecosistema de Clases", description: "Herramientas para teoría musical y composición." },
      { name: "Acceso Democrático", description: "Tecnología de estudio profesional en el aula." }
    ]
  },
  {
    id: "corporate",
    title: "Soluciones Corporativas",
    category: "Alta Ingeniería & Legacy",
    description: "Soluciones de alto nivel para el sector empresarial robusto y banca.",
    image: "https://picsum.photos/800/602?grayscale",
    features: [
      { name: "Apps Internas", description: "Centralización operativa y gestión de proyectos." },
      { name: "Multi-Agente COBOL GenAI", description: "Agentes para generar, mantener y migrar código COBOL legacy." }
    ]
  }
];

export const AI_SYSTEM_INSTRUCTION = `
You are the AI Assistant for AIWIS (Arquitectos de la Evolución Digital).
CEO: Armin Wildo Salazar San Martín.
Philosophy: "Innovar y evolucionar sin miedos. La revolución digital sin riesgos es evolución."
Mission: Democratize AI, enhance human talent, prevent obsolescence.

Services:
1. Consulting: 3 Phases (Adoption, Vibe Coding, Strategic Partner).
2. Armonía: Music ecosystem (Audio Lens, Chord AI, Drums Labs, Suno Labs Copilot).
3. Edu Labs: Educational recording studio for schools.
4. Corporate: Internal apps and COBOL GenAI Agents for banking/legacy.

Answer questions politely, professionally, and briefly in Spanish. Focus on innovation.
`;