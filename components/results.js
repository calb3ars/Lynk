import React, { Component } from 'react';
import RideResults from './ride_results';
import * as Parsers from './data_parser';
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

export default class Results extends Component {
  constructor(props){
    super(props);
    this.state = { lyftToken: this.props.form.lyftToken, uberToken: '',
                   lyftRides: undefined, uberRides: undefined,
                   uberData: {_65: undefined},
                   lyftUrl: this.props.form.lyftUrl,
                   uberUrl: this.props.form.uberUrl};
  }

  componentDidMount(){
    this.fetchUberRides();
    this.fetchLyftList();

  }


  fetchLyftToken(){
    let lyft_auth_token = 'cUNXd2ZxU2hpUU9POkhHUE5xcUtoQ1RONU5zSkRyS21sMjgzcG44TkFOUG56';
    let url = 'https://api.lyft.com/oauth/token';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic '+ lyft_auth_token
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
    }).catch(err => {
      console.log('Fetch Error :-S', err);
    });
  }

  fetchLyftList(){

    let lyftToken = this.state.lyftToken;
    let rideUrl = this.state.lyftUrl;
    fetch(rideUrl,{
      method: 'GET',
      headers: {
        'Authorization': 'bearer '+ lyftToken
      }
    }).then(response => {
        if (response.status !== 200){
          console.log('Looks like there was a problem. Status code: ' + response.status);
          return;
        }
        response.json().then(data => {
          this.setState({lyftRides: Parsers.LyftParser(data)});
        });
      }).catch(err => {
        console.log('Fetch Lyft Rides Error :-S', err);
      });
  }

  fetchUberRides(){
    let counter = 0;
    let url = this.state.uberUrl;
    let serverToken = 'Cwy6MC7KQ1jFGY_8cTA8UW6Ry145Y2eMlsypiXxG';
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token '+ serverToken,
        'Accept-Language': 'en_US'
      }
    }).then(response => {
      if (response.status !== 200){
        console.log('Looks like there was a problem. Status code: ' + response.status);
      }
      response.json().then(promise => {
        this.setState({uberRides: Parsers.UberParser(promise)});
      });
    }).catch(err => {
      console.log('Fetch Uber Rides Error :-S', err);
    });
  }


  render(){
    let pic = {
      uri: 'https://2ecyvk3piszv4e6gv2yz9867-wpengine.netdna-ssl.com/wp-content/uploads/2015/07/uber-and-lyft-side-by-side.png'
    };

    if (this.state.lyftRides && this.state.uberRides){
      return (
        <View style={styles.resultsContainer}>
          <Image source={pic} style={styles.logos}/>
          <RideResults lyftRides={this.state.lyftRides}
            uberRides={this.state.uberRides} />
        </View>
      );
    } else {
      return (
        <View style={styles.loadingContainer}>
          <Image source={require('../assets/Lynk_iPhone7.png')} style={styles.loading}/>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: '#EFFCFB',
    marginTop: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  resultsContainer: {
    flex: 1,
    backgroundColor: '#EFFCFB',
    marginTop: 50
  },

  logos: {
    width: 375,
    height: 140
  },

  listingsList: {
    flexDirection: 'row',
    alignSelf: 'center',
  },

  loading: {
    width: 390,
    height: 800,
  }
});
