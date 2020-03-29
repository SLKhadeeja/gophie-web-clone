import React, {Component} from "react"
import {connect} from "react-redux"

class Loading extends Component{
    render(){
        return(
            <div>
                <img id="loadinng" alt="" src="./gear.png" />
            </div>
        );
    }
}

export default connect(null)(Loading);