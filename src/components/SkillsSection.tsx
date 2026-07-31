import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Layout, Terminal, Figma, Briefcase, CheckCircle2, Clock, Sparkles, Award } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-[#5A5A40] dark:text-stone-300" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-[#5A5A40] dark:text-stone-300" />;
      case 'Figma':
        return <Figma className="w-5 h-5 text-[#5A5A40] dark:text-stone-300" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-[#5A5A40] dark:text-stone-300" />;
      default:
        return <Layout className="w-5 h-5 text-[#5A5A40] dark:text-stone-300" />;
    }
  };

  const activeCategory = SKILL_CATEGORIES[activeCategoryIndex];

  return (
    <section id="skills" className="py-20 bg-[#EFEDE8] dark:bg-stone-900 text-[#1A1A1A] dark:text-[#F8F5F2] border-t border-[#D6CCC2] dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.25em] bg-[#F5F2ED] dark:bg-stone-800 text-[#5A5A40] dark:text-stone-300 border border-[#D6CCC2] dark:border-stone-700">
            Competencies &amp; Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#1A1A1A] dark:text-[#F8F5F2]">
            Skills, Tools &amp; <span className="font-medium italic text-[#5A5A40] dark:text-amber-200">Technologies</span>
          </h2>
          <p className="text-[#4A4A4A] dark:text-stone-300 text-base font-sans">
            Hover over any skill or tool card below to inspect experience duration and proficiency metrics.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isSelected = idx === activeCategoryIndex;
            return (
              <button
                key={cat.name}
                id={`skill-cat-${idx}`}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  isSelected
                    ? 'bg-[#5A5A40] text-white shadow-md'
                    : 'bg-[#F5F2ED] dark:bg-stone-800 text-[#4A4A4A] dark:text-stone-300 hover:text-[#1A1A1A] border border-[#D6CCC2] dark:border-stone-700'
                }`}
              >
                {getCategoryIcon(cat.icon)}
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Grid */}
        <div className="rounded-[28px] bg-white dark:bg-stone-900 border border-[#D6CCC2] dark:border-stone-800 p-8 sm:p-12 shadow-lg">
          <div className="flex items-center justify-between pb-6 border-b border-[#D6CCC2] dark:border-stone-800 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-[#F5F2ED] dark:bg-stone-800 border border-[#D6CCC2] dark:border-stone-700">
                {getCategoryIcon(activeCategory.icon)}
              </div>
              <div>
                <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] dark:text-[#F8F5F2]">{activeCategory.name}</h3>
                <p className="text-xs text-[#5A5A40] dark:text-stone-300 font-sans">Core proficiencies and tools utilized by Mubaarakah • Hover cards for tooltips</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeCategory.skills.map((skill, idx) => (
              <div
                key={idx}
                className="group relative p-5 rounded-[20px] bg-[#F5F2ED] dark:bg-stone-800/80 border border-[#D6CCC2] dark:border-stone-700 hover:border-[#5A5A40] dark:hover:border-amber-300/60 hover:bg-white dark:hover:bg-stone-800 transition-all duration-200 space-y-2.5 shadow-sm hover:shadow-md"
              >
                {/* Floating Experience & Proficiency Tooltip */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-top-14 scale-95 group-hover:scale-100 transition-all duration-200 pointer-events-none z-30 min-w-max">
                  <div className="bg-[#1A1A1A] dark:bg-stone-950 text-white text-[11px] font-sans py-1.5 px-3.5 rounded-xl shadow-2xl border border-amber-200/30 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                    <span className="font-semibold text-amber-100">
                      {skill.proficiencyTooltip || `${skill.yearsOfExperience || '3+ Years'} • ${skill.level}% Proficiency`}
                    </span>
                    {/* Tooltip triangle arrow */}
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1A1A1A] dark:bg-stone-950 rotate-45 border-r border-b border-amber-200/30" />
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5A5A40] dark:text-amber-300 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-bold text-[#1A1A1A] dark:text-white group-hover:text-[#5A5A40] dark:group-hover:text-amber-200 transition-colors">
                      {skill.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {skill.yearsOfExperience && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-medium font-mono px-2 py-0.5 rounded-md bg-[#EFEDE8] dark:bg-stone-900 text-[#5A5A40] dark:text-stone-300 border border-[#D6CCC2] dark:border-stone-700">
                        <Clock className="w-3 h-3 text-[#5A5A40] dark:text-amber-200" />
                        <span>{skill.yearsOfExperience}</span>
                      </span>
                    )}

                    {skill.tag && (
                      <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-white dark:bg-stone-900 text-[#5A5A40] dark:text-amber-200 border border-[#D6CCC2] dark:border-stone-700 shadow-2xs">
                        {skill.tag}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-xs font-sans text-[#4A4A4A] dark:text-stone-300 pl-6 leading-relaxed">
                  {skill.description}
                </p>

                {/* Progress bar with hover percentage badge */}
                <div className="pt-2 pl-6 space-y-1">
                  <div className="flex justify-between items-center text-[10px] font-mono text-[#5A5A40] dark:text-stone-400 font-semibold">
                    <span>Proficiency Index</span>
                    <span className="text-[#1A1A1A] dark:text-amber-200 font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-[#D6CCC2] dark:bg-stone-700 rounded-full overflow-hidden relative">
                    <div
                      className="h-full bg-[#5A5A40] dark:bg-amber-300/80 rounded-full transition-all duration-700 group-hover:bg-amber-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

