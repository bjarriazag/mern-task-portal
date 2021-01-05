import React, { Fragment, useContext } from 'react';
import Task from '../task/task.component';
import ProjectContext from '../../../context/projects/project/project.context';

const TaskList = () => {
  // State context
  const projectContext = useContext(ProjectContext);
  const { currentProject, setDeleteProject } = projectContext;
  // Functions
  const handleDeleteProject = (projectID) => {
    setDeleteProject(projectID);
  };

  const projectTasks = [
    { id: 1, name: 'Select platform', status: true },
    { id: 2, name: 'Select colors', status: false },
    { id: 3, name: 'Select framework', status: true },
    { id: 4, name: 'Select hosting', status: true },
  ];
  if (!currentProject) return <h2>Select project</h2>;
  return (
    <Fragment key="fragmentTaskList">
      <h2>Project: {currentProject.name}</h2>
      <ul className="listado-tareas">
        {projectTasks.length === 0 ? (
          <li className="tarea">
            <p>No tasks</p>
          </li>
        ) : (
          projectTasks.map((projectTask) => <Task key={projectTask.id} projectTask={projectTask} />)
        )}
      </ul>
      <button
        type="button"
        id="btnDeleteProject"
        name="deleteProject"
        className="btn btn-eliminar"
        onClick={() => handleDeleteProject(currentProject.id)}
      >
        Delete Project &times;
      </button>
    </Fragment>
  );
};

export default TaskList;
