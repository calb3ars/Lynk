import React, { Component } from 'react';
import Results from './results';
import MyMap from './map_view_component';
import PassengerButton from './passenger_button';
import Button from 'react-native-button';
import Form from './form';
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

class Main extends Component{
  constructor(props){
    super(props);
  }

  render() {
    return(
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
        />
        <MyMap/>
        <Form navigator={this.props.navigator}/>
      </View>
    );
  }
}


export default Main;
