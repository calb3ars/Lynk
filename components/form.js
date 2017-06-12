import React, { Component } from 'react';
import Results from './results';
import PassengerButton from './passenger_button';
import Button  from 'react-native-button';
import Geocoder from 'react-native-geocoding';
import * as API from './api_util';
import * as KEYS from './key';

import {
  StyleSheet,
  View,
  Text,
  NavigatorIOS,
  TouchableHighlight,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
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
      error: ""

    };
    this.updateRiders.bind(this);
    this.setState.bind(this);
    this.getStartCoords.bind(this);
    this.getEndCoords.bind(this);
    this.createUrl.bind(this);
    this.getCoords.bind(this);
    this.drawMarks.bind(this);
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
        }, this.getStartAddress(position.coords.latitude, position.coords.longitude));
      },
      (error) => {
        this.setState({ error: error.message })
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    this.getLyftToken();
  }

  getLyftToken(){
    API.fetchLyftToken().then(response => {
      if (response.status !== 200){
        return;
      }
      response.json().then(json => {
        this.setState({ lyftToken: `${json.access_token}` });
      })
    })
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
    Geocoder.setApiKey(KEYS.googleApiKey);
    Geocoder.getFromLocation(address).then(json => {
        let location = json.results[0].geometry.location;
        this.setState({startLat: location.lat, startLng: location.lng}, () => {
          // this.getStartAddress(this.state.startLat, this.state.startLng);
          this.createUrl();
        });
      }
    ).catch(error => {
      this.setState( { error: "Invalid Pickup Location" } );
    });
  }

  getEndCoords(address) {
    Geocoder.setApiKey(KEYS.googleApiKey);
    Geocoder.getFromLocation(address).then(json => {
        let location = json.results[0].geometry.location;
        this.setState({endLat: location.lat, endLng: location.lng}, () => {
          // this.getEndAddress(this.state.endLat, this.state.endLng);
          this.createUrl();
        });
      }
    ).catch(error => {
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

  getStartAddress(lat,lng) {
    API.fetchAddress(lat, lng).then(response => {
      if (response.status !== 200){
        console.log('getAddress. Status code: ' + response.status);
        return;
      }
      response.json().then(data => {
        this.setState({ startAddress: data["results"][0]["formatted_address"] });
      })
    }).catch(err => {
      console.log('Get Address Error: ', err);
    })
  }

  getEndAddress(lat,lng) {
    API.fetchAddress(lat, lng).then(response => {
      if (response.status !== 200){
        console.log('getAddress. Status code: ' + response.status);
        return;
      }
      response.json().then(data => {
        this.setState({ endAddress: data["results"][0]["formatted_address"] });
      })
    }).catch(err => {
      console.log('Get Address Error: ', err);
    })
  }

  drawMarks(){
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
  }
  createUrl(){
    this.drawMarks()
    if(this.state.startLng && this.state.startLat && this.state.endLng
       && this.state.endLat) {
      let startLat = this.state.startLat.toFixed(6);
      let startLng = this.state.startLng.toFixed(6);
      let endLat = this.state.endLat.toFixed(6);
      let endLng = this.state.endLng.toFixed(6);

      urls = API.generateUrls(startLat, startLng, endLat, endLng);

      this.setState({
        lyftUrl: urls.lyft,
        lyftRedirectUrl: urls.lyftRedirect,
        uberUrl: urls.uber,
        uberRedirectUrl: urls.uberRedirect
      })
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
    } else {
      error_msg = <Text style={{backgroundColor: 'transparent'}}></Text>
    }
    return(
      <View style={styles.formContainer}>
        {error_msg}
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <TextInput
            style={styles.inputForm}
            autoFocus={false}
            autoCapitalize={'words'}
            placeholder="Pickup Location"
            placeholderTextColor= '#A7D1CC'
            clearButtonMode="always"
            onChangeText={(startAddress) => this.setState({startAddress}, this.clearErrors.bind(this))}
            onSubmitEditing={() => {
              this.getCoords();
              this.refs.SecondInput.focus();
            }}
            value={this.state.startAddress} />

          <TextInput
            ref='SecondInput'
            style={styles.inputForm}
            placeholder="Destination"
            autoCapitalize={'words'}
            onChangeText={(endAddress) => this.setState({endAddress}, this.clearErrors.bind(this))}
            onSubmitEditing={() => this.getCoords()}
            placeholderTextColor= '#A7D1CC'
            clearButtonMode="always"
            value={this.state.endAddress} />
        </KeyboardAvoidingView>
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
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
  },
  inputForm: {
    height: 35,
    width: 310,
    fontSize: 14,
    fontFamily: 'Avenir-Medium',
    borderColor: '#0B4F6C',
    color: '#0B4F6C',
    borderWidth: 0.5,
    borderRadius: 1,
    backgroundColor: '#EFFCFB',
    textAlign: 'center',
    marginBottom: 10,
  },
  passengerContainer: {
    width: 310,
    borderWidth: 0.5,
    borderRadius: 1,
    borderColor: '#0B4F6C',
    backgroundColor: '#EFFCFB',
    marginBottom: 10
  },
  passengerText: {
    textAlign: 'center',
    fontFamily: 'Avenir-Medium',
    fontSize: 14,
    padding: 5,
    color: '#0B4F6C',
  },
  button: {
    color: '#EFFCFB',
    fontSize: 16,
    fontFamily: 'Avenir-Medium',
  },
  buttonContainer: {
    justifyContent: 'center',
    marginBottom: 10,
    height: 40,
    width: 310,
    overflow: 'hidden',
    borderRadius: 4,
    borderColor: '#0B4F6C',
    borderWidth: 0.5,
    backgroundColor: '#0B4F6C',
  },
  errors: {
    width: 310,
    fontSize: 14,
    borderColor: '#0B4F6C',
    borderWidth: 0.5,
    borderRadius: 4,
    backgroundColor: '#EFFCFB',
    fontFamily: 'Avenir-Medium',
    textAlign: 'center',
    alignSelf: 'center',
    color: 'red',
    padding: 5
  }
});

export default Form;
