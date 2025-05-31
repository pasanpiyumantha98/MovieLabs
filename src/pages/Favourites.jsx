import '../css/Favorites.css'
import { useMovieContext } from '../contexts/moviecontext'
import MovieCard from '../components/MovieCard'

function Favourites () 
{
    const {favorites} = useMovieContext()
return(
 <div className="movies-grid">
            {favorites.map((movie) => (<MovieCard  movie={movie} key={movie.id}/>))}
  </div>
)
}

export default Favourites