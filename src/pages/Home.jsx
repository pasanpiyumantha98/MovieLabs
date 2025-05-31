import MovieCard from "../components/MovieCard"
import { useState,useEffect } from "react"
import '../css/home.css'
import { PopMovies,SearchMovies } from "../services/api"

function Home () {

const [movies,SetMovies] = useState([])
const [searchtext, setSearchtext] = useState("")     
const [loading, setLoading] = useState(true) 
const [error, setError] = useState(null)     

useEffect(()=>{
  
  async function loadMovies(){
    try{
        const popMovies= await PopMovies();
        SetMovies(popMovies)

    }catch(err){
        console.log(err)
        setError(err)
    }finally{
        setLoading(false)
    }
}
loadMovies();
},[])



function FormSubmit()
{
    alert(searchtext)
}


return(

    <div className="home">
        <form onSubmit={FormSubmit} className="search-form">
            <input type="text" value={searchtext} onChange={(e)=> setSearchtext(e.target.value)} className="search-input" placeholder="Search for movies"></input>
            <button type="submit" className="search-button">Search</button>
        </form>
        <div className="movies-grid">
            {movies.map((movie) => (<MovieCard  movie={movie} key={movies.id}/>))}
        </div>
    </div>




)
}
export default Home