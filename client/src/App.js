import React from 'react';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Intro from './components/Intro';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Articles from './components/Articles';

function App() {
  return (
    <div>
      <Switch>
        <Route  exact path="/" component={Intro} />
        <Route  exact path="/resume" component={Resume} />
        <Route  exact path="/projects" component={Projects} />
        <Route  exact path="/articles" component={Articles} />
      </Switch>
    </div>
  );
}

export default App;
