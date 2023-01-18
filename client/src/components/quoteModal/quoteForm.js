import { TextField } from "@mui/material";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useState } from "react";
import Service from "../pricing/serviceClass";
import FormControl from '@mui/material/FormControl';
import PricingOption from "../pricing/pricingOption";

function QuoteForm({ service }) {
    const [results, setResults] = useState(service.fields.data.reduce((acc, field) => {
        acc[field.name] = null
        return acc
    }, {})
    );
    const [quote, setQuote] = useState(null)

    const customService = new Service(service.name, service.frequency, service.billing_types, service.initial_formula, service.service_formula, service.fields, service.prepay_discount, service.proposal_link)

    const handleTextFieldChange = (e) => {
        setResults({ ...results, [e.target.name]: Number(e.target.value) });
    }

    const handleSelectChange = (e) => {
        setResults({ ...results, [e.target.name]: e.target.value });
    }

    //round to the nearest cent 
    const dollars = (num) => {
        return `$${num.toFixed(2)}`
    }

    useEffect(() => {
        //check to make sure none of the properties in results are equal to null
        if (!Object.values(results).includes(null)) {
            setQuote(customService.calculatePrice(results))
        }
    }, [results])

    const fields = service.fields.data.map(field => {
        if (field.type === "select") {
            return (
                <div key={`Select-container-${field.fieldId}`}>
                    <FormControl fullwidth="true" key={`Form-Control-${field.fieldId}`}>
                        <InputLabel id={String(field.fieldId)}>{field.name}</InputLabel>
                        <Select
                            labelId={String(field.fieldId)}
                            label={field.name}
                            className="w-48"
                            name={field.name}
                            onChange={handleSelectChange}
                            value={results[field.name] ? results[field.name] : ""}
                            key={field.field_id}
                        >
                            {field.options.map(option => {
                                return (
                                    <MenuItem value={option.value} key={option.option}>{option.option}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                </div>
            )
        } else {
            return (
                <div key={`text-field-${field.fieldId}`}>
                    <TextField
                        label={field.name}
                        variant="outlined"
                        name={field.name}
                        onChange={handleTextFieldChange}
                        type="number"
                        key={field.field_id}
                    />
                </div>
            )
        }

    })
    return (
        <div>
            <h2 className="font-semibold mb-2 text-lg">{service.name} Calculator</h2>
            <p className="mb-6">{service.description}</p>
            <div className="flex space-x-4 mb-4">
                {fields}
            </div>
            {quote &&
                <div>
                    <h3 className="font-semibold text-lg">Quote</h3>
                    <p>Contract Value: {dollars(quote.contractValue)}</p>
                    <p>Frequency: {quote.serviceDetails.frequency} ({quote.serviceDetails.servicesPerYear}x/yr)</p>
                    <p className="font-semibold mt-3">Billing Options</p>
                    <div className="flex flex-wrap gap-x-3">
                        {quote.options.map((option, i) => {
                            return (
                                <PricingOption 
                                    name={option.name}
                                    initial={option.initial}
                                    billingAmount={option.billingAmount}
                                    frequency={quote.serviceDetails.frequency}
                                    servicesPerYear={quote.serviceDetails.servicesPerYear}
                                    optionId={i}
                                    link={quote.serviceDetails.proposalLink}
                                    key={i}
                                />
                            )
                        })}
                    </div>
                </div>
            }
        </div>
    )
}

export default QuoteForm;