import React from 'react';
import { ProjectModal } from './project-modal';
import { GlowingEffect } from './glowing-effect';

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

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <ProjectModal project={project}>
      <div className="group relative rounded-xl transition-all duration-300 cursor-pointer">
        <GlowingEffect 
          variant="white" 
          glow={true} 
          disabled={false}
          blur={1}
          spread={40}
          proximity={50}
          borderWidth={2}
        />
        {/* Image */}
        <div className="h-48 overflow-hidden mx-1 mt-1">
          <img
            src={project.images[0]?.src || '/images/placeholder.svg'}
            alt={project.images[0]?.alt || project.title}
            loading="lazy"
            decoding="async"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              if (target.src.endsWith('/images/placeholder.svg')) return;
              target.src = '/images/placeholder.svg';
            }}
            className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-500 bg-neutral-800/50"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
          
          {/* Role badge */}
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 bg-blue-600/90 text-white text-xs font-medium rounded-full">
              {project.role}
            </span>
          </div>
          
          {/* Timeline badge */}
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 bg-neutral-800/90 text-neutral-300 text-xs font-medium rounded-full">
              {project.timeline}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>
          
          {/* Company */}
          {project.company && (
            <p className="text-sm text-neutral-400 mb-3">
              {project.company}
            </p>
          )}
          
          {/* Description */}
          <p className="text-neutral-300 text-sm leading-relaxed mb-4 line-clamp-3">
            {project.shortDescription}
          </p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-neutral-800 text-neutral-300 text-xs rounded-full border border-neutral-700"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2 py-1 bg-neutral-800 text-neutral-400 text-xs rounded-full border border-neutral-700">
                +{project.techStack.length - 4} more
              </span>
            )}
          </div>
          
          {/* Action buttons */}
          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 px-3 py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-sm rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Demo
              </a>
            )}
          </div>
          
          {/* Click hint */}
          <p className="text-center text-neutral-500 text-xs mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Click to learn more
          </p>
        </div>
      </div>
    </ProjectModal>
  );
};
