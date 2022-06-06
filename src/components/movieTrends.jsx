import React, { useContext }  from 'react'
// Import Swiper React components



import '../styles/movieTrends.css'
import { MainContext } from '../context/mainContext';
import { Carrusel } from '../elements/carrusel';



function MovieTrends() {
    const {controlView, goToMovieDetail, trendMovies, inactiveView} = useContext(MainContext)
    const movies=  trendMovies
    
    //console.log(movies)


    return (
        <section id='trendingPreview' className={`carrusel ${inactiveView(controlView.home)}`}>
            <h2>Movie Trends </h2>
            <div className="movieList">
                

            <Carrusel Movies={movies}/>




            </div>
        </section>
    )
}

export { MovieTrends }