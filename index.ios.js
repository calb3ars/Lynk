/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
// import MapView from 'react-native-maps';
import RideItem from './components/ride_item';
import LyftList from './components/lyft_list';
import UberList from './components/uber_list';
import RideResults from './components/ride_results';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

export default class lynk extends Component {
  render() {
    let pic = {
      uri: 'https://2ecyvk3piszv4e6gv2yz9867-wpengine.netdna-ssl.com/wp-content/uploads/2015/07/uber-and-lyft-side-by-side.png'
    };


    return (
      <View style={styles.container}>
        <Image source={pic} style={{width: 375, height: 110}}/>
        <RideResults />
    </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#D6FFE7',
    marginTop: 20

  },

  listingsList: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
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
