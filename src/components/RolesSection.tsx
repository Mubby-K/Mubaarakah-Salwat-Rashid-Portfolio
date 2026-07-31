import React, { useState } from 'react';
import { ROLES_DATA } from '../data/portfolioData';
import { Code, HeartHandshake, Sparkles, ChevronRight, CheckCircle, ArrowUpRight } from 'lucide-react';

export const RolesSection: React.FC = () => {
  const [activeRoleId, setActiveRoleId] = useState<string>(ROLES_DATA[0].id);

  const getRoleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5 text-[#5A5A40] dark:text-amber-200" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#5A5A40] dark:text-emerald-300" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#5A5A40] dark:text-amber-300" />;
      default:
        return <Code className="w-5 h-5 text-[#5A5A40] dark:text-amber-200" />;
    }
  };

  const selectedRole = ROLES_DATA.find((r) => r.id === activeRoleId) || ROLES_DATA[0];

  return (
    <section id="roles" className="py-20 bg-[#F8F5F2] dark:bg-[#1A1A1A] text-[#1A1A1A] dark:text-[#F8F5F2] border-t border-[#D6CCC2] dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.25em] bg-[#EFEDE8] dark:bg-stone-800 text-[#5A5A40] dark:text-stone-300 border border-[#D6CCC2] dark:border-stone-700">
            Core Ventures &amp; Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#1A1A1A] dark:text-[#F8F5F2]">
            Three Pillars of <span className="font-medium italic text-[#5A5A40] dark:text-amber-200">Value &amp; Innovation</span>
          </h2>
          <p className="text-[#4A4A4A] dark:text-stone-300 font-sans text-base">
            Combining technical development, African heritage beauty formulation, and girls’ educational rights in Ghana.
          </p>
        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {ROLES_DATA.map((role) => {
            const isSelected = role.id === activeRoleId;
            return (
              <div
                key={role.id}
                id={`role-card-${role.id}`}
                onClick={() => setActiveRoleId(role.id)}
                className={`relative cursor-pointer rounded-[24px] p-8 transition-all duration-300 border ${
                  isSelected
                    ? 'bg-white dark:bg-stone-900 border-[#5A5A40] shadow-xl scale-[1.02]'
                    : 'bg-[#EFEDE8] dark:bg-stone-900/60 border-[#D6CCC2] dark:border-stone-800 hover:border-[#5A5A40] hover:bg-white'
                }`}
              >
                {/* Header Icon + Organization */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-full bg-[#F5F2ED] dark:bg-stone-800 border border-[#D6CCC2] dark:border-stone-700 flex items-center justify-center">
                    {getRoleIcon(role.icon)}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-[#F5F2ED] dark:bg-stone-800 text-[#5A5A40] dark:text-stone-300 border border-[#D6CCC2] dark:border-stone-700">
                    {role.organization}
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] dark:text-[#F8F5F2] mb-2">{role.title}</h3>
                <p className="text-xs font-sans text-[#666] dark:text-stone-300 mb-5 leading-relaxed line-clamp-2">{role.tagline}</p>

                {/* Focus Badges */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#D6CCC2] dark:border-stone-800">
                  {role.focusAreas.slice(0, 3).map((area, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#F5F2ED] dark:bg-stone-800 text-[#4A4A4A] dark:text-stone-300 border border-[#D6CCC2] dark:border-stone-700"
                    >
                      {area}
                    </span>
                  ))}
                  {role.focusAreas.length > 3 && (
                    <span className="text-[9px] px-2 py-1 text-[#5A5A40] font-bold">
                      +{role.focusAreas.length - 3}
                    </span>
                  )}
                </div>

                <div className="mt-5 flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#5A5A40] dark:text-amber-300">
                  <span>Explore Pillar Details</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'rotate-90 text-[#5A5A40]' : ''}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Pillar Detailed Showcase Box */}
        <div className="rounded-[28px] bg-white dark:bg-stone-900 border border-[#D6CCC2] dark:border-stone-800 p-8 sm:p-12 shadow-lg relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#5A5A40] text-white">
                  {selectedRole.organization}
                </span>
                <span className="text-xs uppercase tracking-widest text-[#5A5A40] font-semibold">&bull; Deep Dive</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-serif font-medium text-[#1A1A1A] dark:text-[#F8F5F2]">
                {selectedRole.title}
              </h3>

              <p className="text-sm sm:text-base font-sans text-[#4A4A4A] dark:text-stone-300 leading-relaxed">
                {selectedRole.description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-[10px] font-bold text-[#5A5A40] uppercase tracking-[0.2em]">Key Achievements &amp; Impact</h4>
                <ul className="space-y-2.5">
                  {selectedRole.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-sans text-[#1A1A1A] dark:text-stone-200">
                      <CheckCircle className="w-4 h-4 text-[#5A5A40] dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5A5A40] hover:bg-[#484833] text-[#F8F5F2] font-semibold text-xs uppercase tracking-widest shadow-md transition-all"
                >
                  <span>Inquire Regarding {selectedRole.organization}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Pillar Visual Asset */}
            <div className="lg:col-span-5">
              {selectedRole.image ? (
                <div className="relative aspect-video sm:aspect-4/3 rounded-[20px] overflow-hidden border border-[#D6CCC2] dark:border-stone-700 shadow-md group">
                  <img
                    src={selectedRole.image}
                    alt={selectedRole.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-[#F8F5F2]/90 dark:bg-stone-900/90 backdrop-blur-md border border-[#D6CCC2] dark:border-stone-700">
                    <span className="text-xs font-serif font-bold text-[#1A1A1A] dark:text-white block">{selectedRole.title}</span>
                    <span className="text-[11px] font-sans text-[#4A4A4A] dark:text-stone-300">{selectedRole.tagline}</span>
                  </div>
                </div>
              ) : (
                <div className="aspect-video sm:aspect-4/3 rounded-[20px] bg-[#EFEDE8] dark:bg-stone-800 border border-[#D6CCC2] dark:border-stone-700 p-8 flex flex-col justify-center space-y-4">
                  <div className="flex items-center gap-2 text-[#5A5A40] font-semibold text-sm uppercase tracking-wider">
                    <Code className="w-5 h-5 text-[#5A5A40]" />
                    <span>Tech Stack &amp; Methodology</span>
                  </div>
                  <p className="text-xs font-sans text-[#4A4A4A] dark:text-stone-300 leading-relaxed">
                    Mubaarakah combines modern React &amp; TypeScript engineering with Python microservices and Swift/SwiftUI iOS prototyping.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Tailwind CSS', 'Python FastAPI', 'SwiftUI', 'Git/GitHub'].map((t) => (
                      <span key={t} className="px-3 py-1 rounded-md bg-[#F5F2ED] dark:bg-stone-900 text-[#1A1A1A] dark:text-stone-200 text-xs font-mono border border-[#D6CCC2] dark:border-stone-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

