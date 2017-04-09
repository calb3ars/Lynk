import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight,
  Linking
} from 'react-native';


export default class LyftRideItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      pressed: false,
    };
    this.buttonPress.bind(this);
  }

  buttonPress(){
    console.log('Lyft!!');
    Linking.openURL('lyft://partner=qCWwfqShiQOO').then(() => {
      console.log('it worked!')})
      .catch(err => {
        console.log('An error occurred:', err);
        Linking.openURL("https://www.lyft.com/signup/SDKSIGNUP?clientId=qCWwfqShiQOO&sdkName=iOS_direct");
      });
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
        underlayColor={'#0B4F6C'}
        onShowUnderlay={this._onShowUnderlay.bind(this)}
        onHideUnderlay={this._onHideUnderlay.bind(this)}
        style={ this.state.pressed ? styles.pressed : styles.unpressed }

      >
          <View style={styles.lyftListing, styles.listing}>
            <Text style={[styles.lyftRideType, this.state.pressed ? styles.pressedType : styles.type]}>{this.props.ride.display_name}</Text>
            <Text style={[styles.lyftCost, this.state.pressed ? styles.pressedCost : styles.cost]}><Text style={styles.dollar}>$ </Text>{Math.round(this.props.ride.estimated_cost_cents_max / 100)}</Text>

            <Text style={[styles.lyftRideTime, this.state.pressed ? styles.pressedTime : styles.time]}>Ride Time: {Math.floor(this.props.ride.estimated_duration_seconds / 60)} min
            </Text>
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
    paddingRight: 30,
    paddingBottom: 15,
    width: 190,
    marginBottom:15,
  },

  type: {
    color: '#E70B81',
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

  // bonus: {
  //   color: '#FF5A5F',
  //   fontSize: 14,
  //   marginTop: -2
  // },

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

  lyftListing: {
    // marginRight: 20
  },

  lyftRideType: {
    textAlign: 'right'
  },

  lyftCost: {
    textAlign: 'right'
  },

  lyftPrimeTime: {
    textAlign: 'right'
  },

  lyftRideTime: {
    textAlign: 'right'
  },
});

// <Text style={[styles.lyftPrimeTime, styles.bonus]}>PrimeTime: {this.props.ride.primetime_percentage}</Text>
