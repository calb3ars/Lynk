/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
// import Results from './components/results';

import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';

import MyMap from './map_view_component.js';

export default class lynk extends Component {

  render() {

   return (
      <MyMap />
    );
  }
}

const styles = StyleSheet.create({
   map: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  }
});

//      let pic = {
//       uri: 'https://2ecyvk3piszv4e6gv2yz9867-wpengine.netdna-ssl.com/wp-content/uploads/2015/07/uber-and-lyft-side-by-side.png'
//     };


//     <View style={styles.container}>
//         <Image source={pic} style={styles.logos}/>
//         <RideResults />
//     </View>


// logos: {
//   width: 375,
//   height: 180
// },

//   container: {
//     flex: 1,
//     backgroundColor: '#0B4F6C',
//     marginTop: 20,
//   },

//   logos: {
//     width: 375,
//     height: 140
//   },

//   listingsList: {
//     flexDirection: 'row',
//     alignSelf: 'center',
//   },

AppRegistry.registerComponent('lynk', () => lynk);
