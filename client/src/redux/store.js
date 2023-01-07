import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import leadSlice from "./leadSlice";

export const store = configureStore({
    reducer: {
        login: loginSlice,
        lead: leadSlice
    },
});
