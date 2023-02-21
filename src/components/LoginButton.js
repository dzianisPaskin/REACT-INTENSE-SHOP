export const LoginButton = ({ openModal, buttonText }) => {
  return (
    <button className="login" onClick={openModal}>
      {buttonText}
    </button>
  );
};
