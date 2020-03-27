import React from "react";
import Movie from "./Movie"

function MoviesPack({movies}){
    return movies.map(movie => {
        return <Movie />;
    });
}

export default MoviesPack;