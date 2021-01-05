import { v4 as uuidv4 } from 'uuid';
import React, { useReducer } from 'react';
import ProjectContext from './project.context';
import projectReducer from './project.reducer';
import {
  PROJECT_FORM,
  GET_PROJECTS,
  ADD_PROJECT,
  VALIDATE_FORM_PROJECT,
  GET_CURRENT_PROJECT,
  DELETE_PROJECT,
} from '../../../types/projects/project.types';

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
    hasError: false,
    currentProject: null,
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
  const addProject = (_project) => {
    const project = {
      name: _project.projectName,
    };
    project.id = uuidv4();
    dispatch({
      type: ADD_PROJECT,
      payload: project,
    });
  };
  const setHasError = (hasError) => {
    dispatch({
      type: VALIDATE_FORM_PROJECT,
      payload: hasError,
    });
  };
  const setCurrentProject = (projectID) => {
    dispatch({
      type: GET_CURRENT_PROJECT,
      payload: projectID,
    });
  };
  const setDeleteProject = (projectID) => {
    dispatch({
      type: DELETE_PROJECT,
      payload: projectID,
    });
  };

  return (
    <ProjectContext.Provider
      value={{
        showForm: state.showForm,
        projects: state.projects,
        hasError: state.hasError,
        currentProject: state.currentProject,
        handleShowForm,
        getProjects,
        addProject,
        setHasError,
        setCurrentProject,
        setDeleteProject,
      }}
    >
      {propsData.children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
