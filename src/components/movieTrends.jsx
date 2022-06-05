import React, { useContext }  from 'react'
// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { FreeMode, } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/pagination";

import '../styles/movieTrends.css'
import { MovieCard } from '../elements/movieCard';
import { MainContext } from '../context/mainContext';
import { Carrusel } from './carrusel';


function truncate(string, limit){
    if(string.lenght <= limit){
        return string
    }else{
        return string.slice(0, limit)
    }
}

function MovieTrends(props) {
    const SuperContext = useContext(MainContext)
    const movies= SuperContext.trendMovies
    
    //console.log(movies)


    return (
        <section id='trendingPreview' className={`carrusel ${SuperContext.inactiveView()}`}>
            <h2>Movie Trends </h2>
            <div className="movieList">
                

            <Carrusel Movies={movies}/>




            </div>
        </section>
    )
}

export { MovieTrends }