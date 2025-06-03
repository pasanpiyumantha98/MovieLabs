import MovieCard from "../components/MovieCard"
import { useState,useEffect } from "react"
import '../css/Login.css'
import { PopMovies,SearchMovies } from "../services/api"
import Logo '../'

function Login () {



return(

    <div class="container">
  <div class="row">
    <div class="helpcc">
    <h2>Need support ?</h2>
    <br></br>
      <form action="https://example.com/support" method="POST" autocomplete="on" novalidate>
    <label for="name" class="required">Username</label>
    <input id="name" name="name" type="text" required placeholder="Jane Smith" autocomplete="name" />
    <label for="email" class="required">Password</label>
    <input id="email" name="email" type="email" required placeholder="jane@example.com" autocomplete="email" />
    
    <button type="submit">login</button>
  </form>
    </div>
  </div>
</div> 




)
}
export default Login