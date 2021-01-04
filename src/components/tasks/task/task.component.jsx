import React from 'react';

const Task = (propsData) => {
  const { projectTask } = propsData;
  return <h1>{projectTask.name}</h1>;
};

export default Task;
