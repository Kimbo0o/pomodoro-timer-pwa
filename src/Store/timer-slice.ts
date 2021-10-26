import { createSlice } from "@reduxjs/toolkit";

const timerSlice = createSlice({
  name: "timer",
  initialState: {
    selectedTimer: 0,
    colorScheme: 1,
    isRunning: false,
    timerMinutes: "25",
    timerSeconds: "00",
  },
  reducers: {
    changeSelectedTimer(state, action) {
      const selectedTimer = action.payload;
      state.selectedTimer = selectedTimer;
      switch (selectedTimer) {
        case 0:
          state.timerMinutes = "25";
          state.timerSeconds = "00";
          break;
        case 1:
          state.timerMinutes = "05";
          state.timerSeconds = "00";
          break;
        case 2:
          state.timerMinutes = "15";
          state.timerSeconds = "00";
          break;
      }
      state.isRunning = false;
    },
    toggleTimer(state) {
      state.isRunning = !state.isRunning;
    },
    stopTimer(state) {
      state.isRunning = false;
    },
    setTimerMinutes(state, action) {
      state.timerMinutes = action.payload;
    },
    setTimerSeconds(state, action) {
      state.timerSeconds = action.payload;
    },
  },
});

export const timerActions = timerSlice.actions;
export default timerSlice;
