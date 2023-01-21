import InteractiveForm from "../components/form/interactiveForm"
import AppLayout from "../components/layouts/AppLayout"
import { useSelector, useDispatch } from "react-redux"
import { setFirstName, setLastName, setAddress, setCity, setStateName, setZip, setEmail, setPhone, setSource, createLead, resetForm, setLeadUserId, selectPipelineId, setPipelineId } from "../redux/leadSlice"
import { selectFirstName, selectLastName, selectAddress, selectCity, selectState, selectZip, selectEmail, selectPhone, selectLeadType, selectSource, selectLeadUserId } from "../redux/leadSlice"
import { useNavigate } from "react-router-dom"
import usaStates from "../components/form/usaStates"
import { useEffect } from "react"
import { selectUserId } from "../redux/accountSlice"
import { getBusinessDetails, selectSalespeople, selectSourceList } from "../redux/businessSlice"
import { selectPipelineSelectList } from "../redux/pipelineConfigSlice"

function NewLeadPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const firstName = useSelector(selectFirstName)
    const lastName = useSelector(selectLastName)
    const address = useSelector(selectAddress)
    const city = useSelector(selectCity)
    const state = useSelector(selectState)
    const zip = useSelector(selectZip)
    const email = useSelector(selectEmail)
    const phone = useSelector(selectPhone)
    const leadType = useSelector(selectLeadType)
    const source = useSelector(selectSource)
    const userLeadId = useSelector(selectLeadUserId)
    const currentUserId = useSelector(selectUserId)
    const sources = useSelector(selectSourceList)
    const salespeople = useSelector(selectSalespeople)
    const pipelineList = useSelector(selectPipelineSelectList)
    const selectedPipeline = useSelector(selectPipelineId);

    useEffect(() => {
        dispatch(setLeadUserId(currentUserId))
        dispatch(getBusinessDetails())
        console.log(sources)
    }, [currentUserId, dispatch])


    const handleSubmit = async () => {
        console.table({ firstName, lastName, address, city, state, zip, email, phone, leadType, source, userId: userLeadId })
        const response = await dispatch(createLead({ firstName, lastName, address, city, state, zip, email, phone, leadType, source, userLeadId, pipelineId: selectedPipeline }))
        const leadId = response.payload.data.lead_id
        navigate(`/lead/${leadId}?quoteModalOpen=true`)
    }

    return (
        <AppLayout headline="">
            <div className="w-full flex justify-center flex-wrap">
                <h1 className="text-2xl text-center w-full mt-4 mb-12 font-semibold">New Lead</h1>
                <InteractiveForm
                    onSubmit={handleSubmit}
                    onReset={() => dispatch(resetForm())}
                    formElements={[
                        { type: "text", name: "firstName", placeholder: "First Name", value: firstName, onChange: (event) => dispatch(setFirstName(event.target.value)) },
                        { type: "text", name: "lastName", placeholder: "Last Name", value: lastName, onChange: (event) => dispatch(setLastName(event.target.value)) },
                        { type: "address", name: "address", placeholder: "Address Search", handlers:{ setAddress, setCity, setStateName, setZip}, values: {address, city, state, zip}},
                        { type: "text", name: "email", placeholder: "Email", value: email, onChange: (event) => dispatch(setEmail(event.target.value)) },
                        { type: "text", name: "phone", placeholder: "Phone", value: phone, onChange: (event) => dispatch(setPhone(event.target.value)) },
                        { type: "singleSelect", name: "pipeline", options: pipelineList, placeholder: "Pipeline", value: selectedPipeline, onChange: (event) => dispatch(setPipelineId(event.target.value)) },
                        { type: "singleSelect", name: "source", options: sources, placeholder: "Source", value: source, onChange: (event) => dispatch(setSource(event.target.value)) },
                        { type: "singleSelect", name: "salesperson", options: salespeople, placeholder: "Salesperson", value: userLeadId, onChange: (event) => dispatch(setLeadUserId(event.target.value)) }
                    ]}
                />
            </div>
        </AppLayout>
    )
}

export default NewLeadPage