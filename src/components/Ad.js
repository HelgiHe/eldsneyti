import React from 'react';
import firebase from 'react-native-firebase';

const { Banner } = firebase.admob;
const { AdRequest } = firebase.admob;
const request = new AdRequest();
request.addKeyword();

export default function Ad() {
  return (
    <Banner
      unitId="ca-app-pub-3190884823397055/6161405638"
      size="BANNER"
      request={request.build()}
      onAdLoaded={() => {
        console.log('Advert loaded');
      }}
      onAdFailedToLoad={err => {
        console.log(err);
      }}
    />
  );
}
