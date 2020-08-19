// @flow

import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { sortBy } from 'lodash';
import Geolocation from '@react-native-community/geolocation';

import { check, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { getData, setLocation, filterByDistance } from '../actions';
import { listStyle, ScreenContainer } from '../styles';
import styles from '../styles/stationScreen';
import ListItem from '../components/ListItem';
import Ad from '../components/Ad';
import { getDistanceFromLatLonInKm } from '../lib';

type Props = {
  distanceFilter: string,
  gasType: string,
  sortMethod: string,
  loading: boolean,
  location: object,
  stations: Array<object>,
  getData: () => void,
  setLocation: () => object,
};

class StationList extends Component<Props> {
  static navigationOptions = {
    title: 'Stöðvar',
  };
  constructor(props) {
    super(props);
    this.state = { month: '', day: '', year: '' };
  }
  componentDidMount() {
    this.requestPosition();
    this.props.getData();
    this.getDate();
  }

  componentDidUpdate(prevState, prevProps) {
    if (this.props.location !== prevProps.location) {
      this.filterByDistance();
    }
  }

  requestPosition() {
    Geolocation.getCurrentPosition(
      pos => {
        const { latitude, longitude } = pos.coords;
        this.props.setLocation({ lat: latitude, long: longitude });
      },
      err => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
      }
    );
  }

  filterByDistance() {
    check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
      .then(result => {
        if (result === 'granted') {
          const { distanceFilter, stations, location } = this.props;
          if (!stations.length) {
            return;
          }
          // lat1, lon1, lat2, lon2
          const { lat, long } = location;
          const filteredStations = stations.filter(station => {
            const dist = getDistanceFromLatLonInKm(
              lat,
              long,
              station.geo.lat,
              station.geo.lon
            );
            return dist < distanceFilter;
          });
          this.props.filterByDistance(filteredStations);
          console.log(filteredStations);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  getDate() {
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    const year = new Date().getFullYear();
    this.setState({ month, day, year });
  }

  render() {
    const { stations, loading, gasType, sortMethod } = this.props;
    const { month, day, year } = this.state;
    const sortedBy = sortMethod === 'company' ? 'company' : 'bensin95';

    return (
      <View style={ScreenContainer}>
        <Ad />
        <View style={styles.dateContainer}>
          <Text style={styles.textStyle}>{`${day}/${month}/${year}`}</Text>
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
      </View>
    );
  }
}

const mapStateToProps = ({ allStations, settings }) => {
  const { stations, loading, location } = allStations;
  const { gasType, sortMethod, distanceFilter } = settings;

  return { stations, location, distanceFilter, loading, gasType, sortMethod };
};

// wrap the compoennt in the Hoc to receive it's props
export default connect(mapStateToProps, {
  filterByDistance,
  getData,
  setLocation,
})(StationList);
