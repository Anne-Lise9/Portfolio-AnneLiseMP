import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import testimonialReducer from "./features/testimonialSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    testimonial: testimonialReducer,
  },
});
