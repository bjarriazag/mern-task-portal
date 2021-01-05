import React, { useReducer } from 'react';
import TaskContext from './task.context';
import taskReducer from './task.reducer';
import projectTasks from './tasks.data';
import { PROJECT_TASKS } from './task.types';

const TaskProvidier = (propsData) => {
  // State
  const taskState = {
    tasks: projectTasks,
    projectTasks: null,
  };
  const [state, dispatch] = useReducer(taskReducer, taskState);
  // Functions
  const getTasks = (projectID) => {
    dispatch({
      type: PROJECT_TASKS,
      payload: projectID,
    });
  };
  // Context Provider
  return (
    <TaskContext.Provider
      value={{ tasks: state.tasks, projectTasks: state.projectTasks, getTasks }}
    >
      {propsData.children}
    </TaskContext.Provider>
  );
};

export default TaskProvidier;
