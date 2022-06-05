import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "../styles/movieDetail.css";

import { MainContext } from "../context/mainContext";
import { Carrusel } from "./carrusel";

function MovieDetail() {
	const { detailMovieId, relatedMovies } = useContext(MainContext);

	//console.log(detailMovieId.genres)

	if (!detailMovieId) {
		return null;
	}

	return ReactDOM.createPortal(
		<section id="MovieDetail" className={`MovieDetail`}>
			<h2>Detail Movies</h2>

			{!detailMovieId && <p>asdfasdfasdf</p>}

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
					<a href={detailMovieId.homepage}>Homepage</a>

					<p>{detailMovieId.overview}</p>
					<div className="MovieGenres">
						{detailMovieId.genres?.map((element) => {
							return <p key={element.id}>{element.name}</p>;
						})}
					</div>
				</div>
			</div>
            <Carrusel Movies={relatedMovies}/>
		</section>,
		document.getElementById("movieDetail")
	);
}

export { MovieDetail };
