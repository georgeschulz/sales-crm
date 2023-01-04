import Board from 'react-trello';
import './pipelineStyles.css'

function Pipeline({ id }) {
    const data = {
        lanes: [
            {
                id: 'lane1',
                title: 'Planned Tasks',
                label: '2/2',
                cards: [
                    { id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins' },
                    { id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: { sha: 'be312a1' } }
                ]
            },
            {
                id: 'lane2',
                title: 'In Progress',
                label: '0/0',
                cards: []
            },
            {
                id: 'lane3',
                title: 'Completed',
                label: '0/0',
                cards: []
            },
            {
                id: 'lane4',
                title: 'Backlogged',
                label: '0/0',
                cards: []
            },
            {
                id: 'lane5',
                title: 'Pending Approval',
                label: '0/0',
                cards: []
            }
        ]
    }

    return (
        <div>
            <Board 
                data={data}
                hideCardDeleteIcon={true} 
                style={{ backgroundColor: '#1E1E1E', maxHeight: '600px' }}
                laneStyle={{ width: '350px', padding: '10px' }}
            />
        </div>
    )
}

export default Pipeline