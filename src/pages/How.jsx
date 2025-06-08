import '../css/help.css'
import NavBar from "../components/NavBar"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../contexts/authcontext"

function Help()
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
    <h2>Need support ?</h2>
    <br></br>
      <form >
    <label for="name" class="required">Full Name</label>
    <input id="name" name="name" type="text" required placeholder="Jane Smith" />
    <label for="email" class="required">Email Address</label>
    <input id="email" name="email" type="email" required placeholder="jane@example.com" />
    <label for="phone">Phone (optional)</label>
    <input id="phone" name="phone" type="tel" placeholder="+94 77 123 4567" autocomplete="tel" />
    <label for="subject" class="required">Subject</label>
    <input id="subject" name="subject" type="text" maxlength="120" required placeholder="Billing question, technical issue, feedback…" />
    
    <label for="message" class="required">Message</label>
    <textarea id="message" name="message" rows="6" required placeholder="Tell us what’s happening…"></textarea>
   
    <button type="submit">Submit</button>
  </form>
    </div>
  </div>
</div>  
)
}

export default Help