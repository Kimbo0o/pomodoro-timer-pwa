import TimerSelectBtn from "./TimerSelectBtn";
import classes from "./TimerSelectBtns.module.scss";

const TimerSelectBtns:React.FC = (props) => {
    const handleWorkClick=() => {

    }
    const handleShortBreakClick= ()=> {

    }
    const handleLongBreakClick= ()=> {
        
    }

    return<div className={classes.buttonpane}>
        <TimerSelectBtn title="Work" onClick={handleWorkClick} selected={false}></TimerSelectBtn>
        <TimerSelectBtn title="Short Break" onClick={handleShortBreakClick} selected={false}></TimerSelectBtn>
        <TimerSelectBtn title="Long break" onClick={handleLongBreakClick} selected={false}></TimerSelectBtn>
    </div>
}

export default TimerSelectBtns;