export default MovieCard

function MovieCard ({movie}) {

return(
<div className="movie-card">
<div className="movie-paster">
    
    <img src={movie.img}/>
    <div className="movie-overlay">
        <button className="favourite-btn" onClick={FavouriteButton}>FF</button>
    </div>
</div>
</div>
)

}