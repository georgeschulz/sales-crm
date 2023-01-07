import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPipelines = createAsyncThunk(
    "pipelineConfig/fetchPipelines",
    async (d, thunkAPI) => {
        const response = await axios.get("http://localhost:4000/pipeline")
        thunkAPI.dispatch(setPipelines(response.data));
        return response.data;
    }
);


const pipelineConfigSlice = createSlice({
    name: "pipelineConfig",
    initialState: {
        pipelines: [],
        isLoading: true,
        error: false,
        errorMessage: "",
    },
    reducers: {
        setPipelines: (state, action) => {
            state.pipelines = action.payload.data;
        }
    },
    extraReducers: {
        [fetchPipelines.pending]: (state, action) => {
            state.isLoading = true;
            state.error = false;
        },
        [fetchPipelines.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.error = false;
        },
        [fetchPipelines.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = true;
            state.errorMessage = action.error.message;
        }
    }
});

export const { setPipelines } = pipelineConfigSlice.actions;
export const selectPipelines = state => state.pipelineConfig.pipelines;
export const selectIsPipelineLoading = state => state.pipelineConfig.isLoading;
export default pipelineConfigSlice.reducer;