import React, { useContext } from 'react';
import TaskContext from '../../../context/tasks/task.context';

const Task = (propsData) => {
  const { projectTask } = propsData;
  // State Context
  const taskContext = useContext(TaskContext);
  const { deleteTaskById, getTasks, changeStatusTask, setCurrentTask } = taskContext;
  // Functions
  const hancldeDeleteTaskById = (taskID) => {
    deleteTaskById(taskID);
    console.log(projectTask.projectId);
    getTasks(projectTask.projectId);
  };
  const handleChangeStatusTask = (task) => {
    if (task.status) {
      task.status = false;
    } else {
      task.status = true;
    }
    changeStatusTask(task);
  };
  const handleCurrentTask = (task) => {
    setCurrentTask(task);
  };
  return (
    <li className="tarea sombra">
      <p>{projectTask.name}</p>
      <div className="estado">
        {projectTask.status ? (
          <button
            type="button"
            id="btnCompleted"
            name="completed"
            className="completo"
            onClick={() => handleChangeStatusTask(projectTask)}
          >
            Completed
          </button>
        ) : (
          <button
            type="button"
            id="btnNoCompleted"
            name="noCompleted"
            className="incompleto"
            onClick={() => handleChangeStatusTask(projectTask)}
          >
            Not Completed
          </button>
        )}
      </div>
      <div className="acciones">
        <button
          type="button"
          id="btnEdit"
          name="edit"
          className="btn btn-primario"
          onClick={() => handleCurrentTask(projectTask)}
        >
          Edit
        </button>
        <button
          type="button"
          id="btnDelete"
          name="delete"
          className="btn btn-secundario"
          onClick={() => hancldeDeleteTaskById(projectTask.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
