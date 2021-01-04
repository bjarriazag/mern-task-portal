import React from 'react';
import Sidebar from '../../layout/sidebar/sidebar.component';
import NavBar from '../../layout/navbar/navbar.component';

const Projects = () => (
  <div className="contenedor-app">
    <Sidebar />
    <div className="seccion-principal">
      <NavBar />
      <main>
        <div className="contenedor-tareas" />
      </main>
    </div>
  </div>
);

export default Projects;
