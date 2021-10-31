import Bubble from "../UI/Bubble";
import Frame from "../UI/Frame";
import classes from "./App.module.scss";
import Timer from "../Timer/Timer";
import Tasks from "../Tasks/Tasks";
import Background from "../UI/Background";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";

function App() {
  return (
    <div className={classes.app}>
      <div className={classes["content-wrap"]}>
        <Frame>
          <Timer></Timer>
        </Frame>
        <Frame>
          <Tasks></Tasks>
        </Frame>
      </div>
      <Background></Background>
    </div>
  );
}

export default App;
