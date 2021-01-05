import PROJECT_FORM from '../../../types/projects/project.types';

const projectReducer = (state, action) => {
  switch (action.type) {
    case PROJECT_FORM:
      return {
        ...state,
        showForm: true,
      };
    default:
      return state;
  }
};

export default projectReducer;
