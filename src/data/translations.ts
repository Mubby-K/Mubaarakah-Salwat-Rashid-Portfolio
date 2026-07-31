export type Language = 'en' | 'fr' | 'sw';

export interface TranslationSet {
  nav: {
    about: string;
    pillars: string;
    demos: string;
    projects: string;
    skills: string;
    contact: string;
    aiConcierge: string;
    location: string;
  };
  hero: {
    locationTag: string;
    availability: string;
    headlineStart: string;
    headlineHighlight1: string;
    headlineMiddle: string;
    headlineHighlight2: string;
    subtext: string;
    impactGirls: string;
    impactSchools: string;
    impactSkincare: string;
    testDemosBtn: string;
    exploreWorkBtn: string;
    askAiBtn: string;
    roles: string[];
  };
  pillars: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
  };
  demos: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
    auditTab: string;
    cosmeticsTab: string;
    codeTab: string;
  };
  projects: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
  };
  skills: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
  };
  contact: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
    sendMessage: string;
    nameLabel: string;
    emailLabel: string;
    inquiryLabel: string;
    messageLabel: string;
    submitBtn: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationSet> = {
  en: {
    nav: {
      about: 'About',
      pillars: '3 Pillars',
      demos: 'Demos',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
      aiConcierge: 'Ask AI Concierge',
      location: 'Accra, Ghana — Global Reach',
    },
    hero: {
      locationTag: 'Accra, Ghana',
      availability: 'Available for Projects & Partnerships',
      headlineStart: 'Crafting',
      headlineHighlight1: 'Value',
      headlineMiddle: 'Through',
      headlineHighlight2: 'Innovation.',
      subtext: 'Based in Accra, Ghana, I build clean digital products, scalable brands, and technology-driven social initiatives that solve real-world problems across Africa and beyond.',
      impactGirls: 'Girls Impacted',
      impactSchools: 'Schools Audited',
      impactSkincare: 'Rapeseed Skincare',
      testDemosBtn: 'Test Interactive Demos',
      exploreWorkBtn: 'Explore Featured Work',
      askAiBtn: 'Ask AI Assistant',
      roles: [
        'Frontend Developer (React & TypeScript)',
        'Founder — Umoja Foundation',
        'Founder — Thamani Cosmetics',
        'Python FastAPI & Swift Developer',
        'Social Impact Advocate in Accra, Ghana'
      ],
    },
    pillars: {
      badge: 'Pan-African Ecosystem',
      titleStart: 'The Three Pillars of',
      titleHighlight: 'My Life Work',
      subtitle: 'Blending software engineering, girl-child empowerment in Ghana, and luxury African cosmetics.',
    },
    demos: {
      badge: 'Interactive Experience',
      titleStart: 'Test Live',
      titleHighlight: 'Built Applications',
      subtitle: 'Test the Safe Schools sanitation audit engine, formulate custom Thamani rapeseed skincare, or run Python & Swift backend code samples.',
      auditTab: 'Safe Schools Audit',
      cosmeticsTab: 'Thamani Finder',
      codeTab: 'Code Runner',
    },
    projects: {
      badge: 'Portfolio Showcase',
      titleStart: 'Featured Work &',
      titleHighlight: 'Case Studies',
      subtitle: 'Filter through frontend applications, social impact platforms, luxury branding, and Python/Swift code bases.',
    },
    skills: {
      badge: 'Competencies & Expertise',
      titleStart: 'Skills, Tools &',
      titleHighlight: 'Technologies',
      subtitle: 'From responsive React & TypeScript interfaces and Python APIs to clean beauty formulation and nonprofit leadership.',
    },
    contact: {
      badge: "Let's Connect & Collaborate",
      titleStart: 'Get in Touch with',
      titleHighlight: 'Mubaarakah',
      subtitle: "Whether you want to discuss a frontend web project, collaborate with Umoja Foundation, or connect regarding Thamani Cosmetics wholesale, I'd love to hear from you.",
      sendMessage: 'Send a Message',
      nameLabel: 'Your Full Name *',
      emailLabel: 'Email Address *',
      inquiryLabel: 'Inquiry Focus Area *',
      messageLabel: 'Message Details *',
      submitBtn: 'Send Message',
    },
  },

  fr: {
    nav: {
      about: 'À propos',
      pillars: '3 Piliers',
      demos: 'Démos',
      projects: 'Projets',
      skills: 'Compétences',
      contact: 'Contact',
      aiConcierge: 'IA Concierge',
      location: 'Accra, Ghana — Rayonnement Mondial',
    },
    hero: {
      locationTag: 'Accra, Ghana',
      availability: 'Disponible pour projets & partenariats',
      headlineStart: 'Créer de la',
      headlineHighlight1: 'Valeur',
      headlineMiddle: 'par',
      headlineHighlight2: "l'Innovation.",
      subtext: 'Basée à Accra, au Ghana, je conçois des produits numériques épurés, des marques évolutives et des initiatives sociales technologiques qui résolvent des défis réels en Afrique et au-delà.',
      impactGirls: 'Filles Impactées',
      impactSchools: 'Écoles Auditées',
      impactSkincare: 'Soins au Colza',
      testDemosBtn: 'Tester les Démos',
      exploreWorkBtn: 'Explorer les Projets',
      askAiBtn: 'Consulter l’Assistant IA',
      roles: [
        'Développeuse Frontend (React & TypeScript)',
        'Fondatrice — Fondation Umoja',
        'Fondatrice — Thamani Cosmetics',
        'Développeuse Python FastAPI & Swift',
        'Inspiratrice d’Impact Social à Accra, Ghana'
      ],
    },
    pillars: {
      badge: 'Écosystème Panafricain',
      titleStart: 'Les Trois Piliers de',
      titleHighlight: 'Mon Engagement',
      subtitle: 'Allier ingénierie logicielle, autonomisation des jeunes filles au Ghana et cosmétique africaine de luxe.',
    },
    demos: {
      badge: 'Expérience Interactive',
      titleStart: 'Tester les',
      titleHighlight: 'Applications en Direct',
      subtitle: 'Testez le moteur d’audit sanitaire Safe Schools, formulez des soins au colza Thamani ou exécutez des extraits de code Python & Swift.',
      auditTab: 'Audit Safe Schools',
      cosmeticsTab: 'Formulateur Thamani',
      codeTab: 'Exécuteur de Code',
    },
    projects: {
      badge: 'Vitrine de Projets',
      titleStart: 'Projets Phares &',
      titleHighlight: 'Études de Cas',
      subtitle: 'Explorez des applications web frontend, des plateformes à impact social, des identités de marque et du code Python/Swift.',
    },
    skills: {
      badge: 'Compétences & Expertise',
      titleStart: 'Compétences, Outils &',
      titleHighlight: 'Technologies',
      subtitle: 'Des interfaces réactives React & TypeScript et API Python aux formulations cosmétiques et à la direction d’ONG.',
    },
    contact: {
      badge: 'Collaborons Ensemble',
      titleStart: 'Entrer en Contact avec',
      titleHighlight: 'Mubaarakah',
      subtitle: 'Que vous souhaitiez discuter d’un projet web, collaborer avec la Fondation Umoja ou échanger sur Thamani Cosmetics, je serai ravie de vous répondre.',
      sendMessage: 'Envoyer un Message',
      nameLabel: 'Nom Complet *',
      emailLabel: 'Adresse E-mail *',
      inquiryLabel: 'Sujet de la Demande *',
      messageLabel: 'Détails du Message *',
      submitBtn: 'Envoyer le Message',
    },
  },

  sw: {
    nav: {
      about: 'Kuhusu',
      pillars: 'Nguzo 3',
      demos: 'Onyesho',
      projects: 'Miradi',
      skills: 'Ujuzi',
      contact: 'Mawasiliano',
      aiConcierge: 'Uliza AI',
      location: 'Accra, Ghana — Kazi Duniani',
    },
    hero: {
      locationTag: 'Accra, Ghana',
      availability: 'Nipo Tayari kwa Miradi na Ushirikiano',
      headlineStart: 'Kuunda',
      headlineHighlight1: 'Thamani',
      headlineMiddle: 'Kupitia',
      headlineHighlight2: 'Ubunifu.',
      subtext: 'Kutoka Accra, Ghana, ninaunda bidhaa za kidijitali, chapa endelevu, na miradi ya kijamii inayotumia teknolojia kutatua changamoto barani Afrika na duniani.',
      impactGirls: 'Wasichana Waliofikiwa',
      impactSchools: 'Shule Zilizokaguliwa',
      impactSkincare: 'Mafuta ya Kanola',
      testDemosBtn: 'Jaribu Onyesho',
      exploreWorkBtn: 'Tazama Miradi',
      askAiBtn: 'Uliza Msaidizi wa AI',
      roles: [
        'Mwandishi wa Programu za Web (React & TypeScript)',
        'Mwanzilishi — Umoja Foundation',
        'Mwanzilishi — Thamani Cosmetics',
        'Mwandishi wa Python FastAPI & Swift',
        'Mwanaharakati wa Maendeleo Accra, Ghana'
      ],
    },
    pillars: {
      badge: 'Mfumo wa Panafrika',
      titleStart: 'Nguzo Tatu za',
      titleHighlight: 'Kazi Yangu',
      subtitle: 'Kujenga teknolojia, kuinua mtoto wa kike Ghana, na kutengeneza vipodozi vya asili vya Thamani.',
    },
    demos: {
      badge: 'Uzoefu wa Mwingiliano',
      titleStart: 'Jaribu Live',
      titleHighlight: 'Mifumo Iliyoundwa',
      subtitle: 'Pima usafi wa shule za Safe Schools, tengeneza vipodozi vya kanola za Thamani, au endesha kodi za Python & Swift.',
      auditTab: 'Ukaguzi wa Safe Schools',
      cosmeticsTab: 'Kipodozi cha Thamani',
      codeTab: 'Mjaribu Kodi',
    },
    projects: {
      badge: 'Maonyesho ya Miradi',
      titleStart: 'Kazi Kuu &',
      titleHighlight: 'Uchambuzi wa Miradi',
      subtitle: 'Tazama mifumo ya web, majukwaa ya kijamii, chapa za kimataifa, na kodi za Python na Swift.',
    },
    skills: {
      badge: 'Ujuzi na Utaalamu',
      titleStart: 'Ujuzi, Zana &',
      titleHighlight: 'Teknolojia',
      subtitle: 'Kutoka kwa mifumo ya React & TypeScript na Python API hadi utengenezaji wa vipodozi na uongozi wa taasisi.',
    },
    contact: {
      badge: 'Tushirikiane Pamoja',
      titleStart: 'Wasiliana na',
      titleHighlight: 'Mubaarakah',
      subtitle: 'Iwe unataka mradi wa web, ushirikiano na Umoja Foundation, au kuagiza bidhaa za Thamani Cosmetics, nitafurahi kuongea nawe.',
      sendMessage: 'Tuma Ujumbe',
      nameLabel: 'Jina Lako Kamili *',
      emailLabel: 'Barua Pepe *',
      inquiryLabel: 'Aina ya Ujumbe *',
      messageLabel: 'Maelezo ya Ujumbe *',
      submitBtn: 'Tuma Ujumbe',
    },
  },
};
