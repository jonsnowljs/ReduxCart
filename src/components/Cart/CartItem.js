import classes from './CartItem.module.css';
import {useDispatch} from 'react-redux'
import { cartAction } from '../../store/cartSlice';

const CartItem = (props) => {
  const dispatch = useDispatch()
  const { id, title, quantity, price } = props.item;
  const total = quantity * price;
  const decreaseHandler = () => {
    dispatch(cartAction.decrease(id));
  };

  const increaseHandler = () => {

    dispatch(cartAction.addToCart({key: id, id: id, title: title, quantity: 1, price: price} ));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseHandler}>-</button>
          <button onClick={increaseHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
