import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        firstName: "Mr.",
        lastName: "Salesperson",
        businessName: "Better Termite & Pest Control",
        email: "",
        role: "",
        id: 1,
    },
    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action) => {
            state.lastName = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setRole: (state, action) => {
            state.role = action.payload;
        },
        setId: (state, action) => {
            state.id = action.payload;
        },
        clearUser: (state, action) => {
            state.firstName = "";
            state.lastName = "";
            state.email = "";
            state.role = "";
            state.id = "";
        },
        setBusinessName: (state, action) => {
            state.businessName = action.payload;
        }
    }
})

export const { setFirstName, setLastName, setEmail, setRole, setId, clearUser, setBusinessName } = userSlice.actions;
export const selectRepFirstName = state => state.user.firstName;
export const selectRepLastName = state => state.user.lastName;
export const selectRepEmail = state => state.user.email;
export const selectRole = state => state.user.role;
export const selectUserId = state => state.user.id;
export const selectBusinessName = state => state.user.businessName;
export default userSlice.reducer;