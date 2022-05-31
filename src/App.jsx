
import './App.css';
import { Header } from './components/header';
import { Carrusel } from './components/carrusel';

function App() {

  return (
    <div className="App">
      <Header/>
      <Carrusel Type='trendingPreview' />
      <h1>holis :D</h1>
    </div>
  );
}

export default App;
