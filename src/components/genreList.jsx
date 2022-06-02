import React, { useState, useEffect, useContext } from "react";
import { MainContext } from "../context/mainContext";
import { useMovies } from "../hooks/moviesHook";
import '../styles/genreList.css'



//The Movie DB API Link

const API_GENRE_URL = '/genre/movie/list?api_key='





function GenreList() {
    const [genres, setGenres] = useMovies(API_GENRE_URL)
     

    // async function getGenreMovies(API_URL, API_TYPE, API_KEY){
    //     const response = await fetch(API_URL+ API_TYPE+ API_KEY)
    //     const data = await response.json();
        
    //     setGenres(data.genres)
    // }

    // useEffect(()=>{
    //     getGenreMovies(API_URL, API_GENRE_URL, API_KEY)
    // },[])

//console.log(genres.genres)

    return (
        <><h2 className="genreListTitle" >Categories</h2>
        <div className="genreList">
            
            {/* <div className="category-container">
                <h3 id="id28" className="category-title">Romance</h3>
            </div> */}
            
            {genres?.genres?.map((genre)=>{
                return(
                    <div className="category-container" key={genre.id} >
                        <h3 id={`id${genre.id}`} className="category-title">{genre.name}</h3>
                    </div>
                )
            })}

        </div></>
    )
}

export { GenreList }