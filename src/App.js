import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import {
  Home,
  About,
  DescriptionProduct,
  NotFound,
  LoginProvider,
  CartProvider,
  CustomRoute,
  DataRequest
} from './pages/index';
import { Layout } from './components/Layout';
import { data } from './moc/data';
import { Modal } from './components/Modal';
import './App.css';

export const App = () => {
  const { productsInfo } = data;
  const [isShowModal, setIsShowModal] = useState(false);
  const showModal = () => {
    isShowModal ? setIsShowModal(false) : setIsShowModal(true);
  };
  const handleFormlogin = (isValid, isLogin) => {
    isValid
      ? setIsShowModal({
          ...showModal,
          isModal: false,
          isLogin: isLogin,
          isLogout: false,
        })
      : setIsShowModal({ ...showModal, isModal: false, isLogin: false });
  };

  const isValidProductId = (params) => {
    const productId = parseInt(params.id);
    if (isNaN(productId) || params.id !== productId.toString()) {
      return false; // the ID is not a valid number
    }
    if (params['*']) {
      return false; // there are extra characters after the ID
    }
    return true;
  };

  return (
    <>
      <LoginProvider>
        <CartProvider>
          {isShowModal && (
            <Modal showModal={showModal} onValidation={handleFormlogin} />
          )}
          <Routes>
            <Route path="/" element={<Layout showModal={showModal} />}>
              <Route index element={<Home products={productsInfo} />} />
              <Route path="about" element={<About />} />
              <Route
                path="description/:id"
                element={<DescriptionProduct products={productsInfo} />}
              />

              <Route
                path="description/:id*"
                element={
                  <CustomRoute
                    isValid={isValidProductId}
                    validElement={
                      <DescriptionProduct products={productsInfo} />
                    }
                    invalidElement={<NotFound />}
                  />
                }
              />
              <Route path="*" element={<NotFound />} />
              <Route path="data" element={<DataRequest />} />

            </Route>
          </Routes>
        </CartProvider>
      </LoginProvider>
    </>
  );
};
