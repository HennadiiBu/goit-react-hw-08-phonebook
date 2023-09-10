import { createSlice } from '@reduxjs/toolkit';




const initialState = {
  userData: null,
  isLoading: false,
  error: null,
  authenticated: false,
  token: null,
};

const contactsSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase();
  },
});

// Генератори екшенів
export const { findContact } = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
