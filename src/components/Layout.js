import { Outlet, NavLink } from 'react-router-dom';
import { CartCount } from './CartCount';
import { LoginButton } from './LoginButton';

export const Layout = ({ countCartItems, openModal, showModal, buttonText, isLogin }) => {
  
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
        {!isLogin && (
          <CartCount countItems={countCartItems} isLogin={isLogin} />
        )}

        <LoginButton
          showModal={showModal}
          openModal={openModal}
          isLogin={isLogin}
        />
      </header>

      <div>
        <Outlet />
      </div>
    </>
  );
};
