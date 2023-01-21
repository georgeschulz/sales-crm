import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBusinessDetails = createAsyncThunk(
    "business/getBusinessDetails",
    async (data, thunkAPI) => {
        try {
            const businessId = thunkAPI.getState().business.businessId;
            const response = await axios.get(`http://localhost:4000/business/1`);
            const { sources, salespeople } = response.data.data;
            const businessName = response.data.data.businessDetails.name;
            console.log(response.data.data)
            thunkAPI.dispatch(setSources(sources));
            thunkAPI.dispatch(setSalespeople(salespeople));
            thunkAPI.dispatch(setBusinessName(businessName));
            return response.data.data.businessDetails;
        } catch (e) {
            console.log(e)
        }
    }
);

const businessSlice = createSlice({
    name: "business",
    initialState: {
        businessId: 1,
        userId: 1,
        businessName: "",
        sources: [],
        salespeople: [],
    },
    reducers: {
        setBusinessId: (state, action) => {
            state.businessId = action.payload;
        },
        setBusinessName: (state, action) => {
            state.businessName = action.payload;
        },
        setSources: (state, action) => {
            state.sources = action.payload;
        },
        setSalespeople: (state, action) => {
            state.salespeople = action.payload;
        }
    }
});

const { setBusinessId, setBusinessName, setSources, setSalespeople } = businessSlice.actions;
export const selectBusinessId = state => state.business.businessId;
export const selectBusinessName = state => state.business.businessName;
export const selectSourceList = state => state.business.sources.map(source => {
    return {
        value: source.source_id,
        label: source.name
    }
});

export const selectSalespeople = state => state.business.salespeople.map(salesperson => {
    if(state.business.userId == salesperson.user_id) {
        return {
            value: salesperson.user_id,
            label: "Me"
        }
    } else {
        return {
            value: salesperson.user_id,
            label: salesperson.first_name + " " + salesperson.last_name
        }
    }
});
export default businessSlice.reducer;