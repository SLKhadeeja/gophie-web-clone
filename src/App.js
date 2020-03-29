import React from "react";
import {Header} from "./componenets/header.js";
import {MovieView} from "./componenets/movieView.js";

export default function App(){
  return(
   <div>
     <Header />
     <MovieView />
   </div>
  )
}