'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import NextImage from 'next/image';

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <NextImage
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Team professionale al lavoro - Profilo Autorevole"
          fill
          className="object-cover opacity-20"
          priority
          quality={85}
          sizes="100vw"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60" />
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
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-2xl">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          {/* Main Message */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl md:text-6xl font-black text-white mb-6"
          >
            Fatto!
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-4 mb-8"
          >
            <p className="text-xl md:text-2xl text-white leading-relaxed">
              Un mio consulente ti contatterà al numero che ci hai fornito.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
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
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-xl hover:shadow-2xl"
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
            className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              Cosa succede ora?
            </h3>
            <div className="text-sm text-gray-300 space-y-2">
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
