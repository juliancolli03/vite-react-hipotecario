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
    setFormData: (state, action) => {
      const data = action.payload;
      return { ...state, ...data };
    },
    clearFormData: () => initialState
  }
});

export const { setFormData, clearFormData } = formSlice.actions;
export default formSlice.reducer;
