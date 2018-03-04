// @flow

import React, { Component } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import Container from '../components/Container';
import Ad from '../components/Ad';
import styles from '../styles/map';

type Props = {
  getUserLocation: () => void,
  location: object,
  stations: object,
};

class Map extends Component<Props> {
  componentDidMount() {
    const { getUserLocation } = this.props;
    getUserLocation();
  }

  // chnage this to match the current  store
  renderMakers() {
    const { items } = this.props.store;
    return items.map(item => {
      return (
        <MapView.Marker
          coordinate={{
            longitude: item.geo.lon,
            latitude: item.geo.lat,
          }}
        />
      );
    });
  }

  render() {
    const { location, stations } = this.props.stations;

    return (
      <View style={styles.mapContainer}>
        <Ad />
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onRegionChange
        />
      </View>
    );
  }
}

export default Container(Map);
