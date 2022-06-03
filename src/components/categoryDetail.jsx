import React, { useContext } from "react";
import ReactDOM from 'react-dom'
import '../styles/categoryDetails.css'

import { MovieCard } from "../elements/movieCard";
import { MainContext } from "../context/mainContext";






function CategoryDetail({ children }) {
    const SuperContext = useContext(MainContext)
    const viewDetail = SuperContext

    return ReactDOM.createPortal(
        <section className="categoryDetail">
            {children}
            <div className="headerCategoryDetail">
            <span className="header-arrow" onClick={()=>{viewDetail.openDetailView ? viewDetail.setOpenDetailView(false):viewDetail.setOpenDetailView(true)}}>&lt;</span>
            <h2>(Categories) Movies</h2>
            </div>

            <div className="categoryDetailList">
                {/* <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/> */}
                


            </div>



        </section>,
        document.getElementById('categoryDetail')
    )
}

export { CategoryDetail }