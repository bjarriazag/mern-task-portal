import React, { useContext } from 'react';
import ProjectContext from '../../../context/projects/project/project.context';

const FormTask = () => {
  // State context
  const projectContext = useContext(ProjectContext);
  const { currentProject } = projectContext;
  if (!currentProject) return null;
  // Functions
  const handleSubmit = (event) => {
    event.preventDefault();
    // Validations
    // Add task
    // Reset form
  };
  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            id="txtTaskName"
            name="taskName"
            className="input-text"
            placeholder="Task Name"
          />
        </div>
        <div className="contenedor-input">
          <input type="submit" className="btn btn-block btn-primario btn-submit" value="Add Task" />
        </div>
      </form>
    </div>
  );
};

export default FormTask;
