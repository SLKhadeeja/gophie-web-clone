import { RECOMMEND, SEARCH_MOVIE/*,DESCRIBE, DOWNLOAD*/} from "./actionTypes.js";

export const recommend = append => {
    return{
        type: RECOMMEND,
        value: append
    };
};

export const search_movie = (search_url) => {
    return{
        type: SEARCH_MOVIE,
        value: search_url
    };
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