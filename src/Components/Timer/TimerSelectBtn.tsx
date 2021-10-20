import React from "react";
import classes from "./TimerSelectBtns.module.scss";

const TimerSelectBtn: React.FC<{title:string, onClick:any, selected:boolean}> = props=> {
    return <button className={classes["btn-timerselect"]}></button>
}

export default TimerSelectBtn