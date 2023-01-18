import { Modal } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { selectIsQuoteModalOpen, toggleQuoteModal, selectServiceList, setSelectedService, selectSelectedService, selectSelectedQuote, selectServices, advanceQuoteModalScreen, regressQuoteModalScreen, selectQuoteModalScreen } from "../../redux/servicesSlice";
import PricingField from "./pricingField";
import ProposalFields from "./proposalFields";

function QuoteModal() {
    const dispatch = useDispatch();
    const services = useSelector(selectServices);
    const selectedService = useSelector(selectSelectedService);
    let serviceDetails = selectedService ? services.find(service => service.service_id === selectedService.value) : null;
    const selectedQuote = useSelector(selectSelectedQuote);

    return (
        <Modal
            open={useSelector(selectIsQuoteModalOpen)}
            onClose={() => dispatch(toggleQuoteModal())}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className="bg-white pl-8 p-6 pt-8 pb-10 w-1/3 absolute" style={{ 'minWidth': '640px', left: '50%', top: '25%', transform: 'translate(-50%, -25%)' }}>
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold">Create Quote</h2>
                    <button onClick={() => dispatch(toggleQuoteModal())}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div className="mt-4">
                    {useSelector(selectQuoteModalScreen) === 1 && (
                        <PricingField 
                            serviceDetails={serviceDetails}
                            selectedService={selectedService}
                            selectedQuote={selectedQuote}
                            key={selectedService ? `service-${selectedService.service_id}` : null}
                    />
                    )}
                    {useSelector(selectQuoteModalScreen) === 2 && (
                        <ProposalFields />
                    )}
                </div> 
                    
            </div>
        </Modal>
    )
}

export default QuoteModal;