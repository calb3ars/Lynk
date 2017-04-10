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
  KeyboardAvoidingView,
  Keyboard
} from 'react-native';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      startLng: undefined,
      startLat: undefined,
      endLng: undefined,
      endLat: undefined,
      riders: '1 - 2',
      lyftToken: undefined,
      startAddress: undefined,
      endAddress: undefined,
      unfilledForm: true,
      lyftUrl: "",
      uberUrl: "",
      keyboard: false,
      error: ""

    };
    this.updateRiders.bind(this);
    this.setState.bind(this);
    this.getStartCoords.bind(this);
    this.getEndCoords.bind(this);
    this.createUrl.bind(this);
    this.getCoords.bind(this);

  }

  clearErrors(){
    if (this.state.error !== ""){
      this.setState({ error: "" });
    }
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          startLat: position.coords.latitude,
          startLng: position.coords.longitude,
          error: "",
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    this.fetchLyftToken();
    Keyboard.addListener('keyboardDidShow', () => this.setState({keyboard: true}));
    Keyboard.addListener('keyboardDidHide', () => this.setState({keyboard: false}));
  }

  fetchLyftToken(){
    let lyftToken = 'cUNXd2ZxU2hpUU9POkhHUE5xcUtoQ1RONU5zSkRyS21sMjgzcG44TkFOUG56';
    let url = 'https://api.lyft.com/oauth/token';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic '+ lyftToken
      },
      body: JSON.stringify({
        "grant_type": "client_credentials",
        "scope": "public"
      })
    }).then(response => {
      if (response.status !== 200){
        console.log('Looks like there was a problem. Status code: ' + response.status);
        return;
      }
        response.json().then(data => {
          this.setState({lyftToken:`${data.access_token}`});
      });
    });
  }

  updateRiders(passengers) {
    this.setState({riders: passengers});
  }

  _handleBackPress() {
    this.props.navigator.pop();
  }

  _handleNextPress(nextRoute) {
    this.props.navigator.push(nextRoute);
  }

  getStartCoords(address) {
    Geocoder.setApiKey('AIzaSyBU2mqWr39IFNszvttIscbHpZQpDfDe_dY');
    Geocoder.getFromLocation(address).then(
      json => {
        let location = json.results[0].geometry.location;
        this.setState({startLat: location.lat, startLng: location.lng}, this.createUrl);
      }
    ).catch(error => {
      console.log(error.message);
      this.setState( { error: "Invalid Pickup Location" } );
    });
  }

  getEndCoords(address) {
    Geocoder.setApiKey('AIzaSyBU2mqWr39IFNszvttIscbHpZQpDfDe_dY');
    Geocoder.getFromLocation(address).then(
      json => {
        let location = json.results[0].geometry.location;
        this.setState({endLat: location.lat, endLng: location.lng}, this.createUrl);
      }
    ).catch(error => {
      console.log(error);
      this.setState( { error: "Invalid Destination" } );
    });
  }

  getCoords() {
    if(this.state.startAddress !== undefined){
      this.getStartCoords(this.state.startAddress);
    }
    if(this.state.endAddress !== undefined){
      this.getEndCoords(this.state.endAddress);
    }
  }

  createUrl(){
    if(this.state.startLng &&
      this.state.startLat){
        let sMark =
          {lat:this.state.startLat,
           lng:this.state.startLng
          };
        this.props.markStartMap(sMark);
      }
    if(this.state.endLng &&
      this.state.endLat) {
        let eMark =
          {lat:this.state.endLat,
           lng:this.state.endLng
          };
        this.props.markEndMap(eMark);
      }
    if(this.state.startLng &&
      this.state.startLat &&
      this.state.endLng &&
      this.state.endLat) {
        let startLat = this.state.startLat.toFixed(4);
        let startLng = this.state.startLng.toFixed(4);
        let endLat = this.state.endLat.toFixed(4);
        let endLng = this.state.endLng.toFixed(4);
        this.setState({lyftUrl: `https://api.lyft.com/v1/cost?start_lat=${startLat}&start_lng=${startLng}&end_lat=${endLat}&end_lng=${endLng}`,
                       lyftRedirectUrl: `lyft://ridetype?id=lyft&pickup[latitude]=${startLat}&pickup[longitude]=${startLng}&destination[latitude]=${endLat}&destination[longitude]=${endLng}`,
                       uberUrl: `https://api.uber.com/v1.2/estimates/price?start_latitude=${startLat}&start_longitude=${startLng}&end_latitude=${endLat}&end_longitude=${endLng}`,
                       uberRedirectUrl: `uber://?client_id=<NQ5t_E_CebtAze6Ci44XFTdiJtM2GH8x>&action=setPickup&pickup[latitude]=${startLat}&pickup[longitude]=${startLng}&dropoff[latitude]=${endLat}&dropoff[longitude]=${endLng}`})
      }
  }

  handleButtonPress(){
    let nextRoute = {
      component: Results,
      title: 'Results',
      passProps: { form: this.state }
    };
    this._handleNextPress(nextRoute);
  }

  render(){
    if (this.state.error !== ""){
      error_msg = <Text style={styles.errors}>{this.state.error}</Text>
      console.log('there is an error');
    } else {
      console.log('there is no error');
      error_msg = <Text style={{backgroundColor: 'transparent'}}></Text>
      // debugger;
    }
    return(
      <View style={styles.formContainer}>
        {error_msg}
        <View style={{height: this.state.keyboard ? 300 : 90 }}>
          <TextInput
            style={styles.inputForm}
            autoFocus={true}
            autoCapitalize={'words'}
            placeholder="Pickup Location"
            placeholderTextColor= '#A7D1CC'
            onChangeText={(startAddress) => this.setState({startAddress}, this.clearErrors.bind(this))}
            onSubmitEditing={() => this.getCoords()}
            value={this.state.currentLocation} />
          <TextInput
            style={styles.inputForm}
            placeholder="Destination"
            autoCapitalize={'words'}
            onChangeText={(endAddress) => this.setState({endAddress}, this.clearErrors.bind(this))}
            onSubmitEditing={() => this.getCoords()}
            placeholderTextColor= '#A7D1CC'
            value={this.state.destination} />
        </View>
        <View style={styles.passengerContainer}>
          <Text style={styles.passengerText}># Seats</Text>
          <PassengerButton updateRiders={this.updateRiders.bind(this)} />
        </View>
        <Button
          disabled={this.state.endLat === undefined ||
              this.state.endLng === undefined ||
              this.state.uberUrl === "" ||
              this.state.lyftUrl === "" }
          onPress={() => this.handleButtonPress()}
          style={styles.button}
          containerStyle={styles.buttonContainer}>
          Find Your Ride
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
    marginTop: 350,
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
    fontSize: 14,
    borderColor: '#2F5268',
    color: '#26646A',
    // fontWeight: 'bold',
    borderWidth: 0.5,
    borderRadius: 1,
    // backgroundColor: '#26646A',
    backgroundColor: '#EFFCFB',
    // justifyContent: 'center'
    textAlign: 'center',
    marginTop: 10,
  },
  passengerContainer: {
    width: 310,
    borderWidth: 0.5,
    borderRadius: 1,
    borderColor: '#26646A',
    backgroundColor: '#EFFCFB',
    marginTop: 10
  },
  passengerText: {
    textAlign: 'center',
    // fontWeight: 'bold',
    fontSize: 14,
    padding: 5,
    color: '#26646A',
  },
  button: {
    color: '#EFFCFB',
    fontSize: 16,
  },
  buttonContainer: {
    justifyContent: 'center',
    marginTop: 10,
    padding: 10,
    height: 40,
    width: 310,
    overflow: 'hidden',
    borderRadius: 4,
    borderColor: '#26646A',
    borderWidth: 0.5,
    backgroundColor: '#26646A',
    right: 0,
    left: 0,
    bottom: 0
  },
  errors: {
    // height: 35,
    width: 310,
    fontSize: 14,
    borderColor: '#2F5268',
    // fontWeight: 'bold',
    borderWidth: 0.5,
    borderRadius: 4,
    // backgroundColor: '#26646A',
    backgroundColor: '#EFFCFB',
    // justifyContent: 'center',
    // verticalAlign: 'center',
    // alignItems: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    // marginTop: 10,
    color: 'red',
    padding: 5
  }
});

export default Form;
