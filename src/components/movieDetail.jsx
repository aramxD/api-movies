import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "../styles/movieDetail.css";

import { MainContext } from "../context/mainContext";
import { Carrusel } from "../elements/carrusel";

function MovieDetail() {
	const {controlView, 
		returnHome, 
		goToMovieDetail,
		goToCategoryDetails, 
		detailMovieId, 
		relatedMovies, 
		genreListValue,
		inactiveView } = useContext(MainContext);
	
	//console.log(detailMovieId.genres)
	// const openDetailView=()=>{
    //     goToMovieDetail()
        
    // }
	const openCategorylist=(value)=>{
        goToCategoryDetails()
        genreListValue(value)
    }

	if (!detailMovieId) {
		return null;
	}

	return ReactDOM.createPortal(
		<section id="MovieDetail" className={`MovieDetail ${inactiveView(controlView.MDetail)}`}>
			

			

			<div className="headerMovieDetail">
				<span className="header-arrow" onClick={()=>{ returnHome() }}>&lt;</span>
				<h2> {detailMovieId.title}</h2>
			</div>

			<div className="MovieDetail">
				<div className="MovieDetail-header">
					<img
						src={`https://image.tmdb.org/t/p/w300${detailMovieId.poster_path}`}
						alt=""
					/>
					<div className="MovieDetail-stats">
						<p>Rating: </p>
						<p>{detailMovieId.vote_average} / 10</p>
						<p>Votes: </p>
						<p>{detailMovieId.vote_count}</p>
						<p>Release Date: </p>
						<p>{detailMovieId.release_date}</p>
						<p>Movie Status: </p>
						<p>{detailMovieId.status}</p>
					</div>
				</div>
				<div className="MovieDetail-body">
					<div className="MovieLink">
					<p>Link:</p>
					<a href={detailMovieId.homepage}>Homepage</a>
					</div>
					<div className="MovieInfo">
					<p>Overview</p>	
					<p>{detailMovieId.overview}</p>
					</div>
					<div className="MovieGenres">
						{detailMovieId.genres?.map((element) => {
							return <p 
							id={`id${element.id}`} 
							className="genre" 
							key={element.id}
							onClick={()=>{openCategorylist([element.id, element.name]) }}
							>{element.name}</p>;
						})}
					</div>
					
				</div>
			</div>
            <div className="RelatedMovies">
						<h3>Related Movies</h3>
						<Carrusel Movies={relatedMovies}/>
					</div>
		</section>,
		document.getElementById("movieDetail")
	);
}

export { MovieDetail };
