import React from 'react';
import Bubble from '../UI/Bubble';
import Frame from '../UI/Frame';
import classes from "./App.module.scss";
import Timer from '../Timer/Timer';

function App() {
  return (
    <div className={classes.App}>      
      <div className={classes["main-container"]}>
        <Frame>
          <Timer></Timer>
        </Frame>
        <Bubble top="-20px" left="-50px" degree={135} ></Bubble>
        <Bubble top="400px" right="-40px" degree={315} ></Bubble>
        <Bubble top="700px" left="-20px" degree={315} ></Bubble>
      </div>    
    </div>
  );
}

export default App;
