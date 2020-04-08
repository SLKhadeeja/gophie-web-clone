import React from "react";
import Movie from "./Movie.js";
import uuid from "react-uuid";


function MoviesPack({movies}){
    return movies.filter(movie => {
        return movie.CoverPhotoLink !== "";
    }).map(movie => {
        return <Movie key={uuid()} data={movie} />;
    });
}

export default MoviesPack;