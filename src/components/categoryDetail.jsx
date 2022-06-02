import React from "react";
import ReactDOM from 'react-dom'
import '../styles/categoryDetails.css'
import poster from '../assets/img/popeye_movie_poster.jpg'
function CategoryDetail({ children }) {



    return ReactDOM.createPortal(
        <section className="categoryDetail">
            {children}
            <div className="headerCategoryDetail">
            <span className="header-arrow">&lt;</span>
            <h2>Movies (Categories)</h2>
            </div>

            <div className="categoryDetailList">

                <article>
                    <div className="articleTitle">
                        <p>Soy el titulo de la pelicula</p>
                    </div>
                    <img src={poster} alt="soy un titulo" />
                </article>
                <article>
                    <div className="articleTitle">
                        <p>Soy el titulo de la pelicula</p>
                    </div>
                    <img src={poster} alt="soy un titulo" />
                </article>
                <article>
                    <div className="articleTitle">
                        <p>Soy el titulo de la pelicula</p>
                    </div>
                    <img src={poster} alt="soy un titulo" />
                </article>
                <article>
                    <div className="articleTitle">
                        <p>Soy el titulo de la pelicula</p>
                    </div>
                    <img src={poster} alt="soy un titulo" />
                </article>
                <article>
                    <div className="articleTitle">
                        <p>Soy el titulo de la pelicula</p>
                    </div>
                    <img src={poster} alt="soy un titulo" />
                </article>
                <article>
                    <div className="articleTitle">
                        <p>Soy el titulo de la pelicula</p>
                    </div>
                    <img src={poster} alt="soy un titulo" />
                </article>
                <article>
                    <div className="articleTitle">
                        <p>Soy el titulo de la pelicula</p>
                    </div>
                    <img src={poster} alt="soy un titulo" />
                </article>


            </div>



        </section>,
        document.getElementById('categoryDetail')
    )
}

export { CategoryDetail }