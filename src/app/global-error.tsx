'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
          <div className="text-center max-w-md mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4 text-red-400">
              Errore critico dell&apos;applicazione
            </h2>
            <p className="text-gray-300 mb-6">
              Si è verificato un errore critico. Riprova o ricarica la pagina.
            </p>
            <button
              onClick={reset}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Riprova
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
