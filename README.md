# 🚀 Profilo Autorevole - Landing Page

Una landing page Next.js professionale per il servizio "Profilo Autorevole" che trasforma LinkedIn in uno strumento di business.

## ✨ Caratteristiche

- **Next.js 15** con App Router e TypeScript
- **Design Moderno** ispirato ai migliori servizi professionali
- **Animazioni Fluide** con Framer Motion
- **Glassmorphism** e effetti visuali avanzati
- **Responsive Design** ottimizzato per tutti i dispositivi
- **SEO Ottimizzato** con metadata completi
- **Performance** ottimizzate per Lighthouse

## 🛠 Stack Tecnologico

- **Framework**: Next.js 15
- **Styling**: TailwindCSS
- **Animazioni**: Framer Motion
- **Icons**: Lucide React
- **Tipografia**: Inter (Google Fonts)
- **Deployment**: Pronto per Vercel

## 📋 Struttura delle Sezioni

1. **Hero** - Pain d'impatto con CTA principale
2. **Pain Amplification** - 3 bullet points con domande mirate
3. **Wrong Paths** - Percorsi sbagliati da evitare
4. **How It Works** - Processo in 4 step
5. **Weekly Benefits** - Progressi settimana per settimana
6. **Social Proof** - Testimonianze con glassmorphism
7. **Comparison Table** - Confronto vs alternative
8. **Final CTA** - Offerta con prezzo €250/mese
9. **FAQ** - Accordion animato
10. **Footer** - Links e contatti

## 🚀 Quick Start

1. **Installa le dipendenze**:
   \`\`\`bash
   npm install
   # oppure
   yarn install
   \`\`\`

2. **Avvia il server di sviluppo**:
   \`\`\`bash
   npm run dev
   # oppure
   yarn dev
   \`\`\`

3. **Apri il browser** su [http://localhost:3001](http://localhost:3001)

## 📱 Responsive Design

La landing page è completamente responsive con breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Animazioni Incluse

- **Scroll-triggered animations** con Framer Motion
- **Hover effects** su bottoni e card
- **Glassmorphism** su componenti selezionati
- **Progress bar** di scroll
- **Bounce e glow effects** sui CTA
- **Accordion animato** per FAQ
- **Gradient backgrounds** animati

## 🚀 Deploy su Vercel

1. **Push su GitHub**:
   \`\`\`bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   \`\`\`

2. **Collega a Vercel**:
   - Vai su [vercel.com](https://vercel.com)
   - Importa il repository
   - Deploy automatico

## 🎯 Ottimizzazioni Performance

- **Image optimization** con Next.js
- **Bundle splitting** automatico
- **CSS ottimizzato** con TailwindCSS
- **Font loading** ottimizzato
- **Core Web Vitals** ottimizzati

## 📧 Configurazione Email

Il CTA principale apre il client email. Per implementare un form:
1. Aggiungi un servizio come EmailJS o Resend
2. Modifica il componente `FinalCTA.tsx`
3. Implementa la logica di invio

## 🔧 Personalizzazione

### Colori
Modifica i colori nel file `tailwind.config.ts`:
\`\`\`typescript
colors: {
  primary: { ... },
  accent: { ... }
}
\`\`\`

### Contenuti
Tutti i contenuti sono facilmente modificabili nei rispettivi componenti in `src/components/`

### Animazioni
Le animazioni possono essere personalizzate modificando i parametri di Framer Motion in ogni componente.

## 📊 Analytics (Opzionale)

Per aggiungere Google Analytics:
1. Crea `.env.local`
2. Aggiungi `NEXT_PUBLIC_GA_ID=your-ga-id`
3. Implementa il tracking nel layout

## 🤝 Supporto

Per domande o supporto:
- Email: info@profiloautorevole.it
- LinkedIn: [Profilo Autorevole](https://linkedin.com/company/profilo-autorevole)

---

**Creato con ❤️ per professionisti che vogliono dominare LinkedIn**