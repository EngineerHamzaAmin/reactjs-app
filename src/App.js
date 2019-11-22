import React, {Component} from 'react';

import './App.css';
import {BrowserRouter, Route , Switch} from 'react-router-dom';

import LaunchDetail from './components/LaunchDetail/LaunchDetail';
import Main from './components/Main/Main';
import RocketDetail from './components/RocketDetail/RocketDetail';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact  path="/"  component={Main} />
            <Route exact path="/launch-detail/:flight_number" component={LaunchDetail}/>
            <Route exact path="/rocket-detail/:rocket_id" component={RocketDetail}/>
          </Switch>
      </BrowserRouter>
    );
  }
}
export default App;