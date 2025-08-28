'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center max-w-md mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-red-400">
          Qualcosa è andato storto!
        </h2>
        <p className="text-gray-300 mb-6">
          Si è verificato un errore imprevisto. Riprova o contatta il supporto.
        </p>
        <button
          onClick={reset}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          Riprova
        </button>
      </div>
    </div>
  );
}
