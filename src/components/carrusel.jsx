import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { FreeMode, Pagination } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/pagination";

import '../styles/carrusel.css'
import poster from '../assets/img/popeye_movie_poster.jpg'

function Carrusel (props){
    
    


    
return(
<section id={props.Type} className='carrusel'>
    <h2>Movie Trends</h2>
    <div className="movieList">
    <Swiper 
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        pagination={{clickable: true,   }}
        modules={[FreeMode, Pagination]}
        className="mySwiper">
    <SwiperSlide>
    <article>
        <img src={poster} alt="soy un titulo" />
        <div className="articleTitle">
            <p>Soy el titulo de la pelicula</p>
            <p>⭐ 9/10 IMDb</p>
        </div>
        
    </article>
    </SwiperSlide>
    <SwiperSlide>
    <article>
        <img src={poster} alt="soy un titulo" />
        <div className="articleTitle">
            <p>Soy el titulo de la pelicula</p>
            <p>⭐ 9/10 IMDb</p>
        </div>
        
    </article>
    </SwiperSlide>
    <SwiperSlide>
    <article>
        <img src={poster} alt="soy un titulo" />
        <div className="articleTitle">
            <p>Soy el titulo de la pelicula</p>
            <p>⭐ 9/10 IMDb</p>
        </div>
        
    </article>
    </SwiperSlide>
    <SwiperSlide>
    <article>
        <img src={poster} alt="soy un titulo" />
        <div className="articleTitle">
            <p>Soy el titulo de la pelicula</p>
            <p>⭐ 9/10 IMDb</p>
        </div>
        
    </article>
    </SwiperSlide>
    <SwiperSlide>
    <article>
        <img src={poster} alt="soy un titulo" />
        <div className="articleTitle">
            <p>Soy el titulo de la pelicula</p>
            <p>⭐ 9/10 IMDb</p>
        </div>
        
    </article>
    </SwiperSlide>
    <SwiperSlide>
    <article>
        <img src={poster} alt="soy un titulo" />
        <div className="articleTitle">
            <p>Soy el titulo de la pelicula</p>
            <p>⭐ 9/10 IMDb</p>
        </div>
        
    </article>
    </SwiperSlide>
    <SwiperSlide>
    <article>
        <img src={poster} alt="soy un titulo" />
        <div className="articleTitle">
            <p>Soy el titulo de la pelicula</p>
            <p>⭐ 9/10 IMDb</p>
        </div>
        
    </article>
    </SwiperSlide>
    </Swiper>

    







    </div>
</section>
)
}

export {Carrusel}