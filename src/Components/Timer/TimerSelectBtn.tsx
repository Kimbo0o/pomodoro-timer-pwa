import React from "react";
import classes from "./TimerSelectBtn.module.scss";

const TimerSelectBtn: React.FC<{title:string, onClick:any, selected:boolean}> = props=> {
    return <button className={classes["btn-timerselect"]} onClick={props.onClick}>{props.title}</button>
}

export default TimerSelectBtn