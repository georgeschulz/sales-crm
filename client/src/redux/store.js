import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import leadSlice from "./leadSlice";
import pipelineConfigSlice from "./pipelineConfigSlice";
import accountSlice from "./accountSlice";
import servicesSlice from "./servicesSlice";
import proposalPreparationSlice from "./proposalPreparationSlice";
import messageModalSlice from "./messageModalSlice";
import taskModalSlice from "./taskModalSlice";
import userSlice from "./userSlice";
import businessSlice from "./businessSlice";

export const store = configureStore({
    reducer: {
        login: loginSlice,
        lead: leadSlice,
        pipelineConfig: pipelineConfigSlice,
        account: accountSlice,
        services: servicesSlice,
        proposalPreparation: proposalPreparationSlice,
        messageModal: messageModalSlice,
        user: userSlice,
        taskModal: taskModalSlice,
        business: businessSlice
    },
});
