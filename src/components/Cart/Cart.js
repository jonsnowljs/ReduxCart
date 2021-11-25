import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const isOpen = useSelector((state) => state.ui.isOpen);
  const items = useSelector(state => state.cart.items);

  const content = (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map(item => 
          <CartItem
            item={{ title: item.title, quantity: item.quantity, price: item.price }}
          />
        )}
      </ul>
    </Card>
  );

  return <Fragment>{isOpen && content}</Fragment>;
};

export default Cart;
