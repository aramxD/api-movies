import React, { useContext } from "react";
import { MainContext } from "../context/mainContext";

import '../styles/genreList.css'


 





function GenreList() {
    
    const {openDetailView, genreListValue, genreList, inactiveView} = useContext(MainContext)
    const genres = genreList
    
    

    return (
        <section id="genreList" className={inactiveView()}>
        <h2 className="genreListTitle" >Categories</h2>
        <div className="genreList">
            
            
            {genres?.genres?.map((genre)=>{
                return(                                                      
                    <div className="category-container" key={genre.id} 
                    onClick={()=>{openDetailView ? genreListValue([genre.id, genre.name]):genreListValue([genre.id, genre.name])}}>
                        <h3 id={`id${genre.id}`} className="category-title">{genre.name}</h3>
                    </div>
                )
            })}

        </div>
        </section>
    )
}

export { GenreList }