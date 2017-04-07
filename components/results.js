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
    super(props)
    this.state = { lyftToken: '', uberToken: '', lyftRides: undefined, uberRides: undefined, uberData: {_65: undefined} };
  }

  componentDidMount(){
    this.fetchLyftToken();
    this.fetchLyftList();
    this.fetchUberRides();
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

  fetchLyftList(){
    let lyftToken = "gAAAAABY58mK-kpTZIayKvea1btHRMI0VSmebCamPzAqVxEW5o4FuHctaXndrYzrkrCvbPTdCRGIOZi3hZC-gymr4KLBkeapK6omhmuNZDeMbNq2LaprdUVCpG4GRCBoS2Hg5SDD59wNAqeMlavVpTz86xO3QtlJJSyW0xJkAPG1fhCWk84-nuhUUOjzZDaJah1rPTupxtedgmqTAHuCY8oSg8WoeYhSSQ==";
    let ride_url = 'https://api.lyft.com/v1/cost?start_lat=37.7763&start_lng=-122.3918&end_lat=37.7972&end_lng=-122.4533';
    fetch(ride_url,{
      method: 'GET',
      headers: {
        'Authorization': 'bearer '+ lyftToken
      }
    }).then(response => {
        response.json().then(data => {
          this.setState({lyftRides: Parsers.LyftParser(data)})
        })
      })
  }

  fetchUberRides(){
    let counter = 0;
    let url = 'https://api.uber.com/v1.2/estimates/price?start_latitude=37.7763&start_longitude=-122.3918&end_latitude=37.7972&end_longitude=-122.4533';
    let server_token = 'Cwy6MC7KQ1jFGY_8cTA8UW6Ry145Y2eMlsypiXxG';
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token '+ server_token,
        'Accept-Language': 'en_US'
      }
    }).then(response => {
      response.json().then(promise => {
        this.setState({uberRides: Parsers.UberParser(promise)})

      })
    })
  }


  render(){
    let pic = {
      uri: 'https://2ecyvk3piszv4e6gv2yz9867-wpengine.netdna-ssl.com/wp-content/uploads/2015/07/uber-and-lyft-side-by-side.png'
    };

    // console.log(this.state.lyftToken);
    // console.log(this.state.lyftRides);
    // console.log(this.state.uberRides);
    // console.log(this.state.uberData);
    // if (this.state.uberData._65){
    //   console.log(this.state.uberData._65.products);
    // }

    if (this.state.lyftRides && this.state.uberRides){
      return (
        <View style={styles.container}>
          <Image source={pic} style={styles.logos}/>
          <RideResults lyftRides={this.state.lyftRides} uberRides={this.state.uberRides} />
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Image source={require('../assets/download.gif')} style={styles.loading}/>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B4F6C',
    marginTop: 50,
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
    width: 375,
    height: 375,
  }
});
