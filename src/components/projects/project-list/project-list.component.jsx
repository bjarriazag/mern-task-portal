import React, { useContext, useEffect } from 'react';
import Project from '../project/project.component';
import ProjectContext from '../../../context/projects/project/project.context';

const ProjectList = () => {
  // Context
  const projectContext = useContext(ProjectContext);
  const { projects, getProjects } = projectContext;
  // Lifecycle
  useEffect(() => {
    getProjects();
  }, []);
  // [Validation] Show projects only if is not empty
  if (projects.length === 0) return null;

  return (
    <ul className="listado-proyectos">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ProjectList;
