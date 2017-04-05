import React, { Component } from 'react';
import MapView from 'react-native-maps';
import {
  View,
  Text
} from 'react-native';


class Map extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView>

        </MapView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  }
});
export default Map;
