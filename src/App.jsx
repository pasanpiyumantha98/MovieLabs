import './css/App.css'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import Favourites from './pages/Favourites'
import ToWatch from './pages/ToWatch'
import Help from './pages/Help'
import NavBar from './components/NavBar'
import { MovieProvider } from './contexts/moviecontext'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { AuthProvider } from './contexts/authcontext'

function App() {

  return (

    <AuthProvider>
    <MovieProvider>
   
    <main className="main-content">
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/favourites" element={<Favourites/>}/>
      <Route path="/watched" element={<ToWatch/>}/>
      <Route path="/support" element={<Help/>}/>
      <Route path="/" element={<Login/>}/>
       <Route path="/signup" element={<Signup/>}/>

    </Routes>
    </main>
    </MovieProvider>
    </AuthProvider>
  )
}

export default App
