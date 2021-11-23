import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {}

const uiSlice = createSlice({
    name: "ui",
    initialState: initialUIState,
    reducers: {
        
    }
})

export const uiAction = uiSlice.actions
export default uiSlice.reducer

