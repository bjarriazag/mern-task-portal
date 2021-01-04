import React from 'react';

const Project = (propsData) => {
  const { project } = propsData;
  return (
    <li>
      <button type="button" className="btn btn-blank">
        {project.name}
      </button>
    </li>
  );
};

export default Project;
