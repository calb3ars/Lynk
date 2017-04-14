import React, { Component } from 'react';
import LyftRideItem from './lyft_ride_item';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class LyftList extends Component {
  render(){
    console.log(this.props.rides);
    let list = [];
    this.props.rides.forEach((ride, idx) => (
      list.push(<LyftRideItem key={idx} ride={ride} lyftRedirectUrl={this.props.lyftRedirectUrl}/>)
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
    shadowColor: '#0B4F6C',
    shadowOffset: {
      width: 0.5,
      height: 5,
    },
    shadowOpacity: 0.1,
  },
});
