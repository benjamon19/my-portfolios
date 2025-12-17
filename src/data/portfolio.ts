import { 
  FiMonitor, 
  FiServer, 
  FiCode, 
  FiDatabase, 
  FiLayout, 
  FiSmartphone 
} from 'react-icons/fi';

export const PROJECTS = [
  {
    id: 1,
    title: "CHOQUESTYLE ACADEMY",
    description: "Plataforma web de alto rendimiento para academia de artes marciales. Logró posicionamiento #1 en búsquedas locales (SEO orgánico) eliminando costos de publicidad. Arquitectura optimizada para carga instantánea.",
    image: "/images/choquestyle-preview.jpg", 
    stack: ["React", "Tailwind", "Vite", "SEO Strategy"],
    badges: ["LIVE PRODUCTION", "SEO #1"],
    links: {
      demo: "https://tudominio.com",
      repo: "https://github.com/tuusuario/repo" 
    }
  },
  {
    id: 2,
    title: "FLUTTER ADMIN SUITE",
    description: "Sistema de gestión administrativa de escritorio (Desktop). Digitalizó el flujo de reservas y control de asociados. Implementa autenticación robusta y lógica de negocio compleja para manejo de estados en tiempo real.",
    image: "/images/flutter-app.jpg",
    stack: ["Flutter", "Dart", "Firebase Auth", "NoSQL"],
    badges: ["DESKTOP APP", "B2B SOLUTION"],
    links: {
      repo: "https://github.com/tuusuario/repo"
    }
  },
  {
    id: 3,
    title: "LAVANDERÍA EL COBRE + INTRANET",
    description: "Ecosistema digital centralizado. Landing page de alta conversión integrada con una Intranet para gestión operativa (comandas y seguimiento). Diseño de arquitectura escalable preparada para módulos de terceros.",
    image: "/images/laundry-preview.jpg",
    stack: ["React", "Firebase Hosting", "Cloud Functions", "UI/UX"],
    badges: ["ARCHITECTURE", "FULL SYSTEM"],
    links: {
      demo: "https://tudominio-lavanderia.com"
    }
  }
];

export const SKILLS = [
  { name: "React / Next.js", level: "Advanced", color: "#61DAFB", icon: FiLayout },
  { name: "Python (Scripting)", level: "Advanced", color: "#3776AB", icon: FiCode },
  { name: "Flutter / Dart", level: "Intermediate", color: "#02569B", icon: FiSmartphone },
  { name: "Tailwind CSS", level: "Advanced", color: "#38B2AC", icon: FiMonitor },
  { name: "Firebase / SQL", level: "Intermediate", color: "#FFCA28", icon: FiDatabase },
  { name: "Node.js / APIs", level: "Intermediate", color: "#339933", icon: FiServer },
];

export const PERSONAL_INFO = {
  name: "BenjaDev",
  role: "Fullstack Developer",
  bio: "Full Stack Architect & Pixel Engineer. Transformando ideas complejas en experiencias digitales sólidas.",
  location: "Calama, Chile", 
  email: "tuemail@ejemplo.com",
  social: {
    github: "https://github.com/tuusuario",
    linkedin: "https://linkedin.com/in/tuusuario"
  }
};