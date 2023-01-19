import { MenuItem, Modal } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import { useEffect } from "react";
import { selectFirstName, selectLastName, selectLeadId, selectPhone } from "../../redux/accountSlice";
import { selectMessageModalShow, selectMessageModalText, toggleMessageModal, setMessageModalText, clearModal, selectTemplateName, setTemplateName, selectMessageType, setMessageType } from "../../redux/messageModalSlice";
import MessageTemplates from "./messageTemplates";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { selectRepFirstName, selectRepLastName, selectBusinessName } from "../../redux/userSlice";
import Automation from "../automation/automation";

function MessageModal() {
    const dispatch = useDispatch()
    const show = useSelector(selectMessageModalShow);
    const text = useSelector(selectMessageModalText);
    const firstName = useSelector(selectFirstName);
    const lastName = useSelector(selectLastName);
    const phone = useSelector(selectPhone);
    const leadId = useSelector(selectLeadId)
    const templateName = useSelector(selectTemplateName);
    const repFirstName = useSelector(selectRepFirstName)
    const repLastName = useSelector(selectRepLastName)
    const businessName = useSelector(selectBusinessName)
    const messageType = useSelector(selectMessageType)

    const handleSelectChange = (e) => {
        dispatch(setTemplateName(e.target.value));
        dispatch(setMessageType(MessageTemplates.getTemplateSendType(e.target.value)))
        dispatch(setMessageModalText(MessageTemplates.fillTemplate(e.target.value, { firstName, lastName, businessName, repFirstName, repLastName })));
    }

    const handleSubmit = async () => {
        console.log(messageType)
        if(messageType === "email") {
            console.log("email")
        } else if(messageType === "text") {
            await Automation.sendText(`${firstName} ${lastName}`, phone, text)
        }
        dispatch(clearModal())
    }

    return (
        <Modal
            open={show}
            onClose={() => dispatch(toggleMessageModal())}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className="bg-white pl-8 p-6 pt-8 pb-10 w-1/3 absolute" style={{ 'minWidth': '640px', left: '50%', top: '25%', transform: 'translate(-50%, -25%)' }}>
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold">Send Message</h2>
                    <button onClick={() => dispatch(toggleMessageModal())}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div className="mt-4">
                    <FormControl fullwidth="true">
                        <InputLabel id="demo-simple-select-label">Message Template</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={templateName}
                            label="Message Template"
                            onChange={handleSelectChange}
                            style={{ 'minWidth': '590px' }}
                        >
                            {MessageTemplates.templates.map((template, index) => {
                                return (
                                    <MenuItem value={template.id} key={index}>
                                        <div className="flex justify-between w-full">
                                            <span>{template.name}</span>
                                            <span className={template.messageType === 'text' ? "text-red-700 font-semibold" : "font-semibold text-indigo-800"}>{template.messageType}</span>
                                        </div>
                                    </MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                </div>
                <div className="mt-4">
                    {templateName && (
                        <TextField
                            id="outlined-multiline-static"
                            label="Message"
                            multiline
                            rows={10}
                            value={text}
                            onChange={(e) => dispatch(setMessageModalText(e.target.value))}
                            style={{ 'minWidth': '590px' }}
                        />
                    )
                    }

                </div>
                <div className="mt-4 flex justify-end gap-x-4">
                    <Button variant="outlined" onClick={() => dispatch(clearModal())}>Cancel</Button>
                    <Button variant="contained" onClick={() => handleSubmit()} className="ml-4">Send {messageType}</Button>
                </div>
            </div>
        </Modal>
    )

}

export default MessageModal;