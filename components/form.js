import React, { Component } from 'react';
import Results from './results';
import MyMap from './map_view_component';
import PassengerButton from './passenger_button';
import Button  from 'react-native-button';
import Location from './geocoder.js';
import Geocoder from 'react-native-geocoding';
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
      startLng: undefined,
      startLat: undefined,
      endLng: undefined,
      endLat: undefined,
      riders: undefined,
      lyftToken: undefined,
      startAddress: undefined,
      endAddress: undefined,
      unfilledForm: true,
      error: ""
    };
    this.updateRiders.bind(this);
    this.updateDest.bind(this);
    this.setState.bind(this);
    this.getStartCoords.bind(this);
    this.getEndCoords.bind(this);
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          startLat: position.coords.latitude,
          startLng: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    this.fetchLyftToken();
  }

  fetchLyftToken(){
    let lyft_token = 'cUNXd2ZxU2hpUU9POkhHUE5xcUtoQ1RONU5zSkRyS21sMjgzcG44TkFOUG56';
    let url = 'https://api.lyft.com/oauth/token';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic '+ lyft_token
      },
      body: JSON.stringify({
        "grant_type": "client_credentials",
        "scope": "public"
      })
    }).then(response => {
        response.json().then(data => {
        this.setState({lyftToken:`${data.access_token}`});
      });
    });
  }


  shouldComponentUpdate(){
    console.log(this.state);
    if(this.state.endLat !== undefined &&
        this.state.endLng !== undefined &&
        this.state.riders !== undefined) {

          this.setState({unfilledForm: false});
          console.log(this.state);
      }
    return true;
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

  getStartCoords(address) {
    Geocoder.setApiKey('AIzaSyBU2mqWr39IFNszvttIscbHpZQpDfDe_dY');
    Geocoder.getFromLocation(address).then(
      json => {
        let location = json.results[0].geometry.location;
        this.setState({starttLat: location.lat, startLng: location.lng});
      }
    );
  }

  getEndCoords(address) {
    Geocoder.setApiKey('AIzaSyBU2mqWr39IFNszvttIscbHpZQpDfDe_dY');
    Geocoder.getFromLocation(address).then(
      json => {
        let location = json.results[0].geometry.location;
        this.setState({endLat: location.lat, endLng: location.lng});
      }
    );
  }



  handleButtonPress(){
    let nextRoute = {
      component: Results,
      title: 'Results',
      passProps: { form: this.state }
    };
    this._handleNextPress(nextRoute);
  }

  // <DestButton updateDest={this.updateDest}/>
  render(){

    return(
      <View style={styles.formContainer}>
      <View style={{borderBottomColor: 'black'}}>
        <TextInput
          style={styles.inputForm}
          placeholder="Current Location"
          onChangeText={(startAddress) => this.setState({startAddress})}
          onSubmitEditing={(startAddress) => this.getStartCoords(startAddress)}
          value={this.state.currentLocation} />
        <TextInput
          style={styles.inputForm}
          placeholder="Destination"
          onChangeText={(endAddress) => this.setState({endAddress})}
          onSubmitEditing={(endAddress) => this.getEndCoords(endAddress)}
          value={this.state.destination} />
      </View>
        <PassengerButton updateRiders={this.updateRiders.bind(this)} />
        <Button
          disabled={this.state.unfilledForm}
          onPress={() => this.handleButtonPress()}
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
