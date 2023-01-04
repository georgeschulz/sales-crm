import { useParams } from "react-router-dom"
import AppLayout from "../components/layouts/AppLayout"

function PipelinePage() {
    const { pipelineId } = useParams()

    return (
        <div>
            <AppLayout>
                <p>Pipeline Page: {pipelineId}</p>
            </AppLayout>
        </div>
    )
}

export default PipelinePage