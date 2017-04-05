/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import MyMap from 'map_view_component.jsx';

class MyMap extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          mapType='standard'
          showsUserLocation={true}>
        </MapView>
      </View>
    );
  }
}

export default class lynk extends Component {
  render() {
    return (
      <MyMap />
    );
  }
}
// <View style={styles.container}>
//   <Text style={styles.welcome}>
//     Welcome to React Native!
//   </Text>
//   <Text style={styles.instructions}>
//     To get started, edit index.ios.js
//   </Text>
//   <Text style={styles.instructions}>
//     Press Cmd+R to reload,{'\n'}
//     Cmd+D or shake for dev menu
//   </Text>
// </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  // container: {
  //   flex: 1
  // },
  map: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  }
});

AppRegistry.registerComponent('lynk', () => lynk);
