import React, { useState, useContext } from 'react';
import './App.css';
import { Header } from './components/header';
import { Carrusel } from './components/carrusel';
import { GenreList } from './components/genreList';
import { CategoryDetail } from './components/categoryDetail';
import { MainContext, MainProvider } from './context/mainContext';

function App() {
  const SuperContext = useContext(MainContext)
    //console.log(SuperContext)
  


  return (
    <MainProvider>
    <div className="App">
      
        
      
        <Header />  
          <Carrusel Type='trendingPreview' />
           
          <GenreList />
      

      
        <CategoryDetail />
      

      
    </div>
    </MainProvider>
  );
}

export default App;
