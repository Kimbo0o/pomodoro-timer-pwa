import { createSlice } from "@reduxjs/toolkit";

const timerSlice = createSlice({
    name:"timer",
    initialState: {
        selectedTimer: 0,
        isRunning: false
    },
    reducers: {
        changeSelectedTimer(state, action) {
            console.log(action)
            state.selectedTimer = action.payload;
        },
        startTimer(state, action) {
            state.isRunning = true;
        }, 
        stopTimer(state, action){
            state.isRunning = false;
        }
    }
})

export const timerActions = timerSlice.actions;
export default timerSlice;