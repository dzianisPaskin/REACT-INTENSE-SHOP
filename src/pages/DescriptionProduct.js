import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../components/ProductCard';

export const DescriptionProduct = ({ products, onAdd, isLogout }) => {
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
