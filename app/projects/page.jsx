"use client";

import ProtectedRoute from "../ProtectedRoute";

export default function ProjectsPage() {
  return (
    <ProtectedRoute>
      <main className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-2xl font-semibold mb-4">Page des projets</h1>
        <p>Ici, vous pourrez consulter mes projets.</p>
      </main>
    </ProtectedRoute>
  );
}
