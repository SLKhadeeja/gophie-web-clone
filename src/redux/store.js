import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import getMovies from "./reducer.js";

export default  createStore(
    getMovies,
    applyMiddleware(thunk)
    );