import { createSlice } from "@reduxjs/toolkit";
// { title: 'Test Item', quantity: 3, total: 18, price: 6 }
const initialCartState ={
    items: [],
    totalQuantity: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
      increase(state,action) {
        console.log(action.payload);
        console.log("teste")
        state.items = state.items[action.payload -1].quantity++
      },
      decrease(state,action) {
        const id = action.payload;
        const existingItem = state.items.find(item => item.id === id)
        state.totalQuantity--;
        if (existingItem.quantity === 1) {
          state.items = state.items.filter( item => item.id !== id)
        }else {
          existingItem.quantity--
        }

      },
      addToCart(state,action) {
        const newItem = action.payload;
        const existingItem = state.items.find(item => item.id === newItem.id)

        console.log(existingItem);
        state.totalQuantity++;
        if (!existingItem) {
          console.log("test2")
          state.items = [...state.items, newItem];   
          console.log(state.items);

        } else {
          existingItem.quantity++;
        }

      }
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
