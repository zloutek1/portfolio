import React, { useEffect, useState } from "react";

export function Navbar(): React.JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["about", "experience", "projects", "contact"]; 
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { root: null, threshold: 0.5 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav 
      className={`
        fixed top-6 left-1/2 transform -translate-x-1/2 z-50
        px-8 py-5 rounded-full
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
              aria-current={active === link.href.substring(1) ? 'page' : undefined}
            >
              <span className={`relative z-10 ${active === link.href.substring(1) ? 'text-white font-semibold' : ''}`}>{link.label}</span>
              <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          ))}
        </div>

        {/* Center - your name */}
        <h1 className="text-xl font-bold text-white tracking-tight px-4 leading-[1.3] py-1">
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
              aria-current={active === link.href.substring(1) ? 'page' : undefined}
            >
              <span className={`relative z-10 ${active === link.href.substring(1) ? 'text-white font-semibold' : ''}`}>{link.label}</span>
              <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}


