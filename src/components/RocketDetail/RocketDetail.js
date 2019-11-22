import React, {Component} from 'react';
import axios from 'axios';

class RocketDetail extends Component { 
  state = {
    rocket: {}
  } 

  componentDidMount(){
    if ( this.props.match.params.rocket_id ) {
      if ( !this.state.rocket || (this.state.rocket && this.state.rocket.rocket_id !== this.props.match.params.rocket_id) ) {
          axios.get( 'https://api.spacexdata.com/v3/rockets/' + this.props.match.params.rocket_id )
              .then( response => {
                  this.setState( { rocket: response.data } );
              } );
      }
    }
  }
  render() {
    const rocket = this.state.rocket;
    return (
      <div>
        
        <h1 className="text-center">{rocket.rocket_name}</h1>
        <ul>
          <li><strong>Rocket ID: </strong>{rocket.rocket_id}</li>
          <li><strong>Rocket Type: </strong>{rocket.rocket_type}</li>
          <li><strong>Wikipedia: </strong><a href={rocket.wikipedia} target="_blank">{rocket.wikipedia}</a></li>
          <li><strong>Description: </strong>{rocket.description}</li>
          <li><strong>Active: </strong>{rocket.active}</li>
          <li><strong>Stages: </strong>{rocket.stages}</li>
          <li><strong>Boosters: </strong>{rocket.boosters}</li>
          <li><strong>Cost Per Launch: </strong>{rocket.cost_per_launch}</li>
          <li><strong>Success Rate PCT: </strong>{rocket.success_rate_pct}</li>
          <li><strong>First Flight Date: </strong>{rocket.first_flight}</li>
          <li><strong>Country: </strong>{rocket.country}</li>
          <li><strong>Company: </strong>{rocket.company}</li>
        </ul>
        
      </div>
    );
  }
}

export default RocketDetail;