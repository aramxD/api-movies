import React, { useContext } from "react";
import { MainContext } from "../context/mainContext";

import '../styles/genreList.css'


 





function GenreList() {
    
    const {controlView, goToCategoryDetails, genreListValue, genreList, inactiveView} = useContext(MainContext)
    
    //console.log('vista home'+controlView.home)
    const openDetailView=(value)=>{
        goToCategoryDetails()
        genreListValue(value)
    }
 
    

    return (
        <section id="genreList" className={inactiveView(controlView.home)}>
        <h2 className="genreListTitle" >Categories</h2>
        <div className="genreList">
            
            
            {genreList?.genres?.map((genre)=>{
                return(                                                      
                    <div className="category-container" key={genre.id} 
                    onClick={()=>{openDetailView([genre.id, genre.name]) }}>
                        <h3 id={`id${genre.id}`} className="category-title">{genre.name}</h3>
                    </div>
                )
            })}

        </div>
        </section>
    )
}

export { GenreList }