import React, { Component } from 'react';
import Results from './results';
import MyMap from './map_view_component';
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
    this.state = {
      startPoint: undefined,
      endPoint: undefined
    };
  }

  markStartMap(start) {
    this.setState({startPoint: start});
  }
  markEndMap(end) {
    this.setState({endPoint: end});
  }

  render() {
    return(
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
        />
      <MyMap markStart={this.state.startPoint}
             markEnd={this.state.endPoint}/>
      <Form navigator={this.props.navigator}
        markStartMap={this.markStartMap.bind(this)}
        markEndMap={this.markEndMap.bind(this)}/>
      </View>
    );
  }
}


export default Main;
