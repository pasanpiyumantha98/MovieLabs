import '../css/help.css'
import NavBar from "../components/NavBar"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../contexts/authcontext"

function How()
{

const navigate = useNavigate()
const [user, setUser] = useState(null)

useEffect(() => {

const user = localStorage.getItem('profile')
setUser(user)
    if (!user)
        { navigate('/');
        }
  }, []);

return(
<div class="container">
  <NavBar/>
  <div class="row">
    <div class="helpcc">
    <h2>How Movie Labs Work?</h2>
    <br></br>
    <ul>
      <li>Create an account with MovieLabs.</li>
        <li> Login to your account.</li>
          <li> Search for any movie on our platform and access informtaion.</li>
            <li> You can add any movie to your Favorites list.</li>
             <li> You can also maintain the watched list of movies.</li>
             <li> If you are facing any error or problem, pass it to our attention.</li>
    </ul>
     
    </div>
  </div>
</div>  
)
}

export default How