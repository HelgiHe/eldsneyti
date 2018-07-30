// @flow

import React from 'react';
import { View } from 'react-native';
import { Marker } from 'react-native-maps';

import markerBackground from '../Util/Markerbck';
import markerStyle from '../styles/mapmarker';

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
