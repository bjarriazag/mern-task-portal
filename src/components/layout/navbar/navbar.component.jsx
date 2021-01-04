import React from 'react';

const Navbar = () => (
  <header className="app-header">
    <p className="nombre-usuario">
      Hi, <span>Bryan Arriaza</span>
    </p>
    <nav className="nav-principal">
      <a href="#!">Logout</a>
    </nav>
  </header>
);

export default Navbar;
