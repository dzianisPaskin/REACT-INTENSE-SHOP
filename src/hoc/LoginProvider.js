import { useState, createContext } from 'react';
export const LoginContext = createContext(null);

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [textShouldBeLoggedIn, setTextShouldBeLoggedIn] = useState(false);

  const changeLoggedInStatus = (value) => {
    setIsLoggedIn(value);
  };

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn,
        changeLoggedInStatus,
        textShouldBeLoggedIn,
        setTextShouldBeLoggedIn,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
