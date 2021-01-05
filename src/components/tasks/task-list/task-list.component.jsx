import React, { Fragment, useContext } from 'react';
import Task from '../task/task.component';
import ProjectContext from '../../../context/projects/project/project.context';
import TaskContext from '../../../context/tasks/task.context';

const TaskList = () => {
  // State context
  const projectContext = useContext(ProjectContext);
  const { currentProject, setDeleteProject } = projectContext;
  const taskContext = useContext(TaskContext);
  const { projectTasks } = taskContext;
  // Functions
  const handleDeleteProject = (projectID) => {
    setDeleteProject(projectID);
  };

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
