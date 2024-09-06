import Link from 'next/link';

export default function Configuration() {
    return (
      <div>
        <h1>Configuración</h1>
        <p>Aquí puedes configurar el dasboard del admin.</p>
        <Link href="/" passHref>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
          Volver a Inicio
        </button>
      </Link>
      </div>
    );
  }