import '../css/MovieCard.css'

function MovieCard ({movie}) {

function FavouriteButton () {
    alert("Added to the favourits!")
}

return(
<div className="movie-card">
<div className="movie-paster">
    
    <img src={movie.url}/>
    <div className="movie-overlay">
        <button className="favourite-btn" onClick={FavouriteButton}>♡</button>
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