import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { RolesSection } from './components/RolesSection';
import { InteractiveDemos } from './components/InteractiveDemos';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AiAssistantModal } from './components/AiAssistantModal';
import { AdminInquiriesModal } from './components/AdminInquiriesModal';
import { Language } from './data/translations';

export default function App() {
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [isAdminInboxOpen, setIsAdminInboxOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'roles', 'demos', 'projects', 'skills', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F5F2] dark:bg-[#1A1A1A] text-[#1A1A1A] dark:text-[#F8F5F2] font-sans selection:bg-[#5A5A40] selection:text-white antialiased transition-colors duration-300">
      {/* Navbar */}
      <Navbar
        onOpenAiAssistant={() => setIsAiModalOpen(true)}
        onOpenAdminInbox={() => setIsAdminInboxOpen(true)}
        activeSection={activeSection}
        language={language}
        onLanguageChange={setLanguage}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenAiAssistant={() => setIsAiModalOpen(true)}
          language={language}
        />

        {/* About Section Anchor / Intro */}
        <AboutSection language={language} />

        {/* 3 Pillars Section */}
        <RolesSection />

        {/* Live Interactive Demos Section */}
        <InteractiveDemos />

        {/* Projects Showcase */}
        <ProjectsSection />

        {/* Skills & Code Matrix */}
        <SkillsSection />

        {/* Contact Funnel */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Gemini AI Assistant Modal */}
      <AiAssistantModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
      />

      {/* Admin Contact Inquiries Inbox Modal */}
      <AdminInquiriesModal
        isOpen={isAdminInboxOpen}
        onClose={() => setIsAdminInboxOpen(false)}
      />
    </div>
  );
}

