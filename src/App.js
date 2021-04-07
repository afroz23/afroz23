import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import About from './Component/About';
import Home from './Component/Home';
import Blog from './Component/Blog';
import Projects from './Component/Projects';

const App=()=> {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/blog' component={Blog}/>
        <Route exact path='/projects' component={Projects}/>
        <Route component={Error}/>
      </Switch>
    </div>
  );
}

export default App;
