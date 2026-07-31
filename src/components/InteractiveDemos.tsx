import React, { useState } from 'react';
import { SanitationAudit } from '../types';
import { THAMANI_PRODUCTS, CODE_SNIPPETS } from '../data/portfolioData';
import {
  Play,
  Sparkles,
  Terminal,
  HeartHandshake,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Copy,
  Check,
  Zap
} from 'lucide-react';

export const InteractiveDemos: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'audit' | 'cosmetics' | 'code'>('audit');

  // State for Demo 1: Sanitation Audit Tool
  const [auditData, setAuditData] = useState<SanitationAudit>({
    schoolName: 'Accra Central Girls Academy',
    district: 'Accra Metropolitan District',
    totalStudents: 320,
    femaleStudents: 180,
    functionalToilets: 4,
    cleanWaterAvailable: true,
    sanitaryBinsPresent: true,
    privacyLocksWorking: false,
  });

  const [auditReportGenerated, setAuditReportGenerated] = useState(false);

  // Calculations for Sanitation Audit
  const toiletRatio = auditData.femaleStudents / Math.max(auditData.functionalToilets, 1);
  let baseScore = 100;
  if (toiletRatio > 25) {
    baseScore -= Math.min(35, (toiletRatio - 25) * 1.5);
  }
  if (!auditData.cleanWaterAvailable) baseScore -= 25;
  if (!auditData.sanitaryBinsPresent) baseScore -= 20;
  if (!auditData.privacyLocksWorking) baseScore -= 20;

  const safetyScore = Math.max(0, Math.round(baseScore * 10) / 10);
  const auditStatus = safetyScore >= 80 ? 'SAFE' : safetyScore >= 50 ? 'NEEDS_UPGRADE' : 'CRITICAL';

  // State for Demo 2: Thamani Routine Customizer
  const [skinType, setSkinType] = useState<'dry' | 'combination' | 'normal' | 'sensitive'>('dry');
  const [skinConcern, setSkinConcern] = useState<'dryness' | 'hyperpigmentation' | 'barrier_repair' | 'glow'>('dryness');

  // State for Demo 3: Code Runner
  const [selectedSnippetId, setSelectedSnippetId] = useState<string>('python-sanitation-score');
  const [copiedCode, setCopiedCode] = useState(false);
  const [isRunningCode, setIsRunningCode] = useState(false);
  const [runLogs, setRunLogs] = useState<string | null>(null);

  const activeSnippet = CODE_SNIPPETS.find((s) => s.id === selectedSnippetId) || CODE_SNIPPETS[0];

  const handleRunCode = () => {
    setIsRunningCode(true);
    setRunLogs('Compiling and executing script in sandboxed environment...');
    setTimeout(() => {
      setIsRunningCode(false);
      setRunLogs(activeSnippet.outputPreview);
    }, 600);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="demos" className="py-20 bg-[#EFEDE8] dark:bg-stone-900 text-[#1A1A1A] dark:text-[#F8F5F2] border-t border-[#D6CCC2] dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.25em] bg-[#F5F2ED] dark:bg-stone-800 text-[#5A5A40] dark:text-stone-300 border border-[#D6CCC2] dark:border-stone-700">
            <Zap className="w-3.5 h-3.5 text-[#5A5A40]" />
            <span>Interactive Experience</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#1A1A1A] dark:text-[#F8F5F2]">
            Test Live <span className="font-medium italic text-[#5A5A40] dark:text-amber-200">Built Applications</span>
          </h2>
          <p className="text-[#4A4A4A] dark:text-stone-300 text-base font-sans">
            Test the Safe Schools sanitation audit engine, formulate custom Thamani rapeseed skincare, or run Python &amp; Swift backend code samples.
          </p>
        </div>

        {/* Demo Selector Navigation Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-full bg-[#F5F2ED] dark:bg-stone-800 border border-[#D6CCC2] dark:border-stone-700 max-w-full overflow-x-auto">
            <button
              id="demo-tab-audit"
              onClick={() => setActiveTab('audit')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeTab === 'audit'
                  ? 'bg-[#5A5A40] text-white shadow-md'
                  : 'text-[#4A4A4A] dark:text-stone-300 hover:text-[#1A1A1A] hover:bg-[#EFEDE8]'
              }`}
            >
              <HeartHandshake className="w-4 h-4" />
              <span>Safe Schools Audit</span>
            </button>

            <button
              id="demo-tab-cosmetics"
              onClick={() => setActiveTab('cosmetics')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeTab === 'cosmetics'
                  ? 'bg-[#1A1A1A] text-amber-200 shadow-md'
                  : 'text-[#4A4A4A] dark:text-stone-300 hover:text-[#1A1A1A] hover:bg-[#EFEDE8]'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Thamani Finder</span>
            </button>

            <button
              id="demo-tab-code"
              onClick={() => setActiveTab('code')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeTab === 'code'
                  ? 'bg-[#5A5A40] text-white shadow-md'
                  : 'text-[#4A4A4A] dark:text-stone-300 hover:text-[#1A1A1A] hover:bg-[#EFEDE8]'
              }`}
            >
              <Terminal className="w-4 h-4" />
              <span>Code Runner</span>
            </button>
          </div>
        </div>

        {/* TAB 1: Safe Schools Sanitation Audit Tool */}
        {activeTab === 'audit' && (
          <div className="rounded-[28px] bg-white dark:bg-stone-900 border border-[#D6CCC2] dark:border-stone-800 p-8 sm:p-12 shadow-lg animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#D6CCC2] dark:border-stone-800 gap-4">
              <div>
                <span className="text-[10px] font-bold text-[#5A5A40] dark:text-emerald-400 uppercase tracking-[0.2em]">
                  Umoja Foundation • Safe Schools, Safe Girls Initiative
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#1A1A1A] dark:text-[#F8F5F2] mt-1">
                  School Sanitation Safety Index Calculator
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono bg-[#F5F2ED] dark:bg-stone-800 px-3.5 py-1.5 rounded-full border border-[#D6CCC2] dark:border-stone-700 text-[#5A5A40] dark:text-stone-300">
                <span>Algorithm: Python FastAPI Pydantic v2.0</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
              
              {/* Controls Form */}
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A] dark:text-stone-300 mb-1">
                    School Name &amp; Location
                  </label>
                  <input
                    type="text"
                    value={auditData.schoolName}
                    onChange={(e) => setAuditData({ ...auditData, schoolName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F5F2ED] dark:bg-stone-800 border border-[#D6CCC2] dark:border-stone-700 text-[#1A1A1A] dark:text-white text-sm focus:outline-none focus:border-[#5A5A40]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A] dark:text-stone-300 mb-1">
                      Female Students
                    </label>
                    <input
                      type="number"
                      min={10}
                      max={2000}
                      value={auditData.femaleStudents}
                      onChange={(e) => setAuditData({ ...auditData, femaleStudents: Number(e.target.value) })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F5F2ED] dark:bg-stone-800 border border-[#D6CCC2] dark:border-stone-700 text-[#1A1A1A] dark:text-white text-sm focus:outline-none focus:border-[#5A5A40]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A] dark:text-stone-300 mb-1">
                      Functional Toilets
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={50}
                      value={auditData.functionalToilets}
                      onChange={(e) => setAuditData({ ...auditData, functionalToilets: Number(e.target.value) })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F5F2ED] dark:bg-stone-800 border border-[#D6CCC2] dark:border-stone-700 text-[#1A1A1A] dark:text-white text-sm focus:outline-none focus:border-[#5A5A40]"
                    />
                  </div>
                </div>

                {/* Checkbox toggles */}
                <div className="space-y-2 pt-2">
                  <label className="text-[10px] font-bold text-[#5A5A40] block uppercase tracking-[0.2em]">
                    Sanitation Facilities Audit Checklist
                  </label>

                  <label className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#F5F2ED] dark:bg-stone-800 border border-[#D6CCC2] dark:border-stone-700 cursor-pointer hover:bg-[#EFEDE8]">
                    <input
                      type="checkbox"
                      checked={auditData.cleanWaterAvailable}
                      onChange={(e) => setAuditData({ ...auditData, cleanWaterAvailable: e.target.checked })}
                      className="w-4 h-4 accent-[#5A5A40] rounded"
                    />
                    <span className="text-xs font-medium text-[#1A1A1A] dark:text-stone-200">
                      Clean Running Water &amp; Handwashing Station Available
                    </span>
                  </label>

                  <label className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#F5F2ED] dark:bg-stone-800 border border-[#D6CCC2] dark:border-stone-700 cursor-pointer hover:bg-[#EFEDE8]">
                    <input
                      type="checkbox"
                      checked={auditData.sanitaryBinsPresent}
                      onChange={(e) => setAuditData({ ...auditData, sanitaryBinsPresent: e.target.checked })}
                      className="w-4 h-4 accent-[#5A5A40] rounded"
                    />
                    <span className="text-xs font-medium text-[#1A1A1A] dark:text-stone-200">
                      Covered Disposal Bins in Female Stalls
                    </span>
                  </label>

                  <label className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#F5F2ED] dark:bg-stone-800 border border-[#D6CCC2] dark:border-stone-700 cursor-pointer hover:bg-[#EFEDE8]">
                    <input
                      type="checkbox"
                      checked={auditData.privacyLocksWorking}
                      onChange={(e) => setAuditData({ ...auditData, privacyLocksWorking: e.target.checked })}
                      className="w-4 h-4 accent-[#5A5A40] rounded"
                    />
                    <span className="text-xs font-medium text-[#1A1A1A] dark:text-stone-200">
                      Private, Working Door Locks &amp; Adequate Stall Lighting
                    </span>
                  </label>
                </div>
              </div>

              {/* Output Scorecard Card */}
              <div className="lg:col-span-6 bg-[#EFEDE8] dark:bg-stone-800 border border-[#D6CCC2] dark:border-stone-700 rounded-[20px] p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold text-[#5A5A40] uppercase tracking-widest">Calculated Safety Score</span>
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${
                        auditStatus === 'SAFE'
                          ? 'bg-emerald-600 text-white'
                          : auditStatus === 'NEEDS_UPGRADE'
                          ? 'bg-amber-600 text-white'
                          : 'bg-red-700 text-white'
                      }`}
                    >
                      {auditStatus}
                    </span>
                  </div>

                  {/* Main Radial / Score Bar */}
                  <div className="text-center py-6 border-y border-[#D6CCC2] dark:border-stone-700 mb-6">
                    <div className="text-5xl font-serif font-bold text-[#1A1A1A] dark:text-[#F8F5F2] mb-1">
                      {safetyScore}
                      <span className="text-xl font-sans text-[#5A5A40]">/100</span>
                    </div>
                    <p className="text-xs font-sans text-[#4A4A4A] dark:text-stone-300">
                      Female Student to Toilet Ratio:{' '}
                      <strong className="text-[#1A1A1A] dark:text-white">{Math.round(toiletRatio * 10) / 10}:1</strong> (Recommended threshold is 25:1)
                    </p>
                  </div>

                  {/* Action Recommendations */}
                  <div className="space-y-2 text-xs">
                    <span className="font-bold text-[#5A5A40] block uppercase tracking-wider">Umoja Foundation Advocacy Priority:</span>
                    {toiletRatio > 25 && (
                      <div className="flex items-center gap-2 text-amber-800 bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20">
                        <AlertTriangle className="w-4 h-4 shrink-0 text-amber-600" />
                        <span>High ratio! Needs {Math.ceil(auditData.femaleStudents / 25) - auditData.functionalToilets} additional toilets.</span>
                      </div>
                    )}
                    {!auditData.privacyLocksWorking && (
                      <div className="flex items-center gap-2 text-red-800 bg-red-500/10 p-2.5 rounded-xl border border-red-500/20">
                        <AlertTriangle className="w-4 h-4 shrink-0 text-red-600" />
                        <span>Missing door locks compromise dignity &amp; safety. Priority lock installation needed.</span>
                      </div>
                    )}
                    {auditStatus === 'SAFE' && (
                      <div className="flex items-center gap-2 text-emerald-800 bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/20">
                        <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                        <span>Sanitation infrastructure meets core safety standards for keeping girls in school!</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => setAuditReportGenerated(true)}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#5A5A40] hover:bg-[#484833] text-[#F8F5F2] font-semibold text-xs uppercase tracking-widest shadow-md transition-all"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Generate District Advocacy Summary</span>
                  </button>

                  {auditReportGenerated && (
                    <div className="mt-3 p-3 bg-white dark:bg-stone-900 rounded-xl border border-[#D6CCC2] text-xs text-[#5A5A40] dark:text-emerald-300 font-mono animate-in fade-in">
                      ✓ Report for &quot;{auditData.schoolName}&quot; compiled! Ready for submission to District Directorate.
                    </div>
                  )}
                </div>

              </div>

            </div>
          </div>
        )}

        {/* TAB 2: Thamani Cosmetics Routine & Formulation Customizer */}
        {activeTab === 'cosmetics' && (
          <div className="rounded-[28px] bg-white dark:bg-stone-900 border border-[#D6CCC2] dark:border-stone-800 p-8 sm:p-12 shadow-lg animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#D6CCC2] dark:border-stone-800 gap-4">
              <div>
                <span className="text-[10px] font-bold text-[#5A5A40] dark:text-amber-300 uppercase tracking-[0.2em]">
                  Thamani Cosmetics • African Heritage Skincare Science
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#1A1A1A] dark:text-[#F8F5F2] mt-1">
                  Custom Rapeseed Oil Routine &amp; Ingredient Matcher
                </h3>
              </div>
              <div className="text-xs font-mono bg-[#F5F2ED] dark:bg-stone-800 px-3.5 py-1.5 rounded-full border border-[#D6CCC2] dark:border-stone-700 text-[#5A5A40] dark:text-amber-200">
                Derived from Swahili &quot;Worth &amp; Value&quot;
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
              
              {/* Selectors Column */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A] dark:text-stone-300 mb-2">
                    1. Select Your Skin Profile
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'dry', label: 'Dry / Dehydrated' },
                      { id: 'combination', label: 'Combination' },
                      { id: 'normal', label: 'Normal / Balanced' },
                      { id: 'sensitive', label: 'Sensitive / Redness' }
                    ].map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setSkinType(type.id as any)}
                        className={`p-3 rounded-xl text-xs font-semibold uppercase tracking-wider border text-left transition-all ${
                          skinType === type.id
                            ? 'bg-[#5A5A40] text-white border-[#5A5A40]'
                            : 'bg-[#F5F2ED] dark:bg-stone-800 border-[#D6CCC2] text-[#4A4A4A] hover:bg-[#EFEDE8]'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A] dark:text-stone-300 mb-2">
                    2. Primary Skincare Goal
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'dryness', label: 'Deep Moisture Lock' },
                      { id: 'glow', label: 'Golden Radiance' },
                      { id: 'barrier_repair', label: 'Barrier Restoration' },
                      { id: 'hyperpigmentation', label: 'Even Skin Tone' }
                    ].map((goal) => (
                      <button
                        key={goal.id}
                        onClick={() => setSkinConcern(goal.id as any)}
                        className={`p-3 rounded-xl text-xs font-semibold uppercase tracking-wider border text-left transition-all ${
                          skinConcern === goal.id
                            ? 'bg-[#1A1A1A] text-amber-200 border-[#1A1A1A]'
                            : 'bg-[#F5F2ED] dark:bg-stone-800 border-[#D6CCC2] text-[#4A4A4A] hover:bg-[#EFEDE8]'
                        }`}
                      >
                        {goal.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#EFEDE8] dark:bg-stone-800 border border-[#D6CCC2] dark:border-stone-700 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#5A5A40] dark:text-amber-200">Why Cold-Pressed Rapeseed Oil?</h4>
                  <p className="text-xs font-sans text-[#4A4A4A] dark:text-stone-300 leading-relaxed">
                    Rich in Omega-3, Omega-6, and Vitamin E, rapeseed oil penetrates deeply without clogging pores, offering exceptional lipid repair and soothing properties for African and global skin types.
                  </p>
                </div>
              </div>

              {/* Matched Product Cards Column */}
              <div className="lg:col-span-7 space-y-4">
                <h4 className="text-[10px] font-bold text-[#5A5A40] uppercase tracking-[0.2em]">
                  Recommended Thamani Formulations:
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {THAMANI_PRODUCTS.map((prod) => (
                    <div
                      key={prod.id}
                      className="p-5 rounded-[20px] bg-[#F5F2ED] dark:bg-stone-800 border border-[#D6CCC2] dark:border-stone-700 hover:border-[#5A5A40] transition-all flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-wider text-[#5A5A40] px-2.5 py-1 rounded-full bg-white dark:bg-stone-900 border border-[#D6CCC2]">
                          {prod.volume}
                        </span>
                        <h5 className="text-lg font-serif font-medium text-[#1A1A1A] dark:text-[#F8F5F2] mt-3">{prod.name}</h5>
                        <p className="text-xs font-serif italic text-[#666] dark:text-stone-300 mt-0.5 mb-4">{prod.tagline}</p>
                        
                        <div className="space-y-1 text-xs text-[#4A4A4A] dark:text-stone-300 border-t border-[#D6CCC2] dark:border-stone-700 pt-3">
                          <div className="font-bold text-[#1A1A1A] dark:text-white">Key Ingredients:</div>
                          <div>{prod.keyIngredients.join(' • ')}</div>
                        </div>
                      </div>

                      <div className="mt-5 pt-3 border-t border-[#D6CCC2] dark:border-stone-700 flex items-center justify-between">
                        <span className="text-xs text-[#5A5A40] font-semibold">{prod.scentProfile}</span>
                        <a
                          href="#contact"
                          className="text-xs font-bold uppercase tracking-wider text-[#5A5A40] hover:underline"
                        >
                          Request Sample &rarr;
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: Multi-Language Code Playground (Python, Swift, TypeScript) */}
        {activeTab === 'code' && (
          <div className="rounded-[28px] bg-white dark:bg-stone-900 border border-[#D6CCC2] dark:border-stone-800 p-8 sm:p-12 shadow-lg animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#D6CCC2] dark:border-stone-800 gap-4">
              <div>
                <span className="text-[10px] font-bold text-[#5A5A40] dark:text-amber-200 uppercase tracking-[0.2em]">
                  Code &amp; Mobile Architecture Playground
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#1A1A1A] dark:text-[#F8F5F2] mt-1">
                  Multi-Language Code Runner (Python, Swift, TypeScript)
                </h3>
              </div>

              {/* Language Switcher Buttons */}
              <div className="flex flex-wrap gap-2">
                {CODE_SNIPPETS.map((snippet) => (
                  <button
                    key={snippet.id}
                    onClick={() => {
                      setSelectedSnippetId(snippet.id);
                      setRunLogs(null);
                    }}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all ${
                      selectedSnippetId === snippet.id
                        ? 'bg-[#5A5A40] text-white shadow-md'
                        : 'bg-[#F5F2ED] dark:bg-stone-800 text-[#1A1A1A] dark:text-stone-300 border border-[#D6CCC2] dark:border-stone-700'
                    }`}
                  >
                    {snippet.languageLabel}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
              
              {/* Code Editor Window */}
              <div className="lg:col-span-7 bg-[#1A1A1A] text-[#F8F5F2] border border-[#D6CCC2] dark:border-stone-800 rounded-[20px] overflow-hidden flex flex-col justify-between">
                
                {/* Editor Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#2A2A2A] border-b border-stone-700">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-500/80" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <span className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-xs font-mono text-stone-300 ml-2">
                      {activeSnippet.filename}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopyCode}
                      className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs transition-colors"
                      title="Copy code"
                    >
                      {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                    </button>

                    <button
                      onClick={handleRunCode}
                      disabled={isRunningCode}
                      className="flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#5A5A40] hover:bg-[#484833] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow"
                    >
                      <Play className="w-3.5 h-3.5" />
                      <span>{isRunningCode ? 'Running...' : 'Run Code'}</span>
                    </button>
                  </div>
                </div>

                {/* Code Body */}
                <div className="p-5 overflow-x-auto font-mono text-xs text-stone-200 leading-relaxed max-h-[380px]">
                  <pre>{activeSnippet.code}</pre>
                </div>

                <div className="px-5 py-2.5 bg-[#2A2A2A] border-t border-stone-700 text-[11px] text-stone-300">
                  {activeSnippet.description}
                </div>
              </div>

              {/* Execution Output Panel */}
              <div className="lg:col-span-5 bg-[#EFEDE8] dark:bg-stone-800 border border-[#D6CCC2] dark:border-stone-700 rounded-[20px] p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#D6CCC2] dark:border-stone-700 mb-4">
                    <span className="text-xs font-bold text-[#5A5A40] dark:text-stone-300 uppercase font-mono flex items-center gap-1.5">
                      <Terminal className="w-4 h-4 text-[#5A5A40]" />
                      <span>Console Output Stream</span>
                    </span>
                    <span className="text-[10px] text-[#5A5A40] font-mono">Status: Ready</span>
                  </div>

                  {runLogs ? (
                    <div className="p-4 rounded-xl bg-[#1A1A1A] border border-[#D6CCC2] text-xs font-mono text-emerald-400 space-y-2 whitespace-pre-wrap animate-in fade-in">
                      {runLogs}
                    </div>
                  ) : (
                    <div className="p-8 text-center text-[#666] text-xs font-mono space-y-2">
                      <Play className="w-8 h-8 mx-auto opacity-30 text-[#5A5A40]" />
                      <p>Click &quot;Run Code&quot; above to simulate code execution and view live data output.</p>
                    </div>
                  )}
                </div>

                {/* Info Footer */}
                <div className="mt-6 p-4 rounded-xl bg-white dark:bg-stone-900 border border-[#D6CCC2] dark:border-stone-700 text-[11px] text-[#4A4A4A] dark:text-stone-300 space-y-1">
                  <div className="font-bold text-[#1A1A1A] dark:text-white">Engineering Note:</div>
                  <p>
                    Mubaarakah leverages Python for backend data services, Swift/SwiftUI for native iOS mobile concepts, and TypeScript + React for responsive web interfaces.
                  </p>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

