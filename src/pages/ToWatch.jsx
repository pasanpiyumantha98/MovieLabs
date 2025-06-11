import '../css/Favorites.css'
import MovieCard from '../components/MovieCard'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from "../components/NavBar"
import axios from 'axios'
import MovieCard2 from '../components/MovieCard2'


function ToWatch () 
{

const [user, setUser] = useState("")
const navigate = useNavigate()
const [watched,setWatched] = useState([])



useEffect(() => {

const user = JSON.parse(localStorage.getItem('profile'))

    if (!user)
        { navigate('/');
        } else {
          setUser(user)
        }
  }, []);

useEffect( ()=>{
  if (!user) return;  

async function fetchData() {
const response = await axios.get(`http://localhost:9000/movies/watchedList/${user.Username}`)

setWatched(response.data)
  }
  fetchData();
},[user])


    
return(
   <div>
   <NavBar/>
   <br></br><br></br>
   <center><h1>Watched Movies</h1></center>
<div className="movies-grid">
  
  {Array.isArray(watched) && watched.length > 0 ? (
    watched.map(movie => (
     <MovieCard2  movie={movie} key={movie.id}/>
    ))
  ) : (
    <p>No movies in your list yet.</p>
  )}
</div>
  </div>
)
}

export default ToWatch