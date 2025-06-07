import '../css/Favorites.css'
import MovieCard from '../components/MovieCard'
import { useAuth } from '../contexts/authcontext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from "../components/NavBar"
import axios from 'axios'


function ToWatch () 
{

const {user} = useAuth()
const navigate = useNavigate()



useEffect(() =>{

if(!user){
  navigate("/")
}
},[user,navigate])

useEffect(()=>{

const watched = axios.get('/movies/watchedlist', {Username:user.Username})

},[])


    
return(
   <div>
   <NavBar/>
 <div className="movies-grid">
      
  </div>
  </div>
)
}

export default ToWatch