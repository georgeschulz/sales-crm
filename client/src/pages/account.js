import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import AppLayout from "../components/layouts/AppLayout";
import { getLead } from "../redux/accountSlice";
import InputText from "../components/form/inputText";
import InputSelect from "../components/form/inputSelect";
import InputCheckbox from "../components/form/inputCheckbox";
import { selectAddress, selectFirstName, selectLastName, selectCity, selectZip, selectEmail, selectPhone, selectSource, selectError, selectLeadId, selectLeadType, selectLoading, selectPipelineId, selectStageId, selectStageName, selectStageOrder, selectState, selectUserId, selectCloseStatus, selectSetupInitial, selectSetupPayment } from "../redux/accountSlice";
import { selectIsQuoteModalOpen, toggleQuoteModal, selectService, selectServices, selectServiceList, setSelectedService, selectSelectedService, clearQuoteResults } from "../redux/servicesSlice";
import { setAddress, setCity, setState, setZip, setFirstName, setLastName, setEmail, setPhone, setLeadId, setLeadType, setPipelineId, setSource, setStageId, setStageName, setStageOrder, setUserId, setCloseStatus, setSetupInitial, setSetupPayment } from "../redux/accountSlice";
import usaStates from "../components/form/usaStates";
import { updateLead } from "../redux/accountSlice";
import LargeButton from "../components/buttons/largeButton";
import Modal from '@mui/material/Modal';
import { selectSelectedQuote } from "../redux/servicesSlice";
import QuoteModal from "../components/quoteModal/quoteModal";
import CircularActionButton from "../components/buttons/circularActionButton";
import TaskModal from "../components/modals/taskModal";
import { toggleFollowupModal, toggleTaskModal } from "../redux/taskModalSlice";
import MessageModal from "../components/modals/messageModal";
import { toggleMessageModal } from "../redux/messageModalSlice";
import LeadDetail from "../components/prebuiltFields/leadDetail";


function Account() {
    const { leadId } = useParams();
    const dispatch = useDispatch();
    const services = useSelector(selectServices);
    const selectedService = useSelector(selectSelectedService);
    const selectedQuote = useSelector(selectSelectedQuote);
    const query = new URLSearchParams(window.location.search);
    const quoteModalOpen = query.get("quoteModalOpen");

    useEffect(() => {
        dispatch(getLead(leadId));
    }, [dispatch, leadId]);

    useEffect(() => {
        dispatch(clearQuoteResults())
        if (quoteModalOpen === "true") {
            dispatch(toggleQuoteModal());
        }
    }, [leadId]);

    return (
        <AppLayout headline="">
            <div className="flex justify-bewteen w-full">
                <div className="w-3/4 px-4 py-5">
                    <div className="px-6 py-8 ">
                        <LeadDetail leadId={leadId} />
                    </div>
                </div>
                <aside className="w-1/4 pl-10 bg-black">
                    <div className="w-full h-screen gap-x-10 py-8 ">
                        <h2 className="text-white font-bold text-xl w-full">Quick Actions</h2>
                        <div className="pr-10 pt-4">
                            <CircularActionButton onClick={() => dispatch(toggleQuoteModal())}>Quote</CircularActionButton>
                            <CircularActionButton onClick={() => dispatch(toggleFollowupModal())}>Followup</CircularActionButton>
                            <CircularActionButton onClick={() => dispatch(toggleMessageModal())}>Message</CircularActionButton>
                            <CircularActionButton onClick={() => dispatch(toggleTaskModal())}>Task </CircularActionButton>
                        </div>
                    </div>
                </aside>
            </div>


            <QuoteModal />
            <TaskModal />
            <MessageModal />

        </AppLayout>
    )
}

export default Account;

