import { React, useContext } from 'react';
import { Product } from '../components/ProductCard';
import { CartContext } from '../hoc/CartProvider';

export const Home = ({ products }) => {
  const { onAdd } = useContext(CartContext);

  return (
    <div className="homeWrap">
      <h1 className="headerText">
        Keep your feline fit and happy with these 6 great toys
      </h1>
      <div className="productWrap">
        {products.map((product) => (
          <Product
            product={product}
            onAdd={onAdd}
            key={product.id}
            id={product.id}
            productName={product.productName}
            src={`${product.src}`}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};
