import { createSlice } from "@reduxjs/toolkit";
import { ITask } from "../Models/Tasks";
import { v4 as uuidv4 } from "uuid";

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
    },
    updateTask(state, action) {
      const updatedTask: ITask = action.payload;
      const index = state.tasks.findIndex((task) => task.id === updatedTask.id);
      state.tasks[index] = updatedTask;
    },
    deleteTask(state, action) {
      const id: string = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
  },
});

export const tasksActions = tasksSlice.actions;
export default tasksSlice;
