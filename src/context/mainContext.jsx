import React, { createContext,   useState } from "react";
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
    console.log(genreId)
    console.log(genreListView)

    if(openDetailView){
        setOpenDetailView(false)
        return 'inactive'
    }else{
        setOpenDetailView(true)
        return ''
    }
}
// const genreListView()=>{

//     console.log(`soy el id del genero:${genreId}`)
// }




const SuperContext = {
    openDetailView,
    setOpenDetailView,
    inactiveView,
    genreListValue,
    trendMovies,
    genreList,
    genreListView
    
}
    
return (
<MainContext.Provider value={SuperContext} >
    {children}
    </MainContext.Provider>)
}

export  {MainContext}
