import React, { useContext } from "react";
import ReactDOM from 'react-dom'
import '../styles/searchDetail.css'

import { MovieCard } from "../elements/movieCard";
import { MainContext } from "../context/mainContext";
import { SearchBar } from "../elements/searchBar";






function SearchDetail({ children }) {
    const {controlView,
        inactiveView, 
        returnHome, 
        categoryDetails, 
        searchResults,  
        movieDetail,
        enreListView,
        searchMovies,
        openDetailView,
        setOpenDetailView} = useContext(MainContext)
    
    
    



    return ReactDOM.createPortal(
        <section id="SearchDetail" className={`searchDetail ${inactiveView(controlView.SResults)}`}>
            <h2>Search Movies</h2>
            <SearchBar/>

            <div className="headerSearchDetail">
            <span className="header-arrow" onClick={()=>{returnHome()}}>&lt;</span>
            <h2>Search Results</h2>
            </div>

            <div className="searchDetailList">

                {searchMovies?.map((element)=>{
                    return(
                    <MovieCard 
                    imgURL={`https://image.tmdb.org/t/p/w300${element.poster_path}`} 
                    title={element.title} 
                    key={element.id}
                    voteAverage={element.vote_average}
                    movieId={element.id}
                    />)
                
                })}
                
                


            </div>
        


        </section>,
        document.getElementById('searchDetail')
    )
}

export { SearchDetail }