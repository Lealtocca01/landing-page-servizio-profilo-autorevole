import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center max-w-md mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-red-400">
          Pagina non trovata
        </h2>
        <p className="text-gray-300 mb-6">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        <Link
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors inline-block"
        >
          Torna alla home
        </Link>
      </div>
    </div>
  );
}
