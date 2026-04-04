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
    "Desarrollador web con enfoque en construir aplicaciones funcionales, escalables y orientadas a resolver problemas reales.",
  summary:
    "Soy desarrollador web con experiencia en la construcción de aplicaciones y soluciones digitales utilizando tecnologías como PHP, Java, JavaScript, React y Next.js.\n\nHe trabajado en el desarrollo de sistemas web, ecommerce y landing pages, integrando tanto frontend como backend, manejo de bases de datos y lógica de negocio.\n\nTengo experiencia estructurando proyectos, organizando código y desarrollando funcionalidades que responden a necesidades reales, no solo desde lo técnico sino también entendiendo el impacto en el negocio.\n\nActualmente estoy enfocado en fortalecer mis habilidades en desarrollo full stack, arquitectura de software y automatización, construyendo proyectos cada vez más completos, escalables y orientados a resolver problemas concretos.",
  skills: [
    { name: "JavaScript", icon: Typescript },
    {
      name: "PHP",
      icon: () => (
        <img
          src="https://cdn.simpleicons.org/php/777BB4"
          alt="PHP"
          className="w-5 h-5 object-contain"
        />
      ),
    },
    { name: "Python", icon: Python },
    { name: "Java", icon: Java },
    { name: "SQL", icon: Database },

    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    {
      name: "Laravel",
      icon: () => (
        <img
          src="https://cdn.simpleicons.org/laravel/FF2D20"
          alt="Laravel"
          className="w-5 h-5 object-contain"
        />
      ),
    },
    {
      name: "Express",
      icon: () => (
        <img
          src="https://cdn.simpleicons.org/express/000000"
          alt="Express"
          className="w-5 h-5 object-contain"
        />
      ),
    },
    {
      name: "Spring Boot",
      icon: () => (
        <img
          src="https://cdn.simpleicons.org/springboot/6DB33F"
          alt="Spring Boot"
          className="w-5 h-5 object-contain"
        />
      ),
    },

    { name: "Node.js", icon: Nodejs },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Git", icon: GitBranch },
    { name: "GitHub", icon: Github },
    {
      name: "Tailwind CSS",
      icon: () => (
        <img
          src="https://cdn.simpleicons.org/tailwindcss/06B6D4"
          alt="Tailwind CSS"
          className="w-5 h-5 object-contain"
        />
      ),
    },

    // 🔹 Extras que te diferencian
    { name: "SEO", icon: Globe },
    { name: "UI/UX", icon: PenTool },
    { name: "Automatización", icon: Bot },
  ],
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
      company: "Ekimedicall MP",
      href: "https://www.ekimedicall.com",
      badges: ["Proyecto real"],
      location: "Bogotá, Colombia",
      title: "Desarrollador Full Stack",
      logoUrl: "/Logo_Ekimedicall.webp",
      start: "Nov 2024",
      end: "Mar 2025",
      description:
        "Desarrollé un ecommerce completo para el sector salud utilizando Laravel, enfocado en la gestión de productos, pedidos y experiencia del usuario.\n\nImplementé funcionalidades clave como catálogo dinámico de productos, carrito de compras, sistema de pedidos y estructura backend para administración de contenido.\n\nTrabajé en la integración entre frontend y backend, manejo de base de datos y lógica de negocio, asegurando una plataforma funcional, escalable y orientada a conversión.\n\nAdemás, optimicé la estructura del sitio para mejorar rendimiento, organización del código y experiencia del usuario final.",
    },
    {
      company: "Pontificia Universidad Javeriana",
      href: "",
      badges: ["Prácticas"],
      location: "Bogotá, Colombia",
      title: "Practicante en Análisis y Desarrollo de Software",
      logoUrl: "/javeriana.jpg",
      start: "Mar 2025",
      end: "Sep 2025",
      description:
        "Desarrollé un software interno para la gestión de inventario de equipos tecnológicos, permitiendo el registro, actualización y consulta de activos.\n\nImplementé interfaces intuitivas y funcionalidades que mejoraron la trazabilidad de los equipos y optimizaron los procesos administrativos internos.\n\nTrabajé con tecnologías como React y Express para la construcción del sistema, integrando frontend y backend.\n\nAdicionalmente, brindé soporte técnico en sitio, apoyando en la resolución de incidencias y mantenimiento de equipos dentro de la institución.",
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
        "Desarrollé una plataforma web para una agencia de viajes, enfocada en la gestión de planes turísticos y la interacción con clientes.\n\nImplementé un sistema de administración para crear, editar y eliminar planes y categorías, permitiendo una gestión dinámica del contenido.\n\nDesarrollé funcionalidades para la recepción de mensajes de usuarios interesados, facilitando el contacto directo con potenciales clientes.\n\nTrabajé en la estructura general del sistema, integrando frontend y backend, manejo de datos y lógica de negocio para asegurar una plataforma funcional y fácil de usar.",
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
      title: "E-Commerce - Ekimedicall",
      href: "https://ekimedicall.com/",
      dates: "Nov 2024 - Mar 2025",
      active: true,
      description:
        "Desarrollé un E-Commerce personalizado para Ekimedicall, una empresa especializada en productos médicos. El sitio web incluye una interfaz intuitiva para la gestión de productos, un carrito de compras dinámico, opciones de pago seguras y una experiencia de usuario optimizada.",
      technologies: [
        "Laravel",
        "JavaScript",
        "SQL",
        "Html",
        "CSS",
      ],
      links: [
        {
          type: "Sitio Web",
          href: "https://ekimedicall.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/eki_Img.PNG",
      video:
        "",
    },
    {
      title: "Travel One AXM",
      href: "https://traveloneaxm.com/",
      dates: "Enero 2026 - Febrero 2026",
      active: true,
      description:
        "Desarrollo de sitio web para agencia de viajes Laravel, optimizado para captar clientes y transmitir confianza en servicios turísticos desde el primer vistazo.",
      technologies: [
        "Laravel",
        "JavaScript",
        "SQL",
        "Html",
        "CSS",
      ],
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
  ],
} as const;
