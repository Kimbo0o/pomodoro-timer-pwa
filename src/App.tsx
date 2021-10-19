import React from 'react';
import './App.css';
import Bubble from './Components/UI/Bubble';
import Frame from './Components/UI/Frame';

function App() {
  return (
    <div className="App">      
    <Frame>test</Frame>
    <Bubble top="-20px" left="-50px" degree={135} ></Bubble>
    <Bubble top="400px" right="-40px" degree={315} ></Bubble>
    <Bubble top="700px" left="-20px" degree={315} ></Bubble>
    </div>
  );
}

export default App;
