import { createSlice } from '@reduxjs/toolkit';
import uiAction from './uiSlice';
// { title: 'Test Item', quantity: 3, total: 18, price: 6 }
const initialCartState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    decrease(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
    },
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      console.log(existingItem);
      state.totalQuantity++;
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

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiAction.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        'https://react-restaurant-26852-default-rtdb.firebaseio.com/cart.json',
        { method: 'PUT', body: JSON.stringify(cart) }
      );

      if (!response.ok) {
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiAction.showNotification({
          status: 'success',
          title: 'Success',
          message: 'Sent cart data successfully!',
        })
      );
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: 'error',
          title: 'Error',
          message: 'Sent cart data failed!',
        })
      );
    }
  };
};
export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
