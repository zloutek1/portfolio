
export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  images: ProjectImage[];
  techStack: string[];
  features: string[];
  challenges: string[];
  github?: string;
  liveUrl?: string;
  role: string;
  timeline: string;
  company?: string;
}


export const projects: Project[] = [
  {
    id: "nixos",
    title: "NixOS Configuration",
    description: "Personalized, modular NixOS and Home-Manager setup featuring dynamic theming, Lenovo Yoga optimizations, and a comprehensive development environment. The configuration includes custom scripts, automated system updates, and seamless environment switching.",
    shortDescription: "Personalized, modular NixOS and Home-Manager setup with dynamic theming and Lenovo Yoga optimizations.",
    images: [
      { src: "/images/nixos.png", alt: "NixOS Desktop", caption: "Custom desktop environment with dynamic theming" },
    ],
    techStack: ["NixOS", "Home-Manager", "Hyprland", "Bash", "Python", "Git"],
    features: [
      "Dynamic theme switching with automatic wallpaper updates",
      "Lenovo Yoga specific optimizations and power management",
      "Modular configuration with environment-specific modules",
      "Automated system updates and package management",
      "Custom development environment setup",
      "Seamless environment switching between work and personal",
    ],
    challenges: [
      "Created modular configuration system for different environments",
      "Optimized power management for Lenovo Yoga hardware",
      "Implemented dynamic theming with automatic updates",
      "Ensured reproducible development environments",
    ],
    github: "https://github.com/zloutek1/nixos",
    role: "Personal Project",
    timeline: "2025",
    company: "Personal",
  },
  {
    id: "esd",
    title: "Electronic Construction Diary",
    description:
      "Enterprise multi-tenant system for construction project management with qualified electronic signature integration. The platform supports LDAP synchronization, extensive client collaboration features, and compliance with construction industry regulations.",
    shortDescription:
      "Multi-tenant backend design with LDAP sync, qualified electronic signature integration, and extensive client collaboration.",
    images: [
      { src: "/images/placeholder.svg", alt: "ESD Main Interface", caption: "Construction project dashboard" },
    ],
    techStack: ["Java", "Spring Boot", "LDAP", "KEP", "PostgreSQL", "RabbitMQ", "Elasticsearch"],
    features: [
      "Multi-tenant architecture with data isolation",
      "LDAP integration for enterprise authentication",
      "Qualified electronic signature (KEP) integration",
      "Document workflow management",
      "Real-time collaboration tools",
      "Comprehensive audit logging",
    ],
    challenges: [
      "Designed scalable multi-tenant architecture",
      "Integrated complex LDAP synchronization",
      "Implemented qualified electronic signature workflow",
      "Ensured data isolation between tenants",
    ],
    github: "https://github.com/zloutek1/esd",
    role: "Backend Developer",
    timeline: "2024",
    company: "InQool",
  },
  {
    id: "balikovna",
    title: "Balíkovna Backend",
    description: "A comprehensive backend system for parcel tracking and management, handling over 30,000 parcels monthly. The system integrates with multiple shipping carriers, provides real-time tracking updates, and includes a robust payment gateway integration.",
    shortDescription: "Backend system handling parcel state changes for 30,000+ parcels monthly, integrated payment gateway.",
    images: [
      { src: "/images/balikovna.png", alt: "Balíkovna Backend Dashboard", caption: "Main dashboard showing parcel tracking" },
    ],
    techStack: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
    features: [
      "Real-time parcel tracking with Kafka event streaming",
      "Multi-carrier shipping integration",
      "Payment gateway with multiple providers",
      "RESTful API with comprehensive documentation",
      "Automated testing with 90%+ coverage",
    ],
    challenges: [
      "Scaled from 1,000 to 30,000+ parcels monthly",
      "Implemented event-driven architecture for real-time updates",
      "Integrated multiple payment gateways with fallback mechanisms",
      "Optimized database queries for high-volume tracking data",
    ],
    liveUrl: "https://www.balikovna.cz/en/app",
    role: "Lead Backend Developer",
    timeline: "2023",
    company: "InQool",
  },
];
