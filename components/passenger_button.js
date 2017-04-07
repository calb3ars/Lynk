import React, { Component } from 'react';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';


class PassengerButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  handleIndexChange = (index) => {
    this.setState({
      ...this.state,
      selectedIndex: index,
    });
  }

  render() {
    return (
        <SegmentedControlTab
          values={['1-2', '3-4', '5+']}
          selectedIndex={this.state.selectedIndex}
          onTabPress={this.handleIndexChange}
          tabsContainerStyle={styles.passengerContainerStyle}
          tint={'#D6FFE7'}
          optionStyles={{fontFamily: 'AvenirNext-Medium'}}
        />
    );
  }
}

const styles = StyleSheet.create({
  passengerContainerStyle: {
    position: 'absolute',
    marginTop: 400,
    height: 50,
    width: 360,
    borderRadius: 0,
    marginLeft: 8,
  },

});

export default PassengerButton;
