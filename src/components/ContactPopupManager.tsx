"use client"

import { useContactPopup } from '@/contexts/ContactPopupContext'
import { ContactPopup } from './ContactPopup'
import { PackagePopup } from './PackagePopup'

export function ContactPopupManager() {
  const { isOpen, formType, closePopup } = useContactPopup()

  // Mostra il popup appropriato in base al tipo di form
  if (formType === 'package') {
    return <PackagePopup isOpen={isOpen} onClose={closePopup} />
  }

  return <ContactPopup isOpen={isOpen} onClose={closePopup} sorgente="popup-manager" />
}