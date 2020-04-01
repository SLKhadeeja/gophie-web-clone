import React from "react";
import Movie from "./Movie.js"


function MoviesPack({movies}){
    return movies.map(movie => {
        return <Movie key={movie.Index} data={movie} />;
    });
}

export default MoviesPack;