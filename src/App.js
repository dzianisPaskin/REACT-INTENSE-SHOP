import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Home, About, DescriptionProduct, NotFound, DataRequest } from './pages/index';
import { Layout } from './components/Layout';
import { data } from './components/data';
import { Modal } from './components/Modal';

import './App.css';

export const App = () => {
  const [cartItems, setCartItems] = useState({
    countItem: 0,
    totalPrice: 0,
  });
  const [showModal, setShowModal] = useState({
    modal: false,
    login: false,
    Logout: false,
    loginText: 'login',
  });

  const { productsInfo } = data;

  const onAdd = (product, count) => {
    const newTotalPrice = cartItems.totalPrice + product.price;
    const fixedPrice = newTotalPrice.toFixed(2);
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
  };

  const handleLoginButton = () => {
    showModal.modal
      ? setShowModal({ ...showModal, modal: false })
      : setShowModal({ ...showModal, modal: true });
    if (showModal.login) {
      setShowModal({
        ...showModal,
        modal: false,
        loginText: 'login',
        login: false,
        Logout: true,
      });

      setCartItems({ ...cartItems, countItem: 0, totalPrice: 0 });
    }
  };

  const handleFormlogin = (isValid, islogin) => {
    isValid
      ? setShowModal({
          ...showModal,
          modal: false,
          login: islogin,
          Logout: false,
          loginText: 'logout',
        })
      : setShowModal({ ...showModal, modal: false, login: false });
  };

  return (
    <>
      {showModal.modal && (
        <Modal
          showModal={showModal.modal}
          onClick={handleLoginButton}
          onValidation={handleFormlogin}
        />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <Layout
              countCartItems={cartItems}
              openModal={handleLoginButton}
              showModal={showModal.modal}
              loginText={showModal.login}
              buttonText={showModal.loginText}
              Logout={showModal.Logout}
            />
          }
        >
          <Route
            index
            element={
              <Home
                products={productsInfo}
                onAdd={onAdd}
                isLogout={showModal.Logout}
              />
            }
          />
          <Route
            path='/data'
            element={
              <DataRequest
            
              />
            }
          />
          <Route path="about" element={<About />} />
          <Route
            path="/description/:id"
            element={
              <DescriptionProduct
                itemsDescription={cartItems}
                onAdd={onAdd}
                products={productsInfo}
                isLogout={showModal.Logout}
              />
            }
          />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
