import React, {Component} from "react";
import {connect} from "react-redux";
import {SearchIcon} from "./icons.js";
import "../css/App.css";
import { search_movie, recommend, select_engine} from "../redux/actions.js";

function mapStateToProps(state) {
    return { movies: state.movies, engine: state.engine, page: state.page,/*listIndex: state.listIndex,*/ error: state.error, more: state.more}
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
            this.props.recommend(this.props.engine, this.props.page);
            return;
        }

        if (matches.length >=1){
            this.movies = matches;
            return;
        }
        // this.props.search_movie(searchItem)
    }

    search = () => {
        let searchItem = this.searchInput.current.value;
        this.props.search_movie(searchItem)
    }

    render(){
        return(
            <div className="App-header">
                <div className="search-bar">
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

                <div className="drop-down">
                <select className="drop-down-main">
                    <option hidden onChange={e => {return this.props.select_engine(e)}}>(optional)Engine</option>
                    <option value="netnaija">NetNaija</option>
                    <option value="fzmovies">FzMovies</option>
                    <option value="besthdmovies">BestHDMovies</option>
                </select>
                </div>

            </div>
            
        );
    }
    }

export default connect (
   mapStateToProps, {recommend, search_movie, select_engine}
)(Header);