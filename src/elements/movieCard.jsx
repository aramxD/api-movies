import React, { useContext } from "react";
import { MainContext } from "../context/mainContext";





//truncate function
function truncate(string, limit){
    if(string.lenght <= limit){
        return string
    }else{
        return string.slice(0, limit)
    }
}



function MovieCard({imgURL, title, movieId, voteAverage} ) {
    //Super Context
    const { SearchMovieById} = useContext(MainContext)
     

    function onMovieClick(){
        //console.log('le diste click a la pelicula: ' +movieId )
        
        SearchMovieById(movieId)
    }


    return (
        
        <article onClick={()=>{onMovieClick()}}>
            <img src={imgURL} alt={title} />
            <div className="articleTitle">
                <p>{truncate(title,30)}</p>
                <p>⭐ {voteAverage} / 10</p>
            </div>
        </article>

    )
}

export { MovieCard }