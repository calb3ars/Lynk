import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

export default class LyftRideItem extends Component {
  render() {
    return(
      <View style={styles.lyftListing, styles.listing}>
        <Text style={[styles.lyftRideType, styles.type]}>{this.props.ride.display_name}</Text>
        <Text style={[styles.lyftCost, styles.cost]}><Text style={styles.dollar}>$</Text>{this.props.ride.estimated_cost_cents_max / 100}</Text>
        <Text style={[styles.lyftPrimeTime, styles.bonus]}>PrimeTime: {this.props.ride.primetime_percentage}</Text>
        <Text style={[styles.lyftRideTime, styles.time]}>Ride Time: {Math.floor(this.props.ride.estimated_duration_seconds / 60)} min</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   // backgroundColor: '#D6FFE7',
  //   marginTop: 20
  //
  // },
  //
  // listingsList: {
  //   flexDirection: 'row',
  //   alignSelf: 'center',
  // },

  listing: {
    marginTop: 20,
    marginBottom: 20,
  },

  type: {
    color: '#087E8B',
    fontSize: 18,
  },

  cost: {
    color: '#0B4F6C',
    fontSize: 48,
  },

  dollar: {
    fontSize: 20,

  },

  bonus: {
    color: '#FF5A5F',
    fontSize: 14,
    marginTop: -2
  },

  time: {
    fontSize: 16,
  },

  lyftListing: {
    marginRight: 20
  },

  lyftRideType: {
    textAlign: 'right'
  },

  lyftCost: {
    textAlign: 'right'
  },

  lyftPrimeTime: {
    textAlign: 'right'
  },

  lyftRideTime: {
    textAlign: 'right'
  },
});
