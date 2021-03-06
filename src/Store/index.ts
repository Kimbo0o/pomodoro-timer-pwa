import { configureStore } from "@reduxjs/toolkit";
import timerSlice from "./timer-slice";
import { useDispatch } from "react-redux";
import generalSlice from "./general-slice";
import tasksSlice from "./tasks-slice";

const store = configureStore({
  reducer: {
    timer: timerSlice.reducer,
    general: generalSlice.reducer,
    tasks: tasksSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
