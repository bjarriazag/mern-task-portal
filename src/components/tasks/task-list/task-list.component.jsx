import React, { Fragment } from 'react';
import Task from '../task/task.component';

const TaskList = () => {
  const projectTasks = [
    { id: 1, name: 'Select platform', status: true },
    { id: 2, name: 'Select colors', status: false },
    { id: 3, name: 'Select framework', status: true },
    { id: 4, name: 'Select hosting', status: true },
  ];
  return (
    <Fragment key="fragmentTaskList">
      <h2>Project: Online Shop</h2>
      <ul className="listado-tareas">
        {projectTasks.length === 0 ? (
          <li className="tarea">
            <p>No tasks</p>
          </li>
        ) : (
          projectTasks.map((projectTask) => <Task key={projectTask.id} projectTask={projectTask} />)
        )}
      </ul>
    </Fragment>
  );
};

export default TaskList;
