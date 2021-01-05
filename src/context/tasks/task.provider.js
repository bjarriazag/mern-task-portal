import React, { useReducer } from 'react';
import TaskContext from './task.context';
import taskReducer from './task.reducer';
import projectTasks from './tasks.data';
import { PROJECT_TASKS, ADD_TASK } from './task.types';

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
  const addTask = (task) => {
    dispatch({
      type: ADD_TASK,
      payload: task,
    });
  };
  // Context Provider
  return (
    <TaskContext.Provider
      value={{ tasks: state.tasks, projectTasks: state.projectTasks, getTasks, addTask }}
    >
      {propsData.children}
    </TaskContext.Provider>
  );
};

export default TaskProvidier;
