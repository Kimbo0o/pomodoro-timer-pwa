import { createSlice } from "@reduxjs/toolkit";
import { ITask } from "../Models/Tasks";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [] as ITask[],
  },
  reducers: {
    addTask(state, action) {
      state.tasks.push(action.payload);
    },
  },
});

export const tasksActions = tasksSlice.actions;
export default tasksSlice;
