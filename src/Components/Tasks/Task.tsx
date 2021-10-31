import React, { useState } from "react";
import classes from "./Task.module.scss";
import trash from "../../assets/img/trash.svg";
import plus from "../../assets/img/plus.svg";
import check from "../../assets/img/check.svg";
import TextareaAutosize from "react-textarea-autosize";
import { RootState, useAppDispatch } from "../../Store";
import { tasksActions } from "../../Store/tasks-slice";
import { ITask } from "../../Models/Tasks";
import { useSelector } from "react-redux";

const Task: React.FC<{
  inpTitle?: string;
  inpChecked?: boolean;
  isNew: boolean;
  id?: string;
}> = (props) => {
  const [title, setTitle] = useState(props.inpTitle ? props.inpTitle : "");
  const [checked, setChecked] = useState(
    props.inpChecked ? props.inpChecked : false
  );
  const colorScheme = useSelector(
    (state: RootState) => state.general.colorScheme
  );
  const dispatch = useAppDispatch();

  const handleTextAreaInput = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addNewTask();
    }
  };

  const addNewTask = () => {
    if (title.length) {
      dispatch(tasksActions.addNewTask(title));
      setTitle("");
    }
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setTitle(value);
    if (!props.isNew) {
      const updatedTask: ITask = {
        id: props.id as string,
        checked,
        title: value,
      };
      dispatch(tasksActions.updateTask(updatedTask));
    }
  };

  const handleCheckbox = () => {
    setChecked(!checked);
    const updatedTask: ITask = { id: props.id as string, checked, title };
    dispatch(tasksActions.updateTask(updatedTask));
  };

  const handleDeleteClick = () => {
    dispatch(tasksActions.deleteTask(props.id));
  };

  let classNames = classes.task;
  if (colorScheme === 2) {
    classNames += " " + classes["task--alternative-color"];
  }
  return (
    <li className={classNames}>
      {!props.isNew && ( // existing tasks
        <>
          <div className={classes["cb-wrap"]}>
            <input
              type="checkbox"
              id={"cb" + props.id}
              value={checked.toString()}
              onChange={handleCheckbox}
            ></input>
            <label htmlFor={"cb" + props.id}>
              <div
                className={
                  classes["rounded-btn"] +
                  (checked ? " classes.highlighted" : "")
                }
              >
                {checked && ( // show checkmark only for checked value
                  <img src={check} alt="check" />
                )}
              </div>
            </label>
          </div>
          <div className={classes["task-title"]}>
            <TextareaAutosize
              className={classes.textarea}
              value={title}
              onChange={handleTitleChange}
            ></TextareaAutosize>
          </div>
          <div className={classes["function-wrap"]}>
            <button
              className={classes["delete-btn"]}
              onClick={handleDeleteClick}
            >
              <img className={classes["trash"]} src={trash} alt={trash} />
            </button>
          </div>
        </>
      )}
      {props.isNew && ( // new task
        <>
          <div className={classes["cb-wrap"]}></div>
          <div className={classes["task-title"]}>
            <TextareaAutosize
              className={classes.textarea}
              placeholder="Enter new task..."
              value={title}
              onChange={handleTitleChange}
              onKeyDown={handleTextAreaInput}
            ></TextareaAutosize>
          </div>
          <div className={classes["function-wrap"]}>
            <button className={classes["rounded-btn"]} onClick={addNewTask}>
              <img src={plus} alt="+"></img>
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default Task;
