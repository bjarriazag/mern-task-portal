import {
  PROJECT_FORM,
  GET_PROJECTS,
  ADD_PROJECT,
  VALIDATE_FORM_PROJECT,
  GET_CURRENT_PROJECT,
} from '../../../types/projects/project.types';

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
    case VALIDATE_FORM_PROJECT:
      return {
        ...state,
        hasError: action.payload,
      };
    case GET_CURRENT_PROJECT:
      return {
        ...state,
        currentProject: state.projects.filter((project) => project.id === action.payload)[0],
      };
    default:
      return state;
  }
};

export default projectReducer;
