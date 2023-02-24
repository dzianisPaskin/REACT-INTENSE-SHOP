import { useContext } from 'react';
import { LoginContext } from '../hoc/LoginProvider';

export const CartCount = ({ countItems }) => {
  const { isLoggedIn } = useContext(LoginContext);

  return (
    <>
      {isLoggedIn && (
        <div className="cart-wrap">
          <div className="count-text">
            Items in the cart:{' '}
            <span className="count-items">
              {countItems.countItem ? countItems.countItem : '0'}
            </span>
          </div>

          <div className="total-text">
            Total price:{' '}
            <span className="total-count">{countItems.totalPrice}</span>
          </div>
        </div>
      )}
    </>
  );
};
