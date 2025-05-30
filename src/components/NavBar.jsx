import { Link } from "react-router-dom"
import '../css/NavBar.css'

function NavBar ()
{
return(
    <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Movie Labs</Link>
        </div>
        <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/favourites">Favourites</Link>
            <Link to="/towatch">To Watch</Link>
        </div>
    </nav>
)

}
export default NavBar