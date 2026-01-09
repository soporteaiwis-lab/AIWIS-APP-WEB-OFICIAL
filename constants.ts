import { ServicePhase, Product, Client, PortfolioItem, InnovationProject, Technology } from './types';

export const COMPANY_INFO = {
  name: "AIWIS",
  tagline: "Arquitectos de la Evolución Digital",
  ceo: "Armin Wildo Salazar San Martín",
  philosophy: "Innovar y evolucionar sin miedos. La revolución digital sin riesgos es evolución.",
  subPhilosophy: "IA con Empatía y Pedagogía: Acercamos la Inteligencia Artificial a tu empresa de forma amigable y humana.",
  description: "AIWIS es una empresa de tecnología e innovación orientada a democratizar y potenciar el uso de la Inteligencia Artificial (IA).",
  websites: ["www.aiwis.cl"],
  contact: {
    phone: "+56 9 3958 0988",
    email: "soporte.aiwis@gmail.com",
    whatsapp: "https://wa.me/56939580988"
  }
};

export const CLIENTS: Client[] = [
  { name: "AFRI", url: "https://www.afri.cl", initials: "AF" },
  { name: "ADA", url: "https://www.ada.cl", initials: "AD" },
  { name: "SimpleData", url: "https://www.simpledata.cl", initials: "SD" },
  { name: "UACh", url: "https://www.uach.cl", initials: "UA" },
  { name: "Agile Scrum", url: "https://www.agile-scrum.cl", initials: "AS" }
];

export const CONSULTING_PHASES: ServicePhase[] = [
  {
    id: 1,
    title: "Fase 1: Adopción",
    subtitle: "Desmitificación & Pedagogía",
    description: "Consultoría inicial centrada en la empatía. Identificamos puntos de dolor y educamos al equipo para perder el miedo a la tecnología.",
    iconName: "Zap"
  },
  {
    id: 2,
    title: "Fase 2: Continuidad",
    subtitle: "Vibe Coding & Herramientas",
    description: "Formación técnica avanzada. Implementación de 'Vibe Coding' y asistentes virtuales para que el equipo se enfoque en la lógica y creatividad.",
    iconName: "Code"
  },
  {
    id: 3,
    title: "Fase 3: Socio Estratégico",
    subtitle: "Co-Desarrollo",
    description: "Desarrollo de proyectos complejos en conjunto. AIWIS actúa como el brazo de innovación constante para escalar la oferta comercial.",
    iconName: "Handshake"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "armonia",
    title: "Ecosistema ARMONÍA",
    category: "Música y Entretenimiento",
    description: "Plataforma diseñada para evitar la obsolescencia de productores y músicos. Fusionamos la creatividad humana con algoritmos de composición y análisis acústico avanzado.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2670&auto=format&fit=crop",
    link: "https://copy-of-armonia-hub-v17-89422266816.us-west1.run.app/",
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
    description: "Estudio de Grabación Digital Educativo. Democratizamos el acceso a herramientas de producción de nivel profesional para colegios y liceos.",
    image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=2670&auto=format&fit=crop",
    link: "https://edustudio-modular-89422266816.us-west1.run.app/",
    features: [
      { name: "Ecosistema de Clases", description: "Herramientas para teoría musical y composición." },
      { name: "Acceso Democrático", description: "Tecnología de estudio profesional en el aula." }
    ]
  },
  {
    id: "corporate",
    title: "Soluciones Corporativas",
    category: "Alta Ingeniería & Legacy",
    description: "Soluciones de misión crítica para banca y grandes empresas. Modernización de sistemas legacy (COBOL) mediante agentes de IA autónomos.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
    link: "https://simpledata-corporate-portal-89422266816.us-west1.run.app/",
    features: [
      { name: "Apps Internas", description: "Centralización operativa y gestión de proyectos." },
      { name: "Multi-Agente COBOL GenAI", description: "Agentes para generar, mantener y migrar código COBOL legacy." }
    ]
  }
];

// LISTADO MAESTRO DE PROYECTOS DE INNOVACIÓN (Netflix Style Data)
export const INNOVATION_PROJECTS: InnovationProject[] = [
  {
    id: "morpho",
    title: "Morpho Stereo",
    subtitle: "DSP Audio Transformer",
    description: "Prototipo de procesamiento de señal digital (DSP) que transforma ondas de audio mono a estéreo espacial mediante IA.",
    category: "Audio",
    badge: "Prototype",
    image: "https://images.unsplash.com/photo-1558486012-817176f84c6d?q=80&w=2570&auto=format&fit=crop", // Sound waves
    url: "https://morphostereo-dsp-prototype-89422266816.us-west1.run.app"
  },
  {
    id: "chord-ia",
    title: "Chord IA",
    subtitle: "Real-time Harmony Analysis",
    description: "Analiza canciones y genera armonía de acordes en tiempo real. Herramienta esencial para músicos y productores modernos.",
    category: "Audio",
    badge: "New",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384ebd?q=80&w=2670&auto=format&fit=crop", // Musician/Studio
    url: "https://copy-of-chord-ia-89422266816.us-west1.run.app"
  },
  {
    id: "aiwis-master",
    title: "MasterAcademy Phase 2",
    subtitle: "Corporate Adoption Portal",
    description: "Plataforma central de AIWIS para la capacitación y adopción corporativa de Inteligencia Artificial.",
    category: "Education",
    badge: "Beta",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop", // Matrix/Code
    url: "https://aiwis-training-portal-phase-2-ai-adoption-89422266816.us-west1.run.app"
  },
  {
    id: "armonia-platform",
    title: "Armonía Platform",
    subtitle: "Music Industry Hub",
    description: "Potenciando a músicos, sonidistas e iluminadores para integrar IA en sus flujos de trabajo creativos.",
    category: "Research",
    badge: "Vision",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2670&auto=format&fit=crop", // Piano/Studio
    url: "https://copy-of-armonia-hub-v17-89422266816.us-west1.run.app"
  },
  {
    id: "edu-studio",
    title: "Edu Studio Labs",
    subtitle: "Interactive Music Education",
    description: "Estudio de grabación virtual para colegios. Permite a profesores y alumnos realizar clases de música interactivas.",
    category: "Education",
    badge: "New",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2670&auto=format&fit=crop", // Club/Music
    url: "https://edustudio-modular-89422266816.us-west1.run.app"
  },
  {
    id: "sd-corp",
    title: "SimpleData Space",
    subtitle: "Corporate Project Manager",
    description: "Prototipo de gestión de proyectos corporativos impulsado por IA para SimpleData.",
    category: "Corporate",
    badge: "Prototype",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop", // Modern Office
    url: "https://sd-spaceproyectos-89422266816.us-west1.run.app"
  },
  {
    id: "academy-dev",
    title: "Academy Developer",
    subtitle: "Portal Builder",
    description: "Plataforma meta-herramienta para la creación automatizada de portales corporativos de capacitación.",
    category: "Development",
    badge: "Research",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop", // Coding screen
    url: "https://aiwis-master-portals-ia-89422266816.us-west1.run.app"
  },
  {
    id: "afri-portal",
    title: "AFRI Portal",
    subtitle: "Client Academy",
    description: "Portal dedicado para la adopción de IA corporativa del cliente AFRI.",
    category: "Corporate",
    badge: "Beta",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop", // Business team
    url: "https://afri-portal-89422266816.us-west1.run.app"
  },
  {
    id: "ada-portal",
    title: "ADA Academy",
    subtitle: "Client Academy",
    description: "Portal dedicado para la adopción de IA corporativa del cliente ADA.",
    category: "Corporate",
    badge: "Beta",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop", // Meeting
    url: "https://ada-ia-portal-89422266816.us-west1.run.app"
  },
  {
    id: "sd-portal",
    title: "SimpleData Academy",
    subtitle: "Client Academy",
    description: "Portal de capacitación y adopción tecnológica para SimpleData.",
    category: "Corporate",
    badge: "Beta",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop", // Skyscrappers
    url: "https://simpledata-portal-89422266816.us-west1.run.app"
  }
];


export const TECHNOLOGIES: Technology[] = [
  { id: "google", name: "Google Integrations", category: "Ecosistema", icon: "Cloud", description: "Integración nativa con Google Cloud y Workspace." },
  { id: "gemini", name: "Gemini AI", category: "Inteligencia", icon: "Brain", description: "Potencia de modelos multimodales 1.5 y 2.0." },
  { id: "data", name: "Data Management", category: "Infraestructura", icon: "Database", description: "Procesamiento y análisis de datos a gran escala." },
  { id: "agents", name: "Autonomous Agents", category: "Automatización", icon: "Bot", description: "Agentes inteligentes para tareas complejas." }
];

export const AI_SYSTEM_INSTRUCTION = `
You are the AI Assistant for AIWIS (Arquitectos de la Evolución Digital).
CEO: Armin Wildo Salazar San Martín.
Philosophy: "Innovar y evolucionar sin miedos. La revolución digital sin riesgos es evolución."
Core Value: "Empatía y Pedagogía". We explain AI simply, removing fear.
Mission: Democratize AI, enhance human talent, prevent obsolescence.

Clients: AFRI, ADA, SimpleData, UACh, Agile Scrum.

Services:
1. Consulting: 3 Phases (Adoption, Vibe Coding, Strategic Partner).
2. Armonía: Music ecosystem (Audio Lens, Chord AI, Drums Labs, Suno Labs Copilot).
3. Edu Labs: Educational recording studio for schools.
4. Corporate: Internal apps and COBOL GenAI Agents for banking/legacy.
5. Technology: Google Cloud, Gemini, Data Management.

Innovation Labs Projects:
- Morpho Stereo (DSP)
- Chord IA (Music Analysis)
- MasterAcademy (Training)
- Edu Studio Labs (Education)
- Academy Developer (Portal Builder)

Answer questions politely, professionally, and briefly in Spanish. Be empathetic and educational.
`;