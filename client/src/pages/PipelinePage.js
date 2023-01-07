import { useParams } from "react-router-dom"
import AppLayout from "../components/layouts/AppLayout"
import Pipeline from "../components/pipeline/Pipeline"
import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { selectPipelines } from "../redux/pipelineConfigSlice"
import { selectIsPipelineLoading } from "../redux/pipelineConfigSlice"

function PipelinePage() {
    const { pipelineId } = useParams()
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const isPipelineLoading = useSelector(selectIsPipelineLoading)
    const pipelines = useSelector(selectPipelines)
    
    let headerText = ""
    if(pipelines.find(pipeline => pipeline.pipeline_id == parseInt(pipelineId))) {
        headerText = pipelines.find(pipeline => pipeline.pipeline_id == parseInt(pipelineId)).name
    } else {
        headerText = "Loading..."
    } 

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
    }, [loading, pipelineId])

    return (
        <div>
            <AppLayout headline={headerText}>
                {!loading && !isPipelineLoading && <Pipeline id={pipelineId} data={data} />}
            </AppLayout>
        </div>
    )
}

export default PipelinePage