import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  NavigatorIOS,
  TextInput
} from 'react-native';

class NextPg extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Lyft vs. Uber</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50
  }
});

export default NextPg;
