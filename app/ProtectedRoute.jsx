"use client";

import { useSelector } from "react-redux";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-2xl font-semibold mb-4">Accès refusé</h1>
        <p>Vous devez être connecté pour accéder à cette page.</p>
      </main>
    );
  }

  return children;
}
