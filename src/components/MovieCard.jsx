import '../css/MovieCard.css'
import { useMovieContext } from '../contexts/moviecontext'


function MovieCard ({movie}) {

const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()

const favorites = isFavorite(movie.id)

function FavouriteButton (e) {
    e.preventDefault()
    if(favorites) removeFromFavorites(movie.id)
        else addToFavorites(movie)
}

return(
<div className="movie-card">
<div className="movie-poster">
    
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
    <div className="movie-overlay">
        <button className={`favorite-btn ${favorites ? "active" : ""}`} onClick={FavouriteButton}>♡</button>
         <button className={`watched-btn ${favorites ? "active" : ""}`} onClick={FavouriteButton}>✔</button>
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