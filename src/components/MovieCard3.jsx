import '../css/MovieCard.css'
import { useMovieContext } from '../contexts/moviecontext'
import axios from 'axios'
import { useAuth } from '../contexts/authcontext'
import { useState,useEffect } from 'react'


function MovieCard3 ({movie}) {


const [user,setUser]=useState(null);


useEffect(() => {

const user1 = JSON.parse(localStorage.getItem('profile'))

setUser(user1)

  }, [])


async function Remove (e){
e.preventDefault()
const response = await axios.get(`http://localhost:9000/movies/fav/remove/${user.Username}/870028`)

if(response.data=="ok") {
alert("Removed from favorites collection!")
} else {
    alert("Coud not remove")
}
}


return(
<div className="movie-card">
<div className="movie-poster">
    
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
    <div className="movie-overlay">
       
         
    </div>
</div>
<div className="movie-info">
    <h3>{movie.title}</h3>
    <p>{movie.release_date}</p>
    <button onClick={Remove}>Remove</button>
    
</div>
</div>
)

}

export default MovieCard3