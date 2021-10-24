import React from "react";
import classes from "./Frame.module.scss";

const Frame: React.FC = (props) => {
  return <section className={classes.frame}>{props.children}</section>;
};

export default Frame;
