import React, { useContext } from "react";
import ReactDOM from 'react-dom'
import '../styles/searchDetail.css'

import { MovieCard } from "../elements/movieCard";
import { MainContext } from "../context/mainContext";






function SearchDetail({ children }) {
    const SuperContext = useContext(MainContext)
    const viewDetail = SuperContext
    const genreDetail = SuperContext.genreListView
    const filterMovies = SuperContext.filterMoviesGenre
    
	//console.log(SuperContext.openDetailView);
    const hiddeView = SuperContext.openDetailView
    
    let hide;
    if(hiddeView){
         hide = 'inactive'
    }else{
         hide = ''
    }
    return ReactDOM.createPortal(
        <section className={`categoryDetail ${hide}`}>
            
            {/* <div className="headerCategoryDetail">
            <span className="header-arrow" onClick={()=>{viewDetail.openDetailView ? viewDetail.setOpenDetailView(false):viewDetail.setOpenDetailView(true)}}>&lt;</span>
            <h2>({genreDetail[1]}) Movies</h2>
            </div>

            <div className="categoryDetailList">

                {filterMovies?.map((element)=>{
                    return(<MovieCard imgURL={`https://image.tmdb.org/t/p/w300${element.poster_path}`} title={element.title} key={element.id}/>)
                
                })}
                
                


            </div> */}
        <h1>soy el search detail :D</h1>


        </section>,
        document.getElementById('searchDetail')
    )
}

export { SearchDetail }