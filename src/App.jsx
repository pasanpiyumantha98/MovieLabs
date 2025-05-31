import './css/App.css'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import Favourites from './pages/Favourites'
import ToWatch from './pages/ToWatch'
import NavBar from './components/NavBar'
import { MovieProvider } from './contexts/moviecontext'

function App() {

  return (
    <MovieProvider>
    <NavBar/>
    <main className="main-content">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/favourites" element={<Favourites/>}/>
      <Route path="/towatch" element={<ToWatch/>}/>
    </Routes>
    </main>
    </MovieProvider>
  )
}

export default App
