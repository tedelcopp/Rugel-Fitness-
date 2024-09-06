import Link from 'next/link';

export default function Patients() {
    return (
      <div>
        <h1>Pacientes</h1>
        <p>Aquí puedes gestionar los datos de los pacientes.</p>
        <Link href="/" passHref>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
          Volver a Inicio
        </button>
      </Link>
      </div>
    );
  }
  