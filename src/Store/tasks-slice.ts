import { createSlice } from "@reduxjs/toolkit";
import { ITask } from "../Models/Tasks";
import { v4 as uuidv4 } from "uuid";

const saveTasksLocally = (tasks: ITask[]): void => {
  window.localStorage.setItem("tasks", JSON.stringify(tasks));
};

const loadTasksLocally = (): ITask[] => {
  const tasksString = window.localStorage.getItem("tasks");
  return tasksString ? JSON.parse(tasksString) : [];
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [] as ITask[],
  },
  reducers: {
    addNewTask(state, action) {
      const title: string = action.payload;
      state.tasks.push({
        id: uuidv4(),
        checked: false,
        title,
      });
      saveTasksLocally(state.tasks);
    },
    updateTask(state, action) {
      const updatedTask: ITask = action.payload;
      const index = state.tasks.findIndex((task) => task.id === updatedTask.id);
      state.tasks[index] = updatedTask;
      saveTasksLocally(state.tasks);
    },
    deleteTask(state, action) {
      const id: string = action.payload;
      const newTasks = state.tasks.filter((task) => task.id !== id);
      saveTasksLocally(newTasks);
      state.tasks = newTasks;
    },
    loadTasksLocally(state) {
      state.tasks = loadTasksLocally();
    },
  },
});

export const tasksActions = tasksSlice.actions;
export default tasksSlice;
