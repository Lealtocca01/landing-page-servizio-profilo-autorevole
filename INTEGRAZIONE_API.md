# 🚀 Integrazione API Contact - Guida Completa

## ✅ Cosa è stato implementato

### 1. **Endpoint API `/api/contact`**
- ✅ Validazione completa con Zod
- ✅ Gestione errori di validazione (400)
- ✅ Integrazione webhook N8N
- ✅ Gestione errori di connessione (503)
- ✅ Risposta di successo (200)

### 2. **Componente ContactPopup aggiornato**
- ✅ Integrazione con l'API
- ✅ Gestione stati di caricamento
- ✅ Visualizzazione errori di validazione
- ✅ Messaggi di successo
- ✅ Reset automatico del form
- ✅ Tracciamento sorgente richiesta

## 🔧 Come utilizzare il ContactPopup

### Utilizzo Base
```tsx
import { ContactPopup } from '@/components/ContactPopup'

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Apri Form Contatto
      </button>
      
      <ContactPopup 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        sorgente="pagina-principale" // Traccia da dove proviene la richiesta
      />
    </>
  )
}
```

### Sorgenti Predefinite
- `"popup-manager"` - Per ContactPopupManager
- `"popup-wrapper"` - Per ContactPopupWrapper
- `"cta-hero"` - Per CTA nella sezione Hero
- `"cta-finale"` - Per CTA finale
- `"pagina-nascosta"` - Per pagine nascoste

## 📋 Campi del Form

### Obbligatori
- **nome**: minimo 2 caratteri
- **cognome**: minimo 2 caratteri  
- **email**: formato email valido
- **settore**: deve essere selezionato

### Opzionali
- **telefono**: numero di telefono
- **azienda**: nome dell'azienda/attività
- **sorgente**: tracciamento automatico

## 🎯 Gestione Errori

### Errori di Validazione (400)
```json
{
  "ok": false,
  "errors": {
    "nome": ["Il nome deve essere di almeno 2 caratteri"],
    "email": ["Email non valida"],
    "settore": ["Il settore è obbligatorio"]
  }
}
```

### Errori di Server (500/503)
```json
{
  "ok": false,
  "message": "Servizio temporaneamente non disponibile"
}
```

### Successo (200)
```json
{
  "ok": true,
  "message": "Grazie, un consulente ti contatterà a breve"
}
```

## 🔗 Configurazione Webhook

### Variabile d'Ambiente
Aggiungi nel file `.env.local`:
```bash
N8N_WEBHOOK_URL=https://il-tuo-webhook-n8n.com/webhook/contact
```

### Dati Inviati al Webhook
```json
{
  "nome": "Mario",
  "cognome": "Rossi",
  "email": "mario.rossi@example.com",
  "telefono": "1234567890",
  "azienda": "Test Company",
  "settore": "tecnologia-informatica",
  "sorgente": "cta-hero"
}
```

## 🧪 Test dell'Endpoint

### Test con cURL
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Mario",
    "cognome": "Rossi",
    "email": "mario.rossi@example.com",
    "settore": "tecnologia-informatica",
    "sorgente": "test"
  }'
```

### Test con JavaScript
```javascript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    nome: "Mario",
    cognome: "Rossi", 
    email: "mario.rossi@example.com",
    settore: "tecnologia-informatica",
    sorgente: "test"
  })
})

const result = await response.json()
console.log(result)
```

## 🎨 Personalizzazione UI

### Stili Errori
I campi con errori mostrano:
- Bordo rosso
- Messaggio di errore sotto il campo
- Focus rosso quando selezionato

### Stati del Pulsante
- **Normale**: Blu con testo "Sì, Voglio Maggiori informazioni"
- **Caricamento**: Grigio con testo "Invio in corso..." e disabilitato
- **Successo**: Messaggio verde di conferma

## 🔄 Flusso Completo

1. **Utente compila form** → Validazione lato client
2. **Submit form** → Chiamata API `/api/contact`
3. **Validazione server** → Zod valida i dati
4. **Se validi** → Invio a webhook N8N
5. **Se webhook OK** → Risposta di successo
6. **Se errore** → Mostra errore specifico
7. **Successo** → Mostra messaggio e chiude popup

## 📝 Note Importanti

- Il form si resetta automaticamente dopo il successo
- Gli errori si cancellano quando l'utente inizia a digitare
- Il popup si chiude automaticamente dopo 2 secondi dal successo
- La validazione è sia lato client che server
- Tutti i campi opzionali vengono inviati come `undefined` se vuoti
