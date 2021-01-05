import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/login/login.component';
import NewAccount from './components/auth/new-account/new-account.component';
import Projects from './components/projects/projects/projects.component';
import ProjectState from './context/projects/project/project.state';

function App() {
  return (
    <ProjectState>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/new-account" component={NewAccount} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </Router>
    </ProjectState>
  );
}

export default App;
