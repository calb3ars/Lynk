import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

// Uses Uber Ride Estimates - price - API endpoint
// Endpoint Doesn't include Surge pricing
//
export default class UberRideItem extends Component {
  render() {
    return(
      <View style={styles.uberListing, styles.listing}>
        <Text style={[styles.uberRideType, styles.type]}>{this.props.ride.display_name}</Text>
        <Text style={[styles.uberCost, styles.cost]}><Text style={styles.dollar}>$</Text>{this.props.ride.high_estimate}</Text>
        <Text style={[styles.uberPrimeTime, styles.bonus]}>Surge: {this.props.ride.primetime_percentage}</Text>
        <Text style={[styles.uberRideTime, styles.time]}>Ride Time: {Math.floor(this.props.ride.duration / 60)} min</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listing: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingBottom: 10,
    width: 190,
    marginTop: 20,
    marginBottom: 20,
    // shadowColor: '#0B4F6C',
    shadowColor: '#083f56',
    shadowOffset: {
      height: 0
    },
    shadowOpacity: 0.4,
  },

  type: {
    // color: '#087E8B',
    color: '#D6FFE7',
    fontSize: 18,
  },

  cost: {
    // color: '#0B4F6C',
    color: '#D6FFE7',
    fontSize: 48,
  },

  dollar: {
    fontSize: 20,
  },

  bonus: {
    color: '#FF5A5F',
    fontSize: 14,
    marginTop: -2,

  },

  time: {
    color: '#D6FFE7',
    fontSize: 16,
    textAlign: 'left',
  },

  uberListing: {
    marginRight: 20,
    textAlign: 'left',
  },

  uberRideType: {
    textAlign: 'left',
  },

  uberCost: {
    textAlign: 'left',
  },

  uberPrimeTime: {
    textAlign: 'left'
  },

  uberRideTime: {
    textAlign: 'left'
  },
});
