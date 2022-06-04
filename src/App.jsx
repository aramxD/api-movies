import React, { useState, useContext } from "react";
import "./App.css";
import { Header } from "./components/header";
import { Carrusel } from "./components/carrusel";
import { GenreList } from "./components/genreList";
import { CategoryDetail } from "./components/categoryDetail";
import { MainContext, MainProvider } from "./context/mainContext";
import { SearchDetail } from "./components/searchDetail";

function App() {
	

	return (
		<MainProvider>
			<div className="App">

				<Header />
				<Carrusel Type="trendingPreview" />

				<GenreList />

				<CategoryDetail />
        <SearchDetail/>
			</div>
		</MainProvider>
	);
}

export default App;
