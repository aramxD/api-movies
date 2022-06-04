import React from "react";

//truncate function
function truncate(string, limit){
    if(string.lenght <= limit){
        return string
    }else{
        return string.slice(0, limit)
    }
}


function MovieCard({imgURL, title, voteAverage} ) {

    return (
        
        <article>
            <img src={imgURL} alt={title} />
            <div className="articleTitle">
                <p>{truncate(title,30)}</p>
                <p>⭐ {voteAverage} / 10</p>
            </div>
        </article>

    )
}

export { MovieCard }