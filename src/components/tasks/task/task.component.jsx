import React, { useContext } from 'react';
import TaskContext from '../../../context/tasks/task.context';

const Task = (propsData) => {
  const { projectTask } = propsData;
  // State Context
  const taskContext = useContext(TaskContext);
  const { deleteTaskById, getTasks } = taskContext;
  // Functions
  const hancldeDeleteTaskById = (taskID) => {
    deleteTaskById(taskID);
    console.log(projectTask.projectId);
    getTasks(projectTask.projectId);
  };
  return (
    <li className="tarea sombra">
      <p>{projectTask.name}</p>
      <div className="estado">
        {projectTask.status ? (
          <button type="button" id="btnCompleted" name="completed" className="completo">
            Completed
          </button>
        ) : (
          <button type="button" id="btnNoCompleted" name="noCompleted" className="incompleto">
            Not Completed
          </button>
        )}
      </div>
      <div className="acciones">
        <button type="button" id="btnEdit" name="edit" className="btn btn-primario">
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
