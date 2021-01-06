import React, { useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
  if (projects.length === 0) return <p>No projects exist</p>;

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {projects.map((project) => (
          <CSSTransition key={project.id} timeout={500} classNames="proyecto">
            <Project project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ProjectList;
