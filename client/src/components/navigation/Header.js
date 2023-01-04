import { Link } from "react-router-dom";
import NavButton from "../buttons/navButton";
import menuButton from '../../assets/menu-icon.png'

function Header() {
    return (
        <div className="flex justify-between mb-12">
            <h2 className="text-2xl font-bold">Fast Pest Estimates</h2>
            <nav>
                <ul className="flex items-center">
                    <li className="mr-4 hover:underline">
                        <Link to="/numbers">My Numbers</Link>
                    </li>
                    <li className="mr-4 hover:underline">
                        <Link to="/pipeline/1">Pipeline</Link>
                    </li>
                    <li className="mr-4  hover:underline">
                        <Link to="/pipeline/2">Pipeline 2</Link>
                    </li>
                    <li className="mr-4 hover:underline">
                        <Link to="/pipeline/3">Pipeline 3</Link>
                    </li>
                    <li className="mr-4">
                        <NavButton text="New Opportunity" />
                    </li>
                    <li className="mr-4">
                        <NavButton text="New Lead" />
                    </li>
                    <li className="mr-4">
                        <img src={menuButton} alt="menu button" className="w-8 h-7" />
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;