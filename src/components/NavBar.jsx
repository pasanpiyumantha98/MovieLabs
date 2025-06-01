import { Link } from "react-router-dom"
import '../css/NavBar.css'
import logo from '../assets/logo.png'

function NavBar ()
{
return(
    <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/"><img src={logo}/></Link>
        </div>
        <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/favourites">Favorites</Link>
            <Link to="/watched">Watched</Link>
            <Link to="/support">Support</Link>
        </div>
    </nav>
)

}
export default NavBar