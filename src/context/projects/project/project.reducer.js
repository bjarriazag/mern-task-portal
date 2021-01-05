import { PROJECT_FORM, GET_PROJECTS } from '../../../types/projects/project.types';

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
    default:
      return state;
  }
};

export default projectReducer;
