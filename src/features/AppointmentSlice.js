import { createSlice } from "@reduxjs/toolkit";

export const AppointmentSlice = createSlice({
    name: "appointments",
    initialState: {
        array: [],
    },
    reducers: {
        addAppointment: (state, action) => {
            const index = state.array.findIndex((e) => e.id === action.payload.id);
            index === -1
                ? state.array.push(action.payload)
                : (state.array[index] = action.payload);
        },
    }
});

// export const selectContact = state => state.Contact;
export const { addAppointment } = AppointmentSlice.actions;
export default AppointmentSlice.reducer;

