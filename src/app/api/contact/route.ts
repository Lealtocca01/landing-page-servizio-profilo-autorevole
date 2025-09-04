import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Define the validation schema using Zod
const contactSchema = z.object({
  nome: z.string().min(2, 'Il nome deve essere di almeno 2 caratteri'),
  cognome: z.string().min(2, 'Il cognome deve essere di almeno 2 caratteri'),
  email: z.string().email('Email non valida'),
  telefono: z.string().optional(),
  azienda: z.string().optional(),
  settore: z.string().min(1, 'Il settore è obbligatorio'),
  sorgente: z.string().optional(),
});

// Type for the validated data
type ContactData = z.infer<typeof contactSchema>;

// Interface for validation errors
interface ValidationErrors {
  [key: string]: string[];
}

// Interface for the response
interface ApiResponse {
  ok: boolean;
  message?: string;
  errors?: ValidationErrors;
}

export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Validate the data using Zod schema
    const validationResult = contactSchema.safeParse(body);
    
    // If validation fails, return 400 with errors
    if (!validationResult.success) {
      const errors: ValidationErrors = {};
      
      // Format Zod errors into a more user-friendly format
      validationResult.error.issues.forEach((error) => {
        const field = error.path[0] as string;
        if (!errors[field]) {
          errors[field] = [];
        }
        errors[field].push(error.message);
      });
      
      return NextResponse.json(
        {
          ok: false,
          errors,
        },
        { status: 400 }
      );
    }
    
    // Get the validated data
    const contactData: ContactData = validationResult.data;
    
    // Get the webhook URL from environment variables
    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    
    if (!webhookUrl) {
      console.error('N8N_WEBHOOK_URL environment variable is not set');
      return NextResponse.json(
        {
          ok: false,
          message: 'Configurazione server non valida',
        },
        { status: 500 }
      );
    }
    
    // Send data to external webhook
    try {
      const apiKey = process.env.N8N_WEBHOOK_API_KEY;
      
      if (!apiKey) {
        console.error('N8N_WEBHOOK_API_KEY environment variable is not set');
        return NextResponse.json(
          {
            ok: false,
            message: 'Configurazione server non valida',
          },
          { status: 500 }
        );
      }
      
      const webhookResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': apiKey,
        },
        body: JSON.stringify(contactData),
      });
      
      // Check if webhook request was successful
      if (!webhookResponse.ok) {
        console.error('Webhook request failed:', webhookResponse.status, webhookResponse.statusText);
        return NextResponse.json(
          {
            ok: false,
            message: 'Servizio temporaneamente non disponibile',
          },
          { status: 503 }
        );
      }
      
    } catch (webhookError) {
      // Handle webhook connection errors
      console.error('Webhook connection error:', webhookError);
      return NextResponse.json(
        {
          ok: false,
          message: 'Servizio temporaneamente non disponibile',
        },
        { status: 503 }
      );
    }
    
    // Return success response
    return NextResponse.json({
      ok: true,
      message: 'Grazie, un consulente ti contatterà a breve',
    });
    
  } catch (error) {
    // Handle JSON parsing errors or other unexpected errors
    console.error('API error:', error);
    return NextResponse.json(
      {
        ok: false,
        message: 'Errore interno del server',
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET(): Promise<NextResponse<ApiResponse>> {
  return NextResponse.json(
    {
      ok: false,
      message: 'Metodo non supportato',
    },
    { status: 405 }
  );
}