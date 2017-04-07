import React, { Component } from 'react';
import MapView from 'react-native-maps';
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
import NextPg from './next_pg.js';
import  Button  from 'react-native-button';

class MyMap extends Component {
  constructor() {
    super();
    this.state = { currentLocation: 'Current Location', destination: 'Destination' };
  }

  _handleBackPress() {
    this.props.navigator.pop();
  }

  _handleNextPress(nextRoute) {
    this.props.navigator.push(nextRoute);
    // const newState = this.setState({text: "123 Spear St. San Francisco, CA"});
  }

  render() {
    const nextRoute = {
      component: NextPg,
      title: 'Lynk'
    };

    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          />
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          mapType='standard'
          showsUserLocation={true}
          zoomEnabled={true}>
        </MapView>
        <View style={{borderBottomColor: 'black'}}>
          <TextInput
            style={styles.inputForm}
            onChangeText={(currentLocation) => this.setState({currentLocation})}
            value={this.state.currentLocation} />
          <TextInput
            style={styles.inputForm}
            onChangeText={(destination) => this.setState({destination})}
            value={this.state.destination} />
        </View>
          <Button
            onPress={() => this._handleNextPress(nextRoute)}
            style={styles.button}
            containerStyle={styles.buttonContainer}>
            FIND A RIDE!
          </Button>
      </View>
    );
  }
}
// styleDisabled={{color: 'red'}}>
// <TouchableHighlight
//   style={styles.touchable}
//   onPress={() => this._handleNextPress(nextRoute)}
//   >
// </TouchableHighlight>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: 'ghostwhite',
    // justifyContent: 'center'
    textAlign: 'center',
    top: 200,
    right: 0,
    left: 0,
    bottom: 0,
    marginTop: 12
  },
  button: {
    color: 'white',
    fontSize: 18,
  },
  buttonContainer: {
    justifyContent: 'center',
    padding: 10,
    height: 80,
    width: 310,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#4682b4',
    top: 212,
    right: 0,
    left: 0,
    bottom: 0
  }
});

export default MyMap;
