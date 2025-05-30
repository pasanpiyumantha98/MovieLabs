import MovieCard from "../components/MovieCard"
import { useState } from "react"
import '../css/home.css'

function Home () {

const movies = [{id:1, title:"Harry Potter", release_date:"2025-05-30"},
          {id:2, title:"Harry Potter 2", release_date:"2026-05-30"},
          {id:3, title:"Harry Potter 3", release_date:"2027-05-30"}]

const [searchtext, setSearchtext] = useState("")         

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