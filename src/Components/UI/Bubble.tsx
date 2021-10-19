import classes from "./Bubble.module.scss";
import variables from "../../assets/scss/_variables.module.scss"

const Bubble:React.FC<{left?:string, right?: string, top:string, degree: number}> = (props) => {    
    const color1= variables.color_primary1;
    const color2 = variables.color_primary2;
    const styles: any = {
        top:props.top, 
        background:"linear-gradient("+props.degree+"deg, "+color1+", "+color2+")"
    }
    if(props.left) styles.left = props.left;
    if(props.right)styles.right = props.right;
    return <div className={classes.bubble} style={styles}></div>    
}

export default Bubble;