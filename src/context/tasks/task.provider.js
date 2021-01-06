import { v4 as uuidv4 } from 'uuid';
import React, { useReducer } from 'react';
import TaskContext from './task.context';
import taskReducer from './task.reducer';
import projectTasks from './tasks.data';
import {
  PROJECT_TASKS,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  STATUS_TASK,
  CURRENT_TASK,
} from './task.types';

const TaskProvidier = (propsData) => {
  // State
  const taskState = {
    tasks: projectTasks,
    projectTasks: null,
    currentTask: null,
    errorTask: false,
  };
  const [state, dispatch] = useReducer(taskReducer, taskState);
  // Functions
  const getTasks = (projectID) => {
    dispatch({
      type: PROJECT_TASKS,
      payload: projectID,
    });
  };
  const validationsTask = () => {
    dispatch({
      type: VALIDATE_TASK,
    });
  };
  const addTask = (task) => {
    task.id = uuidv4();
    dispatch({
      type: ADD_TASK,
      payload: task,
    });
  };
  const deleteTaskById = (taskID) => {
    dispatch({
      type: DELETE_TASK,
      payload: taskID,
    });
  };
  const changeStatusTask = (task) => {
    dispatch({
      type: STATUS_TASK,
      payload: task,
    });
  };
  const setCurrentTask = (task) => {
    dispatch({
      type: CURRENT_TASK,
      payload: task,
    });
  };
  // Context Provider
  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        projectTasks: state.projectTasks,
        errorTask: state.errorTask,
        currentTask: state.currentTask,
        getTasks,
        addTask,
        validationsTask,
        deleteTaskById,
        changeStatusTask,
        setCurrentTask,
      }}
    >
      {propsData.children}
    </TaskContext.Provider>
  );
};

export default TaskProvidier;
