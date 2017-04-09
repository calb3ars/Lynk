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
    // this.buttonPress.bind(this);
  }

  buttonPress(){
    // console.log('Lyft!!');
    // Linking.openURL('lyft://partner=qCWwfqShiQOO').then(() => {
    // Linking.openURL('lyft://ridetype?id=lyft&pickup[latitude]=37.764728&pickup[longitude]=-122.422999&destination[latitude]=37.7763592&destination[longitude]=-122.4242038').then(() => {
    Linking.openURL(this.props.lyftRedirectUrl)
    // .then(() => {
      // console.log('it worked!')})
      .catch(err => {
        // console.log('An error occurred:', err);
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
        onPress={this.buttonPress.bind(this)}
        underlayColor={'#FBF5F8'}
        onShowUnderlay={this._onShowUnderlay.bind(this)}
        onHideUnderlay={this._onHideUnderlay.bind(this)}
        style={ this.state.pressed ? styles.pressed : styles.unpressed }
      >

          <View style={styles.lyftListing, styles.listing}>
            <Text style={[styles.lyftRideType, styles.type]}>{this.props.ride.display_name}</Text>
            <Text style={[styles.lyftCost, styles.cost]}><Text style={styles.dollar}>$</Text>{Math.round(this.props.ride.estimated_cost_cents_max / 100)}</Text>
            <Text style={[styles.lyftRideTime, styles.time]}>Ride Time: {Math.floor(this.props.ride.estimated_duration_seconds / 60)} min</Text>
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
    backgroundColor: '#FBF5F8',
    opacity: 1,
  },

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
