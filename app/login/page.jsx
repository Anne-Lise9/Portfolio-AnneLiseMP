"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/features/authSlice";

export default function LoginPage() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.users);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Tous les champs sont obligatoires.");
      return;
    }

    const userExists = users.find((u) => u.email === email && u.password === password);
    if (!userExists) {
      setError("Identifiants invalides.");
      return;
    }

    dispatch(login({ email, password }));
    setError("");
    alert("Connexion réussie !");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-semibold mb-4">Connexion</h1>
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
          Se connecter
        </button>
      </form>
    </main>
  );
}
