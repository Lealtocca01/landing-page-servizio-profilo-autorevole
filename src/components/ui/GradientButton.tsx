import React from 'react';
import { motion } from 'framer-motion';

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

const GradientButton: React.FC<GradientButtonProps> = ({ children, onClick, className, fullWidth = false }) => {
  return (
    <motion.button 
      className={`relative group ${fullWidth ? 'w-full' : ''} ${className || ''}`}
      onClick={onClick}
      initial={{ 
        scale: 1,
        filter: 'drop-shadow(0 0 0 rgba(96,165,250,0))'
      }}
      whileHover={{ 
        scale: 1.05,
        filter: 'drop-shadow(0 0 20px rgba(96,165,250,0.8)) drop-shadow(0 0 40px rgba(52,211,153,0.6)) drop-shadow(0 0 60px rgba(251,191,36,0.4))'
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ 
        duration: 0.3, 
        ease: "easeOut",
        filter: { duration: 0.4 }
      }}
    >
      <div 
        className={`relative p-[2.5px] rounded-xl ${fullWidth ? 'w-full' : ''}`}
        style={{ background: 'linear-gradient(135deg, #60a5fa, #34d399, #fbbf24)' }}
      >
        <div 
          className={`relative px-6 py-3 md:px-8 md:py-4 md:text-lg font-semibold rounded-lg transition-all duration-300 group-hover:shadow-[inset_0_0_25px_rgba(96,165,250,0.5)] ${fullWidth ? 'w-full' : ''}`}
          style={{ 
            fontSize: '1.1em',
            background: 'linear-gradient(135deg, #0a1a3a, #1a2a4a, #0f1f3f)',
            color: 'white',
            boxShadow: 'inset 0 1px 0 rgba(96, 165, 250, 0.4), inset 0 -1px 0 rgba(96, 165, 250, 0.2)'
          }}
        >
          <span
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
      </div>
    </motion.button>
  );
}

export default GradientButton;
