import {useSelector, useDispatch} from 'react-redux'
import {uiAction} from '../../store/uiSlice'
import classes from './CartButton.module.css';


const CartButton = () => {
  const dispatch = useDispatch();
  console.log(dispatch)
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const showCartHandler = () => {
    dispatch(uiAction.toggleCart())
  };
  
  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
