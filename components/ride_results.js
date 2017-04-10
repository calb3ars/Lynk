import React, { Component } from 'react';
import LyftList from './lyft_list';
import UberList from './uber_list';
import * as Parsers from './data_parser';

import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';


export default class RideResults extends Component {

  render() {

      return (
        <View style={styles.rideResults}>
          <LyftList style={[styles.rideResults, styles.lyftList]} rides={this.props.lyftRides} lyftRedirectUrl={this.props.lyftRedirectUrl}/>
          <UberList style={[styles.rideResults, styles.uberList]} rides={this.props.uberRides} uberRedirectUrl={this.props.uberRedirectUrl}/>
        </View>
      );

  }
}

const styles = StyleSheet.create({
  rideResults: {
    flex: 1,
    flexDirection: 'row',
    marginTop: -20,
    justifyContent: 'center',
  },
});
