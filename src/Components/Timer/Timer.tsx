import classes from "./Timer.module.scss";
import TimerSelectBtns from "./TimerSelectBtns";

const Timer:React.FC = (props)=> {
    return <div className={classes.timer}>
        <TimerSelectBtns></TimerSelectBtns>
    </div>
}

export default Timer;