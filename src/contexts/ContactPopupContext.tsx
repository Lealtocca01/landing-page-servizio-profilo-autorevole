"use client"

import { createContext, useContext, useState, ReactNode } from "react"

export type FormType = 'consultation' | 'package'

interface ContactPopupContextType {
  isOpen: boolean
  formType: FormType
  openPopup: (type?: FormType) => void
  closePopup: () => void
}

const ContactPopupContext = createContext<ContactPopupContextType | undefined>(undefined)

export function ContactPopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [formType, setFormType] = useState<FormType>('consultation')

  const openPopup = (type: FormType = 'consultation') => {
    setFormType(type)
    setIsOpen(true)
  }
  const closePopup = () => setIsOpen(false)

  return (
    <ContactPopupContext.Provider value={{ isOpen, formType, openPopup, closePopup }}>
      {children}
    </ContactPopupContext.Provider>
  )
}

export function useContactPopup() {
  const context = useContext(ContactPopupContext)
  if (context === undefined) {
    throw new Error("useContactPopup must be used within a ContactPopupProvider")
  }
  return context
}