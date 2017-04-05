/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import LyftRideItem from './components/lyft_ride_item';
import UberRideItem from './components/uber_ride_item';
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

// class LyftRides extends Component {
//   render() {
//     return(
//       <View style={styles.lyftListing, styles.listing}>
//         <Text style={[styles.lyftRideType, styles.type]}>{this.props.ride.display_name}</Text>
//         <Text style={[styles.lyftCost, styles.cost]}><Text style={styles.dollar}>$</Text>{this.props.ride.estimated_cost_cents_max / 100}</Text>
//         <Text style={[styles.lyftPrimeTime, styles.bonus]}>PrimeTime: {this.props.ride.primetime_percentage}</Text>
//         <Text style={[styles.lyftRideTime, styles.time]}>Ride Time: {Math.floor(this.props.ride.estimated_duration_seconds / 60)} min</Text>
//       </View>
//     );
//   }
// }

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

// <View style={styles.listingsList}>
//   <View style={styles.lyft}>
//     <RideItem ride={ride1} />
//     <RideItem ride={ride2} />
//   </View>
//   <View style={styles.uber}>
//     <RideItem ride={ride3} />
//     <RideItem ride={ride4} />
//   </View>
// </View>

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

  // listing: {
  //   marginTop: 20,
  //   marginBottom: 20,
  // },
  //
  // type: {
  //   color: '#087E8B',
  //   fontSize: 18,
  // },
  //
  // cost: {
  //   color: '#0B4F6C',
  //   fontSize: 48,
  // },
  //
  // dollar: {
  //   fontSize: 20,
  //
  // },
  //
  // bonus: {
  //   color: '#FF5A5F',
  //   fontSize: 14,
  //   marginTop: -2
  // },
  //
  // time: {
  //   fontSize: 16,
  // },
  //
  // lyftListing: {
  //   marginRight: 20
  // },
  //
  // lyftRideType: {
  //   textAlign: 'right'
  // },
  //
  // lyftCost: {
  //   textAlign: 'right'
  // },
  //
  // lyftPrimeTime: {
  //   textAlign: 'right'
  // },
  //
  // lyftRideTime: {
  //   textAlign: 'right'
  // },



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
