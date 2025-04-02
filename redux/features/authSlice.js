import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [], // Liste des utilisateurs inscrits
  user: null, // Utilisateur connecté
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action) => {
      const { email, password } = action.payload;
      const userExists = state.users.find((u) => u.email === email);

      if (!userExists) {
        state.users.push({ email, password });
        state.user = { email };
        state.isAuthenticated = true;
      }
    },
    login: (state, action) => {
      const { email, password } = action.payload;
      const user = state.users.find((u) => u.email === email && u.password === password);

      if (user) {
        state.user = { email };
        state.isAuthenticated = true;
      }
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;
