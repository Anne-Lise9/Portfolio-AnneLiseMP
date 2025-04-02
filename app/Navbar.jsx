"use client";

import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/features/authSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
    alert("Déconnexion réussie !");
  };

  return (
    <nav className="flex justify-center gap-8 items-center">
      <Link href="/">Accueil</Link>
      <Link href="/projects">Projets</Link>
      <Link href="/testimonials">Témoignages</Link>
      {!isAuthenticated ? (
        <>
          <Link href="/login">Connexion</Link>
          <Link href="/signup">Inscription</Link>
        </>
      ) : (
        <div className="flex items-center gap-4">
          <span className="text-sm">Connecté : {user.email}</span>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Déconnexion
          </button>
        </div>
      )}
    </nav>
  );
}
