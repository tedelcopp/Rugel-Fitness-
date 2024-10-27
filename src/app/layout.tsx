import Footer from "./components/Footer";
import Hero from "./components/Hero";
import FixedButtons from "./components/FixedButtons";
import "../styles/globals.css";

export const metadata = {
  title: "Rugel Fitness",
  description: "Más que un entrenamiento",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-backgroundLight dark:bg-backgroundDark transition-colors duration-300">
        <Hero />
        <main>{children}</main>
        <FixedButtons />                          
        <Footer />
      </body>
    </html>
  );
}
