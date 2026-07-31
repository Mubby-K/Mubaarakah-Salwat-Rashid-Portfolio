import React, { useState } from 'react';
import { ArrowUp, Mail, CheckCircle2, Send, Github, Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';
import { MsrLogo } from './MsrLogo';

// Custom SVG icon for TikTok
const TikTokIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 11-5.2-1.74 2.89 2.89 0 012.31-1.16V9.32a6.32 6.32 0 106.34 6.34V9.43a8.28 8.28 0 004.82 1.56V7.55a4.83 4.83 0 01-1.05-.86z"/>
  </svg>
);

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribers, setSubscribers] = useState<string[]>([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    if (subscribers.includes(email)) {
      setToastMsg('You are already subscribed to Growth Updates!');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
      return;
    }

    const updatedList = [...subscribers, email];
    setSubscribers(updatedList);
    console.log('Growth Updates Newsletter Subscribers Array:', updatedList);

    setToastMsg(`Welcome aboard! ${email} has been subscribed to Growth Updates.`);
    setShowToast(true);
    setEmail('');

    setTimeout(() => setShowToast(false), 5000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/umoja_foundation_?igsh=bDl1ZzVxZG1kYzk4&utm_source=qr',
      icon: <Instagram className="w-4 h-4" />,
      color: 'hover:text-pink-400 hover:border-pink-500/40',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/me/',
      icon: <Facebook className="w-4 h-4" />,
      color: 'hover:text-blue-400 hover:border-blue-500/40',
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@theumojafoundation?si=mYIRofPpwDzHHrH9',
      icon: <Youtube className="w-4 h-4" />,
      color: 'hover:text-red-400 hover:border-red-500/40',
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@umoja.foundation2',
      icon: <TikTokIcon className="w-4 h-4" />,
      color: 'hover:text-teal-300 hover:border-teal-500/40',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Mubby-K',
      icon: <Github className="w-4 h-4" />,
      color: 'hover:text-stone-100 hover:border-stone-400',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mubaarakah-salwat-rashid-441b21170',
      icon: <Linkedin className="w-4 h-4" />,
      color: 'hover:text-blue-300 hover:border-blue-400',
    },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-[#F8F5F2] py-16 border-t border-[#D6CCC2] dark:border-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Newsletter Signup Banner */}
        <div className="bg-stone-900 border border-stone-800 rounded-[28px] p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 max-w-xl text-center lg:text-left">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] bg-[#5A5A40] text-amber-100">
              Newsletter Subscription
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-light text-white">
              Subscribe to <span className="italic text-amber-200 font-medium">Growth Updates</span>
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
              Get monthly highlights on software releases, Umoja Foundation school sanitation initiatives in Ghana, and Thamani Cosmetics milestones.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 min-w-[300px] sm:min-w-[420px]">
            <div className="relative flex-1">
              <Mail className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full bg-stone-800 border border-stone-700 text-white text-xs sm:text-sm focus:outline-none focus:border-[#5A5A40] placeholder:text-stone-500"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-[#5A5A40] hover:bg-[#484833] text-white font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md shrink-0"
            >
              <span>Subscribe</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

        {/* Social Media & Brand Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-4 border-t border-stone-800">
          
          <div className="flex items-center gap-3">
            <MsrLogo size="md" />
            <div>
              <div className="text-base font-serif font-medium text-white">Mubaarakah Salwat Rashid</div>
              <div className="text-xs text-stone-400 font-sans">Accra, Ghana • Software Developer &amp; Social Entrepreneur</div>
            </div>
          </div>

          {/* Social Icons List */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Follow on ${social.name}`}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-full bg-stone-900 border border-stone-800 text-stone-300 text-xs font-medium transition-all duration-200 ${social.color}`}
              >
                {social.icon}
                <span>{social.name}</span>
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold uppercase tracking-wider transition-colors shrink-0"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        <div className="text-center pt-4 border-t border-stone-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-2 font-sans">
          <p>&copy; {new Date().getFullYear()} Mubaarakah Salwat Rashid. Built with React, TypeScript &amp; Tailwind CSS.</p>
          <p className="text-[11px] text-stone-500">Umoja Foundation &amp; Thamani Cosmetics Ecosystem</p>
        </div>

      </div>

      {/* Success Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#5A5A40] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-amber-200/30 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <CheckCircle2 className="w-5 h-5 text-amber-200 shrink-0" />
          <span className="text-xs font-sans font-medium">{toastMsg}</span>
        </div>
      )}
    </footer>
  );
};


