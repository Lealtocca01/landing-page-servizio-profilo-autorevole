"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useState } from "react"

interface ContactPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
    attivita: "",
    settore: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Qui puoi aggiungere la logica per inviare i dati
    console.log("Form submitted:", formData)
    // Per ora chiudiamo il popup
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay scuro */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-700">
                <h2 className="text-xl font-bold text-white">
                  Inserisci i tuoi dati, un mio consulente ti ricontatterà.
                </h2>
                <button
                  onClick={onClose}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* Nome */}
                <div>
                  <input
                    type="text"
                    name="nome"
                    placeholder="Il tuo Nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    required
                  />
                </div>

                {/* Cognome */}
                <div>
                  <input
                    type="text"
                    name="cognome"
                    placeholder="Il tuo Cognome"
                    value={formData.cognome}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="La tua mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    required
                  />
                </div>

                {/* Telefono */}
                <div>
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="Il tuo numero"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    required
                  />
                </div>

                {/* Attività */}
                <div>
                  <input
                    type="text"
                    name="attivita"
                    placeholder="Indica il nome della tua attività"
                    value={formData.attivita}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    required
                  />
                </div>

                {/* Settore */}
                <div>
                  <select
                    name="settore"
                    value={formData.settore}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    required
                  >
                    <option value="" className="text-gray-400">In che settore operi?</option>
                    <option value="web-agency-digital-marketing" className="text-white">Web Agency / Digital Marketing</option>
                    <option value="consulenza-servizi-legali" className="text-white">Consulenza / Servizi Legali</option>
                    <option value="arte" className="text-white">Arte</option>
                    <option value="formazione-no-trading" className="text-white">Formazione (No Trading)</option>
                    <option value="produzione" className="text-white">Produzione</option>
                    <option value="moda-abbigliamento" className="text-white">Moda e Abbigliamento</option>
                    <option value="fitness-benessere" className="text-white">Fitness e Benessere</option>
                    <option value="tecnologia-informatica" className="text-white">Tecnologia e Informatica</option>
                    <option value="trading" className="text-white">Trading</option>
                    <option value="logistica-trasporti" className="text-white">Logistica / Trasporti</option>
                    <option value="settore-sanitario" className="text-white">Settore Sanitario</option>
                    <option value="ristorazione" className="text-white">Ristorazione</option>
                    <option value="automotive" className="text-white">Automotive</option>
                    <option value="e-commerce-b2c" className="text-white">E-Commerce B2C</option>
                    <option value="e-commerce-b2b" className="text-white">E-Commerce B2B</option>
                    <option value="network-marketing" className="text-white">Network Marketing</option>
                    <option value="turismo-ospitalita" className="text-white">Turismo e Ospitalità</option>
                    <option value="immobiliare" className="text-white">Immobiliare</option>
                    <option value="altro" className="text-white">Altro</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 text-lg"
                >
                  Sì, Voglio Maggiori informazioni
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
