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


  buttonPress(){
    console.log('Lyft!!');
    Linking.openURL('lyft://partner=qCWwfqShiQOO').then(() => {
      console.log('it worked!')})
      .catch(err => {
        console.log('An error occurred:', err);
        Linking.openURL("https://www.lyft.com/signup/SDKSIGNUP?clientId=qCWwfqShiQOO&sdkName=iOS_direct");
      });
  }

  render() {
    return(
      <TouchableHighlight onPress={this.buttonPress}>
          <View style={styles.lyftListing, styles.listing}>
            <Text style={[styles.lyftRideType, styles.type]}>{this.props.ride.display_name}</Text>
            <Text style={[styles.lyftCost, styles.cost]}><Text style={styles.dollar}>$</Text>{Math.round(this.props.ride.estimated_cost_cents_max / 100)}</Text>
            <Text style={[styles.lyftPrimeTime, styles.bonus]}>PrimeTime: {this.props.ride.primetime_percentage}</Text>
            <Text style={[styles.lyftRideTime, styles.time]}>Ride Time: {Math.floor(this.props.ride.estimated_duration_seconds / 60)} min</Text>
          </View>
      </TouchableHighlight>
    );
  }
}


const styles = StyleSheet.create({
  // highlighted: {
  //   backgroundColor: '#0B4F6C'
  // },

  listing: {
    paddingTop: 15,
    paddingRight: 20,
    paddingBottom: 15,
    width: 190,
    marginBottom: 20,
    // borderWidth: 2,
    // borderColor: '#0B4F6C',
    // borderRightWidth: 0,
    // shadowColor: '#0B4F6C',
    // shadowColor: '#083f56',
    // shadowOffset: {
    //   height: 0
    // },
    // shadowOpacity: 0.4,
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
    marginTop: -2
  },

  time: {
    color: '#0B4F6C',
    fontSize: 16,
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
