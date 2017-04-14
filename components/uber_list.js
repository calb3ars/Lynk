import React, { Component } from 'react';
import UberRideItem from './uber_ride_item';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class UberList extends Component {
  render(){
    let list = [];
    this.props.rides.forEach((ride, idx) => {
      if (ride.display_name !== 'Not Available') {
        return list.push(<UberRideItem key={idx} ride={ride} uberRedirectUrl={this.props.uberRedirectUrl}/>);
      }
    });

    return (
      <View style={styles.UberList}>
        {list}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  UberList: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    shadowColor: '#0B4F6C',
    shadowOffset: {
      width: 1,
      height: 10
    },
    shadowOpacity: 0.1,
  },
});
