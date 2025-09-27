'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: '#0B1020' }}>
      {/* Background effects - coerenti con il brand */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5" style={{ background: 'radial-gradient(circle at 20% 80%, #D3F20F 0%, transparent 50%), radial-gradient(circle at 80% 20%, #D3F20F 0%, transparent 50%)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.2,
              type: "spring",
              stiffness: 200
            }}
            className="mb-8 flex justify-center"
          >
            <div 
              className="w-24 h-24 rounded-full flex items-center justify-center shadow-2xl"
              style={{ 
                background: 'linear-gradient(135deg, #D3F20F 0%, #A8D83A 100%)',
                boxShadow: '0 8px 25px rgba(211, 242, 15, 0.3)'
              }}
            >
              <CheckCircle className="w-12 h-12" style={{ color: '#0B1020' }} />
            </div>
          </motion.div>

          {/* Main Message */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl md:text-6xl font-black mb-6"
            style={{ color: '#FFFFFF' }}
          >
            <span style={{ color: '#D3F20F' }}>Perfetto!</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-4 mb-8"
          >
            <p className="text-xl md:text-2xl leading-relaxed" style={{ color: '#FFFFFF' }}>
              Un mio consulente ti contatterà al numero che ci hai fornito.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: '#C9D1D9' }}>
              La chiamata arriverà da un numero italiano. Tieni il telefono sott&apos;occhio e assicurati di rispondere 😉
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-3 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-xl hover:shadow-2xl"
              style={{ 
                background: 'linear-gradient(135deg, #D3F20F 0%, #A8D83A 100%)',
                color: '#0B1020',
                boxShadow: '0 4px 14px 0 rgba(211, 242, 15, 0.2)'
              }}
            >
              <ArrowLeft className="w-5 h-5" />
              Torna alla Home
            </Link>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-12 p-6 rounded-lg border"
            style={{ 
              background: 'rgba(211, 242, 15, 0.05)',
              border: '1px solid rgba(211, 242, 15, 0.2)'
            }}
          >
            <h3 className="text-lg font-semibold mb-2" style={{ color: '#FFFFFF' }}>
              Cosa succede ora?
            </h3>
            <div className="text-sm space-y-2" style={{ color: '#C9D1D9' }}>
              <p>• Riceverai una chiamata entro 24 ore</p>
              <p>• Analizzeremo insieme le tue esigenze</p>
              <p>• Ti proporremo la strategia migliore per il tuo LinkedIn</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
