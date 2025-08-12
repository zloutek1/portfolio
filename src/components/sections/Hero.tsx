import React from "react";
import Orb from "@/components/ui/orb";

export function Hero(): React.JSX.Element {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden pt-24">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
        <Orb />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-8">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
          Tomas Ljutenko
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 opacity-90 leading-relaxed">
          Backend engineer building reliable, event‑driven systems. Kafka, Spring Boot, Postgres. Shipped parcel tracking at 30k+/mo and multi‑tenant platforms with qualified e‑signatures.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#experience" className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <span className="relative z-10 text-white font-semibold text-lg">View Experience</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12"></div>
          </a>
          <a href="/assets/Tomas_Ljutenko_CV.pdf" download rel="noopener noreferrer" className="group relative inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105">
            <span className="relative z-10 text-white font-semibold text-lg">Download CV</span>
          </a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent via-black/70 to-black" />
    </section>
  );
}


