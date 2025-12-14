import React from 'react';
import { X } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
}

export const Lightbox: React.FC<LightboxProps> = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white p-2 hover:bg-white/20 rounded-full transition-colors"
      >
        <X size={32} />
      </button>
      <img 
        src={imageSrc} 
        alt="Visualização em tela cheia" 
        className="max-h-[90vh] max-w-full rounded shadow-2xl animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()} 
      />
    </div>
  );
};