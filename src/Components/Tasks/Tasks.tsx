import classes from "./Tasks.module.scss";
import { ITask } from "../../Models/Tasks";
import Task from "./Task";
import { RootState, useAppDispatch } from "../../Store";
import { useSelector } from "react-redux";

const Tasks: React.FC = (props) => {
  const dispatch = useAppDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const updateTaskHandler = (task: ITask) => {};

  const deleteTaskHandler = (task: ITask) => {};

  const addTaskHandler = (task: ITask) => {};

  return (
    <>
      <h1 className={classes.header}>Tasks</h1>
      <ul className={classes["tasks-list"]}>
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              inpTitle={task.title}
              inpChecked={task.checked}
              isNew={false}
              id={task.id}
              updateTask={updateTaskHandler}
              deleteTask={deleteTaskHandler}
            ></Task>
          );
        })}
        <Task isNew={true} addTask={addTaskHandler}></Task>
      </ul>
    </>
  );
};

export default Tasks;
