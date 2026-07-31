import React, { useState, useEffect } from 'react';
import { HERO_DATA } from '../data/portfolioData';
import { ArrowRight, MapPin, Sparkles, Code, Flower2, Terminal } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface HeroProps {
  onOpenAiAssistant: () => void;
  language: Language;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAiAssistant, language }) => {
  const t = TRANSLATIONS[language].hero;
  const roles = t.roles;

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [roles]);

  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-[#F8F5F2] dark:bg-[#1A1A1A] text-[#1A1A1A] dark:text-[#F8F5F2] overflow-hidden border-b border-[#D6CCC2] dark:border-stone-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Badges Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#EFEDE8] dark:bg-stone-800 border border-[#D6CCC2] dark:border-stone-700 text-[#5A5A40] dark:text-stone-300">
                <MapPin className="w-3.5 h-3.5 text-[#5A5A40]" />
                <span>{HERO_DATA.location}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-emerald-500/10 border border-emerald-600/30 text-emerald-800 dark:text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-ping" />
                <span>{t.availability}</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-[0.95] font-light text-[#1A1A1A] dark:text-[#F8F5F2]">
              {t.headlineStart} <span className="font-medium italic">{t.headlineHighlight1}</span> <br className="hidden sm:inline" />
              {t.headlineMiddle} <span className="text-[#5A5A40] dark:text-amber-200/90 font-medium">{t.headlineHighlight2}</span>
            </h1>

            {/* Cycling Role Pill */}
            <div className="h-8 flex items-center justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFEDE8] dark:bg-stone-800 border border-[#D6CCC2] dark:border-stone-700 text-[#1A1A1A] dark:text-stone-200 text-xs font-sans transition-all duration-500">
                <Terminal className="w-3.5 h-3.5 text-[#5A5A40] dark:text-amber-400" />
                <span className="font-semibold text-[#5A5A40] dark:text-amber-300">{roles[currentRoleIndex]}</span>
              </div>
            </div>

            {/* Subtext */}
            <p className="text-base sm:text-lg font-sans text-[#4A4A4A] dark:text-stone-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {t.subtext}
            </p>

            {/* Impact Metric Chips */}
            <div className="grid grid-cols-3 gap-3 pt-4 max-w-xl mx-auto lg:mx-0 border-t border-[#D6CCC2] dark:border-stone-800">
              <div className="p-4 rounded-2xl bg-[#EFEDE8] dark:bg-stone-900 border border-[#D6CCC2] dark:border-stone-800 text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#5A5A40] dark:text-amber-200">200+</div>
                <div className="text-[10px] uppercase tracking-wider text-[#4A4A4A] dark:text-stone-400 font-semibold mt-1">{t.impactGirls}</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#EFEDE8] dark:bg-stone-900 border border-[#D6CCC2] dark:border-stone-800 text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#5A5A40] dark:text-emerald-300">10+</div>
                <div className="text-[10px] uppercase tracking-wider text-[#4A4A4A] dark:text-stone-400 font-semibold mt-1">{t.impactSchools}</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#EFEDE8] dark:bg-stone-900 border border-[#D6CCC2] dark:border-stone-800 text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#5A5A40] dark:text-amber-300">100%</div>
                <div className="text-[10px] uppercase tracking-wider text-[#4A4A4A] dark:text-stone-400 font-semibold mt-1">{t.impactSkincare}</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-4">
              <a
                id="hero-view-demos-btn"
                href="#demos"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5A5A40] hover:bg-[#484833] text-[#F8F5F2] font-semibold text-xs uppercase tracking-widest shadow-md transition-all hover:scale-[1.02]"
              >
                <span>{t.testDemosBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="hero-view-projects-btn"
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#EFEDE8] dark:bg-stone-800 hover:bg-[#D6CCC2]/60 text-[#1A1A1A] dark:text-stone-200 border border-[#D6CCC2] dark:border-stone-700 font-semibold text-xs uppercase tracking-widest transition-all"
              >
                <span>{t.exploreWorkBtn}</span>
              </a>

              <button
                id="hero-ask-ai-btn"
                onClick={onOpenAiAssistant}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1A1A1A] dark:bg-stone-900 hover:bg-stone-800 text-[#F8F5F2] border border-[#D6CCC2] dark:border-stone-700 text-xs font-semibold uppercase tracking-widest transition-all"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>{t.askAiBtn}</span>
              </button>
            </div>

          </div>

          {/* Right Column: Hero Generated Portrait & Feature Cards */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Main Portrait Box */}
            <div className="relative w-full max-w-md bg-white dark:bg-stone-900 border border-[#D6CCC2] dark:border-stone-800 rounded-[28px] p-4 shadow-xl">
              
              <div className="relative aspect-square rounded-[20px] overflow-hidden mb-4 bg-[#EFEDE8]">
                <img
                  src={HERO_DATA.portraitImage}
                  alt="Mubaarakah Salwat Rashid"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/70 via-transparent to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-2xl bg-[#F8F5F2]/90 dark:bg-[#1A1A1A]/90 backdrop-blur-md border border-[#D6CCC2] dark:border-stone-700 text-left">
                  <div className="text-sm font-serif font-bold text-[#1A1A1A] dark:text-[#F8F5F2] flex items-center justify-between">
                    <span>Mubaarakah Salwat Rashid</span>
                    <span className="text-[9px] uppercase tracking-wider font-sans font-bold text-[#5A5A40] dark:text-emerald-400 px-2 py-0.5 rounded-full bg-[#EFEDE8] dark:bg-stone-800 border border-[#D6CCC2] dark:border-stone-700">
                      Accra, Ghana
                    </span>
                  </div>
                  <p className="text-[11px] font-sans text-[#4A4A4A] dark:text-stone-300 mt-1">
                    Frontend Dev • Founder @ Umoja &amp; Thamani
                  </p>
                </div>
              </div>

              {/* Quick Tech & Language Chips */}
              <div className="grid grid-cols-2 gap-2 text-left">
                <div className="p-3 rounded-2xl bg-[#F5F2ED] dark:bg-stone-800/60 border border-[#D6CCC2] dark:border-stone-700/60 flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#5A5A40] text-white">
                    <Code className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#1A1A1A] dark:text-stone-100">Frontend &amp; APIs</div>
                    <div className="text-[10px] text-[#4A4A4A] dark:text-stone-400">React, TypeScript, Python</div>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-[#F5F2ED] dark:bg-stone-800/60 border border-[#D6CCC2] dark:border-stone-700/60 flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#1A1A1A] text-amber-200">
                    <Flower2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#1A1A1A] dark:text-stone-100">Heritage Brand</div>
                    <div className="text-[10px] text-[#4A4A4A] dark:text-stone-400">Thamani Skincare</div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};


