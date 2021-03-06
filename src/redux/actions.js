import { RECOMMEND, 
        SEARCH_MOVIE,/*,DESCRIBE, DOWNLOAD*/
        RECOMMEND_COMPLETED,
        ERROR,
        SEARCH_MOVIE_COMPLETED,
        SELECT_ENGINE
    } from "./actionTypes.js";

import axios from "axios";

const api =  "https://gophie.herokuapp.com/";

export const recommend = (engine, page)  => {
    return (dispatch) => {
        dispatch({
            type: RECOMMEND
        })
        axios.get(api + "list?page=" + page + "&engine=" + engine)
        .then(res => {
            dispatch({
                type: RECOMMEND_COMPLETED,
                payload: res.data
            })
            page++;
        })
        .catch((err) => {
            dispatch({
                type: ERROR,
                payload: err
            })
        })
    }
};

export const search_movie = (engine, query) => {
    return (dispatch) => {
        dispatch({
            type: SEARCH_MOVIE
        })
        axios.get(api + "search?engine=" + engine + "&query=" + query.replace(' ', '+'))
        .then(res => {
            dispatch({
                type: SEARCH_MOVIE_COMPLETED,
                payload: res.data
            })
        })
        .catch((err) => {
            dispatch({
                type: ERROR,
                payload: err
            })
        })
    }
};

export const select_engine = engine => {
    return{
        type: SELECT_ENGINE,
        payload: engine
    }
};
// export const describe = describe_object =>{
//     return{
//         type: DESCRIBE,
//         value: describe_object
//     };
// };

// export const download = download_url => {
//     return{
//         type: DOWNLOAD,
//         value: download_url
//     };
// };