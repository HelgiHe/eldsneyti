import React, { Component } from 'react';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/admob';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';

import { View, Text } from 'react-native';
import { mainColor } from '../styles';

// const { Banner } = firebase.admob;
// const { AdRequest } = firebase.admob;
// const request = new AdRequest();
// request.addKeyword();

export default class Ad extends Component {
  constructor(props) {
    super(props);
    this.state = { success: true };
  }

  // fetchAdSuccess() {
  //   this.setState(() => ({
  //     success: true,
  //   }));
  // }

  // fetchAdFail() {
  //   this.setState(() => ({
  //     success: false,
  //   }));
  // }

  render() {
    const { success } = this.state;
    if (success) {
      return (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: mainColor,
          }}
        >
          <BannerAd
            unitId="ca-app-pub-3190884823397055/6161405638"
            size={BannerAdSize.BANNER}
            requestOptions={{
              requestNonPersonalizedAdsOnly: true,
            }}
          />
        </View>
      );
    }
    return null;
  }
}
