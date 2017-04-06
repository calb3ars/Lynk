/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import Results from './components/results';

import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

export default class lynk extends Component {
  render() {
    return (
      <Results />
    );
  }
}



AppRegistry.registerComponent('lynk', () => lynk);
