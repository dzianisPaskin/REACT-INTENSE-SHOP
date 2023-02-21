import { CustomLink } from './CustomLink';
import { ButtonAdd } from './ButtonAdd';
import { Counter } from './Counter';
export const Product = ({
  src,
  productName,
  price,
  id,
  onAdd,
  product,
  description,
  className,
  showDescription = false,
  count,
  increment,
  decrement,
  Logout,
  ...props
}) => {
  return (
    <div className={className ? className : 'product-item'}>
      <div className="imgWrap">
        <img src={src} alt="product_image" />
      </div>

      <div className="product-list">
        {showDescription ? (
          <div className="product-name">{productName}</div>
        ) : (
          <CustomLink to={`description/${id}`} className="product-name">
            {productName}
          </CustomLink>
        )}

        {description ? description : null}
        <span className="price">${price}</span>
        {Logout && <span className='add-cart-text'>To add an item to your cart, please login.</span>}
        <ButtonAdd
          count={count}
          price={price}
          className="button addToCart"
          product={product}
          onAdd={onAdd}
          text="Add to Cart"
        />
        {showDescription ? (
          <Counter count={count} increment={increment} decrement={decrement} />
        ) : null}
      </div>
    </div>
  );
};
