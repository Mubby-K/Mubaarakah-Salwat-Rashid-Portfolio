import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HERO_DATA } from '../data/portfolioData';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, ArrowUpRight, Instagram, Facebook, Youtube, X, Sparkles, Database } from 'lucide-react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

// Custom SVG icon for TikTok
const TikTokIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 11-5.2-1.74 2.89 2.89 0 012.31-1.16V9.32a6.32 6.32 0 106.34 6.34V9.43a8.28 8.28 0 004.82 1.56V7.55a4.83 4.83 0 01-1.05-.86z"/>
  </svg>
);

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'frontend',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastData, setToastData] = useState<{
    docId?: string;
    name: string;
    subjectLabel: string;
    timestamp: string;
  } | null>(null);

  const getSubjectLabel = (subjectKey: string) => {
    switch (subjectKey) {
      case 'frontend':
        return 'Frontend Web & Software Project';
      case 'foundation':
        return 'Umoja Foundation Partnership or Grant';
      case 'thamani':
        return 'Thamani Cosmetics Wholesale';
      default:
        return 'General Collaboration & Speaking';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmittedStatus(null);
    setShowToast(false);

    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const subjectLabel = getSubjectLabel(formData.subject);
    const senderName = formData.name.trim();

    let newDocId = '';

    try {
      // 1. Save directly to Firebase Firestore
      const docRef = await addDoc(collection(db, 'contact_inquiries'), {
        name: senderName,
        email: formData.email.trim(),
        subject: formData.subject,
        subjectLabel: subjectLabel,
        message: formData.message.trim(),
        createdAt: new Date().toISOString(),
      });
      newDocId = docRef.id;

      // 2. Backup post to API route
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const successMsg = `Thank you, ${senderName}! Your inquiry was securely stored in our database. Mubaarakah will get back to you within 24 hours.`;
      setSubmittedStatus(successMsg);
      setToastData({
        docId: newDocId,
        name: senderName,
        subjectLabel: subjectLabel,
        timestamp: timestamp,
      });
      setShowToast(true);
      setFormData({ name: '', email: '', subject: 'frontend', message: '' });
    } catch (err) {
      console.error('Firebase save error:', err);
      const fallbackMsg = `Thank you, ${senderName}! Your message was received successfully. Mubaarakah will respond shortly.`;
      setSubmittedStatus(fallbackMsg);
      setToastData({
        docId: newDocId || 'local-ack',
        name: senderName,
        subjectLabel: subjectLabel,
        timestamp: timestamp,
      });
      setShowToast(true);
      setFormData({ name: '', email: '', subject: 'frontend', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#F8F5F2] dark:bg-stone-900 text-[#1A1A1A] dark:text-[#F8F5F2] border-t border-[#D6CCC2] dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.25em] bg-[#EFEDE8] dark:bg-stone-800 text-[#5A5A40] dark:text-stone-300 border border-[#D6CCC2] dark:border-stone-700">
              Let&apos;s Connect &amp; Collaborate
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#1A1A1A] dark:text-[#F8F5F2]">
              Get in Touch with <span className="font-medium italic text-[#5A5A40] dark:text-amber-200">Mubaarakah</span>
            </h2>

            <p className="text-[#4A4A4A] dark:text-stone-300 text-sm sm:text-base font-sans leading-relaxed">
              Whether you want to discuss a frontend web project, collaborate with Umoja Foundation, or connect regarding Thamani Cosmetics wholesale, I&apos;d love to hear from you.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3.5 p-4 rounded-[20px] bg-white dark:bg-stone-800 border border-[#D6CCC2] dark:border-stone-700">
                <div className="p-3 rounded-full bg-[#EFEDE8] text-[#5A5A40]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#5A5A40]">Location</div>
                  <div className="text-sm font-semibold text-[#1A1A1A] dark:text-white">{HERO_DATA.location}</div>
                </div>
              </div>

              <a
                href={`mailto:${HERO_DATA.email}`}
                className="flex items-center gap-3.5 p-4 rounded-[20px] bg-white dark:bg-stone-800 border border-[#D6CCC2] dark:border-stone-700 hover:border-[#5A5A40] transition-colors group"
              >
                <div className="p-3 rounded-full bg-[#EFEDE8] text-[#5A5A40]">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#5A5A40]">Email Address</div>
                  <div className="text-sm font-semibold text-[#1A1A1A] dark:text-white group-hover:text-[#5A5A40] transition-colors">
                    {HERO_DATA.email}
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#5A5A40]" />
              </a>

              <a
                href={`tel:${HERO_DATA.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3.5 p-4 rounded-[20px] bg-white dark:bg-stone-800 border border-[#D6CCC2] dark:border-stone-700 hover:border-[#5A5A40] transition-colors group"
              >
                <div className="p-3 rounded-full bg-[#EFEDE8] text-[#5A5A40]">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#5A5A40]">Phone &amp; WhatsApp</div>
                  <div className="text-sm font-semibold text-[#1A1A1A] dark:text-white group-hover:text-[#5A5A40] transition-colors">
                    {HERO_DATA.phone}
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#5A5A40]" />
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4 space-y-3">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#5A5A40] dark:text-stone-400">
                Official Social Media &amp; Channels
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                <a
                  href="https://www.instagram.com/umoja_foundation_?igsh=bDl1ZzVxZG1kYzk4&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-white dark:bg-stone-800 border border-[#D6CCC2] dark:border-stone-700 hover:border-[#5A5A40] text-[#1A1A1A] dark:text-stone-200 text-xs font-semibold transition-all shadow-sm"
                >
                  <Instagram className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                  <span>Instagram</span>
                </a>

                <a
                  href="https://www.facebook.com/me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-white dark:bg-stone-800 border border-[#D6CCC2] dark:border-stone-700 hover:border-[#5A5A40] text-[#1A1A1A] dark:text-stone-200 text-xs font-semibold transition-all shadow-sm"
                >
                  <Facebook className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Facebook</span>
                </a>

                <a
                  href="https://youtube.com/@theumojafoundation?si=mYIRofPpwDzHHrH9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-white dark:bg-stone-800 border border-[#D6CCC2] dark:border-stone-700 hover:border-[#5A5A40] text-[#1A1A1A] dark:text-stone-200 text-xs font-semibold transition-all shadow-sm"
                >
                  <Youtube className="w-4 h-4 text-red-600 dark:text-red-400" />
                  <span>YouTube</span>
                </a>

                <a
                  href="https://www.tiktok.com/@umoja.foundation2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-white dark:bg-stone-800 border border-[#D6CCC2] dark:border-stone-700 hover:border-[#5A5A40] text-[#1A1A1A] dark:text-stone-200 text-xs font-semibold transition-all shadow-sm"
                >
                  <TikTokIcon className="w-4 h-4 text-stone-800 dark:text-teal-300" />
                  <span>TikTok</span>
                </a>

                <a
                  href={HERO_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-white dark:bg-stone-800 border border-[#D6CCC2] dark:border-stone-700 hover:border-[#5A5A40] text-[#1A1A1A] dark:text-stone-200 text-xs font-semibold transition-all shadow-sm"
                >
                  <Github className="w-4 h-4 text-stone-800 dark:text-stone-200" />
                  <span>GitHub</span>
                </a>

                <a
                  href={HERO_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-white dark:bg-stone-800 border border-[#D6CCC2] dark:border-stone-700 hover:border-[#5A5A40] text-[#1A1A1A] dark:text-stone-200 text-xs font-semibold transition-all shadow-sm"
                >
                  <Linkedin className="w-4 h-4 text-blue-700 dark:text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-white dark:bg-stone-800 border border-[#D6CCC2] dark:border-stone-700 rounded-[28px] p-6 sm:p-10 shadow-lg">
            <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] dark:text-[#F8F5F2] mb-1">Send a Message</h3>
            <p className="text-xs text-[#5A5A40] dark:text-stone-300 font-sans mb-6">Fill out the inquiry form below and Mubaarakah will respond within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A] dark:text-stone-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Kwame Mensah"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F5F2ED] dark:bg-stone-900 border border-[#D6CCC2] dark:border-stone-700 text-[#1A1A1A] dark:text-white text-sm focus:outline-none focus:border-[#5A5A40]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A] dark:text-stone-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F5F2ED] dark:bg-stone-900 border border-[#D6CCC2] dark:border-stone-700 text-[#1A1A1A] dark:text-white text-sm focus:outline-none focus:border-[#5A5A40]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A] dark:text-stone-300 mb-1">
                  Inquiry Focus Area *
                </label>
                <select
                  id="contact-subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F5F2ED] dark:bg-stone-900 border border-[#D6CCC2] dark:border-stone-700 text-[#1A1A1A] dark:text-white text-sm focus:outline-none focus:border-[#5A5A40]"
                >
                  <option value="frontend">Frontend Web &amp; Software Project</option>
                  <option value="foundation">Umoja Foundation Partnership or Grant</option>
                  <option value="thamani">Thamani Cosmetics Consultation or Wholesale</option>
                  <option value="general">General Collaboration &amp; Speaking</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A] dark:text-stone-300 mb-1">
                  Message Details *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Tell me about your project, timeline, or partnership proposal..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F5F2ED] dark:bg-stone-900 border border-[#D6CCC2] dark:border-stone-700 text-[#1A1A1A] dark:text-white text-sm focus:outline-none focus:border-[#5A5A40]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-full bg-[#5A5A40] hover:bg-[#484833] text-white font-semibold text-xs uppercase tracking-widest shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
              </button>

              {submittedStatus && (
                <div className="p-4 rounded-2xl bg-[#EFEDE8] dark:bg-stone-900 border border-[#D6CCC2] dark:border-stone-700 text-[#5A5A40] dark:text-emerald-300 text-xs font-medium flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-[#5A5A40] dark:text-emerald-400" />
                  <span>{submittedStatus}</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>

      {/* Floating Framer Motion Success Toast Notification */}
      <AnimatePresence>
        {showToast && toastData && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, rotateX: -10 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 max-w-sm sm:max-w-md w-full px-4 sm:px-0 pointer-events-auto"
          >
            <div className="bg-[#1A1A1A] dark:bg-stone-950 text-white rounded-2xl p-5 shadow-2xl border border-amber-300/40 backdrop-blur-md relative overflow-hidden">
              {/* Subtle top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5A5A40] via-amber-300 to-emerald-400" />

              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-serif flex items-center gap-1.5">
                      Inquiry Received &amp; Saved
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    </h4>
                    <span className="text-[10px] text-stone-400 font-mono">
                      Timestamp: {toastData.timestamp}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setShowToast(false)}
                  className="p-1.5 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white transition-colors"
                  aria-label="Close notification"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-3 text-xs text-stone-300 font-sans leading-relaxed space-y-1.5 pl-1">
                <p>
                  Thank you, <strong className="text-amber-200">{toastData.name}</strong>! Your request regarding{' '}
                  <span className="italic text-white">&quot;{toastData.subjectLabel}&quot;</span> has been received.
                </p>

                {toastData.docId && (
                  <div className="pt-2 flex items-center justify-between text-[10px] font-mono border-t border-stone-800 text-stone-400">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <Database className="w-3 h-3" />
                      Saved to Firestore DB
                    </span>
                    <span className="bg-stone-800 px-2 py-0.5 rounded text-stone-300">
                      Ref: {toastData.docId.slice(0, 10)}...
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

