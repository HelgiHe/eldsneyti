import React from 'react';
import firebase from 'react-native-firebase';

import { View } from 'react-native';

const { Banner } = firebase.admob;
const { AdRequest } = firebase.admob;
const request = new AdRequest();
request.addKeyword();

export default function Ad() {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#233446',
      }}
    >
      <Banner
        unitId="ca-app-pub-3190884823397055/3377607420"
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
