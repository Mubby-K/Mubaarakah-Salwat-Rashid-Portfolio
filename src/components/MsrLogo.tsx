import React from 'react';

interface MsrLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const MsrLogo: React.FC<MsrLogoProps> = ({ className = '', size = 'md' }) => {
  const dimensions = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10';
  const textSize = size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm';

  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full bg-[#5A5A40] text-[#F8F5F2] font-serif font-bold tracking-widest shadow-md border border-[#D6CCC2]/40 dark:border-amber-200/20 shrink-0 overflow-hidden group transition-all duration-300 hover:scale-105 ${dimensions} ${className}`}
      title="MSR — Mubaarakah Salwat Rashid"
    >
      {/* Outer subtle decorative ring */}
      <div className="absolute inset-[2px] rounded-full border border-amber-200/30 dark:border-amber-200/20 pointer-events-none" />
      
      {/* Monogram Text MSR */}
      <span className={`relative z-10 select-none ${textSize} font-serif tracking-tight text-amber-100 flex items-center justify-center`}>
        <span className="font-extrabold text-white">M</span>
        <span className="text-amber-200 font-medium italic -ml-[1px]">S</span>
        <span className="font-bold text-stone-200 -ml-[1px]">R</span>
      </span>

      {/* Subtle shine background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/15 opacity-60 group-hover:opacity-100 transition-opacity" />
    </div>
  );
};
