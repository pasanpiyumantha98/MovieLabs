import { Link } from "react-router-dom"
import '../css/NavBar.css'
import logo from '../assets/logo.png'
import { useAuth } from "../contexts/authcontext"

function NavBar ()
{

    const {user,logout} =useAuth()

return(
    <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/home"><img src={logo}/></Link>
        </div>
        <div className="navbar-links">
           
            <Link to="/home">Home</Link>
            <Link to="/favourites">Favorites</Link>
            <Link to="/watched">Watched</Link>
             <Link to="/how">How It Works</Link>
            <Link to="/support">Support</Link>
            <a onClick={logout}>Logout</a>
        </div>
    </nav>
)

}
export default NavBar