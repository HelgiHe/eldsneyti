// @flow

import React, { Component } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import Container from '../components/Container';
import Ad from '../components/Ad';
import styles from '../styles/map';

type Props = {
  setLocation: () => void,
  location: object,
  stations: object,
};

class Map extends Component<Props> {
  componentDidMount() {
    const { setLocation } = this.props;
    // navigator is a global object and is safe for eslint to ignore
    // eslint-disable-next-line
    // navigator.geolocation.getCurrentPosition(position => {
    //   const { latitude, longitude } = position.coords;
    //   setLocation({ latitude, longitude });
    // });
    // use this for testing on simulator
    setLocation({ latitude: 64.14688, longitude: -21.89802 });
  }

  renderMarkers() {
    const { stations } = this.props.stations;
    return stations.map(item => {
      return (
        <Marker
          key={item.key}
          coordinate={{
            longitude: item.geo.lon,
            latitude: item.geo.lat,
          }}
        />
      );
    });
  }

  render() {
    // create a loading indicator when the user location is being fetched
    const { latitude, longitude } = this.props.stations.location;

    return (
      <View style={styles.mapContainer}>
        <Ad />
        <View style={{ position: 'relative', height: 500 }}>
          <MapView
            style={styles.mapStyle}
            initialRegion={{
              latitude,
              longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>
      </View>
    );
  }
}

export default Container(Map);
