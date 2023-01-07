import { useParams } from "react-router-dom"
import AppLayout from "../components/layouts/AppLayout"
import Pipeline from "../components/pipeline/Pipeline"
import axios from "axios"
import { useEffect, useState } from "react"

function PipelinePage() {
    const { pipelineId } = useParams()
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            try {
                const result = await axios.get(`http://localhost:4000/pipeline/${pipelineId}`)
                setData(result.data.data)
                setLoading(false)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [loading])

    const pipelineNames = {
        1: 'Pipeline 1',
        2: 'Pipeline 2',
        3: 'Pipeline 3'
    }

    return (
        <div>
            <AppLayout headline={pipelineNames[pipelineId]}>
                {!loading && <Pipeline id={pipelineId} data={data} onUpdate={() => setLoading(true)}/>}
            </AppLayout>
        </div>
    )
}

export default PipelinePage