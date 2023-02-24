import { useContext } from 'react';

import { LoginContext } from '../hoc/LoginProvider';

export const ButtonAdd = ({
  className,
  text,
  onAdd,
  product,
  count,
  ...props
}) => {
  const { textShouldBeLoggedIn } = useContext(LoginContext);

  return (
    <>
      {textShouldBeLoggedIn && (
        <span className="add-cart-text">
          To add an item to your cart, please login.
        </span>
      )}

      <button onClick={() => onAdd(product, count)} className={className}>
        {text}
      </button>
    </>
  );
};
