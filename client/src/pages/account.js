import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import AppLayout from "../components/layouts/AppLayout";
import { getLead } from "../redux/accountSlice";
import InputText from "../components/form/inputText";
import InputSelect from "../components/form/inputSelect";
import InputCheckbox from "../components/form/inputCheckbox";
import { selectAddress, selectFirstName, selectLastName, selectCity, selectZip, selectEmail, selectPhone, selectSource, selectError, selectLeadId, selectLeadType, selectLoading, selectPipelineId, selectStageId, selectStageName, selectStageOrder, selectState, selectUserId, selectCloseStatus, selectSetupInitial, selectSetupPayment } from "../redux/accountSlice";
import { setAddress, setCity, setState, setZip, setFirstName, setLastName, setEmail, setPhone, setLeadId, setLeadType, setPipelineId, setSource, setStageId, setStageName, setStageOrder, setUserId, setCloseStatus, setSetupInitial, setSetupPayment } from "../redux/accountSlice";
import usaStates from "../components/form/usaStates";
import { updateLead } from "../redux/accountSlice";

function Account() {
    const { leadId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLead(leadId));
    }, [dispatch, leadId]);

    return (
        <AppLayout headline="Account Page">
            <div className="grid grid-cols-8 gap-4" style={{'maxWidth': '1200px'}}>
                <div className="col-span-2">
                    <InputText
                        label="First Name"
                        state={useSelector(selectFirstName)}
                        setState={(e) => dispatch(updateLead({leadId: leadId, update: {firstName: e}}))}
                        size="medium"
                        required={true}
                    />
                </div>
                <div className="col-span-2">
                    <InputText
                        label="Last Name"
                        state={useSelector(selectLastName)}
                        setState={(e) => dispatch(setLastName(e))}
                        size="medium"
                        required={true}
                    />
                </div>
                <div className="col-span-2">
                    <InputSelect
                        label="Lead Type"
                        state={useSelector(selectLeadType)}
                        setState={(e) => dispatch(setLeadType(e))}
                        size="medium"
                        required={true}
                        options={[{label: 'Lead', value: 'lead'}, {label: 'Opportunity', value: 'opportunity'}]}
                    />
                </div>
                <div className="col-span-2">
                    <InputSelect
                        label="Pipeline"
                        state={useSelector(selectPipelineId)}
                        setState={(e) => dispatch(setPipelineId(e))}
                        size="medium"
                        required={true}
                        options={[{label: 'Pipeline 1', value: '1'}, {label: 'Pipeline 2', value: '2'}]}
                    />
                </div>
                <div className="col-span-3">
                    <InputText
                        label="Address"
                        state={useSelector(selectAddress)}
                        setState={(e) => dispatch(setAddress(e))}
                        size="medium"
                        required={true}
                    />
                </div>
                <div className="col-span-2">
                    <InputText
                        label="City"
                        state={useSelector(selectCity)}
                        setState={(e) => dispatch(setCity(e))}
                        size="medium"
                        required={true}
                    />
                </div>
                <div className="col-span-1">
                    <InputSelect
                        label="State"
                        state={useSelector(selectState)}
                        setState={(e) => dispatch(setState(e))}
                        size="medium"
                        required={true}
                        options={usaStates}
                    />
                </div>
                <div className="col-span-2">
                    <InputText
                        label="Zip"
                        state={useSelector(selectZip)}
                        setState={(e) => dispatch(setZip(e))}
                        size="medium"
                        required={true}
                    />
                </div>
                <div className="col-span-4">
                    <InputText
                        label="Email"
                        state={useSelector(selectEmail)}
                        setState={(e) => dispatch(setEmail(e))}
                        size="medium"
                        required={true}
                    />
                </div>
                <div className="col-span-4">
                    <InputText
                        label="Phone"
                        state={useSelector(selectPhone)}
                        setState={(e) => dispatch(setPhone(e))}
                        size="medium"
                        required={true}
                    />
                </div>
                <div className="col-span-1">
                    <InputCheckbox 
                        label="Initial Done"
                        state={useSelector(selectSetupInitial)}
                        setState={(e) => dispatch(setSetupInitial(e))}
                        size="medium"
                        required={true}
                    />
                </div>
                <div className="col-span-1">
                    <InputCheckbox
                        label="Payment Done"
                        state={useSelector(selectSetupPayment)}
                        setState={(e) => dispatch(setSetupPayment(e))}
                        size="medium"
                        required={true}
                    />
                </div>
                <div className="col-span-2">
                    <InputSelect
                        label="Stage"
                        state={useSelector(selectStageId)}
                        setState={(e) => dispatch(setStageId(e))}
                        size="medium"
                        required={true}
                        options={[{label: 'Stage 1', value: '1'}, {label: 'Stage 2', value: '2'}]}
                    />
                </div>
                <div className="col-span-2">
                    <InputSelect
                        label="Salesperson"
                        state={useSelector(selectUserId)}
                        setState={(e) => dispatch(setUserId(e))}
                        size="medium"
                        required={true}
                        options={[{label: 'Me', value: '1'}, {label: 'Salesperson 2', value: '2'}]}
                    />
                </div>
                <div className="col-span-2">
                    <InputSelect
                        label="Source"
                        state={useSelector(selectSource)}
                        setState={(e) => dispatch(setSource(e))}
                        size="medium"
                        required={true}
                        options={[{label: 'Source 1', value: '1'}, {label: 'Source 2', value: '2'}]}
                    />
                </div>
            </div>
        </AppLayout>
    )
}

export default Account;