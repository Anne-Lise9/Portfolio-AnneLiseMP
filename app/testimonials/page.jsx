"use client";

import { useSelector } from "react-redux";
import Link from "next/link";
import ProtectedRoute from "../ProtectedRoute";

export default function TestimonialsPage() {
  const testimonials = useSelector((state) => state.testimonial.testimonials);

  return (
    <ProtectedRoute>
      <main className="flex flex-col items-center p-8">
        <h1 className="text-2xl font-semibold mb-4">Témoignages</h1>
        <Link href="/testimonials/edit" className="bg-gray-800 text-white p-2 rounded mb-4">
          Ajouter un témoignage
        </Link>
        <ul className="w-full max-w-md">
          {testimonials.length === 0 ? (
            <p>Aucun témoignage pour le moment.</p>
          ) : (
            testimonials.map((t) => (
              <li key={t.id} className="border p-2 mb-2 rounded">
                {t.message}
              </li>
            ))
          )}
        </ul>
      </main>
    </ProtectedRoute>
  );
}
