import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  // States
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  // Data
  const { email, password } = user;

  const handleLogin = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validations
    // Actions
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="txtEmail"
              name="email"
              placeholder="Your email"
              value={email}
              onChange={handleLogin}
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
              onChange={handleLogin}
            />
          </div>
          <div className="campo-form">
            <input type="submit" className="btn btn-primario btn-block" value="Login" />
          </div>
        </form>
        <Link to="/new-account" className="enlace-cuenta">
          Create new account
        </Link>
      </div>
    </div>
  );
};

export default Login;
