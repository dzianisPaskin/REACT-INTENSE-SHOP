import { Outlet, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartCount } from './CartCount';
import { LoginButton } from './LoginButton';
import { CartContext } from '../hoc/CartProvider';

export const Layout = ({ showModal }) => {
  const { cartItems } = useContext(CartContext);

  const activeStyles = {
    color: 'white',
  };
  const styleLink = ({ isActive }) => (isActive ? activeStyles : undefined);

  return (
    <>
      <header className="App-header">
        <div className="navlink-container">
          <NavLink to="/" style={styleLink}>
            Home
          </NavLink>
          <NavLink to="about" style={styleLink}>
            About
          </NavLink>
        </div>
        <CartCount countItems={cartItems} />

        <LoginButton showModal={showModal} />
      </header>

      <div>
        <Outlet />
      </div>
    </>
  );
};
