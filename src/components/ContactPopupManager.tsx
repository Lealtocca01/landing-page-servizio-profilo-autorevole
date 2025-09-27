"use client"

import { useContactPopup } from '@/contexts/ContactPopupContext'
import { ContactPopup } from './ContactPopup'
import { PackagePopup } from './PackagePopup'

export function ContactPopupManager() {
  const { isOpen, formType, closePopup } = useContactPopup()

  console.log('ContactPopupManager render - isOpen:', isOpen, 'formType:', formType);

  // Mostra il popup appropriato in base al tipo di form
  if (formType === 'package') {
    return <PackagePopup isOpen={isOpen} onClose={closePopup} />
  }

  return <ContactPopup isOpen={isOpen} onClose={closePopup} sorgente="popup-manager" />
}