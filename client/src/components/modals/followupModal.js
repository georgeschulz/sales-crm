import { Modal } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { selectShowFolloupModal, selectFollowupModalText, selectFollowupModalDueDate, setFollowupModalDueDate, setFollowupModalText, toggleFollowupModal, selectFollowupModalSelectedDateType, setFollowupModalSelectedDateType, createTask, selectTaskTitle, setTaskTitle, summarizeDescription, appendToTaskTitle } from "../../redux/followupModalSlice";
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import { useEffect } from "react";
import { selectFirstName, selectLastName, selectLeadId } from "../../redux/accountSlice";

function FollowupModal() {
    const dispatch = useDispatch();
    const show = useSelector(selectShowFolloupModal);
    const text = useSelector(selectFollowupModalText);
    const dueDate = useSelector(selectFollowupModalDueDate);
    const selectedDateType = useSelector(selectFollowupModalSelectedDateType);
    const firstName = useSelector(selectFirstName);
    const lastName = useSelector(selectLastName);
    const leadId = useSelector(selectLeadId)
    const taskTitle = useSelector(selectTaskTitle);

    const typeAnswer = (text, currentState, targetInputDispatcher) => {
        //break the text into an array of words
        const words = text.split(' ');

        words.forEach((word, index) => {
            //run the loop every 1000ms
            setTimeout(() => {
                //dispatch the action to update the input
                dispatch(targetInputDispatcher(word));
            }, 50 * index);
        });
    }

    useEffect(() => {
        dispatch(setFollowupModalText(`Followup with ${firstName} ${lastName}`));
        dispatch(setTaskTitle(`Followup with ${firstName} ${lastName}`));
    }, [dispatch, firstName, lastName]);

    const handleSubmit = () => {
        try {
            dispatch(createTask({ leadId, description: text, dueDate }));
            dispatch(toggleFollowupModal());
        } catch (error) {
            console.log(error);
        }
    }

    const handleDescriptionBlur = async () => {
        if (taskTitle === '') {
            const title = await dispatch(summarizeDescription(text));
            //dispatch(setTaskTitle(title.payload));
            typeAnswer(title.payload, taskTitle, appendToTaskTitle);
        }
    }

    return (
        <Modal
            open={show}
            onClose={() => dispatch(toggleFollowupModal())}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className="bg-white pl-8 p-6 pt-8 pb-10 w-1/3 absolute" style={{ 'minWidth': '640px', left: '50%', top: '25%', transform: 'translate(-50%, -25%)' }}>
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold">Create Followup</h2>
                    <button onClick={() => dispatch(toggleFollowupModal())}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div className="mt-4">
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        defaultValue={text}
                        onChange={(e) => dispatch(setFollowupModalText(e.target.value))}
                        variant="outlined"
                        fullWidth
                        onBlur={() => handleDescriptionBlur()}
                    />
                </div>
                <div className="mt-4">
                    <TextField
                            id="title"
                            label="Title"
                            type="text"
                            value={taskTitle}
                            onChange={(e) => dispatch(setTaskTitle(e.target.value))}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            className="w-full"
                        />
                </div>
                <div className="mt-4 flex justify-between">
                    <TextField
                        id="date"
                        label="Due Date"
                        type="date"
                        value={dueDate}
                        onChange={(e) => dispatch(setFollowupModalDueDate(e.target.value))}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <ToggleButtonGroup
                        value={selectedDateType}
                        exclusive
                        onChange={(e, value) => dispatch(setFollowupModalSelectedDateType(value))}
                        aria-label="text alignment"
                    >
                        <ToggleButton value="left" aria-label="left aligned">
                            End of Today
                        </ToggleButton>
                        <ToggleButton value="center" aria-label="centered">
                            Tomorrow
                        </ToggleButton>
                        <ToggleButton value="right" aria-label="right aligned">
                            Next Week
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
                <div className="mt-4 flex justify-end gap-x-5">
                    <Button variant="outlined" onClick={() => dispatch(toggleFollowupModal())}>Cancel</Button>
                    <Button variant="contained" onClick={() => handleSubmit()} className="ml-4">Save</Button>
                </div>
            </div>
        </Modal>
    )
}

export default FollowupModal;