import '../css/Favorites.css'
import { useMovieContext } from '../contexts/moviecontext'
import MovieCard from '../components/MovieCard'
import { useAuth } from '../contexts/authcontext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from "../components/NavBar"

function Favourites () 
{

const {user} = useAuth()
const navigate = useNavigate()
const [user, setUser] = useState(null)

useEffect(() => {

const user = localStorage.getItem('profile')
setUser(user)
    if (!user)
        { navigate('/');
        }
  }, [])


    const {favorites} = useMovieContext()
return(
   <div>
   <NavBar/>
 <div className="movies-grid">
            {favorites.map((movie) => (<MovieCard  movie={movie} key={movie.id}/>))}
  </div>
  </div>
)
}

export default Favourites