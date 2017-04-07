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
    this.props.updateRiders(this.state.selectedOption);
  }

  render() {

    return (
      <SegmentedControls
          options={ options }
          onSelection={ this.setSelectedOption }
          selectedOption={this.state.selectedOption}
          textAlign={'center'}

          tint= {'#387691'}
          backTint= {'#EFFCFB'}

          selectedTint= {'#EFFCFB'}
          selectedBackgroundColor= {'#387691'}

          separatorTint= {'#387691'}
          separatorWidth= {0}

          containerBorderTint= {'#387691'}
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
