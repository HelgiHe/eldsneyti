// @flow

import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';

import { listStyle } from '../styles';
import styles from '../styles/stationScreen';
import ListItem from '../components/ListItem';
import Container from '../components/Container';
import Ad from '../components//Ad';

type Props = {
  stations: Array<object>,
  // getData: () => void,
};

class StationList extends Component<Props> {
  static navigationOptions = {
    title: 'Stöðvar',
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ width: '100%', height: 70, backgroundColor: '#233446' }}>
          <Ad />
        </View>
        <View style={styles.listItemContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Fyrirtæki, </Text>
            <Text style={styles.textStyle}>staðs. </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>verð </Text>
            <Text style={styles.textStyle}>(m.Afsl.)</Text>
          </View>
        </View>
        <FlatList
          style={listStyle}
          data={this.props.stations.stations}
          renderItem={({ item }) => {
            return (
              <ListItem
                company={item.company}
                price={item.bensin95}
                discount={item.bensin95_discount}
                name={item.name}
                currency="kr."
              />
            );
          }}
        />
      </View>
    );
  }
}

// wrap the compoennt in the Hoc to receive it's props
export default Container(StationList);
