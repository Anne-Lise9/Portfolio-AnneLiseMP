"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../redux/features/authSlice";

export default function SignupPage() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.users);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Tous les champs sont obligatoires.");
      return;
    }

    const userExists = users.find((u) => u.email === email);
    if (userExists) {
      setError("Ce courriel est déjà inscrit.");
      return;
    }

    dispatch(signup({ email, password }));
    setError("");
    alert("Inscription réussie !");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-semibold mb-4">Inscription</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm">
        <input
          type="email"
          placeholder="Adresse courriel"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-gray-800 text-white p-2 rounded">
          S'inscrire
        </button>
      </form>
    </main>
  );
}
