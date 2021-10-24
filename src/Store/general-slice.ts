import { createSlice } from "@reduxjs/toolkit";

const generalSlice = createSlice({
    name: "general",
    initialState: {
        colorScheme: 1
    },
    reducers: {
        changeColorScheme(state,action){
            state.colorScheme = action.payload;
        }
    }
})

export const generalActions = generalSlice.actions;
export default generalSlice;