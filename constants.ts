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

// 1. PRODUCTOS PROPIOS (PLATAFORMAS AIWIS - UPDATED PER SCREENSHOTS)
export const PRODUCTS: Product[] = [
  {
    id: "armonia",
    title: "ArmonIA 17",
    category: "Investigación Musical & Producción",
    description: "Plataforma de producción musical híbrida. No buscamos reemplazar al músico, sino evitar su obsolescencia mediante la co-creación. Un 'Copiloto' creativo que integra Suno, análisis espectral y baterías generativas para potenciar el talento humano.",
    image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2670&auto=format&fit=crop", // Abstract Audio Visualization to represent the DAW
    link: "https://copy-of-armonia-hub-v17-89422266816.us-west1.run.app/",
    features: [
      { name: "Suno Lab Copilot", description: "Interfaz de chat para ingeniería de prompts musicales." },
      { name: "Drum Lab", description: "Diseño de kits de batería y secuenciación rítmica visual." },
      { name: "Audio Lens", description: "Análisis de frecuencias y visión artificial aplicada al audio." },
      { name: "Filosofía Híbrida", description: "Herramientas de apoyo para que el músico componga y toque real." }
    ]
  },
  {
    id: "edulabs",
    title: "Edu Studio Labs",
    category: "Educación Musical 3.0",
    description: "Plataforma educativa única en su especie. Los alumnos cantan, tocan y componen usando la tecnología como puente. Un sistema progresivo en 3 niveles: Experimentar, Crear y Profesionalizar el talento joven.",
    image: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2670&auto=format&fit=crop", // Classroom/Music Tech
    link: "https://edustudio-modular-89422266816.us-west1.run.app/",
    features: [
      { name: "3 Niveles Evolutivos", description: "Explorer (Juego), Maker (Creación), Pro (Técnica)." },
      { name: "Cuaderno Digital", description: "Gestión de tareas y proyectos musicales por curso." },
      { name: "Editor Creativo", description: "Piano Roll, Secuenciador y Generador de Armonía." },
      { name: "Rúbricas Mineduc", description: "Evaluación automatizada alineada al currículum." }
    ]
  },
   {
    id: "academy-dev",
    title: "Academy Developer",
    category: "Infraestructura Corporativa",
    description: "Meta-plataforma para la creación automatizada de portales corporativos. Permite a grandes empresas desplegar sus propias academias de IA internas en tiempo récord.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop",
    link: "https://aiwis-master-portals-ia-89422266816.us-west1.run.app",
    features: [
        { name: "Generador de Portales", description: "Despliegue rápido de LMS corporativos." },
        { name: "Gestión de Contenidos", description: "Centralización de recursos formativos." }
    ]
  }
];

// 2. SOLUCIONES DE CLIENTES
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

// 3. INNOVATION LABS
export const INNOVATION_PROJECTS: InnovationProject[] = [
  {
    id: "armonia-platform",
    title: "ArmonIA Platform",
    subtitle: "Music Industry Hub",
    description: "El laboratorio central donde integramos los últimos modelos de audio generativo para potenciar a músicos, sonidistas e iluminadores.",
    category: "Research",
    badge: "Vision",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2670&auto=format&fit=crop", // Piano/Studio
    url: "https://copy-of-armonia-hub-v17-89422266816.us-west1.run.app"
  },
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
You are the AI Assistant for AIWIS.
Core Focus:
1. "ArmonIA 17": Hybrid music production platform. NOT replacing musicians, but empowering them. Tools: Suno Lab, Drum Lab, Audio Lens.
2. "Edu Studio Labs": Educational music platform with 3 levels: Explorer (Play), Maker (Create), Pro (Technical). Students sing, play, and compose real music assisted by AI.
3. Consulting: Empathy & Pedagogy.
`;