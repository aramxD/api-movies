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
import { MovieCard } from '../elements/movieCard';




function Carrusel({Movies}) {
    
    const movies= Movies
    
    //console.log(movies)


    return (
 
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    modules={[FreeMode,]}
                    className="mySwiper">

                    {movies?.results?.map((element) => {
                        return(<SwiperSlide key={element.id}>
                            
                            <MovieCard imgURL={`https://image.tmdb.org/t/p/w300${element.poster_path}`} 
                            title={element.title} 
                            key={element.id}
                            voteAverage={element.vote_average}
                            movieId={element.id}/>
                            
                        </SwiperSlide>)
                        })
                    }             
                </Swiper>

    )
}

export { Carrusel }