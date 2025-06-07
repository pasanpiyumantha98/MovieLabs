import '../css/MovieCard.css'
import { useMovieContext } from '../contexts/moviecontext'
import axios from 'axios'
import { useAuth } from '../contexts/authcontext'


function MovieCard ({movie}) {


const {user} = useAuth()    

const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()

const favorites = isFavorite(movie.id)

function FavouriteButton (e) {
    e.preventDefault()
    if(favorites) removeFromFavorites(movie.id)
        else addToFavorites(movie)
}

async function watched (e){
e.preventDefault()
await axios.post('http://localhost:9000/movies/watched',{ MovieId:movie.id, Username : user.Username})
alert("Added to Watched collection")
}

return(
<div className="movie-card">
<div className="movie-poster">
    
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
    <div className="movie-overlay">
        <button className={`favorite-btn ${favorites ? "active" : ""}`} onClick={FavouriteButton}>♡</button>
         <button className={`watched-btn ${favorites ? "active" : ""}`} onClick={watched}>✔</button>
    </div>
</div>
<div className="movie-info">
    <h3>{movie.title}</h3>
    <p>{movie.release_date}</p>
    
</div>
</div>
)

}

export default MovieCard