import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createLead = createAsyncThunk(
    "lead/createLead",
    async (data, thunkAPI) => {
        //get the data from the inital state using thunkAPI
        const { firstName, lastName, email, phone, address, city, state, zip, userId, leadType, source, pipelineId } = thunkAPI.getState().lead;
        //create the lead object
        const lead = {
            firstName,
            lastName,
            email,
            phone,
            address,
            city,
            state,
            zip,
            userId,
            leadType,
            source,
            pipelineId
        };
        //make the axios call to the server
        const response = await axios.post("http://localhost:4000/leads/create", lead);
        //return the response
        return response.data;
    }
);

const leadSlice = createSlice({
    name: "lead",
    initialState: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        userId: null,
        leadType: "lead",
        source: "Google",
        pipelineId: null
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
        setPhone: (state, action) => {
            state.phone = action.payload;
        },
        setAddress: (state, action) => {
            state.address = action.payload;
        },
        setCity: (state, action) => {
            state.city = action.payload;
        },
        setStateName: (state, action) => {
            state.state = action.payload;
        },
        setZip: (state, action) => {
            state.zip = action.payload;
        },
        setLeadUserId: (state, action) => {
            state.userId = action.payload;
        },
        setLeadType: (state, action) => {
            state.leadType = action.payload;
        },
        setSource: (state, action) => {
            state.source = action.payload;
        },
        resetForm: (state, action) => {
            state.firstName = "";
            state.lastName = "";
            state.email = "";
            state.phone = "";
            state.address = "";
            state.city = "";
            state.state = "";
            state.zip = "";
            state.userId = 1;
            state.leadType = "lead";
            state.source = "";
            state.pipelineId = 1;
        },
        setPipelineId: (state, action) => {
            state.pipelineId = action.payload;
        }
    }
});

export const { setFirstName, setLastName, setEmail, setPhone, setAddress, setCity, setStateName, setZip, setLeadUserId, setLeadType, setSource, resetForm, setPipelineId } = leadSlice.actions;
export const selectFirstName = state => state.lead.firstName;
export const selectLastName = state => state.lead.lastName;
export const selectEmail = state => state.lead.email;
export const selectPhone = state => state.lead.phone;
export const selectAddress = state => state.lead.address;
export const selectCity = state => state.lead.city;
export const selectState = state => state.lead.state;
export const selectZip = state => state.lead.zip;
export const selectLeadUserId = state => state.lead.userId;
export const selectLeadType = state => state.lead.leadType;
export const selectSource = state => state.lead.source;
export const selectPipelineId = state => state.lead.pipelineId;
export default leadSlice.reducer;