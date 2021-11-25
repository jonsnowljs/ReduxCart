import { uiAction } from './uiSlice';
import { cartAction } from './cartSlice';

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://react-restaurant-26852-default-rtdb.firebaseio.com/cart.json'
      );

      if (!response.ok) {
        throw new Error('could not fetch cart data!');
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(cartAction.replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity
      }));
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
        {
          method: 'PUT',
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
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
