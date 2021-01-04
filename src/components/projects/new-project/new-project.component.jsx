import React, { Fragment, useState } from 'react';

const NewProject = () => {
  // State
  const [project, setProject] = useState({
    projectName: '',
  });
  // Data
  const { projectName } = project;
  // Functions
  const handleChange = (event) => {
    setProject({
      ...project,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Validations
    // State
    // Form
  };

  return (
    <Fragment key="fragmentNewProject">
      <button
        type="button"
        id="btnNewProject"
        name="newProject"
        className="btn btn-block btn-primario"
      >
        New Project
      </button>
      <form onSubmit={handleSubmit} className="formulario-nuevo-proyecto">
        <input
          type="text"
          id="txtName"
          name="projectName"
          className="input-text"
          placeholder="Project name"
          value={projectName}
          onChange={handleChange}
        />
        <input
          type="submit"
          id="btnAddProject"
          name="addProject"
          className="btn btn-primario btn-block"
          value="Add Project"
        />
      </form>
    </Fragment>
  );
};

export default NewProject;
