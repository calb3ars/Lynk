import React, { Component } from 'react';
import RideResults from './ride_results';
import * as Parsers from './data_parser';
import * as API from './api_util';
import * as KEYS from './key';
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
                   uberUrl: this.props.form.uberUrl,
                   lyftRedirectUrl: this.props.form.lyftRedirectUrl,
                   uberRedirectUrl: this.props.form.uberRedirectUrl,
                   riders: this.props.form.riders
                 };
  }

  componentDidMount(){
    this.getLyftRides();
    this.getUberRides();
  }

  getLyftRides(){
    let token = this.state.lyftToken;
    let url = this.state.lyftUrl;

    API.fetchLyftRides(token, url).then(response => {
      if (response.status !== 200){
        console.log('fetchLyftRides. Status code: ' + response.status);
        return;
      }
      response.json().then(data => {
        this.setState({lyftRides: Parsers.LyftParser(data, this.state.riders)});
      });
    }).catch(err => {
      console.log('Fetch Lyft Rides Error :-S', err);
    });
  }

  getUberRides(){
    let url = this.state.uberUrl;
    API.fetchUberRides(url).then(response => {
      if (response.status !== 200){
        console.log('fetchUberRides. Status code: ' + response.status);
        response.json().then(data => {
          alert('Uber Error: ' + data.message);
        })
        return;
      }
      response.json().then(data => {
        this.setState({uberRides: Parsers.UberParser(data, this.state.riders)});
      });
    }).catch(err => {
      console.log('Fetch Uber Rides Error :-S', err);
    });
  }

  render(){

    if (this.state.lyftRides && this.state.uberRides){
      return (
        <View style={styles.resultsContainer}>
          <Image source={require('../assets/lyft_uber_2.png')} style={styles.logos}/>
          <RideResults lyftRides={this.state.lyftRides}
            uberRides={this.state.uberRides}
            lyftRedirectUrl={this.state.lyftRedirectUrl}
            uberRedirectUrl={this.state.uberRedirectUrl} />
        </View>
      );
    } else {
      return (
        <View style={styles.loadingContainer}>
          <Image source={require('../assets/loading.gif')} style={styles.loading}/>
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
    marginTop: 65
  },

  logos: {
    width: 375,
    height: 120,
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
