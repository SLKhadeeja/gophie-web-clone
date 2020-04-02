import { RECOMMEND, 
        SEARCH_MOVIE,/*,DESCRIBE, DOWNLOAD*/
        RECOMMEND_COMPLETED,
        ERROR,
        SEARCH_MOVIE_COMPLETED
    } from "./actionTypes.js";

import axios from "axios";

const api =  "https://gophie.herokuapp.com/";

export const recommend = listIndex => {
    return (dispatch) => {
        dispatch({
            type: RECOMMEND
        })
        axios.get(api + "?list=" + {
            params:{
                listIndex: listIndex
            }
        })
        .then(res => {
            dispatch({
                type: RECOMMEND_COMPLETED,
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

export const search_movie = (query) => {
    return (dispatch) => {
        dispatch({
            type: SEARCH_MOVIE
        })
        axios.get(api + "?search=" + {
            params:{
                query: query
            }
        })
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