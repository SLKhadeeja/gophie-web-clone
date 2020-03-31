import { createStore } from '@reduxjs/toolkit';
import getMovies from "./reducer.js";

export default  createStore(getMovies)