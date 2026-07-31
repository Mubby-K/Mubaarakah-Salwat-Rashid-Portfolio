import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project, CategoryType } from '../types';
import { X, ArrowRight, Layers } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryType>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 bg-[#F8F5F2] dark:bg-stone-900 text-[#1A1A1A] dark:text-[#F8F5F2] border-t border-[#D6CCC2] dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.25em] bg-[#EFEDE8] dark:bg-stone-800 text-[#5A5A40] dark:text-stone-300 border border-[#D6CCC2] dark:border-stone-700">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#1A1A1A] dark:text-[#F8F5F2]">
            Featured Work &amp; <span className="font-medium italic text-[#5A5A40] dark:text-amber-200">Case Studies</span>
          </h2>
          <p className="text-[#4A4A4A] dark:text-stone-300 text-base font-sans">
            Filter through frontend applications, social impact platforms, luxury branding, and Python/Swift code bases.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-[#EFEDE8] dark:bg-stone-800 border border-[#D6CCC2] dark:border-stone-700">
            {[
              { id: 'all', label: 'All Work' },
              { id: 'web', label: 'Frontend Web' },
              { id: 'nonprofit', label: 'Nonprofit & Impact' },
              { id: 'brand', label: 'Branding & Beauty' },
              { id: 'code', label: 'Python & Swift Code' }
            ].map((btn) => (
              <button
                key={btn.id}
                id={`filter-btn-${btn.id}`}
                onClick={() => setActiveFilter(btn.id as CategoryType)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeFilter === btn.id
                    ? 'bg-[#5A5A40] text-white shadow-md'
                    : 'text-[#4A4A4A] dark:text-stone-300 hover:text-[#1A1A1A] hover:bg-[#F5F2ED]'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="bg-white dark:bg-stone-800 border border-[#D6CCC2] dark:border-stone-700 rounded-[20px] overflow-hidden flex flex-col justify-between hover:border-[#5A5A40] transition-all hover:shadow-xl group"
            >
              <div>
                {/* Project Image Header if available */}
                {project.image ? (
                  <div className="relative aspect-video overflow-hidden bg-[#EFEDE8]">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-white/90 dark:bg-stone-900/90 text-[#5A5A40] dark:text-stone-200 border border-[#D6CCC2] backdrop-blur-md">
                      {project.categoryLabel}
                    </span>
                  </div>
                ) : (
                  <div className="p-4 bg-[#EFEDE8] dark:bg-stone-900 border-b border-[#D6CCC2] dark:border-stone-700 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-white dark:bg-stone-800 text-[#5A5A40] border border-[#D6CCC2]">
                      {project.categoryLabel}
                    </span>
                    <Layers className="w-4 h-4 text-[#5A5A40]" />
                  </div>
                )}

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-serif font-medium text-[#1A1A1A] dark:text-[#F8F5F2] group-hover:text-[#5A5A40] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-sans text-[#4A4A4A] dark:text-stone-300 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#F5F2ED] dark:bg-stone-700 text-[#5A5A40] dark:text-stone-200 border border-[#D6CCC2] dark:border-stone-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#5A5A40] hover:bg-[#484833] text-[#F8F5F2] text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in">
          <div className="bg-white dark:bg-stone-900 border border-[#D6CCC2] dark:border-stone-800 rounded-[28px] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 text-[#1A1A1A] dark:text-stone-200 shadow-2xl relative">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#EFEDE8] dark:bg-stone-800 text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5A5A40]">
                {selectedProject.categoryLabel}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#1A1A1A] dark:text-[#F8F5F2]">
                {selectedProject.title}
              </h3>
            </div>

            {selectedProject.image && (
              <div className="rounded-2xl overflow-hidden aspect-video bg-[#EFEDE8] border border-[#D6CCC2]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <p className="text-sm font-sans text-[#4A4A4A] dark:text-stone-300 leading-relaxed">
              {selectedProject.longDescription}
            </p>

            {/* Problem & Solution Split */}
            {selectedProject.problem && selectedProject.solution && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#F5F2ED] dark:bg-stone-800 border border-[#D6CCC2] dark:border-stone-700 space-y-1">
                  <h4 className="text-[10px] font-bold text-red-700 uppercase tracking-wider">The Challenge</h4>
                  <p className="text-xs font-sans text-[#4A4A4A] dark:text-stone-300">{selectedProject.problem}</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#F5F2ED] dark:bg-stone-800 border border-[#D6CCC2] dark:border-stone-700 space-y-1">
                  <h4 className="text-[10px] font-bold text-[#5A5A40] dark:text-emerald-400 uppercase tracking-wider">The Solution</h4>
                  <p className="text-xs font-sans text-[#4A4A4A] dark:text-stone-300">{selectedProject.solution}</p>
                </div>
              </div>
            )}

            {/* Metrics if available */}
            {selectedProject.metrics && (
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#EFEDE8] dark:bg-stone-800 border border-[#D6CCC2] dark:border-stone-700 text-center">
                {selectedProject.metrics.map((m, idx) => (
                  <div key={idx}>
                    <div className="text-xl font-serif font-bold text-[#1A1A1A] dark:text-[#F8F5F2]">{m.value}</div>
                    <div className="text-[10px] text-[#5A5A40] font-medium">{m.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Tech Stack */}
            <div className="space-y-2">
              <h4 className="text-[10px] font-bold text-[#5A5A40] uppercase tracking-wider">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-[#F5F2ED] dark:bg-stone-800 text-[#1A1A1A] dark:text-stone-200 text-xs font-mono border border-[#D6CCC2] dark:border-stone-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#D6CCC2] dark:border-stone-800 flex justify-end gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 rounded-full bg-[#5A5A40] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#484833] transition-colors"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

