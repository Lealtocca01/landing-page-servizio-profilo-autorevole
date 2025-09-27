"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useState } from "react"

interface PackagePopupProps {
  isOpen: boolean
  onClose: () => void
}

// Interfaccia per i dati del form pacchetto
interface PackageFormData {
  nome: string
  cognome: string
  email: string
  telefono: string
  azienda: string
  settore: string
  messaggio: string
  privacyAccepted: boolean
  packageType: string
}

// Interfaccia per gli errori di validazione
interface ValidationErrors {
  [key: string]: string[]
}

export function PackagePopup({ isOpen, onClose }: PackagePopupProps) {
  const [formData, setFormData] = useState<PackageFormData>({
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
    azienda: "",
    settore: "",
    messaggio: "",
    privacyAccepted: false,
    packageType: "Professional"
  })

  // Stati per gestire il caricamento e gli errori
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [successMessage, setSuccessMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    
    // Rimuovi l'errore per questo campo quando l'utente inizia a digitare
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: []
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrors({})
    setSuccessMessage("")

    // Validazione lato client per la checkbox GDPR
    if (!formData.privacyAccepted) {
      setErrors({ privacyAccepted: ["Devi accettare la Privacy Policy per continuare"] })
      setIsLoading(false)
      return
    }

    try {
      // Prepara i dati per l'API
      const apiData = {
        nome: formData.nome,
        cognome: formData.cognome,
        email: formData.email,
        telefono: formData.telefono || undefined,
        azienda: formData.azienda || undefined,
        settore: formData.settore,
        messaggio: formData.messaggio || undefined,
        privacyAccepted: formData.privacyAccepted,
        packageType: formData.packageType
      }

      const response = await fetch('/api/package', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData),
      })

      const result = await response.json()

      if (result.ok) {
        // Successo - reindirizza alla pagina di successo
        window.location.href = '/success'
      } else {
        // Errore - mostra errori di validazione o altri errori
        if (result.errors) {
          setErrors(result.errors)
        } else {
          setErrors({ general: [result.message || "Si è verificato un errore"] })
        }
      }
    } catch (error) {
      console.error('Errore nella richiesta:', error)
      setErrors({ general: ["Errore di connessione. Riprova più tardi."] })
    } finally {
      setIsLoading(false)
    }
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
                  Inserisci i tuoi dati, un consulente ti ricontatterà.
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
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors ${
                      errors.nome ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-600 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                    required
                  />
                  {errors.nome && (
                    <p className="mt-1 text-sm text-red-400">{errors.nome[0]}</p>
                  )}
                </div>

                {/* Cognome */}
                <div>
                  <input
                    type="text"
                    name="cognome"
                    placeholder="Il tuo Cognome"
                    value={formData.cognome}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors ${
                      errors.cognome ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-600 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                    required
                  />
                  {errors.cognome && (
                    <p className="mt-1 text-sm text-red-400">{errors.cognome[0]}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="La tua mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors ${
                      errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-600 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                    required
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email[0]}</p>
                  )}
                </div>

                {/* Telefono */}
                <div>
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="Il tuo numero"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors ${
                      errors.telefono ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-600 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                  />
                  {errors.telefono && (
                    <p className="mt-1 text-sm text-red-400">{errors.telefono[0]}</p>
                  )}
                </div>

                {/* Azienda */}
                <div>
                  <input
                    type="text"
                    name="azienda"
                    placeholder="Indica il nome della tua attività"
                    value={formData.azienda}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors ${
                      errors.azienda ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-600 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                  />
                  {errors.azienda && (
                    <p className="mt-1 text-sm text-red-400">{errors.azienda[0]}</p>
                  )}
                </div>

                {/* Settore */}
                <div>
                  <select
                    name="settore"
                    value={formData.settore}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white focus:outline-none focus:ring-1 transition-colors ${
                      errors.settore ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-600 focus:border-blue-500 focus:ring-blue-500'
                    }`}
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
                  {errors.settore && (
                    <p className="mt-1 text-sm text-red-400">{errors.settore[0]}</p>
                  )}
                </div>

                {/* Messaggio aggiuntivo */}
                <div>
                  <textarea
                    name="messaggio"
                    placeholder="Hai domande specifiche sul pacchetto? (opzionale)"
                    value={formData.messaggio}
                    onChange={handleInputChange}
                    rows={3}
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors resize-none ${
                      errors.messaggio ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-600 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                  />
                  {errors.messaggio && (
                    <p className="mt-1 text-sm text-red-400">{errors.messaggio[0]}</p>
                  )}
                </div>

                {/* Checkbox GDPR */}
                <div className="space-y-2">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="privacyAccepted"
                      checked={formData.privacyAccepted}
                      onChange={handleInputChange}
                      className={`mt-1 w-4 h-4 text-blue-600 bg-gray-800 border-2 rounded focus:ring-blue-500 focus:ring-2 ${
                        errors.privacyAccepted ? 'border-red-500' : 'border-gray-600'
                      }`}
                      required
                    />
                    <span className="text-sm text-gray-300 leading-relaxed">
                      Ho letto e accetto la{' '}
                      <a
                        href="https://www.iubenda.com/privacy-policy/76483844"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                      >
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                  {errors.privacyAccepted && (
                    <p className="text-sm text-red-400">{errors.privacyAccepted[0]}</p>
                  )}
                </div>

                {/* Messaggi di errore generale */}
                {errors.general && (
                  <div className="bg-red-900/20 border border-red-500 rounded-lg p-3">
                    <p className="text-red-400 text-sm">{errors.general[0]}</p>
                  </div>
                )}

                {/* Messaggio di successo */}
                {successMessage && (
                  <div className="bg-green-900/20 border border-green-500 rounded-lg p-3">
                    <p className="text-green-400 text-sm">{successMessage}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full font-bold py-4 px-6 rounded-lg transition-all duration-300 text-lg ${
                    isLoading
                      ? 'bg-gray-600 cursor-not-allowed text-gray-300'
                      : 'hover:scale-[1.02] hover:shadow-lg'
                  }`}
                  style={!isLoading ? {
                    background: 'linear-gradient(135deg, #D3F20F 0%, #A8D83A 100%)',
                    color: '#0B1020',
                    boxShadow: '0 8px 25px rgba(211,242,15,0.3)'
                  } : {}}
                >
                  {isLoading ? 'Invio in corso...' : 'Richiedi Maggiori Informazioni'}
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
