import React, { Component } from 'react';
import Results from './results';
import MyMap from './map_view_component';
import PassengerButton from './passenger_button';
import Button  from 'react-native-button';
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

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      startLon: undefined,
      startLat: undefined,
      endLon: undefined,
      endLat: undefined,
      riders: undefined,
      error: ""
    };
    this.update.bind(this);
    this.updateRiders.bind(this);
    this.updateDest.bind(this);
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          startLat: position.coords.latitude,
          startLon: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  shouldComponentUpdate(){
    if(this.state.endLat !== undefined &&
        this.state.endLon !== undefined &&
        this.state.riders !== undefined) {
          this.props.unfilledForm(false);
      }
    else{
      this.props.unfilledForm(true);
    }
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  handleSubmit() {

  }

  updateRiders(passengers) {
    this.setState({riders: passengers});
  }

  updateDest(latitude, longitude) {
    this.setState({
      endLat: latitude,
      endLon: longitude
    });
  }

  // <DestButton updateDest={this.updateDest}/>
  render(){
    return(
      <View style={styles.formContainer}>
      <View style={{borderBottomColor: 'black'}}>
        <TextInput
          style={styles.inputForm}
          placeholder="Current Location"
          onChangeText={(currentLocation) => this.setState({currentLocation})}
          value={this.state.currentLocation} />
        <TextInput
          style={styles.inputForm}
          placeholder="Destination"
          onChangeText={(destination) => this.setState({destination})}
          value={this.state.destination} />
      </View>
        <PassengerButton updateRiders={this.updateRiders} />
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

export default Form;
