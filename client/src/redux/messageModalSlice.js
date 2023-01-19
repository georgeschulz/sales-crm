import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const messageModalSlice =  createSlice({
    name: "messageModal",
    initialState: {
        show: false,
        text: "",
        template: null,
        error: "",
        loading: false,
        messageType: ""
    },
    reducers: {
        toggleMessageModal: (state, action) => {
            state.show = !state.show;
            state.text = "";
            state.template = "";
        },
        setMessageModalText: (state, action) => {
            state.text = action.payload;
        },
        clearModal: (state, action) => {
            state.show = false;
            state.text = "";
        },
        setTemplateName: (state, action) => {
            state.template = action.payload;
        },
        setMessageType: (state, action) => {
            state.messageType = action.payload;
        }
    }
})

export const { toggleMessageModal, setMessageModalText, clearModal, setTemplateName, setMessageType } = messageModalSlice.actions;
export const selectMessageModalShow = state => state.messageModal.show;
export const selectMessageModalText = state => state.messageModal.text;
export const selectTemplateName = state => state.messageModal.template;
export const selectMessageType = state => state.messageModal.messageType;
export default messageModalSlice.reducer;