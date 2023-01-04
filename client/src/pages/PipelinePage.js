import { useParams } from "react-router-dom"
import AppLayout from "../components/layouts/AppLayout"
import Pipeline from "../components/pipeline/Pipeline"

function PipelinePage() {
    const { pipelineId } = useParams()

    const pipelineNames = {
        1: 'Pipeline 1',
        2: 'Pipeline 2',
        3: 'Pipeline 3'
    }

    return (
        <div>
            <AppLayout>
                <h1 className="text-2xl font-semibold mb-3">{pipelineNames[pipelineId]}</h1>
                <Pipeline id={pipelineId} />
            </AppLayout>
        </div>
    )
}

export default PipelinePage