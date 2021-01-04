import React from 'react';
import NewProject from '../../projects/new-project/new-project.component';

const Sidebar = () => (
  <aside>
    <h1>
      MERN <span>Tasks</span>
    </h1>
    <NewProject />
    <div className="proyectos">
      <h2>Your Projects</h2>
    </div>
  </aside>
);

export default Sidebar;
