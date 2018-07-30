// @flow

import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';

import { setLocation } from '../actions';
import MapMarker from '../components/MapMarker';
import Ad from '../components/Ad';
import styles from '../styles/map';
import { basicContainer } from '../styles/common';

type Props = {
  setLocation: () => void,
  location: object,
  stations: object,
};

class Map extends Component<Props> {
  static navigationOptions = {
    title: 'Map',
  };
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentWillMount() {
    this.currentLocation();
  }

  currentLocation() {
    // eslint-disable-next-line
    navigator.geolocation.getCurrentPosition(
      pos => {
        const { latitude, longitude } = pos.coords;
        this.props.setLocation({ lat: latitude, long: longitude });
        this.setState(() => ({
          loading: false
        }));
      },
      err => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
      },
    );
  }

  renderMarkers() {
    const { stations } = this.props;

    return stations.map(item => {
      return <MapMarker item={item} key={item.key} />;
    });
  }

  render() {
    const { lat, long } = this.props.location;
    const { loading } = this.state;
    if (loading) {
      return (
        <View>
          <ActivityIndicator size="large" color="#000" />
        </View>
      );
    }
    return (
      <View style={basicContainer}>
        <Ad />
        <View style={styles.mapContainer}>
          <MapView
            style={styles.mapStyle}
            showsUserLocation
            region={{
              latitude: lat,
              longitude: long,
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

const mapStateToProps = ({ allStations }) => {
  const { stations, location } = allStations;

  return { stations, location };
};

export default connect(mapStateToProps, { setLocation })(Map);

