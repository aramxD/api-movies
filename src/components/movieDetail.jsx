import React, { useContext } from "react";
import ReactDOM from 'react-dom'
import '../styles/searchDetail.css'


import { MainContext } from "../context/mainContext";







function MovieDetail() {
    const SuperContext = useContext(MainContext)
    
    

    
  


    return ReactDOM.createPortal(
        <section id="MovieDetail" className={`MovieDetail`}>
            <h2>Detail Movies</h2>
           
            <div className="headerSearchDetail">
            <span className="header-arrow" >&lt;</span>
            <h2>  Movies</h2>
            </div>

            <div className="MovieDetail">

                
                Aqui va toda la ifnormacion de la pelicula :D
                


            </div>
         


        </section>,
        document.getElementById('movieDetail')
    )
}

export { MovieDetail }