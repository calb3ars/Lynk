import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  NavigatorIOS,
  TouchableHighlight,
  StatusBar,
  TextInput
} from 'react-native';
import NextPg from './next_pg.js';


class InputForm extends Component {
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
      <TouchableHighlight style={styles.touchable} onPress={() => this._handleNextPress(nextRoute)}>
        
        <Text style={styles.text}>See you on the next page!</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
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
    bottom: 0,
  }
});

export default InputForm;
