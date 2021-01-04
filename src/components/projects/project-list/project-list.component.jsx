import React from 'react';
import Project from '../project/project.component';

const ProjectList = () => {
  const projects = [
    { id: 1, name: 'Online Shop' },
    { id: 2, name: 'Intranet' },
    { id: 3, name: 'Web Design' },
  ];
  return (
    <ul className="listado-proyectos">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ProjectList;
