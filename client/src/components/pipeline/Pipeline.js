import Board from 'react-trello';
import './pipelineStyles.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Pipeline({ id, data, onUpdate }) {
    const navigate = useNavigate();

    const handleCardClick = (cardId) => {
        navigate(`/lead/${cardId}`)
    }

    const handleCardLaneChange = async (cardId, sourceLaneId, targetLaneId) => {
        try {
            const update = {
                leadId: cardId,
                stageId: targetLaneId
            }

            const result = await axios.put(`http://localhost:4000/pipeline/update-stage`, update)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <Board 
                data={data}
                compoenents={{
                    Card: function noRefCheck(){}
                }}
                hideCardDeleteIcon={true} 
                style={{ backgroundColor: '#1E1E1E', maxHeight: '600px' }}
                laneStyle={{ width: '350px', padding: '10px' }}
                onDataChange={(newData) => console.log('newData', newData)}
                onCardClick={(cardId) => handleCardClick(cardId)}
                handleDragEnd={(cardId, sourceLaneId, targetLaneId, position, cardDetails) => handleCardLaneChange(cardId, sourceLaneId, targetLaneId)}
            />
        </div>
    )
}

export default Pipeline