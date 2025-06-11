import '../css/MovieCard.css'
import { useMovieContext } from '../contexts/moviecontext'
import axios from 'axios'
import { useAuth } from '../contexts/authcontext'


function MovieCard2 ({movie}) {


const {user} = useAuth()    

const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()

const favorites = isFavorite(movie.id)

async function Remove (e){
e.preventDefault()
const response = await axios.get(`http://localhost:9000/movies/wat/remove/${user.Username}/${movie.Movie}`)

if(response.data=="ok") {
alert("Removed from Watched collection!")
window.location.reload();
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

export default MovieCard2