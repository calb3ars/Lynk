import React, { Component } from 'react';
import MapView from 'react-native-maps';
import {
  StyleSheet,
  View,
  Text,
  NavigatorIOS,
  TouchableHighlight,
  StatusBar,
  TextInput
} from 'react-native';
import InputForm from './input_form.js';
import NextPg from './next_pg.js';

class MyMap extends Component {
  constructor() {
    super();
    // this.state = {currentLocation: "Current Location", destination: "Destination"};
    this.state = { text: 'Current Location'};
  }

  _handleBackPress() {
    this.props.navigator.pop();
  }

  _handleNextPress(nextRoute) {
    this.props.navigator.push(nextRoute);
    this.state.setState({currentLocation: "123 Spear St. San Francisco, CA"});
  }

  render() {
    const nextRoute = {
      component: NextPg,
      title: 'Lynk'
    };
    const currentLocation = this.state.currentLocation;

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
            onChangeText={(text) => this.setState({text})}
            value={this.state.text} />
        </View>
        <TouchableHighlight style={styles.touchable} onPress={() => this._handleNextPress(nextRoute)}>
          <Text style={styles.text}>See you on the next page!</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

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
  text: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: 'ghostwhite'
  },
  touchable: {
    // flex: 1,
    top: 275,
    right: 0,
    left: 0,
    bottom: 0
  },
  inputForm: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'ghostwhite',
    // justifyContent: 'center'
    textAlign: 'center',
    top: 200,
    right: 0,
    left: 0,
    bottom: 0
  }
});

export default MyMap;
