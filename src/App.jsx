import React, { useState, useContext } from "react";
import "./App.css";
import { Header } from "./components/header";

import { GenreList } from "./components/genreList";
import { CategoryDetail } from "./components/categoryDetail";
import { MainContext, MainProvider } from "./context/mainContext";
import { SearchDetail } from "./components/searchDetail";
import { MovieDetail } from "./components/movieDetail";
import { MovieTrends } from "./components/movieTrends";

function App() {
	

	return (
		<MainProvider>
			<div className="App">

				<Header />
				<MovieTrends Type="Movie Trends" />
				
				<GenreList />
				
				
				<CategoryDetail />


        		<SearchDetail/>

				<MovieDetail/>
			</div>
		</MainProvider>
	);
}

export default App;
