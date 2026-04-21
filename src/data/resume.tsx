import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Java } from "@/components/ui/svgs/java";
import { Globe, PenTool, Bot, Database, Code } from "lucide-react";
import { GitBranch, Github } from "lucide-react";


export const DATA = {
  name: "Dilan Gutierrez",
  initials: "DG",
  url: "http://localhost:3000",
  location: "Bogotá D.C, Colombia",
  locationLink: "https://www.google.com/maps/place/bogota",
  description:
    "Desarrollador Full Stack enfocado en construir aplicaciones web funcionales, escalables y orientadas a resolver problemas reales.",
  summary:
  "Soy desarrollador web con experiencia en la creación de aplicaciones, ecommerce y sistemas internos utilizando tecnologías como React, Next.js, Node.js y Laravel.\n\nHe trabajado en el desarrollo de soluciones digitales que optimizan procesos, mejoran la experiencia del usuario y aportan valor a nivel funcional y técnico dentro de los proyectos.\n\nTengo experiencia construyendo tanto frontend como backend, estructurando proyectos, organizando código y desarrollando funcionalidades basadas en requerimientos reales.\n\nHe participado en el desarrollo de interfaces claras y sistemas que facilitan la interacción del usuario, priorizando la usabilidad y el rendimiento.\n\nMe enfoco en desarrollar soluciones cada vez más estructuradas y escalables, aplicando buenas prácticas de desarrollo y arquitectura de software.",
  skills: {
    frontend: [
      { name: "JavaScript", icon: Typescript },
      { name: "React", icon: ReactLight },
      { name: "Next.js", icon: NextjsIconDark },
      {
        name: "Tailwind CSS",
        icon: () => (
          <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" className="w-5 h-5" />
        ),
      },
    ],

    backend: [
      { name: "Node.js", icon: Nodejs },
      {
        name: "Express",
        icon: () => (
          <img src="https://cdn.simpleicons.org/express/000000" className="w-5 h-5" />
        ),
      },
      {
        name: "Laravel",
        icon: () => (
          <img src="https://cdn.simpleicons.org/laravel/FF2D20" className="w-5 h-5" />
        ),
      },
      {
        name: "Spring Boot",
        icon: () => (
          <img src="https://cdn.simpleicons.org/springboot/6DB33F" className="w-5 h-5" />
        ),
      },
      { name: "PHP", icon: () => (<img src="https://cdn.simpleicons.org/php/777BB4" className="w-5 h-5" />) },
      { name: "Java", icon: Java },
    ],

    database: [
      { name: "SQL", icon: Database },
      { name: "PostgreSQL", icon: Postgresql },
    ],

    tools: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Github },
    ],

    extras: [
      { name: "SEO", icon: Globe },
      { name: "UI/UX", icon: PenTool },
      { name: "Automatización", icon: Bot },
    ],
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Inicio" },
  ],
  contact: {
    email: "dilansamugutierrez@gmail.com",
    tel: "+573202725499",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/dilanSamuGutierrez",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dilangutierrez/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Enviar correo",
        url: "mailto:dilansamugutierrez@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Pontificia Universidad Javeriana",
      href: "",
      badges: ["Prácticas"],
      location: "Bogotá, Colombia",
      title: "Practicante en Análisis y Desarrollo de Software",
      logoUrl: "/javeriana.jpg",
      start: "Mar 2025",
      end: "Sep 2025 (6 meses)",
      description:
        "Participé en el desarrollo de un sistema interno para la gestión de inventario de equipos tecnológicos, enfocado en mejorar la organización, control y trazabilidad de los activos. Implementé funcionalidades como registro, actualización, consulta y seguimiento de equipos, optimizando procesos y reduciendo errores manuales. Además, apoyé en el levantamiento de información e inventariado físico, y brindé soporte técnico en punto de atención al cliente, incluyendo instalación de software, configuración de equipos y resolución de incidencias. Tuve interacción directa con usuarios para entender sus necesidades y traducirlas en soluciones tecnológicas funcionales.",
    },
  ],

  workpersonal: [
    {
      company: "Ekimedicall MP",
      href: "https://www.ekimedicall.com",
      badges: ["Proyecto real"],
      location: "Bogotá, Colombia",
      title: "Desarrollador Full Stack",
      logoUrl: "/Logo_Ekimedicall.webp",
      start: "Nov 2024",
      end: "Mar 2025",
      description:
        "Desarrollé un sitio web para el sector salud enfocado en la presentación de servicios médicos, con una estructura orientada a la captación de usuarios.\n\nTrabajé en la organización de la información, experiencia de usuario y diseño adaptable a dispositivos móviles, asegurando una navegación clara, funcional y accesible.\n\nImplementé la estructura general del sistema integrando frontend y backend, manejo de datos y lógica de negocio, garantizando un funcionamiento estable y escalable.",
    },
    {
      company: "Travel One AXM",
      badges: ["Proyecto real"],
      href: "https://traveloneaxm.com/",
      location: "Remoto",
      title: "Desarrollador Web",
      logoUrl: "/LogoTravel.webp",
      start: "Ene 2026",
      end: "Feb 2026",
      description:
        "Desarrollé una landing page para una agencia de viajes, enfocada en la captación de clientes para servicios turísticos.\n\nImplementé una estructura estratégica con secciones orientadas a generar confianza, destacar beneficios y facilitar el contacto directo con usuarios interesados.\n\nOptimicé la organización del contenido y la experiencia de usuario, priorizando una navegación clara, rápida y adaptable a dispositivos móviles.",
    },
    {
      company: "Nuevo Estilo Dance",
      badges: ["Proyecto real"],
      href: "https://www.nuevoestilodance.com/",
      location: "Cali, Colombia",
      title: "Desarrollador Web",
      logoUrl: "/LogoNED.png",
      start: "Mar 2026",
      end: "Mar 2026",
      description:
        "Desarrollé el sitio web para una academia de baile reconocida en Cali, enfocado en comunicar sus líneas de formación y fortalecer su presencia digital.\n\nEstructuré secciones para presentar programas, metodologías y servicios, facilitando la comprensión de la oferta y mejorando la captación de nuevos estudiantes.\n\nOptimicé la experiencia de usuario y la accesibilidad desde dispositivos móviles.",
    },
    {
      company: "Freestyle Dance Cali",
      badges: ["Proyecto real"],
      href: "https://www.freestyledancecali.com/",
      location: "Cali, Colombia",
      title: "Desarrollador Web",
      logoUrl: "/LogoFTD.png",
      start: "Mar 2026",
      end: "Mar 2026",
      description:
        "Creé el sitio web para una academia de baile en Cali, enfocado en mejorar la comunicación de sus servicios y facilitar el acceso a información clave.\n\nOrganicé el contenido incluyendo clases, horarios y contacto, priorizando una navegación clara y una experiencia de usuario optimizada.\n\nDesarrollé una estructura adaptable a dispositivos móviles, mejorando la accesibilidad del sitio.",
    },
    {
      company: "Smart Learning Online",
      badges: ["Proyecto real"],
      href: "https://www.smartlearningonline.com/",
      location: "Remoto",
      title: "Desarrollador Web",
      logoUrl: "/LogoSMT.webp",
      start: "Abr 2026",
      end: "Abr 2026",
      description:
        "Desarrollé un sitio web enfocado en la promoción de cursos de inglés, certificaciones y procesos de validación de bachillerato.\n\nDiseñé una estructura clara para comunicar cada servicio, facilitando la comprensión de la oferta educativa y el acceso a la información.\n\nOptimicé la experiencia de usuario y el flujo de navegación para mejorar la interacción de los usuarios y el contacto con potenciales estudiantes.",
    },
  ],

  education: [
    {
      school: "Universidad UNINPAHU",
      href: "https://uninpahu.edu.co/",
      degree: "Ingeniería de Software",
      logoUrl: "/uninpahu.png",
      start: "2025",
      end: "Actualidad - 6 Semestre",
    },
    {
      school: "SENA",
      href: "https://www.sena.edu.co/es-co/Paginas/default.aspx",
      degree: "Tecnólogo en Análisis y Desarrollo de Software",
      logoUrl: "/sena.png",
      start: "2023",
      end: "2025",
    },
    {
      school: "SENA - Centro servicios financieros",
      href: "https://www.sena.edu.co/es-co/Paginas/default.aspx",
      degree: "Técnico en Programación de Software",
      logoUrl: "/sena.png",
      start: "2022",
      end: "2023",
    },
    {
      school: "Colegio ITD Juan del Corral",
      href: "https://juandelcorral.edu.co/",
      degree: "Bachiller Técnico en Programación de Software",
      logoUrl: "/colegio.jpg",
      start: "2018",
      end: "2023",
    },
  ],

  projects: [
    {
      title: "Ekimedicall — Plataforma web sector salud",
      href: "https://ekimedicall.com/",
      dates: "Nov 2024 - Mar 2025",
      active: true,
      description:
        "Desarrollo de sitio web para el sector salud enfocado en la presentación de servicios médicos. Se optimizó la organización de la información, experiencia de usuario y diseño adaptable, logrando una navegación clara, funcional y orientada a la captación de usuarios.",
      technologies: ["React", "Next.js", "Node.js", "SQL", "Tailwind CSS"],
      links: [
        {
          type: "Sitio Web",
          href: "https://ekimedicall.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/eki_Img.PNG",
      video: "",
    },
    {
      title: "Travel One AXM — Landing page turística",
      href: "https://traveloneaxm.com/",
      dates: "Ene 2026 - Feb 2026",
      active: true,
      description:
        "Desarrollo de landing page para agencia de viajes enfocada en la captación de clientes. Se implementó una estructura estratégica orientada a generar confianza, destacar beneficios y facilitar el contacto con usuarios interesados.",
      technologies: ["Laravel", "JavaScript", "SQL", "HTML", "CSS"],
      links: [
        {
          type: "Sitio Web",
          href: "https://traveloneaxm.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/travel_Img.png",
      video: "",
    },
    {
      title: "Nuevo Estilo Dance — Sitio web institucional",
      href: "https://www.nuevoestilodance.com/",
      dates: "Mar 2026",
      active: true,
      description:
        "Desarrollo de sitio web para academia de baile en Cali, enfocado en comunicar sus programas y fortalecer su presencia digital. Se estructuró la información para mejorar la comprensión de los servicios y la captación de estudiantes.",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      links: [
        {
          type: "Sitio Web",
          href: "https://www.nuevoestilodance.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/exampleNed.webp",
      video: "",
    },
    {
      title: "Freestyle Dance Cali — Sitio web institucional",
      href: "https://www.freestyledancecali.com/",
      dates: "Mar 2026",
      active: true,
      description:
        "Creación de sitio web para academia de baile enfocado en mejorar la comunicación de servicios y acceso a información clave. Se optimizó la navegación y la estructura del contenido para una mejor experiencia de usuario.",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      links: [
        {
          type: "Sitio Web",
          href: "https://www.freestyledancecali.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/exampleFtd.webp",
      video: "",
    },
    {
      title: "Smart Learning Online — Plataforma educativa",
      href: "https://www.smartlearningonline.com/",
      dates: "Abr 2026",
      active: true,
      description:
        "Desarrollo de sitio web para promoción de cursos de inglés, certificaciones y validación de bachillerato. Se diseñó una estructura clara para comunicar servicios y mejorar la interacción de usuarios.",
      technologies: ["React", "Next.js", "Node.js"],
      links: [
        {
          type: "Sitio Web",
          href: "https://www.smartlearningonline.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/exampleSTR.webp",
      video: "",
    },
  ],
} as const;
