import React, { useContext, useState, useEffect } from 'react';
import ProjectContext from '../../../context/projects/project/project.context';
import TaskContext from '../../../context/tasks/task.context';

const FormTask = () => {
  // State context
  const projectContext = useContext(ProjectContext);
  const { currentProject } = projectContext;
  const taskContext = useContext(TaskContext);
  const {
    currentTask,
    addTask,
    errorTask,
    validationsTask,
    getTasks,
    setEditTask,
    setClearCurrentTask,
  } = taskContext;
  // State
  const formTaskState = {
    name: '',
  };
  const [task, setTask] = useState(formTaskState);
  const { name } = task;
  // Effect
  useEffect(() => {
    if (currentTask !== null) {
      setTask(currentTask);
    } else {
      setTask(formTaskState);
    }
  }, [currentTask]);
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
    if (name.trim() === '') {
      validationsTask();
      return;
    }
    // Add or Edit
    if (currentTask === null) {
      // Add task
      task.projectId = currentProject.id;
      task.status = false;
      addTask(task);
    } else {
      // Edit task
      setEditTask(task);
      setClearCurrentTask();
    }
    getTasks(currentProject.id);
    // Reset form
    setTask(formTaskState);
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
          <input
            type="submit"
            className="btn btn-block btn-primario btn-submit"
            value={currentTask ? 'Edit Task' : 'Add Task'}
          />
        </div>
      </form>
      {errorTask ? <p className="mensaje error">Task name is required</p> : null}
    </div>
  );
};

export default FormTask;
