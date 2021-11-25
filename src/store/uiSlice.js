import { createSlice } from '@reduxjs/toolkit';

const initialUIState = { isOpen: false, notification: null };

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUIState,
  reducers: {
    toggleCart(state) {
      state.isOpen = !state.isOpen;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiAction = uiSlice.actions;
export default uiSlice.reducer;
