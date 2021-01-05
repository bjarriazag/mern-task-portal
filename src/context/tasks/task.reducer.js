import { PROJECT_TASKS, ADD_TASK, VALIDATE_TASK } from './task.types';

const taskReducer = (state, action) => {
  switch (action.type) {
    case PROJECT_TASKS:
      return {
        ...state,
        projectTasks: state.tasks.filter((task) => task.projectId === action.payload),
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        errorTask: false,
      };
    case VALIDATE_TASK:
      return {
        ...state,
        errorTask: true,
      };
    default:
      return state;
  }
};

export default taskReducer;
