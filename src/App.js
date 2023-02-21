import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import {
  Home,
  About,
  DescriptionProduct,
  NotFound,
  DataRequest,
} from './pages/index';
import { Layout } from './components/Layout';
import { data } from './moc/data';
import { Modal } from './components/Modal';

import './App.css';

export const App = () => {
  const [cartItems, setCartItems] = useState({
    countItem: 0,
    totalPrice: 0,
  });
  const [showModal, setShowModal] = useState({
    isModal: false,
    isLogin: false,
    isLogout: false,
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
    showModal.isModal
      ? setShowModal({ ...showModal, isModal: false })
      : setShowModal({ ...showModal, isModal: true });
    if (showModal.isLogin) {
      setShowModal({
        ...showModal,
        isModal: false,

        isLogin: false,
        isLogout: true,
      });

      setCartItems({ ...cartItems, countItem: 0, totalPrice: 0 });
    }
  };

  const handleFormlogin = (isValid, isLogin) => {
    isValid
      ? setShowModal({
          ...showModal,
          isModal: false,
          isLogin: isLogin,
          isLogout: false,
        })
      : setShowModal({ ...showModal, isModal: false, isLogin: false });
  };

  return (
    <>
      {showModal.isModal && (
        <Modal onClick={handleLoginButton} onValidation={handleFormlogin} />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <Layout
              countCartItems={cartItems}
              openModal={handleLoginButton}
              showModal={showModal.isModal}
              isLogout={showModal.isLogout}
              isLogin={showModal.isLogin}
            />
          }
        >
          <Route
            index
            element={
              <Home
                products={productsInfo}
                onAdd={onAdd}
                isLogout={showModal.isLogout}
              />
            }
          />
          <Route path="/data" element={<DataRequest />} />
          <Route path="about" element={<About />} />
          <Route
            path="/description/:id"
            element={
              <DescriptionProduct
                itemsDescription={cartItems}
                onAdd={onAdd}
                products={productsInfo}
                isLogout={showModal.isLogout}
              />
            }
          />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
