import React, {Component} from "react";
import {connect} from "react-redux";
import {SearchIcon} from "./icons.js";
import "../css/App.css";
import { search_movie, recommend} from "../redux/actions.js";

function mapStateToProps(state) {
    return { movies: state.movies, listIndex: state.listIndex, error: state.error }
  }

class Header extends Component{
    constructor(props){
        super(props);
        this.searchInput = React.createRef();
    }

    handleSearchChange = (e) =>{
        let searchItem = e.target.value.toLowerCase();
        let matches = this.props.movies.filter(movie => movie.Title.toLowerCase().includes(searchItem));

        if (searchItem.length === 0){
            this.props.recommend(false);
            // this.setState({listIndex: 1});
            this.listIndex = 1;
            return;
        }

        if (matches.length >=1){
            // this.setState({movies: matches});
            this.movies = matches;
            return;
        }
        // this.props.search_movie(searchItem)
    }

    search = () => {
        // this.setState({
        //     movies: [],
        //     error: false
        // })
        this.movies = [];
        this.error = false;
        let searchItem = this.searchInput.current.value;
        this.props.search_movie(searchItem)
    }

    render(){
        return(
            <div className="App-header">
                <div className="name">
                <img className="logo" src="./Gopher.svg" alt=""/>
                <p className="go">GOPHIE</p>
                </div>

                <div className="input">
                <input className="search" type="text" ref = {this.searchInput} placeholder="watchu looking for?" 
                        onChange = {event => {return this.handleSearchChange(event)}} />
                </div>

                <div className="search-button">
                <button className="button-main" onClick = {this.search.bind(this)} >
                    <SearchIcon />
                </button>
                </div>
        </div>
        );
    }
    }

export default connect (
   mapStateToProps, {recommend, search_movie}
)(Header);