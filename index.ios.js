/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component, PropTypes } from 'react';
import Main from './components/main';


import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View,
  NavigatorIOS,
  StatusBar
} from 'react-native';
import MapView from 'react-native-maps';
import MyMap from './components/map_view_component';

export default class lynk extends Component {

  render() {
    return (
        <NavigatorIOS
          titleTextColor='black'
          tintColor='black'
          translucent={true}
          initialRoute={{
            component: Main,
            title: 'Map',
            backButtonTitle: 'Back'
          }}
          style={styles.wrapper}/>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
});

AppRegistry.registerComponent('lynk', () => lynk);
