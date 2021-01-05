import React, { Fragment, useState, useContext } from 'react';
import ProjectContext from '../../../context/projects/project/project.context';

const NewProject = () => {
  // State context
  const projectContext = useContext(ProjectContext);
  const { showForm, handleShowForm, addProject } = projectContext;
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
    if (projectName === '') {
      return;
    }
    // State
    addProject(project);
    // Reset form
    setProject({ projectName: '' });
  };
  // Display form
  const handleForm = () => {
    handleShowForm();
  };

  return (
    <Fragment key="fragmentNewProject">
      <button
        type="button"
        id="btnNewProject"
        name="newProject"
        className="btn btn-block btn-primario"
        onClick={handleForm}
      >
        New Project
      </button>
      {showForm ? (
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
      ) : null}
    </Fragment>
  );
};

export default NewProject;
