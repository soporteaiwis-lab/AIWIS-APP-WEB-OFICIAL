import { ServicePhase, Product, Client, InnovationProject, Technology, ClientSolution } from './types';

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

// 1. PRODUCTOS PROPIOS (PLATAFORMAS AIWIS)
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
    id: "academy-dev",
    title: "Academy Developer",
    category: "Desarrollo",
    description: "Meta-plataforma para la creación automatizada de portales corporativos de capacitación. Genera entornos de aprendizaje a medida en minutos.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop",
    link: "https://aiwis-master-portals-ia-89422266816.us-west1.run.app",
    features: [
        { name: "Generador de Portales", description: "Despliegue rápido de LMS corporativos." },
        { name: "Integración de Contenidos", description: "Gestión centralizada de recursos." }
    ]
  }
];

// 2. SOLUCIONES DE CLIENTES (AGRUPADAS POR EMPRESA)
export const CLIENT_SOLUTIONS: ClientSolution[] = [
  {
    clientId: "simpledata",
    clientName: "SimpleData",
    description: "Soluciones corporativas para gestión de datos y proyectos.",
    apps: [
      {
        title: "SimpleData Academy",
        type: "Portal",
        url: "https://simpledata-portal-89422266816.us-west1.run.app",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
      },
      {
        title: "Space Proyectos",
        type: "App",
        url: "https://sd-spaceproyectos-89422266816.us-west1.run.app",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
      },
      {
        title: "Corporate Portal",
        type: "Dashboard",
        url: "https://simpledata-corporate-portal-89422266816.us-west1.run.app/",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop"
      }
    ]
  },
  {
    clientId: "afri",
    clientName: "AFRI",
    description: "Plataforma de capacitación y adopción tecnológica.",
    apps: [
      {
        title: "AFRI Portal Academy",
        type: "Portal",
        url: "https://afri-portal-89422266816.us-west1.run.app",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    clientId: "ada",
    clientName: "ADA",
    description: "Entorno digital para gestión y aprendizaje.",
    apps: [
      {
        title: "ADA Academy",
        type: "Portal",
        url: "https://ada-ia-portal-89422266816.us-west1.run.app",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
      }
    ]
  },
   {
    clientId: "aiwis-internal",
    clientName: "AIWIS Internal",
    description: "Herramientas de uso interno y capacitación propia.",
    apps: [
      {
        title: "MasterAcademy Phase 2",
        type: "Portal",
        url: "https://aiwis-training-portal-phase-2-ai-adoption-89422266816.us-west1.run.app",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop"
      }
    ]
  }
];

// 3. INNOVATION LABS (PROTOTIPOS & EXPERIMENTOS)
export const INNOVATION_PROJECTS: InnovationProject[] = [
  {
    id: "morpho",
    title: "Morpho Stereo",
    subtitle: "DSP Audio Transformer",
    description: "Prototipo DSP que transforma ondas mono a estéreo espacial mediante IA.",
    category: "Audio",
    badge: "Prototype",
    image: "https://images.unsplash.com/photo-1558486012-817176f84c6d?q=80&w=2570&auto=format&fit=crop", 
    url: "https://morphostereo-dsp-prototype-89422266816.us-west1.run.app"
  },
  {
    id: "chord-ia",
    title: "Chord IA",
    subtitle: "Real-time Harmony Analysis",
    description: "Analiza canciones y genera armonía de acordes en tiempo real.",
    category: "Audio",
    badge: "New",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384ebd?q=80&w=2670&auto=format&fit=crop",
    url: "https://copy-of-chord-ia-89422266816.us-west1.run.app"
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
... (Rest same as before)
`;