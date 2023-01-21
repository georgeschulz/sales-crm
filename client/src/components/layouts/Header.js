import { Link, useNavigate } from "react-router-dom";
import NavButton from "../buttons/navButton";
import { useDispatch, useSelector } from "react-redux";
import { selectPipelines } from "../../redux/pipelineConfigSlice";
import { useEffect } from "react";
import { fetchPipelines } from "../../redux/pipelineConfigSlice";

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const pipelines = useSelector(selectPipelines);

    useEffect(() => {
        dispatch(fetchPipelines());
    }, [dispatch])

    return (
        <div className="flex justify-between border-b border-b-zinc-700 bg-black text-white px-20 py-4">
            <h2 className="text-2xl font-bold">
                <Link to="/pipeline/1">Fast Pest Estimates</Link>
            </h2>
            <nav>
                <ul className="flex items-center">
                    <li className="mr-6 hover:underline">
                        <Link to="/numbers">My Numbers</Link>
                    </li>
                    {pipelines.map((pipeline, index) => {
                        return (
                            <li key={index} className="mr-6 hover:underline">
                                <Link to={`/pipeline/${pipeline.pipeline_id}`}>{pipeline.name}</Link>
                            </li>
                        )
                    }
                    )}
                    {false && <li className="mr-6">
                        <NavButton text="New Opportunity" onClick={() => navigate('/opportunity/new')} />
                    </li>}
                    <li className="mr-6">
                        <NavButton text="New Lead" onClick={() => navigate('/lead/new')} />
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;