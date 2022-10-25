import { configureStore } from '@reduxjs/toolkit';
import ContactReducer from '../features/ContactSlice';
import AppointmentReducer from '../features/AppointmentSlice';

export const store = configureStore({
  reducer: {
    contacts: ContactReducer,
    appointments: AppointmentReducer,
  },
});
