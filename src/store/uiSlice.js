import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {isOpen: false}

const uiSlice = createSlice({
    name: "ui",
    initialState: initialUIState,
    reducers: {
        toggleCart(state) {
            state.isOpen = !state.isOpen;
        }
    }
})

export const uiAction = uiSlice.actions
export default uiSlice.reducer

