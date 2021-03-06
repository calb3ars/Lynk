import React, { Component } from 'react';
import * as KEYS from './key';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight,
  Linking
} from 'react-native';

export default class UberRideItem extends Component {
  constructor(props){
    super(props);

    this.state = {
      pressed: false,
    };
  }

  buttonPress(){
    Linking.openURL(this.props.uberRedirectUrl)
    .catch(err => {
      Linking.openURL(`https://m.uber.com/sign-up?<client_id=${KEYS.uberClientId}>`);
    })
  }

  _onShowUnderlay(){
    this.setState({ pressed: true });
  }

  _onHideUnderlay(){
    this.setState({ pressed: false });
  }

  render() {
    return(
      <TouchableHighlight
        underlayColor={'#0B4F6C'}
        onPress={this.buttonPress.bind(this)}
        onShowUnderlay={this._onShowUnderlay.bind(this)}
        onHideUnderlay={this._onHideUnderlay.bind(this)}
        style={ this.state.pressed ? styles.pressed : styles.unpressed }
        >

        <View style={styles.uberListing, styles.listing}>
          <Text style={[styles.uberRideType, this.state.pressed ? styles.pressedType : styles.type]}>{this.props.ride.display_name}</Text>
          <Text style={[styles.uberCost, this.state.pressed ? styles.pressedCost : styles.cost]}><Text style={styles.dollar}>$</Text>{this.props.ride.high_estimate}</Text>

          <Text style={[styles.uberRideTime, this.state.pressed ? styles.pressedTime : styles.time]}>Ride Time: {Math.floor(this.props.ride.duration / 60)} min</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  unpressed: {
    backgroundColor: '#EFFCFB',
  },

  pressed: {
    backgroundColor: '#0B4F6C',
  },

  listing: {
    paddingTop: 25,
    paddingLeft: 30,
    paddingBottom: 15,
    width: 190,
    marginBottom: 15,
  },

  type: {
    color: '#1fbad6',
    fontSize: 18,
    fontFamily: 'Avenir-Medium'
  },

  cost: {
    color: '#0B4F6C',
    fontSize: 48,
    fontFamily: 'Avenir-Medium'
  },

  dollar: {
    fontSize: 20,
  },

  time: {
    color: '#0B4F6C',
    fontSize: 16,
    fontFamily: 'Avenir-Medium'
  },

  pressedType: {
    color: '#EFFCFB',
    fontSize: 18,
    fontFamily: 'Avenir-Medium'
  },

  pressedCost: {
    color: '#FF5A5F',
    fontSize: 48,
    fontFamily: 'Avenir-Medium'
  },

  pressedTime: {
    color: '#EFFCFB',
    fontSize: 16,
    fontFamily: 'Avenir-Medium'
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
