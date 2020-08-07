import React, { Component } from 'react';
import { View, Text, Linking } from 'react-native';

import Ad from '../components/Ad';
import { ScreenContainer, basicTextStyles } from '../styles/common';
import styles from '../styles/infoScreenStyle';

export default class InfoScreen extends Component {
  openLink() {
    const gasVaktin = 'https://github.com/gasvaktin/gasvaktin';

    Linking.openURL(gasVaktin).catch(err =>
      console.error('An error occurred', err)
    );
  }

  render() {
    return (
      <View style={ScreenContainer}>
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <Ad />
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Upplýsingar</Text>
          </View>
          <View style={styles.contentContainer}>
            <View>
              <Text style={{ fontSize: 16, marginBottom: 20 }}>
                Þetta smáforrit sýnir verð á bensíni á flestum bensínstöðvum
                landsins.
              </Text>
              <Text>
                <Text style={basicTextStyles}>
                  Upplýsingar í apppinu byggja á opnum gögnum frá,
                </Text>
                <Text
                  onPress={this.openLink.bind(this)}
                  style={styles.linkStyle}
                >
                  {' '}
                  gasvaktin.
                </Text>
              </Text>
              <Text style={basicTextStyles}>
                Smáforritið er eingöngu ætlað til viðmunaðar og engin ábyrgð
                tekin á þeim upplýsingum sem koma fram, enda geta eldsneytisverð
                breyst með litlum fyrirvara
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
