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
      className={`relative group ${fullWidth ? 'w-full' : ''} ${className || ''} cursor-pointer z-50`}
      onClick={onClick}
      style={{ zIndex: 50 }}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div
        className={`relative px-8 py-4 md:px-10 md:py-4 font-medium rounded-full flex items-center gap-2 ${fullWidth ? 'w-full justify-center' : ''}`}
        style={{
          fontSize: '1em',
          background: '#000000',
          color: '#ffffff',
          letterSpacing: '-0.01em',
        }}
      >
        <span style={{ color: '#ffffff', fontWeight: '500' }}>
          {children}
        </span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft: '4px' }}>
          <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </motion.button>
  );
}

export default GradientButton;
