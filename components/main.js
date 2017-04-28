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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
});

export default Main;
