import React, { useState } from 'react';
import { user } from '../moc/data';
import { useNavigate } from 'react-router-dom';

export const Modal = ({ onClick, onValidation }) => {
  const [userData, setUserData] = useState({
    name: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const { name, password } = user;
  const navigate = useNavigate();

  function validateName(inputName) {
    return inputName === name;
  }
  const validatePassword = (inputPassowrd) => {
    return inputPassowrd === password;
  };

  const validateForm = (inputName, inputPassowrd) => {
    const errors = {};
    const isValidName = !validateName(inputName);
    const isValidPassword = !validatePassword(inputPassowrd);

    isValidName && (errors.name = 'Incorrect name');
    isValidPassword && (errors.password = 'Incorrect password');

    return errors;
  };

  const buttonReset = () => {
    setUserData('');
    setErrors('');
    onValidation(false);
  };

  function handleSubmit(e) {
    const userName = userData.name;
    const userPassword = userData.password;
    const validationErrors = validateForm(userName, userPassword);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      navigate('');
      onValidation(true, true);
    }

    e.preventDefault();
  }
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Login</h2>

        <button onClick={onClick} className="close-button" />

        <form onSubmit={handleSubmit}>
          <label>
            name
            <input
              className="input-name"
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
              type="text"
              name="name"
              placeholder="Enter name"
            />
            <span className="name-error">{errors.name}</span>
          </label>
          <label>
            password
            <input
              className="input-password"
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              type="password"
              name="password"
              placeholder="Enter password"
            />
            <span className="password-error">{errors.password}</span>
          </label>
          <div className="form-buttons">
            <button
              className="button-reset"
              type="button"
              onClick={buttonReset}
            >
              Cancel
            </button>
            <button className="button-login">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};
