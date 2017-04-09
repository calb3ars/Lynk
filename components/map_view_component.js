import React, { Component } from 'react';
import MapView from 'react-native-maps';
import Results from './results';
import Button  from 'react-native-button';
import {
  StyleSheet,
  View,
  Text,
  NavigatorIOS,
  TouchableHighlight,
  StatusBar,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';



class MyMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentLocation: 'Current Location',
      destination: 'Destination',
      region:
        new MapView.AnimatedRegion({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 10,
        longitudeDelta: 5
      })
    };
    // this.addEventListener('markStart', () => this.markStart());
    // this.addEventListener('markEnd', () => this.markEnd());
    this.onRegionChange = this.onRegionChange.bind(this);
  }

    _handleBackPress() {
    this.props.navigator.pop();
  }

  _handleNextPress(nextRoute) {
    this.props.navigator.push(nextRoute);
  }

  onRegionChange(region) {
    this.state.region.setValue(region);

  }

  render() {
    const nextRoute = {
      component: Results,
      title: 'Results'
    };
    let marker = {
      latlng: {
        latitude: 37.791557,
        longitude: -122.393171,
      },
      title: 'Destination',
      description: 'testPin'
    };

    return (


        <MapView.Animated
          style={styles.map}
          region={this.state.region}
          mapType='standard'
          onRegionChange={this.onRegionChange}
          zoomEnabled={true}
          showsUserLocation={true}
          followsUserLocation={true}
          showsMyLocationButton={true}
          showScale={true}
        >
          <MapView.Marker coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
          />

      </MapView.Animated>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFFCFB',
  },
  map: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  inputForm: {
    height: 35,
    width: 310,
    borderColor: '#083f56',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#233D4D',
    // justifyContent: 'center'
    textAlign: 'center',
    top: 200,
    right: 0,
    left: 0,
    bottom: 0,
    marginTop: 12
  },
  button: {
    color: '#ABF2EB',
    fontSize: 18,
  },
  buttonContainer: {
    justifyContent: 'center',
    padding: 10,
    height: 76,
    width: 310,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#083f56',
    top: 212,
    right: 0,
    left: 0,
    bottom: 0
  }
});

export default MyMap;
