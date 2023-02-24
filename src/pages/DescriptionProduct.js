import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../components/ProductCard';
import { CartContext } from '../hoc/CartProvider';

export const DescriptionProduct = ({ products, isLogout }) => {
  const {onAdd} = useContext(CartContext)
  const [count, setCount] = useState(1);

  const decrement = () => {
    count > 1 && setCount(count - 1);
  };
  const increment = () => {
    setCount(count + 1);
  };

  const { id } = useParams();
  const info = products[id];

  return (
    <Product
      onAdd={onAdd}
      className="product-item product-description"
      src={info.src}
      productName={info.productName}
      price={info.price}
      id={info.id}
      description={info.description}
      product={info}
      showDescription={true}
      count={count}
      decrement={decrement}
      increment={increment}
      Logout={isLogout}
    />
  );
};
