import React, { useReducer } from 'react';
import ProjectContext from './project.context';
import projectReducer from './project.reducer';

const ProjectState = (propsData) => {
  const initialState = {
    showForm: false,
  };
  // Dispatch to execute actions
  const [state, dispatch] = useReducer(projectReducer, initialState);
  console.log(dispatch);
  // Functions
  return (
    <ProjectContext.Provider value={{ showForm: state.showForm }}>
      {propsData.children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
