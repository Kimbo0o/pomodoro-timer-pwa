import TimerSelectBtn from "./TimerSelectBtn";
import classes from "./TimerSelectBtns.module.scss";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../Store/index";
import { timerActions } from "../../Store/timer-slice";
import { generalActions } from "../../Store/general-slice";

const TimerSelectBtns: React.FC = (props) => {
  const selectedTimer = useSelector(
    (state: RootState) => state.timer.selectedTimer
  );
  const dispatch = useAppDispatch();

  const handleWorkClick = () => {
    dispatch(timerActions.changeSelectedTimer(0));
    dispatch(generalActions.changeColorScheme(1));
  };
  const handleShortBreakClick = () => {
    dispatch(timerActions.changeSelectedTimer(1));
    dispatch(generalActions.changeColorScheme(2));
  };
  const handleLongBreakClick = () => {
    dispatch(timerActions.changeSelectedTimer(2));
    dispatch(generalActions.changeColorScheme(2));
  };

  return (
    <div className={classes.buttonpane}>
      <TimerSelectBtn
        title="Work"
        onClick={handleWorkClick}
        selected={selectedTimer === 0}
      ></TimerSelectBtn>
      <TimerSelectBtn
        title="Short Break"
        onClick={handleShortBreakClick}
        selected={selectedTimer === 1}
      ></TimerSelectBtn>
      <TimerSelectBtn
        title="Long break"
        onClick={handleLongBreakClick}
        selected={selectedTimer === 2}
      ></TimerSelectBtn>
    </div>
  );
};

export default TimerSelectBtns;
