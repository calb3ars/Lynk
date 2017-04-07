import React, { Component } from 'react';
import MapView from 'react-native-maps';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';


class MyMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region:
        new MapView.AnimatedRegion({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 10,
        longitudeDelta: 5
      })
    };

    this.onRegionChange = this.onRegionChange.bind(this);
  }

  // componentDidMount() {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       this.setState({
  //
  //         initialRegion: {
  //           latitude: position.coords.latitude,
  //           longitude: position.coords.longitude
  //         }
  //       });
  //     },
  //     (error) => alert(JSON.stringify(error)),
  //     {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000}
  //   );
  // }

  onRegionChange(region) {
    this.state.region.setValue(region);

  }

  render() {
    let marker = {
      latlng: {
        latitude: 37.791557,
        longitude: -122.393171,
      },
      title: 'Destination',
      description: 'testPin'
    };

    return (
      <View style={styles.container}>
        <MapView.Animated
          style={styles.map}
          region={this.state.region}
          mapType='standard'
          onRegionChange={this.onRegionChange}

          zoomEnabled={true}
          showsUserLocation={true}
          followsUserLocation={true}
          showsMyLocationButton={true}
          showScale={true}
        >
          <MapView.Marker coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
          />
        </MapView.Animated>

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
  map: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  }
});

export default MyMap;
