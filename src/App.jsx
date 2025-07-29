import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import LoadMoreData from "./components/load-more-data";
import SearchAutocomplete from "./components/Search-Autocomplete-with-API";
import Weather from "./components/Weather-folder/weather";

function App() {
  return (
    <div className="App">
      {/* Accordian Component*/}
      {/* <Accordian/> */}

      {/* random colors */}
      {/* <RandomColor/> */}

      {/* star rating component */}
      {/* <StarRating noOfStars={10}/> */}

      {/* Loading more data */}
      {/* <LoadMoreData/> */}

      {/* Search Autocomplete with API */}
      {/* <SearchAutocomplete/> */}

      {/* Weather */}
      <div className="Weather-container"><Weather /></div>
    </div>
  );
}

export default App;
