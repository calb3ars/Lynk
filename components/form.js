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
    this.unfilledForm = true;
    this.setState.bind(this);
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

          this.unfilledForm = false;
          return this.unfilledForm;
      }
    else{
      this.unfilledForm = true;
      return this.unfilledForm;
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

  _handleBackPress() {
    this.props.navigator.pop();
  }

  _handleNextPress(nextRoute) {
    this.props.navigator.push(nextRoute);
    // const newState = this.setState({text: "123 Spear St. San Francisco, CA"});
  }

  handleButtonPress(nextRoute){
    // this.form.handleSubmit()
    //   .then
      (this._handleNextPress(nextRoute));
  }

  // <DestButton updateDest={this.updateDest}/>
  render(){

    const nextRoute = {
      component: Results,
      title: 'Results'
    };
    return(
      <View style={styles.formContainer}>
      <View style={{borderBottomColor: 'black'}}>
        <TextInput
          style={styles.inputForm}
          placeholder="Current Location"
          placeholderTextColor= '#26C4E0'
          onChangeText={(currentLocation) => this.setState({currentLocation})}
          value={this.state.currentLocation} />
        <TextInput
          style={styles.inputForm}
          placeholder="Destination"
          placeholderTextColor= '#26C4E0'
          onChangeText={(destination) => this.setState({destination})}
          value={this.state.destination} />
      </View>
      <View style={styles.passengerContainer}>
        <Text style={styles.passengerText}># Passengers</Text>
        <PassengerButton updateRiders={this.updateRiders.bind(this)} />
      </View>
        <Button
          disabled={this.unfilledForm}
          onPress={() => this.handleButtonPress(nextRoute)}
          style={styles.button}
          containerStyle={styles.buttonContainer}>
          FIND A RIDE!
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 350
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
    borderColor: '#083f56',
    color: '#26C4E0',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#083f56',
    // justifyContent: 'center'
    textAlign: 'center',
    marginTop: 10,
  },
  passengerContainer: {
    backgroundColor: '#083f56',
    width: 310,
    borderRadius: 4,
    marginTop: 10
  },
  passengerText: {
    textAlign: 'center',
    // fontWeight: 'bold',
    fontSize: 18,
    padding: 5,
    color: '#26C4E0',
    borderRadius: 4,
  },
  button: {
    color: '#26C4E0',
    fontSize: 18,
  },
  buttonContainer: {
    justifyContent: 'center',
    marginTop: 10,
    padding: 10,
    height: 60,
    width: 310,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#233D4D',
    right: 0,
    left: 0,
    bottom: 0
  }
});

export default Form;
