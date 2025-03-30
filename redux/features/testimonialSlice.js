import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  testimonials: [],
};

const testimonialSlice = createSlice({
  name: "testimonial",
  initialState,
  reducers: {
    addTestimonial: (state, action) => {
      state.testimonials.push(action.payload);
    },
    updateTestimonial: (state, action) => {
      const index = state.testimonials.findIndex(
        (t) => t.id === action.payload.id
      );
      if (index !== -1) {
        state.testimonials[index] = action.payload;
      }
    },
  },
});

export const { addTestimonial, updateTestimonial } = testimonialSlice.actions;
export default testimonialSlice.reducer;
