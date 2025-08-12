import React from "react";
import { Timeline } from "@/components/ui/timeline";
import type { Experience } from "@/data/experience";

export function ExperienceSection({ experience }: { experience: Experience[] }): React.JSX.Element {
  const timelineData = experience.map(exp => ({
    title: exp.years,
    content: (
      <div className="w-full max-w-4xl">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg overflow-hidden">
            {!exp.image ? exp.company.charAt(0) : <img src={exp.image} />}
          </div>
          <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
        </div>
        <h4 className="text-xl text-blue-300 font-semibold mb-4">{exp.role}</h4>
        <div className="flex flex-wrap gap-2 mb-4">
          {exp.tags?.map((t) => (
            <span key={t} className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full border border-blue-500/30">{t}</span>
          ))}
        </div>
        <p className="opacity-90 text-lg leading-relaxed text-gray-300">{exp.description}</p>
      </div>
    )
  }));

  return (
    <section id="experience" className="py-32 bg-black text-white relative overflow-hidden">
      <div className="absolute top-32 right-32 w-40 h-40 bg-gradient-to-br from-indigo-500/15 to-purple-500/15 rounded-full blur-2xl animate-pulse delay-700"></div>
      <div className="absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-br from-teal-500/15 to-cyan-500/15 rounded-full blur-2xl animate-pulse delay-300"></div>
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Work Experience</h2>
        <Timeline data={timelineData} />
      </div>
    </section>
  );
}


