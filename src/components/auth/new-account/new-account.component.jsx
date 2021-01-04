import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewAccount = () => {
  // States
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  // Data
  const { name, email, password, confirmPassword } = user;

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validations
    // Password characters
    // Confirm password
    // Actions
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="campo-form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="txtName"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="txtEmail"
              name="email"
              placeholder="Your email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="txtPassword"
              name="password"
              placeholder="Your password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              id="txtConfirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div className="campo-form">
            <input type="submit" className="btn btn-primario btn-block" value="Register" />
          </div>
        </form>
        <Link to="/" className="enlace-cuenta">
          Back to login
        </Link>
      </div>
    </div>
  );
};

export default NewAccount;
