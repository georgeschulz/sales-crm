import loginSlice from "./loginSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        login: loginSlice,
    },
});
