/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

class LyftRides extends Component {
  render() {
    return(
      <View style={styles.lyftListings}>
        <Text>{this.props.ride.display_name}</Text>
        <Text>${this.props.ride.estimated_cost_cents_min / 100} - ${this.props.ride.estimated_cost_cents_max / 100}</Text>
        <Text>PrimeTime: {this.props.ride.primetime_percentage}</Text>
        <Text>Time to Destination: {Math.floor(this.props.ride.estimated_duration_seconds / 60)} min</Text>
      </View>
    );
  }
}

export default class lynk extends Component {
  render() {
    let pic = {
      uri: 'https://2ecyvk3piszv4e6gv2yz9867-wpengine.netdna-ssl.com/wp-content/uploads/2015/07/uber-and-lyft-side-by-side.png'
    };

    let ride1 = {
      display_name: 'Lyft Line',
      estimated_cost_cents_min: 475,
      estimated_cost_cents_max: 475,
      primetime_percentage: "0%",
      estimated_duration_seconds: 913
    };

    let ride2 = {
      display_name: 'Lyft',
      estimated_cost_cents_min: 1052,
      estimated_cost_cents_max: 1755,
      primetime_percentage: "25%",
      estimated_duration_seconds: 913
    };

    return (
      <View style={styles.container}>
        <Image source={pic} style={{width: 375, height: 110}}/>

        <LyftRides ride={ride1} />
        <LyftRides ride={ride2} />
    </View>

    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
  },
  lyftListings: {
    textAlign: 'right',
    color: '#FF00BF',
    marginBottom: 5,
  },
  rideType: {
    fontWeight: 'bold',
  }
});

AppRegistry.registerComponent('lynk', () => lynk);

// Sample API Response
//   "cost_estimates": [
//     {
//       "ride_type": "lyft_plus",
//       "estimated_duration_seconds": 913,
//       "estimated_distance_miles": 3.29,
//       "estimated_cost_cents_max": 2355,
//       "primetime_percentage": "25%",
//       "currency": "USD",
//       "estimated_cost_cents_min": 1561,
//       "display_name": "Lyft Plus",
//       "primetime_confirmation_token": null,
//       "is_valid_estimate": true
//     },
//     {
//       "ride_type": "lyft_line",
//       "estimated_duration_seconds": 913,
//       "estimated_distance_miles": 3.29,
//       "estimated_cost_cents_max": 475,
//       "primetime_percentage": "0%",
//       "currency": "USD",
//       "estimated_cost_cents_min": 475,
//       "display_name": "Lyft Line",
//       "primetime_confirmation_token": null,
//       "is_valid_estimate": true
//     },
//     {
//       "ride_type": "lyft",
//       "estimated_duration_seconds": 913,
//       "estimated_distance_miles": 3.29,
//       "estimated_cost_cents_max": 1755,
//       "primetime_percentage": "25%",
//       "currency": "USD",
//       "estimated_cost_cents_min": 1052,
//       "display_name": "Lyft",
//       "primetime_confirmation_token": null,
//       "is_valid_estimate": true
//     }
//   ]
// }
