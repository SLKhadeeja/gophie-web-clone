import React from "react";
import Movie from "./Movie"
import {connect} from "react-redux"

function MoviesPack({movies}){
    return movies.map(movie => {
        return <Movie />;
    });
}

export default connect(null)(MoviesPack);