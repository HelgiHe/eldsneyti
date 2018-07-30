// @flow

import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { sortBy } from 'lodash';
import { SafeAreaView } from 'react-navigation';

import { getData } from '../actions';
import { listStyle, ScreenContainer } from '../styles';
import styles from '../styles/stationScreen';
import ListItem from '../components/ListItem';
import Ad from '../components/Ad';

type Props = {
  gasType: string,
  sortMethod: string,
  loading: boolean,
  stations: Array<object>,
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
    this.props.getData();
    this.getDate();
  }
  getDate() {
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    this.setState({ month, day });
  }

  render() {
    const { stations, loading, gasType, sortMethod } = this.props;
    const { month, day } = this.state;
    const sortedBy = sortMethod === 'company' ? 'company' : 'bensin95';
    return (
      <SafeAreaView style={ScreenContainer}>
        <View style={styles.container}>
          <Ad />
          <View
            style={styles.dateContainer}
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
          initialNumToRender={30}
          onRefresh={() => {
            this.getDate();
            this.props.getData();
          }}
          refreshing={loading}
          data={sortBy(stations, [sortedBy], sortedBy)}
          renderItem={({ item, index }) => {
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
                background={index % 2 === 0 ? '#fff' : '#235789'}
                textColor={index % 2 === 0 ? '#000' : '#fff'}
              />
            );
          }}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = ({ allStations, settings }) => {
  const { stations, loading } = allStations;
  const { gasType, sortMethod } = settings;

  return { stations, loading, gasType, sortMethod };
};

// wrap the compoennt in the Hoc to receive it's props
export default connect(mapStateToProps, { getData })(StationList);
