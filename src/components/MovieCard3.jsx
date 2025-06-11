import '../css/MovieCard.css'
import { useMovieContext } from '../contexts/moviecontext'
import axios from 'axios'
import { useAuth } from '../contexts/authcontext'
import { useState } from 'react'


function MovieCard3 ({movie}) {

const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()

const [user,setUser]=useState();


useEffect(() => {

const user1 = JSON.parse(localStorage.getItem('profile'))

setUser(user1)

  }, [])


async function Remove (e){
e.preventDefault()
const response = await axios.get(`http://localhost:9000/movies/fav/remove/${user.Username}/${movie.id}`)

if(response.data=="OK") {
alert("Added to Watched collection!")
} else {
    alert("Already added!")
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