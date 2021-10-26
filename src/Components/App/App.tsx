import Bubble from "../UI/Bubble";
import Frame from "../UI/Frame";
import classes from "./App.module.scss";
import Timer from "../Timer/Timer";
import Tasks from "../Tasks/Tasks";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";

function App() {
  const colorScheme = useSelector(
    (state: RootState) => state.general.colorScheme
  );
  let appClassNames =
    classes.app + " " + classes["app--color-scheme-" + colorScheme];
  return (
    <div className={appClassNames}>
      <div>
        <Frame>
          <Timer></Timer>
        </Frame>
        <Frame>
          <Tasks></Tasks>
        </Frame>
      </div>
      <Bubble top="-20px" left="-50px" degree={135}></Bubble>
      <Bubble top="400px" right="-40px" degree={315}></Bubble>
      <Bubble top="700px" left="-20px" degree={315}></Bubble>
    </div>
  );
}

export default App;
