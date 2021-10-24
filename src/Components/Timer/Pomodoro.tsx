import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../Store";
import classes from "./Pomodoro.module.scss";
import { timerActions } from "../../Store/timer-slice";
import { generalActions } from "../../Store/general-slice";

const Pomodoro: React.FC = (props) => {
  const dispatch = useAppDispatch();

  const timerMinutes = useSelector(
    (state: RootState) => state.timer.timerMinutes
  );
  const timerSeconds = useSelector(
    (state: RootState) => state.timer.timerSeconds
  );
  const isRunning = useSelector((state: RootState) => state.timer.isRunning);
  const selectedTimer = useSelector(
    (state: RootState) => state.timer.selectedTimer
  );

  const dateNumberToString = (number: number): string => {
    let val = number.toString();
    if (val.length < 2) {
      val = "0" + val;
    }
    return val;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      //check if timer is running
      if (isRunning) {
        //parse timer numbers
        let minutesNum = parseInt(timerMinutes);
        let secondsNum = parseInt(timerSeconds);
        if (secondsNum === 0 && minutesNum === 0) {
          //timer is at 00:00
          dispatch(timerActions.stopTimer);
          //change selected timer
          if (selectedTimer === 1 || selectedTimer === 2) {
            //work
            dispatch(timerActions.changeSelectedTimer(0));
            dispatch(generalActions.changeColorScheme(1));
          } else {
            //short break
            dispatch(timerActions.changeSelectedTimer(1));
            dispatch(generalActions.changeColorScheme(2));
          }
        } else {
          //countdown logic
          if (secondsNum === 0) {
            if (minutesNum > 0) {
              minutesNum--;
              secondsNum = 59;
            }
          } else {
            secondsNum--;
          }
          //convert new counter to strings
          dispatch(
            timerActions.setTimerMinutes(dateNumberToString(minutesNum))
          );
          dispatch(
            timerActions.setTimerSeconds(dateNumberToString(secondsNum))
          );
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className={classes.pomodoro}>
      {timerMinutes}:{timerSeconds}
    </div>
  );
};

export default Pomodoro;
