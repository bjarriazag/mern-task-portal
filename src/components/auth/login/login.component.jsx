import React from 'react';

const handleLogin = (event) => {
  console.log(event);
};

const Login = () => {
  const title = 'Login';
  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>{title}</h1>
        <form>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="txtEmail"
              name="email"
              placeholder="Your email"
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
              onChange={handleLogin}
            />
          </div>
          <div className="campo-form">
            <input type="submit" className="btn btn-primario btn-block" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
