import React, { Fragment } from 'react';

const NewProject = () => (
  <Fragment key="fragmentNewProject">
    <button
      type="button"
      id="btnNewProject"
      name="newProject"
      className="btn btn-block btn-primario"
    >
      New Project
    </button>
    <form className="formulario-nuevo-proyecto">
      <input
        type="text"
        id="txtName"
        name="name"
        className="input-text"
        placeholder="Project name"
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

export default NewProject;
