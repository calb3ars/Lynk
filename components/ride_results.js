import React, { Component } from 'react';
import LyftList from './lyft_list';
import UberList from './uber_list';
import * as Parsers from './data_parser';

import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';


export default class RideResults extends Component {

  render() {
    console.log(this.props.lyftRides);

    // let lyftData = {
    //   "cost_estimates": [
    //     {
    //       "ride_type": "lyft_plus",
    //       "estimated_duration_seconds": 913,
    //       "estimated_distance_miles": 3.29,
    //       "estimated_cost_cents_max": 2355,
    //       "primetime_percentage": "25%",
    //       "currency": "USD",
    //       "estimated_cost_cents_min": 1561,
    //       "display_name": "Lyft Plus",
    //       "primetime_confirmation_token": null,
    //       "is_valid_estimate": true
    //     },
    //     {
    //       "ride_type": "lyft_line",
    //       "estimated_duration_seconds": 913,
    //       "estimated_distance_miles": 3.29,
    //       "estimated_cost_cents_max": 475,
    //       "primetime_percentage": "0%",
    //       "currency": "USD",
    //       "estimated_cost_cents_min": 475,
    //       "display_name": "Lyft Line",
    //       "primetime_confirmation_token": null,
    //       "is_valid_estimate": true
    //     },
    //     {
    //       "ride_type": "lyft",
    //       "estimated_duration_seconds": 913,
    //       "estimated_distance_miles": 3.29,
    //       "estimated_cost_cents_max": 1755,
    //       "primetime_percentage": "25%",
    //       "currency": "USD",
    //       "estimated_cost_cents_min": 1052,
    //       "display_name": "Lyft",
    //       "primetime_confirmation_token": null,
    //       "is_valid_estimate": true
    //     }
    //   ]
    // }

    let uberData = {
      "prices": [
        {
          "localized_display_name": "POOL",
          "distance": 6.17,
          "display_name": "POOL",
          "product_id": "26546650-e557-4a7b-86e7-6a3942445247",
          "high_estimate": 15,
          "low_estimate": 13,
          "duration": 1080,
          "estimate": "$13-14",
          "currency_code": "USD"
        },
        {
          "localized_display_name": "uberX",
          "distance": 6.17,
          "display_name": "uberX",
          "product_id": "a1111c8c-c720-46c3-8534-2fcdd730040d",
          "high_estimate": 17,
          "low_estimate": 13,
          "duration": 1080,
          "estimate": "$13-17",
          "currency_code": "USD"
        },
        {
          "localized_display_name": "uberXL",
          "distance": 6.17,
          "display_name": "uberXL",
          "product_id": "821415d8-3bd5-4e27-9604-194e4359a449",
          "high_estimate": 26,
          "low_estimate": 20,
          "duration": 1080,
          "estimate": "$20-26",
          "currency_code": "USD"
        },
        {
          "localized_display_name": "SELECT",
          "distance": 6.17,
          "display_name": "SELECT",
          "product_id": "57c0ff4e-1493-4ef9-a4df-6b961525cf92",
          "high_estimate": 38,
          "low_estimate": 30,
          "duration": 1080,
          "estimate": "$30-38",
          "currency_code": "USD"
        },
        {
          "localized_display_name": "BLACK",
          "distance": 6.17,
          "display_name": "BLACK",
          "product_id": "d4abaae7-f4d6-4152-91cc-77523e8165a4",
          "high_estimate": 43,
          "low_estimate": 43,
          "duration": 1080,
          "estimate": "$43.10",
          "currency_code": "USD"
        },
        {
          "localized_display_name": "SUV",
          "distance": 6.17,
          "display_name": "SUV",
          "product_id": "8920cb5e-51a4-4fa4-acdf-dd86c5e18ae0",
          "high_estimate": 63,
          "low_estimate": 50,
          "duration": 1080,
          "estimate": "$50-63",
          "currency_code": "USD"
        },
        {
          "localized_display_name": "ASSIST",
          "distance": 6.17,
          "display_name": "ASSIST",
          "product_id": "ff5ed8fe-6585-4803-be13-3ca541235de3",
          "high_estimate": 17,
          "low_estimate": 13,
          "duration": 1080,
          "estimate": "$13-17",
          "currency_code": "USD"
        },
        {
          "localized_display_name": "WAV",
          "distance": 6.17,
          "display_name": "WAV",
          "product_id": "2832a1f5-cfc0-48bb-ab76-7ea7a62060e7",
          "high_estimate": 33,
          "low_estimate": 25,
          "duration": 1080,
          "estimate": "$25-33",
          "currency_code": "USD"
        },
        {
          "localized_display_name": "TAXI",
          "distance": 6.17,
          "display_name": "TAXI",
          "product_id": "3ab64887-4842-4c8e-9780-ccecd3a0391d",
          "high_estimate": null,
          "low_estimate": null,
          "duration": 1080,
          "estimate": "Metered",
          "currency_code": null
        }
      ]
    }

    // let lyftRides = Parsers.LyftParser(lyftData);
    let uberRides = Parsers.UberParser(uberData);

    return (
      <View style={styles.rideResults}>
        <LyftList style={[styles.rideResults, styles.lyftList]} rides={this.props.lyftRides} />
        <UberList style={[styles.rideResults, styles.uberList]} rides={uberRides} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rideResults: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
});
