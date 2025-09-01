'use client';

import { useEffect, useState } from 'react';

interface ProgressBarProps {
  barColor?: string;
  containerColor?: string;
  position?: 'top' | 'bottom';
  height?: number;
}

export default function ProgressBar({
  barColor = '#3B82F6',
  containerColor = '#F2F2F2',
  position = 'top',
  height = 6
}: ProgressBarProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
          setProgress(scrolled);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed left-0 z-50 pointer-events-none"
      style={{
        width: '100%',
        height: `${height}px`,
        background: containerColor,
        [position]: 0,
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${progress}%`,
          backgroundColor: barColor,
          transition: 'width 0.08s cubic-bezier(0.4, 0, 0.2, 1)',
          willChange: 'width',
        }}
      />
    </div>
  );
}
