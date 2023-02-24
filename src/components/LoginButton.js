import { useContext } from 'react';
import { LoginContext } from '../hoc/LoginProvider';

export const LoginButton = ({ showModal }) => {
  const {
    isLoggedIn,
    changeLoggedInStatus,

    setTextShouldBeLoggedIn,
  } = useContext(LoginContext);

  const logoutButton = () => {
    isLoggedIn && changeLoggedInStatus();
    setTextShouldBeLoggedIn(false);
  };

  return (
    <>
      <button className="login" onClick={isLoggedIn ? logoutButton : showModal}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </>
  );
};
