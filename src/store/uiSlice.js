import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {isOpen: false, counter: 0}

const uiSlice = createSlice({
    name: "ui",
    initialState: initialUIState,
    reducers: {
        toggleCart(state) {
            state.isOpen = !state.isOpen;
        },
        increase(state) {
            state.counter++;
        }
    }
})

export const uiAction = uiSlice.actions
export default uiSlice.reducer

