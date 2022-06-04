import React, { useContext } from "react";
import { MainContext } from "../context/mainContext";
import { useMovies } from "../hooks/moviesHook";
import '../styles/genreList.css'


 





function GenreList() {
    
    const SuperContext = useContext(MainContext)
    const genres = SuperContext.genreList
    const viewDetail = SuperContext
    

    return (
        <section id="genreList" className={SuperContext.inactiveView()}>
        <h2 className="genreListTitle" >Categories</h2>
        <div className="genreList">
            
            
            {genres?.genres?.map((genre)=>{
                return(                                                      
                    <div className="category-container" key={genre.id} 
                    onClick={()=>{viewDetail.openDetailView ? viewDetail.genreListValue([genre.id, genre.name]):viewDetail.genreListValue([genre.id, genre.name])}}>
                        <h3 id={`id${genre.id}`} className="category-title">{genre.name}</h3>
                    </div>
                )
            })}

        </div>
        </section>
    )
}

export { GenreList }