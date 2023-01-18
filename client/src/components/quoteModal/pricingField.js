import { Autocomplete, Button } from "@mui/material";
import { TextField } from "@mui/material";
import QuoteForm from "./quoteForm";
import { advanceQuoteModalScreen, selectSelectedService, selectServiceList, setSelectedService } from "../../redux/servicesSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectSelectedQuote } from "../../redux/servicesSlice";

function PricingField({ serviceDetails, selectedService, selectedQuote  }) {
    const dispatch = useDispatch();

    return (
        <div>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={useSelector(selectServiceList)}
                style={{ width: "100%" }}
                renderInput={(params) => <TextField {...params} label="Service" />}
                value={useSelector(selectSelectedService)}
                onChange={(event, newValue) => {
                    dispatch(setSelectedService(newValue));
                }}
                isOptionEqualToValue={(option, value) => option.id === value.id}
            />
            {selectedService && (
                <div className="mt-4">
                    <QuoteForm service={serviceDetails} key="Quote Form" />
                </div>
            )}
            {selectedQuote && (
                <div className="mt-8">
                    <Button variant="contained" color="primary" onClick={() => dispatch(advanceQuoteModalScreen())}>Send Proposal</Button>
                </div>
            )}
        </div>
    )
}

export default PricingField;