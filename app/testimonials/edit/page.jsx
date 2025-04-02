"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTestimonial } from "../../../redux/features/testimonialSlice";
import { useRouter } from "next/navigation";
import ProtectedRoute from "../../ProtectedRoute";

export default function EditTestimonialPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.auth.user);

  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      setError("Le message est obligatoire.");
      return;
    }

    dispatch(addTestimonial({ text, author: user.email }));
    setError("");
    alert("Témoignage ajouté !");
    router.push("/testimonials");
  };

  return (
    <ProtectedRoute>
      <main className="flex flex-col items-center p-8">
        <h1 className="text-2xl font-semibold mb-4">Ajouter un témoignage</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm">
          <textarea
            placeholder="Votre témoignage"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border p-2 rounded"
          />
          {error && <p className="text-red-500">{error}</p>}
          <button type="submit" className="bg-gray-800 text-white p-2 rounded">
            Soumettre
          </button>
        </form>
      </main>
    </ProtectedRoute>
  );
}
