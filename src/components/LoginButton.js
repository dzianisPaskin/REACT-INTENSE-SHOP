export const LoginButton = ({ openModal, isLogin }) => {
  return (
    <button className="login" onClick={openModal}>
      {isLogin ? 'Logout' : 'Login'}
    </button>
  );
};
