import React, { useReducer } from 'react';
import TaskContext from './task.context';
import taskReducer from './task.reducer';
import projectTasks from './tasks.data';

const TaskProvidier = (propsData) => {
  // State
  const taskState = {
    tasks: projectTasks,
  };
  const [state, dispatch] = useReducer(taskReducer, taskState);
  // Functions
  console.log(state, dispatch);
  // Context Provider
  return (
    <TaskContext.Provider value={{ tasks: state.tasks }}>{propsData.children}</TaskContext.Provider>
  );
};

export default TaskProvidier;
