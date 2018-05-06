import React, { Component } from 'react';
import { View, Text, Linking } from 'react-native';

import Ad from '../components/Ad';

export default class InfoScreen extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            width: '100%',
            height: 91,
            backgroundColor: '#233446',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Ad />
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              fontWeight: '700',
              marginBottom: 2,
            }}
          >
            Upplýsingar
          </Text>
        </View>
        <View style={{ marginTop: 20, flex: 1, padding: 10 }}>
          <View>
            <Text style={{ fontSize: 16, marginBottom: 20 }}>
              Þetta smáforrit sýnir verð á bensín á flestum bensínstöðvum
              landsins.
            </Text>
            <Text style={{ fontSize: 16 }}>
              Forritið sækir gögn frá LINK
              https://github.com/gasvaktin/gasvaktin LINK smáforriti er ætlað
              til viðmunaðar, enda geta eldsneytisverð breyst með litlum
              fyrirvara
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
