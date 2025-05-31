import { use } from "react";
import { createContext, useContext, useState, useEffect } from "react";


const movieContext = createContext()

export const useMovieContext = () => useContext(movieContext)

export const movieProvider =({children}) =>{

    const [favorites,setFavorites] = useState([])

    useEffect(() =>{

        const storedfavs = localStorage.getItem("favorites")

        if(storedfavs) setFavorites(JSON.parse(storedfavs))

    },[])

    useEffect(() =>{

    localStorage.setItem('favorites',JSON.stringify(favorites))

    },[favorites])



}