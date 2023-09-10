import React from 'react';

const RegisterPage = () => {



const handleSubmit = (event) => {
  event.preventDefault();
  const name = event.currentTarget.elements.userName.value;
  const email = event.currentTarget.elements.userEmail.value;
  const password = event.currentTarget.elements.userPassword.value;

  console.log(name,email,  password)
}

  return (
    <h1>
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
    </h1>
  );
};

export default RegisterPage;
