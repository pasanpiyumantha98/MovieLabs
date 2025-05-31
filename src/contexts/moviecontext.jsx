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


    const addToFavorites(movie)
    {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorites(movieID)
    {
        setFavorites(prev => prev.filter(movie => movie.id !==movieID))
    }

    const isFavorite(movieID)
    {
        return favorites.some(movie => movie.id == movieID)
    }

    const values ={favorites, addToFavorites, removeFromFavorites, isFavorite}

    return<movieContext.Provider value={values}>
        {children}
    </movieContext.Provider>

}