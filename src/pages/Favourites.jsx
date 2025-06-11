import '../css/Favorites.css'
import { useMovieContext } from '../contexts/moviecontext'
import MovieCard from '../components/MovieCard'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from "../components/NavBar"
import axios from 'axios'
import MovieCard2 from '../components/MovieCard2'
import MovieCard3 from '../components/MovieCard3'

function Favourites () 
{

const navigate = useNavigate()
const [user, setUser] = useState(null)
const [fav,setFav] = useState([])

useEffect(() => {

const user = JSON.parse(localStorage.getItem('profile'))

    if (!user)
        { navigate('/');
        } else {
          setUser(user)
        }
  }, [])

  useEffect (()=>{

     if (!user) return;  

    async function fetchMov()
    {  
      const response = await axios.get(`http://localhost:9000/movies/favList/${user.Username}`)
      setFav(response.data)
    }
    fetchMov();

  },[user])


   
return(
   <div>
   <NavBar/>
   <br></br><br></br>
   <center><h1>Favorite Movies</h1></center>
 <div className="movies-grid">
           {Array.isArray(fav) && fav.length > 0 ? (
    fav.map(movie => (
     <MovieCard3  movie={movie} key={fav.Movie}/>
    ))
  ) : (
    <p>No movies in your list yet.</p>
  )}
  </div>
  </div>
)
}

export default Favourites