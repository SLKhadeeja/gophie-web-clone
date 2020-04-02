import {RECOMMEND, SEARCH_MOVIE, SEARCH_MOVIE_COMPLETED, RECOMMEND_COMPLETED, ERROR, SELECT_ENGINE} from "./actionTypes.js";

const initialState = {
    movies: [],
    isLoading: true,
    more: true,
    listIndex: 1,
    error: false,
    query: "",
    engine: "netnaija",
    page: 1
};


export default function getMovies(state = initialState, action){
    switch(action.type){
        case SEARCH_MOVIE:
            {
                return{
                    ...state,
                    isloading: true,
                    query: action.query
                }
            }

        case SEARCH_MOVIE_COMPLETED:
            {
                return{
                    ...state,
                    isloading: false,
                    movies: action.payload
                }
            }
        
        case RECOMMEND:
            {
                return{
                    ...state,
                    isLoading: true
                }
            }

        case RECOMMEND_COMPLETED:
            {
                return{
                    ...state,
                    isloading: false,
                    movies: action.payload
                }
            }

        case ERROR:
            {
                return{
                    ...state,
                    isloading: false,
                    error: true,
                    message: action.payload
                }
            }

        case SELECT_ENGINE:
            {
                return{
                    ...state, 
                    engine: action.payload
                }
            }

        default:
            return state
    }
}
