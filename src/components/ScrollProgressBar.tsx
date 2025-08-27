'use client';

import { motion, useScroll } from 'framer-motion';

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="progress-bar"
      style={{ scaleX: scrollYProgress }}
    />
  );
}