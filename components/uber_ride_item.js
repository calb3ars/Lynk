import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

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

  uberListing: {
    marginRight: 20
  },

  uberRideType: {
    textAlign: 'right'
  },

  uberCost: {
    textAlign: 'right'
  },

  uberPrimeTime: {
    textAlign: 'right'
  },

  uberRideTime: {
    textAlign: 'right'
  },
});
