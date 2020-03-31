import {RECOMMEND, SEARCH_MOVIE} from "./actionTypes.js";
import axios from "axios"

const initialState = {
    api: "https://gophie.herokuapp.com/",
    movies: [],
    isLoading: true,
    more: true,
    listIndex: 1,
    error: false
};


export default function getMovies(state = initialState, action){
    switch(action.type){
        case SEARCH_MOVIE:
            const query = action.value;
            return () => {
                axios
                .get(state.api + "?search=" + query.replace(" ", "+"))
                .then(res => {
                    state.movies = res.data})
                .catch(e => {
                    alert(e);
                    state.error = true;
                })

            }
        case RECOMMEND:
            const append = action.value
            return () => {
                axios
                .get(`${state.api}?list=${state.listIndex}`)
                .then(res => {
                    const movies = res.data;
                    let newIndex = state.index;
                    let newmovies = movies.map((element) => {
                        element.Index = element.Index + (newIndex - 1) * 14;
                        return element;
                      });
                    newIndex++
                    state.isLoading = false;
                    state.listIndex = newIndex;
                    state.movies = append ? [...this.state.movies, ...newmovies] : newmovies
                })
                .catch(e => {
                    alert(e);
                    state.error = true;
                })
            }
        default:
            return state
    }
}
