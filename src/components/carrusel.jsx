import React, { useState, useEffect } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { FreeMode, } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/pagination";

import '../styles/carrusel.css'
import poster from '../assets/img/popeye_movie_poster.jpg'

//The Movie DB API Link
const API_URL = 'https://api.themoviedb.org/3'
const API_TREND_URL = '/trending/movie/week?api_key='
const API_KEY = '8ac7684dd09df55c1e0b47396e892b7b'



function Carrusel(props) {
    const [movies, setMovies] = useState([])

    async function getTrendingmoviesPreview(API_URL, API_TREND_TYPE, API_KEY) {
        const response = await fetch(API_URL + API_TREND_TYPE + API_KEY)
        try {
            const data = await response.json();
            setMovies(data.results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTrendingmoviesPreview(API_URL, API_TREND_URL, API_KEY)
    }, [])

    console.log(movies)


    return (
        <section id={props.Type} className='carrusel'>
            <h2>Movie Trends</h2>
            <div className="movieList">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    freeMode={true}
                    modules={[FreeMode,]}
                    className="mySwiper">

                    {/* <SwiperSlide>
                        <article>
                            <img src={poster} alt="soy un titulo" />
                            <div className="articleTitle">
                                <p>Soy el titulo de la pelicula</p>
                                <p>⭐ 9/10 IMDb</p>
                            </div>

                        </article>
                    </SwiperSlide> */}

                    {movies.map((element) => {
                        return(<SwiperSlide key={element.id}>
                            <article>
                                <img src={`https://image.tmdb.org/t/p/w300${element.poster_path}`} alt={element.title} />
                                <div className="articleTitle">
                                    <p>{element.title}</p>
                                    <p>⭐ 9/10 IMDb</p>
                                </div>
                            </article>
                        </SwiperSlide>)
                        })
                    }             
                </Swiper>









            </div>
        </section>
    )
}

export { Carrusel }