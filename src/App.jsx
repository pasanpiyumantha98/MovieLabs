import './css/App.css'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import Favourites from './pages/Favourites'
import ToWatch from './pages/ToWatch'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
    <NavBar/>
    <main className="main-content">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/favourites" element={<Favourites/>}/>
      <Route path="/towatch" element={<ToWatch/>}/>
    </Routes>
    </main>
    </>
  )
}

export default App
