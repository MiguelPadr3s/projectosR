import { useState } from 'react'
import './App.css'
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import LoadMoreData from './components/load-more-data';

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
      <LoadMoreData/>

    </div>

  );
};

export default App;
