/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ottimizzazioni per performance
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
    // Abilita compressione automatica
    gzipSize: true,
    // Ottimizza bundle splitting
    optimizeCss: true,
  },
  
  // Configurazione immagini ottimizzata
  images: {
    // Domini esterni per ottimizzazione
    domains: ['images.unsplash.com'],
    // Formati moderni per performance
    formats: ['image/webp', 'image/avif'],
    // Dimensioni responsive automatiche
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Lazy loading ottimizzato
    minimumCacheTTL: 31536000, // 1 anno
  },
  
  // Compressione e ottimizzazioni
  compress: true,
  
  // Headers per caching
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;