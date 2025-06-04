import '../css/Login.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Signup () {



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
     <label for="name" class="required">Email</label>
    <input id="username" name="name" type="text"  autocomplete="name" />
    <label for="email" class="required">Password</label>
    <input id="pass" name="password" type="password" required placeholder="" />
    
   <center> <button type="submit">login</button>   <Link to="/"><button>Already Registered?</button></Link></center>
  </form>
    </div>
  </div>
</div> 




)
}
export default Signup