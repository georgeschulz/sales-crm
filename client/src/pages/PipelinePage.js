import { useParams } from "react-router-dom"
import AppLayout from "../components/layouts/AppLayout"
import Pipeline from "../components/pipeline/Pipeline"
import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectPipelines } from "../redux/pipelineConfigSlice"
import { selectIsPipelineLoading } from "../redux/pipelineConfigSlice"
import { getBusinessDetails } from "../redux/businessSlice"

function PipelinePage() {
    const { pipelineId } = useParams()
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const isPipelineLoading = useSelector(selectIsPipelineLoading)
    const pipelines = useSelector(selectPipelines)
    const dispatch = useDispatch()
    
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

    useEffect(() => {
        dispatch(getBusinessDetails())
    }, [])

    return (
        <div>
            <AppLayout>
                <div className="py-8 px-4">
                    <h1 className="text-2xl font-semibold mb-10">{headerText}</h1>
                    {!loading && !isPipelineLoading && <Pipeline id={pipelineId} data={data} />}
                </div>
            </AppLayout>
        </div>
    )
}

export default PipelinePage