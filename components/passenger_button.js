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

  }

  render() {

    return (
      <SegmentedControls
          options={ options }
          onSelection={ this.setSelectedOption }
          selectedOption={this.state.selectedOption}
          textAlign={'center'}

          tint= {'#FF5A5F'}
          backTint= {'#0B4F6C'}

          selectedTint= {'#0B4F6C'}
          selectedBackgroundColor= {'#D6FFE7'}

          separatorTint= {'#083f56'}
          separatorWidth= {2}

          containerBorderTint= {'#083f56'}
          containerBorderWidth= {2}
          containerBorderRadius= {4}

          optionStyle={{
            fontSize: 20,
            fontWeight: 'bold',
            padding: 10,
            shadowColor: '#083f56',
            shadowOffset: {
              height: 2
            },
            shadowOpacity: 0.075,
          }}

          containerStyle= {{
            marginLeft: 10,
            marginRight: 10,
          }}
        />
    );
  }
}

const styles = StyleSheet.create({
  passengerContainerStyle: {
    // position: 'absolute',
    marginTop: 40,
    height: 50,
    width: 400,
    borderRadius: 0,
    marginLeft: 8,
  },

});

export default PassengerButton;
