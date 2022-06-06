import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "../styles/movieDetail.css";

import { MainContext } from "../context/mainContext";
import { Carrusel } from "./carrusel";

function MovieDetail() {
	const { detailMovieId, relatedMovies,openDetailView, genreListValue } = useContext(MainContext);
	
	//console.log(detailMovieId.genres)

	if (!detailMovieId) {
		return null;
	}

	return ReactDOM.createPortal(
		<section id="MovieDetail" className={`MovieDetail`}>
			

			

			<div className="headerMovieDetail">
				<span className="header-arrow">&lt;</span>
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
							onClick={()=>{openDetailView ? genreListValue([element.id, element.name]):genreListValue([element.id, element.name])}}
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
