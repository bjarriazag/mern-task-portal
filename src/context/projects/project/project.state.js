import React, { useReducer } from 'react';
import ProjectContext from './project.context';
import projectReducer from './project.reducer';
import { PROJECT_FORM, GET_PROJECTS } from '../../../types/projects/project.types';

const ProjectState = (propsData) => {
  const projects = [
    { id: 1, name: 'Online Shop' },
    { id: 2, name: 'Intranet' },
    { id: 3, name: 'Web Design' },
    { id: 4, name: 'MERN' },
  ];

  const initialState = {
    showForm: false,
    projects: [],
  };
  // Dispatch to execute actions
  const [state, dispatch] = useReducer(projectReducer, initialState);
  // Functions
  const handleShowForm = () => {
    dispatch({
      type: PROJECT_FORM,
    });
  };
  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects,
    });
  };

  return (
    <ProjectContext.Provider
      value={{ showForm: state.showForm, projects: state.projects, handleShowForm, getProjects }}
    >
      {propsData.children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
