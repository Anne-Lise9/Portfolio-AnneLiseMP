import Link from "next/link";
import "./globals.css";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { Providers } from "./Providers";


export const metadata = {
  title: "Portfolio Anne-Lise",
  description: "Portfolio de Anne-Lise Massie-Plante",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen">
      <Providers>
          {/* Header */}
          <header className="bg-gray-800 text-white p-4">
            <nav className="flex justify-center gap-8">
              <Link href="/">Accueil</Link>
              <Link href="/projects">Projets</Link>
              <Link href="/testimonials">Témoignages</Link>
              <Link href="/login">Connexion</Link>
              <Link href="/signup">Inscription</Link>
            </nav>
          </header>

          {/* Contenu de la page */}
          <main className="flex-grow">{children}</main>

          {/* Footer */}
          <footer className="bg-gray-800 text-white p-4 text-center">
            <p>
              © 2025 Anne-Lise Massie-Plante |{" "}
              <a
                href="https://github.com/Anne-Lise9/Portfolio-AnneLiseMP"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                GitHub
              </a>{" "}
              |{" "}
              <a
                href="https://www.linkedin.com/in/anne-lise-m-plante-ab73211a4/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                LinkedIn
              </a>
            </p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
