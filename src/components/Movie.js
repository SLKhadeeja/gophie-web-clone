import React, {Component} from "react";
import {DownloadIcon} from "./icons";
import {connect} from "react-redux";
import "../css/movie.css";

class Movie extends Component {
    render(){
        const{CoverPhotoLink, DownloadLink, size, Title} = this.props.data;
        return(
            <div className="movie">
                <div className="cover-image">
                    <img src={CoverPhotoLink} alt="" />
                    <a className="dButton" href={DownloadLink}>
                        <DownloadIcon />
                    </a>
                </div>
                <div className="description">
                    <p className="title"> {Title} </p>
                    <p className="size"> {size}</p>
                </div>
            </div>
        );
    }
}

export default connect()(Movie);