import {useSelector, useDispatch} from 'react-redux'
import {uiAction} from '../../store/uiSlice'
import classes from './CartButton.module.css';


const CartButton = () => {
  const dispatch = useDispatch();
  console.log(dispatch)
  const counter = useSelector(state => state.ui.counter)
  const showCartHandler = () => {
    dispatch(uiAction.toggleCart())
  };
  
  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{counter}</span>
    </button>
  );
};

export default CartButton;
