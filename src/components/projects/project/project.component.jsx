import React, { useContext } from 'react';
import ProjectContext from '../../../context/projects/project/project.context';
import TaskContext from '../../../context/tasks/task.context';

const Project = (propsData) => {
  const { project } = propsData;
  // State context
  const projectContext = useContext(ProjectContext);
  const { setCurrentProject } = projectContext;
  const taskContext = useContext(TaskContext);
  const { getTasks } = taskContext;
  // Functions
  const handleCurrentProject = (projectID) => {
    setCurrentProject(projectID);
  };
  const handleSelectProject = (projectID) => {
    handleCurrentProject(projectID);
    getTasks(projectID);
  };
  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => handleSelectProject(project.id)}
      >
        {project.name}
      </button>
    </li>
  );
};

export default Project;
