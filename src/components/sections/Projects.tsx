import React from "react";
import { ProjectCard } from "@/components/ui/project-card";
import type { Project } from "@/data/projects";

export function ProjectsSection({ projects }: { projects: Project[] }): React.JSX.Element {
  return (
    <section id="projects" className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-5xl font-extrabold text-center mb-16">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}


