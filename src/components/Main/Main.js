import React, {Component} from 'react';
import axios from 'axios';


import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {BrowserRouter , Link} from 'react-router-dom';

class Main extends Component {
  state ={
    launches: [],
    showLaunches: 5,
    rockets: [],
    showRockets: 2
  }
  componentDidMount() {
    axios.get('https://api.spacexdata.com/v3/launches')
    .then(response =>{
      this.setState({launches: response.data});
    });
    axios.get('https://api.spacexdata.com/v3/rockets')
    .then(response =>{
      this.setState({rockets: response.data});
    });
  }
  
   loadMoreLaunches = () => {
    const newShowLaunches = this.state.showLaunches + 10;
    this.setState({showLaunches: newShowLaunches});
  }
  
  LoadMoreRockets = () => {
    const newShowRockets = this.state.showRockets + 1;
    this.setState({showRockets: newShowRockets});
  }
  

  render() {
    const launches = this.state.launches.slice(0,this.state.showLaunches).map(launch => {
      return (
        <ListGroupItem key={launch.flight_number}>
          <Link to={'/launch-detail/' + launch.flight_number }>{launch.mission_name}</Link>
        </ListGroupItem>
        )
    });
    const rockets = this.state.rockets.slice(0,this.state.showRockets).map(rocket => {
      return (
      <ListGroupItem key={rocket.rocket_id}>
          <Link to={'/rocket-detail/' + rocket.rocket_id}>{rocket.rocket_name}</Link>
      </ListGroupItem>
      )
    });
    return (
      
        <div className="App">
            <div className="col-md-6 col-xs-12">
              <div>
                <h1>
                  <span className="label label-success">Launches</span>
                </h1><br/>
                <ListGroup>
                  {launches}
                </ListGroup>
                
              </div>
              { this.state.showLaunches < this.state.launches.length &&
              <button type="button" className="btn btn-primary" onClick={this.loadMoreLaunches}>Load More</button>
              }
            </div>
            <div className="col-md-6 col-xs-12">
              <div>
                <h1>
                  <span className="label label-danger">Rockets</span>
                </h1><br/>
                <ListGroup>
                  {rockets}
                </ListGroup>
              </div>
              { this.state.showRockets < this.state.rockets.length &&
              <button type="button" className="btn btn-primary" onClick={this.LoadMoreRockets}>Load More</button>
              }
            </div>
        </div>
    );
  }
}
export default Main;