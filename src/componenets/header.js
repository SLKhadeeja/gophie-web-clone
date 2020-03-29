import React, {Component} from "react";
import {connect} from "react-redux";
import {SearchIcon} from "./icons.js";
import "./css/App.css";
import { search_movie, recommend} from "../redux/actions.js";

class Header extends Component(){

    handleSearchChange = (e) =>{
        let searchItem = e.target.value.toLowerCase();
        let matches = this.state.movies.filter(movie => movie.Title.toLowerCase().includes(searchItem));

        if (searchItem.length === 0){
            this.props.recommend(false);
            this.setState({listIndex: 1});
            return;
        }

        if (matches.length >=1){
            this.setState({movies: matches});
            return;
        }
    }

    search = () => {
        this.setState({
            movies: [],
            error: false
        })
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
    null, {recommend, search_movie}
)(Header);