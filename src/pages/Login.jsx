import '../css/Login.css'
import logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../contexts/authcontext'


function Login () {

  const [uname,setUname] = useState("")
  const [pass,setPass] = useState("")
  const {loginn} = useAuth()

  const navigate =useNavigate();

  async function submitLogin(e)
  {

     e.preventDefault();

     const ans = await loginn(uname,pass)

     if(ans =="OK")
      navigate('/home')
    else if(ans=="NOOK")
    alert("Worng Credentials")
    else
     alert("Dont know")



    

  }



return(

    <div class="container">
  <div class="row">
    <div class="helpcc">
    <center><img src={logo}></img></center>
    <br></br>
    <center><h3>Your personal movie manager</h3></center>
    <br></br>
    <p>&emsp;&emsp;&emsp;Please enter your detailes to login</p>
    <br></br>
      <form autocomplete="on" novalidate>
    <label for="name" class="required">Username</label>
    <input id="username" name="name" type="text"   value={uname} onChange={(e) => setUname(e.target.value)} required/>
    <label for="email" class="required">Password</label>
    <input id="pass" name="password" type="password"  value={pass} onChange={(p) => setPass(p.target.value)}  required/>
    
   <center> <button onClick={submitLogin}>login</button> <Link to="/signup"> <button >Not Registered?</button></Link></center>
  </form>
    </div>
  </div>
</div> 




)
}
export default Login