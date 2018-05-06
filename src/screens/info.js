import React, { Component } from 'react';
import { View, Text, Linking } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import Ad from '../components/Ad';

export default class InfoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { gasVaktin: 'https://github.com/gasvaktin/gasvaktin' };
  }
  openLink() {
    const { gasVaktin } = this.state;
    // eslint-disable-next-line
    Linking.openURL(gasVaktin).catch(
      err => console.error('An error occurred', err)
      // eslint-disable-next-line
    );
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#233446' }}>
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <Ad />
          <View
            style={{
              width: '100%',
              height: 41.4,
              backgroundColor: '#233446',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                fontWeight: '700',
                paddingBottom: 3,
              }}
            >
              Upplýsingar
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#fff',
              marginTop: 20,
              flex: 1,
              padding: 10,
            }}
          >
            <View>
              <Text style={{ fontSize: 16, marginBottom: 20 }}>
                Þetta smáforrit sýnir verð á bensíni á flestum bensínstöðvum
                landsins.
              </Text>
              <Text>
                <Text style={{ fontSize: 16 }}>
                  Upplýsingar í apppinu byggja á opnum gögnum frá,
                </Text>
                <Text
                  onPress={this.openLink.bind(this)}
                  style={{ color: '#0000EE', fontSize: 16 }}
                >
                  {' '}
                  gasvaktin.
                </Text>
              </Text>
              <Text style={{ fontSize: 16 }}>
                Smáforritið er eingöngu ætlað til viðmunaðar og engin ábyrgð
                tekin á þeim upplýsingum sem koma fram, enda geta eldsneytisverð
                breyst með litlum fyrirvara
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
