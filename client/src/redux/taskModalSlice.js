import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const tomorrowDateString = tomorrow.toISOString().split('T')[0];

export const createTask = createAsyncThunk(
    "followupModal/createTask",
    async (data, thunkAPI) => {
        const { leadId, description, dueDate } = data;
        const response = await axios.post("http://localhost:4000/task", {
            leadId,
            description,
            dueDate
        });
        return response.data;
    }   
)

export const summarizeDescription = createAsyncThunk(
    "followupModal/summarizeDescription",
    async (description, thunkAPI) => {
        const response = await axios.post("http://localhost:4000/automation/write-title", {
            description
        });

        return response.data.title;
    }
)

const taskModalSlice = createSlice({
    name: "followupModal",
    initialState: {
        show: false,
        taskTitle: "",
        text: "",
        dueDate: tomorrowDateString,
        error: "",
        loading: false,
        selectedDateType: null,
        modalType: 'followup'
    },
    reducers: {
        toggleFollowupModal: (state, action) => {
            state.show = !state.show;
            state.modalType = 'followup'
        },
        toggleTaskModal: (state, action) => {
            state.show = !state.show;
            state.modalType = 'task'
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
        },
        setTaskTitle: (state, action) => {
            state.taskTitle = action.payload;
        },
        appendToTaskTitle: (state, action) => {
            state.taskTitle = state.taskTitle + ' '  + action.payload;
        },
        setModalType: (state, action) => {
            state.modalType = action.payload;
        }
    }
});

export const { toggleFollowupModal, setFollowupModalText, setFollowupModalDueDate, setFollowupModalSelectedDateType, setTaskTitle, appendToTaskTitle, setModalType, toggleTaskModal } = taskModalSlice.actions;
export const selectShowFolloupModal = state => state.taskModal.show;
export const selectFollowupModalText = state => state.taskModal.text;
export const selectFollowupModalDueDate = state => state.taskModal.dueDate;
export const selectFollowupModalSelectedDateType = state => state.taskModal.selectedDateType;
export const selectTaskTitle = state => state.taskModal.taskTitle;
export const selectModalType = state => state.taskModal.modalType;
export default taskModalSlice.reducer;