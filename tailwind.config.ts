import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        'xxl': '1.75rem',  // Puedes ajustar el valor según lo necesites
      },
      colors: {
        // Light mode
        backgroundLight: '#33684D', // Fondo principal en verde
        textLight: '#E9EAE4', // Color de los textos en light mode
        cardBgLight: '#D64D0C', // Fondo de las tarjetas en naranja
        cardBgLightAlt: '#F28C5A', // Tono más claro del naranja para variantes
        linkLight: '#D64D0C', // Cambiar texto azul al color deseado
        backgroundLightAlt: '#B5D3B0', // Verde más claro para secciones específicas

        // Dark mode 
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
