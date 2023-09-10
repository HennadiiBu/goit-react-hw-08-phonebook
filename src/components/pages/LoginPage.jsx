import { loginUser } from 'components/redux/operations';
import React from 'react';
import { useDispatch } from 'react-redux';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const email = event.currentTarget.elements.userEmail.value;
    const password = event.currentTarget.elements.userPassword.value;

    const formData = {
      email,
      password,
    };

    dispatch(loginUser(formData));
  };
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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

export default LoginPage;
