import classes from "./Bubble.module.scss";
import variables from "../../assets/scss/_variables.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";

const Bubble: React.FC<{
  left?: string;
  right?: string;
  top: string;
  degree: number;
}> = (props) => {
  const colorScheme = useSelector(
    (state: RootState) => state.general.colorScheme
  );
  let color1, color2;
  switch (colorScheme) {
    case 1:
      color1 = variables.color_primary1;
      color2 = variables.color_primary2;
      break;
    case 2:
      color1 = variables.color_primary3;
      color2 = variables.color_primary4;
      break;
  }
  const styles: any = {
    top: props.top,
    background:
      "linear-gradient(" +
      props.degree +
      "deg, " +
      color1 +
      ", " +
      color2 +
      ")",
  };
  if (props.left) styles.left = props.left;
  if (props.right) styles.right = props.right;
  return <div className={classes.bubble} style={styles}></div>;
};

export default Bubble;
