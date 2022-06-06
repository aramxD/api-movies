import React, { useContext }  from 'react'
// Import Swiper React components



import '../styles/movieTrends.css'
import { MainContext } from '../context/mainContext';
import { Carrusel } from './carrusel';



function MovieTrends() {
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