import MovieCard from "../components/MovieCard"
import { useState,useEffect } from "react"
import '../css/Login.css'
import { PopMovies,SearchMovies } from "../services/api"
import logo from '../assets/logo.png'

function Login () {



return(

    <div class="container">
  <div class="row">
    <div class="helpcc">
    <center><img src={logo}></img></center>
    <br></br>
    <center><h3>Your personal movie manager</h3></center>
    <br></br>
      <form action="https://example.com/support" method="POST" autocomplete="on" novalidate>
    <label for="name" class="required">Username</label>
    <input id="username" name="name" type="text"  autocomplete="name" />
    <label for="email" class="required">Password</label>
    <input id="pass" name="password" type="password" required placeholder="" />
    
   <center> <button type="submit">login</button>  <button type="submit">Already Registered?</button></center>
  </form>
    </div>
  </div>
</div> 




)
}
export default Login