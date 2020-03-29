import React, {Component} from "react"
import {RetryIcon} from "./icons"
import MovieList from "./MovieList"
import Loading from "./loader.js"

export default class MovieView extends Component{

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
                <MovieList movies={this.state.movies} />

                {this.state.isLoading && !this.state.error && (<Loading />)}

                {this.state.error && (
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