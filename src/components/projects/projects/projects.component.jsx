import React from 'react';
import Sidebar from '../../layout/sidebar/sidebar.component';
import NavBar from '../../layout/navbar/navbar.component';
import FormTask from '../../tasks/form-task/form-task.component';
import TaskList from '../../tasks/task-list/task-list.component';

const Projects = () => (
  <div className="contenedor-app">
    <Sidebar />
    <div className="seccion-principal">
      <NavBar />
      <main>
        <FormTask />
        <div className="contenedor-tareas">
          <TaskList />
        </div>
      </main>
    </div>
  </div>
);

export default Projects;
