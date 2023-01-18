import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedSendType, setInstructions, selectInstructions, selectSelectedSendType } from '../../redux/proposalPreparationSlice';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { regressQuoteModalScreen, selectSelectedQuote, toggleQuoteModal } from '../../redux/servicesSlice';
import formatInstrutions from './formatInstructions';
import { selectFirstName, selectLastName, selectEmail, selectAddress, selectCity, selectZip, selectState, selectPhone } from '../../redux/accountSlice';
import Automation from '../automation/automation';

function ProposalFields({ }) {
    const dispatch = useDispatch();
    const instructions = useSelector(selectInstructions);
    const selectedSendType = useSelector(selectSelectedSendType);
    const firstName = useSelector(selectFirstName);
    const lastName = useSelector(selectLastName);
    const email = useSelector(selectEmail);
    const address = useSelector(selectAddress);
    const city = useSelector(selectCity);
    const state = useSelector(selectState);
    const zip = useSelector(selectZip);
    const option = useSelector(selectSelectedQuote);
    const phone = useSelector(selectPhone);

    const handleSendTypeChange = (event, newSendType) => {
        dispatch(setSelectedSendType(newSendType));
    };

    const createProposal = async () => {
        let proposalLink = option.link
        proposalLink += `?blank_redirect=https://bettertermite.com`;
        const formattedInstructions = formatInstrutions(instructions);

        const fields = {
            name: `${firstName} ${lastName}`,
            address: address,
            city: `${city}, ${state} ${zip}`,
            frequency: `${option.frequency} (${option.servicesPerYear}/year)}`,
            billing: option.name,
            setup: option.initial,
            recurring: option.recurring,
            ...formattedInstructions
        }

        for (const [key, value] of Object.entries(fields)) {
            let fieldName = encodeURIComponent(key);
            let fieldValue = encodeURIComponent(String(value).trim());
            proposalLink += `&${fieldName}=${fieldValue}`;
        }

        if(selectedSendType === "irl") {
            window.open(proposalLink, "_blank");
            dispatch(toggleQuoteModal())  
        } else if (selectedSendType === 'text') {
            const shortUrl = await Automation.shortenUrl(proposalLink);
            await Automation.sendText(firstName, phone, `Hi, ${firstName}! Your proposal is ready to be signed. Please click the link to view and sign your proposal: ${shortUrl}`);
            dispatch(toggleQuoteModal())
        }
    }

    return (
        <div>
            <div className='block mb-8'>
                <ToggleButtonGroup
                    color="primary"
                    value={selectedSendType}
                    exclusive
                    onChange={handleSendTypeChange}
                    aria-label="Platform"
                >
                    <ToggleButton value="text">Text</ToggleButton>
                    <ToggleButton value="email">Email</ToggleButton>
                    <ToggleButton value="irl">In Person</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className='block mb-8'>
                <TextField
                    id="outlined-multiline-static"
                    label="Special Instructions"
                    multiline
                    rows={4}
                    className='w-full'
                    value={instructions}
                    onChange={(e) => dispatch(setInstructions(e.target.value))}
                />
            </div>
            <div className="flex gap-x-4">
                <Button variant="outlined" color="primary" onClick={() => dispatch(regressQuoteModalScreen())}>Back</Button>
                <Button variant="contained" color="primary" onClick={() => createProposal()}>Send Proposal</Button>
            </div>
        </div>
    )
}

export default ProposalFields;