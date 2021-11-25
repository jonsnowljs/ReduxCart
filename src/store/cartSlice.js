import { createSlice } from "@reduxjs/toolkit";
// { title: 'Test Item', quantity: 3, total: 18, price: 6 }
const initialCartState ={
    items: []
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
        state.items = state.items[action.payload - 1].quantity--;
      },
      addToCart(state,action) {
        state.items = [...state.items, action.payload]
        console.log(state.items)
      }
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
