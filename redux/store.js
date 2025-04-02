import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import testimonialReducer from "./features/testimonialSlice";

// Charger l'état depuis localStorage
const loadState = () => {
  try {
    const testimonials = localStorage.getItem("testimonials");
    const users = localStorage.getItem("users");

    return {
      testimonial: {
        testimonials: testimonials ? JSON.parse(testimonials) : [],
      },
      auth: {
        users: users ? JSON.parse(users) : [],
        user: null,
        isAuthenticated: false,
      },
    };
  } catch (e) {
    return undefined;
  }
};

// Sauvegarder l'état dans localStorage
const saveState = (state) => {
  try {
    localStorage.setItem(
      "testimonials",
      JSON.stringify(state.testimonial.testimonials)
    );
    localStorage.setItem("users", JSON.stringify(state.auth.users));
  } catch (e) {
    console.error("Erreur de sauvegarde", e);
  }
};

const store = configureStore({
  reducer: {
    auth: authReducer,
    testimonial: testimonialReducer,
  },
  preloadedState: loadState(),
});

// Sauvegarder à chaque modification
store.subscribe(() => {
  saveState(store.getState());
});

export { store };
