import { Project, Role, SkillCategory, CodeSnippet, CosmeticProduct } from '../types';

export const HERO_DATA = {
  name: 'Mubaarakah Salwat Rashid',
  headline: 'Frontend Developer, Founder & Social Impact Entrepreneur',
  subtext: 'Based in Accra, Ghana, I build clean digital products, scalable brands, and technology-driven social initiatives that solve real-world problems across Africa and beyond.',
  location: 'Accra, Ghana',
  availability: 'Open for Frontend Web Projects, Tech Consulting & Foundations',
  email: 'mubby.thamani@gmail.com',
  phone: '+233 55 843 3835',
  github: 'https://github.com/Mubby-K',
  linkedin: 'https://www.linkedin.com/in/mubaarakah-salwat-rashid-441b21170',
  portraitImage: '/src/assets/images/mubaarakah_portrait_1784831283674.jpg',
};

export const ROLES_DATA: Role[] = [
  {
    id: 'frontend-dev',
    title: 'Frontend & Software Developer',
    organization: 'Independent / Tech Creator',
    tagline: 'Crafting modern, accessible, and high-performance web & mobile interfaces.',
    icon: 'Code',
    description: 'Specializing in clean HTML5, CSS3/Tailwind, React, TypeScript, Python backend APIs, and Swift mobile app prototyping. Passionate about building seamless user experiences with high performance and accessibility.',
    focusAreas: ['React & TypeScript', 'Python FastAPI', 'SwiftUI Mobile', 'Tailwind CSS', 'Figma Prototyping', 'Git & CI/CD'],
    color: 'from-blue-600 to-indigo-700',
    highlights: [
      'Built responsive web interfaces and reusable component systems',
      'Engineered Python FastAPI microservices for data collection & reporting',
      'Designed mobile-first UI mockups using Swift/SwiftUI for social impact tools'
    ]
  },
  {
    id: 'umoja-foundation',
    title: 'Founder & Executive Director',
    organization: 'Umoja Foundation',
    tagline: 'Advancing girls’ education, dignity, and prevention of early forced marriage in Ghana.',
    icon: 'HeartHandshake',
    description: 'Leading grassroots and technology-backed initiatives in Ghana. Driving the Safe Schools, Safe Girls program to audit school sanitation, uphold dignity, and keep girls in school.',
    focusAreas: ['Safe Schools, Safe Girls Initiative', 'Sanitation Audits', 'Policy Advocacy', 'Girl Child Protection', 'Youth Empowerment'],
    color: 'from-emerald-600 to-teal-700',
    image: '/src/assets/images/umoja_impact_1784830517883.jpg',
    highlights: [
      'Audited sanitation & infrastructure across 10+ Ghanaian schools',
      'Impacted 200+ schoolgirls with menstrual hygiene & educational resources',
      'Advocated against early marriage through community leadership dialogues'
    ]
  },
  {
    id: 'thamani-cosmetics',
    title: 'Founder & Formulator',
    organization: 'Thamani Cosmetics',
    tagline: 'African heritage luxury skincare celebrating natural beauty with pure rapeseed formulations.',
    icon: 'Sparkles',
    description: 'An African heritage beauty and skincare brand derived from the Swahili word for "value & worth". Blending rich African botanicals, rapeseed oil, shea butter, and essential oils into premium skin-repair formulations.',
    focusAreas: ['Clean Beauty Formulations', 'Rapeseed Oil Innovations', 'Brand Identity & Packaging', 'E-Commerce Growth', 'African Botanical Science'],
    color: 'from-amber-600 to-yellow-700',
    image: '/src/assets/images/thamani_cosmetics_1784830529770.jpg',
    highlights: [
      'Formulated flagship Timbuktu Glow Body Butter & Velvet Butter Blend',
      'Created sustainable packaging and African heritage brand aesthetics',
      'Distributed clean skincare solutions promoting skin repair and natural barrier protection'
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'safe-schools-platform',
    title: 'Safe Schools, Safe Girls Platform',
    category: 'nonprofit',
    categoryLabel: 'Tech & Social Impact',
    shortDescription: 'Digital auditing platform for tracking school sanitation, water access, and safety metrics for girls across Ghana.',
    longDescription: 'A technology-driven advocacy platform created for the Umoja Foundation. It allows community auditors and school administrators to log sanitation infrastructure quality, toilet ratios, water availability, and safety indicators in real-time.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Python FastAPI', 'Recharts', 'Figma'],
    image: '/src/assets/images/umoja_impact_1784830517883.jpg',
    featured: true,
    metrics: [
      { label: 'Schools Audited', value: '10+' },
      { label: 'Girls Impacted', value: '200+' },
      { label: 'Policy Action Rate', value: '88%' }
    ],
    problem: 'Many rural and urban schools in Ghana lack functional, dignified sanitation facilities, forcing girls to miss up to 20% of school days during menstruation.',
    solution: 'Built a lightweight, offline-capable digital survey and analytics platform that outputs policy scorecards for local authorities and donors.'
  },
  {
    id: 'thamani-ecommerce',
    title: 'Thamani Cosmetics Brand & Storefront',
    category: 'brand',
    categoryLabel: 'E-Commerce & Branding',
    shortDescription: 'E-commerce experience and luxury brand identity for African heritage rapeseed oil skincare products.',
    longDescription: 'Designed and engineered a high-converting luxury web storefront for Thamani Cosmetics. Features custom product ingredient breakdowns, skin type quiz, scent selectors, and seamless checkout funnel.',
    techStack: ['React', 'Tailwind CSS', 'Figma', 'Python Backend API', 'Stripe Integration Concept'],
    image: '/src/assets/images/thamani_cosmetics_1784830529770.jpg',
    featured: true,
    metrics: [
      { label: 'Products', value: '4 Core Formulas' },
      { label: 'Customer Rating', value: '4.9 / 5' },
      { label: 'Natural Ingredients', value: '100%' }
    ],
    problem: 'African consumers and global enthusiasts lacked access to luxury heritage skincare that highlights indigenous rapeseed oil and authentic African butter formulations.',
    solution: 'Crafted an opulent brand identity and digital shopping experience highlighting product science, ingredient transparency, and rich cultural story.'
  },
  {
    id: 'umoja-foundation-web',
    title: 'Umoja Foundation Official Portal',
    category: 'web',
    categoryLabel: 'Frontend Web',
    shortDescription: 'Modern, accessible official website for Umoja Foundation showcasing NGO programs, volunteer application, and donor transparency.',
    longDescription: 'A responsive frontend website engineered to tell the story of Umoja Foundation. It features interactive media galleries, donor impact calculators, and volunteer registration funnels.',
    techStack: ['HTML5', 'CSS3/Tailwind', 'JavaScript ES6+', 'Figma', 'GitHub Pages'],
    featured: true,
    metrics: [
      { label: 'Donation Conversion', value: '+35%' },
      { label: 'Page Speed Index', value: '98/100' }
    ],
    problem: 'The organization required a trustworthy, highly transparent online presence to engage international partners and local community leaders.',
    solution: 'Engineered a modern web portal highlighting real stories, verifiable impact metrics, and streamlined contact pathways.'
  },
  {
    id: 'python-sanitation-api',
    title: 'Sanitation Audit Telemetry API (Python)',
    category: 'code',
    categoryLabel: 'Backend & Python',
    shortDescription: 'RESTful microservice built with Python and FastAPI for calculating school safety scores and automated policy PDF exports.',
    longDescription: 'A Python backend API that validates incoming field survey data, calculates weighted hygiene indices, and generates automated advocacy summaries for local education boards.',
    techStack: ['Python 3.11', 'FastAPI', 'Pydantic', 'Uvicorn', 'PostgreSQL / SQLite'],
    featured: false,
    metrics: [
      { label: 'API Response Time', value: '<45ms' },
      { label: 'Data Validation Rate', value: '100%' }
    ],
    problem: 'Field data gathered by community volunteers needed automated validation and statistical normalization.',
    solution: 'Created a Python microservice with rigorous Pydantic schema validation and instant policy score generation.'
  },
  {
    id: 'swift-mobile-preview',
    title: 'Safe Schools iOS Field App Concept (Swift)',
    category: 'code',
    categoryLabel: 'Mobile & Swift',
    shortDescription: 'Native iOS application built in Swift & SwiftUI for off-grid school inspectors and volunteer field workers.',
    longDescription: 'A sleek iOS application enabling field auditors in remote areas to conduct sanitation assessments without cellular connectivity. Features local offline data persistence and automatic synchronization when online.',
    techStack: ['Swift 5.9', 'SwiftUI', 'CoreData / SwiftData', 'Combine'],
    featured: false,
    metrics: [
      { label: 'Offline Persistence', value: '100% CoreData' },
      { label: 'Target Platform', value: 'iOS 17+' }
    ],
    problem: 'Field auditors in rural Ghana frequently lose mobile signal while visiting distant schools.',
    solution: 'Designed a SwiftUI native app with offline-first local queueing and sync triggers.'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Frontend Web Engineering',
    icon: 'Layout',
    skills: [
      { name: 'HTML5 & Semantic Markup', level: 95, description: 'Accessible structural hierarchy, WCAG standards', tag: 'Expert', yearsOfExperience: '4+ Years', proficiencyTooltip: '4+ Yrs Experience • Expert Level (95% Mastery)' },
      { name: 'CSS3 & Tailwind CSS', level: 92, description: 'Custom design systems, responsive grid/flexbox, animations', tag: 'Advanced', yearsOfExperience: '3.5+ Years', proficiencyTooltip: '3.5+ Yrs Experience • Advanced Responsive Design (92%)' },
      { name: 'JavaScript ES6+ & TypeScript', level: 88, description: 'Modern async/await, typed interfaces, functional paradigms', tag: 'Advanced', yearsOfExperience: '3+ Years', proficiencyTooltip: '3+ Yrs Experience • Production TypeScript & ES6+ (88%)' },
      { name: 'React 18/19 & Hooks', level: 85, description: 'Component architecture, state management, motion/react', tag: 'Advanced', yearsOfExperience: '3+ Years', proficiencyTooltip: '3+ Yrs Experience • Advanced Component Architecture (85%)' },
      { name: 'Responsive & Mobile-First Design', level: 95, description: 'Fluid typography, touch targets, cross-browser compatibility', tag: 'Expert', yearsOfExperience: '4+ Years', proficiencyTooltip: '4+ Yrs Experience • Mobile-First Specialist (95%)' },
      { name: 'Git & GitHub Workflows', level: 88, description: 'Branching strategies, pull requests, GitHub Pages deployment', tag: 'Advanced', yearsOfExperience: '3+ Years', proficiencyTooltip: '3+ Yrs Experience • Branching & CI/CD Deployment (88%)' }
    ]
  },
  {
    name: 'Backend & Mobile (Python & Swift)',
    icon: 'Terminal',
    skills: [
      { name: 'Python & FastAPI', level: 82, description: 'REST APIs, Pydantic validation, data processing & automation', tag: 'Proficient', yearsOfExperience: '2+ Years', proficiencyTooltip: '2+ Yrs Experience • Proficient Microservices (82%)' },
      { name: 'Swift & SwiftUI', level: 78, description: 'Native iOS UI layouts, state management, native mobile components', tag: 'Intermediate', yearsOfExperience: '1.5+ Years', proficiencyTooltip: '1.5+ Yrs Experience • Intermediate iOS Mobile UI (78%)' },
      { name: 'API Design & JSON Services', level: 85, description: 'REST endpoints, error handling, CORS, authentication patterns', tag: 'Advanced', yearsOfExperience: '2.5+ Years', proficiencyTooltip: '2.5+ Yrs Experience • Advanced API Endpoint Design (85%)' },
      { name: 'Data Visualization & Reporting', level: 80, description: 'Recharts, analytical dashboards, audit score metrics', tag: 'Proficient', yearsOfExperience: '2+ Years', proficiencyTooltip: '2+ Yrs Experience • Analytics & Recharts Dashboards (80%)' }
    ]
  },
  {
    name: 'UI/UX & Product Design',
    icon: 'Figma',
    skills: [
      { name: 'Figma & Canva Prototyping', level: 90, description: 'High-fidelity wireframes, interactive UI flows, component libraries', tag: 'Advanced', yearsOfExperience: '3+ Years', proficiencyTooltip: '3+ Yrs Experience • High-Fidelity UI Prototyping (90%)' },
      { name: 'Visual Identity & Brand Design', level: 92, description: 'Luxury color palettes, typography pairs, packaging aesthetics', tag: 'Advanced', yearsOfExperience: '3.5+ Years', proficiencyTooltip: '3.5+ Yrs Experience • Luxury Brand Identity & Packaging (92%)' },
      { name: 'User Research & Accessibility', level: 85, description: 'User interviews, field audits, WCAG color contrast compliance', tag: 'Advanced', yearsOfExperience: '2.5+ Years', proficiencyTooltip: '2.5+ Yrs Experience • WCAG AA Accessibility Audits (85%)' }
    ]
  },
  {
    name: 'Entrepreneurship & Impact',
    icon: 'Briefcase',
    skills: [
      { name: 'Nonprofit Executive Leadership', level: 92, description: 'Umoja Foundation direction, community mobilization, program delivery', tag: 'Leader', yearsOfExperience: '3+ Years', proficiencyTooltip: '3+ Yrs Executive Leadership @ Umoja Foundation (92%)' },
      { name: 'Clean Skincare Science', level: 88, description: 'Rapeseed oil chemistry, botanical butter blends, stability concepts', tag: 'Formulator', yearsOfExperience: '2.5+ Years', proficiencyTooltip: '2.5+ Yrs Botanical Formulation @ Thamani (88%)' },
      { name: 'Grant Applications & Pitching', level: 85, description: 'Impact proposal writing, donor reporting, stakeholder relations', tag: 'Experienced', yearsOfExperience: '2+ Years', proficiencyTooltip: '2+ Yrs Proposal Writing & Donor Pitching (85%)' }
    ]
  }
];

export const CODE_SNIPPETS: CodeSnippet[] = [
  {
    id: 'python-sanitation-score',
    title: 'Python Sanitation Safety Index Calculator',
    language: 'python',
    languageLabel: 'Python (FastAPI / Pydantic)',
    filename: 'sanitation_analyzer.py',
    description: 'Calculates the weighted safety index for a school based on water availability, toilet ratio, and privacy amenities.',
    code: `from pydantic import BaseModel, Field

class SchoolAudit(BaseModel):
    school_name: str
    total_female_students: int = Field(gt=0)
    functional_toilets: int = Field(ge=0)
    has_clean_water: bool
    has_sanitary_bins: bool
    privacy_locks_working: bool

def calculate_sanitation_score(audit: SchoolAudit) -> dict:
    ratio = audit.total_female_students / max(audit.functional_toilets, 1)
    
    # Base score out of 100
    score = 100.0
    
    # Deduct points if toilet ratio exceeds recommended 1:25 threshold
    if ratio > 25:
        score -= min(35.0, (ratio - 25) * 1.5)
        
    if not audit.has_clean_water:
        score -= 25.0
    if not audit.has_sanitary_bins:
        score -= 20.0
    if not audit.privacy_locks_working:
        score -= 20.0
        
    final_score = max(0.0, round(score, 1))
    
    status = "SAFE" if final_score >= 80 else ("NEEDS_UPGRADE" if final_score >= 50 else "CRITICAL")
    
    return {
        "school": audit.school_name,
        "female_student_to_toilet_ratio": f"{round(ratio, 1)}:1",
        "safety_index_score": final_score,
        "status": status,
        "action_required": status != "SAFE"
    }`,
    outputPreview: `{\n  "school": "Accra Central Girls Academy",\n  "female_student_to_toilet_ratio": "28.5:1",\n  "safety_index_score": 70.25,\n  "status": "NEEDS_UPGRADE",\n  "action_required": true\n}`
  },
  {
    id: 'swiftui-school-card',
    title: 'SwiftUI School Audit Inspector View',
    language: 'swift',
    languageLabel: 'Swift 5.9 (SwiftUI iOS)',
    filename: 'SchoolAuditCard.swift',
    description: 'Native iOS card view component displaying audit status badge, ratio indicator, and sync trigger.',
    code: `import SwiftUI

struct SchoolAuditCard: View {
    let schoolName: String
    let safetyScore: Double
    let totalGirls: Int
    
    var scoreColor: Color {
        if safetyScore >= 80 { return .green }
        else if safetyScore >= 50 { return .orange }
        else { return .red }
    }
    
    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack {
                Text(schoolName)
                    .font(.headline)
                    .foregroundColor(.primary)
                Spacer()
                Text("\\(Int(safetyScore))%")
                    .font(.caption)
                    .fontWeight(.bold)
                    .padding(.horizontal, 10)
                    .padding(.vertical, 4)
                    .background(scoreColor.opacity(0.15))
                    .foregroundColor(scoreColor)
                    .cornerRadius(8)
            }
            
            HStack(spacing: 16) {
                Label("\\(totalGirls) Female Students", systemImage: "person.2.fill")
                    .font(.subheadline)
                    .foregroundColor(.secondary)
            }
            
            ProgressView(value: safetyScore, total: 100)
                .tint(scoreColor)
        }
        .padding()
        .background(Color(uiColor: .systemBackground))
        .cornerRadius(12)
        .shadow(color: Color.black.opacity(0.05), radius: 5, x: 0, y: 2)
    }
}`,
    outputPreview: `📱 Preview Render: [Accra Central Girls Academy | Score: 70%] [Progress Bar: 70%] [240 Female Students]`
  },
  {
    id: 'typescript-thamani-quiz',
    title: 'TypeScript Skincare Routine Formulator',
    language: 'typescript',
    languageLabel: 'TypeScript / React',
    filename: 'useSkinRoutine.ts',
    description: 'Custom React hook mapping skin concerns to Thamani rapeseed oil skincare formulas.',
    code: `import { useMemo } from 'react';

export interface SkinProfile {
  skinType: 'dry' | 'combination' | 'normal' | 'sensitive';
  mainConcern: 'dryness' | 'hyperpigmentation' | 'barrier_repair' | 'glow';
}

export function calculateThamaniRoutine(profile: SkinProfile) {
  const routine = [];
  
  if (profile.mainConcern === 'dryness' || profile.skinType === 'dry') {
    routine.push({
      product: 'Velvet Butter Blend',
      keyIngredient: 'Pure Ghanaian Shea + Cold-Pressed Rapeseed Oil',
      useTime: 'Nightly application for deep lipid restoration'
    });
  }
  
  if (profile.mainConcern === 'glow' || profile.mainConcern === 'hyperpigmentation') {
    routine.push({
      product: 'Timbuktu Glow Body Butter',
      keyIngredient: 'Rapeseed Oil, Vitamin E, Botanical Glow Essence',
      useTime: 'Morning & Evening after shower'
    });
  }
  
  routine.push({
    product: 'Repair Facial & Body Oil',
    keyIngredient: 'Lightweight Rapeseed & Botanical Seed Matrix',
    useTime: 'Sealant oil phase over clean skin'
  });
  
  return routine;
}`,
    outputPreview: `[2 Recommended Products: Velvet Butter Blend + Repair Facial Oil]`
  }
];

export const THAMANI_PRODUCTS: CosmeticProduct[] = [
  {
    id: 'timbuktu-glow',
    name: 'Timbuktu Glow Body Butter',
    tagline: 'Deep nourishment with a golden African sun warmth.',
    category: 'body',
    description: 'A rich, whip-textured body butter combining cold-pressed rapeseed oil, raw unrefined shea butter, and golden botanical extracts to illuminate dull skin and preserve moisture all day.',
    keyIngredients: ['Cold-Pressed Rapeseed Oil', 'Unrefined Ghanaian Shea Butter', 'Vitamin E', 'Golden Botanical Oil'],
    benefits: ['Subtle golden radiance', 'Long-lasting 24hr moisture lock', 'Soothes rough elbows & heels'],
    volume: '250ml / 8.5 fl oz',
    scentProfile: 'Warm Vanilla, Honey & Mild Spiced Amber',
    image: '/src/assets/images/thamani_cosmetics_1784830529770.jpg'
  },
  {
    id: 'velvet-butter-blend',
    name: 'Velvet Butter Blend',
    tagline: 'Silk-smooth barrier repair for dry and sensitive skin.',
    category: 'blend',
    description: 'Formulated specifically for compromised skin barriers. The essential fatty acids in rapeseed oil work synergistically with native African butter to restore skin elasticity and softness.',
    keyIngredients: ['Rapeseed Seed Oil', 'Organic Cocoa Butter', 'Sweet Almond Extract', 'Allantoin'],
    benefits: ['Calms redness & dry flakes', 'Restores natural skin barrier', 'Zero greasy residue'],
    volume: '200ml / 6.8 fl oz',
    scentProfile: 'Soft Cocoa Blossom & Clean Botanical Notes'
  },
  {
    id: 'repair-facial-oil',
    name: 'Repair Facial Oil',
    tagline: 'Lightweight lipid replenishment for balanced, youthful radiance.',
    category: 'facial',
    description: 'An ultra-light, fast-absorbing facial elixir rich in Omega-3, Omega-6, and Omega-9 fatty acids. Nourishes delicate facial skin without clogging pores.',
    keyIngredients: ['Refined Rapeseed Oil Matrix', 'Jojoba Oil', 'Rosehip Seed Oil', 'Tocopherol'],
    benefits: ['Non-comedogenic glow', 'Balances oil production', 'Protects against environmental stressors'],
    volume: '50ml / 1.7 fl oz',
    scentProfile: 'Fragrance-free / Mild Natural Seed Aroma'
  },
  {
    id: 'repair-body-oil',
    name: 'Repair Body Oil',
    tagline: 'Luminous liquid gold for total body nourishment.',
    category: 'body',
    description: 'A luxurious body oil formulated to lock in hydration immediately after bathing. Leaves the skin supple, deeply hydrated, and naturally radiant.',
    keyIngredients: ['Golden Rapeseed Oil', 'Baobab Oil', 'Sunflower Seed Extract'],
    benefits: ['Instant satin sheen', 'Reduces appearance of stretch marks', 'Rapid absorption'],
    volume: '150ml / 5.1 fl oz',
    scentProfile: 'Gentle Citrus & Warm Botanical Blossom'
  }
];
