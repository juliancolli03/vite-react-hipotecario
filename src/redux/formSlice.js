// src/redux/formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nombre: '',
  email: '',
  codigo: '',
  telefono: ''
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    // Setea uno o varios campos del formulario
    setFormData: (state, action) => {
      const data = action.payload;
      return { ...state, ...data };
    },
    // Limpia todos los campos al estado inicial
    clearFormData: () => initialState
  }
});

export const { setFormData, clearFormData } = formSlice.actions;
export default formSlice.reducer;
