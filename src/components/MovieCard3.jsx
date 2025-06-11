import '../css/MovieCard.css'
import { useMovieContext } from '../contexts/moviecontext'
import axios from 'axios'
import { useAuth } from '../contexts/authcontext'


function MovieCard3 ({movie}) {


const {user} = useAuth()    

const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()

const favorites = isFavorite(movie.id)

async function FavouriteButton (e) {
    e.preventDefault()
   const response = await axios.post('http://localhost:9000/movies/fav',{ MovieId:movie.id,Poster:movie.poster_path,Title:movie.title,Release:movie.release_date, Username : user.Username})

   if(response.data=="ok") {
alert("Added to Favorites collection")
} else {
    alert("Already added!")
}

}

async function watched (e){
e.preventDefault()
const response = await axios.post('http://localhost:9000/movies/watched',{ MovieId:movie.id,Poster:movie.poster_path,Title:movie.title,Release:movie.release_date, Username : user.Username})

if(response.data=="OK") {
alert("Added to Watched collection")
} else {
    alert("Already added!")
}
}


return(
<div className="movie-card">
<div className="movie-poster">
    
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
    <div className="movie-overlay">
       
         <button className={`watched-btn ${favorites ? "active" : ""}`} onClick={watched}>✔</button>
    </div>
</div>
<div className="movie-info">
    <h3>{movie.title}</h3>
    <p>{movie.release_date}</p>
    <button>Remove</button>
    
</div>
</div>
)

}

export default MovieCard3