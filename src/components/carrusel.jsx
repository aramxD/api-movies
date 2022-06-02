import React  from 'react'
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
//import poster from '../assets/img/popeye_movie_poster.jpg'

//The Movie DB API Link
const API_TREND_URL = '/trending/movie/week?api_key='

// const api = axios.create({
//     baseURL: 'https://api.themoviedb.org/3',
//     headers:{
//         'Content-Type': 'application/json',
//     },
//     params:{
//         'api_key':API_KEY
//     }
// })
//truncate function
function truncate(string, limit){
    if(string.lenght <= limit){
        return string
    }else{
        return string.slice(0, limit)
    }
}

function Carrusel(props) {
    
    const [movies, setMovies] = useMovies(API_TREND_URL)
    
    // async function getTrendingmoviesPreview(API_URL, API_TREND_TYPE, API_KEY) {
    //     const response = await fetch(API_URL + API_TREND_TYPE + API_KEY)
    //     try {
    //         const data = await response.json();
    //         setMovies(data.results)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // useEffect(() => {
    //     getTrendingmoviesPreview(API_URL, API_TREND_URL, API_KEY)
    // }, [])

    //console.log(movies)
    // useEffect(()=>{
    //     axios.get(API_URL + API_TREND_URL + API_KEY).then((response)=>{
    //         //console.log(response.data.results)
    //         setMovies(response.data.results)
    //     })
        
    // },[])

    return (
        <section id={props.Type} className='carrusel'>
            <h2>Movie Trends</h2>
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