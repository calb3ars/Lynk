'use strict';

const React = require('React');
const ReactNative = require('react-native');
const {
  KeyboardAvoidingView,
  Keyboard,
  Modal,
  SegmentedControlIOS,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} = ReactNative;

class KeyboardDest extends React.Component {
  constructor() {
    super();
    this.state = {
      behavior: 'padding',
      modalOpen: false,
    };
    this.setState.bind(this);
  }

  render() {
    return (

      <View style={styles.outerContainer}>
      <View syle={styles.container}>
          <View style={styles.destinationInput}>
          <TextInput
            placeholder="Destination"
            style={styles.textInput}/>
          </View>
        </View>
      </View>
    );
  }
}
// <TouchableHighlight onPress={() => this.setState({modalOpen: true})}>
// </TouchableHighlight>

// <Text style={styles.destinationText}>Destination</Text>
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    height: 44,
    paddingHorizontal: 10,
  },
  destinationInput: {
    marginTop: 350,
    bottom: 0,
    width: 300,
    paddingHorizontal: 1,
    backgroundColor: "white",
  },
  destinationText: {
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: "white",
  }
});

module.exports = KeyboardDest;
