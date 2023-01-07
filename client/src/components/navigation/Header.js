import { Link, useNavigate } from "react-router-dom";
import NavButton from "../buttons/navButton";
import menuButton from '../../assets/menu-icon.png'

function Header() {
    const navigate = useNavigate();

    return (
        <div className="flex justify-between mb-12">
            <h2 className="text-2xl font-bold">
                <Link to="/pipeline/1">Fast Pest Estimates</Link>
            </h2>
            <nav>
                <ul className="flex items-center">
                    <li className="mr-6 hover:underline">
                        <Link to="/numbers">My Numbers</Link>
                    </li>
                    <li className="mr-6 hover:underline">
                        <Link to="/pipeline/1">Pipeline</Link>
                    </li>
                    <li className="mr-6  hover:underline">
                        <Link to="/pipeline/2">Pipeline 2</Link>
                    </li>
                    <li className="mr-6 hover:underline">
                        <Link to="/pipeline/3">Pipeline 3</Link>
                    </li>
                    {false && <li className="mr-6">
                        <NavButton text="New Opportunity" onClick={() => navigate('/opportunity/new')} />
                    </li>}
                    <li className="mr-6">
                        <NavButton text="New Lead" onClick={() => navigate('/lead/new')}/>
                    </li>
                    <li className="mr-6">
                        <img src={menuButton} alt="menu button" className="w-8 h-7" />
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;