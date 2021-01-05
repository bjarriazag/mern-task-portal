import React, { useReducer } from 'react';
import ProjectContext from './project.context';
import projectReducer from './project.reducer';
import PROJECT_FORM from '../../../types/projects/project.types';

const ProjectState = (propsData) => {
  const initialState = {
    showForm: false,
    projects: [
      { id: 1, name: 'Online Shop' },
      { id: 2, name: 'Intranet' },
      { id: 3, name: 'Web Design' },
      { id: 4, name: 'MERN' },
    ],
  };
  // Dispatch to execute actions
  const [state, dispatch] = useReducer(projectReducer, initialState);
  // Functions
  const handleShowForm = () => {
    dispatch({
      type: PROJECT_FORM,
    });
  };

  return (
    <ProjectContext.Provider
      value={{ showForm: state.showForm, projects: state.projects, handleShowForm }}
    >
      {propsData.children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
