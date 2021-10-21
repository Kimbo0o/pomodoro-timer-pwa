import { configureStore } from "@reduxjs/toolkit";
import timerSlice from "./timer-slice";
import { useDispatch } from "react-redux";

const store = configureStore({
    reducer: {timer: timerSlice.reducer }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
