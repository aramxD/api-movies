import React, { useContext } from "react";
import ReactDOM from 'react-dom'
import '../styles/categoryDetails.css'

import { MovieCard } from "../elements/movieCard";
import { MainContext } from "../context/mainContext";






function CategoryDetail({ children }) {
    const SuperContext = useContext(MainContext)
    const viewDetail = SuperContext
    const genreDetail = SuperContext.genreListView
    const filterMovies = SuperContext.filterMoviesGenre
    console.log('asdfdasf')
    console.log(filterMovies)

    return ReactDOM.createPortal(
        <section className="categoryDetail">
            
            <div className="headerCategoryDetail">
            <span className="header-arrow" onClick={()=>{viewDetail.openDetailView ? viewDetail.setOpenDetailView(false):viewDetail.setOpenDetailView(true)}}>&lt;</span>
            <h2>({genreDetail[1]}) Movies</h2>
            </div>

            <div className="categoryDetailList">

                {filterMovies?.map((element)=>{
                    return(<MovieCard imgURL={`https://image.tmdb.org/t/p/w300${element.poster_path}`} title={element.title}/>)
                
                })}
                
                


            </div>



        </section>,
        document.getElementById('categoryDetail')
    )
}

export { CategoryDetail }