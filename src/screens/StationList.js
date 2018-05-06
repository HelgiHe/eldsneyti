// @flow

import React, { Component } from 'react';
import { View, FlatList, Text, StatusBar } from 'react-native';
import { sortBy } from 'lodash';
import { SafeAreaView } from 'react-navigation';

import { listStyle } from '../styles';
import styles from '../styles/stationScreen';
import ListItem from '../components/ListItem';
import Container from '../components/Container';
import Ad from '../components/Ad';

type Props = {
  gasType: string,
  sortMethod: string,
  loading: boolean,
  stations: Array<object>,
  settings: object,
  getData: () => void,
};

class StationList extends Component<Props> {
  static navigationOptions = {
    title: 'Stöðvar',
  };
  constructor(props) {
    super(props);
    this.state = { month: '', day: '' };
  }
  componentDidMount() {
    this.getDate();

    StatusBar.setHidden(true);
  }
  getDate() {
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    this.setState({ month, day });
  }

  render() {
    const { loading } = this.props.stations;
    const { gasType, sortMethod } = this.props.settings;
    const { month, day } = this.state;
    const sortedBy = sortMethod === 'company' ? 'company' : 'bensin95';
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#233446' }}>
        <View style={{ width: '100%', height: 70, backgroundColor: '#233446' }}>
          <Ad />
          <View
            style={{
              marginRight: 5,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}
          >
            <Text style={styles.textStyle}>{`${day}/${month}`}/2018</Text>
          </View>
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
          onRefresh={() => {
            this.getDate();
            this.props.getData();
          }}
          refreshing={loading}
          data={sortBy(this.props.stations.stations, [sortedBy], sortedBy)}
          renderItem={({ item }) => {
            return (
              <ListItem
                company={item.company}
                price={gasType === '95' ? item.bensin95 : item.diesel}
                discount={
                  gasType === '95'
                    ? item.bensin95_discount
                    : item.diesel_discount
                }
                name={item.name}
                currency="kr."
              />
            );
          }}
        />
      </SafeAreaView>
    );
  }
}

// wrap the compoennt in the Hoc to receive it's props
export default Container(StationList);
