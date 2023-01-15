import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getLead = createAsyncThunk(
    "account/getLead",
    async (leadId, thunkAPI) => {
        const response = await axios.get(`http://localhost:4000/leads/${leadId}`);
        const data = response.data.data;
        thunkAPI.dispatch(setFirstName(data.first_name));
        thunkAPI.dispatch(setLastName(data.last_name));
        thunkAPI.dispatch(setEmail(data.email));
        thunkAPI.dispatch(setPhone(data.phone));
        thunkAPI.dispatch(setAddress(data.address));
        thunkAPI.dispatch(setCity(data.city));
        thunkAPI.dispatch(setState(data.state));
        thunkAPI.dispatch(setZip(data.zip));
        thunkAPI.dispatch(setUserId(data.user_id));
        thunkAPI.dispatch(setLeadType(data.lead_type));
        thunkAPI.dispatch(setSource(data.source));
        thunkAPI.dispatch(setPipelineId(data.pipeline_id));
        thunkAPI.dispatch(setLeadId(data.lead_id));
        thunkAPI.dispatch(setStageId(data.stage_id));
        thunkAPI.dispatch(setStageName(data.stage_name));
        thunkAPI.dispatch(setStageOrder(data.stage_order));
        thunkAPI.dispatch(setCloseStatus(data.close_status));
        thunkAPI.dispatch(setSetupPayment(data.setup_payment));
        thunkAPI.dispatch(setSetupInitial(data.setup_initial));
        return data;
    }
);

export const updateLead = createAsyncThunk(
    "account/updateLead",
    async (data, thunkAPI) => {
        const fieldsToUpdate = Object.keys(data.update)[0];
        const valueToUpdate = Object.values(data.update)[0];
        const { update } = data
        const { leadId } = data;
        //update the key in the state
        thunkAPI.dispatch(setField({ key: fieldsToUpdate, value: valueToUpdate}));
        const response = await axios.put(`http://localhost:4000/leads/update/${leadId}`, update);
    }
)


const accountSlice = createSlice({
    name: "account",
    initialState: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        userId: "",
        leadType: "",
        source: "",
        pipelineId: "",
        leadId: "",
        stageId: "",
        stageName: "",
        stageOrder: "",
        closeStatus: "",
        setupPayament: false,
        setupInitial: false,
        loading: false,
        error: null,
    },
    reducers: {
        setFirstName(state, action) {
            state.firstName = action.payload;
        },
        setLastName(state, action) {
            state.lastName = action.payload;
        },
        setEmail(state, action) {
            state.email = action.payload;
        },
        setPhone(state, action) {
            state.phone = action.payload;
        },
        setAddress(state, action) {
            state.address = action.payload;
        },
        setCity(state, action) {
            state.city = action.payload;
        },
        setState(state, action) {
            state.state = action.payload;
        },
        setZip(state, action) {
            state.zip = action.payload;
        },
        setUserId(state, action) {
            state.userId = action.payload;
        },
        setLeadType(state, action) {
            state.leadType = action.payload;
        },
        setSource(state, action) {
            state.source = action.payload;
        },
        setPipelineId(state, action) {
            state.pipelineId = action.payload;
        },
        setStageId(state, action) {
            state.stageId = action.payload;
        },
        setLeadId(state, action) {
            state.leadId = action.payload;
        },
        setStageName(state, action) {
            state.stageName = action.payload;
        },
        setStageOrder(state, action) {
            state.stageOrder = action.payload;
        },
        setCloseStatus(state, action) {
            state.closeStatus = action.payload;
        },
        setSetupPayment(state, action) {
            state.setupPayment = action.payload;
        },
        setSetupInitial(state, action) {
            state.setupInitial = action.payload;
        },
        setField(state, action) {
            const { key, value } = action.payload;
            state[key] = value;
        }
    },
    extraReducers: {
        [getLead.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [getLead.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
        },
        [getLead.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const {
    setFirstName,
    setLastName,
    setEmail,
    setPhone,
    setAddress,
    setCity,
    setState,
    setZip,
    setUserId,
    setLeadType,
    setSource,
    setPipelineId,
    setStageId,
    setLeadId,
    setStageName,
    setStageOrder,
    setCloseStatus,
    setSetupPayment,
    setSetupInitial,
    setField
} = accountSlice.actions;

export const selectFirstName = (state) => state.account.firstName;
export const selectLastName = (state) => state.account.lastName;
export const selectEmail = (state) => state.account.email;
export const selectPhone = (state) => state.account.phone;
export const selectAddress = (state) => state.account.address;
export const selectCity = (state) => state.account.city;
export const selectState = (state) => state.account.state;
export const selectZip = (state) => state.account.zip;
export const selectUserId = (state) => state.account.userId;
export const selectLeadType = (state) => state.account.leadType;
export const selectSource = (state) => state.account.source;
export const selectPipelineId = (state) => state.account.pipelineId;
export const selectLeadId = (state) => state.account.leadId;
export const selectStageId = (state) => state.account.stageId;
export const selectStageName = (state) => state.account.stageName;
export const selectStageOrder = (state) => state.account.stageOrder;
export const selectLoading = (state) => state.account.loading;
export const selectError = (state) => state.account.error;
export const selectCloseStatus = (state) => state.account.closeStatus;
export const selectSetupPayment = (state) => state.account.setupPayment;
export const selectSetupInitial = (state) => state.account.setupInitial;

export default accountSlice.reducer;


    