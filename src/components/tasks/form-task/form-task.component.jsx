import React from 'react';

const FormTask = () => (
  <div className="formulario">
    <form>
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

export default FormTask;
