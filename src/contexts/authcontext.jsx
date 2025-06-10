import { createContext, useContext, useState,useEffect } from "react";
import axios from 'axios';

const AuthContext = createContext()

export function AuthProvider ({children}) {

const [user,setUser] = useState(null)
const [bootstrapped, setBootstrapped] = useState(false);   


//setting users if they exist in the local storage
useEffect (() =>{

const cached = localStorage.getItem('profile')

if(cached)
    setUser(JSON.parse(cached))

setBootstrapped(true); 

},[])


//login function
async function loginn(uname,pass)
  {
   const {data} = await axios.post('http://localhost:9000/user/login', {Username:uname,Password:pass})

   if(data)
   {
  setUser(data)
  localStorage.setItem('profile', JSON.stringify(data))
  return("OK")
   }
   else{
    return("NOOK")
   }
}


function logout ()
{
    setUser(null)
    localStorage.removeItem('profile')
}

return(

    <AuthContext.Provider value={{user,loginn,logout, bootstrapped}}>
        {children}
    </AuthContext.Provider>


)

}

export const useAuth = () => useContext(AuthContext);




