import React, { Component } from 'react';
import MapView from 'react-native-maps';
import {
  StyleSheet,
  View,
  Text,
  NavigatorIOS,
  TouchableHighlight,
  StatusBar
} from 'react-native';
import NextPg from './next_pg.js';


class MyMap extends Component {
  _handleBackPress() {
    this.props.navigator.pop();
  }

  _handleNextPress(nextRoute) {
    this.props.navigator.push(nextRoute);
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
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'ghostwhite'
  },
  touchable: {
    // flex: 1,
    top: 300,
    right: 0,
    left: 0,
    bottom: 0,
  }
});

export default MyMap;
