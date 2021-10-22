import Pomodoro from "./Pomodoro";
import StartStopBtn from "./StartStopBtn";
import classes from "./Timer.module.scss";
import TimerSelectBtns from "./TimerSelectBtns";

const Timer:React.FC = (props)=> {
    return <div className={classes.timer}>
        <TimerSelectBtns></TimerSelectBtns>
        <Pomodoro></Pomodoro>
        <StartStopBtn></StartStopBtn>
    </div>
}

export default Timer;