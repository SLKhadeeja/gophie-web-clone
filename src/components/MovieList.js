import React from "react";
import Movie from "./Movie"
import {connect} from "react-redux"

const mapStateToProps = (state) => {
    return { movies: state.movies }
  }
  

function MoviesPack({movies}){
    return movies.map(movie => {
        return <Movie /*key={movie.Index} data={movie}*/ />;
    });
}

// export default MoviesPack;
export default connect(mapStateToProps)(MoviesPack);