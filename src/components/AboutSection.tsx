import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../data/translations';
import { Quote, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  language: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const aboutText = {
    en: {
      badge: 'Driven by Purpose, Innovation & Community Development',
      title: 'Creating solutions that empower people & strengthen communities.',
      body: 'I combine web development, digital design, entrepreneurship, and community development. Whether I\'m developing responsive web applications, formulating clean heritage cosmetics, or leading nonprofit initiatives in Accra, my goal remains constant:',
      highlight: 'Solve real problems and build sustainable value.',
      quote: '"I am passionate about building digital experiences that make a difference. Whether through clean, responsive websites, innovative nonprofit solutions, or purpose-driven entrepreneurship, I strive to create technology and brands that empower people, strengthen communities, and inspire lasting impact."'
    },
    fr: {
      badge: 'Orientée vers l\'Impact, l\'Innovation & le Développement Communautaire',
      title: 'Créer des solutions qui autonomisent les individus & renforcent les communautés.',
      body: 'J\'allie développement web, design numérique, entrepreneuriat et action communautaire. Qu\'il s\'agisse de créer des applications web réactives, de formuler des soins cosmétiques du patrimoine ou de diriger des initiatives à Accra, mon objectif reste inchangé :',
      highlight: 'Résoudre des problèmes réels et bâtir une valeur durable.',
      quote: '"Je suis passionnée par la création d\'expériences numériques utiles. Que ce soit à travers des sites web fluides, des solutions caritatives innovantes ou un entrepreneuriat engagé, je m\'efforce de créer des technologies et des marques qui inspirent un impact durable."'
    },
    sw: {
      badge: 'Inayoongozwa na Madhumuni, Ubunifu & Maendeleo ya Jamii',
      title: 'Kuunda suluhu zinazoinua watu & kuimarisha jamii.',
      body: 'Ninajumuisha uandishi wa programu za web, ubunifu wa kidijitali, ujasiriamali na maendeleo ya jamii. Iwe ninatengeneza mifumo ya web, kemia ya vipodozi vya asili, au kuongoza taasisi Accra, lengo langu ni moja:',
      highlight: 'Kutatua changamoto za kweli na kuunda thamani endelevu.',
      quote: '"Nina shauku ya kuunda mifumo ya kidijitali inayoleta mabadiliko. Iwe kupitia tovuti za kisasa, mifumo ya kijamii, au ujasiriamali wenye tija, ninajitahidi kuunda teknolojia na chapa zinazoinua watu na kuhamasisha maendeleo endelevu."'
    }
  };

  const ab = aboutText[language];

  // Motion variants for container and children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  const quoteVariants = {
    hidden: { opacity: 0, y: 32, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-[#EFEDE8] dark:bg-stone-900 border-t border-[#D6CCC2] dark:border-stone-800 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="bg-white dark:bg-[#1A1A1A] border border-[#D6CCC2] dark:border-stone-800 rounded-[28px] p-8 sm:p-12 shadow-md relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariants}
        >
          <div className="max-w-3xl space-y-5">
            {/* Badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.25em] bg-[#5A5A40] text-amber-100 dark:bg-amber-200/20 dark:text-amber-200 border border-[#5A5A40]/20 dark:border-amber-200/30">
                <Sparkles className="w-3 h-3 text-amber-300 shrink-0" />
                {ab.badge}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-serif font-medium text-[#1A1A1A] dark:text-[#F8F5F2] leading-tight"
            >
              {ab.title}
            </motion.h2>

            {/* Body */}
            <motion.p
              variants={itemVariants}
              className="text-base font-sans text-[#4A4A4A] dark:text-stone-300 leading-relaxed"
            >
              {ab.body}{' '}
              <strong className="text-[#1A1A1A] dark:text-white font-semibold">
                {ab.highlight}
              </strong>
            </motion.p>

            {/* Quote Block */}
            <motion.div
              variants={quoteVariants}
              className="relative p-6 sm:p-8 rounded-2xl bg-[#F5F2ED] dark:bg-stone-800/90 border-l-4 border-[#5A5A40] dark:border-amber-300 text-[#4A4A4A] dark:text-stone-200 font-serif italic text-base sm:text-lg mt-6 leading-relaxed shadow-sm group hover:border-[#484833] transition-colors"
            >
              <Quote className="w-8 h-8 text-[#5A5A40]/30 dark:text-amber-300/30 absolute top-4 right-4 pointer-events-none" />
              <p className="relative z-10">{ab.quote}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
