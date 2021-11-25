import { createSlice } from '@reduxjs/toolkit';

// { title: 'Test Item', quantity: 3, total: 18, price: 6 }
const initialCartState = {
  items: [],
  totalQuantity: 0,
  changed: false
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    decrease(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
    },
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        console.log('test2');
        state.items = [...state.items, newItem];
        console.log(state.items);
      } else {
        existingItem.quantity++;
      }
    },
  },
});


export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
