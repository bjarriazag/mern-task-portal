import React from 'react';
import Project from '../project/project.component';

const ProjectList = () => {
  const projects = [{ name: 'Online Shop' }, { name: 'Intranet' }, { name: 'Web Design' }];
  return (
    <ul className="listado-proyectos">
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </ul>
  );
};

export default ProjectList;
