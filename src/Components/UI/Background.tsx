import { useSelector } from "react-redux";
import { RootState } from "../../Store";
import classes from "./Background.module.scss";

const Background: React.FC = () => {
  const colorScheme = useSelector(
    (state: RootState) => state.general.colorScheme
  );
  return (
    <ul
      className={
        classes.background +
        " " +
        classes["background--color-scheme-" + colorScheme]
      }
    >
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  );
};

export default Background;
