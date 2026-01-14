
import React from 'react';

interface FormSectionProps {
  number: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export const FormSection: React.FC<FormSectionProps> = ({ number, title, subtitle, children }) => {
  return (
    <section className="mb-10 sm:mb-16 relative group">
      <div className="flex items-baseline gap-2.5 sm:gap-4 mb-5 sm:mb-8">
        <span className="font-mono text-[#00FF00] text-base sm:text-xl font-bold opacity-80">[{number}]</span>
        <div>
          <h2 className="text-lg sm:text-2xl font-extrabold uppercase tracking-widest text-white group-hover:text-[#00FF00] transition-colors leading-tight">
            {title}
          </h2>
          <p className="font-mono text-[9px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1 uppercase tracking-tighter leading-none">
            // {subtitle}
          </p>
        </div>
      </div>
      <div className="pl-4 sm:pl-12 border-l border-gray-800 space-y-5 sm:space-y-8">
        {children}
      </div>
    </section>
  );
};
