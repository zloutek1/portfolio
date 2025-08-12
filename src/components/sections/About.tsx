import React from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export function About(): React.JSX.Element {
  return (
    <section id="about" className="py-20 bg-black text-white flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="max-w-4xl text-center px-4 about-content relative z-10">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <ScrollReveal textClassName="text-lg leading-relaxed text-gray-300">
          I design and operate event‑driven backends in JVM stacks. I enjoy turning messy integrations into predictable systems with clear SLAs.
          Recently: scaled parcel tracking from 1k → 30k+ parcels/month and delivered multi‑tenant platforms with qualified e‑signatures.
          I focus on high‑throughput messaging, observability, and resilient APIs.
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
              <div className="text-xl font-bold">30k+ parcels/mo</div>
              <div className="text-neutral-400">Parcel tracking throughput</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
              <div className="text-xl font-bold">90%+ coverage</div>
              <div className="text-neutral-400">Critical services</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
              <div className="text-xl font-bold">-48% latency</div>
              <div className="text-neutral-400">Processing pipeline</div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-8 flex flex-wrap gap-2 justify-center">
            {['Java','Spring Boot','Kafka','PostgreSQL','Redis','Docker','Kubernetes','LDAP','Elasticsearch'].map(t => (
              <span key={t} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-neutral-200 text-sm">{t}</span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}


