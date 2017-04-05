import React, { Component } from 'react';
// import RideItem from './components/ride_item';
import LyftRideItem from './lyft_ride_item';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class LyftList extends Component {
  render(){
    let list = [];

    this.props.rides.forEach((ride, idx) => (
      list.push(<LyftRideItem key={idx} ride={ride} />)
    ));

    return (
      <View style={styles.LyftList}>
        {list}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  LyftList: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
});
