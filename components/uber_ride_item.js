import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight,
  Linking
} from 'react-native';

// Uses Uber Ride Estimates - price - API endpoint
// Endpoint Doesn't include Surge pricing
//
export default class UberRideItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      pressed: false,
    };
    this.buttonPress.bind(this);
  }

  buttonPress(){
    console.log('Uber!');
    Linking.openURL('uber://').then(() => {
      console.log('This works!')
    }).catch(err => {
      console.log('An error occurred: ', err);
      Linking.openURL('https://m.uber.com/sign-up?<client_id=NQ5t_E_CebtAze6Ci44XFTdiJtM2GH8x>');
    })
  }

  _onShowUnderlay(){
    console.log("Toggle Pressed");
    this.setState({ pressed: true });
  }

  _onHideUnderlay(){
    console.log("Toggle Pressed");
    this.setState({ pressed: false });
  }
 
  render() {
    return(
      <TouchableHighlight
        onPress={this.buttonPress}
        underlayColor={'#D6F2F7'}
        onShowUnderlay={this._onShowUnderlay.bind(this)}
        onHideUnderlay={this._onHideUnderlay.bind(this)}
        style={ this.state.pressed ? styles.pressed : styles.unpressed }
        >
        <View style={styles.uberListing, styles.listing}>
          <Text style={[styles.uberRideType, styles.type]}>{this.props.ride.display_name}</Text>
          <Text style={[styles.uberCost, styles.cost]}><Text style={styles.dollar}>$</Text>{this.props.ride.high_estimate}</Text>
          <Text style={[styles.uberPrimeTime, styles.bonus]}>Surge: {this.props.ride.primetime_percentage}</Text>
          <Text style={[styles.uberRideTime, styles.time]}>Ride Time: {Math.floor(this.props.ride.duration / 60)} min</Text>
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
    backgroundColor: '#D6F2F7',
    opacity: 1,
  },

  listing: {
    paddingTop: 15,
    paddingLeft: 20,
    paddingBottom: 15,
    width: 190,
    marginTop: 0,
    marginBottom: 20,
    // shadowColor: '#0B4F6C',
    // shadowColor: '#083f56',
    // shadowOffset: {
    //   height: 0
    // },
    // shadowOpacity: 0.4,
    opacity: 0.8
  },

  type: {
    // color: '#087E8B',
    color: '#0B4F6C',
    fontSize: 18,
  },

  cost: {
    // color: '#0B4F6C',
    color: '#0B4F6C',
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
    color: '#0B4F6C',
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
