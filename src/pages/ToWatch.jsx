import '../css/Favorites.css'
import { useMovieContext } from '../contexts/moviecontext'
import MovieCard from '../components/MovieCard'
import { useAuth } from '../contexts/authcontext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from "../components/NavBar"
import axios from 'axios'
import { useAuth } from '../contexts/authcontext'

function Watched () 
{

const {user} = useAuth()
const navigate = useNavigate()



useEffect(() =>{

if(!user){
  navigate("/")
}




},[user,navigate])

const watched = axios.get('/movies/watchedlist', {Username:user.Username})

    
return(
   <div>
   <NavBar/>
 <div className="movies-grid">
            {watched.map((movie) => (<MovieCard  movie={movie} key={movie.id}/>))}
  </div>
  </div>
)
}

export default Watched