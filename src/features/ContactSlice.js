import { createSlice } from "@reduxjs/toolkit";

export const ContactSlice = createSlice({
    name: "contacts",
    initialState: {
        array: [],
    },
    reducers: {
        addContact: (state, action) => {
            const index = state.array.findIndex((e) => e.id === action.payload.id);
            index === -1
                ? state.array.push(action.payload)
                : (state.array[index] = action.payload);
        },
    }
});

// export const selectContact = state => state.Contact;
export const { addContact } = ContactSlice.actions;
export default ContactSlice.reducer;