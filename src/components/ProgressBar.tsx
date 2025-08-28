'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ProgressBarProps {
  backgroundColor?: string;
  fillColor?: string;
  height?: number;
  className?: string;
}

export const ProgressBar = ({ 
  backgroundColor = "rgb(221, 221, 221)", 
  fillColor = "rgb(119, 11, 244)",
  height = 206,
  className = ""
}: ProgressBarProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div 
      ref={containerRef}
      className={`relative ${className}`}
      style={{ height: `${height}px`, width: '2px' }}
    >
      {/* Background Container */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ backgroundColor }}
      >
        {/* Progress Filler */}
        <motion.div
          className="absolute bottom-0 left-0 w-full origin-bottom"
          style={{ 
            backgroundColor: fillColor,
            height: '150px',
            scaleY,
            transformOrigin: 'bottom'
          }}
        />
      </div>
    </div>
  );
};
