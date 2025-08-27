'use client';

import { motion } from 'framer-motion';

export function OrbitPain() {
  return (
    <div className="relative flex items-center justify-center w-full max-w-2xl p-8">
      {/* Concentric circles background */}
      <div className="concentric-circles relative w-[450px] h-[450px]">
        <motion.div 
          className="absolute inset-0 rounded-full border border-dashed border-gray-200"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute inset-[56px] rounded-full border border-dashed border-gray-200"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      {/* Central content with glow */}
      <div className="absolute flex items-center justify-center w-auto h-auto">
        <div className="absolute w-40 h-40 bg-blue-500 rounded-full blur-2xl opacity-50"></div>
        <div className="z-10 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Profilo</span>
          <span className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Autorevole</span>
        </div>
      </div>
      
      {/* Orbital labels */}
      <div className="absolute w-full h-full">
        <motion.div 
          className="absolute p-4 bg-blue-500 rounded-2xl shadow-md" 
          style={{ top: '15%', left: '30%', transform: 'translate(-50%, -50%)' }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-xl font-bold text-white">+ Autorità</span>
        </motion.div>
        
        <motion.div 
          className="absolute p-4 bg-blue-500 rounded-2xl shadow-md" 
          style={{ top: '40%', right: '5%', transform: 'translate(0, -50%)' }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-xl font-bold text-white">+ Fiducia</span>
        </motion.div>
        
        <motion.div 
          className="absolute p-4 bg-blue-500 rounded-2xl shadow-md" 
          style={{ bottom: '15%', left: '50%', transform: 'translate(-50%, 0)' }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-xl font-bold text-white">+ Clienti</span>
        </motion.div>
      </div>
    </div>
  );
}
