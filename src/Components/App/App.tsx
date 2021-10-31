import Frame from "../UI/Frame";
import classes from "./App.module.scss";
import Timer from "../Timer/Timer";
import Tasks from "../Tasks/Tasks";
import Background from "../UI/Background";
import { useAppDispatch } from "../../Store";
import { tasksActions } from "../../Store/tasks-slice";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  dispatch(tasksActions.loadTasksLocally());
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
};

export default App;
