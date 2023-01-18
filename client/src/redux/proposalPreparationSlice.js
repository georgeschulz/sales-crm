import { createSlice } from "@reduxjs/toolkit";

const proposalPreparationSlice = createSlice({
    name: "proposalPreparation",
    initialState: {
        baseLink: '',
        selectedSendType: "text",
        instructions: "",
        directLink: "",
        shortLink: ""
    },
    reducers: {
        setSelectedSendType(state, action) {
            state.selectedSendType = action.payload;
        },
        setInstructions(state, action) {
            state.instructions = action.payload;
        },
        setBaseLink(state, action) {
            state.baseLink = action.payload;
        }
    }
})

export const { setSelectedSendType, setInstructions, setBaseLink } = proposalPreparationSlice.actions;
export const selectSelectedSendType = state => state.proposalPreparation.selectedSendType;
export const selectInstructions = state => state.proposalPreparation.instructions;
export default proposalPreparationSlice.reducer;