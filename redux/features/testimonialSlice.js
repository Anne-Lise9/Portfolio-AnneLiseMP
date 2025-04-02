import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  testimonials: [],
};

const testimonialSlice = createSlice({
  name: "testimonial",
  initialState,
  reducers: {
    addTestimonial: (state, action) => {
      const newTestimonial = {
        id: Date.now(), // ID unique simple
        text: action.payload.text,
        author: action.payload.author,
      };
      state.testimonials.push(newTestimonial);
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
