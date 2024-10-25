import "../styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Fitness Page",
  description: "Página dedicada a clases de fitness.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header /> 
        {children} 
        <Footer /> 
      </body>
    </html>
  );
}
