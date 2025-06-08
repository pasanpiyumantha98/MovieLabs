import '../css/help.css'
import NavBar from "../components/NavBar"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../contexts/authcontext"

function How()
{

const {user} = useAuth()
const navigate = useNavigate()

useEffect(() =>{

if(!user){
  navigate("/")
}

},[user,navigate])

return(
<div class="container">
  <NavBar/>
  <div class="row">
    <div class="helpcc">
    <h2>How Movie Labs Work?</h2>
    <br></br>
     
    </div>
  </div>
</div>  
)
}

export default How