import React, { useContext } from "react";
import ReactDOM from 'react-dom'
import '../styles/categoryDetails.css'

import { MovieCard } from "../elements/movieCard";
import { MainContext } from "../context/mainContext";






function CategoryDetail() {
    const {controlView, 
        inactiveView, 
        openDetailView, 
        returnHome, 
        genreListView, 
        filterMoviesGenre} = useContext(MainContext)

    const genreDetail = genreListView
    const filterMovies = filterMoviesGenre
    
	console.log('genre details '+filterMovies);
    
    
    
    return ReactDOM.createPortal(
        <section className={`categoryDetail ${inactiveView(controlView.CDetail)}`}>
            
            <div className="headerCategoryDetail">
            <span className="header-arrow" onClick={()=>{ returnHome() }}>&lt;</span>
            <h2>({genreDetail[1]}) Movies</h2>
            </div>

            <div className="categoryDetailList">

                {filterMovies?.map((element)=>{
                    return(<MovieCard 
                        imgURL={`https://image.tmdb.org/t/p/w300${element.poster_path}`} 
                        title={element.title} 
                        key={element.id} 
                        voteAverage={element.vote_average}
                        movieId={element.id}/>)
                
                })}
                
                


            </div>



        </section>,
        document.getElementById('categoryDetail')
    )
}

export { CategoryDetail }