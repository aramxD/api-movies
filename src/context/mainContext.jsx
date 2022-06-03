import axios from "axios";
import React, { createContext,   useEffect,   useState } from "react";
import { useMovies } from "../hooks/moviesHook";

//The Movie DB API Link
const API_TREND_URL = '/trending/movie/week?api_key='
const API_GENRE_URL = '/genre/movie/list?api_key='


const MainContext = createContext()



export const MainProvider =({children})=>{
const [openDetailView, setOpenDetailView] = useState(false)
const [genreId, setGenreId] = useState()

// Carrusel
const [trendMovies, setTrendMovies] = useMovies(API_TREND_URL)

// Genre List
const [genreList, setGenreList] = useMovies(API_GENRE_URL)

// Genre Detail List 
const [genreListView, setGenreListView] = useState([])

// filter movies by category  
console.log('soy el id de la categoria'+genreId)
const API_FILTER_GENRE = `https://api.themoviedb.org/3/discover/movie?&without_genres=${genreId}&api_key=8ac7684dd09df55c1e0b47396e892b7b`
const [filterMoviesGenre, setFilterMoviesGenre] = useState([])
//console.log(filterMoviesGenre)


    useEffect(()=>{
        
        axios.get(API_FILTER_GENRE).then((response)=>{
            //console.log(genreId)
            //console.log(response.data.results)
            setFilterMoviesGenre(response.data.results)
        })
        
        

    },[genreId])


const inactiveView=()=>{
    if(openDetailView){
        return 'inactive'
    }else{
        return ''
    }
}

const genreListValue=(value)=>{
    setGenreListView(value)
    setGenreId(value[0])
    
    //console.log(genreId)
    //console.log(genreListView)

    if(openDetailView){
        setOpenDetailView(false)
        return 'inactive'
    }else{
        setOpenDetailView(true)
        return ''
    }
}




const SuperContext = {
    openDetailView,
    setOpenDetailView,
    inactiveView,
    genreListValue,
    trendMovies,
    genreList,
    genreListView,
    filterMoviesGenre
    
}
    
return (
<MainContext.Provider value={SuperContext} >
    {children}
    </MainContext.Provider>)
}

export  {MainContext}
