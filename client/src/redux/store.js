import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import leadSlice from "./leadSlice";
import pipelineConfigSlice from "./pipelineConfigSlice";
import accountSlice from "./accountSlice";
import servicesSlice from "./servicesSlice";
import proposalPreparationSlice from "./proposalPreparationSlice";
import followupModalSlice from "./followupModalSlice";
import messageModalSlice from "./messageModalSlice";
import userSlice from "./userSlice";

export const store = configureStore({
    reducer: {
        login: loginSlice,
        lead: leadSlice,
        pipelineConfig: pipelineConfigSlice,
        account: accountSlice,
        services: servicesSlice,
        proposalPreparation: proposalPreparationSlice,
        followupModal: followupModalSlice,
        messageModal: messageModalSlice,
        user: userSlice
    },
});
