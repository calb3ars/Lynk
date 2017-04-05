import React, { Component } from 'react';
// import RideItem from './components/ride_item';
import RideItem from './ride_item';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class LyftList extends Component {
  render(){
    let list = [];

    this.props.rides.forEach((ride, idx) => (
      list.push(<RideItem key={idx} ride={ride} />)
    ))

    return (
      <View style={{alignItems: 'center', marginTop: 20}}>
        {list}
      </View>
    );
  }
}
