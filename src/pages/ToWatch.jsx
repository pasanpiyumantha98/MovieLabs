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



useEffect(() => {

const user = localStorage.getItem('profile')
setUser(user)
    if (!user)
        { navigate('/');
        }
  }, []);

useEffect(()=>{

//const watched = axios.get('/movies/watchedlist', {Username:user.Username})

},[])


    
return(
   <div>
   <NavBar/>
 <div className="movies-grid">
            {watched.map((movie) => (<MovieCard  movie={movie} key={movie.id}/>))}
  </div>
  </div>
)
}

export default ToWatch