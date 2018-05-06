import React from 'react';
import firebase from 'react-native-firebase';

import { View } from 'react-native';

const { Banner } = firebase.admob;
const { AdRequest } = firebase.admob;
const request = new AdRequest();
request.addKeyword();

export default function Ad() {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Banner
        unitId="ca-app-pub-3940256099942544/6300978111"
        size="BANNER"
        request={request.build()}
        onAdLoaded={() => {
          console.log('Advert loaded');
        }}
        onAdFailedToLoad={err => {
          console.log(err);
        }}
      />
    </View>
  );
}
