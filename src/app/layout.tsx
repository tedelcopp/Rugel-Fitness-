import "../styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero"

export const metadata = {
  title: "Rugel Fitness",
  description: "Mas que un entrenamiento",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Hero />
        {children} {/* Aquí se renderizan las páginas específicas */}
        <Footer /> 
      </body>
    </html>
  );
}
