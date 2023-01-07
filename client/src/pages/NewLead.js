import InteractiveForm from "../components/form/interactiveForm"
import AppLayout from "../components/layouts/AppLayout"
import { useSelector, useDispatch } from "react-redux"
import { setFirstName, setLastName, setAddress, setCity, setState, setZip, setEmail, setPhone, setSource, createLead, resetForm, setUserId } from "../redux/leadSlice"
import { selectFirstName, selectLastName, selectAddress, selectCity, selectState, selectZip, selectEmail, selectPhone, selectLeadType, selectSource, selectUserId } from "../redux/leadSlice"
import { useNavigate } from "react-router-dom"

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
    const userId = useSelector(selectUserId)

    const handleSubmit = async () => {
        await dispatch(createLead({ firstName, lastName, address, city, state, zip, email, phone, leadType, source }))
        navigate('/pipeline/1')
    }

    const sources = [
        { value: "facebook", label: "Facebook" },
        { value: "google", label: "Google" },
        { value: "instagram", label: "Instagram" },
        { value: "linkedin", label: "LinkedIn" }
    ]

    let states = [ 'VA', 'MD', 'DC', 'WV', 'DE', 'PA', 'NY', 'NJ', 'CT', 'MA', 'NH', 'ME', 'VT', 'RI', 'NC', 'SC', 'GA', 'FL', 'OH', 'MI', 'IN', 'KY', 'TN', 'AL', 'MS', 'AR', 'LA', 'TX', 'OK', 'KS', 'MO', 'IA', 'MN', 'WI', 'IL', 'NE', 'SD', 'ND', 'MT', 'WY', 'CO', 'NM', 'AZ', 'UT', 'ID', 'WA', 'OR', 'CA', 'NV', 'AK', 'HI']
    //refactor states to be an array of objects with value and label properties
    states = states.map(state => { return { value: state, label: state } })

    const salespeople = [{ label: "Me", value: 1 }, { label: "Steve Smith", value: 2 }, { label: "John Doe", value: 3 }, { label: "Jane Doe", value: 4 }] 

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
                        { type: "text", name: "address", placeholder: "Address", value: address, onChange: (event) => dispatch(setAddress(event.target.value)) },
                        { type: "text", name: "city", placeholder: "City", value: city, onChange: (event) => dispatch(setCity(event.target.value)) },
                        { type: "singleSelect", name: "state", options: states, placeholder: "State", value: state, onChange: (event) => dispatch(setState(event.target.value)) },
                        { type: "text", name: "zip", placeholder: "Zip", value: zip, onChange: (event) => dispatch(setZip(event.target.value)) },
                        { type: "text", name: "email", placeholder: "Email", value: email, onChange: (event) => dispatch(setEmail(event.target.value)) },
                        { type: "text", name: "phone", placeholder: "Phone", value: phone, onChange: (event) => dispatch(setPhone(event.target.value)) },
                        { type: "singleSelect", name: "source", options: sources, placeholder: "Source", value: source, onChange: (event) => dispatch(setSource(event.target.value)) },
                        { type: "singleSelect", name: "salesperson", options: salespeople, placeholder: "Salesperson", value: userId, onChange: (event) => dispatch(setUserId(event.target.value)) }
                    ]}
                />
            </div>
        </AppLayout>
    )
}

export default NewLeadPage