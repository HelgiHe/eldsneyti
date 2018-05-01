// @flow

import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import MapView from 'react-native-maps';

import MapMarker from '../components/MapMarker';
import Container from '../components/Container';
import Ad from '../components/Ad';
import styles from '../styles/map';

type Props = {
  setLocation: () => void,
  loadingLocation: boolean,
  location: object,
  stations: object,
};

class Map extends Component<Props> {
  static navigationOptions = {
    title: 'Map',
  };
  componentWillMount() {
    const { setLocation } = this.props;
    // navigator is a global object and is safe for eslint to ignore
    // eslint-disable-next-line
    // navigator.geolocation.getCurrentPosition(position => {
    //   const { latitude, longitude } = position.coords;
    //   setLocation({ latitude, longitude });
    // });
    // use this for testing on simulator
    setLocation({ latitude: 64.1468, longitude: -21.898 });
  }

  renderMarkers() {
    const { stations } = this.props;
    const gasStations = stations.stations;

    return gasStations.map(item => {
      return <MapMarker item={item} key={item.key} />;
    });
  }

  render() {
    // create a loading indicator when the user location is being fetched
    const { latitude, longitude } = this.props.stations.location;
    const { loadingLocation } = this.props;
    if (loadingLocation) {
      return (
        <View>
          <ActivityIndicator size="large" color="#000" />
        </View>
      );
    }
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
          >
            {this.renderMarkers()}
          </MapView>
        </View>
      </View>
    );
  }
}

export default Container(Map);
