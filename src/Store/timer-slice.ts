import { createSlice } from "@reduxjs/toolkit";
const timerSlice = createSlice({
    name:"timer",
    initialState: {
        selectedTimer: 0,
        colorScheme: 1,
        isRunning: false        
    },
    reducers: {
        changeSelectedTimer(state, action) {            
            state.selectedTimer = action.payload;     
        },
        toggleTimer(state, action) {
            state.isRunning = !state.isRunning;
        }        
    }
})

export const timerActions = timerSlice.actions;
export default timerSlice;