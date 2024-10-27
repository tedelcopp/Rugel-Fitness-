import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', 
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {  colors: {
      backgroundLight: '#ffffff',
      textLight: '#1f2937',
      cardBgLight: '#f3f4f6',
      linkLight: '#1d4ed8',

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
