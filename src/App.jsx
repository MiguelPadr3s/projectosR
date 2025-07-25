import { useState } from 'react'
import './App.css'
import Accordian from './components/accordian';
import RandomColor from './components/random-color';

function App() {
  return (
    <div className="App">
      {/* Accordian Component*/}
      {/* <Accordian/> */}
      {/* random colors */}
      <RandomColor/>
    </div>

  );
};

export default App;
