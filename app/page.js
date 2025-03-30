"use client";

import Image from "next/image";
import ProtectedRoute from "./ProtectedRoute";

export default function HomePage() {
  return (
    <ProtectedRoute>
      <main className="flex flex-col items-center justify-center min-h-screen p-8">
        <Image
          src="/profil.jpg"
          alt="Photo de Anne-Lise"
          width={150}
          height={150}
          className="rounded-full mb-4"
        />
        <h1 className="text-2xl font-semibold mb-4">Bienvenue sur mon Portfolio</h1>
        <p className="text-center max-w-xl">
          Bonjour, je m'appelle <strong>Anne-Lise Massie-Plante</strong> et je suis
          actuellement étudiante en <strong>Programmation informatique</strong> à
          <strong> La Cité Collégiale</strong>, à Gatineau. Organisée et autodidacte, je développe
          mes compétences en informatique avec un intérêt particulier pour les{" "}
          <strong>bases de données</strong> et la <strong>cybersécurité</strong>.
        </p>
        <p className="text-center max-w-xl mt-4">
          À travers ce portfolio, je souhaite mettre en valeur mes apprentissages
          et démontrer ma capacité à concevoir des projets concrets en lien avec
          mes études. Mon objectif est d’intégrer le marché du travail dans un
          poste lié aux bases de données ou à la cybersécurité, où je pourrai
          continuer à apprendre et contribuer à des projets stimulants.
        </p>
        <p className="text-center max-w-xl mt-4 font-medium">
          Découvrez mes projets pour en apprendre davantage sur mon parcours.
        </p>
      </main>
    </ProtectedRoute>
  );
}
