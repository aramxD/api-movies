import React, { useState, useContext } from 'react';
import './App.css';
import { Header } from './components/header';
import { Carrusel } from './components/carrusel';
import { GenreList } from './components/genreList';
import { CategoryDetail } from './components/categoryDetail';
import { MainContext } from './context/mainContext';

function App() {
  const openDetailView = true


  return (
     
    <div className="App">
      
      {!!openDetailView && (
        <><Header />
          <Carrusel Type='trendingPreview' />
          <GenreList /></>
      )}

      {!openDetailView && (
        <CategoryDetail />
      )}

      
    </div> 
  );
}

export default App;
