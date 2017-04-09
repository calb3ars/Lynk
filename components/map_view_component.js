import React, { Component } from 'react';
import MapView from 'react-native-maps';
import Results from './results';
import Button  from 'react-native-button';
import {
  StyleSheet,
  View,
  Text,
  NavigatorIOS,
  TouchableHighlight,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  NativeEventEmitter
} from 'react-native';



class MyMap extends Component {

  constructor(props) {
    super(props);
    this.mapRef = null;
    this.state = {
      currentLocation: 'Current Location',
      destination: 'Destination',
      startMark: undefined,
      endMark: undefined,
      region:
        new MapView.AnimatedRegion({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 10,
        longitudeDelta: 5
      }),
      line: undefined
    };
    this.makeMarkStart = this.makeMarkStart.bind(this);
    this.makeMarkEnd = this.makeMarkEnd.bind(this);
    this.onRegionChange = this.onRegionChange.bind(this);
    this.animateToNewRegion = this.animateToNewRegion.bind(this);
    this.drawLine = this.drawLine.bind(this);
  }

  animateToNewRegion() {
    if(this.state.startMark !== undefined && this.state.endMark !== undefined){
      let newRegionData = this.getRegionForCoordinates([this.state.startMark, this.state.endMark]);
      let newRegion = new MapView.AnimatedRegion(newRegionData);
      this.setState({region: newRegion}, this.drawLine);
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let currentPos = { lat: position.coords.latitude,
                            lng: position.coords.longitude};
        this.makeMarkStart(currentPos);
      }
    );
  }

  componentWillReceiveProps(newProps) {
    if(this.props !== newProps){
      if(newProps.markStart !== this.state.startMark){
        if(newProps.markStart !== undefined){
          this.makeMarkStart(newProps.markStart);
        }
      }
      if(newProps.markEnd !== this.state.endMark){
        if(newProps.markEnd !== undefined){
          this.makeMarkEnd(newProps.markEnd);
        }
      }
    }
  }

  getRegionForCoordinates(points) {
  // points should be an array of { latitude: X, longitude: Y }
  let minX = 999;
  let maxX = -999;
  let minY = 999;
  let maxY = -999;

  points.map((point) => {
    minX = Math.min(minX, parseFloat(point.latlng.latitude));
    maxX = Math.max(maxX, parseFloat(point.latlng.latitude));
    minY = Math.min(minY, parseFloat(point.latlng.longitude));
    maxY = Math.max(maxY, parseFloat(point.latlng.longitude));
  });

  const midX = (minX + maxX) / 2;
  const midY = (minY + maxY) / 2 + 0.001;
  const deltaX = 2*(maxX - minX);
  const deltaY = 2*(maxY - minY);

  return {
    latitude: midX,
    longitude: midY,
    latitudeDelta: deltaX,
    longitudeDelta: deltaY
  };
}

    _handleBackPress() {
    this.props.navigator.pop();
  }

  _handleNextPress(nextRoute) {
    this.props.navigator.push(nextRoute);
  }

  onRegionChange(region) {
    this.state.region.setValue(region);

  }

  drawLine(){
    let arr = [this.state.startMark.latlng,
              this.state.endMark.latlng];
    let line = {
      coordinates: arr
    };
    this.setState({line: line});
  }

  makeMarkStart(obj) {
    let startMark = {
      latlng: {
        latitude: obj.lat,
        longitude: obj.lng,
      },
      title: 'Pickup',
      description: 'location',
      pinColor: "#FF5A5F"
    };
    this.setState({startMark: startMark}, this.animateToNewRegion);
  }

  makeMarkEnd(obj) {
    let endMark = {
      latlng: {
        latitude: obj.lat,
        longitude: obj.lng,
      },
      title: 'Destination',
      description: 'location',
      pinColor: "#0B4F6C"
    };
    this.setState({endMark: endMark}, this.animateToNewRegion);
  }

  render() {
    let renderStart;
      if(this.state.startMark !== undefined){
        renderStart = (
          <MapView.Marker coordinate={this.state.startMark.latlng}
            title={this.state.startMark.title}
            description={this.state.startMark.description}
            pinColor={"#FF5A5F"}
          />
        );
      }
    let renderEnd;
      if(this.state.endMark !== undefined){
        renderEnd = (
          <MapView.Marker coordinate={this.state.endMark.latlng}
            title={this.state.endMark.title}
            description={this.state.endMark.description}
            pinColor={"#0B4F6C"}
          />
        );
      }
    let renderLine;
      if(this.state.line !== undefined){
        renderLine = (
          <MapView.Polyline
            coordinates={this.state.line.coordinates}
            strokeColor={"#0B4F6C"}
            fillColor={"#FF5A5F"}
            geodesic={true}
            lineDashPattern={[3,0,3]}
            miterLimit={1}
            strokeWidth={2}/>
        );
      }

    return (
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
          {renderStart}
          {renderLine}
          {renderEnd}

      </MapView.Animated>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFFCFB',
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
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#233D4D',
    // justifyContent: 'center'
    textAlign: 'center',
    top: 200,
    right: 0,
    left: 0,
    bottom: 0,
    marginTop: 12
  },
  button: {
    color: '#ABF2EB',
    fontSize: 18,
  },
  buttonContainer: {
    justifyContent: 'center',
    padding: 10,
    height: 76,
    width: 310,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#083f56',
    top: 212,
    right: 0,
    left: 0,
    bottom: 0
  }
});

export default MyMap;
