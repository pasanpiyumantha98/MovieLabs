import '../css/Favorites.css'
import MovieCard from '../components/MovieCard'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from "../components/NavBar"
import axios from 'axios'


function ToWatch () 
{

const [user, setUser] = useState(null)
const navigate = useNavigate()
const [watched,setWatched] = useState([])



useEffect(() => {

const user = localStorage.getItem('profile')

    if (!user)
        { navigate('/');
        } else {
          setUser(JSON.parse(user))
        }
  }, []);

useEffect(async ()=>{

const response = await axios.get(`/movies/watchedlist/${user.username}`)

setWatched(response.data)

},[user])


    
return(
   <div>
   <NavBar/>
 <div className="movies-grid">
            {watched.map((movie) => (<p>{movie.Title}</p>))}
  </div>
  </div>
)
}

export default ToWatch