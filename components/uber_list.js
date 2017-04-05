import React, { Component } from 'react';
// import RideItem from './components/ride_item';
import UberRideItem from './uber_ride_item';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class UberList extends Component {
  render(){
    let list = [];

    this.props.rides.forEach((ride, idx) => (
      list.push(<UberRideItem key={idx} ride={ride} />)
    ));

    return (
      <View style={{alignItems: 'center', marginTop: 20}}>
        {list}
      </View>
    );
  }
}
