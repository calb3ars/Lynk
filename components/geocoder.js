import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Geocoder from 'react-native-geocoding';

class Location extends Component {
  constructor() {
    super();
    this.state = {lat: "", lng: ""};

    this.fetchCoords();
  }



  render() {
    return (
      <View>
        <Text style={styles.text}>{this.state.lat}</Text>
        <Text style={styles.text}>{this.state.lng}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 100
  }
});

export default Location;
