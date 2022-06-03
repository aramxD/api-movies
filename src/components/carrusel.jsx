import React, { useContext }  from 'react'
// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { FreeMode, } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/pagination";

import '../styles/carrusel.css'
import { useMovies } from '../hooks/moviesHook';
import { MovieCard } from '../elements/movieCard';
import { MainContext } from '../context/mainContext';


function truncate(string, limit){
    if(string.lenght <= limit){
        return string
    }else{
        return string.slice(0, limit)
    }
}

function Carrusel(props) {
    const SuperContext = useContext(MainContext)
    const movies= SuperContext.trendMovies
    //console.log(movies)


    return (
        <section id={props.Type} className={`carrusel ${SuperContext.inactiveView()}`}>
            <h2>Movie Trends </h2>
            <div className="movieList">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    modules={[FreeMode,]}
                    className="mySwiper">



                    {movies?.results?.map((element) => {
                        return(<SwiperSlide key={element.id}>
                            
                            <MovieCard imgURL={`https://image.tmdb.org/t/p/w300${element.poster_path}`} title={element.title}/>
                            
                        </SwiperSlide>)
                        })
                    }             
                </Swiper>









            </div>
        </section>
    )
}

export { Carrusel }