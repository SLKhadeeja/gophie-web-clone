import React, {Component} from "react";
import {RetryIcon} from "./icons";
import MovieList from "./MovieList";
import Loading from "./loader.js";
import {connect} from "react-redux";
import { search_movie, recommend} from "../redux/actions.js"

class MovieView extends Component{

    retry = () => {
        let searchItem = this.searchInput.current.value
        if (searchItem.length > 1){
            this.search_movie(searchItem)
        }else{
            this.recommend()
        }
    }

    render(){
        return(
            <div className="movies">
                <MovieList movies={this.movies} />

                {this.isLoading && !this.error && (<Loading />)}

                {this.error && (
                    <div className="error">
                        <p className="error-message">Sorry man................Deven broke something</p>
                        <button className="retry-btn" onClick={this.retry.bind(this)}>
                            <RetryIcon />
                            Try Again
                        </button>
                    </div>
                )
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { movies: state.movies, isLoading: state.isLoading, error: state.error }
  }

export default connect (
    mapStateToProps, {recommend, search_movie}
)(MovieView);