import React, { useReducer } from 'react';
import TaskContext from './task.context';
import taskReducer from './task.reducer';

const TaskProvidier = (propsData) => {
  // State
  const taskState = {
    tasks: [],
  };
  const [state, dispatch] = useReducer(taskReducer, taskState);
  // Functions
  console.log(state, dispatch);
  // Context Provider
  return <TaskContext.Provider>{propsData.children}</TaskContext.Provider>;
};

export default TaskProvidier;
