import { Button, Container, TextField } from '@mui/material';
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
    <Container>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop:'20px'
        }}
      >
        <label>
          <TextField
            type="email"
            name="userEmail"
            placeholder="Enter your e-mail..."
            required
            label="E-mail"
          />
        </label>
        <label>
          <TextField
            type="password"
            name="userPassword"
            placeholder="Enter your password..."
            minLength={7}
            required
            label="Password"
          />
        </label>
        <Button type="submit" variant="contained">
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;
