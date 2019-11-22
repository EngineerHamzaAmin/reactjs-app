import React, {Component} from 'react';
import axios from 'axios';
class LaunchDetail extends Component { 
  state = {
    launch: {}
  } 

  componentDidMount(){
    if ( this.props.match.params.flight_number ) {
      if ( !this.state.launch || (this.state.launch && this.state.launch.id !== this.props.match.params.flight_number) ) {
          axios.get( 'https://api.spacexdata.com/v3/launches/' + this.props.match.params.flight_number )
              .then( response => {
                console.log(response.data);
                  this.setState( { launch: response.data } );
              } );
      }
    }
  }
  render() {
    const launch = this.state.launch;
    return (
      <div>
        
        <h1 className="text-center">{launch.mission_name}</h1>
        <ul>
          <li><strong>Mission Name: </strong>{launch.mission_name}</li>
          <li><strong>Flight Number: </strong>{launch.flight_number}</li>
          <li><strong>Launch Date: </strong>{launch.launch_date_local}</li>
          <li><strong>Launch Success: </strong>{launch.launch_success}</li>
          <li><strong>Launch Window: </strong>{launch.launch_window}</li>
          <li><strong>Launch Year: </strong>{launch.launch_year}</li>
          <li><strong>Static Fire Date: </strong>{launch.static_fire_date_utc}</li>
          <li><strong>Tentative Max Precision: </strong>{launch.tentative_max_precision}</li>
          <li><strong>Upcoming: </strong>{launch.upcoming}</li>
          <li><strong>TBD: </strong>{launch.tbd}</li>
          <li><strong>Details: </strong>{launch.details}</li>


        </ul>
        
      </div>
    );
  }
}

export default LaunchDetail;