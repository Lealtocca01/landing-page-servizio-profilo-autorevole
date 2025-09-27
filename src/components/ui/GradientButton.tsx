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
        filter: 'drop-shadow(0 0 20px rgba(211,242,15,0.6)) drop-shadow(0 0 40px rgba(211,242,15,0.4))'
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
        style={{ background: '#D3F20F' }}
      >
        <div 
          className={`relative px-6 py-3 md:px-8 md:py-4 md:text-lg font-semibold rounded-lg transition-all duration-300 group-hover:shadow-lg ${fullWidth ? 'w-full' : ''}`}
          style={{ 
            fontSize: '1.1em',
            background: '#D3F20F',
            color: '#0B1020',
            boxShadow: '0 4px 14px 0 rgba(211, 242, 15, 0.2)'
          }}
        >
          <span
            style={{
              color: '#0B1020',
              fontWeight: '600'
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
