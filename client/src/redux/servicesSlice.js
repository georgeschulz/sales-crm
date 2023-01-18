import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getServices = createAsyncThunk(
    "services/getServices",
    async (businessId, thunkAPI) => {
        const response = await axios.get(`http://localhost:4000/services/${businessId}`);
        const data = response.data.data;
        thunkAPI.dispatch(setServices(data));
        return data;
    }
);

const servicesSlice = createSlice({
    name: "services",
    initialState: {
        services: [],
        isQuoteModalOpen: false,
        quoteModalScreen: 1,
        loading: false,
        error: null,
        selectedService: null,
        selectedQuote: null,
        quoteResults: {}
    },
    reducers: {
        setServices(state, action) {
            state.services = action.payload;
        },
        toggleQuoteModal(state) {
            state.isQuoteModalOpen = !state.isQuoteModalOpen;
        },
        setSelectedService(state, action) {
            state.selectedService = action.payload;
        },
        clearQuoteResults(state) {
            state.quoteResults = {};
            state.selectedQuote = null;
            state.selectedService = null;
        },
        addParameterToQuoteResults(state, action) {
            state.quoteResults[action.payload.parameter] = action.payload.value;
        },
        setSelectedQuote(state, action) {
            state.selectedQuote = action.payload;
        },
        advanceQuoteModalScreen(state) {
            state.quoteModalScreen++;
        },
        regressQuoteModalScreen(state) {
            state.quoteModalScreen--;
        }
    }
})

export const { setServices, toggleQuoteModal, setSelectedService, setSelectedServiceInput, clearQuoteResults, addParameterToQuoteResults, setSelectedQuote, advanceQuoteModalScreen, regressQuoteModalScreen } = servicesSlice.actions;
export const selectServices = state => state.services.services;
export const selectLoading = state => state.services.loading;
export const selectError = state => state.services.error;
export const selectService = (state, serviceId) => state.services.services.find(service => service.service_id === serviceId);
export const selectIsQuoteModalOpen = state => state.services.isQuoteModalOpen;
export const selectServiceList = state => state.services.services.map(service => ({label: service.name, value: service.service_id}));
export const selectSelectedService = state => state.services.selectedService;
export const selectSelectedQuote = state => state.services.selectedQuote;
export const selectedOptionId = state => state.services.selectedQuote ? state.services.selectedQuote.optionId : null;
export const selectQuoteModalScreen = state => state.services.quoteModalScreen;
export default servicesSlice.reducer;