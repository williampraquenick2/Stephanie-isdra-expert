import React from 'react';
import { MessageCircle } from 'lucide-react';

interface ButtonProps {
  text: string;
  subtext?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  className?: string;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ text, subtext, fullWidth = false, className = "", href }) => {
  const baseClasses = `
    group relative flex flex-col items-center justify-center 
    bg-green-700 hover:bg-green-800 text-white 
    transition-all duration-300 ease-out 
    shadow-lg hover:shadow-xl hover:-translate-y-1
    rounded-lg py-4 px-8 text-center cursor-pointer
    ${fullWidth ? 'w-full' : 'w-auto'}
    ${className}
  `;

  const content = (
    <>
      <div className="flex items-center justify-center gap-2 font-semibold text-lg md:text-xl uppercase tracking-wide">
        <MessageCircle className="w-6 h-6 fill-current text-white/90" />
        <span>{text}</span>
      </div>
      {subtext && (
        <span className="text-xs md:text-sm font-medium text-green-100 mt-1 opacity-90">
          {subtext}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <button className={baseClasses}>
      {content}
    </button>
  );
};