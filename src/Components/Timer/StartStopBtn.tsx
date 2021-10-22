import classes from "./StartStopBtn.module.scss";

const StartStopBtn:React.FC = (props) => {
    let classNames = classes["btn-start-stop"];
    let text = "START"; 
    //TODO: Change Button Text and class based on app state
    return<div className={classes.wrap}>
        <button className={classNames}>{text}</button>
    </div>    
}

export default StartStopBtn;