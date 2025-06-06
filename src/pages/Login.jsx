import '../css/Login.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function Login () {

  const [uname,setUname] = useState("")
  const [pass,setPass] = useState("")


  async function submitLogin(e)
  {

     e.preventDefault();

   const person = await axios.post('http://localhost:9000/user/login', {Username:uname,Password:pass})

   if(person)
    alert("success")
   else
   alert("NotOK")

  }



return(

    <div class="container">
  <div class="row">
    <div class="helpcc">
    <center><img src={logo}></img></center>
    <br></br>
    <center><h3>Your personal movie manager</h3></center>
    <br></br>
      <form autocomplete="on" novalidate>
    <label for="name" class="required">Username</label>
    <input id="username" name="name" type="text"  autocomplete="name" value={uname} onChange={(e) => setUname(e.target.value)}/>
    <label for="email" class="required">Password</label>
    <input id="pass" name="password" type="password" required value={pass} onChange={(p) => setPass(p.target.value)} />
    
   <center> <button onClick={submitLogin}>login</button> <Link to="/signup"> <button >Not Registered?</button></Link></center>
  </form>
    </div>
  </div>
</div> 




)
}
export default Login