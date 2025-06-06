
import NavBar from "../components/NavBar"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../contexts/authcontext"

function ToWatch()
{
const {user} = useAuth()
const navigate = useNavigate()

useEffect(() =>{

if(!user){
  navigate("/")
}

},[user,navigate])

return(
<div>
<NavBar/>
<p>This is the page belongs to already watched movies.</p>

</div>
)
}

export default ToWatch