'use strict';

const React = require('react');
const ReactNative = require('react-native');
const {
  Alert,
  Button,
  View,
  StyleSheet,
  Text,
  TouchableHighlight
} = ReactNative;


class PassengerButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      backgroundColor1: 'rgba(0,0,0,.1)',
      backgroundColor2: 'rgba(0,0,0,.1)',
      backgroundColor3: 'rgba(0,0,0,.1)'
    };
    this.setState.bind(this);
  }

  onButtonPress(target){
    const background = `backgroundColor${target}`;
    this.setState({selected: target,
      background: "orange"});
  }

  render(){
    return(
      <View style={styles.title}>
        <Text>Passengers</Text>
        <View style={styles.description}>
        <TouchableHighlight
        style={{ backgroundColor: this.state.backgroundColor1}}
        onPress={this.onButtonPress.bind(this, 1)}>
        <Text>1-2</Text>
        </TouchableHighlight>
        <TouchableHighlight
        style={{ backgroundColor: this.state.backgroundColor2}}
        onPress={this.onButtonPress.bind(this, 2)}>
        <Text>3-4</Text>
        </TouchableHighlight>
        <TouchableHighlight
        style={{ backgroundColor: this.state.backgroundColor3}}
        onPress={this.onButtonPress.bind(this, 3)}>
        <Text>5+</Text>
        </TouchableHighlight>
        </View>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  title: {
    flex: 1,
    position: "relative",
    flexDirection: "column",
    justifyContent: "center",
    width: 300,
    marginTop: 200,
    marginBottom: 400,
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
  },
  description: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: "white"
  },


});

module.exports = PassengerButtons;
