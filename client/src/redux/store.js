import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import leadSlice from "./leadSlice";
import pipelineConfigSlice from "./pipelineConfigSlice";
import accountSlice from "./accountSlice";

export const store = configureStore({
    reducer: {
        login: loginSlice,
        lead: leadSlice,
        pipelineConfig: pipelineConfigSlice,
        account: accountSlice,
    },
});
