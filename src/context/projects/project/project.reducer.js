import { PROJECT_FORM, GET_PROJECTS, ADD_PROJECT } from '../../../types/projects/project.types';

const projectReducer = (state, action) => {
  switch (action.type) {
    case PROJECT_FORM:
      return {
        ...state,
        showForm: true,
      };
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        showForm: false,
      };
    default:
      return state;
  }
};

export default projectReducer;
