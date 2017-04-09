import React, { Component } from 'react';
// import SegmentedControlTab from 'react-native-segmented-control-tab';
import { SegmentedControls } from 'react-native-radio-buttons';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const options = [
  '1 - 2',
  '3 - 4',
  '5+'
];

class PassengerButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: options[0]
    };
      this.setSelectedOption = this.setSelectedOption.bind(this);
    this.setState.bind(this);
  }

  // handleIndexChange = (index) => {
  //   this.setState({
  //     ...this.state,
  //     selectedIndex: index,
  //   });
  // }


  setSelectedOption(option) {
    this.setState({
      selectedOption: option
    });
    this.props.updateRiders(option);
  }

  render() {

    return (
      <SegmentedControls
          options={ options }
          onSelection={ this.setSelectedOption }
          selectedOption={this.state.selectedOption}
          textAlign={'center'}

          tint= {'#0B4F6C'}
          backTint= {'#EFFCFB'}

          selectedTint= {'#EFFCFB'}
          selectedBackgroundColor= {'#0B4F6C'}

          separatorTint= {'#0B4F6C'}
          separatorWidth= {1}

          containerBorderTint= {'#0B4F6C'}
          containerBorderWidth= {0}
          containerBorderRadius= {0}

          optionStyle={{
            fontSize: 14,
            // fontWeight: 'bold',
            padding: 5,
            // shadowColor: '#083f56',
            // shadowOffset: {
            //   height: 2
            // },
            // shadowOpacity: 0.1,
            // fontFamily: 'Avenir-Medium'
          }}


        />
    );
  }
}

const styles = StyleSheet.create({
  passengerContainerStyle: {
    height: 40,
  },

});

export default PassengerButton;
