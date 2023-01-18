import { createSlice } from "@reduxjs/toolkit";

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const tomorrowDateString = tomorrow.toISOString().split('T')[0];

const followupModalSlice = createSlice({
    name: "followupModal",
    initialState: {
        show: false,
        text: "Followup with client",
        dueDate: tomorrowDateString,
        error: "",
        loading: false,
        selectedDateType: null
    },
    reducers: {
        toggleFollowupModal: (state, action) => {
            state.show = !state.show;
        },
        setFollowupModalText: (state, action) => {
            state.text = action.payload;
        },
        setFollowupModalDueDate: (state, action) => {
            state.dueDate = action.payload;
        },
        setFollowupModalSelectedDateType: (state, action) => {
            state.selectedDateType = action.payload;

            if(action.payload === 'center') {
                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                const dateString = tomorrow.toISOString().split('T')[0];
                state.dueDate = dateString;
            } else if (action.payload === 'right') {
                const nextWeek = new Date();
                nextWeek.setDate(nextWeek.getDate() + 7);
                const dateString = nextWeek.toISOString().split('T')[0];
                state.dueDate = dateString;
            } else if (action.payload === 'left') {
                const today = new Date();
                const dateString = today.toISOString().split('T')[0];
                state.dueDate = dateString;
            }
        }
    }
});

export const { toggleFollowupModal, setFollowupModalText, setFollowupModalDueDate, setFollowupModalSelectedDateType } = followupModalSlice.actions;
export const selectShowFolloupModal = state => state.followupModal.show;
export const selectFollowupModalText = state => state.followupModal.text;
export const selectFollowupModalDueDate = state => state.followupModal.dueDate;
export const selectFollowupModalSelectedDateType = state => state.followupModal.selectedDateType;
export default followupModalSlice.reducer;