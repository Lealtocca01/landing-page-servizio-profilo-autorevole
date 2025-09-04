"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useContactPopup } from '@/contexts/ContactPopupContext';

interface PricingGradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const PricingGradientButton: React.FC<PricingGradientButtonProps> = ({ 
  children, 
  onClick, 
  className = '' 
}) => {
  const { openPopup } = useContactPopup();
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      openPopup();
    }
  };

  return (
    <motion.button
      className={`relative w-full h-12 rounded-xl font-bold text-white overflow-hidden group ${className}`}
      onClick={handleClick}
      whileHover={{ 
        scale: 1.08,
        y: -4
      }}
      whileTap={{ scale: 0.92 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25
      }}
      style={{
        background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.2) 0%, rgba(52, 211, 153, 0.2) 50%, rgba(251, 191, 36, 0.2) 100%)',
        border: '2px solid rgba(96, 165, 250, 0.6)',
        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.1), 0 0 20px rgba(96, 165, 250, 0.3)'
      }}
    >
      {/* Effetto glossy superiore */}
      <div 
        className="absolute top-0 left-0 right-0 h-1/2 opacity-40 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.05) 70%, transparent 100%)'
        }}
      />
      
      {/* Contenuto del bottone */}
      <div className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none">
        <span 
          className="font-bold tracking-wide text-white drop-shadow-sm pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, #60a5fa, #34d399, #fbbf24)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent'
          }}
        >
          {children}
        </span>
      </div>
      
      {/* Effetto hover glass */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(52, 211, 153, 0.1) 50%, rgba(251, 191, 36, 0.1) 100%)',
          backdropFilter: 'blur(10px)'
        }}
        initial={{ opacity: 0 }}
        whileHover={{ 
          opacity: 0.4
        }}
        transition={{ 
          duration: 0.2
        }}
      />
    </motion.button>
  );
};

export default PricingGradientButton;
