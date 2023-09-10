import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './authReducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
