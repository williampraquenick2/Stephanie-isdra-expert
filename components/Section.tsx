import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id, dark = false }) => {
  return (
    <section 
      id={id} 
      className={`
        py-16 md:py-24 px-4 sm:px-6 lg:px-8
        ${dark ? 'bg-stone-100' : 'bg-brand-light'}
        ${className}
      `}
    >
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </section>
  );
};