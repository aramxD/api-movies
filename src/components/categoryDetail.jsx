import React from "react";
import ReactDOM from 'react-dom'
import '../styles/categoryDetails.css'

import { MovieCard } from "../elements/movieCard";






function CategoryDetail({ children }) {



    return ReactDOM.createPortal(
        <section className="categoryDetail">
            {children}
            <div className="headerCategoryDetail">
            <span className="header-arrow">&lt;</span>
            <h2>Movies (Categories)</h2>
            </div>

            <div className="categoryDetailList">
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                


            </div>



        </section>,
        document.getElementById('categoryDetail')
    )
}

export { CategoryDetail }