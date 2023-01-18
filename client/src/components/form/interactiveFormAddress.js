import Autocomplete from "react-google-autocomplete";
import { useDispatch } from "react-redux";

function InteractiveFormAddress({name, index, setAddress, setCity, setStateName, setZip}) {
    const dispatch = useDispatch();

    const handlePlaceSelect = (place) => {
        const addressObject = place;
        const { address_components } = addressObject
        const streetNumber = address_components.find(component => component.types.includes("street_number"))?.long_name;
        const streetName = address_components.find(component => component.types.includes("route"))?.long_name;
        const address = `${streetNumber} ${streetName}`;
        const addressTwo = address_components.find(component => component.types.includes("subpremise"))?.long_name;
        const city = address_components.find(component => component.types.includes("locality"))?.long_name;
        const state = address_components.find(component => component.types.includes("administrative_area_level_1"))?.short_name;
        const zip = address_components.find(component => component.types.includes("postal_code"))?.long_name;
        dispatch(setAddress(address));
        dispatch(setCity(city));
        dispatch(setStateName(state));
        dispatch(setZip(zip));
    }

    return (
        <div>
            <Autocomplete
                apiKey="AIzaSyAz4JLCms0liPQOkFmV4fgHhuAlQw-118g"
                onPlaceSelected={handlePlaceSelect}
                className="h-16 px-10 w-full bg-midDark text-bone focus:border-b-4 focus:outline-none focus:border-primary mb-12"
                options={{
                    componentRestrictions: {country: "us"},
                    types: ['address']
                }}
                id={'input-' + index}
            />
        </div>
    )
    /**
     * const [autocomplete, setAutocomplete] = useState(null);
    useEffect(() => {
        setAutocomplete(new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {}))
        autocomplete.addListener('place_changed', handlePlaceSelect);
    }, []);

    const handlePlaceSelect = () => {
        const addressObject = autocomplete.getPlace();
        const address = addressObject.address_components;
        console.log(addressObject);
    }

    return (
        <div>
            <input 
                id="autocomplete"
                className="h-16 px-10 w-full bg-midDark text-bone focus:border-b-4 focus:outline-none focus:border-primary mb-12"
                type="text"
                name={name}
                placeholder={placeholder}
            />
        </div>
    )
     */
}

export default InteractiveFormAddress;