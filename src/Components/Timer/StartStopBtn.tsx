import classes from "./StartStopBtn.module.scss";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../Store";
import { timerActions } from "../../Store/timer-slice";

const StartStopBtn: React.FC = (props) => {
  const isRunning = useSelector((state: RootState) => state.timer.isRunning);
  const colorScheme = useSelector(
    (state: RootState) => state.general.colorScheme
  );
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(timerActions.toggleTimer(null));
  };

  let classNames = classes["btn-start-stop"];
  if (colorScheme === 2) {
    classNames += " " + classes["btn-start-stop--alternative-color"];
  }
  let text = isRunning ? "STOP" : "START";

  //TODO: Change Button Text and class based on app state
  return (
    <div className={classes.wrap}>
      <button className={classNames} onClick={handleClick}>
        {text}
      </button>
    </div>
  );
};

export default StartStopBtn;
