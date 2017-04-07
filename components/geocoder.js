import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Geocoder from 'react-native-geocoding';

class Location extends Component {
  constructor() {
    super();
    this.state = {lat: "", lng: ""};

    this.fetchCoords();
  }

  fetchCoords() {
    Geocoder.setApiKey('AIzaSyBU2mqWr39IFNszvttIscbHpZQpDfDe_dY');
    Geocoder.getFromLocation("Palace of Fine Arts").then(
      json => {
        let location = json.results[0].geometry.location;
        this.setState({lat: location.lat, lng: location.lng});
        console.log(location.lat + "," + location.lng);
      }
    );
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
