import React, { useState, useEffect } from "react";
import ScrollReveal from "./blocks/TextAnimations/ScrollReveal/ScrollReveal";
import './App.css'
import Orb from "./blocks/Backgrounds/Orb/Orb";
import { Timeline } from "./components/ui/timeline";
import { StickyScroll } from "./components/ui/sticky-scroll-reveal";
import Masonry from "./blocks/Components/Masonry/Masonry";
import { ProjectCard } from "./components/ui/project-card";

interface Experience {
  role: string;
  company: string;
  years: string;
  description: string;
}

interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

interface Project {
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

const projects: Project[] = [
  {
    id: "balikovna",
    title: "Balíkovna Backend",
    description: "A comprehensive backend system for parcel tracking and management, handling over 30,000 parcels monthly. The system integrates with multiple shipping carriers, provides real-time tracking updates, and includes a robust payment gateway integration.",
    shortDescription: "Backend system handling parcel state changes for 30,000+ parcels monthly, integrated payment gateway.",
    images: [
      { src: "/images/balikovna.png", alt: "Balíkovna Backend Dashboard", caption: "Main dashboard showing parcel tracking" },
      { src: "/images/balikovna-2.png", alt: "API Documentation", caption: "REST API documentation and testing interface" }
    ],
    techStack: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
    features: [
      "Real-time parcel tracking with Kafka event streaming",
      "Multi-carrier shipping integration",
      "Payment gateway with multiple providers",
      "RESTful API with comprehensive documentation",
      "Automated testing with 90%+ coverage"
    ],
    challenges: [
      "Scaled from 1,000 to 30,000+ parcels monthly",
      "Implemented event-driven architecture for real-time updates",
      "Integrated multiple payment gateways with fallback mechanisms",
      "Optimized database queries for high-volume tracking data"
    ],
    github: "https://github.com/zloutek1/balikovna",
    role: "Lead Backend Developer",
    timeline: "8 months",
    company: "InQool"
  },
  {
    id: "esd",
    title: "Electronic Construction Diary",
    description: "Enterprise multi-tenant system for construction project management with qualified electronic signature integration. The platform supports LDAP synchronization, extensive client collaboration features, and compliance with construction industry regulations.",
    shortDescription: "Multi-tenant backend design with LDAP sync, qualified electronic signature integration, and extensive client collaboration.",
    images: [
      { src: "/images/esd.png", alt: "ESD Main Interface", caption: "Construction project dashboard" },
      { src: "/images/esd-2.png", alt: "Document Management", caption: "Document workflow and signature system" }
    ],
    techStack: ["Java", "Spring Boot", "LDAP", "KEP", "PostgreSQL", "RabbitMQ", "Elasticsearch"],
    features: [
      "Multi-tenant architecture with data isolation",
      "LDAP integration for enterprise authentication",
      "Qualified electronic signature (KEP) integration",
      "Document workflow management",
      "Real-time collaboration tools",
      "Comprehensive audit logging"
    ],
    challenges: [
      "Designed scalable multi-tenant architecture",
      "Integrated complex LDAP synchronization",
      "Implemented qualified electronic signature workflow",
      "Ensured data isolation between tenants"
    ],
    github: "https://github.com/zloutek1/esd",
    role: "Backend Developer",
    timeline: "12 months",
    company: "InQool"
  },
  {
    id: "nixos",
    title: "NixOS Configuration",
    description: "Personalized, modular NixOS and Home-Manager setup featuring dynamic theming, Lenovo Yoga optimizations, and a comprehensive development environment. The configuration includes custom scripts, automated system updates, and seamless environment switching.",
    shortDescription: "Personalized, modular NixOS and Home-Manager setup with dynamic theming and Lenovo Yoga optimizations.",
    images: [
      { src: "https://github.com/zloutek1/nixos/raw/main/assets/desktop.png", alt: "NixOS Desktop", caption: "Custom desktop environment with dynamic theming" }
    ],
    techStack: ["NixOS", "Home-Manager", "Hyprland", "Bash", "Python", "Git"],
    features: [
      "Dynamic theme switching with automatic wallpaper updates",
      "Lenovo Yoga specific optimizations and power management",
      "Modular configuration with environment-specific modules",
      "Automated system updates and package management",
      "Custom development environment setup",
      "Seamless environment switching between work and personal"
    ],
    challenges: [
      "Created modular configuration system for different environments",
      "Optimized power management for Lenovo Yoga hardware",
      "Implemented dynamic theming with automatic updates",
      "Ensured reproducible development environments"
    ],
    github: "https://github.com/zloutek1/nixos-config",
    role: "Personal Project",
    timeline: "Ongoing",
    company: "Personal"
  }
];

function Navbar(): React.JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav 
      className={`
        fixed top-6 left-1/2 transform -translate-x-1/2 z-50
        px-8 py-4 rounded-full
        bg-white/10 backdrop-blur-xl
        border border-white/20
        shadow-2xl shadow-black/20
        transition-all duration-500 ease-out
        hover:bg-white/15 hover:border-white/30
        hover:shadow-2xl hover:shadow-black/30
        ${isScrolled ? 'bg-white/15 border-white/30 shadow-2xl shadow-black/30' : ''}
      `}
    >
      <div className="flex items-center gap-8">
        {/* Left side - first 2 links */}
        <div className="flex gap-6">
          {navLinks.slice(0, 2).map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="
                relative px-3 py-2 rounded-lg
                text-white/80 hover:text-white transition-all duration-300
                hover:bg-white/10
                group
              "
            >
              <span className="relative z-10">{link.label}</span>
              <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          ))}
        </div>

        {/* Center - your name */}
        <h1 className="text-xl font-bold text-white tracking-tight px-4">
          Tomas Ljutenko
        </h1>

        {/* Right side - last 2 links */}
        <div className="flex gap-6">
          {navLinks.slice(2, 4).map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="
                relative px-3 py-2 rounded-lg
                text-white/80 hover:text-white transition-all duration-300
                hover:bg-white/10
                group
              "
            >
              <span className="relative z-10">{link.label}</span>
              <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function HeroSection(): React.JSX.Element {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden pt-24">
      {/* Orb in background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
        <Orb />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-8">
        <h2 className="text-6xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
          Hi, I'm Tomas
        </h2>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 opacity-90 leading-relaxed">
          Backend developer with a passion for building reliable systems and experimenting with UI interactions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Primary button - scroll to experience */}
          <a
            href="#experience"
            className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="relative z-10 text-white font-semibold text-lg">View Experience</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12"></div>
          </a>

          {/* Secondary button - download CV */}
          <a
            href="/assets/Tomas_Ljutenko_CV.pdf"
            download
            className="group relative inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105"
          >
            <span className="relative z-10 text-white font-semibold text-lg">Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function AboutSection(): React.JSX.Element {
  return (
    <section id="about" className="py-20 bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
      
      <div className="max-w-3xl text-center px-4 about-content relative z-10">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <ScrollReveal textClassName="text-lg leading-relaxed text-gray-300">
          I am a passionate software engineer with a focus on backend development and scalable web applications.
          With years of experience in projects ranging from parcel shipping platforms to enterprise multi-tenant systems,
          I enjoy building solutions that are efficient, reliable, and user-friendly. I also love experimenting with
          modern UI effects and interactive components to make applications both functional and delightful.
        </ScrollReveal>
      </div>
    </section>
  );
}

function ExperienceSection(): React.JSX.Element {
  const experience: Experience[] = [
    {
      role: "Backend Developer",
      company: "InQool",
      years: "2022 - 2025",
      description: "Worked on parcel tracking app Balíkovna and Electronic Construction Diary."
    },
    {
      role: "Intern",
      company: "InQool",
      years: "2021 - 2022",
      description: "Helped integrate payment gateways and improve data pipelines."
    }
  ];

  const timelineData = experience.map(exp => ({
    title: exp.years,
    content: (
      <div className="w-full max-w-4xl">
        {/* Company icon placeholder and name */}
        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            {exp.company.charAt(0)}
          </div>
          <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
        </div>
        
        {/* Role */}
        <h4 className="text-xl text-blue-300 font-semibold mb-4">{exp.role}</h4>
        
        {/* Skills/Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {exp.company === "InQool" && exp.role === "Backend Developer" ? (
            <>
              <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full border border-blue-500/30">Java</span>
              <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full border border-blue-500/30">Spring Boot</span>
              <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full border border-blue-500/30">Kafka</span>
              <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full border border-blue-500/30">LDAP</span>
              <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full border border-blue-500/30">Multi-tenant</span>
            </>
          ) : (
            <>
              <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full border border-blue-500/30">Payment Gateways</span>
              <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full border border-blue-500/30">Data Pipelines</span>
              <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full border border-blue-500/30">Integration</span>
            </>
          )}
        </div>
        
        {/* Description */}
        <p className="opacity-90 text-lg leading-relaxed text-gray-300">{exp.description}</p>
      </div>
    )
  }));

  return (
    <section id="experience" className="py-32 bg-black text-white relative overflow-hidden">
      {/* Floating gradient orbs */}
      <div className="absolute top-32 right-32 w-40 h-40 bg-gradient-to-br from-indigo-500/15 to-purple-500/15 rounded-full blur-2xl animate-pulse delay-700"></div>
      <div className="absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-br from-teal-500/15 to-cyan-500/15 rounded-full blur-2xl animate-pulse delay-300"></div>
      
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Work Experience</h2>
        
        <Timeline data={timelineData} />
      </div>
    </section>
  );
}

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="w-full min-h-screen bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-5xl font-extrabold text-center mb-16">Projects</h1>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};


function ContactSection(): React.JSX.Element {
  return (
    <section id="contact" className="py-32 bg-black text-white relative overflow-hidden">
      {/* Floating gradient orbs */}
      <div className="absolute top-32 left-1/4 w-28 h-28 bg-gradient-to-br from-emerald-500/15 to-green-500/15 rounded-full blur-2xl animate-pulse delay-300"></div>
      <div className="absolute bottom-32 right-1/4 w-40 h-40 bg-gradient-to-br from-orange-500/15 to-red-500/15 rounded-full blur-2xl animate-pulse delay-700"></div>
      
      <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Contact</h2>
        <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
          Let's work together! Reach out to me via email or GitHub.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a 
            href="mailto:tomas@example.com" 
            className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="relative z-10 text-white font-semibold text-lg">Email Me</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12"></div>
          </a>
          <a 
            href="https://github.com/zloutek1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="relative z-10 text-white font-semibold text-lg">GitHub</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12"></div>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer(): React.JSX.Element {
  return (
    <footer className="py-8 bg-black text-white text-center border-t border-white/10">
      <p className="opacity-70">© {new Date().getFullYear()} Tomas Ljutenko. All rights reserved.</p>
    </footer>
  );
}

// --- App ---
function App(): React.JSX.Element {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
