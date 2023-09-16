import { Button, Container, TextField } from '@mui/material';
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
    <Container>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <label>
          <TextField
            type="text"
            name="userName"
            placeholder="Enter your name..."
            required
            label="Name"
          />
        </label>
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
          Register
        </Button>
      </form>
    </Container>
  );
};

export default RegisterPage;
