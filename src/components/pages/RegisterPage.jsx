import { registerUser } from 'components/redux/operations';
import React from 'react';
import { useDispatch } from 'react-redux';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const name = event.currentTarget.elements.userName.value;
    const email = event.currentTarget.elements.userEmail.value;
    const password = event.currentTarget.elements.userPassword.value;

    const formData = {
      name,
      email,
      password,
    };

    dispatch(registerUser(formData));
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="userName"
            placeholder="Enter your name..."
            required
          />
        </label>
        <label>
          <input
            type="email"
            name="userEmail"
            placeholder="Enter your e-mail..."
            required
          />
        </label>
        <label>
          <input
            type="password"
            name="userPassword"
            placeholder="Enter your password..."
            minLength={7}
            required
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterPage;
