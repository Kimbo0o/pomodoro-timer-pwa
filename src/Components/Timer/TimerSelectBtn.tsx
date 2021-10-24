import React from "react";
import classes from "./TimerSelectBtn.module.scss";

const TimerSelectBtn: React.FC<{
  title: string;
  onClick: any;
  selected: boolean;
}> = (props) => {
  let classNames = classes["btn-timerselect"];
  if (props.selected) {
    classNames += " " + classes["btn-timerselect--selected"];
  }
  return (
    <button className={classNames} onClick={props.onClick}>
      {props.title}
    </button>
  );
};

export default TimerSelectBtn;
