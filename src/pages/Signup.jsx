import '../css/Login.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Signup () {

  const [uname,setUname] = useState("")
  const [pass,setPass] = useState("")
  const [email,setEmail] = useState("")

  const navigate=useNavigate()

  async function submitReg(e)
  {

     e.preventDefault();
    const response = await axios.post('http://localhost:9000/user/signup',{Username:uname,Password:pass,Email:email})

    if(response.data==="ok")
      navigate('/')
    else 
    alert("Somthing went wrong")


  }


return(

    <div class="container">
  <div class="row">
    <div class="helpcc">
    <center><img src={logo}></img></center>
    <br></br>
    <center><h3>Your personal movie manager</h3></center>
    <br></br>
    <p>&emsp;&emsp;&emsp;Please enter your detailes to create the account.</p>
    <br></br>
      <form  autocomplete="on" novalidate>
    <label for="name" class="required">Username</label>
    <input id="username" name="name" type="text"  value={uname} onChange={(e)=>setUname(e.target.value)} required/>
     <label for="name" class="required">Email</label>
    <input id="username" name="name" type="text"   value={email} onChange={(e)=>setEmail(e.target.value)} required/>
    <label for="email" class="required">Password</label>
    <input id="pass" name="password" type="password"  placeholder="" value={pass} onChange={(e)=>setPass(e.target.value)} required />
    
   <center> <button onClick={submitReg}>Register</button>   <Link to="/"><button>Already Registered?</button></Link></center>
  </form>
    </div>
  </div>
</div> 




)
}
export default Signup