import React from 'react';
import Bubble from './Components/UI/Bubble';
import Frame from './Components/UI/Frame';
import classes from "./App.module.scss";

function App() {
  return (
    <div className={classes.App}>      
      <div className={classes["main-container"]}>
        <Frame>test</Frame>
        <Bubble top="-20px" left="-50px" degree={135} ></Bubble>
        <Bubble top="400px" right="-40px" degree={315} ></Bubble>
        <Bubble top="700px" left="-20px" degree={315} ></Bubble>
      </div>    
    </div>
  );
}

export default App;
