import ProductItem from './ProductItem';
import classes from './Products.module.css';

const PRODUCTS = [
  {
    key: '1',
    id: '1',
    title: 'Test',
    price: 6,
    description: 'This is a first product - amazing!',
  },
  {
    key: '2',
    id: '2',
    title: 'Sushi',
    price: 20,
    description: 'This is a second product - amazing!',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {PRODUCTS.map(product => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
