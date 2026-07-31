import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { Sparkles, X, Send, Bot, User, RefreshCw } from 'lucide-react';

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: `Hello! I'm **Mubaarakah's AI Concierge**. How can I help you today? You can ask me about her **frontend development contracts**, **Umoja Foundation partnerships**, or **Thamani Cosmetics**!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const samplePrompts = [
    'What frontend & backend technologies does Mubaarakah specialize in?',
    'How does the Safe Schools sanitation audit platform work?',
    'Tell me about Thamani Cosmetics skincare products & rapeseed oil.',
    'Is Mubaarakah available for frontend freelance or full-time roles?'
  ];

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: messages,
        }),
      });

      const data = await response.json();
      const replyText = data.reply || 'Thank you for asking! How else can I assist you regarding Mubaarakah?';

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error('Chat error:', err);
      const fallbackMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: 'Thank you for reaching out! Mubaarakah is happy to discuss your request directly via email at **mubby.thamani@gmail.com** or phone at **+233 55 843 3835**.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in">
      <div className="bg-white dark:bg-stone-900 border border-[#D6CCC2] dark:border-stone-800 rounded-[28px] max-w-xl w-full h-[600px] flex flex-col overflow-hidden shadow-2xl relative">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-[#1A1A1A] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-[#5A5A40] text-amber-200">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="text-base font-serif font-medium text-white flex items-center gap-2">
                <span>AI Concierge</span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Gemini Powered
                </span>
              </h3>
              <p className="text-xs text-stone-300 font-sans">Ask anything about Mubaarakah&apos;s work, skills, or ventures</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-stone-800 text-stone-300 hover:text-white"
            aria-label="Close Assistant"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Log */}
        <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 bg-[#F8F5F2] dark:bg-stone-900">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className="w-7 h-7 rounded-full bg-[#5A5A40] text-white flex items-center justify-center shrink-0 mt-1">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed font-sans ${
                  msg.sender === 'user'
                    ? 'bg-[#5A5A40] text-white rounded-br-none'
                    : 'bg-[#EFEDE8] dark:bg-stone-800 border border-[#D6CCC2] dark:border-stone-700 text-[#1A1A1A] dark:text-stone-200 rounded-bl-none'
                }`}
              >
                <div className="whitespace-pre-wrap">{msg.text}</div>
                <div className={`text-[10px] mt-1.5 font-mono ${msg.sender === 'user' ? 'text-amber-100' : 'text-[#5A5A40] dark:text-stone-400'}`}>
                  {msg.timestamp}
                </div>
              </div>

              {msg.sender === 'user' && (
                <div className="w-7 h-7 rounded-full bg-[#1A1A1A] text-amber-200 flex items-center justify-center shrink-0 mt-1">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 text-xs text-[#5A5A40] font-mono py-2">
              <RefreshCw className="w-4 h-4 animate-spin text-[#5A5A40]" />
              <span>Gemini is formulating response...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Sample Prompt Chips */}
        {messages.length < 3 && (
          <div className="px-4 py-2 bg-[#EFEDE8] dark:bg-stone-800 border-t border-[#D6CCC2] dark:border-stone-700 flex gap-2 overflow-x-auto">
            {samplePrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(p)}
                className="text-[11px] px-3 py-1 rounded-full bg-white dark:bg-stone-900 text-[#5A5A40] dark:text-stone-300 border border-[#D6CCC2] dark:border-stone-700 whitespace-nowrap shrink-0 transition-colors font-sans"
              >
                {p}
              </button>
            ))}
          </div>
        )}

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-white dark:bg-stone-800 border-t border-[#D6CCC2] dark:border-stone-700 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about Mubaarakah's code, Umoja Foundation, or Thamani..."
            className="flex-1 px-4 py-2.5 rounded-full bg-[#F5F2ED] dark:bg-stone-900 border border-[#D6CCC2] dark:border-stone-700 text-[#1A1A1A] dark:text-white text-xs sm:text-sm focus:outline-none focus:border-[#5A5A40]"
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || isLoading}
            className="px-5 py-2.5 rounded-full bg-[#5A5A40] hover:bg-[#484833] disabled:opacity-50 text-white font-semibold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">Send</span>
          </button>
        </div>

      </div>
    </div>
  );
};

