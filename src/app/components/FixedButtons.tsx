"use client";

import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa'; 

const FixedButtons: React.FC = () => {
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

    setTheme(initialTheme);
    document.documentElement.classList.add(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    console.log("Cambiando de tema:", newTheme);
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-2 z-10">
      <button
        onClick={toggleTheme}
        aria-label="Cambiar tema"
        className="w-14 h-14 flex items-center justify-center bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105"
      >
        <span className="text-lg">{theme === 'light' ? '🌙' : '☀️'}</span>
      </button>
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 flex items-center justify-center bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-105"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp className="text-xl" /> 
      </a>
    </div>
  );
};

export default FixedButtons;
