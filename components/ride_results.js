import React, { Component } from 'react';
import LyftList from './lyft_list';
import UberList from './uber_list';

import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';


export default class RideResults extends Component {
  render() {

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

    let ride3 = {
      display_name: 'UberPool',
      low_estimate: 13,
      high_estimate: 15,
      primetime_percentage: "0%",
      duration: 1080
    };

    let ride4 = {
      display_name: 'UberX',
      low_estimate: 17,
      high_estimate: 13,
      primetime_percentage: "25%",
      duration: 1080
    };

    let lyftRides = [ride1, ride2];

    let uberRides = [ride3, ride4];

    return (
      <View style={styles.rideResults}>
        <LyftList style={[styles.rideResults, styles.lyftList]} rides={lyftRides} />
        <UberList style={[styles.rideResults, styles.uberList]}rides={uberRides} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rideResults: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    // backgroundColor: '#0B4F6C'
  },

  UberList: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  }


});
