
import '../styles/carrusel.css'
import poster from '../assets/img/popeye_movie_poster.jpg'

function Carrusel (props){
    console.log(props.Type)
return(
<section id={props.Type} className='carrusel'>
    <h2>Movie Trends</h2>
    <div className="movieList">
    <article>
        <img src={poster} alt="soy un titulo" />
        <div className="articleTitle">
            <p>Soy el titulo de la pelicula</p>
            <p>⭐ 9/10 IMDb</p>
        </div>
        
    </article>
    <article>
        <img src={poster} alt="soy un titulo" />
        <div className="articleTitle">
            <p>Soy el titulo de la pelicula</p>
            <p>⭐ 9/10 IMDb</p>
        </div>
        
    </article>
    <article>
        <img src={poster} alt="soy un titulo" />
        <div className="articleTitle">
            <p>Soy el titulo de la pelicula</p>
            <p>⭐ 9/10 IMDb</p>
        </div>
        
    </article>
    <article>
        <img src={poster} alt="soy un titulo" />
        <div className="articleTitle">
            <p>Soy el titulo de la pelicula</p>
            <p>⭐ 9/10 IMDb</p>
        </div>
        
    </article>
    <article>
        <img src={poster} alt="soy un titulo" />
        <div className="articleTitle">
            <p>Soy el titulo de la pelicula</p>
            <p>⭐ 9/10 IMDb</p>
        </div>
        
    </article>
    <article>
        <img src={poster} alt="soy un titulo" />
        <div className="articleTitle">
            <p>Soy el titulo de la pelicula</p>
            <p>⭐ 9/10 IMDb</p>
        </div>
        
    </article>
    






    </div>
</section>
)
}

export {Carrusel}