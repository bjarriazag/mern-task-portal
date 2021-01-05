import React, { useContext } from 'react';
import Project from '../project/project.component';
import ProjectContext from '../../../context/projects/project/project.context';

const ProjectList = () => {
  const projectContext = useContext(ProjectContext);
  const { projects } = projectContext;
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
