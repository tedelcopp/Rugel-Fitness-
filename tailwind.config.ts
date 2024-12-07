import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', 
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Colores para la versión light
        backgroundLight: '#325343', // Fondo principal
        textLight: '#ffffff', // Texto en blanco
        cardBgLight: '#D64C0C', // Fondo para tarjetas
        linkLight: '#ffffff', // Links en blanco

        // Colores para la versión dark
        backgroundDark: '#111827',
        textDark: '#e5e7eb',
        cardBgDark: '#1f2937',
        linkDark: '#3b82f6',
      },
    },
  },
  plugins: [],
};

export default config;
