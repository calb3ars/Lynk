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

export default class lynk extends Component {
  render() {
    let pic = {
      uri: 'https://2ecyvk3piszv4e6gv2yz9867-wpengine.netdna-ssl.com/wp-content/uploads/2015/07/uber-and-lyft-side-by-side.png'
    };


    return (
      <View style={styles.container}>
        <Image source={pic} style={styles.logos}/>
        <RideResults />
    </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B4F6C',
    marginTop: 20,
  },

  logos: {
    width: 375,
    height: 140
  },

  listingsList: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
});

AppRegistry.registerComponent('lynk', () => lynk);
