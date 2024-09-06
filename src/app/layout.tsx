'use client';
import Link from 'next/link';
import { useState } from 'react';
import "../styles/globals.css";

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <html lang="en" className={darkMode ? 'dark-mode' : 'light-mode'}>
      <body className={`flex h-screen`}>
        <aside className="sidebar w-64 p-6 h-screen fixed left-0 top-0 bg-gray-800 text-white">
          <div className="logo mb-8">
            <h1 className="text-2xl font-bold text-center">MeedApp 🥼</h1>
          </div>
          <nav className="nav flex flex-col gap-4">
            <Link href="/" className="nav-link">Inicio</Link>
            <Link href="/patients" className="nav-link">Pacientes</Link>
            <Link href="/quotes" className="nav-link">Citas</Link>
            <Link href="/statistics" className="nav-link">Estadísticas</Link>
            <Link href="/configuration" className="nav-link">Configuración</Link>
            <button onClick={toggleDarkMode} className="nav-link">
              {darkMode ? '🌙 Modo Oscuro' : '☀️ Modo Claro'}
            </button>
          </nav>
        </aside>
        <div className="flex-1 ml-64 p-8">
          <main className="content p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
