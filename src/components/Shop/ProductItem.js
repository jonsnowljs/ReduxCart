import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {useDispatch, useSelector} from 'react-redux'
import {cartAction} from '../../store/cartSlice'

const ProductItem = (props) => {
  const {id, title, price, description } = props;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    const item = { key: id, id: id, title: title, quantity: 1, price: price };
    console.log(item);
    dispatch(cartAction.addToCart(item))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
