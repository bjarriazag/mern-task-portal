import React, { useContext } from 'react';
import ProjectContext from '../../../context/projects/project/project.context';

const Project = (propsData) => {
  const { project } = propsData;
  // State context
  const projectContext = useContext(ProjectContext);
  const { setCurrentProject } = projectContext;
  // Functions
  const handleCurrentProject = (projectID) => {
    setCurrentProject(projectID);
  };
  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => handleCurrentProject(project.id)}
      >
        {project.name}
      </button>
    </li>
  );
};

export default Project;
