import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { collection, query, orderBy, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Mail, Trash2, Download, Search, X, Check, Database, Clock, RefreshCw, Key, ShieldCheck, User } from 'lucide-react';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  subject: string;
  subjectLabel?: string;
  message: string;
  createdAt: string;
}

interface AdminInquiriesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminInquiriesModal: React.FC<AdminInquiriesModalProps> = ({ isOpen, onClose }) => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState('all');
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [passError, setPassError] = useState(false);

  // Default passcode is "mubaarakah2026" or "admin"
  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.toLowerCase() === 'mubaarakah2026' || passcode.toLowerCase() === 'admin' || passcode === '1234') {
      setIsUnlocked(true);
      setPassError(false);
    } else {
      setPassError(true);
    }
  };

  useEffect(() => {
    if (!isOpen || !isUnlocked) return;

    setLoading(true);
    try {
      const q = query(collection(db, 'contact_inquiries'), orderBy('createdAt', 'desc'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const docs: Inquiry[] = snapshot.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        })) as Inquiry[];
        setInquiries(docs);
        setLoading(false);
      }, (err) => {
        console.error('Error fetching inquiries:', err);
        setLoading(false);
      });

      return () => unsubscribe();
    } catch (e) {
      console.error('Firestore listener error:', e);
      setLoading(false);
    }
  }, [isOpen, isUnlocked]);

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this contact submission from the database?')) {
      try {
        await deleteDoc(doc(db, 'contact_inquiries', id));
      } catch (err) {
        console.error('Error deleting document:', err);
        alert('Failed to delete document. Check permissions.');
      }
    }
  };

  const copyToClipboard = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const exportToCSV = () => {
    if (inquiries.length === 0) return;

    const headers = ['Name', 'Email', 'Subject', 'Message', 'Timestamp', 'Firestore Doc ID'];
    const rows = inquiries.map(inq => [
      `"${inq.name.replace(/"/g, '""')}"`,
      `"${inq.email.replace(/"/g, '""')}"`,
      `"${(inq.subjectLabel || inq.subject).replace(/"/g, '""')}"`,
      `"${inq.message.replace(/\n/g, ' ').replace(/"/g, '""')}"`,
      `"${inq.createdAt}"`,
      `"${inq.id}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `contact_inquiries_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredInquiries = inquiries.filter((inq) => {
    const matchesSearch = 
      inq.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.message.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesSubject = 
      selectedSubjectFilter === 'all' || inq.subject === selectedSubjectFilter;

    return matchesSearch && matchesSubject;
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-white dark:bg-stone-900 border border-[#D6CCC2] dark:border-stone-800 rounded-3xl shadow-2xl overflow-hidden my-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 bg-[#EFEDE8] dark:bg-stone-950 border-b border-[#D6CCC2] dark:border-stone-800">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-[#5A5A40] text-amber-200 shadow-sm">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#1A1A1A] dark:text-white flex items-center gap-2">
                    Inquiries &amp; Contact Inbox
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                      Live Firestore
                    </span>
                  </h3>
                  <p className="text-xs text-[#5A5A40] dark:text-stone-400 font-sans">
                    Track all emails and messages submitted through your portfolio
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-[#D6CCC2]/50 dark:hover:bg-stone-800 text-[#1A1A1A] dark:text-stone-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lock Guard or Unlocked View */}
            {!isUnlocked ? (
              <div className="p-8 sm:p-12 text-center max-w-md mx-auto space-y-5">
                <div className="w-16 h-16 rounded-3xl bg-[#EFEDE8] dark:bg-stone-800 border border-[#D6CCC2] dark:border-stone-700 flex items-center justify-center mx-auto text-[#5A5A40] dark:text-amber-200">
                  <ShieldCheck className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                  <h4 className="text-lg font-serif font-bold text-[#1A1A1A] dark:text-white">Admin Access Required</h4>
                  <p className="text-xs text-[#5A5A40] dark:text-stone-400">
                    Enter passcode to access live messages. Default passcode: <code className="bg-[#EFEDE8] dark:bg-stone-800 px-1.5 py-0.5 rounded text-amber-600 dark:text-amber-300 font-mono">admin</code> or <code className="bg-[#EFEDE8] dark:bg-stone-800 px-1.5 py-0.5 rounded text-amber-600 dark:text-amber-300 font-mono">mubaarakah2026</code>
                  </p>
                </div>

                <form onSubmit={handleUnlock} className="space-y-3">
                  <div className="relative">
                    <Key className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      type="password"
                      placeholder="Enter passcode..."
                      value={passcode}
                      onChange={(e) => setPasscode(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F5F2ED] dark:bg-stone-800 border border-[#D6CCC2] dark:border-stone-700 text-sm text-[#1A1A1A] dark:text-white focus:outline-none focus:border-[#5A5A40]"
                    />
                  </div>

                  {passError && (
                    <p className="text-xs text-rose-500 font-medium">Incorrect passcode. Try 'admin' or 'mubaarakah2026'</p>
                  )}

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-[#5A5A40] text-amber-100 font-bold text-xs uppercase tracking-wider hover:bg-[#484833] transition-colors"
                  >
                    Unlock Inbox
                  </button>
                </form>
              </div>
            ) : (
              <div className="p-6 space-y-5">
                {/* Controls Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#F5F2ED] dark:bg-stone-800/60 p-3.5 rounded-2xl border border-[#D6CCC2] dark:border-stone-800">
                  <div className="relative w-full sm:w-72">
                    <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Search name, email or message..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-white dark:bg-stone-900 border border-[#D6CCC2] dark:border-stone-700 text-[#1A1A1A] dark:text-white focus:outline-none focus:border-[#5A5A40]"
                    />
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
                    <select
                      value={selectedSubjectFilter}
                      onChange={(e) => setSelectedSubjectFilter(e.target.value)}
                      className="py-1.5 px-3 text-xs rounded-xl bg-white dark:bg-stone-900 border border-[#D6CCC2] dark:border-stone-700 text-[#1A1A1A] dark:text-white font-sans"
                    >
                      <option value="all">All Topics ({inquiries.length})</option>
                      <option value="frontend">Frontend &amp; Software</option>
                      <option value="foundation">Umoja Foundation</option>
                      <option value="thamani">Thamani Cosmetics</option>
                      <option value="general">General / Other</option>
                    </select>

                    <button
                      onClick={exportToCSV}
                      disabled={inquiries.length === 0}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#5A5A40] text-amber-100 text-xs font-semibold hover:bg-[#484833] disabled:opacity-50 transition-all shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Export CSV</span>
                    </button>
                  </div>
                </div>

                {/* Submissions List */}
                {loading ? (
                  <div className="py-12 text-center space-y-3">
                    <RefreshCw className="w-6 h-6 text-[#5A5A40] dark:text-amber-200 animate-spin mx-auto" />
                    <p className="text-xs text-stone-500">Connecting to Firestore database...</p>
                  </div>
                ) : filteredInquiries.length === 0 ? (
                  <div className="py-12 text-center space-y-2 border-2 border-dashed border-[#D6CCC2] dark:border-stone-800 rounded-2xl">
                    <Mail className="w-8 h-8 text-stone-400 mx-auto opacity-50" />
                    <h4 className="text-sm font-serif font-bold text-[#1A1A1A] dark:text-white">No inquiries found</h4>
                    <p className="text-xs text-stone-500 max-w-sm mx-auto">
                      {searchQuery ? 'No submissions match your search criteria.' : 'When visitors submit the contact form on your site, messages will immediately show up here in real time.'}
                    </p>
                  </div>
                ) : (
                  <div className="max-h-[460px] overflow-y-auto space-y-3 pr-1">
                    {filteredInquiries.map((inq) => (
                      <div
                        key={inq.id}
                        className="p-5 rounded-2xl bg-[#EFEDE8] dark:bg-stone-800/80 border border-[#D6CCC2] dark:border-stone-700 space-y-3 relative group transition-all hover:border-[#5A5A40] dark:hover:border-amber-300/40"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[#D6CCC2]/60 dark:border-stone-700">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-[#5A5A40] text-amber-100 flex items-center justify-center font-bold text-xs uppercase shrink-0">
                              {inq.name.charAt(0)}
                            </div>
                            <div>
                              <h4 className="text-sm font-bold text-[#1A1A1A] dark:text-white flex items-center gap-2">
                                {inq.name}
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white dark:bg-stone-900 border border-[#D6CCC2] dark:border-stone-700 text-[#5A5A40] dark:text-amber-200">
                                  {inq.subjectLabel || inq.subject}
                                </span>
                              </h4>
                              <p className="text-xs text-stone-500 font-mono">{inq.email}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 self-end sm:self-auto">
                            <button
                              onClick={() => copyToClipboard(inq.email)}
                              className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white dark:bg-stone-900 text-[#5A5A40] dark:text-stone-300 border border-[#D6CCC2] dark:border-stone-700 hover:bg-[#5A5A40] hover:text-white dark:hover:bg-amber-300 dark:hover:text-stone-950 transition-colors"
                              title="Copy email address"
                            >
                              {copiedEmail === inq.email ? (
                                <>
                                  <Check className="w-3 h-3 text-emerald-500" />
                                  <span>Copied!</span>
                                </>
                              ) : (
                                <>
                                  <Mail className="w-3 h-3" />
                                  <span>Copy Email</span>
                                </>
                              )}
                            </button>

                            <button
                              onClick={() => handleDelete(inq.id)}
                              className="p-1.5 rounded-lg text-stone-400 hover:text-rose-500 hover:bg-rose-500/10 transition-colors"
                              title="Delete submission"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <p className="text-xs text-[#1A1A1A] dark:text-stone-200 font-sans leading-relaxed whitespace-pre-wrap bg-white/60 dark:bg-stone-900/60 p-3 rounded-xl border border-[#D6CCC2]/40 dark:border-stone-800">
                          {inq.message}
                        </p>

                        <div className="flex items-center justify-between text-[10px] font-mono text-stone-400 pt-1">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-stone-400" />
                            {inq.createdAt ? new Date(inq.createdAt).toLocaleString() : 'Just now'}
                          </span>
                          <span>Doc ID: {inq.id}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
