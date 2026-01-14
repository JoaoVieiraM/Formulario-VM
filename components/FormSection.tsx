
import React from 'react';

interface FormSectionProps {
  number: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export const FormSection: React.FC<FormSectionProps> = ({ number, title, subtitle, children }) => {
  return (
    <section className="mb-16 relative group">
      <div className="flex items-baseline gap-4 mb-8">
        <span className="font-mono text-[#00FF00] text-xl font-bold opacity-80">[{number}]</span>
        <div>
          <h2 className="text-2xl font-extrabold uppercase tracking-widest text-white group-hover:text-[#00FF00] transition-colors">
            {title}
          </h2>
          <p className="font-mono text-xs text-gray-500 mt-1 uppercase tracking-tighter">
            // {subtitle}
          </p>
        </div>
      </div>
      <div className="pl-12 border-l border-gray-800 space-y-8">
        {children}
      </div>
    </section>
  );
};
