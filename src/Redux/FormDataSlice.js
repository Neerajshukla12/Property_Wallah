import { createSlice } from "@reduxjs/toolkit";

const formDataSlice = createSlice({
  name: "formData",
  initialState: {
    step: 1,
    isFinished: false,
    formData: {},
    photos: []
  },
  reducers: {
    saveFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    clearFormData: () => {
      return { step: 1, isFinished: false, formData: {}, photos: [] };
    },
    uploadPhotos: (state, action) => {
      // action.payload is now an array of Cloudinary URLs (strings)
      state.photos = Array.isArray(action.payload) ? action.payload : [];
    },
    incrementStep: (state) => {
      state.step += 1;
    },
    decrementStep: (state) => {
      state.step -= 1;
    },
    resetStep: (state) => {
      state.step = 1;
    },
    resetForm: () => {
      return { step: 1, isFinished: false, formData: {}, photos: [] };
    },
    setUserProperties: (state, action) => {
      state.userProperties = action.payload;
    },
  },
});

export const { saveFormData, clearFormData, uploadPhotos, incrementStep, decrementStep, resetStep, resetForm, setUserProperties } = formDataSlice.actions;
export default formDataSlice.reducer;