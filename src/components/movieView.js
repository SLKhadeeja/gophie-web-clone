import React, {Component} from "react";
import {RetryIcon} from "./icons";
import MovieList from "./MovieList";
import Loading from "./loader.js";
import {connect} from "react-redux";
import debounce from "lodash.debounce";
import { search_movie, recommend} from "../redux/actions.js"
import "../css/movie.css";

class MovieView extends Component{

    
    handleScroll = (e) => {

        window.onscroll =  debounce(() => {
      
            if (this.props.isLoading || this.props.error) return;
      
            const windowHeight =
              "innerHeight" in window
                ? window.innerHeight
                : document.documentElement.offsetHeight;
            const body = document.body;
            const html = document.documentElement;
            const docHeight = Math.max(
              body.scrollHeight,
              body.offsetHeight,
              html.clientHeight,
              html.scrollHeight,
              html.offsetHeight
            );

            const windowBottom = windowHeight + window.pageYOffset;
            let query = this.props.query;

            if (windowBottom >= docHeight && query === "") {
                this.props.recommend(this.props.engine, this.props.page)
            }
        }, 100);
    }

    retry = () => {
        let searchItem = this.props.query
        if (searchItem.length > 1){
            this.props.search_movie(this.props.engine, searchItem)
        }else{
            this.props.recommend(this.props.engine, this.props.page)
        }
        console.log(this.props.error)
    }

    render(){
        return(
            <div className="movies" onScroll={this.handleScroll}>
                <MovieList movies={this.props.movies} />

                {this.props.isLoading && !this.props.error && (<Loading />)}

                {this.props.error && (
                    <div className="error">
                        <p className="error-message">Sorry man................Deven broke something</p>
                        <button className="retry-btn" onClick={this.retry()}>
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
    return { movies: state.movies, isLoading: state.isLoading, query: state.query, 
            engine: state.engine, page: state.page}
  }

export default connect (
    mapStateToProps, {recommend, search_movie}
)(MovieView);