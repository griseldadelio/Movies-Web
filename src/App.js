import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import { Home } from './Screens';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
