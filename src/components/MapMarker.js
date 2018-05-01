// @flow

import React from 'react';
import { View } from 'react-native';
import { Marker } from 'react-native-maps';

import markerStyle from '../styles/mapmarker';

function markerBackground(company) {
  switch (company) {
    case 'Atlantsolía':
      return '#03adef';
    case 'Costco Iceland':
      return '#326699';
    case 'Dælan':
    case 'N1':
      return '#df042b';
    case 'Orkan X':
    case 'Orkan':
      return '#ec028c';
    case 'ÓB':
      return '#ffe202';
    case 'Olís':
      return '#00963e';
    default:
      return '#fff';
  }
}

function MapMarker({ item }: { item: object }) {
  return (
    <Marker
      coordinate={{
        longitude: item.geo.lon,
        latitude: item.geo.lat,
      }}
      flat
      title={item.company}
      description={item.bensin95.toString()}
    >
      <View
        style={[
          markerStyle,
          { backgroundColor: markerBackground(item.company) },
        ]}
      />
    </Marker>
  );
}

export default MapMarker;
