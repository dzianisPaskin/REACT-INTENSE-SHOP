import { useContext, useState, createContext } from 'react';
import { LoginContext } from './LoginProvider';

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const { isLoggedIn, setTextShouldBeLoggedIn } = useContext(LoginContext);
  const [cartItems, setCartItems] = useState({
    countItem: 0,
    totalPrice: 0,
  });

  const onAdd = (product, count) => {
    const newTotalPrice = cartItems.totalPrice + product.price;
    const fixedPrice = newTotalPrice.toFixed(2);
    if (isLoggedIn) {
      product &&
        setCartItems({
          ...cartItems,
          countItem: cartItems.countItem + 1,
          totalPrice: parseFloat(fixedPrice),
        });

      if (count) {
        const newTotalPrice = product.price * count + cartItems.totalPrice;
        const fixedPrice = newTotalPrice.toFixed(2);
        setCartItems({
          ...cartItems,
          countItem: cartItems.countItem + count,
          totalPrice: parseFloat(fixedPrice),
        });
      }
    }
    if (!isLoggedIn) {
      setTextShouldBeLoggedIn(true);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        onAdd,
        isLoggedIn,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
