import React, { useState } from 'react';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from './animated-modal';
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

interface ProjectModalProps {
  project: Project;
  children: React.ReactNode;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, children }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <Modal>
      <ModalTrigger className="w-full h-full">
        {children}
      </ModalTrigger>
      
                           <ModalBody className="max-w-5xl w-full mx-4 max-h-[90vh] relative">
          <GlowingEffect 
            variant="white" 
            glow={true} 
            disabled={false}
            blur={1}
            spread={120}
            proximity={200}
            borderWidth={2}
          />
          <ModalContent className="p-0 overflow-y-auto relative">
           {/* Header */}
           <div className="p-6 border-b border-neutral-800">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
                <div className="flex flex-wrap gap-2 text-sm text-neutral-400">
                  <span className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded-full border border-blue-500/30">
                    {project.role}
                  </span>
                  {project.company && (
                    <span className="px-2 py-1 bg-green-600/20 text-green-300 rounded-full border border-green-500/30">
                      {project.company}
                    </span>
                  )}
                  <span className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/30">
                    {project.timeline}
                  </span>
                </div>
              </div>
              
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg transition-colors duration-200 flex items-center gap-2"
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
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          {project.images.length > 0 && (
            <div className="p-6 border-b border-neutral-800">
              <div className="relative group">
                                 <img
                   src={project.images[currentImageIndex].src}
                   alt={project.images[currentImageIndex].alt}
                   className="w-full h-64 object-contain rounded-lg bg-neutral-800/50"
                 />
                
                {/* Navigation arrows */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
              </div>
              
              {/* Image indicators */}
              {project.images.length > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                        index === currentImageIndex ? 'bg-blue-500' : 'bg-neutral-600'
                      }`}
                    />
                  ))}
                </div>
              )}
              
              {project.images[currentImageIndex].caption && (
                <p className="text-center text-neutral-400 text-sm mt-2">
                  {project.images[currentImageIndex].caption}
                </p>
              )}
            </div>
          )}

          {/* Description */}
          <div className="p-6 border-b border-neutral-800">
            <h3 className="text-lg font-semibold text-white mb-3">About this project</h3>
            <p className="text-neutral-300 leading-relaxed">{project.description}</p>
          </div>

          {/* Tech Stack */}
          <div className="p-6 border-b border-neutral-800">
            <h3 className="text-lg font-semibold text-white mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-neutral-800 text-neutral-300 text-sm rounded-full border border-neutral-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="p-6 border-b border-neutral-800">
            <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-neutral-300">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

                     {/* Challenges & Solutions */}
           {project.challenges.length > 0 && (
             <div className="p-6">
               <h3 className="text-lg font-semibold text-white mb-3">Challenges & Solutions</h3>
               <ul className="space-y-2">
                 {project.challenges.map((challenge, index) => (
                   <li key={index} className="flex items-start gap-3 text-neutral-300">
                     <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                     </svg>
                     {challenge}
                   </li>
                 ))}
               </ul>
             </div>
           )}
           
                       {/* Bottom padding for better scrolling experience */}
            <div className="h-12"></div>
         </ModalContent>
      </ModalBody>
    </Modal>
  );
};
