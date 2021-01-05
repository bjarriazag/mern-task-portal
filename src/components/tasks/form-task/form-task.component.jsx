import React, { useContext, useState } from 'react';
import ProjectContext from '../../../context/projects/project/project.context';
import TaskContext from '../../../context/tasks/task.context';

const FormTask = () => {
  // State context
  const projectContext = useContext(ProjectContext);
  const { currentProject } = projectContext;
  const taskContext = useContext(TaskContext);
  const { addTask } = taskContext;
  // State
  const [task, setTask] = useState({
    name: '',
  });
  const { name } = task;
  if (!currentProject) return null;
  // Functions
  const handleChange = (event) => {
    setTask({
      ...task,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Validations
    // Add task
    task.projectId = currentProject.id;
    task.status = false;
    addTask(task);
    // Reset form
  };
  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            id="txtTaskName"
            name="name"
            className="input-text"
            placeholder="Task Name"
            value={name}
            onChange={handleChange}
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
